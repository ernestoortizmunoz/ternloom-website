# Ternloom Technologies: AI visibility and retrieval audit

Audit date: October 30, 2026, America/Toronto. The shared public crawl was recorded at `2026-10-31T03:09:36Z`, which is October 30 locally. Scope: the eight canonical content pages at `https://ternloom.com`, public discovery observations, factual entity consistency, provider guidance and local preparation of `llms.txt`.

## Finding and measurement boundary

The website supplies accessible, internally linked, factual business content. The sampled public responses show no site-level crawl or indexing directive blocking those eight pages. This is a sound retrieval foundation, but it does not establish indexing, citations, recommendations or real AI visibility.

**AI visibility score: not measured.** ChatGPT, Claude, Gemini and Perplexity responses were not tested through their consumer interfaces or equivalent recorded sessions. Presence, position, sentiment, answer accuracy, completeness and cross-platform consistency are all unmeasured. A source audit or a conventional search result cannot substitute for those observations. No competitor ranking or comparative score is assigned.

This report applies the AI Visibility skill's brand, prompt, content and authority framework. Its suggested numerical score and training-access recommendations are not used where the available evidence or current provider documentation does not support them. No monitoring service, subscription or external account change was used.

## Evidence and entity consistency

Primary evidence is the [recorded public crawl](evidence/crawl.json), including page text, links, canonical metadata, structured data and response headers. Approved facts were cross-checked with [project context](../../project-context.md), [business configuration](../../../src/config/site.ts) and [project records](../../../src/data/projects.ts). HTTP evidence is a point-in-time sample, not a record of search-provider crawler visits.

| Entity or retrieval signal | Observed evidence | Assessment and boundary |
| --- | --- | --- |
| Name and canonical identity | Organization and WebSite schema use Ternloom Technologies and the same canonical origin on every content page. | Consistent first-party identity; this does not demonstrate a knowledge panel or third-party recognition. |
| Audience and place | Homepage text identifies small businesses in Ottawa and across Canada. About and service content reinforce that context. | Useful local and national relevance. No physical customer-facing address or storefront eligibility is established. |
| Service taxonomy | Three dedicated service routes; each has matching Service schema with the same Organization provider and Canada service area. | Clear distinction between Website Development, Custom Business Software, and Business Automation & Integrations. Hosting remains a supporting capability. |
| Experience | Homepage and approved configuration say more than 15 years of IT/software development experience. | Preserve this wording. It does not establish company age, founding year, headcount or credentials. |
| Work evidence | Homepage and projects text identify technology-provider relationships for Bonita Nights and Wood Dust Creations. Wood Dust's blog is explicitly included. | Concrete examples support explanations of the services. No outcomes, customer endorsements or ownership of those businesses should be inferred. |
| Own product | Turnory is identified as Ternloom's Windows sim-racing telemetry application in development. | Useful software evidence with an explicit status. It is not a completed third-party commission or proof of a shipped application. |
| Contact and policy | Contact provides `info@ternloom.com`; privacy is public and linked. | Clear next step and handling policy. No telephone, response deadline, public price or service-level commitment is established. |
| Content extraction | All eight responses contain meaningful HTML text and links. The three service pages contain fit, deliverables, boundaries, related work and useful questions. | Essential explanations do not depend on executing the contact embed. This is an observed implementation strength, not proof that every assistant fetched it. |
| Crawling and canonicals | Eight content URLs return 200 with self-referencing canonicals; the sitemap lists those eight; robots permits `/`. | No sampled directive blocker. CDN rules, actual bot-origin access and provider indexing remain unverified. |
| Special AI file | Live `/llms.txt` returns a real 404 in the crawl. | Optional retrieval opportunity, not an SEO error or evidence of exclusion from AI answers. A local file is now prepared. |

The homepage has 555 main-text words and the three service pages have 779, 722 and 773 respectively in the crawl's extraction. These are descriptive measurements, not target lengths or ranking signals. The useful improvement is stronger evidence and precise answers, not adding words to reach a quota.

## Public discovery observation

The connected web search tool was queried with the exact strings `"Ternloom Technologies"` and `site:ternloom.com` during this audit. It returned no results for those two queries. No result positions, competitor appearances or AI answers were available to record.

This narrow result suggests that branded discovery should be checked in verified search-console data. It does **not** prove that the domain is absent from every search index, that no backlinks exist, that assistants never mention it, or that a newly published site has an indexing defect. Search tool coverage, query handling, time and location can affect the result. Google Search Console and Bing Webmaster Tools account data were not available in this audit.

The public evidence reviewed here is predominantly first-party. Independent reviews, editorial mentions and organization-owned profiles have not been established. The site links out to project sites, but an outgoing link is not evidence of a reciprocal citation. Do not create `sameAs` entries or review claims without confirming the underlying profiles or reviews.

