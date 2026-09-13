import { SiteHeader } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/Services";
import { SmartLinkSection } from "@/components/home/SmartLink";
import { WorkSection } from "@/components/home/Portfolio";
import { ProcessSection } from "@/components/home/Process";
import { WhyBhanovaSection } from "@/components/home/WhyBhanova";
import { EnquirySection } from "@/components/home/Enquiry";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { FaqSection } from "@/components/shared/FaqSection";
import { COMPANY_FAQS } from "@/data/faqs";
import "@/styles/home/index.css";

export const metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <div className="home-page">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <WhyBhanovaSection />
        <ProcessSection />
        <SmartLinkSection />
        <FaqSection items={COMPANY_FAQS} />
        <EnquirySection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
