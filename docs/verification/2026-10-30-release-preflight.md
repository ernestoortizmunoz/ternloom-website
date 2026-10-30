# Approved-source local release preflight

Date: October 30, 2026. Result: **local release candidate passed; website remains undeployed**.

## Confirmed content

- Public email and contact/privacy address: `info@ternloom.com`.
- Final Tally copy and successful completion/inbox test: owner-confirmed, with completion screenshot.
- Privacy wording: explicitly approved, including owner-selected manual 12-month active-enquiry retention and ongoing-project/required-record exceptions.
- Bonita Nights and Wood Dust Creations descriptions: explicitly approved after adding Wood Dust's blog to its summary and capabilities. Turnory's earlier approval remains unchanged, with application-in-development status retained.
- All three public website screenshots: explicitly approved.

All five global readiness flags and all per-project copy/image approvals now reflect these owner decisions. Approval of website content does not authorize deployment, provider changes, uploads, push or DNS changes.

## Real release output

Using the pinned Node 24.22.2 runtime, ran the normal CLI against real approved source, with no synthetic approval fixture:

```sh
TERNLOOM_RELEASE=1 npm run build -- --outDir /Users/dev-zero/.codex/visualizations/2026/10/30/01a18b06-d02d-78b1-ab76-ae279c2d4c2c/ternloom-release-3DvuR6
```

The directory was created uniquely outside the served `dist` preview. The build passed with nine HTML outputs. Focused artifact assertions passed:

- Exact eight canonical content URLs in the sitemap, with matching release robots and no 404 entry.
- Every content route indexable; 404 remains noindex.
- Contact has the correct Tally endpoint, confirmed mailto, official sizing script and `environment=production`.
- No local preview/draft notices, local-test context or test-button text in generated website HTML. Provider-managed iframe contents remain outside build assertions.
- Other content pages remain free of executable client scripts and iframes; privacy stays static.
- Project output includes Wood Dust's blog. Source copy/image approvals all true.

This is filesystem/build proof, not a hosted deployment, provider transaction test or public indexing check.

## Default preview and checks

After the isolated release, rebuilt the ordinary local preview with no release environment flag:

- `npm run build`: nine outputs passed.
- `npm run check`: 45 files, no errors, warnings or hints.
- `npm test`: 17 tests passed. Explicit unapproved fixtures continue to prove that global readiness cannot bypass per-project copy/image gates, even though real production records are now approved.
- `npm run check:output`: all nine default pages remain noindex, no production sitemap, exact canonicals/metadata/schema, approved images and working local references. Contact-only iframe/script exception remains scoped.

Only the approved content records, readiness flags, related output expectations and durable documentation changed. No new dependencies, runtime service, account setting, form submission, CAPTCHA completion, deployment, push or DNS operation was performed by the agent.

## Remaining launch scope

Cloudflare Pages setup, deployment method, preservation of current email/domain services, redirect/HTTPS/header configuration, crawler policy, hosted status/indexing verification and search-console submissions require separately authorized launch work. Existing limitations from the local website/contact verification remain: this is not a full accessibility, performance or hosted-security audit, nor evidence of search rankings or AI visibility.
