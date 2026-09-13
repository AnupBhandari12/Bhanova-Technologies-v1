# SmartLink guide — package dekhi demo samma

Yo guide le /smartlink product page ra teska business demos kun file bata bancha bhanera bujhaucha. Sabai JavaScript/JSX ho; database chalaunu pardaina.

## 1. Exact file map

| Change you want                                                   | File                                                             |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| Package names, prices, features and comparison                    | `data/smartlink-packages.js`                                     |
| Product page package cards and comparison layout                  | `components/products/SmartLinkPackages.jsx`                      |
| Card colours, spacing and mobile layout                           | `components/products/SmartLinkPackages.module.css`               |
| Decorative phone previews in cards                                | `components/smartlink/PackagePreview.jsx` and its CSS Module     |
| Business name, headline, links and theme                          | `data/smartlink.js`                                              |
| Burger menu, hotel rooms, gallery captions and sample metrics     | `data/smartlink-demo-content.js`                                 |
| Shared café menu                                                  | `cafeMenu` in `data/smartlink.js`                                |
| Main merchant profile layout                                      | `components/smartlink/SmartLinkProfile.jsx`                      |
| Profile colours and responsive layout                             | `components/smartlink/SmartLinkProfile.module.css`               |
| Menu/room teaser cards                                            | `components/smartlink/ProfileExperiences.jsx`                    |
| Menu, rooms and gallery dialogs                                   | `components/smartlink/ProfileActionDialog.jsx`                   |
| Hotel booking enquiry preview                                     | `components/smartlink/BookingPreview.jsx`                        |
| Gallery, teaser and booking styles                                | `components/smartlink/ProfileExperiences.module.css`             |
| Package switcher and Bhanova enquiry outside the merchant profile | `components/smartlink/DemoControls.jsx`                          |
| Share, clipboard, contact download and dialog state               | `components/smartlink/useProfileActions.js`                      |
| Basic and Pro dashboards                                          | `components/smartlink/SmartLinkAnalytics.jsx` and its CSS Module |
| Package WhatsApp message and sample CSV                           | `lib/smartlink.js`                                               |
| Verified Bhanova and sample demo contact formats                  | `lib/vcard.js`                                                   |
| Browser file download helper                                      | `lib/download.js`                                                |

## 2. How a click reaches the page

1. The homepage introduces SmartLink briefly and links to `/smartlink`. The product route `app/smartlink/page.jsx` includes its hero, `SmartLinkPackages`, setup steps and product FAQs.
2. Each product-page card reads a plan from `data/smartlink-packages.js`.
3. Its demo button links to `/smartlink/qr`, `/smartlink/tap` or `/smartlink/pro`.
4. `app/smartlink/[slug]/page.jsx` finds that profile in `data/smartlink.js`.
5. `SmartLinkProfile` renders the corresponding profile and its interactions.
6. The analytics route accepts only `tap` and `pro`; other combinations return HTTP 404.

Product hero and setup sections are in `components/products/`. Product FAQs are `SMARTLINK_FAQS` in `data/faqs.js`. Demo and dashboard comparison links return to `/smartlink#smartlink-packages`.

At `/smartlink/pro/analytics`, the plan is Pro, so link insights and the CSV export are visible. At the Tap route, the same component shows only basic profile-visit information. Data comes from fixed demo fixtures.

## 3. First easy edit

Open `data/smartlink.js`, find `qr`, and change its `description`. Save the file while `npm run dev` is running. The café introduction updates.

Package price change garna `data/smartlink-packages.js` ko numeric `price` edit garnus. Cards, demo switcher and enquiry messages use the same value. The test records the approved launch prices; if you intentionally change prices, update that expectation too.

The launch prices are QR **1,199**, Tap **1,999** and Pro **2,999** in NPR. Taxes, fulfilment, renewal and update-service duration are not inferred from these prices.

## 4. Demo links versus real links

An example action opens an explanatory dialog:

```js
{
  label: "Follow on Instagram",
  caption: "Fresh updates & everyday inspiration",
  icon: "Camera",
  action: "sample",
}
```

For a verified business account, replace the action with that business's approved `href`. `ProfileLink.jsx` renders HTTPS links with a new tab; local links remain in this website. Never invent contact details.

Shared sample social links and contact actions are intentionally reused across fictional profiles. For a real merchant, create a separate profile object with its own verified details. Do not edit shared demo arrays if the change is only for one merchant.

**Contact exports:** Bhanova uses its real public details from `config/site.js`. Demo exports intentionally contain only a demo name and profile URL. Before launching another real merchant, add a merchant-specific contact export; changing `isDemo` alone does not set up a new real contact.

## 5. Analytics and bookings

- `analyticsPeriods` contains fixed values, not tracked activity.
- Today and This month are sample periods; they do not represent the current real date.
- Pro CSV files are labelled SAMPLE DATA and reflect the selected period.
- A link click is not a completed sale, posted review or confirmed booking.
- QR and NFC can open the same URL. This preview cannot tell which physical method was used.
- Booking preview collects a room preference and length of stay, then shows an on-screen summary. No personal details, reservation, availability check or message sending occurs.
- Demo merchant social/contact buttons explain their destination instead of directing visitors to an unrelated real business.

For a live reporting product you still need event collection, persistent storage, merchant ownership, authentication/authorization and reporting logic. The owner-preview routes in this ZIP are deliberately public examples, not account pages.

## 6. What a customer launch involves

Confirm package scope and fulfilment terms. Gather the merchant's approved name, branding, social URLs, WhatsApp number, location/review URL and menu/room content. Implement and verify their real contact, booking and analytics requirements as agreed.

Keep the public profile URL stable. Generate the real QR for that URL and program the NFC tag for Tap/Pro stands. Test scan/tap on the physical stand before handing it over. A phone's NFC capability and settings affect tap support.

Link updates in this source are made by editing data and redeploying. There is no customer self-service editor. Define how long unlimited managed updates, hosting and support apply before selling the service.

Custom domains, additional languages and removing demo-showcase controls require customer-specific configuration. For the Pro example, the hotel identity is inside the guest profile; Bhanova's sales/demo controls are outside it.

## 7. Before pushing your changes

```powershell
npm run format
npm test
npm run build
```

Check all three profile routes and both dashboards on desktop and a phone-width browser. Try a menu, the hotel gallery, booking preview, contact download, sharing and a package enquiry. Only then commit and push using the deployment guide.
