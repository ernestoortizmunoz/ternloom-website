# Ternloom: simplified Cloudflare Workers launch instructions

Updated October 30, 2026. The owner selected **Workers Static Assets** after reviewing the earlier Pages guide. This guide replaces that Pages setup. Local preparation does not authorize a push, deployment, account change or DNS operation.

Status update: after the owner's dashboard setup, the public canonical site and redirect passed [read-only hosted checks](verification/2026-10-30-hosted-launch.md). The steps below remain the operating procedure; the record distinguishes completed public checks from pending account, form and search-console follow-up.

## 1. Understand what is already configured

The website remains static Astro. `wrangler.jsonc` serves `dist`, preserves trailing slashes and uses the real custom 404. There is no runtime Worker script, SSR adapter, database or application secret.

Workers Builds reads Node `24.22.2` from `.node-version` and npm `11.19.1` from `package.json`'s `packageManager`. Wrangler is pinned as a development/deployment dependency. Keep automatic dependency installation enabled. No `NODE_VERSION`, `SKIP_DEPENDENCY_INSTALL` or `TERNLOOM_RELEASE` dashboard value is required. See [Workers build tooling](https://developers.cloudflare.com/workers/ci-cd/builds/build-image/).

The internal release flag is set by the child-process build command, not by the operator:

| Command | Output |
| --- | --- |
| `npm run build` | Preview: noindex, robots disallow, no sitemap, local-test form context |
| `npm run build:release` | Approved release: indexable canonical content, sitemap, production form context |

Default `build` ignores an inherited release environment value. Release still enforces all existing owner approvals. Both commands accept Astro build arguments after `--`. The old `TERNLOOM_RELEASE=1 npm run build` invocation now deliberately produces a preview; use `build:release` instead.

## 2. Check locally and upload the intended source

Use the existing repository and `main` branch. Confirm Node/npm versions and the intended Git remote:

```sh
cd /Users/dev-zero/WebstormProjects/ternloom-website
node --version
npm --version
git branch --show-current
git status --short
git remote -v
```

Run these in order, stopping on failure:

```sh
npm ci
npm run check
npm test
npm run build
npm run check:output
npx wrangler deploy --dry-run
```

The dry run validates packaging without uploading or deploying. `check:output` checks default preview output; do not run it on a release directory. The earlier [approved-source preflight](verification/2026-10-30-release-preflight.md) used the former release invocation; the [Workers verification](verification/2026-10-30-workers-setup.md) records the current commands.

When ready to upload, ensure `origin` points to the intended Ternloom GitHub/GitLab repository. Create/configure it if absent; do not replace an existing remote blindly. Leave the unrelated unstaged `.idea` ignore out of the upload commit. Then push reviewed commits:

```sh
git push -u origin main
```

## 3. Connect Workers Builds

Open **Workers & Pages → Create application → import/connect an existing Git repository** and choose the **Workers** deployment flow. Select the Ternloom repository; do not create a Pages project.

| Setting | Value |
| --- | --- |
| Worker name | `ternloom-website`, matching `wrangler.jsonc` |
| Production branch | `main` |
| Root directory | Repository root |
| Shared build command | `npm run check && npm test` |
| Production deploy command | `npm run build:release && npx wrangler deploy` |
| Preview/non-production command | `npm run build && npx wrangler versions upload` |
| Manually entered build variables | None |

Wrangler gets the asset directory from `wrangler.jsonc`; Workers does not need a Pages output-directory field. Remove the three old guide variables if you previously entered them. Check the first build log reports the pinned Node/npm versions. Cloudflare manages authentication for its Git-connected builds; do not commit an API token or copy another business's configuration.

The shared stage runs checks. The production command builds release output before deploying; the non-production command builds preview output before uploading a version, without promoting it. Keep the `&&` chaining so failures prevent publication. The official [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/) supports custom deploy and preview commands, including version uploads.

For a **first hosted rehearsal before launch**, temporarily use `npm run build && npx wrangler deploy` as the production deploy command and leave the custom domain unattached. Review the noindex Workers address with dummy details. When ready for a release candidate, restore the production command from the table and trigger a new build. Changing settings alone does not rebuild an existing deployment.

## 4. Review static delivery and preview protection

`public/_headers` is implemented and copied into output. It adds baseline content-type, referrer, framing and browser-feature restrictions. A host-scoped rule sets `X-Robots-Tag: noindex` on `*.*.workers.dev`, including standard development/version hosts; it does not add noindex to `ternloom.com`.

