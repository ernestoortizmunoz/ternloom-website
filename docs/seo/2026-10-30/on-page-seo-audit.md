# Ternloom: on-page SEO audit

Date: October 30, 2026. Scope: all eight content routes, their source, shared content and internal linking. Independent on-page review using the on-page-seo skill. This is an audit and a set of proposed copy changes, not approved public copy or an implementation. No website source, approval flags, provider settings or forms were changed.

## Assessment

The site already explains three distinct services, offers a clear enquiry path, publishes real project examples and keeps material limitations visible. Its largest on-page opportunity is to make the custom software and automation introductions more concrete and make service metadata describe the service, audience and location. This is a relevance and decision-making opportunity, not evidence of a ranking defect.

Existing service copy answers useful questions about scope, existing systems, costs and future support. Do not replace this with longer generic SEO text. No fixed word count, keyword density, heading keyword quota, link count or title/description character count determines whether these pages are adequate. No ranking, traffic, conversion or AI-visibility score is inferred. Priority below means the auditor's judgement of usefulness and implementation effort, not a search-engine metric.

Read [project context](../../project-context.md), the [configuration brief](../../superpowers/specs/2026-10-29-project-configuration-design.md) and [project evidence](../../project-references.md). Source evidence is identified per page below. Initial independent web-tool attempts to fetch all eight live routes returned tool accessibility errors; those errors do not establish a site outage or crawling failure. Subsequently reviewed the coordinating reviewer's [public GET crawl](evidence/crawl.json), collected October 31 at 03:09 UTC (October 30 in Ottawa). All eight content routes returned 200, exact self-canonicals, unique titles/descriptions and one H1; none returned a noindex directive in the captured HTML or headers. The titles, descriptions and H1 text below match that live evidence. The captured heading hierarchy, project text, anchors and schema support the source findings. The deliberately missing ninth URL returned a noindex 404 and is outside the eight-page editorial inventory. Public responses do not establish the deployed commit, Google-selected canonical or search indexing.

## Intent and canonical target map

These are provisional query assignments based on business fit. They are not measured search volumes or proof of current ranking. Broader query research may refine vocabulary without adding or changing URLs.

| Existing route | Exact canonical target to retain | Primary query / purpose | Supporting topics and boundaries |
| --- | --- | --- | --- |
| `/` | `https://ternloom.com/` | Ternloom Technologies; brand and small-business technology overview | Websites, custom software and integrations for Ottawa and Canada. Introduce and route visitors to all three services. |
| `/services/website-development/` | `https://ternloom.com/services/website-development/` | website development Ottawa | Small business websites, website redesign, service pages, catalogues, enquiries. “Web design” is a related intent only where the described website work meets it; do not imply a separate branding service. |
| `/services/custom-business-software/` | `https://ternloom.com/services/custom-business-software/` | custom software development Ottawa | Custom business software, internal tools, portals, dashboards, quoting workflows. Examples remain potential deliverables. |
| `/services/business-automation-integrations/` | `https://ternloom.com/services/business-automation-integrations/` | business automation Ottawa | Workflow automation, connecting existing tools, repetitive data entry, business system integrations. No unsupported AI, CRM-platform or fully automated operations offering. |
| `/projects/` | `https://ternloom.com/projects/` | Ternloom projects | Evaluate evidence and roles. Support service pages; do not compete as a second generic website-development landing page. |
| `/about/` | `https://ternloom.com/about/` | about Ternloom Technologies | Identity, experience and way of working. Do not imply 15-year company history or an unverified team. |
| `/contact/` | `https://ternloom.com/contact/` | contact Ternloom | Enquire about a project; identify what to send and what happens next. |
| `/privacy/` | `https://ternloom.com/privacy/` | Ternloom privacy notice / policy | Understand actual enquiry handling and contact options. No commercial keyword target needed. |

Source canonical construction: [seo.ts](../../../src/config/seo.ts), `getPageMetadata`, and the route-specific `pathname` values. Keep trailing slashes and the HTTPS apex domain. There is no reason to rename these clear slugs solely to add Ottawa or another keyword. No duplicate city pages are recommended.

## Priorities

