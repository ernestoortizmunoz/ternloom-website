# Technical SEO audit — Ternloom Technologies

Date: October 30, 2026. Scope: `https://ternloom.com`, eight content routes, the custom 404, and the local static Astro implementation. Read-only audit; no source, provider, DNS, deployment or form changes.

## Assessment and evidence boundaries

The live site and implementation have a sound technical SEO foundation: static HTML, consistent canonical URLs, a small linked page inventory, factual JSON-LD and deliberate preview/release controls. No critical or high-severity defect was found within the checked scope. The optimization opportunities below do not establish a ranking penalty or a Core Web Vitals failure.

This report uses the `technical-seo` skill, repository instructions, project context and configuration brief. Current primary documentation takes precedence over outdated checklist assumptions. Local source was inspected directly. Existing generated `dist` was inspected only as preview output, not mistaken for production. Live evidence is identified separately below. No private Search Console, Bing Webmaster Tools, Cloudflare account, field-performance dataset or actual search crawler logs were available.

No aggregate score is assigned. A numerical score would imply comparable coverage of categories that were not measured. In particular, actual index coverage, Core Web Vitals and full mobile/accessibility compliance are **N/A / unverified**, not zero or automatic passes.

## Crawlability, canonicalization and rendering

### Current public evidence

The coordinating audit captured [sanitized public crawl evidence](evidence/crawl.json) at `2026-10-31T03:09:36Z` (October 30 in Ottawa). This sub-audit independently inspected the returned metadata, redirect chains, resource headers and link graph. Requests used ordinary public access; a successful request does not prove access from authentic Googlebot IPs or reveal private crawler settings.

| Checked URL/path | Result |
| --- | --- |
| `/` | 200, self-canonical, no restrictive robots meta/header |
| `/services/website-development/` | 200, self-canonical, no restrictive robots meta/header |
| `/services/custom-business-software/` | 200, self-canonical, no restrictive robots meta/header |
| `/services/business-automation-integrations/` | 200, self-canonical, no restrictive robots meta/header |
| `/projects/` | 200, self-canonical, no restrictive robots meta/header |
| `/about/` | 200, self-canonical, no restrictive robots meta/header |
| `/contact/` | 200, self-canonical, no restrictive robots meta/header; production form context |
| `/privacy/` | 200, self-canonical, no restrictive robots meta/header |
| `/a-deliberately-missing-seo-page/` | Actual 404 with custom page and `noindex, nofollow` |
| `/robots.txt` | 200, `User-agent: *`, `Allow: /`, correct absolute sitemap URL |
| `/sitemap.xml` | 200, XML namespace and exactly the eight canonical 200 content URLs; no 404 or preview URL |

All eight content responses have unique titles, one H1, English-Canadian language metadata and successfully parsed JSON-LD. Inspection of 183 same-origin anchor occurrences found no missing page or fragment targets. All eight routes are linked from home. The nine fetched first-party asset URLs (three CSS files, favicon, font, three screenshots and social image) returned 200 with appropriate MIME types. No HTTP-only subresource reference was found in the parsed links, images, scripts or iframes. This does not audit requests generated inside Tally.

| Normalization sample | Observed chain |
| --- | --- |
| `https://www.ternloom.com/contact/?test=seo-audit` | 301 → canonical HTTPS apex contact URL, query retained |
| `http://ternloom.com/contact/?test=seo-audit` | 301 → canonical HTTPS apex contact URL, query retained |
| `http://www.ternloom.com/contact/?test=seo-audit` | 301 → HTTPS www → 301 → HTTPS apex, query retained |
| `https://ternloom.com/about` | 307 → `/about/`, then 200 |
| `https://ternloom.com/about/index.html` | 307 → `/about/`, then 200 |
| `https://ternloom.com/contact/?utm_source=seo-audit` | 200 without redirect; source metadata uses query-free `/contact/` canonical |

No loops were observed. The HTTP-www sample takes two hops, a low-impact efficiency detail rather than an urgent defect; canonical in-site links already avoid it. Redirect checks are representative samples, not an exhaustive test of arbitrary casing, path encodings or parameters.

### Source findings

