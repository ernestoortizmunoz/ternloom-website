# Public release: read-only launch checks

Checked October 30, 2026, approximately 22:37 America/Toronto (October 31, 02:37 UTC). After working through the Cloudflare dashboard setup and reporting the redirect complete, the owner had a public release available at `https://ternloom.com`.

The agent made public HTTP GET/HEAD requests only. It did not push, deploy, bind domains, change DNS/provider settings, submit a form, complete CAPTCHA or send a message. The exact deployed commit, account configuration and build logs were not independently inspected.

## Observed public responses

| Request | Result |
| --- | --- |
| `https://www.ternloom.com/contact/?test=1` | 301 to `https://ternloom.com/contact/?test=1` |
| `http://www.ternloom.com/contact/?test=1` | Two redirects, HTTPS www then canonical apex, ending 200 with path/query preserved |
| `http://ternloom.com/contact/?test=1` | One redirect to canonical HTTPS, ending 200 with path/query preserved |
| All eight canonical content routes | 200, correct canonical URL, one H1, no meta/header noindex, no preview/draft/local-test notices |
| `/robots.txt` | 200, general allow policy and the canonical sitemap URL |
| `/sitemap.xml` | 200, exact eight canonical content URLs; no 404 entry |
| `/a-deliberately-missing-page/` | Real 404, designed recovery content and noindex meta |

The eight routes were `/`, the three service routes, `/projects/`, `/about/`, `/contact/` and `/privacy/`, matching the repository's approved inventory. All returned the expected `X-Content-Type-Options`, `Referrer-Policy` and `X-Frame-Options` headers. The homepage also returned the configured browser-feature restrictions. Cloudflare response headers were present.

Contact HTML contains the Ternloom `dbEbrd` iframe, `environment=production` and the public `info@ternloom.com` email link. The iframe itself was not submitted or inspected as a successful provider transaction. The public privacy route is now available for the owner to link from the Tally form.

The HTTP-www chain has two hops rather than one, with HTTPS upgrading before the hostname redirect. It reaches the intended canonical URL without a loop and preserves the query; this is not a broken redirect.

## Owner confirmation after the public checks

After the live-form test and Tally privacy-link instructions, the owner reported “all works as expected.” Record the live contact/privacy workflow as owner-confirmed. This is an owner report, not an independent mailbox, CAPTCHA or provider-settings inspection. The agent did not submit the form or change Tally settings. Continue the approved manual retention procedure.

A subsequent read-only HEAD request to the production Workers hostname returned 200 and `X-Robots-Tag: noindex`. No account subdomain identifier is recorded here. Version/branch URLs were not independently checked publicly.

## Remaining follow-up

- Google Search Console/Bing verification and sitemap submission are not independently confirmed. Crawl permission and public availability do not prove indexing, rankings or AI recommendations.
- Effective robots currently permits all compliant crawlers. Individual AI search/training preferences and any independent edge bot restrictions remain an explicit owner decision; the public robots response alone does not prove real crawler access.
- Actual Worker version/branch URLs, preview builds, account settings, DNS/mail records and certificates for other services were not inspected. Reconcile actual custom-domain bindings into local Wrangler configuration before a later production deployment, following the launch guide. Do not infer those bindings solely from HTTP responses.
- No hosted visual, full accessibility, performance or security audit is claimed. The local website verification remains separately recorded.

These checks establish the listed public responses at the time of observation, not continuous availability or a provider-configuration audit.