| Priority | Recommendation | Evidence / affected URL | Reason and scope |
| --- | --- | --- | --- |
| P1 | Write distinct service descriptions and stronger custom/automation leads | [services.ts](../../../src/data/services.ts), summaries at lines 18, 61 and 104; [ServicePage.astro](../../../src/layouts/ServicePage.astro), lines 24–33; all three service URLs | The same summary is currently used for the lead, description, service schema and cross-page service lists. Two summaries are too general to communicate useful deliverables in isolation. Keep metadata distinct from the visible summary if the best wording differs. |
| P1 | Explain the boundary between custom software and automation with one contextual cross-link on each page | Custom-software and automation service URLs; same shared layout/data | Visitors facing spreadsheets and manual work can plausibly choose either service. A short explanation helps them select without creating a fourth service. |
| P2 | Add service-specific interpretation to existing project evidence | Service evidence section, [ProjectSummary.astro](../../../src/components/ProjectSummary.astro), [projects.ts](../../../src/data/projects.ts) | The same detailed project content appears on Projects and service pages. It is legitimate reusable evidence, but needs context to explain why it matters to this service. Do not call repetition a duplicate-content penalty. |
| P2 | Strengthen branded navigation metadata for Contact and About | [contact.astro](../../../src/pages/contact.astro), [about.astro](../../../src/pages/about.astro) | Contact title can explicitly say Contact; About description can foreground identity and experience instead of repeating the home service list. |
| P2, evidence-dependent | Add owner-approved identity/experience detail to About when supplied | About page and `site.experienceStatement` | The current experience statement is approved but broad. A named professional biography and one concrete example could substantiate it, if the owner wants those facts public. Do not invent them or block the site on them. |
| P3 | Keep strong existing homepage, Projects and Privacy foundations; optional metadata refinements only | These routes below | Avoid rewriting good copy simply to consume a character allowance or place keywords in every heading. |

P1 means the first useful editorial improvement; P2 means a valuable follow-up; P3 means optional polish or preservation. None is an emergency indexing blocker identified by this on-page review.

## Exact proposed copy by page

“Before” is the current source copy, with metadata and H1s checked against the live crawl. “After” is a reviewable proposal; “keep” explicitly means no change. Retain the existing design, hierarchy, CTAs and approved project records. Metadata proposals are separate from any query-volume claim. Service descriptions below are dedicated SEO-description proposals, not instructions to replace the shared `summary` with the same text. The proposed visible custom-software/automation leads are separate editorial options.

### 1. Home — `/`

**Intent fit:** Strong overview for three services and local/national audience. The expressive H1 is clarified immediately by the concrete service/location sentence and service links. Changing the approved hero to a search phrase is unnecessary.

| Element | Before | Proposed after |
| --- | --- | --- |
| Title | Ternloom Technologies — Websites, Software & Integrations | Ternloom Technologies — Websites, Software & Integrations **(keep)** |
| Description | Websites, custom software and connected tools for small businesses in Ottawa and across Canada. Explore Ternloom Technologies’ services and selected projects. | Websites, custom software and business integrations for small businesses in Ottawa and across Canada. Explore Ternloom’s services and selected projects. |
| H1 | Built around the way you work. | Built around the way you work. **(keep line breaks and emphasis)** |
| Intro | Websites, custom software and connected tools for small businesses in Ottawa and across Canada. | Websites, custom software and connected tools for small businesses in Ottawa and across Canada. **(keep)** |

The description edit is optional: “business integrations” is a more explicit service term than “connected tools,” while the visible plain-English intro remains useful. Existing H2 sections for selected projects, services, process and contact are coherent; the three service names sit under the services H2 as H3s. Preserve this hierarchy.

The homepage already links to all services, projects and contact with readable anchors. Keep “Explore website development,” “Explore custom software” and “Explore automation & integrations.” There is no missing minimum link count to satisfy. Avoid expanding the homepage into full service-page explanations. Evidence: [index.astro](../../../src/pages/index.astro), metadata/hero at lines 37–50 and service introductions at lines 10–29.

### 2. Website Development — `/services/website-development/`

**Intent fit:** Strong. It already explains first websites, redesigns, mobile use, content, enquiries, booking/payment connections and ongoing-cost boundaries. Do not add generic claims about ranking, sales or speed.

