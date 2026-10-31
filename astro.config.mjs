import { defineConfig } from 'astro/config';
import { site } from './src/config/site.ts';
import { getPublicationState } from './src/config/publication.ts';
import { visibilityOutput } from './scripts/visibility-output.mjs';
import { markdownOutput } from './scripts/markdown-output.mjs';

// Fail before generating output if a requested release is not approved.
getPublicationState(site, process.env.TERNLOOM_RELEASE === '1');

export default defineConfig({
  site: site.origin,
  output: 'static',
  trailingSlash: 'always',
  outDir: './dist',
  build: { format: 'directory' },
  server: { host: '127.0.0.1' },
  devToolbar: { enabled: false },
  integrations: [visibilityOutput(process.env.TERNLOOM_RELEASE === '1'), markdownOutput()],
});
