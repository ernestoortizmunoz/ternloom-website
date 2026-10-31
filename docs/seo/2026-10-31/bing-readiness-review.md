# Bing search appearance and Copilot readiness review

Date: October 31, 2026, America/Toronto. Scope: current source, a fresh bounded public crawl, favicon compatibility, release output and current Bing guidance. No provider account access, deployment, indexing request or IndexNow submission was performed.

**Finding: the technical foundation is sound, but SEO/GEO/AI visibility is not an entirely closed task.** The public site still reflects the older release. Current local changes need publication and then actual Bing indexing/appearance verification. A practical SVG-only favicon compatibility gap was corrected locally with PNG and ICO versions of the approved mark. This is not a diagnosis proving why Bing omits an icon for any particular site.

## Observed website state

| Area | Public observation | Local result / next step |
| --- | --- | --- |
| Content access | All eight canonical content URLs returned 200. | No source crawl blocker found; ordinary HTTP success does not prove access from verified Bingbot infrastructure. |
| Canonicals | All eight responses use the intended HTTPS apex canonicals. | Existing URL ownership is preserved. |
| Robots and sitemap | General Allow rule and exactly eight canonical HTML URLs. | Guarded local release preserves that inventory and adds the selected Content-Signal policy. No icon, Markdown mirror or 404 was added to the HTML sitemap. |
| Snippet/grounding controls | No restrictive robots/bingbot meta directives or `data-nosnippet` attributes were captured. | No `nosnippet`, `noarchive` or `nocache` is introduced in canonical release HTML. Preview noindex remains intentional. |
| Favicon | SVG icon is linked and returns 200. Root ICO and 96px PNG returned 404. | Added valid 16/32/48px ICO and 96px PNG fallbacks; retained the existing adaptive SVG and stable URLs. |
| Entity/schema | Public HTML has Organization/WebSite, matching Service and visible BreadcrumbList types. | Latest local graph additionally includes the confirmed email and approved 512px logo. No ratings, physical office or unsupported claims are added. |
| Images | The public 1200×630 social image returns 200. | Approved screenshots retain dimensions, alternatives/captions and responsive formats in the local revision. |
| Published revision | Public service titles/descriptions and SVG-only icon configuration predate the local changes. `/brand/ternloom-logo.svg` returned 404. | The old public Organization graph does not advertise that new logo, so the 404 is not evidence of a broken live logo reference. Publish the complete intended source before testing its new URLs. |

Evidence: [public crawl](bing-live-check.json), [local verification](bing-local-verification.json). Public checks were ordinary read-only GET requests, not Bingbot impersonation, an account audit or a load test.

## What can suppress or limit a Bing appearance

Bing's [current Webmaster Guidelines](https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a) connect traditional crawl/indexing foundations with Copilot and grounding eligibility. They identify blocking, poor rendering, low-value/duplicate content and inaccurate structured data as relevant risks. Eligibility is not a guarantee of a particular search presentation.

For display controls, distinguish the following:

| Control | Relevant effect | Ternloom decision |
| --- | --- | --- |
| `noindex` | Excludes a URL from Bing search and associated grounding experiences. | Keep on previews, 404 and Markdown mirrors; absent from canonical release pages. |
| `nosnippet` / `data-nosnippet` | Restricts displayed text and may reduce useful citations. | Not added to the public business narrative. |
| `noarchive` | Current Bing guidance says it prevents Copilot/grounding use. | Do not add this as a substitute for the owner's training preference. |
| `nocache` | Current Bing guidance limits Copilot use to URL, title and snippet. | Not added. |
| `max-image-preview:none` / `max-snippet:0` | Can suppress image/text previews. | No such restrictions found. |

