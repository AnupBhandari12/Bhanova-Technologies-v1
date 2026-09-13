# Local setup, GitHub and Vercel

## Safely replace an older D:\BHANOVA copy

Do not extract this release on top of old source files. Old launcher scripts, CSS and dependencies can remain mixed with the new structure.

1. Stop the old dev server with Ctrl+C and close VS Code windows using that folder.
2. Keep a backup: in File Explorer rename the old folder to `D:\BHANOVA-backup`. If that name already exists, choose a new backup name. Do not delete it.
3. Extract the new ZIP so the project is `D:\BHANOVA`. Confirm `D:\BHANOVA\package.json` exists, not `D:\BHANOVA\BHANOVA\package.json`.
4. Open this new folder in VS Code and run the commands below. Do not copy old `node_modules`, `.next`, old source or launcher scripts into it.
5. If you need to preserve an existing GitHub repository, after the new copy works, copy **only the `.git` folder** from your backup into the new project root. File Explorer may need “Hidden items” enabled. This retains the existing repository history/remote; it does not overwrite the new source. Keep the backup until your new deployment is verified.
6. If you have personal changes or environment settings in the backup, review them separately before carrying them over. Never copy secrets into public code.

Alternatively, first test the ZIP in a different fresh folder, such as `D:\BHANOVA-final`, before replacing anything.

## Run and check

Use a supported Node.js installation satisfying `package.json` (`>=22.13.0`; Node 24 is suitable for this release).

```powershell
cd D:\BHANOVA
node --version
npm --version
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). `npm ci` deliberately recreates only this project's dependency directory from the lockfile. Do not delete the lockfile to fix an installation error.

Stop dev before checking the production server:

```powershell
npm test
npm run format:check
npm run build
npm start
```

Do not run `dev` and `start` at the same time on port 3000. `npm start` requires a successful build first. VS Code Live Server / “Go Live” cannot run a Next.js app; use the terminal commands above.

If an install is interrupted or reports a missing package file, first check you are in the new project root and rerun `npm ci`. If the error persists, keep the full error output rather than force-upgrading the framework.

## Existing GitHub repository

After restoring its `.git` folder as described above:

```powershell
git status
git remote -v
git diff --stat
```

Confirm the remote is your intended repository. Review the changes; removed legacy files are expected, but your unrelated personal changes should not be lost.

```powershell
git add -A
git diff --cached --stat
git commit -m "Refine company website and add dedicated SmartLink product page"
git push
```

Only push once you are satisfied. If Git asks you to pull or resolve a conflict, inspect it; do not force-push or reset your repository to bypass it.

For a brand-new repository, create an empty repository on GitHub first, then run `git init`, `git add -A`, `git commit`, set its remote and push following GitHub's instructions for that repository. Do not initialise a second repository if this folder already has `.git`.

Keep `package.json`, `package-lock.json`, `next.config.mjs`, the source, assets and documentation. Do not upload `node_modules`, `.next`, `.vercel` or actual `.env` files. `.env.example` is safe and intentionally included. The supplied `.gitattributes` keeps source line endings consistent across Windows and Linux.

## Vercel

This is a standard Next.js project; Vercel supports it without a custom framework wrapper. [Vercel's Next.js documentation](https://vercel.com/docs/frameworks/full-stack/nextjs).

1. Import the intended GitHub repository into Vercel, or use the existing connected Vercel project.
2. Framework preset: **Next.js**. Root Directory: the folder containing `package.json` (usually repository root).
3. Build: `npm run build`; install: `npm ci`; leave Output Directory at the Next.js default. Do not set it to `dist`, `public` or `out`.
4. Choose a Node version compatible with this project's engines, such as 24.x.
5. Deploy, then inspect the deployment build log and open the deployed URL.

For an existing Git-connected project, a push to its configured production branch normally triggers a new deployment. Check the actual connected branch and root directory in that project. No deployment has been performed by simply downloading this ZIP.

On the deployed site check:

- Homepage with the three IT services, service preview buttons, portfolio screenshot links and all three “View examples” dialogs.
- `/smartlink` as a separate page, package cards, product FAQs and return links from each demo.
- Company FAQs, service-specific enquiries and the mobile contact shortcut hiding at the form.
- `/smartlink/cafe` and `/smartlink/bhanova`, including browser refresh on each URL.
- `/smartlink/qr`, `/smartlink/tap` and `/smartlink/pro`, including direct visits and refresh.
- `/smartlink/tap/analytics` and `/smartlink/pro/analytics`, period selection and the Pro sample CSV.
- Hotel rooms, gallery, booking enquiry preview, demo contact downloads and correct package-specific WhatsApp messages.
- Café menu, Bhanova contact download, mobile navigation and enquiry flow.
- A nonexistent URL returns the branded not-found page.

## Domain later

All SmartLink profiles, analytics previews and service concepts use relative URLs, so they follow the deployment domain automatically. The saved business contact also uses the domain currently open in the browser.

For canonical metadata, optionally set **NEXT_PUBLIC_SITE_URL** in Vercel to your exact final origin, including `https://`, then redeploy. Example only: `https://your-real-domain.example`. Do not use this placeholder on the live site. Without a custom value, the code uses Vercel's production host, then Vercel's deployment host; local development falls back to localhost.

For local testing you may copy `.env.example` to `.env.local` and set your own value. Never commit the actual `.env.local` file.

Add a purchased domain using the provider's current DNS instructions. Generate printed QR codes only after the profile's production URL is final. Changing or deleting that URL later can break printed codes. The decorative homepage QR is not a printable code.

If you later move away from Vercel, choose hosting that supports a Next.js Node application with `npm run build` and `npm start`, or plan a separate static-export migration. This project is not a drag-and-drop HTML folder for arbitrary shared hosting.