- `astro.config.mjs:10–17` sets the canonical origin, static output, trailing slashes and directory output; `wrangler.jsonc:7–10` serves these as static assets with real custom 404 handling.
- `src/config/seo.ts:5` defines exactly eight canonical content paths. `scripts/visibility-output.mjs:21–32` emits only existing indexable canonical pages into XML, escapes values and publishes the sitemap location through robots.txt.
- Every page uses the shared metadata head in `src/layouts/SiteLayout.astro:21–47`, including `lang="en-CA"`, viewport, title, description, canonical, social cards and safely serialized JSON-LD.
- Primary navigation, footer links, service links and the privacy link are ordinary HTML anchors. All eight content routes are reachable from the homepage in one navigation step; none depends on a JavaScript menu or client-side router. See `src/components/SiteHeader.astro:8–14` and `src/components/SiteFooter.astro:9–15`.
- Essential copy, headings and links are rendered in initial HTML. The only executable third-party integration is the contact-page Tally iframe and deferred sizing script (`src/components/ContactForm.astro:11–15`). The visible email and direct-form link provide fallback contact paths; this does not prove the provider form itself works without JavaScript.
- `src/pages/404.astro:6–10` explicitly sets noindex. Its recovery links and explanatory text are static. A canonical pointing at `/404/` is not an indexability defect when the response is a genuine 404 and noindex.

