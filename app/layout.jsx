import "./globals.css";

export const metadata = {
  title: "Bhanova Technologies | Websites, Software & AI Solutions in Nepal",
  description:
    "Bhanova Technologies builds professional websites, custom software and practical AI automation solutions for education institutes and growing businesses in Nepal.",
  keywords: [
    "web development Nepal",
    "software company Nepal",
    "AI automation Nepal",
    "business website Nepal",
    "custom software Nepal",
  ],
  openGraph: {
    type: "website",
    locale: "en_NP",
    siteName: "Bhanova Technologies",
    title: "Bhanova Technologies | Innovating From Nepal",
    description:
      "Professional websites, custom software and practical AI solutions for growing organisations.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/bhanova-mark.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
