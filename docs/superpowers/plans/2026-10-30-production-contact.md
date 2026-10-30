# Production Contact Preparation Implementation Plan

> **For agentic workers:** Use fresh page implementers and an independent reviewer. Keep all work local on existing main; no worktrees or deployment.

**Goal:** Prepare the final contact and factual privacy experience locally using confirmed owner decisions.

**Architecture:** Keep static Astro and Tally, promote the form configuration to a release-gated contact form, and add a static privacy route. Preserve all portfolio gates and default noindex output.

**Tech Stack:** Existing Astro/TypeScript/plain CSS, no new dependencies.

**Spec:** `docs/superpowers/specs/2026-10-30-production-contact-design.md`

## Global constraints

- Confirmed email `info@ternloom.com`, 12-month policy, Tally `dbEbrd`.
- Local preview only. No provider edits/submissions, launch, worktree, branch, push or unrelated `.gitignore` changes.
- Provider-copy and privacy-approval flags remain false; project approvals unchanged.

## Review focus

- Release must reject missing contact/form/retention or either new approval flag.
- Synthetic ready release must include production form context and exclude preview/test copy.
- Provider script/frame appears only on contact; privacy and other routes stay static.
- Privacy must describe actual providers and manual retention without implying instant/automatic deletion.
- Fallback email/direct link and reading width must remain usable on narrow screens.

### Task 1: Shared configuration and output contracts

**Files:** site/publication/seo config; footer; publication/SEO tests; contact/output/release scripts.

**Interfaces:** `site.contactForm: {tallyId:string}|null`; `site.privacy.enquiryRetentionMonths:number|null`; existing readiness plus `contactFormReady:boolean` and `privacyNoticeApproved:boolean`.

- [x] Add release and canonical-inventory expectations; confirm the missing gates/route fail.
- [x] Implement confirmed config, generic release guards, privacy inventory/footer discovery and exact contact-only script exception.

### Task 2: Contact and privacy pages

**Files:** contact page, ContactDetails/ContactForm; new privacy page; operator checklist.

- [x] Fresh contact implementer follows all contact checklist lines using shared components.
- [x] Fresh privacy implementer follows all privacy checklist lines using confirmed config and factual provider sources.
- [x] Write the exact owner-operated Tally copy and manual retention checklist; do not change the hosted form or approve its readiness.

### Task 3: Verification and handoff

- [x] Run diagnostics, tests, nine-page build/output, contact-state and synthetic release checks.
- [x] Inspect desktop/mobile contact and privacy, and obtain independent source/UI review; fix material findings.
- [x] Record actual proof/limits, owner actions and remaining launch gates; commit scoped files on main.
