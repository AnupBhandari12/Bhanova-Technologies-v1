"use client";

import { useState } from "react";
import { SiteHeader } from "./components/home/site-header";
import {
  AboutSection,
  ContactSection,
  EnquirySection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  ServiceTicker,
  SiteFooter,
  SmartLinkSection,
  TrustSection,
  WorkSection,
} from "./components/home/sections";

function createWhatsAppMessage(form) {
  return [
    "Hello Bhanova Technologies, I would like to discuss a project.",
    "",
    `Name: ${form.get("name")}`,
    `Phone / Email: ${form.get("contact")}`,
    `Service: ${form.get("service")}`,
    `Estimated budget: ${form.get("budget")}`,
    `Project details: ${form.get("details")}`,
  ].join("\n");
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleEnquirySubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const message = createWhatsAppMessage(form);
    const whatsappUrl = `https://wa.me/9779702432556?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <SiteHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((isOpen) => !isOpen)}
        onNavigate={() => setMenuOpen(false)}
      />
      <HeroSection />
      <ServiceTicker />
      <ServicesSection />
      <SmartLinkSection />
      <TrustSection />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <EnquirySection onSubmit={handleEnquirySubmit} />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
