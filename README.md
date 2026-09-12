# Bhanova Technologies Website

Clean Next.js and JavaScript version prepared for VS Code, GitHub and Vercel.

## Run in VS Code

```powershell
cd D:\BHANOVA
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Main files

- `app/page.jsx` - homepage content and interactions
- `app/globals.css` - homepage design
- `app/examples/[slug]/page.jsx` - service UI demo pages
- `lib/example-demos.js` - demo content
- `public/` - Bhanova logo and favicon

## Deploy to Vercel

Push this folder to GitHub, import the repository in Vercel, and click Deploy.
Vercel detects Next.js automatically, so custom build settings are not needed.
