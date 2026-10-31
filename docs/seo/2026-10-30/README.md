# Ternloom Technologies: SEO and AI visibility audit

Audit date: October 30, 2026, America/Toronto. Site: [ternloom.com](https://ternloom.com/). Scope: all eight public content pages, the custom 404, source/configuration, live HTTP responses, internal links, representative performance tests and enquiry-focused keyword research.

**Finding: no critical technical crawl/indexing blocker was found in the sampled live responses.** The useful next work is clearer service search descriptions, better evidence and contextual links, and establishing actual search-console and AI-answer baselines. Technical eligibility and Lighthouse scores do not establish indexing or rankings.

Separate GPT Astra agents reviewed general SEO, on-page SEO, technical SEO and AI retrieval. Keyword research was consolidated into one map and independently reviewed by Astra. Reviews used the five requested skills, applying current primary documentation where older checklist advice was inapplicable. No composite SEO score, traffic forecast or AI visibility score was invented.

## Reports and usable files

| Deliverable | Contents |
| --- | --- |
| [Full SEO audit](full-seo-audit.md) | Whole-site findings, passing foundations, evidence and priorities. |
| [On-page SEO audit](on-page-seo-audit.md) | All eight pages; exact current/proposed titles, descriptions, introductions, headings and contextual links. Proposed copy has not been applied. |
| [Technical SEO audit](technical-seo-audit.md) | Crawl directives, canonicals, redirects, assets, structured data, responsive behavior, performance and deployment boundaries. |
| [AI visibility audit](ai-visibility-report.md) | Entity facts, search versus training access, optional LLM guide, reproducible prompt baseline and measurement limits. |
| [Keyword cluster report](keyword-cluster-report.md) | 82 unique editorial seeds in 12 intent groups, existing page ownership, six possible guides, exclusions and content order. |
| [Keyword map CSV](keyword-map.csv) | One keyword per row, primary/supporting role, intent, target URL and proposed/existing status. Demand and difficulty are not measured. |
| [Local llms.txt](../../../public/llms.txt) | Concise factual Markdown guide linking the eight canonical pages. Prepared and build-checked locally; not deployed. |

## Evidence collected

- The [public crawl](evidence/crawl.json) records all eight content URLs returning 200, self-referencing canonicals, unique titles/descriptions and no accidental noindex. The missing URL returns a real noindex 404. Robots permits crawling and the sitemap lists exactly the eight canonical content URLs.
- All 183 same-origin anchor occurrences, including fragments, resolve within the captured inventory. All eight pages have incoming navigation links; this is separate from the opportunity to improve contextual body links. Nine fetched first-party asset URLs returned 200. All 11 image occurrences have alternatives and reserved dimensions.
- The [responsive observations](evidence/responsive.json) cover eight routes at 375, 768 and 1440px: 24 checks, no observed horizontal overflow, one H1 and one main on each page, and 17px body text. These are sampled layout observations, not full accessibility certification.
- The [keyword research log](evidence/keyword-research.json) supports broad market terminology. Individual seeds are editorial hypotheses derived from the approved services. The log does not prove their frequency, monthly volume, ranking difficulty or statistically shared search results.

### Measured performance

PageSpeed Insights ran one initial-load lab report per sampled route, with mobile and desktop views for Home. Mobile used Lighthouse 13.6.0, an emulated Moto G Power and Slow 4G; desktop used emulated desktop with custom throttling. Tests were captured between 23:12 and 23:20 EDT. See the [machine-readable summary](evidence/performance-summary.json) and saved report text/screenshots in `evidence/`.

| Page / device | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| [Home mobile](https://pagespeed.web.dev/analysis/https-ternloom-com/jjkdcw27wv?form_factor=mobile) | 100 | 100 | 100 | 100 | 0.8s | 0ms | 0 |
| [Home desktop](https://pagespeed.web.dev/analysis/https-ternloom-com/jjkdcw27wv?form_factor=desktop) | 100 | 100 | 100 | 100 | 0.4s | 0ms | 0 |
| [Projects mobile](https://pagespeed.web.dev/analysis/https-ternloom-com-projects/km0kn3nj4f?form_factor=mobile) | 100 | 100 | 100 | 100 | 0.8s | 0ms | 0 |
| [Custom software mobile](https://pagespeed.web.dev/analysis/https-ternloom-com-services-custom-business-software/dhbqzd8cu0?form_factor=mobile) | 99 | 100 | 100 | 100 | 1.5s | 0ms | 0 |
| [Contact mobile](https://pagespeed.web.dev/analysis/https-ternloom-com-contact/67bk7nbevn?form_factor=mobile) | 94 | 100 | 96 | 100 | 1.7s | 240ms | 0 |

Every report's real-user section says **No Data**. Field Core Web Vitals and INP remain unknown; TBT is not INP. The SEO category checks basic technical rules, not overall ranking strength. Automated accessibility scores leave manual checks outstanding. The experimental Agentic Browsing result is not an AI mention/citation score.

Contact's Best Practices finding specifically records Google's reCAPTCHA `api2/anchor` and `api2/bframe` reporting `requestStorageAccess: Permission denied`. Its report also lists eight long tasks and an estimated unused-JavaScript opportunity. These observations warrant targeted trace/browser investigation if user impact is reproducible; they do not prove a broken form. The owner has already confirmed the live enquiry workflow. Keep CAPTCHA protection and email/direct-form fallbacks.

## Prioritized next work

| Order | Work | Completion measure | State |
| --- | --- | --- | --- |
| 1 | Establish Google Search Console and Bing Webmaster Tools baselines; inspect sitemap processing and representative URLs. | Provider account evidence of indexing/chosen canonicals and actual query data. Submission alone is not indexing. | Account access/setup not performed. |
| 2 | Separate dedicated service metadata from shared card summaries; consider the exact three service proposals in the on-page report. | Accurate, distinct service/location descriptions in emitted head markup and social metadata. Software's current description is 49 characters and automation's 68, but length itself is not a ranking defect. | Proposed only. |
| 3 | Explain custom software versus integrations with contextual links and service-specific interpretation of approved work. | Visitors can choose the appropriate starting point; real project roles/status remain explicit. | Exact draft copy supplied; not applied. |
| 4 | Run the recorded AI prompt baseline and establish legitimate identity evidence. | Logged answers/citations across the four platforms; confirmed profile ownership and permitted attributions before adding links/schema. | Prompt plan supplied; actual visibility not measured. |
| 5 | Publish the optional factual LLM guide during a separately authorized release. | Hosted `/llms.txt` returns 200 with eight working canonical destinations. | Local asset prepared and validated; public URL was 404 at audit time. |
| 6 | Brief useful cost/scope, build-versus-buy and manual-data-entry guides using approved evidence and subsequent query data. | Each guide answers a distinct buyer decision and links to its existing service owner; no invented prices, results or city offices. | Six possible guide URLs are proposals, not new pages. |
| 7 | Consider scoped hashed-CSS caching, responsive screenshot variants and optional factual Organization email/logo enrichment. | Measured repeat-load/image benefit; changed assets get new URLs; logo meets display guidance; HTML remains fresh. | Low-priority recommendations, not implemented. |

The main commercial query groups are **website development Ottawa**, **custom software development Ottawa** and **business automation Ottawa**, with small-business, Canada, redesign, internal-tool and integration variants. These are fit-based targeting choices, not claims that they have the highest search volume. Keep one existing service page per intent. Avoid duplicated city pages and unapproved managed IT, security, mobile-app, SEO-agency or hosting-package offerings.

Do not add FAQ markup to pursue Google's retired FAQ rich results, manufacture `lastmod` dates, force keywords into every heading, or treat arbitrary word/link counts as search requirements. Keep ordinary useful question sections. See the current primary sources in the detailed reports, including [Google documentation updates](https://developers.google.com/search/updates).

## Local changes and verification

This task adds the audit package, keyword map and factual `public/llms.txt`, and records the material outcome in project context. Existing approved page copy, metadata, schema, caching policy, provider settings and contact behavior are unchanged. The LLM guide is optional retrieval context; it cannot force indexing, recommendations, citations or training access.

Final local verification used the pinned Node 24.22.2/npm 11.19.1 runtime:

- `npm run check`: 47 files; zero errors, warnings or hints.
- `npm test`: all 21 tests passed.
- `npm run build` and `npm run check:output`: nine-page preview build and complete output assertions passed.
- `npm run build:release -- --outDir /private/tmp/ternloom-seo-release-20261030-audit`: real release built separately from the served preview. Focused assertions confirmed eight canonical indexable content pages, exact sitemap/robots, production form context, noindex/excluded 404 and no preview notices.
- `llms.txt` is byte-identical in source, preview and isolated release. Its eight unique canonical links exactly match release sitemap membership and the successful live crawl destinations. The served default output remains noindex, disallow-all and without a production sitemap.
- Audit JSON parses; local Markdown destinations exist; whitespace checks pass. CSV validation confirms 82 normalized unique keywords, 12 groups of 3–15 terms, and exactly one primary keyword/target per group. An independent Astra review confirmed factual scope and prompted a clearer per-row research-provenance label.

No push, deployment, DNS/provider change, contact submission, CAPTCHA completion or external message was performed. The pre-existing `.gitignore` change was preserved outside the audit's scoped local commit.

## Limits and later measurement

Google/Bing account data, real crawler logs, backlinks, controlled keyword volumes, conversion attribution and real assistant responses were not available. Two narrow public discovery searches returned no results; this is not proof that the domain is absent from every search index. No ranking or AI mention improvement can yet be claimed. Read-only HTTP success also does not reveal every Cloudflare bot rule or guarantee access from verified provider IPs.

Search discovery and model training are separate policy choices. Keep the provider-purpose distinctions in the AI report; this audit does not authorize changing robots, Cloudflare controls or training preferences. Gemini grounding has its own documented control and should not be conflated with Google Search AI features.

Optional paid monitoring such as [SearchFit.ai](https://searchfit.ai) can be evaluated after a baseline exists. No subscription is necessary for the work delivered here, and no third-party monitoring vendor was evaluated, connected or purchased.
