import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { site } from '../src/config/site.ts';
import { services } from '../src/data/services.ts';
import { contentPaths, socialImage, organizationLogo } from '../src/config/seo.ts';

const args = process.argv.slice(2);
const stage = args.length === 0 ? 'website' : args[1];
assert.ok(args.length === 0 || (args.length === 2 && args[0] === '--stage' && ['setup', 'home', 'website'].includes(stage)), 'Use --stage setup, home or website.');
const output = new URL('../dist/', import.meta.url);
const files = (await readdir(output, { recursive: true })).filter((file) => file.endsWith('.html')).sort();
const decode = (value) => value.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], decode(match[2])]));
const contents = new Map(await Promise.all(files.map(async (file) => [file, await readFile(new URL(file, output), 'utf8')])));
const fileForPath = (pathname) => pathname === '/404/' ? '404.html' : `${pathname.slice(1)}${pathname.endsWith('/') ? 'index.html' : ''}`;
if (stage === 'setup') assert.deepEqual(files, ['404.html', 'index.html'], 'Setup must contain only its two fixtures.');
if (stage === 'website') assert.deepEqual(files, [...contentPaths.map(fileForPath), '404.html'].sort(), 'Exactly eight content routes and a 404 required.');
assert.ok(files.includes('index.html') && files.includes('404.html'), 'Home and 404 outputs required.');
const titles = new Set();
const descriptions = new Set();
for (const [file, html] of contents) {
  assert.match(html, /<html lang="en-CA"/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  const pathname = file === '404.html' ? '/404/' : `/${file.replace(/index\.html$/, '')}`;
  assert.equal(canonical?.[1], `${site.origin}${pathname}`, `${file}: exact canonical`);
  assert.doesNotMatch(html, /<form\b/i, `${file}: submission handling stays with Tally`);
  if (!site.contact || !site.readiness.contactConfirmed) assert.doesNotMatch(html, /mailto:/i, `${file}: contact actions are not approved`);
  const clientScripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(([tag]) => !tag.includes('type="application/ld+json"'));
  const frames = [...html.matchAll(/<iframe\b[^>]*>/g)];
  if (file === 'contact/index.html' && site.contactForm) {
    assert.equal(clientScripts.length, 1, `${file}: only the official sizing script`);
    assert.equal(attributes(clientScripts[0][0]).src, 'https://tally.so/widgets/embed.js');
    assert.equal(clientScripts[0][2].trim(), '', `${file}: no inline executable code`);
    assert.equal(frames.length, 1, `${file}: one Ternloom enquiry iframe`);
    assert.equal(new URL(attributes(frames[0][0]).src).pathname, `/embed/${site.contactForm.tallyId}`);
  } else {
    assert.equal(clientScripts.length, 0, `${file}: no executable client JavaScript`);
    assert.equal(frames.length, 0, `${file}: no third-party iframe`);
  }
  assert.doesNotMatch(html, /\bon\w+\s*=|javascript:/i, `${file}: no executable inline handlers`);
  if (stage === 'setup' && file === 'index.html') assert.match(html, /unfinished local setup/);
  if (stage !== 'website') continue;
  assert.ok(html.includes('href="/privacy/"'), `${file}: privacy notice is discoverable`);

  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] ?? '');
  const meta = Object.fromEntries([...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => { const attr = attributes(tag); return [attr.name ?? attr.property, attr.content]; }));
  assert.ok(title && meta.description, `${file}: title and description required`);
  if (contentPaths.includes(pathname)) {
    const markdown = await readFile(new URL(`_agent-markdown${pathname}index.md`, output), 'utf8');
    assert.ok(markdown.includes(`title: ${JSON.stringify(title)}`), `${file}: Markdown metadata follows HTML`);
    assert.ok(markdown.includes(`url: ${JSON.stringify(canonical[1])}`));
    assert.ok(markdown.includes(`content_signal: ${JSON.stringify(site.contentSignal)}`));
    assert.match(markdown, /robots: "noindex, nofollow"/);
    assert.match(markdown, /^# /m);
    assert.match(markdown, /```json\n/);
    assert.doesNotMatch(markdown, /<(?:script|style|iframe|svg|nav)\b/i, `${file}: clean Markdown main content`);
    assert.ok(html.includes(`rel="alternate" type="text/markdown" href="${site.origin}/_agent-markdown${pathname}index.md"`), `${file}: discoverable static Markdown`);
  }
  assert.ok(!titles.has(title) && !descriptions.has(meta.description), `${file}: unique metadata required`);
  titles.add(title); descriptions.add(meta.description);
  for (const key of ['og:title', 'twitter:title']) assert.equal(meta[key], title);
  for (const key of ['og:description', 'twitter:description']) assert.equal(meta[key], meta.description);
  assert.equal(meta['og:url'], canonical[1]);
  assert.equal(meta['og:site_name'], site.name);
  assert.equal(meta['og:locale'], 'en_CA');
  assert.equal(meta['twitter:card'], 'summary_large_image');
  for (const key of ['og:image', 'twitter:image']) assert.equal(meta[key], `${site.origin}${socialImage.path}`);
  for (const key of ['og:image:alt', 'twitter:image:alt']) assert.equal(meta[key], socialImage.alt);
  assert.equal(meta['og:image:width'], '1200'); assert.equal(meta['og:image:height'], '630');
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.equal(blocks.length, 1, `${file}: one factual graph`);
  const schema = JSON.parse(blocks[0][1]);
  assert.equal(schema['@context'], 'https://schema.org');
  const graph = schema['@graph'];
  const types = graph.map((node) => node['@type']);
  const service = services.find((item) => item.path === pathname);
  const breadcrumbMarkup = html.match(/<nav[^>]*aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.deepEqual(types, ['Organization', 'WebSite', ...(service ? ['Service'] : []), ...(breadcrumbMarkup ? ['BreadcrumbList'] : [])]);
  const organizationId = `${site.origin}/#organization`;
  assert.deepEqual(graph[0], { '@type': 'Organization', '@id': organizationId, name: site.name, url: `${site.origin}/`, logo: { '@type': 'ImageObject', url: `${site.origin}${organizationLogo.path}`, width: organizationLogo.width, height: organizationLogo.height }, ...(site.contact && site.readiness.contactConfirmed ? { email: site.contact.email } : {}) });
  assert.deepEqual(graph[1], { '@type': 'WebSite', '@id': `${site.origin}/#website`, name: site.name, url: `${site.origin}/`, inLanguage: site.locale, publisher: { '@id': organizationId } });
  const visible = decode(html.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
  assert.ok(visible.includes(site.name), `${file}: identity visible`);
  if (service) {
    assert.deepEqual(graph[2], { '@type': 'Service', '@id': `${site.origin}${service.path}#service`, name: service.name, description: service.lead, url: canonical[1], provider: { '@id': organizationId }, areaServed: site.serviceArea });
    assert.ok(visible.includes(service.name) && visible.includes(service.lead) && visible.includes(site.serviceArea), `${file}: service facts visible`);
    assert.equal(title, service.seo.title, `${file}: dedicated service title`);
    assert.equal(meta.description, service.seo.description, `${file}: dedicated service description`);
  }
  if (breadcrumbMarkup) {
    const labels = [...breadcrumbMarkup.matchAll(/<(?:a|span)\b[^>]*>([^<]+)<\/(?:a|span)>/g)].map((match) => decode(match[1]));
    const crumbs = graph.at(-1).itemListElement;
    assert.deepEqual(crumbs.map((crumb) => crumb.name), labels);
    assert.deepEqual(crumbs.map((crumb) => crumb.position), labels.map((_, index) => index + 1));
    const links = [...breadcrumbMarkup.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => new URL(match[1], site.origin).href);
    assert.deepEqual(crumbs.map((crumb) => crumb.item), [...links, canonical[1]]);
  }

  for (const [tag] of html.matchAll(/<(?:a|link|img|source)\b[^>]*>/g)) {
    const attr = attributes(tag);
    const refs = [attr.href, attr.src, ...(attr.srcset?.split(',').map((entry) => entry.trim().split(/\s+/)[0]) ?? [])].filter(Boolean);
    for (const ref of refs) {
      const url = new URL(ref, canonical[1]);
      if (url.origin !== site.origin) continue;
      const target = fileForPath(url.pathname);
      assert.ok((await stat(new URL(target, output)).catch(() => null))?.isFile(), `${file}: local reference missing: ${ref}`);
      if (url.hash && contents.has(target)) {
        const ids = [...contents.get(target).matchAll(/\bid="([^"]+)"/g)].map((match) => decode(match[1]));
        assert.ok(ids.includes(decodeURIComponent(url.hash.slice(1))), `${file}: fragment missing: ${ref}`);
      }
    }
    if (tag.startsWith('<img')) {
      assert.ok('alt' in attr && attr.alt.trim(), `${file}: meaningful image alternative required`);
      assert.ok(Number(attr.width) > 0 && Number(attr.height) > 0, `${file}: reserve image dimensions`);
    }
  }
}
if (stage === 'website') {
  const png = await readFile(new URL(socialImage.path.slice(1), output));
  const logo = await readFile(new URL(organizationLogo.path.slice(1), output), 'utf8');
  assert.match(logo, /width="512" height="512"/);
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.equal(png.readUInt32BE(16), 1200); assert.equal(png.readUInt32BE(20), 630);
  assert.equal(await readFile(new URL('robots.txt', output), 'utf8'), `User-agent: *\nContent-Signal: ${site.contentSignal}\nDisallow: /\n`);
  const headers = await readFile(new URL('_headers', output), 'utf8');
  assert.ok(headers.startsWith(`/*\n  Content-Signal: ${site.contentSignal}\n`));
  assert.equal((headers.match(/Content-Signal:/g) ?? []).length, 1, 'One authoritative usage policy header');
  assert.ok(headers.includes('/_agent-markdown/*\n  X-Robots-Tag: noindex\n'));
  const llms = await readFile(new URL('llms.txt', output), 'utf8');
  const destinations = [...llms.matchAll(/\]\((https:\/\/ternloom\.com\/[^)]*)\)/g)].map((match) => match[1]);
  const expected = contentPaths.flatMap((path) => [`${site.origin}${path}`, `${site.origin}/_agent-markdown${path}index.md`]);
  assert.deepEqual(destinations.sort(), expected.sort(), 'LLM guide links to eight canonical pages and eight static Markdown versions');
  assert.ok(!(await readdir(output)).some((file) => /sitemap.*\.xml$/.test(file)), 'Preview must not emit a production sitemap');
}
if (stage === 'home' || stage === 'website') {
  for (const check of ['home', 'shell', 'website-service', 'software-service', 'automation-service', 'projects', 'about', 'contact', 'privacy', '404']) await import(`./check-${check}.mjs`);
}
console.log(`Output checks passed: ${stage} (${files.length} noindex pages, exact canonical paths, contact-only Tally integration${stage === 'website' ? ', unique metadata, factual schema, all local links/fragments/assets, reserved images and social PNG' : ''}).`);
