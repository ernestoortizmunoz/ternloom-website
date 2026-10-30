# Ternloom website design: Working Weave

Date: October 30, 2026. Status: **complete website design approved by the owner on October 30; implementation plan next; technical setup not started**.

Approval record: the owner answered “yes” to approval of this full design brief. The proposed page inventory, component roles, theme and copy direction below are accepted for implementation planning. Explicit contact, project-content, asset and publication dependencies remain in force. This approval does not approve the separate configuration brief.

## Intent and scope

Design Ternloom Technologies' main website so small-business owners in Ottawa and across Canada can understand the offering, assess relevant work and begin a project enquiry. The desired impression is trustworthy, comfortable, serious and secure. Communicate this through clear information, restrained visual design and accurate evidence. Security certifications, measured results and service commitments are not established by appearance.

The owner selected **A, Working Weave — distinctive and calm**, after seeing three browser mockups. The owner subsequently accepted the existing interlocking mark and wordmark shown in their screenshot. This document turns that direction into a reviewable website proposal. The exact page inventory, component tree, theme values and draft copy below are the writer's recommendations until this document is approved.

The separate [configuration brief](2026-10-29-project-configuration-design.md) remains unapproved. There is no Astro application or installed website dependency set. Browser mockups live outside the repository and are disposable design studies. Approval of this design does not authorize publication, DNS changes, uploads, provider account changes, branches, commits or pushes.

## Confirmed decisions and evidence

- Business name: Ternloom Technologies; domain: `ternloom.com`.
- Audience: small businesses in Ottawa and across Canada, without an industry restriction.
- Services: Website Development; Custom Business Software; Business Automation & Integrations.
- Cloud deployment and hosting support these services; they are not a fourth service.
- The owner confirmed more than 15 years working in IT and software. This describes experience, not the company's founding date or team size.
- Bonita Nights and Wood Dust Creations use Ternloom as their technology provider. Exact public contribution summaries and screenshot selections still need approval.
- Turnory is Ternloom's own Windows sim-racing telemetry application, currently in development. Its public summary was approved separately.
- Static Astro is selected. TypeScript, plain CSS, npm, Cloudflare Pages, `en-CA`, trailing slashes and the canonical origin `https://ternloom.com` remain the configuration brief's proposed defaults.

Use the [project reference brief](../../project-references.md) for project details and boundaries. Do not promote a visible integration into a claim that an entire business operation has been automated.

## Approaches considered

| Approach | Character and tradeoff | Decision |
| --- | --- | --- |
| Working Weave | Warm paper, deep green, an original interlocking motif and clear business explanations. Distinctive identity requires restraint so the illustration supports the offer. | Owner-selected direction. |
| Working Edition | Editorial typography and project stories. Thoughtful presentation risks making the business appear focused only on visual design. | Considered; not selected. |
| Business Desk | Task-led service choices and reassuring structure. Clear and practical, with a less distinctive visual signature. | Considered; not selected. |

Retain Working Weave's identity and use direct, task-oriented explanations within it. This does not change the selected direction to Business Desk.

## Brand and art direction

### Name and accepted mark

Keep the current lowercase `ternloom` wordmark, small uppercase `TECHNOLOGIES` descriptor and interlocking two-part mark. The owner accepted this lockup from the mockup screenshot. Appendix A preserves the original mockup's SVG and wordmark settings as the durable, authoritative design reference. Preserve its geometry and proportions as the baseline; replacing it with a bird or a more literal woven T would be a new design proposal.

The owner supplied no historical meaning behind the name and suggested an association between technology and connecting people. The weaving interpretation is an intentional visual association, not a claimed naming origin. The accepted mark expresses connection through interlocking shapes. The full business name remains available in accessible text wherever the visual lockup is used.

Prepare an SVG master, horizontal lockup, single-colour version and small icon from the accepted geometry during the approved implementation. At small sizes, simplify only details that fail visual inspection; do not rely on the pale segment alone to convey the mark. Use the full wordmark in the header and footer. A symbol by itself suits the favicon, not the primary introduction to the business.

