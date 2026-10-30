import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const [mode, ...args] = process.argv.slice(2);
if (mode !== 'preview' && mode !== 'release') {
  console.error('Usage: node scripts/build.mjs preview|release [Astro build arguments]');
  process.exit(1);
}

// Keep release intent in the command, independent of dashboard or shell values.
const result = spawnSync(process.execPath, [
  fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url)),
  'build', ...args,
], {
  env: { ...process.env, TERNLOOM_RELEASE: mode === 'release' ? '1' : '0' },
  stdio: 'inherit',
});

if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
