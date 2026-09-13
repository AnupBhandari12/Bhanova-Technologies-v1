# Editing guide — kun section kun file?

Yo project ma route, content ra design chhuttai rakheko cha. Homepage le IT company ko tin mukhya service dekhaucha. SmartLink ko full product page `/smartlink` ma cha.

Paths below are relative to the **BHANOVA** folder you open in VS Code.

## 1. Homepage kasari bancha?

Browser ma `/` kholda `app/page.jsx` chalcha. Tyo file le sections lai yo order ma jodcha:

1. Header
2. Hero and interactive service preview
3. Services and example dialogs
4. Portfolio / Work
5. Why Bhanova — company story and working commitments
6. Process
7. Compact SmartLink introduction
8. Company FAQs
9. Combined contact and project enquiry
10. Footer and mobile WhatsApp shortcut

Order change garna `app/page.jsx` ma components ko order milaucha. Text edit garna tala ko matching component/data file kholnus.

The former ticker, separate Trust/About blocks and duplicate Contact block have been removed. Their unused components and CSS are also removed so there is one clear place to make each change.

## 2. Homepage section map

| Visible part                                   | Component                                 | Styles                                |
| ---------------------------------------------- | ----------------------------------------- | ------------------------------------- |
| Logo, navigation, mobile menu                  | `components/layout/Header.jsx`            | `styles/home/header.css`              |
| Main headline and CTAs                         | `components/home/Hero.jsx`                | `components/home/Hero.module.css`     |
| Websites / Software / AI preview buttons       | `components/previews/ServiceShowcase.jsx` | Matching `ServiceShowcase.module.css` |
| Services section                               | `components/home/Services.jsx`            | `styles/home/services.css`            |
| Individual service card                        | `components/services/ServiceCard.jsx`     | `styles/home/services.css`            |
| Four examples in a service dialog              | `components/services/ServiceExamples.jsx` | `styles/home/services.css`            |
| PadhAI concept and three portfolio cards       | `components/home/Portfolio.jsx`           | Matching `Portfolio.module.css`       |
| Company story and three commitments            | `components/home/WhyBhanova.jsx`          | Matching `WhyBhanova.module.css`      |
| Four-step process                              | `components/home/Process.jsx`             | Matching `Process.module.css`         |
| Compact SmartLink introduction                 | `components/home/SmartLink.jsx`           | Matching `SmartLink.module.css`       |
| FAQs                                           | `components/shared/FaqSection.jsx`        | Matching `FaqSection.module.css`      |
| Contact details, social links and enquiry form | `components/home/Enquiry.jsx`             | Matching `Enquiry.module.css`         |
| Footer                                         | `components/layout/Footer.jsx`            | Matching `Footer.module.css`          |
| Mobile WhatsApp shortcut                       | `components/layout/FloatingContact.jsx`   | Matching `FloatingContact.module.css` |

“Matching” means the CSS file is beside its JSX component. For example, `components/home/Portfolio.module.css` styles `components/home/Portfolio.jsx`.

Shared buttons, colours and section headings: `styles/home/shared.css`. Navigation: `styles/home/header.css`. Global reset, keyboard focus and reduced motion: `styles/globals.css`. The small `styles/home/index.css` imports only shared, header and service styles.

## 3. Content and settings

| What to change                                                         | File                             |
| ---------------------------------------------------------------------- | -------------------------------- |
| Public company name, description, phone, email, social URLs, nav links | `config/site.js`                 |
| Three service titles, prices, features and twelve example links        | `data/services.js`               |
| Hero preview titles, descriptions and destination links                | `data/showcase.js`               |
| Portfolio card text, screenshot paths and demo links                   | `data/portfolio.js`              |
| Four process steps                                                     | `data/company.js`                |
| Company and SmartLink questions/answers                                | `data/faqs.js`                   |
| Service demo headings and sample data                                  | `data/examples.js`               |
| SmartLink package names, numeric prices and comparison                 | `data/smartlink-packages.js`     |
| SmartLink business profiles and links                                  | `data/smartlink.js`              |
| Burger menu, hotel rooms, gallery and sample metrics                   | `data/smartlink-demo-content.js` |
| Narrative paragraphs                                                   | The relevant JSX section         |
| Default browser title and metadata                                     | `app/layout.jsx`                 |