Review the live header on the actual assigned URLs. Noindex is not password protection. For any future custom preview domain, separately configure noindex/access controls; do not point it at production release output without reviewing that behavior. See [Workers static headers](https://developers.cloudflare.com/workers/static-assets/headers/).

Trailing slashes and missing-page behavior are explicit in `wrangler.jsonc`. Do not change `not_found_handling` to SPA fallback: this is a multi-page static site whose missing routes must return 404. See [static asset routing](https://developers.cloudflare.com/workers/static-assets/) and [HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/).

## 5. Review crawler access before release

Current release generation in `scripts/visibility-output.mjs` produces:

```text
User-agent: *
Allow: /

Sitemap: https://ternloom.com/sitemap.xml
```

This permits compliant crawlers generally, including training crawlers. Individual training preferences remain an owner decision. Recommended for the visibility goal: allow ordinary search crawlers and AI search retrieval; choose model-training permissions separately.

| Control | Meaning |
| --- | --- |
| Googlebot / Bingbot | Search discovery; avoid accidental blocking |
| `OAI-SearchBot` | ChatGPT search discovery |
| `GPTBot` | OpenAI model-training crawling; independent of `OAI-SearchBot` |
| `ChatGPT-User` | User-triggered visits; robots.txt may not apply |
| `Google-Extended` | Controls specified Gemini training and grounding uses; blocking it does not remove Google Search inclusion |

See [OpenAI's crawler definitions](https://developers.openai.com/api/docs/bots), [Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended), and [Google's AI Search guidance](https://developers.google.com/search/docs/appearance/ai-features). Google AI Search uses ordinary Search requirements; no special AI schema or new AI file is needed for those features. Crawl permission does not guarantee indexing, rankings or recommendations.

If the owner elects to disallow OpenAI training while keeping search permitted, add a `GPTBot` group with `Disallow: /` to the **release generator**, retaining the general allow group and sitemap. Do not hand-edit `dist/robots.txt`: a rebuild overwrites it. Update the exact release-robots expectation in `scripts/check-404-release.mjs` and verify the default preview remains disallowed. This example does not settle other providers' training policies.

In Cloudflare's bot/AI controls, review search, agent and training preferences plus managed robots settings. Ensure the dashboard does not contradict the chosen policy. Cloudflare can prepend managed robots rules or enforce blocks independently of the repository; inspect the actual public response and relevant security events. Do not disable unrelated security controls wholesale. See [Cloudflare's bot configuration reference](https://developers.cloudflare.com/api/resources/bot_management/).

## 6. Check the production candidate

The production command already selects release mode. No dashboard release variable is required. The source approvals are confirmed; never change them merely to bypass a failure.

Before attaching a custom domain, inspect the candidate on its assigned Workers address: eight canonical content routes, production Tally context, sitemap and permanently noindex 404. There should be no preview/draft notice in release HTML. The Workers hostname must still have its host-specific noindex header. Uploaded preview versions should retain preview HTML and local-test context.

## 7. Attach the domain while preserving email

Save the complete current DNS zone and old website targets privately. Preserve MX, SPF, DKIM, DMARC, mail-host records, verification records and unrelated subdomains. Current account/DNS records have not been inspected by this guide.

Workers Custom Domains require an active Cloudflare zone. If `ternloom.com` already uses the intended Cloudflare account/nameservers, keep them. Otherwise import and reconcile all existing records before a nameserver change; automatic scans may miss records. Handle existing DNSSEC at the registrar before changing nameservers, then re-enable it after activation with Cloudflare's supplied values. Follow [Cloudflare DNS setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/); never guess nameservers or DS values.

In **Workers & Pages → your Worker → Settings → Domains & Routes → Add → Custom Domain**, add `ternloom.com`. Review conflicting existing web records individually. Workers cannot attach a Custom Domain over an existing CNAME; preserve its old value before replacing that specific web record. Add `www.ternloom.com` as well for the redirect below. Wait for the domains and certificates to become active. See [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

Account identifiers and domain bindings are deliberately absent from the current local configuration. After the authorized domain cutover, record the attached hosts in `wrangler.jsonc` before another production deployment, keeping the existing asset settings and development/version URL options:

```json
"routes": [
  { "pattern": "ternloom.com", "custom_domain": true },
  { "pattern": "www.ternloom.com", "custom_domain": true }
]
```

Review this local change, validate with a dry run and commit it so future deployments agree with dashboard domain ownership. Test incoming and outgoing `info@ternloom.com` email after DNS migration; website hosting does not require changing email providers.

## 8. Redirect www and confirm HTTPS

Once `https://ternloom.com` works, create an account-level **Bulk Redirect list** and enable a rule using it:

| Source URL | Target URL | Status |
| --- | --- | --- |
| `www.ternloom.com` | `https://ternloom.com` | 301 |

Enable **Preserve query string**, **Subpath matching** and **Preserve path suffix**. Scope it to the www host, and ensure its DNS is proxied. Cloudflare's [www redirect procedure](https://developers.cloudflare.com/pages/how-to/www-redirect/) describes the edge rule; here the hostname is already attached to the Worker, so do not replace it with the example's dummy DNS target.

Workers development/version hosts remain noindex; do not redirect all of them to production because that would hide previews. Confirm HTTP requests reach the HTTPS canonical domain without a loop. If a zone-wide HTTPS redirect is needed, first review its effect on other web subdomains. No global canonical-domain noindex header should be present.

## 9. Verify the public deployment

Run these only after the intended launch. They are examples, not hosted results recorded by this guide:

```sh
curl -I https://ternloom.com/
curl -I 'https://www.ternloom.com/contact/?check=launch'
curl -I http://ternloom.com/
curl -I https://ternloom.com/a-deliberately-missing-page/
curl -fsS https://ternloom.com/robots.txt
curl -fsS https://ternloom.com/sitemap.xml
```

Check these expected results:

- All eight content routes return 200 over HTTPS with the correct `https://ternloom.com/…/` canonical and no meta/header noindex. Routes are listed in [project context](project-context.md).
- `www` redirects permanently to the matching apex path and preserves `?check=launch`. The Workers development hostname and uploaded version URLs should return noindex headers; do not redirect preview hosts to production.
- The deliberately missing URL returns a real 404 and the designed recovery page, with noindex; it is absent from the sitemap.
- Robots permits the chosen search crawlers, advertises the sitemap and contains no unexpected managed restriction. The sitemap contains exactly the eight canonical content URLs.
- Expected headers are present; no local-test notice or draft label remains in Ternloom's production HTML. Contact iframe URL has `source=ternloom-website` and `environment=production`.
- On desktop and mobile, navigation, project links, form placement, keyboard focus and email/direct-form fallbacks work. Check 200% zoom and a blocked/unavailable embed as well. Run a hosted Lighthouse/PageSpeed review and address material failures; no performance score has been promised.

An ordinary `curl` request with a changed User-Agent is not proof of access from a genuine verified search crawler. Use Search Console live inspection and available Cloudflare security events to investigate real blocks.

## 10. Finish Tally and search setup

Once `/privacy/` is publicly available, add its actual URL to the Ternloom form's privacy text: `https://ternloom.com/privacy/`. Keep `dbEbrd`, native reCAPTCHA, the approved completion message and notifications to `info@ternloom.com`. Keep the built-in Tally Thank You page; no website redirect is required. See the [form operations checklist](contact-form-operations.md).

The owner should make one final dummy submission through the live website, complete CAPTCHA, check the Thank You message, inspect both hidden fields and confirm receipt at the Ternloom inbox. Remove test records according to the operations procedure. Continue the manual 12-month retention policy across Tally, email and exports, with the approved exceptions.

In [Google Search Console](https://search.google.com/search-console), add a **Domain property** for `ternloom.com`, create the supplied verification TXT record without replacing existing TXT/mail records, and verify it. Submit `https://ternloom.com/sitemap.xml` in Sitemaps. Inspect the homepage and service pages using the live URL test, then request indexing where appropriate. See [ownership verification](https://support.google.com/webmasters/answer/9008080) and [sitemap submission](https://support.google.com/webmasters/answer/7451001).

In [Bing Webmaster Tools](https://www.bing.com/webmasters/), import the verified Search Console site or verify it independently, then confirm the same sitemap. See [Bing's setup guide](https://www2.bing.com/webmasters/help/add-and-verify-site-12184f8b). Monitor indexing and crawl reports after launch. A submitted sitemap or indexing request is not a guarantee of inclusion.

## 11. Record the launch and keep rollback available

Record the deployed commit/version, public checks, redirect outcomes, chosen crawler policy and owner-reported form/email test in a verification note; update project context with actual results. Keep DNS exports and provider identifiers private. Future pushes to `main` can update production once Git automation is enabled.

For a later bad release, use the Worker's **Deployments** controls to roll back to the known-good deployed version, then correct/revert the source before another automated build. A first-ever deployment has no earlier production target. Preserve prior website DNS targets before cutover. DNS, redirect rules and Tally settings are separate and are not undone by a Worker rollback. See [Workers rollbacks](https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks/).

All provider, Git upload, DNS, Tally and search-console actions above remain manual until separately authorized for agent execution. Local configuration and validation do not publish the site.
