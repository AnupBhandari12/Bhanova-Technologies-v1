import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/config/site";
import styles from "./SmartLinkSteps.module.css";

const steps = [
  [
    "01",
    "Choose your package",
    "Explore the demos and choose the experience that suits your business.",
  ],
  [
    "02",
    "Share your details",
    "Send your logo, contacts and links. We agree the scope and delivery arrangements.",
  ],
  [
    "03",
    "Review your profile",
    "Check your design and links before the profile and stand are prepared for use.",
  ],
  [
    "04",
    "Place it. Connect.",
    "Customers scan the QR or use a compatible NFC phone to open your profile.",
  ],
];

export function SmartLinkSteps() {
  return (
    <section className={styles.section} aria-labelledby="smartlink-steps-heading">
      <div className={styles.heading}>
        <div>
          <span className="kicker">FROM YOUR COUNTER TO THEIR PHONE</span>
          <h2 id="smartlink-steps-heading">A simple start for your business.</h2>
        </div>
        <a href={CONTACT.smartLinkWhatsapp} target="_blank" rel="noreferrer">
          Ask about SmartLink
          <ArrowUpRight size={18} />
        </a>
      </div>
      <ol className={styles.steps}>
        {steps.map(([number, title, description]) => (
          <li key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
