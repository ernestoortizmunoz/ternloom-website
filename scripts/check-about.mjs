import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { site } from '../src/config/site.ts';
import { services } from '../src/data/services.ts';

const html = await readFile(new URL('../dist/about/index.html', import.meta.url), 'utf8').catch((error) => {
  assert.fail(`About route must be built: ${error.code}`);
});
const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
assert.ok(main);
assert.equal([...main.matchAll(/<h1\b/g)].length, 1);
assert.match(main, /<h1[^>]*>About Ternloom Technologies<\/h1>/);
assert.match(html, /<link rel="canonical" href="https:\/\/ternloom.com\/about\/"/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
assert.ok(main.includes(site.experienceStatement));
assert.match(main, /small businesses in Ottawa and across Canada/);
for (const service of services) {
  assert.ok(main.includes(`href="${service.path}"`), `Missing body link: ${service.name}`);
  assert.ok(main.includes(service.name.replaceAll('&', '&amp;')));
  await access(new URL(`../dist${service.path}index.html`, import.meta.url));
}
assert.match(main, /href="\/projects\/"/);
await access(new URL('../dist/projects/index.html', import.meta.url));
assert.match(main, /href="\/contact\/"/);
assert.match(html, /<footer\b/);
assert.doesNotMatch(html, /mailto:|<form\b|<script\b(?![^>]*type="application\/ld\+json")/i);
console.log('About checks passed: canonical, experience, audience, three body service links, selected work and static contact invitation.');
