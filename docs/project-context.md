# Ternloom website project context

Durable decisions and actual local implementation state, October 30, 2026.

## Confirmed owner decisions

- Ternloom Technologies owns the main company website for `ternloom.com`. Audience: small businesses in Ottawa and across Canada, without an industry restriction.
- Three core services: Website Development; Custom Business Software; Business Automation & Integrations. Cloud deployment and hosting support those services; scope, provider costs and ongoing support are agreed separately.
- Static Astro follows the architecture of the Turnory and Wood Dust Creations website projects, while remaining independently buildable with its own business data.
- The owner approved the complete [Working Weave design](superpowers/specs/2026-10-30-website-design.md), including the existing interlocking mark and lowercase wordmark. Appendix A preserves the original SVG geometry and effective Arial treatment. No naming origin story is established.
- Desired impression: trust, comfort, seriousness and security. These are design goals, not credentials or guarantees.
- Confirmed experience wording: “Built on more than 15 years of experience in IT and software development.” This describes experience, not company age, team size or certifications.
- Bonita Nights and Wood Dust Creations use Ternloom as their technology provider. Turnory is Ternloom’s own product, with its application in development. Its public summary is approved; detailed evidence and remaining copy boundaries are in [project references](project-references.md).
- The later instruction “build everything local. leave the form for contact for later, no worktrees, commit to main as need it” approved the configuration and implementation plan for local execution. It supersedes older approval waits and no-commit boundaries in the historical design/configuration documents. Scoped commits use existing `main`; no branch, worktree, push, pull request, publication, account or DNS change is authorized.
- Chat uses Caveman style; code, documentation and public copy remain normal prose.

## Implemented local website

- Seven content routes: `/`, `/services/website-development/`, `/services/custom-business-software/`, `/services/business-automation-integrations/`, `/projects/`, `/about/`, `/contact/`; plus a designed `404.html` recovery page.
- Shared Working Weave theme, semantic shell, wrapping navigation, skip target, visible focus, licensed local DM Sans, original vector hero, accepted brand assets, meaningful screenshot alternatives/captions and reserved image dimensions. Essential content, questions and links are static HTML; the development toolbar is disabled. The contact-only local Tally test below is the sole executable-script/third-party embed exception; no analytics or backend is included.
- Static Astro 7.4.4, TypeScript 6.0.3 and `@astrojs/check` 0.9.12; Node 24.22.2 with npm 11.19.1. Exact pins and lockfile are committed. Canonical origin is `https://ternloom.com`, locale `en-CA`, trailing slashes and directory output. Development and preview bind to loopback.
- One public site configuration, shared service/project records and reusable components. Cloud delivery remains supporting capability. Selected projects preserve their technology-provider/own-product roles and evidence limits; potential deliverables are not represented as completed commissions.
- Every page has unique title/description, canonical, Open Graph/Twitter metadata and original 1200×630 social artwork based on the accepted mark and weave. Factual Organization/WebSite schema appears throughout; Service schema only on its matching service page, and BreadcrumbList only where breadcrumbs are visible. JSON-LD escapes HTML-sensitive characters. No invented address, ratings, offers or storefront metadata.
- Default builds are noindex, emit `robots.txt` with `Disallow: /` and emit no production sitemap. Explicit release requires a contact, all global readiness flags, and every displayed project’s copy/image approval. Global flags cannot bypass unapproved project records. A ready release emits only canonical indexable content routes; 404 and setup pages are excluded. This local output policy does not settle individual search/training crawler access.

## Remaining launch gates

**Release: parked — waiting on owner-confirmed contact, approved project copy/assets and authorized launch.** These gates do not block completion of the local preview.

- Email contact remains `null`; all three global readiness flags remain false. `info@ternloom.com`, referenced by the sibling Turnory project, is only a candidate until confirmed for this site. Local contact output now contains the owner's Tally test form, with no active mailto. Explicit release output excludes the test integration and retains the existing confirmed-email path. No mailbox destination or delivery is verified.
- Bonita Nights and Wood Dust Creations summaries need final approval. Turnory’s approved summary remains unchanged and explicitly says the application is in development. The three public website screenshot candidates were captured on October 30 for local preview; every image approval remains false.
- Cloudflare Pages is the intended hosting target, not a configured provider project. Confirm an authorized launch, inspect existing domain services and preserve email DNS before deployment. Redirects, headers, HTTPS, actual hosted 404 responses, preview indexing, search-console submissions and mailbox delivery need hosted verification.
- Review crawler policy explicitly before public release. No special AI file, paid monitoring subscription, visibility score or guaranteed indexing/AI recommendations are required. [Google AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) and [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots) were researched during design; AI visibility remains unmeasured.
- Production form processing/notification destination and privacy wording, analytics, maintenance/support packages, pricing, in-person coverage and French-language support require separate scope or confirmation. No privacy notice should describe processing that does not exist.

## Contact form work: local testing implemented

