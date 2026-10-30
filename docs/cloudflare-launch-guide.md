# Ternloom: Cloudflare Pages launch instructions

Prepared October 30, 2026. These are manual instructions for a future launch. No upload, push, deployment, account change or DNS change has been performed by preparing this guide.

The approved website already passes the [local release preflight](verification/2026-10-30-release-preflight.md). The following hosting settings and header file are proposed launch preparation, not verified Cloudflare account configuration. Current DNS records and the repository's remote destination have not been inspected for this guide.

## 1. Check the local source

Use the existing repository and `main` branch. Do not scaffold another Astro project, install an SSR adapter, create a worktree or copy another business's provider settings.

```sh
cd /Users/dev-zero/WebstormProjects/ternloom-website
node --version
npm --version
git branch --show-current
git status --short
git remote -v
```

Required versions: Node `24.22.2`, npm `11.19.1`. The repository enforces both. Use your Node version manager to select the pinned version if necessary; do not weaken the engine checks.

Run these in order, stopping if any command fails:

```sh
npm ci
npm run check
npm test
npm run build
npm run check:output
```

The last two commands deliberately verify the default **noindex** preview. `check:output` is not a production-output checker: do not run it against a release build. The pre-existing unstaged `.gitignore` change is unrelated; do not include it accidentally in a launch commit.

## 2. Choose the Git-connected deployment

Recommended method: connect this repository to Cloudflare Pages. Confirm `origin` points to Ternloom's intended GitHub or GitLab repository. If no remote exists, create the intended repository and configure its exact URL first. Never replace an existing remote without checking its purpose.

When you are ready to upload the committed source to that verified remote:

```sh
git push -u origin main
```

