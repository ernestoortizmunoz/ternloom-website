import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const route = new URL('../dist/services/website-development/index.html', import.meta.url);
const html = await readFile(route, 'utf8').catch((error) => {
  assert.fail(`Website Development route must be built: ${error.code}`);
});
const text = html.replace(/<[^>]+>/g, ' ').replaceAll('&amp;', '&').replace(/\s+/g, ' ');
const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
assert.equal(headings.length, 1, 'Service page requires exactly one H1');
assert.equal(headings[0][1], 'Website Development');
assert.match(html, /<link rel="canonical" href="https:\/\/ternloom.com\/services\/website-development\/"/);
assert.match(html, /aria-label="Breadcrumb"/);
assert.match(html, /<span[^>]*aria-current="page"[^>]*>Website Development<\/span>/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
for (const [id, name, url] of [
  ['bonita-nights', 'Bonita Nights', 'https://www.bonitanights.ca/'],
  ['wood-dust-creations', 'Wood Dust Creations', 'https://www.wooddustcreations.ca/'],
]) {
  const article = html.match(new RegExp(`<article[^>]*data-project="${id}"[\\s\\S]*?<\\/article>`))?.[0];
  assert.ok(article, `Relevant evidence missing: ${name}`);
  assert.ok(article.includes('Technology provider'));
  assert.ok(article.includes(`href="${url}"`));
  assert.match(article, /<img[^>]*alt="[^"]+"[^>]*width="\d+"[^>]*height="\d+"/);
}
for (const section of ['service-fit', 'service-deliverables', 'service-boundaries', 'service-evidence', 'service-process', 'service-questions']) {
  assert.ok(html.includes(`id="${section}"`), `Missing service narrative: ${section}`);
}
assert.match(text, /A booking request is not a confirmed reservation/);
assert.match(text, /does not establish live inventory synchronization or automated fulfilment/);
assert.match(text, /Provider fees, domains, email/);
assert.match(text, /Can you work with an existing website\?/);
assert.match(text, /We start by reviewing what is working/);
assert.match(html, /href="\/contact\/"/);
assert.doesNotMatch(text, /\b(?:guaranteed rankings|free hosting|24\/7 support|increased conversions by|saved \d+|delivered in \d+)\b/i);
assert.doesNotMatch(html, /mailto:|<form\b|<script\b(?![^>]*type="application\/ld\+json")/i);
console.log('Website service checks passed: route, H1, canonical, breadcrumb, bounded project evidence, static narrative and noindex.');
