import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { services } from '../src/data/services.ts';

const output = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('404.html', output), 'utf8');
const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
assert.ok(main, '404 must use the shared main landmark');
assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
assert.match(main, /<h1\b[^>]*>Page not found<\/h1>/);
assert.match(main, /href="\/"/);
await access(new URL('index.html', output));
for (const service of services) {
  assert.ok(main.includes(`href="${service.path}"`));
  await access(new URL(`${service.path.slice(1)}index.html`, output));
}
assert.match(html, /<header\b/);
assert.match(html, /<footer\b/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
assert.doesNotMatch(html, /unfinished|setup page|successfully|<form\b|<script\b(?![^>]*type="application\/ld\+json")/i);
for (const file of await readdir(output, { recursive: true })) {
  if (/sitemap.*\.xml$/.test(file)) {
    const sitemap = await readFile(new URL(file, output), 'utf8');
    assert.doesNotMatch(sitemap, /<loc>[^<]*\/404(?:\/|\.html)?<\/loc>/i, '404 must stay out of every sitemap');
  }
}
console.log('404 output checks passed: shared shell, one H1, working recovery links, noindex and sitemap exclusion.');
