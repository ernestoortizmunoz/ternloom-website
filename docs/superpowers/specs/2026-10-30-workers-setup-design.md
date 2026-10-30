# Simplified Workers setup

Date: October 30, 2026. The owner accepted the proposed local switch to Workers Static Assets, repository-controlled tool versions and separate preview/release commands. This records that accepted direction; it does not authorize deployment.

## Intent and constraints

Remove dashboard build-variable setup while retaining the static Astro website, existing approval gates, noindex previews and production Tally context. Use the existing `main` branch; no worktree, push, account changes or DNS operations. Preserve the approved website and unrelated `.gitignore` change.

## Approaches

- Retain Pages with custom dependency installation: workable, but preserves the setup complexity the owner questioned.
- Workers Static Assets with repository pins and explicit build commands: selected. Workers reads `.node-version` and `packageManager`; no runtime Worker script, SSR adapter or manually entered build variables are required.
- Infer publication from the Git branch automatically: unnecessary hidden coupling. Explicit commands make release intent visible and testable.

## Implementation choices

- Keep Node `24.22.2`, npm `11.19.1`, Astro and all content approvals unchanged.
- Add `build:release`; default `build` explicitly selects preview even if an old release environment variable is inherited. A small Node wrapper sets the existing internal release flag for the child Astro process and propagates arguments and failure status.
- Pin Wrangler as a development/deployment tool. Add `wrangler.jsonc` for `dist`, trailing slashes and the real 404. Do not configure an account ID, custom domain or provider credentials.
- Add static baseline headers plus host-scoped noindex for Workers development/version URLs; keep the canonical domain eligible for indexing.
- Workers shared build command performs checks; its production command builds release output before deploying, while its non-production command builds preview output before uploading a version. This prevents the shared stage from accidentally making previews release builds.
- Replace the launch guide's Pages instructions with the Workers settings and preserve its DNS/email, Tally, crawler-choice and post-launch checks.

## Proof

Test command mode isolation, forwarded arguments and child failure propagation. Run existing diagnostics/tests, an isolated approved-source release and a final default preview build. Validate the Wrangler configuration/package locally and exercise local static routing/headers if the sandbox permits. Hosted behavior remains unverified until a separately authorized launch.
