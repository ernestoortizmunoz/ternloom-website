import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// A removed skip target, duplicate main, lost navigation or indexing override
// must fail against the rendered page, not merely its component source.
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
assert.match(html, /<html lang="en-CA"/);
assert.match(html, /<link rel="canonical" href="https:\/\/ternloom\.com\/"/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
assert.equal([...html.matchAll(/<main\b/g)].length, 1, 'Exactly one main landmark');
assert.match(html, /<a[^>]*href="#main-content"[^>]*>Skip to content<\/a>/);
assert.match(html, /<main[^>]*id="main-content"[^>]*tabindex="-1"/);
assert.match(html, /<header\b/);
assert.match(html, /<footer\b/);
assert.match(html, /aria-label="Primary"/);
for (const href of ['/services/website-development/', '/services/custom-business-software/', '/services/business-automation-integrations/', '/projects/', '/about/', '/contact/']) {
  assert.ok(html.includes(`href="${href}"`), `Navigation missing ${href}`);
}
assert.doesNotMatch(html, /<script\b(?![^>]*type="application\/ld\+json")/i, 'No executable client JavaScript');
assert.doesNotMatch(html, /mailto:|<form\b|fonts\.googleapis|fonts\.gstatic/i);
assert.match(html, /<meta name="description" content="[^"]+"/);
assert.match(html, /<meta property="og:url" content="https:\/\/ternloom\.com\/"/);
console.log('Shell checks passed: language, canonical, noindex, one main, working skip target, static navigation, social metadata, no active contact or remote fonts.');
