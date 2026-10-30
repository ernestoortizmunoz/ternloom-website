# Simplified Workers setup: local verification

Date: October 30, 2026. Scope: owner-authorized local configuration and scoped commits on existing main. No push, deployment, custom-domain binding, DNS change or form submission was performed.

## Implemented contract

- `npm run build` selects preview explicitly; `npm run build:release` selects release. The wrapper sets the existing internal flag for the child Astro process, forwards arguments and propagates failure status.
- Existing Node `24.22.2` and npm `11.19.1` pins remain unchanged. Wrangler `4.156.0` is a pinned development/deployment dependency; no custom Worker code, runtime service or SSR adapter was added.
- `wrangler.jsonc` serves `dist`, forces trailing slashes and uses `404-page` handling, with development/version URLs enabled. No account ID, credentials or domain bindings are configured.
- Static headers apply baseline restrictions globally and noindex specifically to development/version Workers hostnames. Canonical-domain indexing remains controlled by the release output.
- Current manual launch commands use automatic installation, shared diagnostics/tests, a release build before production deploy and a preview build before version upload. No manually entered dashboard build variables are needed. Existing provider accounts have not been inspected or changed.

## Checks performed

Commands used the pinned runtime. In this environment its PATH prefix was `/private/tmp/node-v24.22.2-darwin-arm64/bin`.

- Four command-contract tests first failed because the wrapper did not exist, then passed. They cover inherited release-value isolation, explicit release selection, forwarding a path with spaces, nonzero child exit status and rejection of an unknown mode.
- `npm test`: 21 tests passed, including the existing approval-gate and SEO tests. `npm run check`: 47 files, no errors, warnings or hints.
- `TERNLOOM_RELEASE=1 npm run build` deliberately produced the default nine-page preview. `npm run check:output` passed: all nine pages noindex, robots disallow, no sitemap, local-test form context and unchanged content/link/schema checks.
- `npm run build:release -- --outDir /private/tmp/ternloom-workers-release.6XewFM` succeeded against real approved source. Focused assertions proved exact eight canonical indexable routes and sitemap entries, release robots, production form context, absence of preview notices, permanently noindex/excluded 404 and an exact copy of the source headers. The served `dist` preview was not replaced by this isolated artifact.
- `wrangler --version` reported `4.156.0`. `wrangler deploy --dry-run --outdir /private/tmp/ternloom-workers-dry-run` validated the local configuration and read 39 assets without uploading or deploying; no bindings were present.
- Local Wrangler emulation parsed two valid header rules. HTTP checks against loopback tested both default preview output and the isolated release artifact. Homepage/contact returned 200; `/about?check=1` redirected with 307 to `/about/?check=1`; a deliberately missing path returned the designed 404. Canonical-host requests received baseline headers and no global `X-Robots-Tag`; simulated base and version Workers hostnames received `X-Robots-Tag: noindex`. Preview HTML stayed noindex; release content stayed indexable with production Tally context and its 404 stayed noindex. These were local Host-header checks, not public-domain requests.

The sandbox initially prevented binding/connecting to loopback. The same local checks succeeded with the permitted loopback execution override. Temporary emulators were stopped; the existing Astro browser preview remains available. No CAPTCHA was completed and no email was sent.

## Limits and handoff

The [updated launch guide](../cloudflare-launch-guide.md) replaces the earlier Pages instructions. Hosted automatic version detection, Git-connected authentication/builds, actual domain certificates/DNS/redirects, edge bot controls, indexing and mailbox delivery still require separately authorized launch work. After a later authorized domain cutover, reconcile the actual custom-domain routes into Wrangler configuration before another production deploy.

The additional dependency installation reported no known npm audit vulnerabilities at installation time; this is not a security audit. npm left optional package install scripts unapproved, and local packaging/emulation nevertheless succeeded.

## Final verification and review

`npm ci --offline --no-audit` succeeded using the updated lockfile. After that clean cached installation, all 21 tests, 47-file diagnostics and a fresh Wrangler dry run passed. Documentation checks passed for 25 local links, balanced code fences and shell syntax; whitespace checks passed. No optional install scripts were approved. Existing locked package versions were unchanged; only Wrangler and its additional dependencies were introduced.

A fresh independent GPT Astra reviewer inspected the complete change, checked the current official Workers build/tooling/header/domain documentation and independently passed the four command-contract tests. It reported no actionable Critical/Important findings. Hosted builds and actual domain/DNS/certificate/edge behavior remain unverified, as the guide states. No source approval flags or website content were changed.
