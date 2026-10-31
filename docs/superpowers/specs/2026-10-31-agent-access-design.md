# Static Markdown and content-use policy

The owner selected `ai-train=no, search=yes, ai-input=yes` on October 31, 2026. They declined Cloudflare's paid Markdown conversion feature and then explicitly preferred static content over a custom Worker. They accepted that Cloudflare's same-URL Markdown-negotiation check would continue to complain. This final static-only design supersedes the uncommitted negotiation experiment.

## Selected approach

Generate Markdown from each of the eight built canonical pages, keeping one source of public copy. Link the static versions from `llms.txt` and each corresponding HTML head with `rel="alternate"` and `type="text/markdown"`. Direct Markdown URLs use `/_agent-markdown/<page>/index.md`; the homepage uses `/_agent-markdown/index.md`. Ordinary page URLs continue returning HTML for all Accept headers.

Cloudflare's managed converter would require paid-plan eligibility. A custom Worker could negotiate representations at the same URL but adds runtime logic and request usage. The owner selected direct static files instead. No Worker script, new binding, environment variable, model call, database or paid conversion service is added. Wrangler remains the existing Static Assets configuration.

## Content and access rules

- Derive the actual main content, headings, lists, links, images, metadata and factual JSON-LD from built HTML. Remove global navigation, decorative SVG, executable scripts, styles and the contact iframe. Keep substantive headers within main, including the privacy title, introduction and date.
- Use absolute canonical links and keep the approved business/project facts and contact/privacy boundaries. Do not maintain separate marketing copy or invent results.
- Serve real `.md` files with their native MIME type. Mark Markdown mirrors noindex to avoid separate search-index copies. Do not override the MIME type of a missing-file HTML 404.
- Generate the Content-Signal HTTP header and robots directive from `site.contentSignal`. The owner disallows training/fine-tuning and permits search and real-time AI input/retrieval. Crawl access remains separate: default preview is still disallow-all/noindex with no production sitemap; a guarded release permits crawling and lists only the eight canonical HTML pages.
- Signals express usage preferences; compliance by every automated system is not guaranteed. Do not silently add mixed-purpose crawler blocks that also prevent allowed retrieval.

## Verification

Pin Turndown as a build-only dependency. Test content conversion, then run diagnostics, the full existing suite, preview output checks, an isolated release and static asset packaging. Verify direct Markdown MIME/noindex, default HTML, known and missing Markdown paths, policy headers/robots and discovery links in local Cloudflare emulation. No content negotiation or runtime Worker checks are completion criteria for this chosen design.

Work remains local on main, with scoped commits and no worktrees, push, deployment, provider/DNS changes or form submissions. The final verification record documents actual results and the expected negotiation warning.
