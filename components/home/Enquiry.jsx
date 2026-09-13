"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  Mail,
  MessageCircle,
  UsersRound,
} from "lucide-react";
import { createEnquiryMessage, createWhatsAppUrl } from "@/lib/whatsapp";
import { CONTACT, SOCIAL_LINKS } from "@/config/site";
import { SERVICES } from "@/data/services";
import styles from "./Enquiry.module.css";

export function EnquirySection() {
  const [messageUrl, setMessageUrl] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const details = form.elements.namedItem("details");
    details.setCustomValidity(
      fields.details.trim() ? "" : "Please tell us briefly about your project.",
    );
    if (!form.reportValidity()) return;
    const url = createWhatsAppUrl(createEnquiryMessage(fields));
    setMessageUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <span id="enquiry" className={styles.anchor} aria-hidden="true" />
      <div className={styles.intro}>
        <span className={styles.eyebrow}>LET'S MAKE IT USEFUL</span>
        <h2 id="contact-heading">
          Your next idea.
          <br />
          <em>Our next conversation.</em>
        </h2>
        <p>
          A website, a better workflow or an AI-powered tool. Tell us what you need, and
          we will help you find a practical starting point.
        </p>
        <a
          className={styles.whatsapp}
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={20} />
          <span>
            Prefer a quick conversation?<strong>Talk to us on WhatsApp</strong>
          </span>
          <ArrowUpRight size={19} />
        </a>
        <a className={styles.email} href={`mailto:${CONTACT.email}`}>
          <Mail size={17} />
          {CONTACT.email}
        </a>
        <div className={styles.socials}>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Bhanova on LinkedIn"
          >
            <Building2 size={17} />
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Bhanova on Instagram"
          >
            <Camera size={17} />
            Instagram
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Bhanova on Facebook"
          >
            <UsersRound size={17} />
            Facebook
          </a>
        </div>
        <div className={styles.note}>
          <Check size={14} />
          Free initial conversation · Based in Nepal
        </div>
      </div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={() => setMessageUrl("")}
      >
        <div className={styles.formHeading}>
          <span>PROJECT ENQUIRY</span>
          <h3>A few details to get started.</h3>
        </div>
        <div className={styles.row}>
          <label>
            <span>Your name *</span>
            <input
              name="name"
              autoComplete="name"
              placeholder="Full name"
              maxLength={80}
              pattern=".*\S.*"
              required
            />
          </label>
          <label>
            <span>Phone or email *</span>
            <input
              name="contact"
              autoComplete="email"
              placeholder="How can we reach you?"
              maxLength={140}
              pattern=".*\S.*"
              required
            />
          </label>
        </div>
        <div className={styles.row}>
          <label>
            <span>Service needed *</span>
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>
              {SERVICES.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            <span>Estimated budget</span>
            <select name="budget" defaultValue="Not decided yet">
              <option>Not decided yet</option>
              <option>NPR 20,000–40,000</option>
              <option>NPR 40,000–80,000</option>
              <option>NPR 80,000+</option>
            </select>
          </label>
        </div>
        <label>
          <span>Tell us about your project *</span>
          <textarea
            name="details"
            rows={4}
            maxLength={1500}
            placeholder="What would you like to build or improve?"
            onInput={(event) => event.currentTarget.setCustomValidity("")}
            required
          />
        </label>
        <button className="btn btn-primary" type="submit">
          <MessageCircle size={18} />
          Review &amp; send on WhatsApp
          <ArrowUpRight size={18} />
        </button>
        <small>You can review your message in WhatsApp before sending it.</small>
        {messageUrl && (
          <p className={styles.feedback} role="status">
            WhatsApp did not open?{" "}
            <a href={messageUrl} target="_blank" rel="noreferrer">
              Open your prepared message
            </a>
            .
          </p>
        )}
      </form>
    </section>
  );
}
