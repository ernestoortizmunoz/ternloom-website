import assert from 'node:assert/strict';
import { mkdtemp, mkdir, cp, writeFile, readFile, symlink, rm, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'astro';
import { site } from '../src/config/site.ts';
import { projects } from '../src/data/projects.ts';
import { contentPaths } from '../src/config/seo.ts';

// Synthetic approval exists only in a temporary fixture; real readiness is unchanged.
const fixture = await realpath(await mkdtemp(join(tmpdir(), 'ternloom-404-release-')));
try {
  await cp(new URL('../src/', import.meta.url), join(fixture, 'src'), { recursive: true });
  await cp(new URL('../astro.config.mjs', import.meta.url), join(fixture, 'astro.config.mjs'));
  await mkdir(join(fixture, 'scripts'));
  await cp(new URL('./visibility-output.mjs', import.meta.url), join(fixture, 'scripts/visibility-output.mjs'));
  await cp(new URL('../public/', import.meta.url), join(fixture, 'public'), { recursive: true });
  await writeFile(join(fixture, 'src/data/projects.ts'), `export const projects = ${JSON.stringify(projects.map((project) => ({ ...project, copyApproved: true, image: project.image ? { ...project.image, approved: true } : null })))};`);
  await symlink(fileURLToPath(new URL('../node_modules', import.meta.url)), join(fixture, 'node_modules'));
  await writeFile(join(fixture, 'package.json'), '{"type":"module"}');
  await writeFile(join(fixture, 'src/config/site.ts'), `export const site = ${JSON.stringify({
    ...site,
    contact: { email: 'test@example.invalid' },
    readiness: { contactConfirmed: true, projectCopyApproved: true, projectAssetsApproved: true },
  })};`);
  const originalRelease = process.env.TERNLOOM_RELEASE;
  process.env.TERNLOOM_RELEASE = '1';
  try {
    await build({
      root: fixture, logLevel: 'error', site: site.origin,
      vite: { define: { 'import.meta.env.TERNLOOM_RELEASE': JSON.stringify('1') } },
    });
  } finally {
    if (originalRelease === undefined) delete process.env.TERNLOOM_RELEASE;
    else process.env.TERNLOOM_RELEASE = originalRelease;
  }
  const sitemap = await readFile(join(fixture, 'dist/sitemap.xml'), 'utf8');
  assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]), contentPaths.map((path) => new URL(path, site.origin).href));
  assert.doesNotMatch(sitemap, /404|setup/);
  assert.equal(await readFile(join(fixture, 'dist/robots.txt'), 'utf8'), `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
  for (const path of contentPaths) {
    const html = await readFile(join(fixture, 'dist', path.slice(1), 'index.html'), 'utf8');
    assert.doesNotMatch(html, /<meta name="robots" content="noindex/);
  }
  const missing = await readFile(join(fixture, 'dist/404.html'), 'utf8');
  const home = await readFile(join(fixture, 'dist/index.html'), 'utf8');
  assert.doesNotMatch(home, /<meta name="robots" content="noindex/, 'Synthetic ready home must permit indexing');
  assert.match(missing, /<meta name="robots" content="noindex, nofollow"/, '404 must remain noindex even during an approved release');
  console.log('Synthetic release fixture passed: seven canonical indexable routes, exact sitemap/robots, 404 excluded and noindex; actual source approvals unchanged.');
} finally {
  await rm(fixture, { recursive: true, force: true });
}
