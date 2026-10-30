# Ternloom project configuration brief

Date: October 29, 2026. Status: **approved for local implementation on October 30; implementation starting**.

The owner's instruction to build everything locally approves this foundation and the Working Weave implementation plan. Contact form is deferred, no worktrees are allowed, and milestone commits on existing `main` are authorized. Deployment, DNS and provider account changes remain outside scope. This later instruction supersedes the earlier no-commit boundary below.

## Intent and scope

Prepare a maintainable foundation for Ternloom Technologies' main website at `ternloom.com`, helping small businesses in Ottawa and across Canada understand its services and enquire about projects. The owner wants configuration first and website design afterward.

This brief covers business configuration, repository rules, local tooling, static output and the future hosting/visibility contracts. It does not approve a visual design, finished marketing copy, production publication or DNS changes.

## Approaches

| Approach | Tradeoff | Disposition |
| --- | --- | --- |
| Static Astro using the sibling website pattern | Small runtime surface, versioned content and straightforward static deployment; content changes require a rebuild. | Owner-selected platform and reference pattern. |
| Managed CMS or website builder | Browser-based editing, with more provider dependency, recurring cost considerations and integration work. | Unnecessary for the requested initial configuration. |
| Server-rendered application | Useful for accounts or dynamic application features, with added runtime and operational work. | No current website requirement justifies this. |

The writer recommends Cloudflare Pages for the selected static approach because both reference projects already use it. Domain ownership through Cloudflare does not itself configure hosting. Hosting target and the defaults below remain reviewable calls in this brief.

## Business configuration

| Field | Value or treatment |
| --- | --- |
| Business name | Ternloom Technologies |
| Domain | `ternloom.com` — owner-confirmed |
| Proposed canonical origin | `https://ternloom.com` |
| Audience | Small businesses, without an industry restriction |
| Public location | Ottawa, Ontario, Canada; no more detailed address inferred |
| Service area | Canada |
| Initial locale | `en-CA` — writer's default |
| Enquiry contact | Unconfirmed for this site; existing `info@ternloom.com` is the candidate |
| Social profiles, telephone, hours | Omit until supplied and approved |

One typed public site configuration will own identity, canonical origin, locale, location and confirmed contact data. A separate small service data file will own service identifiers and descriptions. Do not publish placeholder contacts or infer legal suffixes, credentials or languages.

### Three core services

1. **Website Development** — business websites, redesigns and enquiry-focused pages. Customer explanation: “A professional website that helps customers find and contact your business.”
2. **Custom Business Software** — tools built around business workflows. Portals, dashboards and quoting systems are potential examples, not an unqualified catalogue of delivered products.
3. **Business Automation & Integrations** — connect existing tools and automate repetitive workflows. Explain the process improved before naming APIs or platforms.

Supporting capability, proposed by the writer: **“Cloud deployment and hosting with simple infrastructure and predictable running costs.”** Describe low maintenance, clear ownership and costs appropriate to the workload. Provider fees, domains, email, paid tools and any ongoing support are scoped separately. Do not imply all custom software runs on free static hosting, or promise fixed costs, Canadian data residency or round-the-clock operations.

## Local technical setup after approval

- Scaffold Astro at the repository root with explicit static output, TypeScript and plain CSS; no client framework, CMS or SSR adapter by default.
- Use npm with a committed lockfile. Verify a currently supported Node/Astro combination and pin exact versions during implementation; do not copy sibling version numbers without checking compatibility.
- Set `site` to `https://ternloom.com`, directory output with trailing slashes, and `dist` as the build output.
- Provide loopback-bound `dev` and `preview`, plus `check` and `build` scripts. Document only commands that actually exist.
- Update `.gitignore` for Astro output/cache, dependencies, local environment files and operating-system noise. Do not add credentials or account identifiers.
- Add a minimal local, noindex setup page and real noindex 404 only as build fixtures, clearly labelled as unfinished. No designed landing page or empty service routes. These fixtures are not a release candidate.
- Implement typed public configuration and service data, with the enquiry contact unavailable until confirmed. No fake form, enquiry success screen or broken placeholder CTA.
- Use a shared basic metadata mechanism for the fixture; defer marketing metadata, social artwork and production page schema to the website design/implementation stage.

