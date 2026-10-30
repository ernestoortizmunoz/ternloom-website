import assert from 'node:assert/strict';
import test from 'node:test';
import { cp, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

async function runBuild(mode, args = [], env = {}) {
  const fixture = await mkdtemp(join(tmpdir(), 'ternloom-build-command-'));
  try {
    await mkdir(join(fixture, 'scripts'));
    await mkdir(join(fixture, 'node_modules/astro/bin'), { recursive: true });
    await cp(new URL('../scripts/build.mjs', import.meta.url), join(fixture, 'scripts/build.mjs'));
    await writeFile(join(fixture, 'node_modules/astro/bin/astro.mjs'), `
      process.stdout.write(JSON.stringify({ release: process.env.TERNLOOM_RELEASE, args: process.argv.slice(2) }));
      process.exitCode = Number(process.env.FIXTURE_STATUS || 0);
    `);
    return spawnSync(process.execPath, ['scripts/build.mjs', mode, ...args], {
      cwd: fixture, encoding: 'utf8', env: { ...process.env, ...env },
    });
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
}

test('preview command overrides an inherited release flag and forwards Astro arguments', async () => {
  const result = await runBuild('preview', ['--outDir', '/tmp/output with spaces'], { TERNLOOM_RELEASE: '1' });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), { release: '0', args: ['build', '--outDir', '/tmp/output with spaces'] });
});

test('release command explicitly requests publication despite a preview environment', async () => {
  const result = await runBuild('release', [], { TERNLOOM_RELEASE: '0' });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), { release: '1', args: ['build'] });
});

test('a failed Astro build exits nonzero so chained deployment cannot continue', async () => {
  const result = await runBuild('release', [], { FIXTURE_STATUS: '17' });
  assert.equal(result.status, 17, result.stderr);
});

test('an unknown build mode fails before invoking Astro', async () => {
  const result = await runBuild('production');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /preview\|release/);
  assert.equal(result.stdout, '');
});