### Illustration

The homepage's distinctive artwork uses three broad, flat strips crossing in an open weave. It represents websites, business software and connected workflows. Use pine, sage and sand with a restrained rust thread. Keep the artwork separate from the headline and body text.

The illustration is abstract, not a screenshot, customer system or proof of a delivered workflow. All meaningful service information also appears in normal HTML. It should be decorative to assistive technology when adjacent text already explains the offer. Do not put essential labels only inside SVG.

Default to a static vector illustration. The first version needs no animation, 3D runtime or image-generation service. If bespoke raster artwork is later useful, it is an optional art-production decision; it does not replace factual project screenshots.

### Proposed theme

No Ternloom theme or component library exists. These are proposed new entries for one shared CSS theme, not conventions inferred from other projects or values measured from a screenshot.

| Proposed token | Value | Use |
| --- | --- | --- |
| `color-paper` | `#F7F5EF` | Main page surface. |
| `color-ink` | `#1C302B` | Primary text and accepted mark's dark segment. |
| `color-muted` | `#56655F` | Secondary explanatory text. |
| `color-pine` | `#204D42` | Primary actions, selected emphasis and contact region. |
| `color-sage` | `#DBE5DB` | Soft supporting surface and illustration. |
| `color-sand` | `#D8C5A8` | Illustration only. |
| `color-rust` | `#90452E` | Small decorative accents; never the only status signal. |
| `color-line` | `#CBD2C9` | Decorative separators; not automatically a sufficient control boundary. |
| `color-white` | `#FFFFFF` | Text on dark primary actions. |

Typography proposal: a self-hosted, appropriately licensed DM Sans variable font for headings and body; Georgia italic for the short editorial emphasis in the homepage heading. The mockup's sans-serif text currently uses system fallback, so font selection is an explicit proposal rather than a claim about the accepted screenshot. Keep the accepted wordmark's Arial-based treatment from Appendix A independently of the body-font choice. A change to the lockup's typeface returns for review.

Proposed type roles: body 1.0625rem with 1.65 line height; supporting text 0.875rem with 1.5 line height; labels 0.8125rem with 1.5 line height; section headings approximately 1.75–2.25rem; homepage heading fluid between 2.75rem and 4.25rem with 1.05 line height. Use medium heading weights and restrained tracking. Avoid important copy in tiny uppercase labels.

Proposed spacing entries: 0.5, 1, 1.5, 2, 3, 4 and 5rem. Main content width: 72rem. Wide-screen section padding: 3rem horizontally and 4rem vertically, reduced to 1.5rem horizontally on narrow screens. Primary control minimum height: 3rem. Small action radius: 0.25rem. Prefer open rows and thin rules over repeated boxed cards. These entries must reach pages through the shared theme.

Verify actual foreground/background pairs before calling them accessible. Light illustration colours are not approved for small text. The proposed release has one light theme, with dark contact regions; it does not include a colour-mode toggle.

## Page inventory and visitor paths

Proposed first release: seven content routes and a real 404. The homepage links directly to each service, selected work and contact. A separate service index is unnecessary for this release.

| Route | Role and primary intent | Draft title |
| --- | --- | --- |
| `/` | Introduce the business, demonstrate relevant work and guide an enquiry. | Ternloom Technologies — Websites, Software & Integrations |
| `/services/website-development/` | Explain business websites, redesigns and enquiry journeys. | Website Development for Small Businesses — Ternloom |
| `/services/custom-business-software/` | Explain tools built around business workflows. | Custom Business Software — Ternloom Technologies |
| `/services/business-automation-integrations/` | Explain connected tools and repeatable workflows. | Business Automation & Integrations — Ternloom |
| `/projects/` | Present the three nominated projects with precise role and status labels. | Selected Projects — Ternloom Technologies |
| `/about/` | Explain experience, audience and working approach using confirmed facts. | About Ternloom Technologies |
| `/contact/` | Offer a confirmed, straightforward project enquiry route. | Discuss Your Project — Ternloom Technologies |
| Real 404 | Explain the missing page and link to home and services. | Page Not Found — Ternloom Technologies |

