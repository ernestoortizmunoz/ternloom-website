import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { site } from '../src/config/site.ts';
import { services } from '../src/data/services.ts';

const html = await readFile(new URL('../dist/contact/index.html', import.meta.url), 'utf8').catch((error) => {
  assert.fail(`Contact route must be built: ${error.code}`);
});
assert.equal(site.contact, null, 'Real contact remains unconfirmed');
const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
assert.ok(main);
assert.equal([...main.matchAll(/<h1\b/g)].length, 1);
assert.match(main, /Contact details are not yet available/);
assert.match(main, /local draft/i);
for (const topic of ['Your business', 'Your current tools', 'What you want to change', 'What happens next']) assert.ok(main.includes(topic));
for (const service of services) {
  assert.ok(main.includes(`href="${service.path}"`));
  await access(new URL(`../dist${service.path}index.html`, import.meta.url));
}
assert.match(html, /<link rel="canonical" href="https:\/\/ternloom.com\/contact\/"/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
assert.match(html, /<header\b/);
assert.match(html, /<footer\b/);
assert.doesNotMatch(html, /mailto:|<form\b|<button\b|<iframe\b|<script\b(?![^>]*type="application\/ld\+json")/i);
console.log('Contact output checks passed: honest draft, enquiry guidance, service links, shell and no active enquiry.');