| Element | Before | Proposed after |
| --- | --- | --- |
| Title | Website Development for Small Businesses — Ternloom | Website Development in Ottawa — Ternloom |
| Description | A clear, practical website that explains what your business offers and gives customers a straightforward way to take the next step. | Website development and redesigns for small businesses in Ottawa and across Canada. Explore service pages, product catalogues and clear enquiry journeys. |
| H1 | Website Development | Website Development **(keep)** |
| Intro | A clear, practical website that explains what your business offers and gives customers a straightforward way to take the next step. | A clear, practical website that explains what your business offers and gives customers a straightforward way to take the next step. **(keep)** |

Retain the visible audience eyebrow, “For small businesses in Ottawa and across Canada.” Ottawa in the title is a proposed way to clarify local fit, not a reason to remove the Canada-wide scope from the page. The current title is already valid; this is targeting refinement.

**Heading proposal:** Keep “When this service can help,” “What we can build together,” “Clear boundaries from the start” and the existing specific questions. Optionally change the service-page H2 “Useful questions” to “Website project questions.” The heading must remain data-driven per service rather than changing all services to website language.

**Evidence explanation to add before project cards:** Before: no service-specific introduction beneath “See the work in context.” After: “Bonita Nights brings rental themes and customer information together with a booking-request flow. Wood Dust Creations combines a product catalogue, Square checkout links, custom-order enquiries, a blog and a portfolio.” This paraphrases approved capabilities and preserves Wood Dust’s blog. The existing cards continue to identify Ternloom as technology provider.

**Contextual link proposal:** After the existing booking/payment Q&A, add: “If the main problem is moving information between tools, explore our business automation and integrations service.” Link “business automation and integrations” to `https://ternloom.com/services/business-automation-integrations/`. It should supplement the existing explanation that live availability and inventory synchronisation need separate scope.

Evidence: [services.ts](../../../src/data/services.ts), website record beginning at line 14; [ServicePage.astro](../../../src/layouts/ServicePage.astro), metadata and evidence section; [projects.ts](../../../src/data/projects.ts), approved Bonita Nights and Wood Dust records.

### 3. Custom Business Software — `/services/custom-business-software/`

**Intent fit:** Useful detailed body, but the introduction and search description convey little beyond the service name. This is the highest-value copy improvement. The supplied examples and questions already distinguish potential work from delivered client projects.

| Element | Before | Proposed after |
| --- | --- | --- |
| Title | Custom Business Software for Small Businesses — Ternloom | Custom Software Development in Ottawa — Ternloom |
| Description | Software built around a business's own workflows. | Custom business software for small businesses in Ottawa and across Canada. Explore internal tools, portals, dashboards and quoting workflows. |
| H1 | Custom Business Software | Custom Business Software **(keep)** |
| Intro | Software built around a business's own workflows. | When spreadsheets or off-the-shelf tools no longer fit the work, custom software can give staff or customers a clearer way to complete a task. We start with one business workflow and agree what a useful first version should do. |

The metadata title uses the common service description “custom software development”; this does not rename the approved service or assert a new capability. Retain the local/national eyebrow. Leave the deliverables explicitly described as examples, not a completed-project catalogue.

**Heading proposal:** Keep the current H1/H2/H3 order. Optionally change “Useful questions” to “Custom software project questions.” Retain “Should we use an existing product or build custom software?” because it answers a real decision rather than merely restating a keyword.

**Missing distinction; proposed paragraph after that existing Q&A:** Before: no direct route to the integration alternative. After: “If the tools already do what you need but information has to be copied between them, business automation and integrations may be the better starting point.” Link “business automation and integrations” to `https://ternloom.com/services/business-automation-integrations/`.

**Evidence explanation to add before Turnory:** Before: no service-specific introduction beneath “See the work in context.” After: “Turnory is Ternloom’s own Windows sim-racing telemetry application, currently in development. Its public website explains the product and offers launch notifications; this is an own-product example, not a completed client software project.” Keep the approved Turnory summary and screenshot caption unchanged. No published portal, dashboard or quoting-system case study has been established by the supplied evidence. A future case study can fill that gap only when actual work and permission exist.

Evidence: [services.ts](../../../src/data/services.ts), custom software record beginning at line 57; [projects.ts](../../../src/data/projects.ts), Turnory record beginning at line 71; [project references](../../project-references.md), Turnory scope boundary.

### 4. Business Automation & Integrations — `/services/business-automation-integrations/`

**Intent fit:** The body is unusually clear about human review, provider access, errors and maintenance. The lead could tell a prospective buyer what is being connected before they scroll. Present this as workflow/integration work; there is no established AI automation offering or standalone completed automation case study.