Phone change garna `config/site.js` ko `businessNumber` change garnus. Call, WhatsApp and Bhanova contact download use it. Do not place passwords or API keys in public configuration.

## 4. First small change

Open `data/services.js` and find:

```js
title: "Website Development",
price: "Starting from NPR 20,000",
```

Price ko text edit garera save garnus. `npm run dev` chaldai cha bhane browser ko Services section ma change dekhcha. Quotation marks ra comma najharnus. This is a starting price; confirm scope separately.

Hero ko main paragraph change garna `components/home/Hero.jsx` kholnus. Preview box ko caption change garna `data/showcase.js` edit garnus. Hero and preview ko content separate cha.

## 5. Services and portfolio routes

`app/examples/[slug]/page.jsx` reads the matching item from `data/examples.js`, then chooses its layout:

| Data `kind` | Component                              |
| ----------- | -------------------------------------- |
| `website`   | `components/examples/WebsiteDemo.jsx`  |
| `software`  | `components/examples/SoftwareDemo.jsx` |
| `ai`        | `components/examples/AiDemo.jsx`       |

These layouts share `styles/examples.css`. Change one example's text in data. Change the component to adjust all examples of that kind.

For a new example, add a unique slug in `data/examples.js` and a matching entry in `data/services.js`. Helper tests check those links; update the expected count when intentionally adding/removing examples.

Portfolio screenshots are local JPEG files in `public/previews/`. They were captured from the three bundled example pages. If you redesign those pages, replace the screenshots too. `data/portfolio.js` maps each image to its working demo link. The PadhAI workspace is an illustrative concept built inside `Portfolio.jsx`, not a screenshot of a verified live product.

## 6. SmartLink lives on its own product page

`components/home/SmartLink.jsx` is only the compact homepage introduction. Its button opens `/smartlink`.

| Product page part                      | File                                        |
| -------------------------------------- | ------------------------------------------- |
| Assemble product sections and metadata | `app/smartlink/page.jsx`                    |
| Product hero                           | `components/products/SmartLinkHero.jsx`     |
| QR stand illustration                  | `components/previews/SmartLinkPreview.jsx`  |
| Packages and comparison                | `components/products/SmartLinkPackages.jsx` |
| Setup/order steps                      | `components/products/SmartLinkSteps.jsx`    |
| Product FAQs                           | `SMARTLINK_FAQS` in `data/faqs.js`          |

Each product component has a matching CSS Module beside it. Merchant profiles and dashboards are mapped in [SMARTLINK-GUIDE.md](SMARTLINK-GUIDE.md).

## 7. Interactions and message flow

A component needs `"use client"` when it uses browser state or actions. Examples: navigation menu, hero preview selection, service dialog, enquiry form, mobile contact visibility and profile sharing. Static sections do not need it.

| Action                               | Logic                                           |
| ------------------------------------ | ----------------------------------------------- |
| Service-specific enquiry             | `createServiceEnquiryUrl` in `lib/whatsapp.js`  |
| Form fields to a readable message    | `createEnquiryMessage` in `lib/whatsapp.js`     |
| Form validation and opening WhatsApp | `components/home/Enquiry.jsx`                   |
| Package enquiry message              | `createPackageEnquiryUrl` in `lib/smartlink.js` |
| vCard contact format                 | `lib/vcard.js`                                  |
| Save a browser-generated file        | `lib/download.js`                               |
| Canonical domain selection           | `lib/metadata.js`                               |

The contact form opens a prepared WhatsApp message. It does not send automatically or store form data. If a popup is blocked, an explicit link opens the prepared message.

The mobile contact shortcut hides when the contact section is visible, a form control has focus or a dialog is open. It is hidden on desktop.

## 8. Images, styling and release checks

- Logo: `public/bhanova-logo.png`; square mark: `public/bhanova-mark.png`.
- Portfolio screenshots: `public/previews/`.
- Café image: `public/smartlink/cafe-hero.png`.
- Public images use URLs without the `public` prefix: `src="/previews/school-website.jpg"`.
- Keep useful alt text and reduced-motion support.
- Data changes require a new build/deployment to update the live website.

After editing, check desktop and phone widths:

```powershell
npm run format
npm test
npm run build
```

Then follow [DEPLOYMENT.md](DEPLOYMENT.md). Keep your previous folder until the new release is working.
