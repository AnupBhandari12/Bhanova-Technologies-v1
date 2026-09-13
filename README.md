# Bhanova Technologies

The Bhanova company website, built with Next.js, React and JavaScript.

**Release 1.3.0** keeps the company focused on **Website Development, Custom Software and AI & Automation**. SmartLink has a compact introduction on the homepage and its own product page at `/smartlink`.

## Open in VS Code

Extract the ZIP into a fresh folder. Open the **BHANOVA** folder containing `package.json` in VS Code. If you already have an older project, keep it as a backup first; see [the Windows upgrade guide](docs/DEPLOYMENT.md).

```powershell
cd D:\BHANOVA
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Stop the server with **Ctrl+C**. Use Node.js 22.13+ or 24 and npm.

**Why `npm ci`?** It installs the exact dependency versions in `package-lock.json`, recreating only this project's `node_modules`. It does not delete your source. Run it after extracting the ZIP. For everyday work after installation, use `npm run dev`.

VS Code Live Server cannot run this project. There is no custom launcher or extra framework wrapper.

## What is included

- Company homepage with an interactive three-service preview, detailed services and twelve local UI examples.
- Portfolio with a labelled PadhAI concept and screenshots linked to the bundled website, software and AI concepts.
- Combined Why Bhanova section, four-step process, company FAQs and one contact/enquiry section.
- Service-specific WhatsApp enquiries, public email/social links and a mobile contact shortcut.
- Dedicated SmartLink page with QR, Tap and Pro packages, comparison, ordering steps and FAQs.
- Three distinct merchant demos, two sample analytics dashboards and Bhanova's real contact profile.

## Find your way around the code

| Folder                  | Responsibility                                                 |
| ----------------------- | -------------------------------------------------------------- |
| `app/`                  | Routes, page assembly and metadata                             |
| `components/home/`      | Company homepage sections                                      |
| `components/products/`  | SmartLink product page sections and package cards              |
| `components/layout/`    | Header, footer and mobile WhatsApp shortcut                    |
| `components/services/`  | Service cards and example-selection dialogs                    |
| `components/examples/`  | Website, software and AI concept layouts                       |
| `components/previews/`  | Interactive service preview and stand illustration             |
| `components/smartlink/` | Merchant profiles, sample dashboards and dialogs               |
| `components/shared/`    | Reusable logo, icons, headings and FAQ                         |
| `components/ui/`        | Accessible Radix dialog wrapper                                |
| `config/`               | Public company contact details, socials and navigation         |
| `data/`                 | Services, portfolio, FAQs, packages and sample content         |
| `lib/`                  | WhatsApp, contact, download and metadata helpers               |
| `styles/`               | Global reset, shared company styles and service concept styles |
| `public/`               | Logos, local images and portfolio screenshots                  |
| `tests/`                | Helper and data consistency tests                              |

Section-specific styles sit beside their component as `Name.module.css`. Shared buttons and colours are in `styles/home/shared.css`.

**Start with [EDITING-GUIDE.md](docs/EDITING-GUIDE.md)** for “kun section kun file ma cha.” It maps each visible section to its component, data and styles.

## Page routes

| URL                                                    | Purpose                                             | Route file                                |
| ------------------------------------------------------ | --------------------------------------------------- | ----------------------------------------- |
| `/`                                                    | Main software/IT company website                    | `app/page.jsx`                            |
| `/examples/school-consultancy` + eleven other examples | Service UI concepts                                 | `app/examples/[slug]/page.jsx`            |
| `/smartlink`                                           | Product introduction, packages, comparison and FAQs | `app/smartlink/page.jsx`                  |
| `/smartlink/qr`                                        | Namaste Café — QR demo                              | `app/smartlink/[slug]/page.jsx`           |
| `/smartlink/tap`                                       | The Burger House — Tap demo                         | `app/smartlink/[slug]/page.jsx`           |
| `/smartlink/pro`                                       | Himalayan Hotel — Pro demo                          | `app/smartlink/[slug]/page.jsx`           |
| `/smartlink/tap/analytics`                             | Basic sample analytics                              | `app/smartlink/[slug]/analytics/page.jsx` |
| `/smartlink/pro/analytics`                             | Advanced sample analytics and CSV                   | `app/smartlink/[slug]/analytics/page.jsx` |
| `/smartlink/bhanova`                                   | Bhanova's working public contact profile            | `app/smartlink/[slug]/page.jsx`           |
| `/smartlink/cafe`                                      | Previous café example, preserved                    | `app/smartlink/[slug]/page.jsx`           |
| Unknown path                                           | Branded HTTP 404                                    | `app/not-found.jsx`                       |

`[slug]` is a Next.js route parameter. At `/smartlink/pro`, its value is `pro`; do not rename that folder. Local links and images follow your Vercel or future custom domain.

## SmartLink packages

| Package     |     Price | Demo                                                              |
| ----------- | --------: | ----------------------------------------------------------------- |
| Bhanova QR  | NPR 1,199 | Café profile, sample menu and contact download                    |
| Bhanova Tap | NPR 1,999 | Restaurant profile, burger menu and basic analytics               |
| Bhanova Pro | NPR 2,999 | Hotel profile, rooms, gallery, booking enquiry and sample reports |

Names, prices and comparison features share `data/smartlink-packages.js`. Read [SMARTLINK-GUIDE.md](docs/SMARTLINK-GUIDE.md) before adapting a demo for a customer.

## Working features and demo boundaries

The company contact links work with Bhanova's public details. The enquiry form prepares an encoded WhatsApp message for the visitor to review and send. It does not store enquiries in a database or send messages automatically.

Service examples and the PadhAI workspace are labelled concepts. Merchant names, menus, rooms and dashboard figures are illustrative. SmartLink supports local demo interactions, sharing with fallbacks, contact downloads and matching sample CSV reports.

Live analytics, a protected owner account, self-service editing, payments, real bookings and NFC provisioning require customer-specific implementation. Confirm the offer's delivery, taxes, hosting/renewals, update-service period and support before accepting an order. Physical stands and programmed NFC tags are separate from this ZIP. QR illustrations are not printable codes.

## Check and deploy

Stop the dev server first, then:

```powershell
npm test
npm run format:check
npm run build
npm start
```

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for upgrading the Windows folder, preserving Git history and deploying on Vercel. See [VERIFICATION.md](docs/VERIFICATION.md) for the release checks and limits. Downloading the ZIP does not change the live website.

## Technology

Next.js **15.5.25** App Router, React **19**, JavaScript/JSX, CSS/CSS Modules, Lucide icons, Radix dialogs and Prettier. The `@/` import alias means the project root.

Commit the lockfile. Use `npm run format` after editing. Keep secrets outside public source. Check dependency audits during maintenance and review upgrades before applying them.