In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git** (sometimes labelled **Import an existing Git repository**). Select the Ternloom repository. Git-connected builds support automatic deployment after pushes; choose this method deliberately rather than starting a Direct Upload project. See [Cloudflare's Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/).

## 3. Enter the build settings

| Setting | Value |
| --- | --- |
| Project name | `ternloom-website`, if available; record the actual name |
| Production branch | `main` |
| Framework preset | Astro |
| Root directory | Repository root; leave blank if that represents the root |
| Build output directory | `dist` |
| Build command | The command below |

Use this build command to select the exact npm version, install from the lockfile, check the source and generate the site:

```sh
npx --yes --package=npm@11.19.1 --call 'node --version && npm --version && npm ci && npm run check && npm test && npm run build'
```

Set these plain build variables in **both Production and Preview**:

| Variable | Value |
| --- | --- |
| `NODE_VERSION` | `24.22.2` |
| `SKIP_DEPENDENCY_INSTALL` | `1` |

The second variable lets the build command perform the pinned installation instead of Cloudflare's automatic install. Current v3 documentation does not promise npm selection from `package.json` or a v3 `NPM_VERSION` override. `npx --package` with `--call` supplies the requested npm executable to the command's PATH. See [Cloudflare build image settings](https://developers.cloudflare.com/pages/configuration/build-image/) and [npm exec documentation](https://docs.npmjs.com/cli/v11/commands/npm-exec/).

For the **first hosted rehearsal**, leave `TERNLOOM_RELEASE` unset everywhere. Save and deploy. Inspect the build log: Node must report `v24.22.2`, npm `11.19.1`; installation, diagnostics, tests and build must succeed. This command is a proposed hosted configuration, not a claim that it has already run on Cloudflare.

Review the assigned `https://<actual-project-name>.pages.dev` site on desktop and mobile. At this stage, preview text, `environment=local-test`, noindex pages, disallow-all robots and an absent sitemap are expected. The form still sends submissions to Tally and may email the inbox; use dummy details for an owner-operated test.

The [Astro Pages guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/) confirms `dist` as the output directory. This repository already uses static output and needs no Cloudflare runtime adapter, database, API key or server-side form handler.

## 4. Prepare the host-specific headers locally

There is currently no `public/_headers` file in this repository. Before activating release output, add it with the following content, replacing `YOUR_PROJECT` with the actual Pages project name:

```text
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=()

https://YOUR_PROJECT.pages.dev/*
  X-Robots-Tag: noindex

https://:version.YOUR_PROJECT.pages.dev/*
  X-Robots-Tag: noindex
```

The last two rules keep the base Pages hostname and its version/branch hosts noindex even when they serve release HTML. Keep `:version` as written; it is a Cloudflare hostname placeholder. These rules must not apply to `ternloom.com`. Cloudflare separately adds a noindex header to preview deployments; verify hosted headers in either case. Noindex is not password protection. See [Pages headers](https://developers.cloudflare.com/pages/configuration/headers/) and [preview indexing](https://developers.cloudflare.com/pages/configuration/preview-deployments/).

These baseline headers do not impose a Content Security Policy. A future CSP must allow the actual Tally iframe/script and be tested with the form. `X-Frame-Options` on Ternloom controls embedding of Ternloom pages; it does not prevent Ternloom from embedding Tally.

Repeat the default local checks, confirm `dist/_headers` contains the intended rules, and commit only the intended launch files. Push the reviewed commit to `main`; wait for a successful deployment. The headers take effect on Cloudflare, not in Astro's local preview.

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

## 6. Build the production candidate

In Pages settings, set **Production only**:

```text
TERNLOOM_RELEASE=1
```

Leave this variable **unset in Preview**. Do not put `TERNLOOM_RELEASE=1` directly into the shared build command, because that would also release preview builds. Save and trigger a new production deployment; changing a variable does not rebuild existing files by itself.

The source approvals are already confirmed. Do not change approval flags to bypass a failure. A successful release contains eight indexable canonical routes, a sitemap, production Tally context and a permanently noindex 404. On the base Pages hostname, the host-specific noindex header from step 4 should still be present. Check that header before attaching the domain.

## 7. Attach the domain while preserving email

First export or otherwise save the complete current DNS zone and record the existing website targets privately. Preserve MX, SPF, DKIM, DMARC, mail-host records, verification records and unrelated subdomains. Review conflicting apex/`www` web records individually rather than deleting the zone.

If `ternloom.com` already uses Cloudflare nameservers in the intended account, keep them. Otherwise, the apex Pages domain requires a Cloudflare zone and nameserver setup. Import and reconcile all records before changing nameservers; automatic scans can miss records. For the standard migration, handle existing DNSSEC at the registrar before replacing nameservers, then re-enable it after activation using Cloudflare's supplied values. Follow the [full DNS setup instructions](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/); do not guess nameservers or DS values.

In **Pages → your project → Custom domains → Set up a domain**, add `ternloom.com`. Use the DNS change Cloudflare proposes, after checking its impact on current web records. Add `www.ternloom.com` as well for the redirect below. Wait until both domains and their HTTPS certificates are active. Associating the custom domain in Pages is required; a manually added CNAME alone is insufficient. See [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

Test incoming and outgoing `info@ternloom.com` email after any DNS migration. This is a website-hosting change, not an email-provider migration.

## 8. Redirect alternate hosts

After `https://ternloom.com` works, create an account-level **Bulk Redirect list** and an enabled rule using it:

| Source URL | Target URL | Status |
| --- | --- | --- |
| `www.ternloom.com` | `https://ternloom.com` | 301 |
| `<actual-project-name>.pages.dev` | `https://ternloom.com` | 301 |

For both rows, enable **Preserve query string**, **Subpath matching** and **Preserve path suffix**. Leave **Include subdomains off** for the Pages row so branch/hash preview hosts remain previews. Scope the `www` redirect to that host as well. Ensure the `www` DNS record is proxied so Cloudflare can apply the redirect. Use the associated Pages target, not an invented server IP.

Follow [Cloudflare's www redirect](https://developers.cloudflare.com/pages/how-to/www-redirect/) and [Pages-host redirect](https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/) instructions, adapting the scope above deliberately. Confirm HTTP requests reach the HTTPS canonical site without a loop. Enable the zone's HTTPS redirect if needed after reviewing its effect on other hosted web subdomains. Do not add a global noindex header to the canonical domain.

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
- `www` redirects permanently to the matching apex path and preserves `?check=launch`. Check the actual Pages hostname similarly. A branch/hash preview should remain a noindex preview instead of redirecting to production.
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

Record the deployed commit, public checks, redirect outcomes, chosen crawler policy and owner-reported form/email test in a verification note; update project context with actual results. Keep DNS exports and provider identifiers private. Future pushes to `main` can update production once Git automation is enabled.

For a later bad release, choose a previously successful production deployment in **Pages → Deployments → deployment actions → Rollback to this deployment**. A first-ever deployment has no earlier production target; preserve prior website DNS targets before cutover. DNS and Tally settings are separate from Pages artifacts and are not undone by a deployment rollback. See [Pages rollbacks](https://developers.cloudflare.com/pages/configuration/rollbacks/).

All Cloudflare, Git upload, DNS, Tally and search-console actions above remain manual until separately authorized for agent execution. Preparing these instructions changes none of those services.
