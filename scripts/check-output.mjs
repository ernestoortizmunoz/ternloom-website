import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const args = process.argv.slice(2);
const stage = args.length === 0 ? 'home' : args[1];
assert.ok(args.length === 0 || (args.length === 2 && args[0] === '--stage' && ['setup', 'home'].includes(stage)), 'Use --stage setup or --stage home.');
const output = new URL('../dist/', import.meta.url);
const files = (await readdir(output, { recursive: true })).filter((file) => file.endsWith('.html')).sort();
if (stage === 'setup') assert.deepEqual(files, ['404.html', 'index.html'], 'Setup must contain only its two fixtures.');
assert.ok(files.includes('index.html') && files.includes('404.html'), 'Home and 404 outputs required.');
for (const file of files) {
  const html = await readFile(new URL(file, output), 'utf8');
  assert.match(html, /<html lang="en-CA"/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `${file}: canonical required`);
  const pathname = file === '404.html' ? '/404/' : `/${file.replace(/index\.html$/, '')}`;
  assert.equal(canonical[1], `https://ternloom.com${pathname}`);
  assert.doesNotMatch(html, /mailto:|<form\b/i, `${file}: contact actions are not approved`);
  assert.doesNotMatch(html, /<script\b(?![^>]*type="application\/ld\+json")/i, `${file}: static pages need no client JavaScript`);
  if (stage === 'setup' && file === 'index.html') {
    const names = [...html.matchAll(/<li data-service="[^"]+">([^<]+)<\/li>/g)].map((match) => match[1].replaceAll('&amp;', '&'));
    assert.deepEqual(names, ['Website Development', 'Custom Business Software', 'Business Automation & Integrations']);
    assert.match(html, /unfinished local setup/);
  }
}
if (stage === 'home') {
  await import('./check-home.mjs');
  await import('./check-shell.mjs');
}
console.log(`Output checks passed: ${stage} (${files.length} noindex pages, canonical paths, no active enquiry or client JavaScript).`);
