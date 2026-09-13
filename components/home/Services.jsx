import { SERVICES } from "@/data/services";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesSection() {
  return (
    <section className="services section" id="services">
      <SectionIntro
        eyebrow="OUR SERVICES"
        title={
          <>
            Three services.
            <br />
            <em>Built around your goals.</em>
          </>
        }
        description="Create a stronger online presence, simplify daily operations or put AI to practical use. Explore the possibilities for your business."
      />

      <div className="service-grid">
        {SERVICES.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
      <p className="service-scope-note">
        Prices are starting points. We confirm features and scope before work begins. Demo
        interfaces show possibilities; domain, hosting and paid integrations are quoted
        separately.
      </p>
    </section>
  );
}
