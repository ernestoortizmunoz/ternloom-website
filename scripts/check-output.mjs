import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const args = process.argv.slice(2);
assert.deepEqual(args, ['--stage', 'setup'], 'Use --stage setup; website validation is added with the designed website.');
const output = new URL('../dist/', import.meta.url);
const files = (await readdir(output, { recursive: true })).filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(files, ['404.html', 'index.html'], 'Setup must contain only its two fixtures.');
for (const file of files) {
  const html = await readFile(new URL(file, output), 'utf8');
  assert.match(html, /<html lang="en-CA"/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `${file}: canonical required`);
  assert.equal(canonical[1], file === 'index.html' ? 'https://ternloom.com/' : 'https://ternloom.com/404/');
  assert.doesNotMatch(html, /mailto:|<form\b/i, `${file}: contact actions are not approved`);
  assert.doesNotMatch(html, /<script\b/i, `${file}: setup needs no client JavaScript`);
  if (file === 'index.html') {
    const names = [...html.matchAll(/<li data-service="[^"]+">([^<]+)<\/li>/g)].map((match) => match[1].replaceAll('&amp;', '&'));
    assert.deepEqual(names, ['Website Development', 'Custom Business Software', 'Business Automation & Integrations']);
    assert.match(html, /unfinished local setup/);
  }
}
console.log('Output checks passed: setup (2 noindex fixtures, canonical host, 3 services, no active enquiry or client JavaScript).');