| Element | Before | Proposed after |
| --- | --- | --- |
| Title | Business Automation & Integrations for Small Businesses — Ternloom | Business Automation & Integrations in Ottawa — Ternloom |
| Description | Connected tools and automated workflows that reduce repetitive work. | Business automation and integrations for small businesses in Ottawa and across Canada. Connect existing tools and plan handoffs, reviews and error handling. |
| H1 | Business Automation & Integrations | Business Automation & Integrations **(keep)** |
| Intro | Connected tools and automated workflows that reduce repetitive work. | Connect existing business tools so information can move between them with less manual copying. We start with one repetitive task, review what each tool supports and agree which steps need a person’s approval. |

**Heading proposal:** Keep the existing fit, deliverables, boundaries, evidence and process headings. Optionally change “Useful questions” to “Automation and integration questions.” Preserve the question about connection failure and its scoped answer; this addresses a meaningful purchase concern.

**Missing distinction; proposed paragraph after “Can we keep the tools we already use?”:** Before: no direct explanation of the separate software route. After: “If the existing tools cannot support the task itself, custom business software may be worth considering. Connecting tools and building a new tool solve different parts of the problem.” Link “custom business software” to `https://ternloom.com/services/custom-business-software/`.

**Evidence explanation to add before project cards:** Before: limitations appear in scope notes and detailed cards, with no service-specific introduction at the evidence section. After: “These examples show connections to existing providers: a booking-request flow for Bonita Nights and Square-hosted checkout links for Wood Dust Creations. They do not demonstrate fully automated bookings, inventory synchronisation or fulfilment.” The existing detailed cards retain the confirmed provider role and Wood Dust blog. Do not turn a checkout link into a claim of a custom payment processor.

Evidence: [services.ts](../../../src/data/services.ts), automation record beginning at line 100 and scope notes; [projects.ts](../../../src/data/projects.ts), Bonita Nights/Wood Dust capabilities; [ServicePage.astro](../../../src/layouts/ServicePage.astro), evidence section.

### 5. Selected Projects — `/projects/`

**Intent fit:** Strong proof page, with actual approved public-site screenshots, business needs, capabilities and explicit roles/status. Keep this page distinct from a generic commercial landing page. There are no measured outcomes, testimonials or project delivery dates to add from current evidence.

| Element | Before | Proposed after |
| --- | --- | --- |
| Title | Selected Projects — Ternloom Technologies | Selected Projects — Ternloom Technologies **(keep)** |
| Description | Explore business websites for Bonita Nights and Wood Dust Creations, alongside Turnory, Ternloom’s own software product in development. | Explore business websites for Bonita Nights and Wood Dust Creations, alongside Turnory, Ternloom’s own software product in development. **(keep)** |
| H1 | Selected projects | Selected projects **(keep)** |
| Intro | Different businesses. Different needs. Technology shaped around the work. | Different businesses. Different needs. Technology shaped around the work. **(keep)** |

The next paragraph already states that Ternloom is technology provider for Bonita Nights and Wood Dust and that Turnory is its own product in development. Keep it. Project names correctly form H2s here. Preserve the blog in Wood Dust’s summary/capabilities and the “application in development” labels everywhere Turnory appears.

Existing service-name links under detailed projects are good contextual anchors. Existing external “Visit [project]” links are accurately named. Optional addition near the page introduction: “Explore Bonita Nights, Wood Dust Creations or Turnory below.” Link only each name to the existing local heading IDs: `#bonita-nights-title`, `#wood-dust-creations-title`, `#turnory-title`. This is a navigation option if the page proves hard to scan, not an SEO requirement or a request for new layout.

Further case-study detail needs evidence: the exact problem, decisions made, implemented scope and a dated verification of capability. Only add an outcome number if its method, period and permission can be documented. Evidence: [projects.astro](../../../src/pages/projects.astro), lines 8–24; [ProjectSummary.astro](../../../src/components/ProjectSummary.astro), heading IDs and service anchors; [projects.ts](../../../src/data/projects.ts).

### 6. About — `/about/`

**Intent fit:** Accurate identity and process, with clear links to services and projects. It largely repeats the service overview. Its greatest potential improvement is specific owner-approved experience evidence, not more keywords.

