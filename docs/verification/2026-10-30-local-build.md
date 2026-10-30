# Working Weave local build verification

Date: October 30, 2026. Result: **local website complete; public release intentionally deferred**.

The approved Working Weave website is implemented on existing `main`. Implementation review covered `da8c93c..2ceffa6`; documentation of this handoff follows separately. Fresh GPT Astra task reviews and a separate whole-site review approved the implementation without actionable Critical, Important or Minor findings. No branch, worktree, push, deployment, account change or DNS change was performed.

## Delivered

Seven content pages and a custom 404: home, three services, selected projects, about and contact. The site preserves the accepted interlocking mark and wordmark, original woven artwork, shared theme, licensed local font and the confirmed experience statement. Project screenshots are real public-site captures selected for local review. Bonita Nights and Wood Dust Creations retain technology-provider attribution; Turnory remains Ternloom's own application in development.

Static HTML contains essential content, links and questions without executable client JavaScript. Metadata includes distinct titles/descriptions, canonical URLs, social artwork and factual Organization/WebSite/Service/BreadcrumbList data where appropriate. JSON-LD serialization escapes HTML-sensitive characters. The form is deferred; contact remains null and the contact page explicitly describes its inactive local state.

## Observed checks

All package commands used pinned Node 24.22.2 and npm 11.19.1. Astro 7.4.4, TypeScript 6.0.3 and `@astrojs/check` 0.9.12 agree with the manifest and lockfile.

| Check | Result |
| --- | --- |
| Clean dependency install | Passed; one unapproved optional `fsevents@2.3.3` install-script warning remained. It was not approved; diagnostics and builds worked. |
| Astro diagnostics | 42 files; zero errors, warnings or hints. |
| Unit tests | 13 passed, including ten publication tests. |
| Static build and website output | Eight HTML files; metadata, schema, routes, links/fragments, images, dimensions and social artwork checks passed. |
| Contact fixture | Confirmed, unconfirmed and missing contact states passed in an isolated fixture, without changing real approvals. |
| Synthetic release fixture | Seven canonical indexable sitemap URLs, matching robots and excluded/noindex 404 passed in a temporary ready copy. |
| Actual release request | Correctly rejected contact, global-readiness and individual project copy/image blockers. Default noindex output was rebuilt successfully afterward. |
| Browser layout matrix | Eight page types at 375, 768, 1024 and 1440 CSS pixels: 32 checks, no horizontal overflow, exactly one H1 and one main, no form or mailto. Fonts were ready before measurement. |
| Visual inspection | Home, service, selected-project and contact views inspected; accepted mark checked at 16/32px in colour and mono; original 1200×630 social artwork inspected. |
| Local static HTTP | Seven content routes returned 200 with noindex and only JSON-LD scripts. Missing route returned an actual custom 404. Preview sitemap returned 404; robots returned 200 without a sitemap advertisement. |

Measured theme pairs include ink/paper 12.78:1, muted/paper 5.63:1, white/pine 9.54:1 and paper/pine 8.75:1. The additional muted/sage pairing measured 4.75:1. These measurements are focused evidence, not a full accessibility certification.

Browser-native keyboard traversal, actual 200% zoom and explicitly disabled-JavaScript mode were unavailable through the browser API. Static-output checks establish essential HTML content and absence of executable scripts; they do not claim those browser-mode tests. No hosted performance, security-header, indexing, mailbox-delivery or AI-visibility result is claimed.

## Implementation decisions

The following controller rulings preserved the authorized scope:

1. The instruction to build everything locally approved the pending technical foundation and implementation plan. An incorrect interpretation would require reversible local rework; no publication followed.
2. Preserve the existing accepted logo rather than introduce a literal T or bird. A different future preference would require replacing logo assets, not changing the architecture.
3. Defer the form and retain null contact rather than activate an unconfirmed candidate email. A later confirmed destination can enable the existing email state; no enquiries have been accepted or sent.
4. Commit milestones directly to existing `main`, with no branches or worktrees, following the explicit owner instruction. Changing that choice later would affect local history organization; nothing was pushed.
5. Show current genuine public website captures as local candidate project imagery, while retaining false publication approvals. A different image choice is a reversible asset replacement; the release guard prevents treating these candidates as approved publication assets.

The final reviewer considered missing contact, pending copy/image approvals, unavailable browser modes, hosted launch work and historical setup artifacts. Missing contact/approvals are intentional release gates; browser limitations are disclosed; hosted work needs separate authorization; retained setup artifacts do not affect generated pages. None blocks the authorized local handoff.

## Remaining release scope

Confirm public contact, approve final Bonita Nights/Wood Dust copy and screenshot publication, and authorize launch. Review search/training crawler policy, provider setup, redirects, hosted headers/status and indexing controls at that time. Preserve existing email DNS and domain services. No form processor, analytics, paid monitoring or additional service category is implied.

The pre-existing `.idea` addition in `.gitignore` remains unstaged and outside implementation commits. Current state and future instructions are in [project context](../project-context.md); reproducible commands are in [README](../../README.md).