Bing documents its preview directives in [snippet controls](https://blogs.bing.com/webmaster/2020/4/Announcing-new-options-for-webmasters-to-control-their-snippets-at-Bing/) and newer [data-nosnippet support](https://blogs.bing.com/webmaster/2025/10/Bing-Introduces-Support-for-the-data-nosnippet-HTML-Attribute/). The older snippet article's sample includes `noarchive`; do not copy that sample wholesale when the goal includes current Copilot use. The local Content-Signal remains `ai-train=no, search=yes, ai-input=yes`; provider compliance with every usage preference has not been independently measured.

## Favicon, company logo and preview image are different

The favicon is the small site icon linked by `rel="icon"`; Organization logo markup describes the business; Open Graph artwork describes a share/preview image. One does not force another to appear in a Bing result.

The new files are format derivatives of the accepted mark, not a logo redesign:

- `/favicon.ico`: three valid PNG-backed ICO entries at 16, 32 and 48px.
- `/favicon-96x96.png`: square, 96px PNG with a consistent white background.
- `/favicon.svg`: original adaptive browser icon retained.

The head lists all three on every page. Native image inspection recognized the files; direct local Cloudflare responses return 200 with the correct ICO/PNG media types. Small-size rendering was visually inspected.

No current first-party Bing specification was found that establishes a complete normative favicon-format checklist. Microsoft Q&A results contain community advice, including unsupported claims that favicons must appear in XML sitemaps; those were not treated as Bing requirements. The fallback is a conservative compatibility improvement, not a claim that Bing categorically rejects SVG. Google's [current favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search) provides an additional cross-engine basis for a stable, crawlable square raster icon; it explicitly lists ICO/PNG and does not guarantee display even when requirements are met.

Do not repeatedly rename the icon or invent a new sitemap entry to chase a refresh. After publication, verify the homepage icon declarations and direct image responses, then inspect the homepage in Bing Webmaster Tools. If the icon remains wrong after Bing has fetched the current pages/assets, use [Bing Webmaster Support](https://www.bing.com/webmasters/help/webmaster-support-24ab5ebf). No fixed refresh deadline is promised.

## Remaining Bing/Copilot actions

1. Publish the reviewed local source in a separately authorized release. This review did not push or deploy. Confirm the new ICO/PNG, logo, discovery resources, metadata and content-use policy actually reach the canonical domain.
2. In Bing Webmaster Tools, use an existing verified property or complete verification if needed. Inspect the sitemap and the homepage, all three service pages and Contact. Record the actual indexed URL, selected canonical, crawl status and reported exclusion reasons. Absence of a verification meta tag alone does not establish that the owner lacks a verified property; DNS/import/XML methods may already be in use.
3. Review any reported Site Scan and structured-data issues against the real page purpose. Accurate markup can improve interpretation; do not add fake ratings, a storefront, an API catalog or unnecessary city pages to satisfy generic checks.
4. Review **AI Performance** for real Bing/Copilot citations. Bing's [AI Performance announcement](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) describes citation counts and referenced pages. Its [Topics Portfolio beta](https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/) needs sufficient site data and may not appear for a small/new site. These measurements are not a guarantee of ranking or visibility across every other assistant.
5. Confirm whether Cloudflare **Crawler Hints** is still enabled. The earlier owner screenshot showed it enabled, but current account state was not inspected. Cloudflare [documents free-plan availability and IndexNow support](https://developers.cloudflare.com/cache/advanced-configuration/crawler-hints/); that may provide change notifications without adding a runtime Worker or a second bespoke submission system. It is not proof of indexing or guaranteed applicability to every deployed response. A direct IndexNow implementation would be a separate optional task; [IndexNow acceptance](https://www.indexnow.org/documentation) means receipt, not indexing.

No Bing Places listing was created. Confirm genuine eligibility and public contact/location facts before any local-directory work; do not invent a customer-facing office, address, phone or hours.

## Public search sample and limits

One public Bing query for `"Ternloom Technologies"` displayed other similarly named businesses and Turnory, but not `ternloom.com` among the recorded results. See [the bounded snapshot](bing-branded-search.json). A subsequent domain-query navigation failed with a connection-closed error and produced no usable result. These observations do not prove that the domain is absent from Bing's index, establish a stable ranking, explain a favicon decision or measure actual AI citations. Locale/account were not controlled; private Webmaster Tools evidence remains the authoritative next diagnostic.

## Local verification and delivery boundary

Pinned-runtime diagnostics: 49 files, zero errors/warnings/hints. All 24 existing/conversion tests passed. The default nine-page build/output checker and an isolated real release passed. Focused checks verified icon dimensions/ICO entries, copied asset bytes, declarations on all eight release pages, unchanged canonical inventory and absence of restrictive release directives. macOS `sips` recognized both image types; 96px and 16px mark rendering was visually inspected. No new dependency, runtime script, account setting, submission or form action is added.

The source-side favicon change is ready locally. Hosted publication, Bing's chosen appearance, verified crawler access and provider/AI performance remain pending evidence, so this report does not label the whole SEO/GEO/AI process permanently complete.