- The owner reopened contact-form work for local testing and selected Tally with its native reCAPTCHA after discussing Cloudflare Turnstile and hidden fields. They created a form and supplied replacement URL `https://tally.so/r/dbEbrd` after moving to a separate Ternloom account. The earlier WDC-account form `X5L5GP` is superseded. The receiving Ternloom mailbox address and actual submission/email delivery remain unverified.
- Implemented `site.localTestForm`, contact-only `ContactForm.astro`, an honest local-test information panel, dummy-data notice and visible direct Tally fallback. The real iframe URL passes `source=ternloom-website` and `environment=local-test`, with hidden title, left alignment, transparent background and dynamic height. The official provider sizing script is allowed only on the contact route. No dependencies or runtime services were added; essential website copy and the direct fallback remain static HTML.
- Explicit release output omits this local test integration. Null email, false readiness flags and all project approval gates remain unchanged. The [contact design](superpowers/specs/2026-10-30-contact-form-design.md) records the agreed form setup and scoped integration checklist; the [verification record](verification/2026-10-30-contact-form.md) records local proof and limits.
- Wood Dust's source uses a Tally iframe, provider embed script and direct-link/email fallback. The repository does not establish the Tally form's provider-side anti-spam settings. Reuse its integration pattern only, never its form endpoint or recipients.
- Current primary documentation: [Tally reCAPTCHA](https://tally.so/help/recaptcha) documents respondent CAPTCHA; [Tally hidden fields](https://tally.so/help/hidden-fields) describes URL-passed context rather than a bot-verification control. [Cloudflare validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/) requires server-side token verification, and [Cloudflare testing](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) provides dummy keys for local development.
- A local page embedding Tally still contacts Tally and sends submitted data to that provider; configured account emails may fire. No agent submission, CAPTCHA completion, notification setting change or external message was performed. Output checks permit only this contact-route iframe/script and reject its presence during synthetic explicit release; the mailbox publication gate was not relaxed.

## Verification and limits

All commands used the pinned runtime. In this environment the exact prefix was `env PATH=/private/tmp/node-v24.22.2-darwin-arm64/bin:$PATH npm`.

- Clean `npm ci` succeeded. It reported one unapproved optional macOS watcher install script (`fsevents@2.3.3`); diagnostics and build worked without approving it. This install is not a security audit.
- `npm run check`, `npm test` (13 tests), `npm run test:publication` (10 publication tests), `npm run build` (eight pages) and `npm run check:output -- --stage website` passed. The default output command also uses the complete website stage. Checks cover exact route/canonical inventory, unique metadata, factual schema, local links/fragments/assets, image alternatives/dimensions, social PNG dimensions, no forms, no active draft mailto, and no executable client JavaScript.
- `npm exec -- node scripts/check-contact-states.mjs` proves confirmed, unconfirmed and missing contact states in a temporary fixture. `npm exec -- node scripts/check-404-release.mjs` proves seven canonical indexable release URLs, matching sitemap/robots and permanently noindex/excluded 404 in an isolated synthetic ready copy. Real source approvals are never changed. The real `TERNLOOM_RELEASE=1 npm run build` fails with contact/global/per-project blockers.
- New publication assertions first failed against the old global-only guard. The full website checker first failed against old social metadata; safe serialization and factual schema unit checks now pass. Documentation-local links and whitespace are checked separately.
- Controller browser measurements covered all eight pages, including a missing URL, at 375, 768, 1024 and 1440 CSS pixels, after fonts were ready: 32 checks, no horizontal overflow, one H1 and one main per page, no form or mailto. Home, project and service desktop screenshots were visually inspected. Colour and mono marks at 16/32px were inspected. Relevant measured contrast pairs: ink/paper 12.78:1, muted/paper 5.63:1, white/pine 9.54:1 and paper/pine 8.75:1.
- Controller HTTP checks against the final loopback Astro preview returned 200 for all seven content routes, each noindex with one H1, no form/mailto and only JSON-LD scripts. A missing URL returned an actual 404 with the custom recovery page; preview `sitemap.xml` returned 404 and `robots.txt` returned 200 without a sitemap advertisement. Static homepage and draft contact screenshots were visually checked. These are local preview responses, not production-host evidence.
- Native keyboard traversal, 200% zoom and an explicitly JavaScript-disabled browser could not be exercised through the available browser API. Static output proves content/link presence and absence of executable scripts, not those browser modes. No full accessibility, performance, hosted-security, indexing or AI-visibility audit is claimed.
- Local milestone commits remain on `main`; no branch, worktree, push, deployment, external upload or DNS change was performed. The pre-existing `.idea` ignore change stays unstaged.
- Fresh GPT Astra task reviews and the separate whole-site review approved the completed local implementation without actionable findings. The [local build verification record](verification/2026-10-30-local-build.md) preserves results, limitations, scope decisions and remaining launch gates. Local build is complete; no further implementation approval is needed for this delivered scope.

## Planning references

- [Approved configuration brief](superpowers/specs/2026-10-29-project-configuration-design.md)
- [Approved website design and exact brand reference](superpowers/specs/2026-10-30-website-design.md)
- [Selected project evidence](project-references.md)
- [External implementation plan](/Users/dev-zero/.codex/visualizations/2026/10/30/01a18b06-d02d-78b1-ab76-ae279c2d4c2c/ternloom-working-weave-implementation-plan.md)

The historical briefs preserve earlier planning state. Current authorization, implementation and verification are recorded here; routine per-route execution history belongs in task reports, not this document.
