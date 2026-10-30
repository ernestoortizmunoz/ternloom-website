# Local Tally contact form

The owner reopened contact-form work for local testing, created the discussed single-page Tally form and supplied the replacement Ternloom account URL `https://tally.so/r/dbEbrd`. This implements that agreed form and the existing Working Weave design; it does not authorize a website launch or a submission by the agent.

## Approach and boundaries

Tally with its native reCAPTCHA was selected through the owner's form setup. A custom form with Cloudflare Turnstile would require a server-side submission handler; hidden fields alone do not verify respondents. The selected embed preserves the static Astro architecture without a new runtime or dependency.

Only default local preview builds show this test integration. Explicit release builds omit it and retain the existing confirmed-email path. The real contact email stays null and all release readiness flags stay false. Tally account settings, CAPTCHA enforcement, notification destination and email receipt are not verified by a local build.

The owner owns the hosted form's labels, validation, CAPTCHA and success message. No form submission, CAPTCHA completion, external message, deployment or provider setting change is part of this implementation. The old WDC-account form `X5L5GP` is superseded and must not be embedded.

## Contact page checklist

Reference: existing `src/pages/contact.astro`, `ContactDetails.astro`, `SectionHeading.astro`, `SiteLayout.astro` and the Working Weave theme. The contact page is the only member of this page kind; no inferred cross-page convention is claimed.

1. Keep the shared shell, breadcrumb, one H1 and factual introduction.
2. In the introduction's existing contact-information position, show an honest local test notice instead of saying no form exists; retain the original component when no test form is configured or during release.
3. Add one full-width form section directly after the introduction, before the existing preparation prompts. Use `SectionHeading` with an H2 and existing section/container styles.
4. Show “Test form — please use dummy details only.” and explain that submissions go to Tally and may trigger the account's configured notifications.
5. Embed only form `dbEbrd`, with left alignment, hidden provider title, transparent background and dynamic height; pass `source=ternloom-website` and `environment=local-test`.
6. Provide a titled iframe with a real `src`, reserved initial height and no disabled scrolling; a blocked sizing script must not make fields unreachable. The provider's official embed script is the only executable script allowed, on this contact route only.
7. Keep a visible direct-form link usable when the embed or JavaScript is unavailable, with the same non-personal test context parameters.
8. Use the existing theme's spacing, text roles, colours, focus and responsive container. Reserve a named initial iframe-height token if needed. Internal Tally styles remain provider-managed.
9. Keep “What to include”, the three preparation prompts, service links and next-step explanation; avoid implying the test sends a real project enquiry or confirms a response time.
10. Keep all default output noindex, the mailbox unconfirmed and every existing publication gate intact. Test form, fallback and provider script must be absent in explicit release output.

## Proof

Run Astro diagnostics, existing unit/output checks, contact states and synthetic release fixture. Extend rendered-output checks to pin the new form ID, context, script isolation and explicit-release exclusion. Inspect the local iframe on desktop and narrow mobile widths without entering or submitting data. Record provider/network limitations rather than claiming submission delivery works.
