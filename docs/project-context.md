# Ternloom website project context

Initialized October 29, 2026. This document preserves decisions across chats.

## Confirmed owner decisions

- Business: Ternloom Technologies, the main IT/software company website.
- Domain: `ternloom.com`, managed through Cloudflare according to the supplied dashboard link. The account and DNS have not been inspected.
- Audience: small businesses in Ottawa and across Canada, without limiting the offering to one industry.
- Core services: Website Development; Custom Business Software; Business Automation & Integrations.
- Delivery capability: clean, inexpensive cloud infrastructure for deployments. Professional wording and exact packaging are proposed below.
- Platform: static Astro; follow the logic of the Turnory and Wood Dust Creations websites.
- Sequence: prepare project configuration first; website design follows.
- Communication: Caveman plus the explicitly invoked Brainstorming workflow.
- On October 30, the owner nominated Bonita Nights, Wood Dust Creations and Turnory as project references to demonstrate real business capabilities. Detailed draft summaries and evidence limits are in [project references](project-references.md).
- The owner clarified that Ternloom is the main business Bonita Nights and Wood Dust Creations use for IT. Use “technology provider” for these relationships; Turnory remains Ternloom's own product. This does not specify a support contract, service level or ownership structure.
- On October 30, the owner approved Turnory's public summary and product-creator relationship in [project references](project-references.md). Preserve the application's in-development status. This approval covers the Turnory wording, not the separate configuration brief or website visual design.
- On October 30, the owner requested an original website design using Caveman and Brainstorming, UI UX Pro Max, UI Consistency Design, Art Designer Recommended Tools, and AI Visibility, with fresh GPT Astra subagents. The design should attract small-business enquiries and incorporate SEO and AI discovery. This authorizes design exploration; it does not approve the configuration brief, a visual direction, implementation or publication.
- The owner specified the intended first impression: trust, comfort, seriousness and security, and accepted browser mockups. Treat these as design goals, not evidence of security certifications or implemented controls.
- The owner confirmed more than 15 years of experience working in IT and software. Public wording may describe that experience; it must not imply Ternloom was founded more than 15 years ago, establish a team size or claim security credentials. Proposed wording added to all three mockups: “Built on more than 15 years of experience in IT and software development.”
- The owner selected option A, **Working Weave — distinctive and calm**, as the website's visual direction. This settles the approach, not the final copy, page inventory, written design brief or technical configuration.
- The owner said the name has no particular origin story and suggested an association between technology and connecting people. Treat the weaving association as visual intent, not an invented naming history.
- The owner accepted the existing interlocking mark and lowercase wordmark shown in their screenshot. Preserve this lockup; the suggested more literal woven T was not selected. The exact original SVG geometry and effective Arial wordmark settings are preserved in Appendix A of the [website design brief](superpowers/specs/2026-10-30-website-design.md).
- On October 30, the owner answered “yes” to approval of the complete Working Weave design brief. Its page inventory, component roles, theme and copy direction are approved for implementation planning. Explicit contact, project-copy, asset and launch gates remain. The separate configuration brief has not been approved by that response.

## Proposed defaults, not additional owner facts

- Positioning: “Ternloom Technologies builds websites, custom software, and business automations for small businesses in Ottawa and across Canada.”
- Location wording: Ottawa, Ontario, Canada. Service area: Canada, with remote delivery and an Ottawa focus; do not claim in-person coverage until confirmed.
- Cloud wording: “Cloud deployment and hosting with simple infrastructure and predictable running costs.” Treat this as a capability supporting the three services, rather than a fourth category.
- Architecture: Astro static output, TypeScript, plain CSS, npm and Cloudflare Pages.
- Canonical origin: `https://ternloom.com`; redirect `www` to the apex at an authorized deployment stage. Use `en-CA` and trailing slashes.
- Keep initial site delivery static and simple. Forms, analytics, booking tools and maintenance packages need separate scope decisions.

## Existing evidence