A privacy page is conditional on the actual website processing and approved notice. Do not copy a sibling policy or publish an empty policy page. Do not add individual case-study pages until their approved material can support a useful page. Do not add a blog, generic city pages, customer portal, pricing calculator or booking tool to fill space.

## Page shapes and proposed shared pieces

There are no existing Ternloom components to reuse. The following names and placements are proposed new pieces; document approval agrees their roles. Keep the shared layer small, without a UI framework.

### Shared shell

`SiteLayout` contains metadata, a skip link, `SiteHeader`, one main region and `SiteFooter`. `SiteHeader` contains the accepted lockup, service links, selected work, about and a primary contact action. Use a simple wrapping navigation that works without JavaScript; keep contact visible. `SiteFooter` contains the full business name, service links, projects, about, contact and privacy only when an actual notice exists.

`ActionLink`, `SectionHeading`, `ProjectSummary` and `ContactInvitation` cover the genuinely repeated roles. A `ServicePage` layout can own the common service structure. Page-specific hero and illustration remain homepage pieces. Use semantic links, headings, lists and articles rather than copying the mockup's noninteractive display spans into production.

### Home, in reading order

1. Shared header and navigation.
2. Homepage hero: audience line; one H1; supporting explanation; primary enquiry link; secondary selected-work link; abstract weave illustration. The three formal service names appear as readable text directly below the hero.
3. Experience statement: “Built on more than 15 years of experience in IT and software development.” Keep it a clear statement, not a rating or certification-style badge.
4. Selected projects: three generous editorial summaries, each with a factual screenshot, project name, relationship/status label, business need, demonstrated capability and public website link. All summaries remain visible without a carousel or filters.
5. Three service sections: customer problem, exact service name, potential deliverables and a link to its dedicated page. Potential deliverables must not read as a catalogue of previously completed commissions.
6. Working together: understand the problem, agree the scope, build and review. This is proposed process wording, without fixed delivery dates or ongoing-support promises. Supporting cloud delivery information belongs here or on relevant service pages.
7. Contact invitation: describe the business problem and link to the contact page.
8. Shared footer.

Draft hero H1: **“Built around the way you work.”** Supporting sentence: **“Websites, custom software and connected tools for small businesses in Ottawa and across Canada.”** Primary action: **“Discuss your project”**. Secondary action: **“Explore selected work”**.

### Service pages, in reading order

Shared header; breadcrumb; service H1 and direct explanation; problems the service fits; potential deliverables and scope boundaries; relevant project evidence; how work starts; a small set of useful service-specific questions; contact invitation; shared footer. Use one H1 and a logical H2/H3 hierarchy. Keep answers in the HTML, whether presented openly or in native disclosure elements.

Website Development references Bonita Nights and Wood Dust Creations. Custom Business Software references Turnory as Ternloom's own product in development. Automation & Integrations references connected booking requests and Square checkout links, without claiming live inventory synchronization, automated fulfilment or an independently established automation case study.

### Projects, about, contact and 404

- Projects: shared header; H1 and explanation of the mixed portfolio; three substantial project stories with approved screenshots, business need, role, demonstrated scope and public link; relevant service links; contact invitation; footer.
- About: shared header; H1 and confirmed business positioning; the experience statement; three service links; proposed working principles stated as approach rather than credentials; selected projects link; contact invitation; footer. Omit invented staff biographies, team photographs, founding dates, partnerships and office details.
- Contact: shared header; H1; short invitation to describe the business, current tools and desired change; confirmed contact method; brief next-step explanation; useful service links; footer. No form, submission state or response-time promise is in the base design.
- 404: shared header; one clear H1 explaining the missing page; working links to home and service pages; footer. Return an actual 404 status and exclude it from indexing and the sitemap.

