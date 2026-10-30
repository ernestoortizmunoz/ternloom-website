# Local Contact Form Implementation Plan

> **For agentic workers:** Use a fresh page implementer and separate reviewer for this one-page change. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the owner's Ternloom Tally form available for local contact-page testing.

**Architecture:** Keep Astro static and keep release readiness unchanged. One public local-test form configuration feeds a contact-only iframe and official sizing script; a real iframe URL and direct link preserve access when enhancement fails.

**Tech Stack:** Existing Astro, TypeScript and plain CSS; no additional dependencies.

**Spec:** `docs/superpowers/specs/2026-10-30-contact-form-design.md`

## Global constraints

- Local only; no worktrees, branches, push, deployment, provider changes or agent submissions.
- Only `dbEbrd`; preserve null email and false readiness flags.
- All default pages remain noindex. Explicit release excludes this test integration.
- Preserve unrelated `.gitignore` changes. Scoped commits on existing main are authorized.

## Review focus

- Wrong-account endpoint: output checks pin the replacement ID and reject the old one.
- Blocked scripts or third-party iframe: real src, reachable fallback and reserved scrollable iframe.
- Narrow viewport: form must fit the shared container and retain field access.
- Unknown notification settings: test copy must not promise inbox delivery or no email.
- Release leakage: synthetic release checks reject the test ID and embed script.

### Task 1: Integrate the local test contact page

**Files:** modify `src/config/site.ts`, `src/pages/contact.astro`, `src/components/ContactDetails.astro`, `src/styles/theme.css`; add `src/components/ContactForm.astro`. Update `scripts/check-contact.mjs`, `scripts/check-output.mjs`, `scripts/check-contact-states.mjs`, `scripts/check-404-release.mjs`. Update `docs/project-context.md`, `AGENTS.md` and a focused verification record.

**Interfaces:** optional `site.localTestForm: { tallyId: string } | null`; render it only outside explicit release. Keep the existing email contact interface and publication validator unchanged.

- [x] Extend rendered-output and release checks, then run the contact check against the old build to demonstrate the missing embed fails.
- [x] Fresh implementer builds the one contact page from all ten spec checklist lines, using the existing shared components and theme.
- [x] Run diagnostics, unit tests, build, output checks, contact states and synthetic release proof.
- [x] Inspect the real local embed and fallback at desktop/mobile without submitting; request a separate review and fix material findings.
- [x] Record actual verification, mark this plan complete and commit only scoped task files to main.