- `../turnory-website` has a static Astro site, shared site/SEO configuration, sitemap integration, plain CSS, output checks and a Cloudflare Pages deployment workflow.
- `../wooddustcreations-site` uses static Astro, shared business metadata, service data and Cloudflare Pages with `dist` output.
- Turnory's current source identifies Ternloom Technologies as its publisher and references `info@ternloom.com`. This establishes a reference to an existing contact, not confirmation of the main website's enquiry workflow or mailbox delivery.
- Sibling business details and historical approvals are reference material, not blanket authorization to copy content or perform account changes here.

## Current repository state

October 30 execution authorization: the owner instructed “build everything local. leave the form for contact for later, no worktrees, commit to main as need it.” The local implementation plan and configuration are authorized; use existing `main`, with scoped milestone commits and no worktrees. Contact form is deferred. No push, publication, DNS or provider changes are authorized. The earlier approval waits below describe the prior planning state and are superseded by this instruction.

- Starting point: existing Git repository on `main`, containing a generic `.gitignore`.
- Prepared: `AGENTS.md`, `README.md`, this context, the configuration brief and the approved website design brief. The combined implementation plan is saved outside the working copy, as required by the UI planning workflow.
- Implemented foundation: exact runtime/dependency pins, npm lockfile, static Astro configuration, typed site/service data, publication guard, unfinished noindex setup and 404 fixtures, diagnostics and focused output validation. Designed pages, Cloudflare project, DNS and production publication remain unimplemented.
- Existing uncommitted `.gitignore` changes predate this planning pass; preserve them during scoped Astro setup. The design/planning work has not modified that file.
- The owner approved the configuration and implementation plan for local execution. No publication is implied.

## Inputs needed later

These do not block documentation preparation or a local configuration plan:

- Confirm public enquiry address and preferred enquiry flow before publishing contact actions. Existing `info@ternloom.com` is the candidate; no need to create a second mailbox by default.
- Finalize Ternloom's exact contributions and summaries for Bonita Nights and Wood Dust Creations, plus screenshot selection for all three projects. The technology-provider relationships and Turnory's public summary are confirmed and do not need to be asked again. Turnory is presented as an own product in development. Do not infer a testimonial or independent client endorsement.
- Confirm public identity details, support/maintenance scope and any quoted pricing before publishing those claims.
- Working Weave branding and page structure are approved. Resolve remaining project copy/assets and any later French-language scope before publication; Canada-wide service does not imply bilingual support.
- Decide form processing and analytics before adding either. Base any privacy notice on this site's actual processing, rather than copying sibling policies.
- Inspect existing domain services and email DNS before an authorized deployment.

## Website design exploration

