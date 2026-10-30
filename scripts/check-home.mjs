import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// These assertions catch lost approved copy, misleading project status, missing
// static destinations, or an illustration entering the accessibility tree.
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const text = html.replace(/<[^>]+>/g, ' ').replaceAll('&amp;', '&').replace(/\s+/g, ' ');
const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
assert.equal(h1.length, 1, 'Homepage must have exactly one H1');
assert.equal(h1[0][1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), 'Built around the way you work.');
assert.ok(text.includes('Built on more than 15 years of experience in IT and software development.'));
assert.ok(text.includes('Websites, custom software and connected tools for small businesses in Ottawa and across Canada.'));
for (const [id, name] of [
  ['website-development', 'Website Development'],
  ['custom-business-software', 'Custom Business Software'],
  ['business-automation-integrations', 'Business Automation & Integrations'],
]) {
  assert.ok(text.includes(name), `Missing formal service: ${name}`);
  assert.match(html, new RegExp(`<section[^>]*data-service="${id}"`));
  assert.ok(html.includes(`href="/services/${id}/"`));
}
for (const [id, name, url] of [
  ['bonita-nights', 'Bonita Nights', 'https://www.bonitanights.ca/'],
  ['wood-dust-creations', 'Wood Dust Creations', 'https://www.wooddustcreations.ca/'],
  ['turnory', 'Turnory', 'https://turnory.racing/'],
]) {
  const project = html.match(new RegExp(`<article[^>]*data-project="${id}"[\\s\\S]*?<\\/article>`))?.[0];
  assert.ok(project, `Missing project: ${name}`);
  assert.ok(project.includes(name));
  assert.ok(project.includes(`href="${url}"`));
  assert.ok(project.includes(id === 'turnory' ? 'Our own product' : 'Technology provider'));
  if (id === 'turnory') assert.match(project, /application in development/);
}
assert.match(html, /<svg[^>]*data-working-weave[^>]*aria-hidden="true"[^>]*focusable="false"/);
assert.match(html, /href="\/contact\/"/);
assert.match(html, /href="\/projects\/"/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
assert.doesNotMatch(html, /unfinished local setup|mailto:|<form\b|<script\b(?![^>]*type="application\/ld\+json")/i);
console.log('Home checks passed: approved hero/experience, three services, honest project roles/status, static actions, decorative art and noindex.');
