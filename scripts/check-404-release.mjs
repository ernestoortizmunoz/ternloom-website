import assert from 'node:assert/strict';
import { mkdtemp, cp, writeFile, readFile, symlink, rm, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'astro';
import { site } from '../src/config/site.ts';

// Synthetic approval exists only in a temporary fixture; real readiness is unchanged.
const fixture = await realpath(await mkdtemp(join(tmpdir(), 'ternloom-404-release-')));
try {
  await cp(new URL('../src/', import.meta.url), join(fixture, 'src'), { recursive: true });
  await symlink(fileURLToPath(new URL('../node_modules', import.meta.url)), join(fixture, 'node_modules'));
  await writeFile(join(fixture, 'package.json'), '{"type":"module"}');
  await writeFile(join(fixture, 'src/config/site.ts'), `export const site = ${JSON.stringify({
    ...site,
    contact: { email: 'test@example.invalid' },
    readiness: { contactConfirmed: true, projectCopyApproved: true, projectAssetsApproved: true },
  })};`);
  await build({
    root: fixture, configFile: false, logLevel: 'error', site: site.origin,
    vite: { define: { 'import.meta.env.TERNLOOM_RELEASE': JSON.stringify('1') } },
  });
  const missing = await readFile(join(fixture, 'dist/404.html'), 'utf8');
  const home = await readFile(join(fixture, 'dist/index.html'), 'utf8');
  assert.doesNotMatch(home, /<meta name="robots" content="noindex/, 'Synthetic ready home must permit indexing');
  assert.match(missing, /<meta name="robots" content="noindex, nofollow"/, '404 must remain noindex even during an approved release');
  console.log('404 release fixture passed: ready home permits indexing while 404 remains noindex.');
} finally {
  await rm(fixture, { recursive: true, force: true });
}
