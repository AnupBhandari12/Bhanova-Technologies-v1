"use client";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { createServiceEnquiryUrl } from "@/lib/whatsapp";
import { Icon } from "@/components/shared/Icon";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function ServiceExamples({ service }) {
  return (
    <DialogContent className="service-modal">
      <DialogHeader>
        <span className="modal-kicker">WHAT WE CAN BUILD</span>
        <DialogTitle>{service.title} Examples</DialogTitle>
        <DialogDescription>
          Open an example to explore a complete interface concept for that product.
        </DialogDescription>
      </DialogHeader>

      <div className="example-grid">
        {service.examples.map((example, index) => {
          return (
            <a
              className="example-card"
              href={`/examples/${example.slug}`}
              key={example.title}
            >
              <div className={`example-preview preview-${index + 1}`}>
                <div className="preview-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <Icon name={example.icon} />
              </div>
              <span>{example.type}</span>
              <h4>{example.title}</h4>
              <p>{example.description}</p>
              <b className="open-demo">
                Open UI demo <ArrowUpRight />
              </b>
            </a>
          );
        })}
      </div>

      <div className="modal-cta">
        <div>
          <strong>Have a similar idea?</strong>
          <span>Tell us what you need and receive a practical recommendation.</span>
        </div>
        <a
          className="btn btn-primary"
          href={createServiceEnquiryUrl(service.title)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle /> Build something similar
        </a>
      </div>
    </DialogContent>
  );
}