## Visibility contract for the later website

- Owner-nominated project references: Bonita Nights, Wood Dust Creations and Turnory. The owner confirms Ternloom is the technology provider for Bonita Nights and Wood Dust Creations; Turnory is its own software product in development. The [project reference brief](../../project-references.md) records concrete business capabilities, draft summaries and attribution boundaries. Include them in the later design scope as selected projects, with exact delivered scope finalized before publication.
- Pages must explain the three actual services, customer fit and concrete work evidence. Targeting is Ottawa-based and Canada-wide; do not generate duplicate city pages.
- Each approved content page gets a descriptive title, description, canonical URL and semantic headings. Essential content must be present in static HTML.
- Add sitemap generation once real indexable routes are approved; emit only canonical, indexable content URLs. Exclude setup pages, 404 and any confirmation utilities. Do not publish an empty production sitemap during configuration.
- Production robots and indexing directives must agree with the final sitemap. Previews and setup output stay noindex; verify hosted headers separately. Noindex is not access control.
- Use factual Organization and WebSite structured data, and Service/BreadcrumbList where appropriate to visible content. Do not fabricate ratings, addresses, offers or a local storefront. Schema is descriptive and does not guarantee search features.
- Google Search Console and Bing Webmaster Tools verification/submission are launch tasks after authorized hosting. No ranking or indexing claim follows from local configuration.
- Google Business Profile is conditional on genuine eligibility; an online-only business is ineligible. Do not create a profile from an assumed Ottawa address or invent in-person operations.
- Review discovery/training crawler policy explicitly during the visibility setup; do not inherit a sibling's crawler rules without considering this company's goals.

## Hosting and cost approach

Proposed target: Cloudflare Pages, project name `ternloom-website` if available, build command `npm run build`, output directory `dist`. These are intended settings, not a created project. Start with static hosting within the available Free-plan limits; review current quotas and account settings before publication. Domain registration, email, optional services and custom application workloads have separate costs.

During an authorized launch, choose Git-connected builds or direct deployment, pin the build runtime, configure the apex domain, redirect alternate hosts while preserving paths/queries, and verify HTTPS, real 404s and preview indexing. Preserve existing MX, SPF, DKIM, DMARC and unrelated services. Never put the supplied dashboard URL or its account identifier into public files.

Initial writer default: no visitor analytics, advertising trackers, embedded third-party booking, newsletter, checkout or custom backend. Add an enquiry form only after its processor and workflow are selected; retain email-based contact as the simplest candidate. Header/security policies must match the real output and integrations, with hosted verification later.

## Goals, non-goals and failure conditions

- Success for configuration: documented business scope; reproducible local Astro check/build; centralized public settings and service data; explicit visibility and deployment handoff; no accidental production claims.
- Website visual design, final page inventory/copy, portfolio publication, pricing, maintenance packages and French content are later work.
- This site markets custom software; it is not itself the customer portal or automation platform being sold.
- Failure conditions: wrong-domain canonicals, copied sibling business data, invented proof, exposed secrets, misleading cost promises, designed pages built before design agreement, or unapproved publication.

## Validation and builder discretion

For the present documentation initialization, check whitespace, repository-local Markdown links and consistency of owner decisions versus proposals. A fresh builder check precedes owner handoff.

After approval and an implementation plan, validate a clean dependency install, diagnostics, static build, fixture noindex/canonical output, service data and absence of secrets or active enquiry destinations. Check only the relevant proof; a fixture build does not demonstrate accessibility, performance, search visibility or hosted readiness of the future website.

Builder may choose file names, current compatible dependency versions and focused validation details within this scope. Material changes to platform, service packaging, paid services or public claims return to the owner. No commit, push, account change or deployment is part of this setup.

## Primary references

Checked October 29, 2026. Provider documentation is guidance, not an inspection of this account.

- [Astro configuration: static output, site and trailing slashes](https://docs.astro.build/en/reference/configuration-reference/)
- [Cloudflare Pages: Astro build settings](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Cloudflare Pages limits and function quotas](https://developers.cloudflare.com/pages/platform/limits/)
- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google Business Profile eligibility](https://support.google.com/business/answer/13763036)
