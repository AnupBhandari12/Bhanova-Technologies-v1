import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { exampleDemos, exampleSlugs } from "@/data/examples";
import { WebsiteDemo } from "@/components/examples/WebsiteDemo";
import { SoftwareDemo } from "@/components/examples/SoftwareDemo";
import { AiDemo } from "@/components/examples/AiDemo";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import "@/styles/examples.css";

// Known examples are pre-rendered. Unknown slugs reach our notFound() checks below.
export const dynamicParams = true;

export function generateStaticParams() {
  return exampleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const demo = Object.hasOwn(exampleDemos, slug) ? exampleDemos[slug] : null;
  if (!demo) return { title: "Example not found" };
  return {
    title: `${demo.label} — Concept Preview`,
    description: demo.description,
    alternates: { canonical: `/examples/${slug}` },
    robots: { index: false, follow: true },
    openGraph: {
      title: `${demo.label} — Concept Preview`,
      description: demo.description,
    },
  };
}

export default async function ExamplePage({ params }) {
  const { slug } = await params;
  const demo = Object.hasOwn(exampleDemos, slug) ? exampleDemos[slug] : null;
  if (!demo) notFound();
  const enquiryUrl = createWhatsAppUrl(
    `Hello Bhanova Technologies, I am interested in a ${demo.label}.`,
  );
  const Preview = { website: WebsiteDemo, software: SoftwareDemo, ai: AiDemo }[demo.kind];

  return (
    <main className="demo-page" id="main-content">
      <div className="demo-topbar">
        <a href="/#services">
          <ArrowLeft /> Back to Bhanova
        </a>
        <span>UI concept · Sample content, not a live business system</span>
        <a className="topbar-cta" href={enquiryUrl} target="_blank" rel="noreferrer">
          Build something similar <ArrowUpRight />
        </a>
      </div>
      <div id="demo-preview">
        <Preview demo={demo} />
      </div>
      <section className="demo-bottom-cta" id="demo-enquiry">
        <span>INSPIRED BY THIS CONCEPT?</span>
        <h2>Let&apos;s adapt it to your business.</h2>
        <p>
          This is a visual concept with illustrative data. Your final solution will be
          tailored to your brand and requirements.
        </p>
        <a href={enquiryUrl} target="_blank" rel="noreferrer">
          <MessageCircle /> Discuss this project on WhatsApp
        </a>
      </section>
    </main>
  );
}
