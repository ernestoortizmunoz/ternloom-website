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

The owner approved the configuration and local Working Weave implementation. The static Astro foundation is implemented with unfinished noindex setup and 404 fixtures. Designed pages are the next stage. Contact is unset, all publication readiness flags are false, and the contact form is deferred. Nothing has been deployed.

The project uses static Astro, TypeScript, plain CSS, directory output and trailing slashes. It builds independently of sibling repositories. Cloudflare Pages remains the intended hosting target, with no provider account or DNS changes made.

## Local commands

Use Node **24.22.2** (also in `.node-version`) and its bundled npm **11.19.1**. Exact dependency versions and the npm lockfile are committed; `.npmrc` rejects a different runtime to keep installs reproducible.

```sh
npm ci
npm run check
npm test
npm run test:publication
npm run build
npm run check:output -- --stage setup
npm run dev
npm run preview
```

Development and preview bind to `127.0.0.1`. Preview serves the most recent `dist` build. Publication tests use Node's built-in TypeScript stripping; `npm run check` performs type checking separately.

Default builds stay noindex. `TERNLOOM_RELEASE=1 npm run build` fails until public contact, contact confirmation, project copy and project assets are approved in `src/config/site.ts`. The setup fixtures remain noindex even with release approval. The 404 must remain noindex in the designed site too. A successful local build does not authorize publication or prove hosted behavior.

## Read first

- [Agent instructions](AGENTS.md)
- [Project context and outstanding inputs](docs/project-context.md)
- [Selected project references and draft summaries](docs/project-references.md)
- [Approved configuration brief](docs/superpowers/specs/2026-10-29-project-configuration-design.md)
- [Approved Working Weave website design](docs/superpowers/specs/2026-10-30-website-design.md)

The plan's location and remaining content dependencies are recorded in project context. Local milestone commits on existing `main` are authorized; publication and domain changes require a separate task.
