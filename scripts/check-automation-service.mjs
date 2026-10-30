import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/services/business-automation-integrations/index.html', import.meta.url), 'utf8').catch((error) => {
  assert.fail(`Business Automation & Integrations route must be built: ${error.code}`);
});
const text = html.replace(/<[^>]+>/g, ' ').replaceAll('&amp;', '&').replace(/\s+/g, ' ');
const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
assert.equal(headings.length, 1);
assert.equal(headings[0][1].replaceAll('&amp;', '&'), 'Business Automation & Integrations');
assert.match(html, /<link rel="canonical" href="https:\/\/ternloom.com\/services\/business-automation-integrations\/"/);
assert.match(html, /aria-label="Breadcrumb"/);
assert.match(html, /aria-current="page"[^>]*>Business Automation &amp; Integrations<\/span>/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
const projects = [...html.matchAll(/<article[^>]*data-project="([^"]+)"[\s\S]*?<\/article>/g)];
assert.deepEqual(projects.map((project) => project[1]), ['bonita-nights', 'wood-dust-creations']);
for (const project of projects) assert.match(project[0], /Technology provider/);
assert.match(projects[0][0], /A booking request is not a confirmed reservation/);
assert.match(projects[0][0], /does not establish automated payments, inventory management or guaranteed availability/);
assert.match(projects[1][0], /Square-hosted checkout links/);
assert.match(projects[1][0], /Checkout takes place through Square/);
assert.match(projects[1][0], /does not establish live inventory synchronization or automated fulfilment/);
for (const id of ['service-fit', 'service-deliverables', 'service-boundaries', 'service-evidence', 'service-process', 'service-questions']) {
  assert.ok(html.includes(`id="${id}"`), `Missing service section: ${id}`);
}
assert.match(text, /Potential deliverables/);
assert.match(text, /A project could include:/);
assert.match(text, /possible workflows, not claims of completed automation projects/);
assert.match(text, /What happens if a connection fails\?/);
assert.match(text, /manual fallback/);
assert.match(html, /href="\/contact\/"/);
assert.doesNotMatch(html, /mailto:|<form\b|<iframe\b|<script\b(?![^>]*type="application\/ld\+json")/i);
console.log('Automation service checks passed: route, metadata, static content, potential-work boundaries and bounded integration evidence.');