- Read the saved guidance and project reference brief, and inspected the sibling Astro configurations and shared layouts as architecture references. No existing Ternloom visual design, theme or component library was found.
- Three fresh GPT Astra agents independently explored original art direction, alternative page approaches, and service-led SEO/AI discovery. The owner subsequently selected Working Weave and approved its complete design brief.
- A further fresh GPT Astra review assessed the owner's emotional goals and favoured Business Desk for clarity and reassurance. Three static browser mockups were then created outside the working copy: A, Working Weave; B, Working Edition; and C, Business Desk. All visual values, marks, process wording and contact actions are explicitly labelled proposals. The mockups use original vector illustrations; project screenshot selection remains pending. They contain no active enquiry flow.
- After the owner selected A and accepted its mark, the local companion was updated to a focused Working Weave study, preserving the original lockup and the experience statement. Full website implementation remains unstarted.
- UI UX Pro Max design-system and focused style/accessibility searches were run locally with the existing Python installation. Generated recommendations are research inputs, not an approved theme or evidence of accessibility compliance.
- Primary-source discovery guidance checked on October 30: [Google AI features](https://developers.google.com/search/docs/appearance/ai-features) and [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots). Google describes ordinary SEO practices for its AI search features, without special AI markup requirements or guaranteed inclusion. OpenAI documents separate search and training crawler controls. Crawler policy remains a launch decision.
- No AI mention audit was performed. Current AI visibility is unmeasured; do not assign a visibility score or infer recommendation performance from this research.
- The complete [Working Weave website design brief](superpowers/specs/2026-10-30-website-design.md) is owner-approved. It covers seven content routes, shared components and theme entries, an email-first enquiry flow pending contact confirmation, project evidence boundaries, and SEO/AI discovery requirements.
- A fresh GPT Astra builder check requested a durable reference for the accepted lockup. Appendix A resolved this by preserving its original source and text settings; the follow-up review reported “nothing important left.” This is planning feedback, not owner approval.
- The [combined implementation plan](/Users/dev-zero/.codex/visualizations/2026/10/30/01a18b06-d02d-78b1-ab76-ae279c2d4c2c/ternloom-working-weave-implementation-plan.md) is prepared and self-reviewed. It contains a distinct technical-foundation stage, approved shared pieces/theme, one task per page and focused output/publication checks. It preserves the owner's fresh GPT Astra implementation/review method and forbids unrequested Git/account changes.
- Planning is complete and local execution is approved. The foundation is implemented; the next stage is the designed website, subject to its remaining publication gates.

## Verification

This is a documentation-only initialization. No dependencies were installed, no website was built and no external account changes were made.

October 30 design exploration remains read-only research plus this context update. No application files, dependencies, branches, commits, worktrees, deployment or DNS changes were created. Local validation checked five Markdown files and nine repository-local links with zero errors; `git diff --check` also passed. This does not establish build, accessibility, performance, search visibility or hosted behavior.

The later mockup pass created only a local visual-companion artifact outside the repository and updated this context. Browser inspection confirmed that all three labelled directions loaded, with the three services and project relationship/status labels visible in the document. The 375px viewport check reported no horizontal document overflow; this is a focused layout check, not an accessibility or production responsiveness audit.

After design approval and implementation planning, whitespace and local-link validation passed for six repository Markdown files plus the external plan, covering 17 local links; `git diff --check` passed. The plan contains 12 tasks. No package manifest or `node_modules` exists. No website build or application tests were run because implementation has not started.

The initial read-only builder check of the configuration brief and this context reported “nothing important left.” Initial local validation passed for four Markdown files and five repository-local links. October 30 adds the owner-nominated project reference brief; its documentation validation is reported at handoff. The independent review does not approve the brief on the owner's behalf. Owner approval remains pending.


## Local foundation implementation — October 30

- Runtime pinned to Node 24.22.2 and bundled npm 11.19.1. Exact dependencies: Astro 7.4.4, `@astrojs/check` 0.9.12 and TypeScript 6.0.3. Official npm metadata requires Node >=22.23.4 for this Astro version; diagnostics supports TypeScript 5/6, so TypeScript 7 was not selected. Node 24 remains supported LTS. Verification used the official Node distribution in temporary storage, without changing the system runtime.
- Public configuration keeps contact null and all three readiness approvals false. Default output stays noindex. Explicit release requests fail before output generation unless contact, contact confirmation, project copy and project assets are approved. Both setup fixtures remain noindex independently, and no sitemap, form or active email destination exists at this stage.
- Local proof: clean `npm ci` succeeded with zero reported vulnerabilities; diagnostics passed for 10 files with zero errors, warnings or hints; seven publication tests passed; static build produced two pages; setup output checks passed for noindex, canonical host, exactly three service names, and absence of active enquiry or client JavaScript. `TERNLOOM_RELEASE=1 npm run build` exited 1 with all four missing prerequisites named.
- Guard tests were written first and failed meaningfully against temporary constant-return stubs (six failures in each of two RED runs); implementation then passed all seven tests. The synthetic ready contact is test-only and does not change owner approval state.
- npm 11.19.1 reported one unapproved optional macOS watcher install script (`fsevents@2.3.3`) during clean install. Build and diagnostics succeeded without approving it. This remains an install warning, not an application diagnostic.
- This is local foundation verification only. No browser, accessibility, hosted-header, deployment or DNS verification is claimed. The controller performs the browser review before continuing.