| Element | Before | Proposed after |
| --- | --- | --- |
| Title | About Ternloom Technologies | About Ternloom Technologies **(keep)** |
| Description | Websites, custom software and business integrations for small businesses in Ottawa and across Canada, built on more than 15 years of IT and software experience. | Learn about Ternloom Technologies, serving small businesses in Ottawa and across Canada and built on more than 15 years of IT and software development experience. |
| H1 | About Ternloom Technologies | About Ternloom Technologies **(keep)** |
| Lead | Ternloom Technologies builds websites, custom software and business automations for small businesses in Ottawa and across Canada. | Ternloom Technologies builds websites, custom software and business automations for small businesses in Ottawa and across Canada. **(keep)** |

Keep the exact approved experience statement, “Built on more than 15 years of experience in IT and software development.” It describes experience, not company age or team size. Existing approach steps and service H3s are coherent.

**Optional exact addition near the existing projects invitation:** Before: “Explore selected projects, with the role, scope and current status of each explained.” After: “Explore selected projects, with the role, scope and current status of each explained. Ternloom is the technology provider for Bonita Nights and Wood Dust Creations, and is developing its own software product, Turnory.” Link “selected projects” to `https://ternloom.com/projects/` if placing the link in prose; the existing “Explore selected work” CTA already fulfils this role, so both are not necessary.

**Evidence request, not publication-ready fact:** If the owner wants a personal introduction, obtain the public name, role and one or two accurate examples of relevant experience. Do not generate a founder biography, certification list, team story or photograph with an implied identity. Evidence: [about.astro](../../../src/pages/about.astro), lines 10–20 and project invitation; [site.ts](../../../src/config/site.ts), experience statement.

### 7. Contact — `/contact/`

**Intent fit:** Clear form/email choices, guidance about what to include, no unsupported reply deadline, and a next-step explanation. Preserve the compact approved arrangement and first-field visibility. Conversion behaviour is unmeasured in this audit; do not claim the form works from HTML alone.

| Element | Before | Proposed after |
| --- | --- | --- |
| Title | Discuss Your Project — Ternloom Technologies | Contact Ternloom Technologies — Discuss Your Project |
| Description | Plan a website, custom software or business automation project. Tell Ternloom about your business, your current tools and what you want to change. | Contact Ternloom Technologies about a website, custom software or business automation project. Use the enquiry form or email info@ternloom.com. |
| H1 | Discuss your project | Discuss your project **(keep)** |
| Email prompt | Prefer email? | Prefer email? **(keep)** |

Adding “Contact” to the title makes the navigational purpose explicit. The proposed description describes existing contact routes; it does not promise a consultation format, price, response time or availability. Keep “What to include,” “What happens next” and the service links. Do not add explanatory text above the form solely for SEO, given the owner's existing mobile-placement requirements. Privacy and direct-form fallback links already support informed contact.

Evidence: [contact.astro](../../../src/pages/contact.astro), lines 10–51; [ContactDetails.astro](../../../src/components/ContactDetails.astro); [ContactForm.astro](../../../src/components/ContactForm.astro). No form submission, inbox inspection or provider setting change was performed.

### 8. Privacy — `/privacy/`

**Intent fit:** Clear functional trust document. It names actual form/security providers, enquiry information, manual retention, email alternative and privacy request route. This audit is not a legal compliance review, and approved policy language should not be rewritten to target commercial keywords.

| Element | Before | Proposed after |
| --- | --- | --- |
| Title | Privacy Notice — Ternloom Technologies | Privacy Notice — Ternloom Technologies **(keep)** |
| Description | How Ternloom Technologies handles project enquiries, including form providers, retention and privacy requests. | How Ternloom Technologies handles project enquiries, including form providers, retention and privacy requests. **(keep)** |
| H1 | Privacy notice | Privacy notice **(keep)** |
| Intro | This notice explains how Ternloom Technologies handles the information you share when you contact us about a project, and how the embedded contact form processes information. | This notice explains how Ternloom Technologies handles the information you share when you contact us about a project, and how the embedded contact form processes information. **(keep)** |

No on-page copy change is warranted. Keep its specific section headings, date and contact email. Preserve the 12-month policy with the ongoing-project/required-record exceptions and manual-deletion explanation. Keep it accessible from contact and footer. Do not noindex this page or remove it from the sitemap merely because it is not a commercial landing page; this review establishes no benefit for that change.

