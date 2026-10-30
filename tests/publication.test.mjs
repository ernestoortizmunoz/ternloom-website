import assert from 'node:assert/strict';
import test from 'node:test';
import { getPublicationState } from '../src/config/publication.ts';
import { site } from '../src/config/site.ts';

const ready = {
  ...site,
  contact: { email: 'test@example.invalid' },
  readiness: {
    contactConfirmed: true,
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

for (const gate of ['contactConfirmed', 'projectCopyApproved', 'projectAssetsApproved']) {
  test(`release requires ${gate}`, () => {
    assert.throws(() => getPublicationState({
      ...ready,
      readiness: { ...ready.readiness, [gate]: false },
    }, true), new RegExp(gate));
  });
}

test('explicit release with every prerequisite permits indexing', () => {
  assert.deepEqual(getPublicationState(ready, true), { noindex: false });
});
