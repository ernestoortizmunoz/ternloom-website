import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const html = await readFile(new URL('../dist/projects/index.html', import.meta.url), 'utf8').catch((error) => {
  assert.fail(`Selected Projects route must be built: ${error.code}`);
});
const { projects } = await import('../src/data/projects.ts');
assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
assert.match(html, /<h1[^>]*>Selected projects<\/h1>/);
assert.match(html, /<link rel="canonical" href="https:\/\/ternloom.com\/projects\/"/);
assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
assert.equal(projects.length, 3);
for (const project of projects) {
  const article = html.match(new RegExp(`<article[^>]*data-project="${project.id}"[\\s\\S]*?<\\/article>`))?.[0];
  assert.ok(article, `Missing story: ${project.name}`);
  assert.ok(article.includes(`href="${project.url}"`));
  assert.match(article, new RegExp(`<h2[^>]*>${project.name}</h2>`));
  assert.ok(article.includes(project.summary));
  assert.ok(article.includes(project.businessNeed));
  for (const capability of project.capabilities) assert.ok(article.includes(capability));
  assert.ok(article.includes(project.role === 'own-product' ? 'Our own product' : 'Technology provider'));
  if (project.id === 'turnory') {
    assert.equal(project.status, 'application-in-development');
    assert.match(article, /application in development/);
    assert.equal(project.summary, 'Turnory is a Windows sim-racing telemetry application developed by Ternloom Technologies, alongside its product website and launch-notification integration. The application is currently in development.');
  }
  assert.ok(project.image);
  assert.equal(project.image.approved, false);
  assert.ok(article.includes(`src="${project.image.src}"`));
  assert.match(article, /<img[^>]*alt="[^"]+"[^>]*width="\d+"[^>]*height="\d+"/);
  assert.match(article, /<figcaption[^>]*>[^<]+<\/figcaption>/);
  await access(new URL(`../dist${project.image.src}`, import.meta.url));
  assert.match(article, /aria-label="Services related to/);
}
assert.match(html, /href="\/contact\/"/);
assert.match(html, /<footer\b/);
assert.doesNotMatch(html, /mailto:|<form\b|<script\b(?![^>]*type="application\/ld\+json")/i);
console.log('Projects checks passed: three detailed stories, public links, roles, status, approved Turnory summary, local images and noindex.');
