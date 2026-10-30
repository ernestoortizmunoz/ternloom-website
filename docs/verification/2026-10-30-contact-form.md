# Local contact form verification

Date: October 30, 2026. Scope: the owner's replacement Tally form `dbEbrd`, embedded only in default local contact output. No deployment, account changes or agent submission.

## Commands and output

All commands used Node 24.22.2 through `env PATH=/private/tmp/node-v24.22.2-darwin-arm64/bin:$PATH`.

- The new contact output check first failed against the old built page because its test-form notice/iframe was missing.
- `npm run check`: 43 files, zero errors, warnings or hints.
- `npm test`: all 13 existing tests passed.
- `npm run build`: eight static routes built successfully.
- `npm run check:output`: all eight default routes remain noindex; contact uses only the replacement Ternloom form and official sizing script, includes context and direct fallback, and excludes old WDC endpoints. Other pages retain the no-script/no-iframe contract. Existing canonical, schema, route, image, link and sitemap checks passed.
- `node scripts/check-contact-states.mjs`: existing confirmed/unconfirmed/missing-email states and the added local-test information state passed.
- `node scripts/check-404-release.mjs`: isolated synthetic ready release has the seven canonical sitemap routes and noindex 404, with no test form, test context, iframe or provider sizing script. Real readiness data remains unchanged.

## Browser evidence

- Existing static preview at `http://127.0.0.1:4330/contact/` serves the rebuilt contact page.
- The replacement published form and local iframe visibly show the agreed service choices, test notice, helper copy, required fields, submit wording and reCAPTCHA checkbox. No values were entered and CAPTCHA was not completed.
- Desktop viewport: inner width 1142, document scroll width 1127; the iframe measured 1031 wide and resized to 1141 high.
- Mobile viewport: inner width 375, document scroll width 360; iframe width 312, content/document scroll width 312, no measured field/button/CAPTCHA iframe overflow. The iframe resized to 1288 high. The provider mutates the initial iframe title to the form's meaningful title while initializing its resizer.
- The direct fallback is visible before the iframe and points to the same form with non-personal local-test context.
- A temporary browser viewport override was reset. The additional inspection tab was closed; the existing local website tab was left on the contact form.
- Screenshot: [local contact form preview](/Users/dev-zero/.codex/visualizations/2026/10/30/01a18b06-d02d-78b1-ab76-ae279c2d4c2c/ternloom-local-contact-form.png).

## Independent review and limits

A separate GPT Astra implementer and fresh GPT Astra reviewer handled this one-page change. The reviewer checked all ten source checklist lines and reported no actionable findings. A separate calibration on a temporary copied source tree detected a planted literal text weight outside the existing theme. No worktree was created. Calibration proved that source typography check, not rendered sizing or provider behavior.

At the time of agent verification, actual delivery, the destination mailbox, account notification settings, server-side CAPTCHA rejection, success/error behavior and retention were unverified. Reading the form does not establish these. A browser keyboard locator action timed out, so end-to-end keyboard traversal is not claimed. JavaScript-disabled and blocked-provider scenarios were not simulated: source/output prove a real iframe URL, reserved initial height, default scrolling and static direct fallback, not a provider form that works without JavaScript. Internal Tally styles and generated controls remain provider-managed. Nothing was published or indexed by this work.

## Owner's subsequent test

On October 30, after being asked to submit one dummy enquiry and confirm it reached the Ternloom inbox, the owner reported “all worked as expected” and supplied a screenshot showing Tally's successful completion page. This records owner-reported end-to-end test success. The screenshot directly supports form completion; it is not an independent inbox inspection. The exact recipient address, hidden-field values, error paths and CAPTCHA rejection remain unverified by the agent. Local-only scope, null public email, false readiness flags and release exclusion remain unchanged.
