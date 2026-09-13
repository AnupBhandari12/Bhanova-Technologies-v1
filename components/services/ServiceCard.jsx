"use client";
import { ArrowUpRight, Check, Layers3 } from "lucide-react";
import { createServiceEnquiryUrl } from "@/lib/whatsapp";
import { Icon } from "@/components/shared/Icon";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ServiceExamples } from "./ServiceExamples";

export function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="card-head">
        <span>{service.number}</span>
        <div>
          <Icon name={service.icon} />
        </div>
      </div>
      <h3>{service.title}</h3>
      <span className="service-price">{service.price}</span>
      <p>{service.description}</p>
      <p className="service-audience">{service.audience}</p>
      <ul className="service-features">
        {service.features.map((feature) => (
          <li key={feature}>
            <Check />
            {feature}
          </li>
        ))}
      </ul>

      <div className="service-actions">
        <Dialog>
          <DialogTrigger asChild>
            <button className="example-button">
              View examples <Layers3 />
            </button>
          </DialogTrigger>
          <ServiceExamples service={service} />
        </Dialog>
        <a
          className="discuss-link"
          href={createServiceEnquiryUrl(service.title)}
          aria-label={`Discuss a ${service.title} project`}
          target="_blank"
          rel="noreferrer"
        >
          Discuss project <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}
