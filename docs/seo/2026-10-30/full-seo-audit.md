# Ternloom Technologies: comprehensive SEO audit

Audit date: October 30, 2026. Site: [ternloom.com](https://ternloom.com/). Auditor: GPT Astra, using the SEO Audit skill with current primary documentation and the repository's business constraints.

## Executive assessment

The website has a sound static SEO foundation. The live crawl confirms all eight content pages return 200, expose unique metadata and self-canonicals, and remain available for indexing; the missing-page test returns a genuine noindex 404. Source inspection shows clear service separation, crawlable navigation, factual structured data, responsive layouts and intentionally different preview/release indexing policies. The main commercial opportunity is to make the software and automation search descriptions more specific and strengthen approved first-hand evidence over time.

No critical SEO defect was found in the inspected source or public responses. Public crawl findings and measurement limits are recorded below. A successful HTTP response or a valid sitemap does not establish that Google or Bing has indexed a page, selected its declared canonical, or ranked it for a query.

No overall numerical SEO score is assigned. The audit distinguishes directly observed implementation from editorial opportunities and external verification gaps. A generic percentage would obscure the unmeasured search and performance outcomes. The measured Lighthouse category scores below are reported separately with their test conditions; they are not a comprehensive SEO or ranking score.

## Scope and method

- Read `AGENTS.md`, [project context](../../project-context.md), the [configuration brief](../../superpowers/specs/2026-10-29-project-configuration-design.md), all nine page sources, shared layouts/components, business records, metadata/schema generation, CSS, robots/sitemap generation and hosting configuration.
- Examine all eight intended indexable routes and the custom 404 through the shared public crawl, including metadata, headings, images, scripts, links and JSON-LD. Evidence: [sanitized crawl](evidence/crawl.json).
- Review fresh browser DOM measurements for all eight live content routes at three viewport widths and shared PageSpeed Insights results for home on mobile/desktop, projects on mobile, contact on mobile and custom software on mobile. Evidence and test limits appear in the performance/mobile sections.
- Review current Google Search Central, Google Business Profile, web.dev and Bing documentation. The skill's mechanical title/description lengths, generic image framework requirement and link-count ceiling are not treated as search-engine rules.
- Audit only: no website source changes, builds, commits, deployment, account/DNS changes, form submission or CAPTCHA interaction by this auditor. The report is the sole authored deliverable.

The shared crawl was recorded at `2026-10-31T03:09:36Z`, corresponding to October 30 at 23:09 in Ottawa. Its 200/noindex statements describe returned HTML and headers under a normal public request, not search-bot rendering or private account state.

This is not a private Search Console/Bing account audit, backlink database audit, keyword-volume study, accessibility certification, field Core Web Vitals measurement or legal review. Previously documented contrast and contact-position checks are identified as historical evidence, separate from the fresh browser and Lighthouse measurements.

## Findings and priorities

| Priority | Classification | Finding | Recommended action |
| --- | --- | --- | --- |
| First follow-up | External verification gap | Actual indexing, canonical selection and search impressions are unavailable to this audit. | Inspect the eight URLs and sitemap in the owner's verified Search Console and Bing Webmaster Tools properties; record actual results. |
| Next editorial improvement | Confirmed opportunity | Software and automation descriptions are generic summaries that omit useful deliverable and audience context. | Add distinct page metadata descriptions using existing approved scope; retain concise card summaries. |
| Next evidence improvement | Confirmed opportunity | Experience is stated accurately but the About page gives little first-hand detail about the person doing the work. | If the owner wants public attribution, approve a concise practitioner introduction and substantiated experience examples. |
| Optional enhancement | Confirmed opportunity | Organization JSON-LD has name, URL and identifier, but no logo or confirmed email. | Add accurate supported properties and a suitably sized approved logo asset. |
| Measure before optimizing | Confirmed implementation limitation; impact unknown | Portfolio JPEGs use one full-size source; third-party contact form loads eagerly and resizes. | Measure representative pages, then optimize only the resource or layout behavior shown to matter. |
| Focused performance follow-up | Measured lab finding | Contact mobile scored Performance 94 with 240ms TBT; reCAPTCHA logged storage-access denials in the lab. | Inspect the resource/main-thread trace and browser behavior before changing delivery; retain CAPTCHA and contact fallbacks. |
| Optional performance enhancement | Confirmed opportunity | Hashed CSS and other sampled assets require browser revalidation. | Consider a long immutable cache lifetime only for content-hashed assets; establish versioned URLs before extending unversioned asset lifetimes. |

No production-blocking change is recommended solely to satisfy a checklist. Missing analytics, a blog, a phone number, ratings, street address, FAQ schema or a fourth service are not defects in this site's approved scope.

## Route inventory and intent

All paths below refer to `https://ternloom.com`. Titles were confirmed against the live crawl; the parenthesized count is descriptive information, not a pass/fail limit.

| Route | Title | H1 | Primary intent |
| --- | --- | --- | --- |
| [Home](https://ternloom.com/) | Ternloom Technologies — Websites, Software & Integrations (57) | Built around the way you work. | Brand and broad small-business technology offering |
| [Website development](https://ternloom.com/services/website-development/) | Website Development for Small Businesses — Ternloom (51) | Website Development | New website or redesign service evaluation |
| [Custom software](https://ternloom.com/services/custom-business-software/) | Custom Business Software for Small Businesses — Ternloom (56) | Custom Business Software | Tools built around a business workflow |
| [Automation](https://ternloom.com/services/business-automation-integrations/) | Business Automation & Integrations for Small Businesses — Ternloom (66) | Business Automation & Integrations | Connections and repetitive-work handoffs |
| [Projects](https://ternloom.com/projects/) | Selected Projects — Ternloom Technologies (41) | Selected projects | Verify relevant work, role and status |
| [About](https://ternloom.com/about/) | About Ternloom Technologies (27) | About Ternloom Technologies | Understand business, experience and approach |
| [Contact](https://ternloom.com/contact/) | Discuss Your Project — Ternloom Technologies (44) | Discuss your project | Start an enquiry |
| [Privacy](https://ternloom.com/privacy/) | Privacy Notice — Ternloom Technologies (38) | Privacy notice | Understand enquiry-data handling |
| Custom error document | Page Not Found — Ternloom Technologies (38) | Page not found | Recovery only; excluded from indexable inventory |

The service taxonomy is appropriate for the confirmed offer. Hosting remains supporting delivery context. No service index route is required: each of the three services is directly navigable, and visible service breadcrumbs correctly link Home to the current page without inventing a nonexistent `/services/` destination.

The homepage's editorial H1 is not a confirmed SEO failure. The adjacent intro, title, service links and body state the actual offer and geography explicitly ([homepage source](../../../src/pages/index.astro), lines 37–53). Preserve the approved Working Weave design; consider headline testing only if real search/user evidence identifies confusion.

## Crawlability, canonicalization and indexation

### Fresh public checks

| Check | Observed result |
| --- | --- |
| Eight canonical content routes | 200 each; no robots `noindex` meta or `X-Robots-Tag`; exactly one matching absolute canonical each |
| `robots.txt` | 200; `User-agent: *`, `Allow: /`, canonical sitemap declaration |
| `sitemap.xml` | 200 XML; exactly the eight canonical content URLs, excluding 404 |
| `/a-deliberately-missing-seo-page/` | 404; custom recovery HTML; `noindex, nofollow` |
| HTTPS www contact URL with query | 301 to HTTPS apex; path and query preserved; final 200 |
| HTTP apex contact URL with query | 301 to HTTPS apex; final 200 |
| HTTP www contact URL with query | Two 301 hops via HTTPS www to HTTPS apex; final 200; no loop |
| `/about` and `/about/index.html` | Each 307 to `/about/`; final 200 |
| Nine linked local assets | All 200: three CSS files, favicon, font, three screenshots and social image |

Evidence: [shared crawl](evidence/crawl.json), `pages`, `resources`, `variants` and `assets`. The one-hop slash/index redirects are temporary 307 responses rather than permanent redirects. This is a low-priority canonical-signal improvement to consider if a supported hosting configuration is later authorized, not a current block: destinations, self-canonicals, internal links and sitemap already agree. The two-hop HTTP-www upgrade also works; removing a hop is optional, not an emergency DNS or redirect change.

The intended route contract is centralized in [SEO configuration](../../../src/config/seo.ts), line 5. [Astro configuration](../../../astro.config.mjs), lines 10–14, declares static directory output, canonical site and trailing slashes. [Visibility generation](../../../scripts/visibility-output.mjs), lines 16–32, emits a release sitemap only for approved canonical indexable content and a matching robots sitemap declaration.

Preview output is deliberately `noindex, nofollow`, with `Disallow: /` and no production sitemap. That is not a production defect. [Shared layout](../../../src/layouts/SiteLayout.astro), lines 16–28, derives page policy from the build context; the [404 source](../../../src/pages/404.astro), lines 6–10, permanently opts out. Keep these safeguards intact.

The custom 404 declares a `/404/` canonical even when served for another missing path. A real 404 response and noindex are the important controls; this is not evidence that missing URLs are being indexed. Removing canonical/social metadata from error documents could simplify output but is low priority and unnecessary for the observed recovery behavior.

Canonical tags, redirects, sitemap entries and internal links should consistently identify the HTTPS apex trailing-slash URLs. They are canonicalization signals, not proof of search-engine selection. [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) explains the distinction. Sitemap publication helps discovery but does not guarantee crawling or indexing. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)

Owner follow-up: inspect all eight URLs in Search Console's indexed-page view and live test, compare user-declared and Google-selected canonicals, review Page indexing and sitemap processing, and inspect Bing's indexed/live versions. Capture dates and actual reason labels rather than relying on `site:` search result counts. [Google URL Inspection](https://support.google.com/webmasters/answer/9012289/), [Bing URL Inspection](https://www.bing.com/webmasters/help/URL-Inspection-55a30305), [Bing sitemap guidance](https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/)

## Titles, descriptions and social metadata

The common [layout](../../../src/layouts/SiteLayout.astro), lines 23–47, supplies a viewport, title, description, absolute canonical, Open Graph title/description/URL/image/locale and Twitter large-image card with image alt text. The approved social image is declared as 1200×630. Per-page metadata is server-rendered; no browser JavaScript must run to discover it. A shared brand social image is reasonable for this small brochure site; unique imagery per page is optional.

The crawl confirmed eight distinct titles and eight distinct descriptions, each with the required metadata present once. All pages use `en-CA`. Open Graph URL equals the canonical, and the social PNG returned 200. Description character counts are 158 home, 131 website, 49 software, 68 automation, 135 projects, 160 About, 146 Contact and 110 Privacy. These counts describe the fetched strings; they are not ranking thresholds.

Titles describe distinct page purposes. The automation title is the longest and may be truncated on some devices, but 66 characters is not a violation. Short About or Privacy titles are clear and do not require padding. Google derives title links from several sources and truncates to available presentation width. [Google title-link guidance](https://developers.google.com/search/docs/appearance/title-link)

### Specific opportunity: service descriptions

The metadata description is currently the same value as the visible service summary ([service layout](../../../src/layouts/ServicePage.astro), lines 24–25 and 33). The software summary is “Software built around a business's own workflows.” The automation summary is “Connected tools and automated workflows that reduce repetitive work.” These are accurate but less informative than the actual service pages. [Service records](../../../src/data/services.ts), lines 61 and 104.

The issue is specificity, not a required length. Google may select page text instead of the description and adapts snippets to the query and display. [Google snippet guidance](https://developers.google.com/search/docs/appearance/snippet)

Suggested drafts for later owner review, using already described capabilities:

| Page | Proposed distinct metadata description |
| --- | --- |
| Custom software | Custom software for small businesses in Ottawa and across Canada. Explore internal tools, portals and dashboards built around your workflow. |
| Automation | Connect business tools and reduce repetitive handoffs. Explore automation and integrations for small businesses in Ottawa and across Canada. |
| Website development, optional | Websites and redesigns for small businesses in Ottawa and across Canada, with clear service pages, project galleries and straightforward enquiry paths. |

Implementation approach if approved: add a `metaDescription` field to `ServiceDefinition`, populate the three records, and use it for the `SiteLayout` description while retaining `summary` for compact cards and the visible lead. Verify that title/description/Open Graph/Twitter values remain unique and accurate. Adding geography to every title is unnecessary; test it only against observed local query intent.

## Content quality, trust and geographic relevance

The pages explain customer problems, possible deliverables, scope boundaries, process and useful questions in static HTML. The three services have distinct intent rather than duplicated city or keyword pages. Canada-wide service and Ottawa location are visible throughout. `en-CA` matches the current English site; there is no translated French equivalent requiring `hreflang`.

The portfolio distinguishes technology-provider relationships from Ternloom's own product. Bonita Nights shows a booking-request flow with human confirmation; Wood Dust Creations shows a catalogue, Square-hosted checkout links, enquiries, blog and portfolio; Turnory explicitly remains in development. Source: [project records](../../../src/data/projects.ts), lines 29–88. Automation copy also states that these examples do not establish fully automated operations ([service records](../../../src/data/services.ts), lines 118–121). Preserve those distinctions.

The About page repeats the approved personal experience statement but does not identify a practitioner or give detailed first-hand examples ([About source](../../../src/pages/about.astro), lines 15–20). That is a trust-content opportunity, not a missing search-engine field. If comfortable, the owner could approve a short name/role introduction, the kinds of work personally handled, and one concrete explanation of a project decision. Do not convert 15+ years of personal IT/software experience into company age or imply an unverified team.

Future case studies should answer a real buyer question with approved constraints, Ternloom's role, the implemented solution, screenshots and observed outcomes. Measurable outcomes belong only where records support them. The current small portfolio does not need additional thin routes or fabricated results. A blog should follow real expertise and customer questions, not a publishing-frequency quota. [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

Google Business Profile is an eligibility question, not an automatic missing SEO asset. Current guidance generally requires in-person customer contact and excludes online-only businesses. No physical storefront, street address, opening hours or in-person service model is established here. Confirm eligibility before any profile task; keep Organization schema unless a more specific factual model is warranted. [Google Business Profile eligibility](https://support.google.com/business/answer/13763036)

## Internal linking and headings

The shared header links home, all three services, projects, About and Contact. The footer links all services, projects, About, Contact and Privacy. Consequently each content route is reachable from the homepage in one link, including Privacy through the footer. Source: [header](../../../src/components/SiteHeader.astro), lines 8–14; [footer](../../../src/components/SiteFooter.astro), lines 9–15. There is no source-defined orphan among the eight routes.

Contextual links reinforce this graph: homepage service introductions lead to each service; service pages show relevant projects and link to the portfolio; detailed project summaries link to related service pages; contact includes all service choices and privacy links. Anchors describe their destinations. The error page provides home and service recovery links without being a normal navigation destination.

Headings use a page H1, section H2s and subordinate H3s; detailed projects use H2 on the portfolio and H3 beneath a service-page evidence section. Empty headings were not found in source. The footer's separate H2 sections do not constitute an invalid hierarchy. One clear H1 is a useful consistency rule here, not a universal numeric Google ranking requirement.

Independent analysis of the shared live extraction found one H1 on all nine documents, no empty headings and no downward heading-level skips. Across the eight content pages, 183 same-origin HTTP(S) anchor occurrences, including repeated navigation and fragments, resolve to a 200 content route; every referenced fragment exists. Each content route receives links from all seven other content pages. No broken internal destination, missing fragment or orphan was found within this complete declared route set. The 404's same-document skip link resolves within the error document and is not a broken content-page link.

Do not add links to reach an arbitrary minimum, or remove useful links because a count crosses 100. Google recommends meaningful crawlable links and explicitly rejects a magical ideal link count. [Google link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)

## Structured data

| Type | Current implementation | Assessment |
| --- | --- | --- |
| Organization | Stable `/#organization` identifier, public name and canonical homepage URL | Factual but minimal; optional enrichment below |
| WebSite | Stable identifier, public name/URL, `en-CA`, publisher reference | Appropriate site identity |
| Service | Only on its matching service route; name, description, URL, provider, Canada service area | Matches visible content; no dedicated Google Service rich-result promise |
| BreadcrumbList | Matches visible Home/current-page breadcrumbs with contiguous positions | Appropriate for the seven interior content routes |

Source: [schema generator](../../../src/config/seo.ts), lines 15–29. JSON-LD serialization escapes HTML-sensitive characters, and an unknown/mismatched service route throws rather than emitting unrelated markup.

Live JSON-LD parsed without errors on all nine documents. The eight content pages each include Organization/WebSite; precisely three include Service; the seven interior content pages include BreadcrumbList. The 404 includes only the base organization/site graph. These are parser and content-consistency checks, not Rich Results Test certification.

The Organization has no required-property failure: Google's guidance lists applicable recommended properties rather than mandatory Organization fields. A useful optional enhancement is confirmed email and a logo URL. [Google Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization)

For the logo, do not blindly reuse the 40×40 intrinsic dimensions in [current mark](../../../public/brand/ternloom-mark.svg), line 1. Publish a suitably sized rendition of the approved geometry, such as 512×512, confirm appearance on white, and use a crawlable absolute URL. Google specifies a minimum 112×112 logo. Keep name, URL and identifier stable. Add `sameAs` only for owner-confirmed organization identity profiles; portfolio customer sites are not identity equivalents.

Optional future validation: use rendered HTML in the Rich Results Test for supported Google types and a general schema validator for Service. JSON parseability and inspected property consistency are not the same as running those tools. A valid BreadcrumbList does not guarantee its appearance; current Google guidance describes its search feature as desktop-only. [Google breadcrumb guidance](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)

The visible question sections are useful without FAQ schema. As of this audit date, Google says FAQ rich results stopped appearing on May 7, 2026 and removed their documentation in June. Do not promise FAQ rich-result eligibility for this agency or recommend markup to unlock that retired feature. [Google documentation updates](https://developers.google.com/search/updates)

## Images and performance signals

The three portfolio screenshots have descriptive alt text, meaningful nearby captions and explicit 1265×712 dimensions. Decorative graphics use appropriate SVG treatment; Next.js Image and React server components are irrelevant to this static Astro site. JPEG is a supported image format, not an SEO error. [Google image guidance](https://developers.google.com/search/docs/appearance/google-images)

| Local asset | Exact source bytes | Observed handling |
| --- | ---: | --- |
| `bonita-website-preview.jpg` | 84,409 | Lazy, async decoding, fixed intrinsic dimensions |
| `wooddust-website-preview.jpg` | 72,045 | Lazy, async decoding, fixed intrinsic dimensions |
| `turnory-website-preview.jpg` | 51,143 | Lazy, async decoding, fixed intrinsic dimensions |
| `dm-sans-latin.woff2` | 36,980 | Local variable font, preloaded, `font-display: swap` |
| `social-preview.png` | 59,723 | Social metadata asset; not a rendered page image |

These filesystem byte sizes match the shared crawl's decoded and transferred byte counts for these binary assets. All 11 screenshot occurrences across the five pages using them expose alt text, dimensions, lazy loading and async decoding in the live HTML. All screenshot sources are the same size regardless of rendered viewport because [ProjectSummary](../../../src/components/ProjectSummary.astro), line 20, has no `srcset` or `sizes`. There is potential to serve smaller variants for narrow screens and compare WebP/AVIF, but the current files are modest. Do not predict a performance score or savings without measuring.

The three fetched CSS assets are gzip-compressed: shared layout 8,698 decoded / 2,260 transferred bytes, homepage 6,004 / 1,126, and contact 4,568 / 945. All sampled assets return `Cache-Control: public, max-age=0, must-revalidate` with validators. That supports revalidation but gives no positive browser freshness lifetime; it does not establish that edge caching is disabled or that every revisit transfers the full body. Optional improvement: scope long immutable caching to Astro's content-hashed `/_astro/` resources. Do not apply year-long immutable caching to unchanged font/image URL names without a versioning strategy. No cache configuration was changed.

Only contact includes an executable provider script and iframe ([ContactForm](../../../src/components/ContactForm.astro), lines 5–15). It reserves an initial 60rem height, then accepts provider sizing. This is a relevant place to measure layout shifts and long tasks. A direct Tally link and email fallback remain in static HTML. Do not automatically lazy-load the prominent enquiry iframe: delaying the primary interaction could worsen the page's purpose.

The live extraction confirms no executable scripts on the other seven content pages; contact has one deferred Tally script and one production-context iframe. This HTML inventory excludes the iframe's independently loaded third-party internals; the contact Lighthouse result below captures some resulting runtime effects. No form interaction was performed.

Static rendering, limited scripts, a single local WOFF2 font and image dimensions are favorable implementation signals. CSS remains required for presentation; the presence of a stylesheet alone is not a render-blocking defect worth removing. Source inspection cannot establish LCP, INP or CLS.

### Fresh measured lab results

The shared PageSpeed Insights reports were captured October 30, 2026 at 23:12–23:20 EDT. Mobile conditions: Lighthouse 13.6.0, emulated Moto G Power, Slow 4G throttling, HeadlessChromium 153.0.8010.36, single initial page-load session. Homepage desktop uses emulated desktop and custom throttling. The public PSI interface was used after an API 429 response. Each report's real-user field section says **No Data**.

| Page and device | Performance / Accessibility / Best Practices / SEO | FCP | LCP | TBT | CLS | Speed Index |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Home mobile | 100 / 100 / 100 / 100 | 0.8 s | 0.8 s | 0 ms | 0 | 0.8 s |
| Home desktop | 100 / 100 / 100 / 100 | 0.4 s | 0.4 s | 0 ms | 0 | 0.4 s |
| Projects mobile | 100 / 100 / 100 / 100 | 0.8 s | 0.8 s | 0 ms | 0 | 0.8 s |
| Contact mobile | 94 / 100 / 96 / 100 | 1.7 s | 1.7 s | 240 ms | 0 | 2.9 s |
| Custom software mobile | 99 / 100 / 100 / 100 | 1.5 s | 1.5 s | 0 ms | 0 | 2.5 s |

Result URLs: [home mobile](https://pagespeed.web.dev/analysis/https-ternloom-com/jjkdcw27wv?form_factor=mobile), [home desktop](https://pagespeed.web.dev/analysis/https-ternloom-com/jjkdcw27wv?form_factor=desktop), [projects mobile](https://pagespeed.web.dev/analysis/https-ternloom-com-projects/km0kn3nj4f?form_factor=mobile), [contact mobile](https://pagespeed.web.dev/analysis/https-ternloom-com-contact/67bk7nbevn?form_factor=mobile). Saved text: [home mobile](evidence/pagespeed-home-mobile.txt), [home desktop](evidence/pagespeed-home-desktop.txt), [projects mobile](evidence/pagespeed-projects-mobile.txt), [contact mobile](evidence/pagespeed-contact-mobile.txt). Screenshots: [home mobile](evidence/pagespeed-home-mobile.png), [projects mobile](evidence/pagespeed-projects-mobile.png), [contact mobile](evidence/pagespeed-contact-mobile.png).

The final representative service-template test was captured at 23:20:18 EDT: [custom software mobile report](https://pagespeed.web.dev/analysis/https-ternloom-com-services-custom-business-software/dhbqzd8cu0?form_factor=mobile), [saved text](evidence/pagespeed-service-mobile.txt), [screenshot](evidence/pagespeed-service-mobile.png). The five configurations cover four mobile routes plus homepage desktop; no additional lab run is needed to complete this audit.

These are measured initial-load lab results under the stated configurations. They do not establish production field Core Web Vitals, INP, successful form submission, every route's accessibility, or ranking potential. Lighthouse's SEO category covers a limited set of technical checks, and its accessibility score expressly leaves manual checks outstanding.

Contact warrants focused follow-up: its report records eight long main-thread tasks and a 799KiB estimated unused-JavaScript opportunity alongside 240ms TBT. Attribution and realistic removable savings require inspecting the actual trace; do not treat the estimate as safely removable first-party code. The Best Practices score of 96 specifically accompanies `requestStorageAccess: Permission denied` console messages from Google's reCAPTCHA `api2/anchor` and `api2/bframe` resources. This is a confirmed lab observation, not proof that the live enquiry form fails. The owner previously confirmed the live contact/privacy workflow in [project context](../../project-context.md). Preserve CAPTCHA protection and email/direct-form fallbacks; investigate reproducibility and user impact before proposing provider changes.

Home and projects still list image-delivery and cache/rendering opportunities despite their 100 performance scores. Those estimates warrant inspecting the actual resource trace before optimizing; they are not observed user savings or urgent defects. Current modest assets and the strong lab results support keeping image work lower priority than useful service descriptions and search-index evidence.

Later follow-up, if warranted by implementation work: inspect the contact trace and remeasure any changed resource/loading behavior. Separately obtain field CrUX or Search Console data if available, identifying page versus origin aggregation and the reporting window. Absence of field data on a new/small site is not a failure. Core Web Vitals assessment uses LCP, INP and CLS at the 75th percentile; a synthetic run does not establish the site's field pass. [Google web.dev Web Vitals](https://web.dev/articles/vitals)

## Mobile and accessibility signals

Source supports responsive wrapping navigation, stacked service/project layouts, fluid headings, visible focus, a skip link, semantic landmarks and reduced-motion preferences. Default body text is 1.0625rem (17px with a 16px browser default). Smaller labels/supporting text exist; a rigid “everything must be 16px” SEO rule would misrepresent accessibility requirements.

Navigation and ActionLink controls use a 3rem minimum height ([theme](../../../src/styles/theme.css), line 41; [header](../../../src/components/SiteHeader.astro), line 23; [ActionLink](../../../src/components/ActionLink.astro), line 7). Ordinary inline links and the footer privacy link are not all 44×44 boxes. That fact alone does not establish a target-size failure; spacing, inline-link exceptions and actual rendered hit areas need evaluation.

Fresh [responsive measurements](evidence/responsive.json) cover all eight live routes at requested viewport widths 375, 768 and 1440px: 24 cases, each with no measured horizontal overflow, 17px computed body text, one H1 and one main landmark. The browser's recorded document widths are 360, 753 and 1425px respectively, consistent with its 15px scrollbar allocation. Loaded screenshot examples retain 1265px intrinsic width while rendering as small as 312px; below-fold lazy images can remain unloaded until scrolled and are not thereby broken.

The same evidence flags some small inline/breadcrumb/privacy anchor rectangles for manual review; it does not by itself establish an accessibility failure. The checks did not measure every WCAG criterion, third-party iframe accessibility or screen-reader behavior. The mobile-homepage Lighthouse accessibility result of 100 likewise covers automated checks only.

Historical project verification measured contrast pairs including ink/paper 12.78:1 and muted/paper 5.63:1 and records the earlier contact layout measurements. Those findings remain prior evidence, separate from the fresh responsive sample. [Project verification context](../../project-context.md)

Remaining manual checks: keyboard route through the live page and provider iframe, 200% zoom/reflow, touch-target spacing, screen-reader labels, and a JavaScript-disabled visit using the email/direct-form fallback. Do not submit the form or solve CAPTCHA during an audit-only task.

## Practical roadmap

1. **Establish search evidence.** Owner or separately authorized account task: verify sitemap processing and indexed status in Google/Bing, inspect canonical selection, and preserve a dated baseline of impressions, queries and landing pages. Success means documented actual status, not a guarantee that all URLs become indexed.
2. **Improve service snippets.** Review the two stronger descriptions above; separate metadata from card summaries. Validate returned HTML and uniqueness after any later implementation and authorized release. Monitor actual search snippets and query-specific CTR only once enough comparable data exists.
3. **Strengthen first-hand trust.** Obtain optional owner-approved practitioner detail and more concrete project narratives. Preserve relationship/status boundaries and do not add invented quantitative results.
4. **Enrich identity markup.** Add confirmed email and a suitable approved logo derivative; validate structured data and image fetchability. Keep this an enhancement, not a blocker.
5. **Investigate measured performance before asset work.** Start with the contact page's main-thread trace and reCAPTCHA console behavior, retaining its current protection and fallbacks. Use the strong home/projects lab baseline and any later field data to prioritize targeted work. Recheck the affected page rather than claiming site-wide gains.

Preserve the approved design, static essential content, three-service structure, preview noindex and release gates. Do not create duplicate city pages, add arbitrary keyword repetitions, manufacture reviews, introduce unapproved analytics or change crawler policy as a side effect of SEO work.

## Limitations and monitoring

Search Console, Bing Webmaster Tools, server crawler logs, private hosting settings, verified deployment commit, backlink quality, search demand, rankings, conversions and field Core Web Vitals are not established by this report. Search crawler access can differ from a normal public request; account inspection and genuine crawler logs are needed to resolve that gap. External third-party form behavior was not exercised.

The skill mentions SearchFit.ai as a monitoring option. Its features, accuracy, price and fit were not evaluated, so it is not a substantiated purchase recommendation or a requirement. Existing free Google/Bing webmaster reports plus periodic public route checks are a proportionate starting point for an eight-page site. No monitoring service was installed or authorized here.
