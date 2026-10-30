import assert from 'node:assert/strict';
import test from 'node:test';
import { getPublicationState } from '../src/config/publication.ts';
import { site } from '../src/config/site.ts';
import { projects } from '../src/data/projects.ts';

const approvedProjects = projects.map((project) => ({ ...project, copyApproved: true, image: { ...project.image, approved: true } }));

const ready = {
  ...site,
  contact: { email: 'test@example.invalid' },
  contactForm: { tallyId: 'dbEbrd' },
  privacy: { enquiryRetentionMonths: 12 },
  readiness: {
    contactConfirmed: true,
    contactFormReady: true,
    privacyNoticeApproved: true,
    projectCopyApproved: true,
    projectAssetsApproved: true,
  },
};

test('default builds remain noindex, even when all release gates are ready', () => {
  assert.deepEqual(getPublicationState(site, false), { noindex: true });
  assert.deepEqual(getPublicationState(ready, false), { noindex: true });
});

test('release requires a contact even when readiness flags are true', () => {
  assert.throws(() => getPublicationState({ ...ready, contact: null }, true), /contact/i);
});

test('release rejects an empty contact address', () => {
  assert.throws(() => getPublicationState({ ...ready, contact: { email: '  ' } }, true), /contact/i);
});

for (const gate of ['contactConfirmed', 'contactFormReady', 'privacyNoticeApproved', 'projectCopyApproved', 'projectAssetsApproved']) {
  test(`release requires ${gate}`, () => {
    assert.throws(() => getPublicationState({
      ...ready,
      readiness: { ...ready.readiness, [gate]: false },
    }, true), new RegExp(gate));
  });
}

test('release rejects a missing or empty form even when approvals are true', () => {
  for (const contactForm of [null, { tallyId: ' ' }]) {
    assert.throws(() => getPublicationState({ ...ready, contactForm }, true, approvedProjects), /contactForm/i);
  }
});

test('release rejects an unconfirmed or invalid retention period', () => {
  for (const enquiryRetentionMonths of [null, 0, -1, 1.5]) {
    assert.throws(() => getPublicationState({ ...ready, privacy: { enquiryRetentionMonths } }, true, approvedProjects), /retention/i);
  }
});

test('explicit release with every prerequisite permits indexing', () => {
  assert.deepEqual(getPublicationState(ready, true, approvedProjects), { noindex: false });
});

test('global readiness cannot override real unapproved project copy or images', () => {
  const unapproved = approvedProjects.map((project) => project.id === 'bonita-nights' ? { ...project, copyApproved: false } : project);
  assert.throws(() => getPublicationState(ready, true, unapproved), /bonita-nights.*copyApproved/);
});

for (const gate of ['copy', 'image']) {
  test(`each project requires approved ${gate} independently of global readiness`, () => {
    for (const project of approvedProjects) {
      const candidate = approvedProjects.map((item) => item.id !== project.id ? item : {
        ...item, ...(gate === 'copy' ? { copyApproved: false } : { image: { ...item.image, approved: false } }),
      });
      assert.throws(() => getPublicationState(ready, true, candidate), new RegExp(project.id));
    }
  });
}
