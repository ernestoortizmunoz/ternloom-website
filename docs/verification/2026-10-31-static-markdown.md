# Static Markdown and Content Signals verification

Date: October 31, 2026, America/Toronto. Scope: local static files and content-use signals. The owner explicitly selected static Markdown and accepted that Cloudflare's same-URL Markdown-negotiation check would remain unsupported. The [final design](../superpowers/specs/2026-10-31-agent-access-design.md) and [updated operator guide](../cloudflare-launch-guide.md#static-markdown-for-agents) describe the implemented behavior.

## Implemented

- `site.contentSignal` is `ai-train=no, search=yes, ai-input=yes`. The visibility build integration writes that value into the global HTTP header and relevant robots group. Preview remains `Disallow: /`; release permits crawling and advertises the existing canonical sitemap. Usage preferences and crawl access remain distinct.
- Turndown `7.2.4` is an exact locked development dependency, installed with lifecycle scripts disabled. Its DOM dependency is build-only. Every build derives eight Markdown files from the actual canonical HTML, rather than maintaining a second content set.
- The converter preserves substantive main content, including the Privacy page's header/title/introduction/date, headings, lists, absolute links/images, metadata and JSON-LD. Site navigation, decorative SVG, executable scripts/styles and the Tally iframe are excluded. The static contact email and direct-form fallback remain available; no submission is performed.
- `llms.txt` lists the eight canonical pages and their eight direct Markdown mirrors. HTML heads expose matching `rel="alternate" type="text/markdown"` links. Mirrors are marked noindex to avoid separate search-index copies; they remain fetchable for permitted uses.
- Wrangler remains the original Static Assets configuration. No custom Worker script, runtime binding, new environment variable, paid conversion service, model call, database, tracker or client JavaScript is added. Ordinary page URLs keep returning HTML even for `Accept: text/markdown`. This expected warning is the owner's chosen trade-off.

## Proof

All commands used the pinned Node 24.22.2/npm 11.19.1 runtime.

- The full unit suite passed: **24 tests**. A content-conversion regression first failed when a substantive header within main was stripped, then passed after correcting that behavior. Tests also exercise metadata/entity decoding, lists, absolute destinations, image alternatives, JSON-LD and missing-main rejection.
- Diagnostics and complete nine-page preview output checks passed. New output assertions cover all eight Markdown files, matching metadata/policy, H1s, clean content, discovery links and all sixteen LLM-guide destinations.
- The synthetic approved release fixture passed with the new robots/header policy and unchanged actual approval flags. A separate real `build:release` succeeded in `/private/tmp/ternloom-static-markdown-release`; eight canonical content URLs remain in the sitemap, with Markdown/404 excluded. Production form context and default preview isolation remain intact.
- [Preview HTTP evidence](2026-10-31-static-markdown-preview.json) and [isolated release HTTP evidence](2026-10-31-static-markdown-release.json) record **42 local static requests**. All eight Markdown paths return 200 with native `text/markdown; charset=utf-8` and noindex. All eight ordinary page URLs return HTML when explicitly requested with Markdown Accept, as intended. Policy headers, discovery links, HEAD/conditional responses, robots and LLM-guide destinations passed.
- A missing Markdown URL returns the real custom **HTML 404**. An initial wildcard MIME override was reproduced as mislabeling that response, then removed. Native `.md` MIME remains correct without the override.
- Local asset packaging is checked with Wrangler dry run. JSON artifacts retain only non-sensitive response fields. Local document links and whitespace are checked before the scoped commit; the pre-existing `.gitignore` change stays outside it.

One independent Astra review checked the static conversion and discovery paths. Its possible MIME issue was reproduced and fixed. The runtime negotiation/fallback findings from the earlier experiment are obsolete because that code was removed; no runtime experiment or its HTTP evidence is part of this delivered static scope. No static review issue remains deferred.

## Limits and hosted follow-up

No push, deployment, provider/DNS setting, paid feature, third-party readiness scan, form submission, CAPTCHA completion or external message was performed. The files are local until a separately authorized release. After publication, check the actual HTTP header, robots and direct Markdown responses, particularly if Cloudflare manages or prepends its own robots policy.

Content Signals declare the owner's preferences; they do not physically prevent every crawler from disregarding them. No provider-specific training bot group or mixed-purpose token was silently blocked. The owner accepted the remaining negotiation warning; it is not a failed completion criterion for this static approach. No indexing, ranking, field performance or AI citation improvement is claimed.

References consulted: the supplied [Markdown negotiation skill](https://isitagentready.com/.well-known/agent-skills/markdown-negotiation/SKILL.md), [Content Signals skill](https://isitagentready.com/.well-known/agent-skills/content-signals/SKILL.md), [Cloudflare Markdown documentation](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/), [Content Signals definitions](https://contentsignals.org/) and [Turndown documentation](https://github.com/mixmark-io/turndown). The optional provider-managed converter is not used.
