# Ternloom contact form: final editor and retention checklist

Prepared locally October 30, 2026. Form: `https://tally.so/r/dbEbrd`. Public contact/privacy inbox: `info@ternloom.com`, confirmed by the owner. No account settings were changed by the agent.

The owner approved the website privacy-notice wording on October 30 and subsequently confirmed the final Tally copy and successful test, supplying the new completion screen from the local embed. Both privacy and form readiness flags are true. These confirmations do not authorize deployment. The steps below preserve the final configuration and ongoing operating procedure.

## Final Tally editor wording

Keep the existing title and introductory paragraph:

> Tell us about your project
>
> Tell us a little about your business and what you’d like to improve. You don’t need a technical specification.

Remove the provider-managed “Test form — please use dummy details only.” paragraph. Change the button from “Send test enquiry” to:

> Send project enquiry

Keep all six existing questions, required/optional settings, four service choices, project-description guidance, `source` and `environment` hidden fields, and reCAPTCHA immediately before the submit button. The website passes `environment=local-test` for local builds and `environment=production` for a fully approved release. Hidden fields identify context; they are not security controls.

Add a short purpose notice above Submit:

> Ternloom Technologies uses these details to review your enquiry and respond by email. This form is provided by Tally and protected by Google reCAPTCHA.

When the public website/privacy route is actually available, follow that with:

> Read our privacy notice for information about how we handle enquiries.

Link “privacy notice” to `https://ternloom.com/privacy/` only once that route is available. During local preparation, use the local website notice for review rather than publishing a dead production link. The website contact page already links to its local `/privacy/` route.

### Thank You page

Type `/thank` in the editor and select the Thank You page block. Use:

> Thank you for getting in touch
>
> Your project enquiry has been submitted. Ternloom Technologies will use the details you provided to review your enquiry and respond by email.

Keep the built-in completion page; do not configure a redirect to an unhosted website. Do not promise a response time or an automatic respondent email. Custom Thank You content is [available on Free](https://tally.so/help/how-to-create-a-thank-you-page); removing Tally branding is separate.

### Notifications and final verification

Keep Self email notifications enabled for the Ternloom-owned account. Confirm the displayed recipient is `info@ternloom.com`; keep all answers included and the default Tally sender. Do not change the WDC account or its forms. Publishing these edits updates the hosted form even while the website stays local.

The owner should confirm final editor copy, CAPTCHA presence, completion message and inbox receipt using dummy details. An agent does not submit the form or complete CAPTCHA. Only after this confirmation should `readiness.contactFormReady` be set true. Keep it false during preparation. The separate `privacyNoticeApproved` gate requires review of the concrete local privacy notice.

## Retention policy: 12 months

The owner selected deletion of active enquiry copies within 12 months of submission, unless needed for an ongoing project or required records. This is an owner policy, not a claim that 12 months is a universal legal requirement.

Tally Free does not automatically enforce this interval. [Automatic submission retention is a Business feature](https://tally.so/help/submissions-data-retention). The owner needs a manual process:

1. Review retained enquiries at least monthly. Delete records approaching their 12-month deadline early enough to meet it, except records still needed for an ongoing project or required records.
2. Apply the same review to Tally responses, notification emails, attachments and any exported copies. Deleting the Tally response does not delete an inbox or export copy.
3. Record the reason for retaining an exception and review whether it remains needed. Do not assume every enquiry is a required business record.
4. Consider deletion requests received at `info@ternloom.com` separately. Verify the requester as needed and explain information that still needs to be retained.
5. Account for provider trash and backups. Tally documents up to 90 days in Trash before permanent deletion unless manually emptied sooner. The website notice distinguishes active-copy deletion from provider retention cycles. Any permanent purge is an owner-operated action.

No reminder, scheduler, automated deletion, legal review or mailbox retention setting was created by this work. Review the notice again if processing, providers or the retention process changes.
