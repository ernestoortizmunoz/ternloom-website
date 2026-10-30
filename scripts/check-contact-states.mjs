import assert from 'node:assert/strict';
import { mkdtemp, mkdir, copyFile, writeFile, readFile, symlink, rm, access, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'astro';

const component = new URL('../src/components/ContactDetails.astro', import.meta.url);
await access(component).catch(() => assert.fail('ContactDetails must render both confirmed and unfinished states'));
const fixture = await realpath(await mkdtemp(join(tmpdir(), 'ternloom-contact-')));
try {
  await mkdir(join(fixture, 'src/pages'), { recursive: true });
  await copyFile(component, join(fixture, 'src/ContactDetails.astro'));
  await symlink(fileURLToPath(new URL('../node_modules', import.meta.url)), join(fixture, 'node_modules'));
  await writeFile(join(fixture, 'package.json'), '{"type":"module"}');
  await writeFile(join(fixture, 'src/pages/index.astro'), `---
import ContactDetails from '../ContactDetails.astro';
---
<div id="confirmed"><ContactDetails contact={{ email: 'hello@example.test' }} confirmed={true} /></div>
<div id="unconfirmed"><ContactDetails contact={{ email: 'hidden@example.test' }} confirmed={false} /></div>
<div id="missing"><ContactDetails contact={null} confirmed={true} /></div>`);
  await build({ root: fixture, configFile: false, logLevel: 'error' });
  const html = await readFile(join(fixture, 'dist/index.html'), 'utf8');
  const state = (id) => html.match(new RegExp(`<div id="${id}">([\\s\\S]*?)<\\/div>`))?.[1];
  assert.match(state('confirmed'), /href="mailto:hello@example.test"/);
  assert.match(state('confirmed'), />hello@example.test<\/a>/);
  for (const id of ['unconfirmed', 'missing']) {
    assert.match(state(id), /Contact details are not yet available/);
    assert.doesNotMatch(state(id), /mailto:|example.test/);
  }
  assert.doesNotMatch(html, /<form\b|<button\b|<script\b/i);
  console.log('Contact fixture checks passed: confirmed email and inactive missing/unconfirmed contacts.');
} finally {
  await rm(fixture, { recursive: true, force: true });
}
