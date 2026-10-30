# Ternloom website: agent instructions

## Start here

- Read [project context](docs/project-context.md) and the [configuration brief](docs/superpowers/specs/2026-10-29-project-configuration-design.md) before changing this project.
- This repository owns the main Ternloom Technologies website for `ternloom.com`.
- Current state: approved configuration and Working Weave design implemented locally in static Astro: seven content pages, a designed 404, shared theme/brand, factual metadata/schema and guarded visibility output. Contact is null; project copy/assets have unresolved publication approvals. Nothing is deployed.
- Keep confirmed owner decisions distinct from proposed defaults and verified implementation.

## Business and audience

- Target small businesses in Ottawa and across Canada, without an industry restriction.
- Core services: Website Development; Custom Business Software; Business Automation & Integrations.
- Cloud deployment and hosting support those services. Proposed wording: simple infrastructure, low maintenance and predictable running costs. Do not turn this into a fourth service without an owner decision.
- Write public copy in clear, grammatical English. Explain customer problems, deliverables and outcomes before technical stacks.
- Do not promise rankings, savings, delivery dates, uptime, support coverage or free hosting without evidence and agreed scope.
- Never invent clients, testimonials, certifications, partnerships, team size or project results.

## Technical direction

- Owner selected a static Astro website following the Turnory and Wood Dust Creations project pattern.
- Implemented: TypeScript, plain CSS, npm lockfile, canonical origin `https://ternloom.com`, trailing slashes and `en-CA`. Cloudflare Pages remains the intended hosting target.
- Keep website builds independent of sibling repositories. Use their architecture as reference, not their branding, legal notices, provider accounts, forms or business data.
- Prefer small shared components and one public business configuration. Add runtime services only for a demonstrated requirement.
- Essential content must work without JavaScript. Use semantic HTML, keyboard access, visible focus, meaningful image alternatives and reduced-motion support.
- Keep secrets, private customer information and Cloudflare account identifiers out of source, generated output and public documentation.

## Workflow

- Use Caveman style in chat unless the owner requests otherwise; code, documentation and public copy remain normal prose.
- Configuration, design and local implementation plan are approved. Preserve the approved Working Weave design; use the requested Brainstorming workflow for material new design decisions.
- Owner authorized scoped local commits on existing `main`. Do not create branches, worktrees, pushes or pull requests without a new request. Preserve unrelated changes, including the pre-existing unstaged `.idea` ignore.
- Current authorization: “build everything local. leave the form for contact for later, no worktrees, commit to main as need it.” Forms remain deferred. External account changes, uploads, deployment, DNS changes and sending messages require a task authorizing those actions.
- Default builds must remain noindex with no production sitemap. Explicit release must satisfy both global readiness and each project’s copy/image approval. Do not change approvals or activate candidate contact details to make checks pass. Review crawler policy separately before an authorized launch.
- Preserve existing email DNS records and existing domain services during any later authorized hosting change.
- Verify proportionately. For documentation, check local links and whitespace. Once implementation exists, run diagnostics, build and focused output checks; distinguish local proof from hosted behavior.
- Update project context with material decisions and actual verification results. Do not accumulate routine chat history.