Evidence: [privacy.astro](../../../src/pages/privacy.astro), lines 10–94; [SiteFooter.astro](../../../src/components/SiteFooter.astro), privacy link. Actual retention operations are outside this content audit.

## Links, overlap, images and structured data

**Internal links:** The header/footer already expose the three service routes plus Projects, About, Contact and Privacy. Home service CTAs and detailed project service links are descriptive. The highest-value additions are the two software/automation decision links proposed above. Keep project evidence links contextual; a fixed count of three or five internal links is not a quality rule. Existing fragment targets can support precise project references, for example `https://ternloom.com/projects/#wood-dust-creations-title`. Fragment links do not create additional canonical pages.

**Overlap:** Website development owns website/redesign buying intent; custom software owns building a tool around a workflow; automation owns connecting existing tools and handoffs. Shared audience, scope/process text and project evidence are normal. No Search Console query/page data was supplied, so harmful cannibalisation has not been demonstrated. Do not merge pages, canonicalise services to one another, or remove useful descriptions merely because they share words. Projects and About support buyer trust; they do not need their own generic service targets.

**Local relevance:** Ottawa and Canada appear in the home intro, service eyebrows, About and footer. Bonita Nights provides an approved Ottawa/Gatineau business context. A precise address, storefront, in-person appointments and French-language support are not established. No city-page expansion, fabricated local citations or geographically stuffed headings are recommended. Keep national scope visible when adding Ottawa to service titles.

**Images:** The approved project images have descriptive file names, actual-site alternatives, captions, dimensions and lazy loading in `ProjectSummary.astro`. The Turnory alt describes a product website, not a released application. Keep those distinctions and do not add service keywords to every alt. The original home artwork and brand images need no forced keyword-bearing description. Image transfer sizes and rendering performance belong to technical/performance checks; this review has not established a compression defect or a Core Web Vitals result.

**Structured data:** The source provides Organization/WebSite, matching Service nodes on service pages, and BreadcrumbList tied to visible breadcrumbs. The page content remains the primary explanation. No new schema is required for these editorial recommendations. Do not add Product, an assumed storefront/LocalBusiness, ratings, invented social profiles or FAQ markup to chase a rich-result benefit. Google retired FAQ rich results from May 7, 2026 and removed their documentation in June; keep the useful visible questions for readers. Service descriptions in JSON-LD must remain accurate if shared summaries are edited. A general schema type's validity does not guarantee a Google search feature.

## Implementation and measurement handoff

If copy is approved later, implement service-specific metadata separately from shared summaries when necessary. Today `service.summary` also appears on About/Contact and in Service schema, so an unreviewed replacement has a wider effect than a search snippet. Preserve project copy/image approvals and the release guard. Apply only approved language, then inspect all eight rendered routes for metadata, readable headings, link destinations and accidental changes to project status, scope or privacy.

Retain the existing publication controls and run proportionate repository diagnostics/build/output checks for a future source change. Public verification after any separately authorised deployment is still necessary. No source change was made in this audit, so an implementation build is not evidence required for these proposals.

For later evaluation, use Search Console query/page data to examine whether the intended page receives relevant impressions and whether Google selects the intended canonical/title. Compare meaningful periods with enough observations and account for the newly launched site's limited baseline. Track enquiry quality only through an owner-approved process; this audit creates no analytics or tracking. A title or lead revision is not guaranteed to improve clicks, rankings or enquiries.

## Primary guidance checked

- [Google: title links](https://developers.google.com/search/docs/appearance/title-link) — distinct, descriptive, concise titles and a clear main heading; display depends on device width, not a universal character cutoff.
- [Google: snippets](https://developers.google.com/search/docs/appearance/snippet) — accurate page-specific descriptions; Google may select page text and vary the snippet by query. A meta description is not a guaranteed displayed message.
- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — useful original information, clear purpose and trustworthy evidence; do not expand content to an assumed preferred word count.
- [Google: crawlable links and anchor text](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) — use real links and descriptive, relevant anchor text. Add links for a reason rather than a quota.
- [Google Search documentation updates](https://developers.google.com/search/updates) — May 8 entry states FAQ rich-result retirement effective May 7, 2026; June 15 entry records documentation removal.

These sources inform the editorial principles; they do not certify Ternloom's ranking, indexing, implementation quality or legal compliance. The skill's fixed character ranges, “LSI” phrasing and fixed link minimum are not treated as Google rules. No promotional tool subscription is required for this work.
