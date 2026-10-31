# Search and AI measurement follow-up

These are concrete owner/operator steps, not evidence that provider actions have been completed. This implementation remains local. No account verification, sitemap submission, DNS edit, assistant baseline, analytics installation or public deployment was performed by the agent.

## Google Search Console

1. Open [Search Console](https://search.google.com/search-console/) with the business's chosen Google account. Use an existing verified `ternloom.com` property if available; otherwise complete Google's ownership verification for that property. Keep any verification values in the provider's authorized setup, not this public repository. Domain/DNS verification is a separate authorized account task; preserve existing email records.
2. Select the property covering `https://ternloom.com/`. Submit or inspect `https://ternloom.com/sitemap.xml` in the Sitemaps report. Confirm successful processing and the expected eight canonical content URLs for this release.
3. Inspect the homepage, all three service URLs and Contact using URL Inspection. Record the indexed status, latest crawl, indexing permission and Google-selected canonical separately from the live URL test. Resolve a specific reported issue before repeatedly requesting indexing. A request does not guarantee inclusion or speed up by repetition. See [Google's recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
4. Once a separately authorized release is live, check its actual response before requesting a recrawl of changed pages. Do not submit localhost or a noindex preview/version URL.
5. Record a dated baseline from the Performance and Page Indexing reports: Canada/all-country view, mobile/desktop, query, landing page, impressions, clicks, CTR and average position where data exists. Preserve filters and date range. Missing data is unknown, not zero demand. Use Google's [Search Console guidance](https://developers.google.com/search/docs/monitor-debug/search-console-start) and [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Bing Webmaster Tools

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/) with the chosen business account. Use an existing verified property, or follow [Bing's verification options](https://www2.bing.com/webmasters/help/add-and-verify-site-12184f8b). Importing from Google Search Console is an option that grants Bing access to selected property information; use it only after reviewing the requested permissions. Manual verification remains an alternative.
2. Inspect or submit the canonical sitemap and confirm its processing in [Sitemaps](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed). Inspect the same representative URLs and record provider-reported problems rather than inferring status from a browser search.
3. Save a dated baseline of available query/page performance. Keep Bing and Google results separate. Do not claim that verification or sitemap acceptance ensures a search appearance.

## AI answer baseline

Use the nine exact prompts and recording rules in the [AI visibility report](ai-visibility-report.md#reproducible-multi-assistant-prompt-set). Brand-free discovery prompts must run in fresh sessions without preloading Ternloom material. Record search mode, platform/model, date, locale, full answer, cited URLs, unsupported claims and unavailable runs. The suggested full baseline is 9 prompts × 3 repetitions × 4 platforms; start with a clearly labelled smaller sample if account access or time prevents completion, and never present it as the full set.

No prompts were run against real ChatGPT, Claude, Gemini or Perplexity interfaces in this task. Mention rate, citation rate and answer accuracy remain unmeasured. The factual [LLM guide](../../../public/llms.txt) is prepared for a future release; it does not force a recommendation or prove adoption. Keep search crawlers, user-requested retrieval and training preferences separate as described in the AI report.

## Enquiries and later review

For initial evaluation, use an owner-operated log of enquiry date, relevant service and whether the enquiry fits the work offered. Ask how the person found Ternloom only when appropriate. Do not put personal enquiry details in this repository, add marketing trackers without scope/privacy review, or alter the agreed retention policy.

Compare comparable periods once observations are sufficient; note publication dates and other material changes. Review which service pages actually receive relevant impressions and enquiries before expanding city pages or committing to more guide topics. The [keyword map](keyword-map.csv) is a set of fit-based seeds, not a substitute for measured demand.

## Hosted checks after an authorized release

- Check `/llms.txt` returns 200 text and links only to working canonical pages.
- Confirm changed titles/descriptions and factual Organization logo/email in rendered HTML; Google may still choose different displayed title/snippet text.
- Check an actual generated CSS/WebP response has long immutable caching, while HTML and fixed-name URLs revalidate. Verify preserved original screenshot URLs still return 200.
- Confirm the eight-page sitemap, production contact context, real 404 and preview-host noindex remain correct. Leave CAPTCHA intact and use a separately authorized dummy form test if the provider flow changed; this implementation did not change it.
- Rerun representative performance measurements if comparing this revision with the audit baseline. Historical Lighthouse results are not measurements of the new local build.
