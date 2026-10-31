# Approved SEO improvements: local implementation

The owner approved implementing the [audit recommendations](README.md) after reviewing the completed audit. This document records the bounded implementation and verification; it does not reopen the accepted Working Weave design.

## Scope and approach

Use dedicated service metadata and page leads rather than lengthening shared card summaries. Apply the exact on-page proposals for service titles/descriptions, Home/About/Contact metadata, service-specific evidence introductions and software/integration decision links. Keep the existing H1s, project records, contact placement, privacy wording, three-service taxonomy and preview/release approval gates.

Use Astro's existing build-time image pipeline for the approved screenshot content, with responsive WebP candidates and content-hashed URLs. Preserve alternatives, captions, aspect ratios and lazy loading. Add a 512px SVG derivative of the approved mark for factual Organization logo markup and include the public email only when confirmed. Long immutable browser caching applies only to generated `/_astro/*` assets; mutable URLs and HTML retain revalidation. No new dependency, runtime service or analytics is needed.

New guide pages and a named biography require evidence/content beyond these exact fixes. Prepare guide briefs and an external measurement checklist locally instead of publishing invented case studies or unverified identity facts. Search Console/Bing and multi-assistant measurement remain external follow-up; actual access and outcomes must not be inferred from source changes.

## Tasks and acceptance

- [x] Apply approved metadata, fuller service leads, contextual links and factual work explanations. Build output keeps short shared summaries separate from metadata, preserves the eight canonical routes and resolves each new link.
- [x] Enrich Organization markup with the confirmed email and approved-geometry logo. The existing schema test failed on the absent email before implementation, then passed. No ratings, address, founding date or unverified profiles were added.
- [x] Generate responsive screenshots through Astro and cache only fingerprinted output. Check every generated source candidate, dimensions, visual content and narrow/wide layout; verify cache scope in local Workers emulation.
- [x] Prepare [three guide briefs](content-briefs.md) and a [concrete search/AI measurement checklist](external-measurement-checklist.md); record the remaining external steps without claiming completion.
- [x] Run diagnostics, the test suite, preview build/output checks and an isolated real release. Confirm `llms.txt`, release sitemap/robots and production contact context; preserve the default noindex preview. Obtain an independent Astra review and fix its metadata-source finding. Save only task files in a scoped local commit on existing `main`.

## Review focus

Metadata must not silently replace service-card summaries or schema descriptions. Image source imports must not break Node-only publication tests. All image candidates must exist and preserve approved content; narrow cards and detailed half-width layouts need different `sizes`. Cache headers must not make HTML or fixed-name assets immutable. Confirmed contact information must remain subject to readiness checks. No public launch, provider setting, form submission or new client/outcome claim is authorized.

## Verification record

All checks used pinned Node 24.22.2/npm 11.19.1. Diagnostics passed for 47 files with no errors, warnings or hints; all 23 unit tests passed. The nine-page preview build and complete output checker passed. An actual `npm run build:release -- --outDir /private/tmp/ternloom-seo-improvements-release` passed independently of the served preview. Focused assertions confirmed eight canonical indexable content URLs, exact sitemap/robots, production Tally context, noindex/excluded 404 and unchanged `llms.txt` with its eight working canonical destinations. The default preview remains noindex, disallow-all and without a production sitemap. See [output evidence](evidence/implementation-output.json).

The Service graph now describes each page's visible lead; it does not reuse the separately optimized search description. Shared card summaries stay unchanged. Contact metadata derives available methods from the same configuration as the visible contact page; changed/unconfirmed email and absent form states have focused coverage. The independent Astra review found no Critical/Important issue and one Minor hardcoded-email finding. That finding was fixed; the new state test failed before the helper existed, then the full 23-test suite passed. No findings were deferred.

The [responsive evidence](evidence/implementation-responsive.json) records eight pages at 375, 768 and 1440px: 24 checks without horizontal overflow, one H1 and one main per route. The contact iframe begins approximately 514px, 381px and 232px from the viewport top at these widths; no form data was entered. The [desktop service screenshot](evidence/implementation-software-desktop.png) and [mobile project screenshot](evidence/implementation-projects-mobile.png) were visually inspected. Mobile project images selected the 480px WebP candidates while rendering at 312 CSS pixels. Below-fold images remained lazy until approaching the viewport.

| Approved screenshot | Original JPEG bytes | 480px WebP bytes | 1265px WebP bytes |
| --- | ---: | ---: | ---: |
| Bonita Nights | 84,409 | 14,718 | 48,746 |
| Wood Dust Creations | 72,045 | 11,122 | 38,998 |
| Turnory | 51,143 | 8,242 | 29,364 |

All fifteen candidates exist at widths 320/480/640/960/1265. Original public JPEG URLs are retained with byte-identical source content for existing links; build-time asset imports stay inside Astro so Node-only publication tests continue to work. The [local Workers cache check](evidence/implementation-cache.json) confirms generated CSS/WebP receive `public, max-age=31536000, immutable`, while HTML, original JPEGs, the fixed-name logo and `llms.txt` retain `public, max-age=0, must-revalidate`. The default sandbox could not start the emulator/open its loopback socket; the authorized local-only check then ran with logs in temporary storage and telemetry disabled. This was not a deployment or provider setting change.

The pipeline follows [Astro's image guidance](https://docs.astro.build/en/guides/images/); header scope follows [Cloudflare's static-asset header documentation](https://developers.cloudflare.com/workers/static-assets/headers/). Historical audit Lighthouse measurements remain point-in-time live results, not measurements of this local revision. Source byte reductions do not establish a new Lighthouse score, field CWV result, indexing or AI visibility gain.

Search Console/Bing verification, real assistant answers, permitted biography/case-study evidence and guide publication remain external or editorial follow-up. Three briefs are ready; no new guide routes, fabricated results, crawler-policy changes, analytics, form submissions, pushes or deployment were included. The pre-existing `.gitignore` change remains outside this task.
