# Ternloom website: agent instructions

## Start here

- Read [project context](docs/project-context.md) and the [configuration brief](docs/superpowers/specs/2026-10-29-project-configuration-design.md) before changing this project.
- This repository owns the main Ternloom Technologies website for `ternloom.com`.
- Current state: repository guidance, a configuration brief awaiting approval and an approved Working Weave website design. An implementation plan is prepared outside the working copy. Astro scaffolding, dependencies, website implementation, deployment and DNS configuration are not implemented.
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
- Proposed implementation defaults: TypeScript, plain CSS, npm lockfile, Cloudflare Pages, canonical origin `https://ternloom.com`, trailing slashes and `en-CA`.
- Keep website builds independent of sibling repositories. Use their architecture as reference, not their branding, legal notices, provider accounts, forms or business data.
- Prefer small shared components and one public business configuration. Add runtime services only for a demonstrated requirement.
- Essential content must work without JavaScript. Use semantic HTML, keyboard access, visible focus, meaningful image alternatives and reduced-motion support.
- Keep secrets, private customer information and Cloudflare account identifiers out of source, generated output and public documentation.

## Workflow

- Use Caveman style in chat unless the owner requests otherwise; code, documentation and public copy remain normal prose.
- Follow the explicitly requested Brainstorming workflow. The configuration brief needs approval before scaffolding or dependency installation; website design is a later, separate step.
- Do not create commits, branches, worktrees, pushes or pull requests unless requested. Preserve unrelated changes.
- Current authorization covers local project preparation. External account changes, uploads, deployment, DNS changes and sending messages require a task authorizing those actions.
- Preserve existing email DNS records and existing domain services during any later authorized hosting change.
- Verify proportionately. For documentation, check local links and whitespace. Once implementation exists, run diagnostics, build and focused output checks; distinguish local proof from hosted behavior.
- Update project context with material decisions and actual verification results. Do not accumulate routine chat history.
