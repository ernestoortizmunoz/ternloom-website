import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { site } from '../src/config/site.ts';
import { services } from '../src/data/services.ts';

const html = await readFile(new URL('../dist/contact/index.html', import.meta.url), 'utf8').catch((error) => {
  assert.fail(`Contact route must be built: ${error.code}`);
});
assert.equal(site.contact, null, 'Real contact remains unconfirmed');
assert.equal(site.readiness.contactConfirmed, false, 'Local form does not approve production contact');
assert.equal(site.localTestForm?.tallyId, 'dbEbrd', 'Use the replacement Ternloom test form');
const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
assert.ok(main);
assert.equal([...main.matchAll(/<h1\b/g)].length, 1);
assert.match(main, /Test form — please use dummy details only\./);
assert.match(main, /Tally/);
assert.doesNotMatch(main, /This local draft does not accept enquiries|Contact details are not yet available/);
const iframe = main.match(/<iframe\b[^>]*>/g) ?? [];
assert.equal(iframe.length, 1, 'One form embed only');
const embed = new URL(iframe[0].match(/\bsrc="([^"]+)"/)?.[1].replaceAll('&amp;', '&'));
assert.equal(embed.origin, 'https://tally.so');
assert.equal(embed.pathname, '/embed/dbEbrd');
for (const [name, value] of Object.entries({ alignLeft: '1', hideTitle: '1', transparentBackground: '1', dynamicHeight: '1', source: 'ternloom-website', environment: 'local-test' })) assert.equal(embed.searchParams.get(name), value);
assert.match(iframe[0], /title="Ternloom project enquiry — test form"/);
assert.doesNotMatch(iframe[0], /scrolling="no"|data-tally-src=/, 'Real iframe src and default scrolling keep content accessible without sizing');
assert.match(main, /href="https:\/\/tally.so\/r\/dbEbrd\?source=ternloom-website&amp;environment=local-test"/);
assert.doesNotMatch(html, /X5L5GP|81A9Eo|forms\.wooddustcreations\.ca/);
const scripts = [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].map(([tag]) => tag).filter((tag) => !tag.includes('type="application/ld+json"'));
assert.equal(scripts.length, 1);
assert.match(scripts[0], /^<script(?=[^>]*src="https:\/\/tally.so\/widgets\/embed.js")(?=[^>]*\bdefer\b)[^>]*>\s*<\/script>$/);
for (const topic of ['Your business', 'Your current tools', 'What you want to change', 'What happens next']) assert.ok(main.includes(topic));
for (const service of services) {
  assert.ok(main.includes(`href="${service.path}"`));
  await access(new URL(`../dist${service.path}index.html`, import.meta.url));
}
assert.match(html, /<link rel="canonical" href="https:\/\/ternloom.com\/contact\/"/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
assert.match(html, /<header\b/);
assert.match(html, /<footer\b/);
assert.doesNotMatch(html, /mailto:|<form\b|<button\b/i);
console.log('Contact output checks passed: replacement Ternloom test form, provider script, dummy-data notice, context, direct fallback and unchanged launch gates.');
