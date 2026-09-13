# Release verification

Release **1.3.0** · Checked **13 September 2026**.

## Build and dependencies

| Check                | Result                                                                    |
| -------------------- | ------------------------------------------------------------------------- |
| `npm test`           | 9 helper/data tests passed                                                |
| `npm run build`      | Successful production build; 24 generated pages including framework pages |
| Public routes        | All 21 intended page URLs returned HTTP 200                               |
| Dependency audit     | 0 reported vulnerabilities at check time                                  |
| Browser interactions | 17 verification groups passed                                             |
| Responsive layouts   | 60 page/viewport combinations passed with no horizontal document overflow |

The audit is a point-in-time dependency check. Dependencies were not upgraded for this release. Next.js remains pinned to **15.5.25** with the existing **PostCSS 8.5.28** and **Sharp 0.35.4** overrides. Keep the lockfile and overrides together.

## Company homepage

- The homepage leads with Website Development, Custom Software and AI & Automation.
- Hero preview buttons change the selected concept and its working example link.
- Each service dialog contains four local UI examples. Escape closes it and restores focus.
- Service enquiries include the selected service in the prepared WhatsApp message.
- The portfolio's three local screenshots load and link to the corresponding bundled examples. PadhAI and the interface previews are labelled concepts.
- Company story/trust content is consolidated in Why Bhanova. Contact details and the enquiry form share one section.
- Company FAQs open and close using the keyboard.
- Mobile navigation opens, closes with Escape and follows a section link.
- Enquiry validation rejects empty fields and whitespace-only project details. Nepali text and punctuation survive in the WhatsApp message, with a manual link if the popup is blocked.
- The mobile WhatsApp shortcut is hidden at the contact section, during form entry, inside service dialogs and on desktop.

## SmartLink and existing routes

- `/smartlink` is a standalone product page; it no longer redirects to a homepage section.
- The homepage has a compact product introduction, without the full package table.
- QR, Tap and Pro prices remain **NPR 1,199 / 1,999 / 2,999**. Product cards link to the correct local demo and package-specific enquiry.
- Merchant and analytics comparison links return to `/smartlink#smartlink-packages`.
- All twelve service concepts, five SmartLink profiles and two analytics previews return HTTP 200.
- Seven nonexistent/unsupported paths return the branded HTTP 404, including prototype-key slugs and unsupported QR analytics.
- Previous `/bhanova` and `/bhanova.html` paths redirect to the local Bhanova profile.
- Café and burger sample menus, hotel rooms, gallery and booking enquiry preview work.
- A sample booking enquiry reflects the chosen room and length of stay without booking a room or sending a message.
- Bhanova's contact download includes its real public phone, email and the current website origin.
- All three merchant demo contact downloads are labelled Demo and contain no real merchant or Bhanova phone/email.
- Sharing supports native sharing, clipboard copying, manual copying and cancelled sharing.
- Tap analytics shows basic sample activity. Pro adds link insights, period selection and a CSV matching the selected sample data.
- Analytics pages include noindex metadata and explicit sample-data notices.

## Visual checks

Production pages were checked in Chromium at **320, 390, 768, 1024 and 1440 px**: homepage, product page, five profiles, three representative service concepts and both dashboards.

The 320px product heading was adjusted after a layout check found overflow; the final run passed all 60 combinations. Desktop/mobile screenshots, service cards, portfolio screenshots, the contact layout and product page were inspected. No browser JavaScript errors or broken images appeared in the checked flows.

External sending was intercepted during verification. No WhatsApp message, real reservation or purchase was made.

## Reproduce the checks

```powershell
npm ci
npm test
npm run format:check
npm run build
npm start
```

Follow the route and interaction checklist in [DEPLOYMENT.md](DEPLOYMENT.md). The source includes the nine helper tests; the release browser QA runtime is not bundled as a project dependency.

## Scope and limits

Checks ran on Linux with Node.js **24.19.0**. This release was not run directly on the user's Windows computer or deployed to their GitHub/Vercel account during packaging. Device-specific sharing, contact import and physical NFC behaviour need checks on the relevant device.

There is no live analytics backend, authenticated owner account, self-service editor, payment collection, real reservation system or NFC provisioning. See [SMARTLINK-GUIDE.md](SMARTLINK-GUIDE.md) for adapting the demos to a real customer.

The ZIP contains source, lockfile, documentation, tests and local assets. It excludes dependencies, build output, repository history, replaced legacy sections and actual personal environment files.