Canonical markup is a signal, not proof of Google's chosen canonical. The shared source makes the signals consistent; Google's selected canonical remains a Search Console validation item. See [Google canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

### Preview and release controls

`scripts/build.mjs:10–16` explicitly owns the release flag. `src/config/publication.ts:4–22` rejects release if contact, retention, global readiness or per-project approvals are missing. `npm run build` intentionally generates noindex pages, disallow-all robots and no production sitemap; `npm run build:release` is the release path. Do not remove preview noindex or change approvals merely to improve an audit score.

`public/_headers:7–8` adds noindex on matching Workers hostnames. Public version URLs still need a separate check if they are distributed. Noindex must be visible to a crawler to be honored; blocking robots.txt is not a substitute for access control or a guarantee that a known URL disappears from search. See [Google robots directives](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

## Performance and delivery

The source avoids a client framework, hydration bundles, analytics, externally hosted fonts and a raster homepage hero. The original hero is inline SVG. Shared typography uses one local variable WOFF2 with preload and `font-display: swap` (`src/layouts/SiteLayout.astro:30`, `src/styles/global.css:3–8`). Content images reserve width and height, use asynchronous decoding and lazy loading.

Measured local file sizes are useful transfer-budget evidence, not browser timings:

| Asset | Bytes on disk | Interpretation |
| --- | ---: | --- |
| Shared generated stylesheet | 8,698 | Small shared CSS asset; route styles are additional. |
| Homepage generated stylesheet | 6,004 | Additional route CSS. |
| Contact generated stylesheet | 4,568 | Additional route CSS. |
| DM Sans WOFF2 | 36,980 | One first-party font, preloaded. |
| Bonita screenshot | 84,409 | Fixed 1265 × 712 JPEG. |
| Wood Dust screenshot | 72,045 | Fixed 1265 × 712 JPEG. |
| Turnory screenshot | 51,143 | Fixed 1265 × 712 JPEG. |
| Social preview PNG | 59,723 | Metadata image; not a normal page-body image request. |

The three screenshots total 207,597 bytes when all are loaded. That is modest, but their fixed dimensions allow a small optimization described below. Disk sizes are not compressed network payloads. The current live crawl confirms gzip for all HTML, all three stylesheets and the SVG favicon, and HTTP/2 on the canonical responses. Shared CSS transferred 2,260 bytes; homepage-specific CSS 1,126 bytes; contact-specific CSS 945 bytes. Canonical HTML transfer sizes ranged from 3,158 to 5,886 bytes. Already compressed WOFF2/JPEG/PNG assets had no additional content-encoding, which is reasonable. Render-blocking CSS is normal for initial styling; its existence alone is not a defect or reason to introduce asynchronous styling and a flash of unstyled content.

The contact page's provider iframe can add network work and resize after load. Its reserved initial height is 60rem (`src/styles/theme.css:42`); sizing comes from Tally. No source review can quantify the resulting layout shift or interaction latency inside that frame. Measure the contact route separately before changing its accepted placement or adding lazy loading, since the form begins near the first viewport.

No field LCP, INP or CLS result is claimed. Passing Core Web Vitals means meeting all three thresholds at the 75th percentile, separately for mobile and desktop: LCP ≤ 2.5 seconds, INP ≤ 200 milliseconds and CLS ≤ 0.1. A single browser load, Lighthouse run or curl response time is not that field assessment. TTFB is diagnostic rather than a fourth Core Web Vital, and the skill's blanket 200ms threshold is not used as a pass/fail rule. See [Web Vitals definitions](https://web.dev/articles/vitals).

The coordinating audit attempted Google's anonymous PageSpeed Insights API for the mobile homepage; it returned HTTP 429 due to quota. That API response is not a site performance failure. The subsequent PageSpeed UI fallback succeeded. Five initial-page-load lab configurations were recovered on October 30, 2026: four representative mobile routes and the homepage on desktop.

| Route and mode | Captured EDT | Performance | Accessibility | Best Practices | SEO |
| --- | --- | ---: | ---: | ---: | ---: |
| [Home mobile](https://pagespeed.web.dev/analysis/https-ternloom-com/jjkdcw27wv?form_factor=mobile) | 23:12 | 100 | 100 | 100 | 100 |
| [Home desktop](https://pagespeed.web.dev/analysis/https-ternloom-com/jjkdcw27wv?form_factor=desktop) | 23:12 | 100 | 100 | 100 | 100 |
| [Projects mobile](https://pagespeed.web.dev/analysis/https-ternloom-com-projects/km0kn3nj4f?form_factor=mobile) | 23:14 | 100 | 100 | 100 | 100 |
| [Contact mobile](https://pagespeed.web.dev/analysis/https-ternloom-com-contact/67bk7nbevn?form_factor=mobile) | 23:14 | 94 | 100 | 96 | 100 |
| [Custom software mobile](https://pagespeed.web.dev/analysis/https-ternloom-com-services-custom-business-software/dhbqzd8cu0?form_factor=mobile) | 23:20 | 99 | 100 | 100 | 100 |

| Route and mode | FCP | LCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: |
| Home mobile | 0.8s | 0.8s | 0ms | 0 | 0.8s |
| Home desktop | 0.4s | 0.4s | 0ms | 0 | 0.4s |
| Projects mobile | 0.8s | 0.8s | 0ms | 0 | 0.8s |
| Contact mobile | 1.7s | 1.7s | 240ms | 0 | 2.9s |
| Custom software mobile | 1.5s | 1.5s | 0ms | 0 | 2.5s |

Saved evidence: [home mobile text](evidence/pagespeed-home-mobile.txt), [home mobile screenshot](evidence/pagespeed-home-mobile.png), [home desktop text](evidence/pagespeed-home-desktop.txt), [projects mobile text](evidence/pagespeed-projects-mobile.txt), [contact mobile text](evidence/pagespeed-contact-mobile.txt), [custom software mobile text](evidence/pagespeed-service-mobile.txt), and [custom software mobile screenshot](evidence/pagespeed-service-mobile.png). All used Lighthouse 13.6.0 with HeadlessChromium 153.0.8010.36. Mobile runs emulated Moto G Power with Slow 4G throttling; desktop used the emulated desktop/custom-throttling preset. Displayed metrics are rounded. Each is a single lab result, not a distribution or a reproducibility study.

Home, projects and the representative service page performed strongly under these lab configurations. Contact's higher blocking time warrants focused measurement of the third-party form experience; the 94 Performance score is still a strong initial-load result. Every report's field section explicitly reported **No Data**, so field LCP, INP and CLS remain unknown. TBT is not an INP measurement. Lighthouse's accessibility score covers its automated checks, and its SEO score covers basic checks; neither certifies full accessibility, actual indexing, ranking strength or a field Core Web Vitals pass. No tested route's result should be generalized to untested pages or form interactions.

Despite 100 Performance scores, the homepage mobile report surfaced estimated opportunities for image delivery (152 KiB), render-blocking requests (480ms) and cache lifetimes (4 KiB); projects mobile also estimated 152 KiB for image delivery. These are tool estimates, not measured savings or additive promises. The image/cache findings reinforce T1/T2; CSS changes still require demonstrated benefit and visual verification.

Contact's report listed 799 KiB of estimated unused JavaScript and eight long main-thread tasks. These totals identify investigation work; the saved summary does not attribute every byte/task to a specific script or prove it is safe to remove. Code unused during initial loading may be required when a visitor interacts with the form or CAPTCHA. The contact Best Practices score of 96 was associated with console messages from Google reCAPTCHA `api2/anchor` and `api2/bframe`: `requestStorageAccess: Permission denied.` This is a third-party diagnostic observed in the lab. The owner previously confirmed a successful live contact flow; the console messages alone do not prove that submission is broken. No CAPTCHA was completed or form submitted during this audit, and no weakening of CAPTCHA protection is recommended.

## Mobile and accessibility foundations

The viewport does not disable zoom. Body text is 1.0625rem, fluid headings use `clamp`, images cap at their container width, and major grids collapse at 48rem. Navigation wraps and remains visible without JavaScript. Primary navigation, service links and action links use a 3rem minimum control height. Visible focus, a skip link and reduced-motion rules are present (`src/styles/global.css:35–64`).

The coordinating audit supplied [current live Cua measurements](evidence/responsive.json), independently inspected for this update:

| Requested viewport | Content routes checked | Horizontal overflow | H1/main | Computed body text | Font readiness |
| --- | ---: | --- | --- | --- | --- |
| 375 × 812 | 8 | None observed | One of each on every route | 17px | Not explicitly recorded |
| 768 × 900 | 8 | None observed | One of each on every route | 17px | Loaded on every route |
| 1440 × 900 | 8 | None observed | One of each on every route | 17px | Loaded on every route |

These 24 observations cover the eight canonical content routes, not the custom 404. The reported document widths were 360, 753 and 1425 pixels respectively, consistent with the browser's narrower available layout area; the evidence did not show horizontal overflow. Contact had one iframe at each size; other routes had none. No form data was entered. Some below-fold lazy images remained unloaded (`naturalWidth: 0`) at the time of observation. This is expected lazy-loading behavior, not a broken-image diagnosis; their public asset URLs returned 200 in the HTTP crawl.

Mobile image observations showed a 1265px source rendering at 312 CSS pixels when loaded, reinforcing the responsive-image opportunity in T1. This comparison alone does not establish waste at every device pixel ratio or identify an LCP element.

The mobile measurement also recorded a 19.5px-high footer privacy link and 21px-high breadcrumb Home links, alongside shorter inline links on contact/privacy. These deserve a focused target-spacing and usability check if accessibility work is commissioned. Their heights alone do not establish a WCAG failure: spacing and applicable inline-link exceptions were not assessed. Smaller support text is likewise not automatically an SEO failure, and inline text links do not universally need a 44 × 44 box.

The source and current browser evidence support basic responsive behavior at the sampled sizes, not complete mobile or WCAG certification. No cross-browser screen-reader, zoom, full keyboard or third-party form audit was performed in this technical sub-audit.

## Structured data, language and URL design

`src/config/seo.ts:15–29` uses Organization and WebSite with stable `@id` references, matches Service nodes to their visible service route and includes BreadcrumbList only where breadcrumbs appear. `serializeJsonLd` escapes HTML-sensitive characters. There are no invented ratings, offers, employees, addresses or claims. The source uses the correct brand, canonical origin and Canada service area.

The Organization node is deliberately minimal. Optional factual enrichment is listed below; missing recommended properties do not make it invalid. Service markup describes the service but does not itself promise a supported Google rich-result treatment. LocalBusiness should not be introduced by inventing a storefront or physical presence. Formal validator and Rich Results Test output was not obtained; syntax/graph consistency is a narrower check.

URLs are lowercase, descriptive, hyphenated and shallow. There is one approved English-Canadian language version, so there is no missing hreflang implementation. No pagination exists, so pagination markup is inapplicable. `<lastmod>` is optional; omitting it is preferable to manufacturing dates. If added later, use actual significant content updates, not each build's timestamp. See the [sitemap protocol](https://www.sitemaps.org/protocol.html) and [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Prioritized recommendations

### T1 — Low: use responsive screenshots when optimizing the next image revision

**Evidence and scope:** `src/components/ProjectSummary.astro:20` sends one 1265 × 712 JPEG per project without `srcset` or `sizes`. The same source is used for narrow homepage cards and wider detailed project layouts. `src/data/projects.ts:40–87` holds the image records; the assets are under `public/images/projects/`.

**Effect:** smaller devices and narrow cards may download more pixels than necessary. This is an efficiency opportunity, not a measured LCP failure.

**Recommendation:** preserve the approved screenshot content and dimensions; generate smaller width variants and compare WebP/AVIF quality and bytes. Use Astro's image pipeline or explicit `picture`/`srcset` with sizes matching the two layouts. If using Astro assets, move image imports into an appropriate source asset directory and update the typed project data rather than expecting `public/` files to transform automatically. Keep intrinsic dimensions and meaningful alt/caption text. Retain lazy loading for below-fold cards; only change a first image to eager/high priority if measured as above-fold LCP. See [Astro images](https://docs.astro.build/en/guides/images/) and [LCP optimization guidance](https://web.dev/articles/optimize-lcp).

**Validation:** compare transferred bytes and visual sharpness at mobile/desktop DPRs, inspect selected `currentSrc`, confirm layout dimensions, and rerun output checks. Do not assert a percentage saving before generating and comparing assets.

### T2 — Low: cache fingerprinted assets without routine revalidation

**Evidence and scope:** `public/_headers:1–8` has no cache override. All nine fetched live assets return `Cache-Control: public, max-age=0, must-revalidate` and ETag; the three generated CSS filenames contain content hashes. This matches Cloudflare's documented static-asset default and is valid caching, not “no cache.” See [Cloudflare asset headers](https://developers.cloudflare.com/workers/static-assets/headers/).

**Effect:** repeat navigations may need conditional requests even when content is unchanged. The first-visit gain may be negligible on this small site.

**Recommendation:** after confirming deployment asset-retention behavior, add a scoped `/_astro/*` rule with `Cache-Control: public, max-age=31536000, immutable` for truly fingerprinted output. Keep HTML and mutable fixed-name assets revalidating. Do not apply year-long immutable caching to `/fonts/dm-sans-latin.woff2`, screenshots or the favicon unless they are also versioned by filename and references are updated.

**Validation:** confirm live header scope on a CSS asset and HTML page after a separately authorized deployment; confirm changed CSS receives a new URL. Browser repeat-load evidence should show reuse without stale HTML or asset mismatches.

### T3 — Low, optional: enrich the factual Organization node

**Evidence and scope:** `src/config/seo.ts:18` includes only name and URL plus the identifier. The public email is confirmed in `src/config/site.ts:27`, and accepted brand assets exist.

**Effect:** additional confirmed identifiers can help machines connect the business and its logo; this does not guarantee a knowledge panel or ranking improvement.

**Recommendation:** optionally add the confirmed email and a crawlable representative logo. The current mark SVG is explicitly 40 × 40, so prepare a suitable brand-preserving asset meeting Google's minimum 112 × 112 logo guidance before selecting it for markup. Add no phone, address, social profile or other business fact without confirmation. Update the exact graph assertion in `scripts/check-output.mjs:72` along with the source. See [Google Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization).

**Validation:** parse the emitted JSON-LD, confirm the logo URL's status/content/dimensions and assess it on white; run the relevant validator and repository output assertions.

### T4 — Informational: trailing-slash redirects need no urgent intervention

Cloudflare `force-trailing-slash` uses 307 by design. Google treats permanent 301/308 redirects as stronger canonical signals, while following temporary redirects and considering other canonical signals. With consistent slash canonicals, internal links and sitemap URLs, a slash-normalization 307 is not a critical ranking blocker. Do not add a Worker solely to change this status code. If permanent redirect rules are introduced in later authorized hosting work, preserve path/query, avoid loops and ensure the final URL remains the existing canonical. See [Cloudflare HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/) and [Google redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects).

## Required follow-up validation, distinct from defects

1. In an authorized Search Console/Bing review, inspect coverage, submitted sitemap processing, chosen canonicals and real fetch errors. Technical eligibility is not evidence that any page is currently indexed or ranking.
2. Obtain field data if available, or record its absence. The five recorded lab configurations establish a useful initial baseline covering home, projects, contact and a representative service page. Repeat contact measurements and inspect script/task attribution before optimization. Preserve conditions, number of runs and metrics. Reduce only demonstrated bottlenecks while preserving immediate form access, email/direct-form fallbacks and CAPTCHA. If a real-browser form failure is reproduced, the owner can authorize an end-to-end test and provider investigation. Neither a 100 score nor small files imply a field pass.
3. Confirm noindex on any publicly shared version/preview hostname and inspect host-specific robots behavior. Keep the canonical production domain indexable.
4. Validate JSON-LD with the appropriate tools if search presentation changes. Supported rich results and generic Schema.org validity are separate questions.
5. Reconcile the deployed commit and provider bindings through an authorized account review before future deployment. HTTP success does not reveal all deployment settings.

The checked HTTPS responses include baseline nosniff, referrer, frame and permissions headers. Missing HSTS or CSP would merit a separate scoped security discussion if needed, not an automatic SEO failure. No sensitive-path probing was performed. No Next.js-specific advice, unnecessary pagination markup, fabricated last-modified dates, new crawler restrictions or paid monitoring product is required by this audit.
