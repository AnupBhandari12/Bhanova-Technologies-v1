# Bhanova Technologies Website

Clean Next.js and JavaScript version prepared for VS Code, GitHub and Vercel.

## Run in VS Code

```powershell
cd D:\BHANOVA
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project structure

- `app/page.jsx` - assembles the homepage and handles the enquiry form
- `app/lib/site-content.js` - services, prices, contact details and social links
- `app/components/home/site-header.jsx` - navigation and mobile menu
- `app/components/home/sections.jsx` - readable homepage section components
- `app/components/home/brand.jsx` - shared Bhanova logo components
- `app/globals.css` - original layout and component styles
- `app/premium.css` - final visual polish, motion and hover states
- `app/examples/[slug]/page.jsx` - service UI demo pages
- `lib/example-demos.js` - data used by the service demo pages
- `public/` - Bhanova logo, brand mark and favicon

Most text, prices and links can be changed from `app/lib/site-content.js`.

## Deploy to Vercel

Push this folder to GitHub, import the repository in Vercel, and click Deploy.
Vercel detects Next.js automatically, so custom build settings are not needed.