## Content and asset contracts

Use “Selected projects,” not “Trusted by” or an endorsement strip. Bonita Nights and Wood Dust Creations carry “Technology provider.” Turnory carries “Our own product — application in development,” preserving its approved summary:

> Turnory is a Windows sim-racing telemetry application developed by Ternloom Technologies, alongside its product website and launch-notification integration. The application is currently in development.

Each screenshot must show public-facing work, have a meaningful caption and image alternative where informative, and avoid customer records or private interfaces. Select and approve current screenshots before public release. If an asset is missing during local work, use a clearly labelled local placeholder or a text-only summary; do not fabricate a product screen or ship an empty frame.

Copy leads with business problems, deliverables and fit. Mention infrastructure only where it helps explain scope or costs. No rankings, savings, conversion figures, uptime, guaranteed hosting prices or support coverage without evidence and agreement.

## Enquiry decision and unfinished states

Writer's recommended base flow: an email-first contact page, with no processor or backend. `info@ternloom.com` is only a candidate until the owner confirms it for public enquiries. Confirmation is a content dependency and publication gate, not an invitation to silently activate that address.

Before confirmation, local pages remain noindex. The contact region explains that enquiry details are not yet configured and contains no active mailto, fake form or apparent working submission action. The final public site must not ship in that state. Once confirmed, the page displays a normal email link and the address as selectable text; do not add a copy button or success toast as a new dependency.

The base site has no dynamic loading or submission state. Navigation and content must work when JavaScript is unavailable. Images reserve dimensions; informative captions remain readable if an image fails. Broken internal links and missing images are verification failures. No analytics, advertising pixels, external font requests, booking embeds or newsletter integration are proposed.

## Responsive behaviour and accessibility

Use semantic static HTML. Preserve reading order across breakpoints: introduction and actions first, then illustration. On narrow screens, project and service rows stack, headings wrap naturally and navigation wraps without a JavaScript-dependent menu. Do not shrink the whole desktop layout into a miniature page or introduce horizontal galleries.

Check at 375, 768, 1024 and 1440 CSS pixels and at 200% zoom. Essential controls have visible keyboard focus, descriptive names and practical touch targets. Use a skip link and logical focus order. Never hide essential content behind hover or scroll-reveal scripts. Respect reduced motion; the first version's static illustration requires none. The feeling of security comes from truthful, predictable behaviour, not lock symbols or fabricated badges.

## SEO and AI discovery

Maintain one factual public business configuration. Every real content page gets its own descriptive title, description, canonical URL and social metadata. Place key identity, service, audience and project facts in static HTML. Use Ottawa and Canada naturally; do not manufacture near-duplicate location pages. Link project evidence and relevant services in both directions.

After approved technical setup, add accurate Organization and WebSite structured data, Service on relevant pages and BreadcrumbList where visible hierarchy supports it. Match visible content. Do not add fictitious ratings, addresses, prices, legal identity details or an assumed storefront.

Generate the sitemap from approved canonical indexable routes only. Exclude local fixtures, previews, 404 and utility routes. Keep unfinished output noindex and verify actual hosted indexing controls separately at an authorized launch. Decide search/training crawler policy explicitly rather than copying a sibling rule set.

Google's [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) describes ordinary SEO foundations and does not require a special AI file or special schema. [OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes search access from potential training use. Neither access nor markup guarantees mention, indexing or recommendations. These primary sources were checked during October 30 research.

AI visibility remains unmeasured. A later authorized baseline audit should use fixed branded, service and problem prompts; record platform, model/search mode, date, locale, exact responses, citations and factual accuracy; then repeat comparably. Proposed prompts include “Who builds websites for small businesses in Ottawa?”, “Custom software for a small-business workflow in Canada” and “Connect booking or checkout tools to a business website.” They are research targets, not demonstrated visibility. Prefer observed counts over a fabricated score. Paid monitoring software is not required for this website design.

