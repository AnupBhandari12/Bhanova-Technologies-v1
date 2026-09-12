import "./globals.css";
import "./premium.css";

export const metadata = {
  metadataBase: new URL("https://bhanova-technologies.anupbhandari192.chatgpt.site"),
  title: {
    default: "Bhanova Technologies | Websites, Software & AI Solutions in Nepal",
    template: "%s | Bhanova Technologies",
  },
  description:
    "Bhanova Technologies builds professional websites, custom software and practical AI automation solutions for education institutes and growing businesses in Nepal.",
  keywords: [
    "web development Nepal",
    "software company Nepal",
    "AI automation Nepal",
    "business website Nepal",
    "custom software Nepal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NP",
    siteName: "Bhanova Technologies",
    title: "Bhanova Technologies | Innovating From Nepal",
    description:
      "Professional websites, custom software and practical AI solutions for growing organisations.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/bhanova-mark.png", shortcut: "/bhanova-mark.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
