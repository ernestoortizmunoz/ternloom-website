# Simplified Workers Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prepare Workers Static Assets locally with no manually entered build variables and explicit preview/release commands.

**Architecture:** Retain static Astro and its publication guard. A Node build wrapper owns the child process's release flag; Wrangler serves the generated directory without Worker code.

**Tech Stack:** Existing pinned Node/npm/Astro, plain CSS, pinned Wrangler.

**Spec:** [Accepted setup design](../specs/2026-10-30-workers-setup-design.md).

## Global Constraints

- Node `24.22.2`, npm `11.19.1`; preserve content, approvals and public copy.
- Local work and scoped commits on `main`; no worktrees, push, deployment or provider/DNS changes.
- No manually entered dashboard build variables; no runtime Worker script or credentials.

## Review Focus

- An inherited release flag must not turn the default build into a release.
- Production must retain every existing approval gate and production form context.
- Failed builds must prevent a chained upload/deploy; custom output arguments must reach Astro.
- Preview/development hosts must be noindex without a global canonical-domain noindex header.
- Missing routes must return the custom 404, not a successful SPA fallback.

### Task 1: Build commands and Workers delivery preparation

**Files:** create `scripts/build.mjs`, `tests/build-command.test.mjs`, `wrangler.jsonc`, `public/_headers`; modify `package.json`, `package-lock.json` and `.gitignore` only for Wrangler's local state.

**Interfaces:** `node scripts/build.mjs preview|release [...Astro arguments]`; `npm run build` remains preview, `npm run build:release` selects approved release. Wrangler reads `dist`.

- [x] Add and run failing command-contract tests for mode isolation, forwarded arguments and child failure propagation.
- [x] Implement the wrapper; pin Wrangler; add static asset/404/header configuration.
- [x] Run the contract tests and existing tests. Exercise real isolated release and preview output; validate Wrangler without upload and check routing/headers locally where supported.

### Task 2: Operator handoff and verification

**Files:** update `docs/cloudflare-launch-guide.md`, `docs/project-context.md`, `AGENTS.md`; create `docs/verification/2026-10-30-workers-setup.md`.

**Interfaces:** Cloudflare shared build = `npm run check && npm test`; production deploy = `npm run build:release && npx wrangler deploy`; non-production = `npm run build && npx wrangler versions upload`.

- [x] Replace obsolete Pages/environment-variable instructions with exact Workers settings and distinguish local proof from hosted work.
- [x] Verify documentation links/whitespace and inspect the complete diff; obtain a fresh final review.
- [x] Commit only scoped changes on existing main, preserving the unstaged `.idea` ignore. Record checks and remaining hosted verification.
