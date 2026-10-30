import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/services/custom-business-software/index.html', import.meta.url), 'utf8').catch((error) => {
  assert.fail(`Custom Business Software route must be built: ${error.code}`);
});
const text = html.replace(/<[^>]+>/g, ' ').replaceAll('&amp;', '&').replace(/\s+/g, ' ');
const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
assert.equal(headings.length, 1);
assert.equal(headings[0][1], 'Custom Business Software');
assert.match(html, /<link rel="canonical" href="https:\/\/ternloom.com\/services\/custom-business-software\/"/);
assert.match(html, /aria-label="Breadcrumb"/);
assert.match(html, /aria-current="page"[^>]*>Custom Business Software<\/span>/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
const projects = [...html.matchAll(/<article[^>]*data-project="([^"]+)"[\s\S]*?<\/article>/g)];
assert.deepEqual(projects.map((project) => project[1]), ['turnory'], 'Only relevant software evidence belongs on this page');
assert.match(projects[0][0], /Ternloom’s own product/);
assert.match(projects[0][0], /application is currently in development/);
assert.match(projects[0][0], /not a completed commissioned software engagement/);
assert.match(projects[0][0], /href="https:\/\/turnory.racing\/"/);
for (const id of ['service-fit', 'service-deliverables', 'service-boundaries', 'service-evidence', 'service-process', 'service-questions']) {
  assert.ok(html.includes(`id="${id}"`), `Missing service section: ${id}`);
}
assert.match(text, /Potential deliverables/);
assert.match(text, /A project could include:/);
assert.match(text, /examples of possible tools, not a list of completed client projects/);
assert.match(text, /Should we use an existing product or build custom software\?/);
assert.match(text, /We first consider whether an existing tool/);
assert.match(text, /Can we start with one part of the workflow\?/);
assert.match(html, /href="\/contact\/"/);
assert.doesNotMatch(html, /mailto:|<form\b|<script\b(?![^>]*type="application\/ld\+json")/i);
console.log('Software service checks passed: route, metadata, static narrative, example boundaries and own-product development evidence.');
