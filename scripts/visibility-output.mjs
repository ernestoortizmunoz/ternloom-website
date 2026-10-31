import { readFile, rm, writeFile } from 'node:fs/promises';
import { site } from '../src/config/site.ts';
import { contentPaths } from '../src/config/seo.ts';
import { getPublicationState } from '../src/config/publication.ts';

// Usage preferences and crawl access are separate: preview output stays disallowed.
/** @param {boolean} releaseRequested @returns {import('astro').AstroIntegration} */
export function visibilityOutput(releaseRequested) {
  const publication = getPublicationState(site, releaseRequested);
  return {
    name: 'ternloom-visibility-output',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const headersFile = new URL('_headers', dir);
        const headers = await readFile(headersFile, 'utf8');
        if (!headers.startsWith('/*\n') || /^\s*Content-Signal:/mi.test(headers)) {
          throw new Error('Expected one global _headers block; Content-Signal is generated from site configuration.');
        }
        await writeFile(headersFile, headers.replace('/*\n', `/*\n  Content-Signal: ${site.contentSignal}\n`));
        const sitemap = new URL('sitemap.xml', dir);
        await rm(sitemap, { force: true });
        if (publication.noindex) {
          await writeFile(new URL('robots.txt', dir), `User-agent: *\nContent-Signal: ${site.contentSignal}\nDisallow: /\n`);
          return;
        }
        const urls = [];
        for (const path of contentPaths) {
          const html = await readFile(new URL(`${path.slice(1)}index.html`, dir), 'utf8');
          if (/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html)) continue;
          const canonical = new URL(path, site.origin).href;
          if (!html.includes(`<link rel="canonical" href="${canonical}"`)) throw new Error(`Sitemap canonical mismatch: ${path}`);
          urls.push(canonical);
        }
        if (urls.length === 0) throw new Error('Release sitemap must contain approved indexable content.');
        const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
        await writeFile(sitemap, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}\n</urlset>\n`);
        await writeFile(new URL('robots.txt', dir), `User-agent: *\nContent-Signal: ${site.contentSignal}\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
      },
    },
  };
}
