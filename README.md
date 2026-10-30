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

The approved Working Weave website is implemented locally: homepage, three service pages, projects, about, contact, owner-approved privacy notice and a designed 404. It uses static Astro, TypeScript, plain CSS, local fonts, the accepted original brand mark and directory output with trailing slashes. Essential content and navigation are static HTML. Only contact embeds Tally and its official sizing script; no analytics or runtime backend is included.

Public contact/privacy email is confirmed as `info@ternloom.com`. The owner approved the privacy wording and confirmed the final Tally copy plus submission/inbox test, including a screenshot of the new completion message in the local embed. The selected policy is 12-month active enquiry retention with ongoing-project/required-record exceptions. Notifications can fire during local testing. [Operator instructions](docs/contact-form-operations.md) preserve the final copy and manual retention process on Free.

`contactConfirmed`, `contactFormReady` and `privacyNoticeApproved` are true after explicit owner confirmation; both portfolio readiness flags remain false. Bonita Nights and Wood Dust Creations copy still needs final approval; Turnory’s summary is approved and remains explicitly in development. All project screenshot approvals remain false. An approved explicit release includes the production form context and omits local preview notices.

**Release: parked — waiting on project copy/assets approval and authorized launch.** Nothing has been pushed or deployed; no provider account or DNS changes were made. Cloudflare Pages remains the intended hosting target.

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

Default builds stay noindex, emit a preview `robots.txt` that disallows crawling, and omit the production sitemap. `TERNLOOM_RELEASE=1 npm run build` fails until configured contact/form/retention, every readiness flag in `src/config/site.ts` and each project’s copy/image approvals in `src/data/projects.ts` are resolved. A ready release generates eight canonical indexable content routes in `sitemap.xml`; 404 remains noindex and excluded. Search/training crawler policy and actual hosted controls need a separate launch review.

`npm run check:output` defaults to the complete `website` stage (`-- --stage website` is equivalent). It checks all nine HTML files, unique metadata, factual schema, local links and fragments, images, the 1200×630 social PNG and noindex. Only the contact page may contain the configured Tally iframe and official sizing script; other pages retain the no-script/no-iframe contract. Historical `setup` and `home` stages remain available. The release fixture changes only temporary copies, never approves real source data, and verifies production form context with no preview notices.

Local proof on October 30: clean install, diagnostics, 13 unit tests, contact/release fixtures, eight-page build and website output checks passed. The clean install reported one unapproved optional `fsevents@2.3.3` script; diagnostics/build worked without approving it. Controller measured all eight pages at 375, 768, 1024 and 1440px: no horizontal overflow, one H1 and one main. Browser keyboard traversal, 200% zoom and an explicitly JavaScript-disabled browser were not available; this is not a full accessibility or performance audit. No hosted indexing or AI visibility result is claimed.

The subsequent [production contact verification](docs/verification/2026-10-30-production-contact.md) records clean diagnostics, 17 unit tests, nine-page output and synthetic release proof, plus desktop/mobile and partial native keyboard checks. The initial [local contact-form verification](docs/verification/2026-10-30-contact-form.md) preserves the owner's successful test report separately from agent observations.

## Read first

- [Agent instructions](AGENTS.md)
- [Project context and outstanding inputs](docs/project-context.md)
- [Selected project references and draft summaries](docs/project-references.md)
- [Approved configuration brief](docs/superpowers/specs/2026-10-29-project-configuration-design.md)
- [Approved Working Weave website design](docs/superpowers/specs/2026-10-30-website-design.md)

The plan's location and remaining content dependencies are recorded in project context. Local milestone commits on existing `main` are authorized; publication and domain changes require a separate task.
