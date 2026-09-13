import { CONTACT } from "../config/site.js";

export function createWhatsAppUrl(message) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createServiceEnquiryUrl(serviceTitle) {
  return createWhatsAppUrl(
    `Hello Bhanova Technologies, I am interested in ${serviceTitle}. I would like to discuss my project requirements.`,
  );
}

export function createEnquiryMessage(fields) {
  const clean = (value) => String(value ?? "").trim();
  return [
    "Hello Bhanova Technologies, I would like to discuss a project.",
    "",
    `Name: ${clean(fields.name)}`,
    `Phone / Email: ${clean(fields.contact)}`,
    `Service: ${clean(fields.service)}`,
    `Estimated budget: ${clean(fields.budget) || "Not decided yet"}`,
    `Project details: ${clean(fields.details)}`,
  ].join("\n");
}
