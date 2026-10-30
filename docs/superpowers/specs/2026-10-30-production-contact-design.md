# Production contact preparation, local only

The owner authorized preparation of the final contact flow after the successful local Tally test. They confirmed public contact/privacy email `info@ternloom.com` and deletion of enquiries after 12 months unless needed for an ongoing project or required records. No website deployment, provider mutation or agent submission is authorized by this local implementation.

## Approach

Keep the selected Tally form `dbEbrd`, native reCAPTCHA and existing static Astro architecture. Add no backend, account, dependency or replacement provider. A custom form with Turnstile would add a server-side handler without a demonstrated need; email alone would discard the tested form. Preserve email as a static fallback.

The final contact and privacy experience is prepared locally, with default noindex output. Replace the former preview-only form configuration with `site.contactForm`. Use `source=ternloom-website` and `environment=local-test` in local output, and `environment=production` only in a fully approved explicit release. One local-only notice identifies the preview; public copy contains no test instructions in release mode. The owner must separately update and publish their Tally-managed copy; that work is supplied as an editor checklist, not falsely marked done by website code.

## Confirmed settings and pending approvals

- `site.contact.email = info@ternloom.com`; `readiness.contactConfirmed = true` follows the explicit owner confirmation and reported inbox test.
- `site.contactForm.tallyId = dbEbrd` and `site.privacy.enquiryRetentionMonths = 12`.
- `readiness.privacyNoticeApproved` became true after the owner's explicit October 30 wording approval. `readiness.contactFormReady` became true after the owner confirmed final provider copy and the successful test with a completion screenshot. Existing project readiness/asset approvals remain false.
- Release requires a configured form, positive integer retention period, public email, all readiness flags and the existing per-project approvals. Synthetic fixtures may approve copies only.
- Retention describes an owner policy, not automatic deletion. Free Tally requires manual deletion; email and exported copies need matching handling. Tally trash/backups may persist after active deletion. The operator checklist must explain this without promising instant erasure.

## Contact page checklist

Reference: existing contact page, shared SiteLayout/SectionHeading/ContactDetails/ContactForm and theme. Keep the accepted design and preparation/service sections.

1. Keep the shared shell, breadcrumb and one H1. Following owner feedback about excessive scrolling, the contact introduction is compact rather than a marketing hero: “Discuss your project” and the email alternative. Tally already supplies the explanatory introduction, so do not repeat it outside the form.
2. Put the confirmed, selectable `mailto:info@ternloom.com` fallback in the compact introduction. Following the owner's subsequent request, restore the existing green ContactDetails panel below that email on desktop, using the component's existing copy and theme. Its second email link is intentional; the introductory link remains the quick alternative.
3. Desktop: compact introduction and green panel in the left column, form in the right column aligned with the introduction. Mobile: brief introduction, then form, then green panel; the card must not push the first field down again. Keep an accessible H2/region name “Tell us about your project” without a second visible introductory heading. Preparation/service sections stay below.
4. Show one local-only preview notice outside the provider frame; do not claim emails are disabled. Release must omit this notice and local-test context.
5. Use the same titled, scrollable iframe and official sizing script only on this route. Retain existing dynamic height/transparent/left/hidden-title options and theme height token.
6. Keep a short purpose/privacy line before the iframe and the visible direct-form fallback after it. Avoid long preambles that delay the first field; the introductory email fallback remains accessible before the iframe. No promised reply time, automatic confirmation email or guaranteed delivery.
7. “What happens next” starts “An initial conversation”; preserve scope-before-project wording.
8. Use existing theme values, semantic headings, focus and responsive layout, including the section text size for the compact H1. Provider validation, success page and CAPTCHA remain Tally-managed. Measure the loaded first-field position at desktop and 375px mobile; it should be visible in the initial 812px mobile viewport when the current provider text fits, with no overflow.

## Privacy page checklist

Reference: existing About page's shared shell, breadcrumb, section structure and readable text width. New route `/privacy/`; a footer link makes it discoverable across pages.

1. Shared SiteLayout, one H1 “Privacy notice”, breadcrumb and readable introduction identifying Ternloom Technologies; use the same content theme.
2. Dated notice, explicitly marked local draft while notice approval is false; default remains noindex. No compliance certification or claim that a legal review occurred.
3. Describe actual fields: name, email, optional business/website, service choice and project message. Explain context fields for source/environment and provider connection/security data without invented tracking identifiers.
4. Explain use to respond, assess/discuss the project and maintain relevant records; no newsletter/advertising consent is implied.
5. Explain Tally storage and email notifications, Google reCAPTCHA, potential processing outside Canada, and link provider privacy documentation. Do not promise Canadian-only residency or describe future hosting as implemented.
6. State the 12-month policy for active enquiry copies, exceptions for ongoing projects/required records and that provider trash/backups have their own deletion cycles.
7. Provide the confirmed email for access, correction, deletion and privacy questions; describe requests without unconditional legal rights, instant deletion or response-time promises.
8. No first-party analytics/advertising is added. Explain embedded services can process device/connection data and use cookies; link Google's privacy and terms. Static email fallback is available.
9. Use shared theme spacing/type/colours, visible focus, semantic H2s and responsive reading width. No new visual system.

## Final Tally copy, prepared for the owner

Keep title/introduction, fields and CAPTCHA. Remove the dummy-data paragraph. Change button to “Send project enquiry”. Add a `/thank` Thank You page: heading “Thank you for getting in touch”; body “Your project enquiry has been submitted. Ternloom Technologies will use the details you provided to review your enquiry and respond by email.” No response-time promise. Include privacy-purpose wording and the public privacy URL when that page is actually available; do not add a dead production link during local-only testing.

## Sources and proof

- [Tally thank-you pages](https://tally.so/help/how-to-create-a-thank-you-page): custom pages are free.
- [Tally data/processing](https://tally.so/help/gdpr) and [retention](https://tally.so/help/submissions-data-retention): creator controls response retention; automatic retention is Business; trash persists up to 90 days unless emptied earlier.
- [Google reCAPTCHA FAQ](https://developers.google.com/recaptcha/docs/faq): security cookie/data processing.
- [OPC purpose/retention guidance](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/principles/p_use/): keep information only as needed for identified purposes. No particular 12-month legal requirement is asserted; that interval is the owner's choice.

Run diagnostics, focused release-unit tests, build, all output checks and an isolated ready release. Verify nine outputs, privacy discovery, correct confirmed email, contact-only script/frame, preview/release context separation and unchanged portfolio gates. Inspect contact/privacy at desktop/mobile without submission. Record browser/provider limits.
