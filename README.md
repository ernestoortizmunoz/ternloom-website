# Ternloom Technologies website

Main company website for **Ternloom Technologies**, serving small businesses in Ottawa and across Canada.

Domain: **ternloom.com**. Canonical origin: `https://ternloom.com`.

## Services

| Service | Purpose |
| --- | --- |
| Website Development | Professional business websites that help customers find and contact a business. |
| Custom Business Software | Software built around a business's own workflows. |
| Business Automation & Integrations | Connected tools and automated workflows that reduce repetitive work. |

Supporting capability: **cloud deployment and hosting with simple infrastructure and predictable running costs**. Exact hosting, maintenance and support scope is agreed per project.

## Current state

The approved Working Weave website is implemented locally: homepage, three service pages, projects, about, contact and a designed 404. It uses static Astro, TypeScript, plain CSS, local fonts, the accepted original brand mark and directory output with trailing slashes. Essential content and navigation are static HTML; no executable client JavaScript, form, analytics or runtime backend is included.

Contact is unset. Bonita Nights and Wood Dust Creations copy still needs final approval; Turnory’s summary is approved and remains explicitly in development. All project screenshots are public-site captures selected for local preview only, with image approvals false. Global publication readiness remains false. The contact form is deferred.

**Release: parked — waiting on owner-confirmed contact, approved project copy/assets and authorized launch.** Nothing has been pushed or deployed; no provider account or DNS changes were made. Cloudflare Pages remains the intended hosting target.

## Local commands

Use Node **24.22.2** (also in `.node-version`) and its bundled npm **11.19.1**. Exact dependency versions and the npm lockfile are committed; `.npmrc` rejects a different runtime to keep installs reproducible.

```sh
npm ci
npm run check
npm test
npm run test:publication
npm run build
npm run check:output
npm run dev
npm run preview
npm exec -- node scripts/check-contact-states.mjs
npm exec -- node scripts/check-404-release.mjs
```

Development and preview bind to `127.0.0.1`. Preview serves the most recent `dist` build. Publication tests use Node's built-in TypeScript stripping; `npm run check` performs type checking separately.

Default builds stay noindex, emit a preview `robots.txt` that disallows crawling, and omit the production sitemap. `TERNLOOM_RELEASE=1 npm run build` fails until the public contact and global readiness in `src/config/site.ts`, plus each project’s copy/image approvals in `src/data/projects.ts`, are resolved. A ready release generates only the seven canonical indexable content routes in `sitemap.xml`; 404 remains noindex and excluded. Search/training crawler policy and actual hosted controls need a separate launch review.

`npm run check:output` defaults to the complete `website` stage (`-- --stage website` is equivalent). It checks all eight HTML files, unique metadata, factual schema, local links and fragments, images, the 1200×630 social PNG, noindex and absence of executable client JavaScript or active draft enquiries. Historical `setup` and `home` stages remain available. The release fixture changes only temporary copies and never approves real source data.

Local proof on October 30: clean install, diagnostics, 13 unit tests, contact/release fixtures, eight-page build and website output checks passed. The clean install reported one unapproved optional `fsevents@2.3.3` script; diagnostics/build worked without approving it. Controller measured all eight pages at 375, 768, 1024 and 1440px: no horizontal overflow, one H1 and one main. Browser keyboard traversal, 200% zoom and an explicitly JavaScript-disabled browser were not available; this is not a full accessibility or performance audit. No hosted indexing or AI visibility result is claimed.

## Read first

- [Agent instructions](AGENTS.md)
- [Project context and outstanding inputs](docs/project-context.md)
- [Selected project references and draft summaries](docs/project-references.md)
- [Approved configuration brief](docs/superpowers/specs/2026-10-29-project-configuration-design.md)
- [Approved Working Weave website design](docs/superpowers/specs/2026-10-30-website-design.md)

The plan's location and remaining content dependencies are recorded in project context. Local milestone commits on existing `main` are authorized; publication and domain changes require a separate task.