## Provider access is separate from training

The current public `robots.txt` uses `User-agent: *` and `Allow: /`. This permits compliant crawlers under that policy, including training crawlers. The audit did not modify it, inspect provider security settings or send impersonated-bot requests. A successful ordinary GET cannot prove access from a provider's verified IP ranges.

| Provider or surface | Relevant distinction | Practical implication |
| --- | --- | --- |
| ChatGPT | `OAI-SearchBot` supports search; `GPTBot` concerns foundation-model training. `ChatGPT-User` handles user-initiated retrieval and is not the search-index control; robots rules may not apply to those user actions. | Search and training settings can be chosen independently. Allowing training is not required for ChatGPT search eligibility. See [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots). |
| Claude | `Claude-SearchBot` supports search indexing, `Claude-User` supports user-requested retrieval, and `ClaudeBot` gathers potential training material. Anthropic documents robots compliance for its bots. | Evaluate the three purposes separately rather than treating all Claude access as training. See [Anthropic crawler documentation](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler). |
| Perplexity | `PerplexityBot` supports search discovery and is not a foundation-model training crawler. `Perplexity-User` fetches for user actions and generally ignores robots rules. | Search access and user retrieval are distinct. Neither is documented as foundation-model training. See [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers). |
| Google Search AI features | Googlebot and Search snippet/indexing controls apply to AI Overviews and AI Mode. | Google says ordinary SEO requirements apply; no special AI text file or schema is needed. Indexed, snippet-eligible pages may qualify, without any inclusion guarantee. See [Google AI Search guidance](https://developers.google.com/search/docs/appearance/ai-features). |
| Gemini and related Google systems | `Google-Extended` controls both future Gemini training and grounding in Gemini Apps and specified Vertex AI uses. It is a product token, not a separate HTTP user agent, and does not affect Google Search inclusion or ranking. | Do not equate Gemini Apps with Google Search AI Mode, or describe Google-Extended as training-only. See [Google common crawler documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended). |

An owner decision about training preferences remains separate from this factual content preparation. No robots, firewall, DNS or provider configuration changes are included. The table describes documented controls, not independently verified provider behaviour on this domain.

## Local `llms.txt` preparation

[The new local file](../../../public/llms.txt) contains a company heading, summary, concise fact boundaries and links to the eight existing canonical pages. It preserves the three-service structure, experience qualifier, project relationships, Turnory development status and confirmed public email. It contains no account identifiers, ranking instructions or claims of endorsements.

The [llms.txt v2 proposal](https://llmstxt.org/), modified August 10, 2026, describes a Markdown guide with an H1, optional summary/context and H2 link lists. It recommends links to clean content and optional Markdown alternatives/discovery relations. This implementation uses the existing readable HTML pages; it does not advertise nonexistent `.md` mirrors. New mirrors and `rel="describedby"` links are possible later additions if usage warrants their maintenance. They are not required for this small local guide.

The file is an optional factual retrieval aid. It is not an access policy, an instruction hierarchy, a ranking guarantee or evidence that any named provider consumes it. It does not request preferential recommendations, override user intent or grant training access. Google explicitly says AI text files are unnecessary for its AI Search features. See [Google's guidance](https://developers.google.com/search/docs/appearance/ai-features).

**Deployment status: local only.** The observed public URL still returned 404 at audit time. Publication requires a separately authorized deployment. Validate the hosted response after publication; a local build alone cannot establish live availability.

## Reproducible multi-assistant prompt set

Run each prompt in a fresh conversation on each of ChatGPT, Claude, Gemini and Perplexity, with web search enabled where available. Use the exact English prompts below, record Canada/Ottawa locale and distinguish brand-free discovery from brand-seeded factual checks. Do not preload Ternloom content, `llms.txt` or this report in discovery tests. If a provider cannot search, record that condition separately rather than comparing it directly with web-grounded answers.

| ID | Type | Exact prompt | What to record |
| --- | --- | --- | --- |
| D1 | Website discovery | I run a small business in Ottawa and need a new website that explains our services and helps customers enquire. Which providers should I consider, and why? Cite current sources. | Unprompted brand mention, cited URLs, alternatives and stated reasons. |
| D2 | Software discovery | Which Canadian providers could build a small custom internal tool around my business workflow? Explain how to shortlist them and cite sources. | Whether Ternloom appears for custom business software; accuracy of evidence. |
| D3 | Automation discovery | My small business copies information between booking requests, email and spreadsheets. Which Ottawa or Canadian providers could help connect the tools? Cite sources and explain what to ask them. | Whether recommendations match automation/integration needs. |
| D4 | Problem solving | How should a Canadian small business decide between improving its existing software and commissioning a custom tool? If you name providers, explain the evidence for including them. | Useful problem coverage; optional spontaneous mentions without forcing a provider list. |
| B1 | Entity accuracy | What is Ternloom Technologies, where does it operate, and what services does it offer? Cite current sources and distinguish facts from assumptions. | Name, Ottawa/Canada audience, exactly three services, supporting hosting role. |
| B2 | Work accuracy | What public work can I inspect from Ternloom Technologies, and what is its relationship to Bonita Nights, Wood Dust Creations and Turnory? Cite sources. | Technology-provider roles, Wood Dust blog, own-product role and development status. |
| B3 | Claim boundaries | What can public sources establish about Ternloom Technologies' experience, company age, pricing and support commitments? State what is unknown. | Experience versus age; no invented prices, team, guarantees or credentials. |
| B4 | Reputation | What independent evidence is available to assess Ternloom Technologies? Separate its own claims from third-party reviews or reporting and cite each source. | Whether independent evidence actually exists; fabricated review risk. |
| B5 | Contact accuracy | How can I contact Ternloom Technologies about a project, and where can I read its enquiry privacy policy? Use current official sources. | Correct contact URL, email and privacy page; no invented telephone or response promise. |

Current results for every prompt and every platform: **not measured**. No positions or sentiment values should be filled from this source audit.

For an initial baseline, repeat each prompt three times independently per platform: 9 prompts × 3 repetitions × 4 platforms = 108 observations. This is a proposed sampling plan, not completed work. Record UTC timestamp, platform, displayed model/version, account tier, search mode, locale, prompt ID, run number, exact prompt, full answer and source URLs. Preserve an export or screenshot where allowed. Count failed or unavailable runs separately; do not record them as absent brand mentions.

For successful discovery runs, report brand mention rate and first-party citation rate with numerators and denominators. Record recommendation position only when the answer presents an ordered recommendation list; an early sentence mention is not a rank. For branded checks, score factual statements against the evidence table and record unsupported claims individually. Record sentiment with the actual supporting passage, or mark it not applicable. Report completeness by which applicable facts were covered. Compare providers and repeated runs without collapsing missing data into zeros or manufacturing a single visibility score.

Record competitor names only when an observed answer supplies them. Comparisons should use the same prompts, dates and modes; no unsupported claims about competitor quality or market share follow from mention frequency. Retest the identical set after meaningful content or indexing changes, with an optional monthly cadence. No scheduled monitoring was created.

## Prioritized next actions

| Priority | Action | Evidence and completion measure |
| --- | --- | --- |
| 1 | Establish actual search discovery using owner-accessible Search Console and Bing Webmaster Tools. | The two public queries returned no results, while HTTP fundamentals passed. Inspect submitted sitemap and representative URL indexing status; record provider evidence. No account action was performed. |
| 1 | Run the recorded assistant baseline before claiming AI visibility improvement. | Current mention and citation rates are unknown. Complete the prompt log with successful-run denominators and exact answer evidence. |
| 2 | Expand project evidence when the owner has approved details. | Current descriptions explain capabilities but contain no measured outcomes. Add problem, Ternloom's exact contribution, constraints and verifiable result only when supported. Prioritize Bonita Nights booking requests and Wood Dust catalogue/checkout/enquiry/blog context. |
| 2 | Develop one useful workflow explanation tied to a real customer decision. | Candidate: when an existing tool, integration or custom application is appropriate. Reuse the approved service boundaries and real examples; do not invent savings, costs or delivery times. Review against D2–D4 after publication. |
| 2 | Confirm legitimate external identity evidence. | Verify any business-owned profile and permitted project attribution before linking or adding structured-data references. Independent reviews must be real and voluntary; no purchased mentions or fabricated reviews. |
| 3 | Publish the prepared `llms.txt` in a future authorized release, then check it. | Confirm a 200 text response, exact eight working canonical links and no preview/account data. Track use only if real evidence becomes available; do not use file presence as an AI score. |
| Separate owner decision | Review crawler/training preferences. | Use the provider-purpose distinctions above. Search visibility does not generally require training permission; Gemini's grounding control needs its own consideration. No policy change was made. |

## Validation and remaining limits

The local file's eight Markdown destinations were checked against the eight successful canonical URLs in the recorded crawl and against sitemap membership. All eight matched without duplicates or redirect-only URLs. Source descriptions were checked against approved business/project records. The file uses ordinary Markdown and introduces no executable code or dependency.

This audit does not establish search-console status, actual crawler logs, verified bot access, independent reviews, inbound links, AI answer performance, traffic or conversions. It also does not report a Core Web Vitals score or turn a timed HTTP response into field performance. All recommended external verification and content expansions remain distinct from work performed here.
