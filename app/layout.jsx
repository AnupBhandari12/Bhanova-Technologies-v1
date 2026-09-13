import { site } from "@/config/site";
import { getSiteOrigin } from "@/lib/metadata";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: getSiteOrigin(),
  title: {
    default: `${site.name} | Websites, Software & AI Solutions in Nepal`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_NP",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/bhanova-mark.png", shortcut: "/bhanova-mark.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
