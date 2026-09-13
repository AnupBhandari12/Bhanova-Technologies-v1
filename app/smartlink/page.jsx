import { SiteHeader } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";
import { SmartLinkHero } from "@/components/products/SmartLinkHero";
import { SmartLinkPackages } from "@/components/products/SmartLinkPackages";
import { SmartLinkSteps } from "@/components/products/SmartLinkSteps";
import { FaqSection } from "@/components/shared/FaqSection";
import { SMARTLINK_FAQS } from "@/data/faqs";
import "@/styles/home/index.css";

export const metadata = {
  title: "SmartLink | QR & NFC Business Profiles",
  description:
    "Explore Bhanova QR, Tap and Pro: business profiles, QR stands and NFC options, with package demos and pricing.",
  alternates: { canonical: "/smartlink" },
};

export default function SmartLinkPage() {
  return (
    <div className="home-page">
      <SiteHeader />
      <main id="main-content">
        <SmartLinkHero />
        <SmartLinkPackages />
        <SmartLinkSteps />
        <FaqSection
          items={SMARTLINK_FAQS}
          id="smartlink-faq"
          title="A little more about SmartLink."
          description="Packages, setup and the details behind the demos."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