## Sequence and approval boundaries

1. Owner reviews this complete website design proposal. Accepted direction and mark do not substitute for approval of the full page/content contract.
2. Owner approves the separate configuration brief before scaffolding or dependency installation. Preserve the original configuration-first implementation sequence.
3. After design approval, prepare the implementation plan. Keep technical foundation and designed-page work as distinct stages in that plan; the foundation implements only the configuration brief's noindex fixtures and shared configuration first.
4. Build and verify the local website after the applicable approvals and plan. Contact, project wording and screenshot dependencies can be represented explicitly in local noindex work; they must be resolved before public release.
5. Treat hosting, provider configuration, uploads, domain changes, search-console submissions and publication as separately authorized launch work. Preserve existing domain services and email DNS.

No branches, worktrees, commits, pushes or pull requests are included. Do not install the visual companion's proposed tooling into the application or treat its markup as production source.

## Verification and builder discretion

Present status: documentation and external mockups only. Before handoff, check repository-local links and whitespace and obtain a fresh builder review. Report that review as design feedback, not owner approval.

During implementation, verify diagnostics and static build, route/canonical/indexing output, factual schema, internal links, asset loading, keyboard and no-JavaScript navigation, responsive layout and meaningful image alternatives. Check the accepted mark at favicon and header sizes. Validate contact behaviour only after its destination is confirmed. Local tests do not establish hosted performance, security controls, search indexing or commercial outcomes.

Builder may settle file organization, small component boundaries, accessible vector construction, image sizing/compression and compatible dependency details within the approved briefs. Changes to the accepted mark, chosen palette character, page inventory, service packaging, contact processing, paid dependencies or public claims return for review. Essential-page JavaScript, a CMS or a runtime backend need a demonstrated requirement and a new decision.

Success means a distinctive, calm website with a clear offer, honest evidence and an understandable enquiry path. Failure includes an attractive but vague technology site, copied branding, manufactured proof, a misleading experience claim, inaccessible decorative interactions or accidental publication of unfinished work.

## Appendix A: accepted lockup source reference

The owner accepted the existing Working Weave lockup in their October 30 screenshot. The following SVG geometry is copied verbatim from that mockup. It is the design reference to preserve, rather than a new proposed mark. Colour is inherited from the dark ink theme entry; the second shape uses 45% opacity. The mockup renders it at 34 by 34 CSS pixels alongside the wordmark. The source remains vector geometry, not an image traced from the owner's screenshot.

```svg
<svg viewBox="0 0 40 40" aria-hidden="true">
  <path d="M4 7h23v8H13v18H5V7Z" fill="currentColor" />
  <path d="M18 7h17v27H18v-8h9V15h-9Z" fill="currentColor" opacity=".45" />
</svg>
```

The wordmark is live text: lowercase `ternloom` with uppercase `TECHNOLOGIES` below it. The original mockup declares an unavailable `DraftSans` face and falls back to Arial; no font was loaded for that face. Preserve the effective Arial treatment below. These are recorded design values, to be represented through the production theme after approval.

| Position | Recorded treatment |
| --- | --- |
| Mark/text holder | Flex row, vertically centred, 12px gap. |
| Symbol | 34px square; `viewBox` 0 0 40 40. |
| `ternloom` | Arial, sans-serif; 24px; declared weight 650; line height 1.1; letter spacing -0.045em. |
| `TECHNOLOGIES` | Arial, sans-serif; 10px; weight 500; inherited line height 1.1; letter spacing 0.14em; uppercase; 5px gap above. |
| Colour | Inherited `color-ink`, proposed `#1C302B`; second SVG path at 45% opacity. |

The browser's weight synthesis is part of the current live-text rendering; an outlined wordmark would need visual comparison with this reference. The owner screenshot is corroborating visual evidence, not a source from which new values should be measured. Mono and small-icon variants may adapt opacity or detail for legibility while preserving the interlocking geometry; a different symbol needs owner review.
