# Production contact preparation: local verification

Date: October 30, 2026. Scope: final contact and privacy preparation on existing main, without deployment, provider settings changes, CAPTCHA completion, form submission or external messages.

## Owner decisions and actual state

- Public contact/privacy inbox: `info@ternloom.com`, explicitly confirmed by the owner after the reported successful dummy submission/inbox test.
- Policy: delete active enquiry copies within 12 months of submission unless needed for an ongoing project or required records. This is owner-selected policy, not automatic deletion or a legal interval asserted by the agent.
- `site.contactForm` retains Tally form `dbEbrd`. `contactConfirmed` is true; provider-copy, privacy-notice and both portfolio readiness flags remain false. Per-project approvals are unchanged.
- Contact includes the confirmed email, final website copy, privacy link, visible direct fallback and one local-only notice. The hosted Tally iframe still visibly says “Test form — please use dummy details only” and “Send test enquiry”; website code does not alter provider-managed copy. The [operator checklist](../contact-form-operations.md) supplies exact final text and manual retention steps.

## Automated proof

All commands used Node 24.22.2 through `env PATH=/private/tmp/node-v24.22.2-darwin-arm64/bin:$PATH`.

- Added unit expectations first failed against missing form/retention release guards and missing privacy inventory.
- `npm run check`: 45 files, zero errors, warnings or hints.
- `npm test`: all 17 tests passed, including missing/blank form, invalid/unconfirmed retention and each individual readiness gate.
- `npm run build`: nine static outputs, including eight content routes and 404.
- `npm run check:output`: all nine default routes noindex, no sitemap, exact canonicals, unique metadata, factual schema, local links/assets, footer privacy discovery, confirmed email and contact-only Tally script/iframe.
- `node scripts/check-contact-states.mjs`: confirmed email and inactive missing/unconfirmed states pass in an isolated fixture.
- `node scripts/check-404-release.mjs`: isolated fully approved fixture has eight canonical indexable sitemap URLs, static privacy page, contact form with production context, no local notice/test context, and permanently noindex/excluded 404. Real approvals are unchanged.
- Actual `TERNLOOM_RELEASE=1 npm run build` correctly stopped before output generation, naming final form/privacy approvals and the unresolved global/per-project portfolio approvals. The existing default local output remains noindex.
- An initial privacy-output assertion expected the plural word “backups” while the notice said “backup systems”; the check was corrected to test the substantive backup disclosure without prescribing plural wording.

## Browser proof

- Reused the loopback static preview at `http://127.0.0.1:4330/`. Browser bindings from the previous session were stale; a fresh background inspection tab recovered verification. No original user tab was closed or repurposed.
- Contact and privacy were inspected at desktop width 1280 and mobile width 375. Corresponding document widths were 1265 and 360 with no horizontal overflow. Privacy reading width was 672 desktop and 312 mobile, one main-page H1 in both cases.
- Mobile contact frame measured 312 wide and resized to 1288 high; its internal document width was also 312. Its fields and reCAPTCHA loaded. The static confirmed email, privacy and direct Tally links are visible outside the iframe.
- Native keyboard checks: Tab reached the visible skip link; Enter moved focus to `main-content`; subsequent tabs reached the embedded Name field and then Email. No values were entered or submitted. This is partial traversal, not a full accessibility audit or completed CAPTCHA flow.
- Viewport override was reset. The added tab was left on the privacy draft for review.
- Screenshots: [contact](/Users/dev-zero/.codex/visualizations/2026/10/30/01a18b06-d02d-78b1-ab76-ae279c2d4c2c/ternloom-production-contact-local.png), [privacy](/Users/dev-zero/.codex/visualizations/2026/10/30/01a18b06-d02d-78b1-ab76-ae279c2d4c2c/ternloom-privacy-draft-local.png).

## Independent review and limits

Fresh GPT Astra page implementers handled contact/privacy separately. A separate GPT Astra reviewer found no actionable code/release-safety findings and requested current-state documentation updates, which were addressed in AGENTS, README and project context. The source check compared two changed pages with their checklists and the existing About/layout/theme; approximately 27 project files and two searches. A separate temporary copied-source calibration detected a planted inline H1 weight outside the shared theme. No worktree was created. Calibration establishes that source-style check, not browser/provider behavior.

The notice remains a concrete draft pending owner review, with no claim of legal review or compliance certification. Owner-managed Tally copy, actual notification configuration, ongoing deletion operations, third-party retention and provider error/success states were not changed or independently verified. The prior owner-reported inbox success remains distinct from agent verification. Full keyboard traversal, 200% browser zoom, explicitly disabled JavaScript and blocked-provider simulation remain untested. Website HTML provides fallback access; the Tally form itself depends on its provider's implementation. Hosting, DNS, headers, crawler policy and production indexing remain separate authorized launch work.

## Contact placement revision after owner feedback

The owner reported that both mobile and desktop required excessive scrolling before reaching the form. The top contact region was revised in `contact.astro` and its contact-only `ContactForm.astro`: compact H1/email introduction, top-aligned desktop columns, mobile introduction immediately followed by the form, accessible hidden H2, shorter preamble and direct fallback after the iframe. Existing lower sections, provider integration, preview/release context and approvals remain unchanged.

Measured loaded first-input document positions, including Tally's unchanged introduction and test paragraph:

| Viewport | Before | After |
| --- | ---: | ---: |
| Mobile 375×812 | 2070px | 724px |
| Desktop width 1142 | 1275px | 394px |

Mobile first-input height was 36px, so the complete first field now fits in the initial 812px viewport. The revised iframe starts at 514px on mobile and 232px on desktop. The page had no horizontal overflow at 375, 768, 769 or 1142px; iframe widths at the 768/769 breakpoint were 705/388px. A fresh tab and a top-of-document fragment were used to avoid retained scroll position while capturing proof. Temporary viewport overrides were reset and the extra inspection tab was closed.

`npm run check` (45 clean diagnostic files), `npm run build` (nine outputs), `npm run check:output` and the synthetic explicit-release fixture passed after the final layout edit. No new unit tests were added for this reversible layout change; publication logic was unchanged. A fresh Astra implementer and separate reviewer handled the change; the reviewer inspected six source files and reported no actionable deviations, with rendered/provider behavior left to parent verification. No provider settings or data were changed and no form was submitted.

Screenshots: [mobile initial viewport](/Users/dev-zero/.codex/visualizations/2026/10/30/01a18b06-d02d-78b1-ab76-ae279c2d4c2c/ternloom-contact-near-top-mobile.png), [desktop](/Users/dev-zero/.codex/visualizations/2026/10/30/01a18b06-d02d-78b1-ab76-ae279c2d4c2c/ternloom-contact-near-top-desktop.png).
