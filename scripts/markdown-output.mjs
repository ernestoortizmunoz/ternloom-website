import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import TurndownService from 'turndown';
import { contentPaths } from '../src/config/seo.ts';
import { site } from '../src/config/site.ts';

export function toAgentMarkdown(html, canonical) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!main) throw new Error(`Markdown requires main content: ${canonical}`);
  const plain = new TurndownService();
  plain.addRule('plainMetadata', { filter: 'span', replacement: (_, node) => node.textContent });
  const decode = (text) => plain.turndown(`<span>${text}</span>`);
  const metadata = { title: decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? ''), url: canonical, content_signal: site.contentSignal };
  for (const [tag] of html.matchAll(/<meta\b[^>]*>/gi)) {
    const name = tag.match(/\bname="([^"]+)"/i)?.[1];
    const value = tag.match(/\bcontent="([^"]*)"/i)?.[1];
    if (['description', 'robots'].includes(name) && value) metadata[name] = decode(value);
  }
  const markdown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
  // Site chrome is outside main; headers inside main contain real page content.
  markdown.remove(['nav', 'script', 'style', 'svg', 'iframe', 'button']);
  const absolute = (href) => new URL(href, canonical).href.replaceAll('(', '%28').replaceAll(')', '%29');
  markdown.addRule('absoluteLinks', {
    filter: (node) => node.nodeName === 'A' && node.hasAttribute('href'),
    replacement: (content, node) => `[${content.trim()}](${absolute(node.getAttribute('href'))})`,
  });
  markdown.addRule('absoluteImages', {
    filter: 'img',
    replacement: (_, node) => `![${(node.getAttribute('alt') ?? '').replaceAll('[', '\\[').replaceAll(']', '\\]')}](${absolute(node.getAttribute('src'))})`,
  });
  const graphs = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => JSON.parse(match[1]));
  return `---\n${Object.entries(metadata).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')}\n---\n\n${markdown.turndown(main)}\n${graphs.length ? `\n## Structured data\n\n\`\`\`json\n${graphs.map((graph) => JSON.stringify(graph, null, 2)).join('\n')}\n\`\`\`\n` : ''}`;
}

/** @returns {import('astro').AstroIntegration} */
export function markdownOutput() {
  return {
    name: 'ternloom-agent-markdown',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        await rm(new URL('_agent-markdown/', dir), { recursive: true, force: true });
        for (const path of contentPaths) {
          const html = await readFile(new URL(`${path.slice(1)}index.html`, dir), 'utf8');
          const target = new URL(`_agent-markdown${path}index.md`, dir);
          await mkdir(new URL('./', target), { recursive: true });
          await writeFile(target, toAgentMarkdown(html, new URL(path, site.origin).href));
        }
      },
    },
  };
}
