import {
  ArrowUpRight,
  Coffee,
  Instagram,
  MapPin,
  MessageCircle,
  Mountain,
  Sandwich,
} from "lucide-react";
import styles from "./PackagePreview.module.css";

// A small, decorative preview; the real demo link is provided by the package card.
export function PackagePreview({ plan }) {
  const Mark = { qr: Coffee, tap: Sandwich, pro: Mountain }[plan.id];
  return (
    <div className={`${styles.canvas} ${styles[plan.id]}`} aria-hidden="true">
      <span className={styles.caption}>{plan.label}</span>
      <div className={styles.phone}>
        <div className={styles.speaker} />
        <div className={styles.brand}>
          <Mark size={22} />
        </div>
        <strong>{plan.example}</strong>
        <small>
          {plan.id === "qr"
            ? "Good coffee. Good company."
            : plan.id === "tap"
              ? "Big flavour. Zero fuss."
              : "A warm stay. A brighter journey."}
        </small>
        <div className={styles.links}>
          <span>
            <MessageCircle size={12} />
            {plan.id === "pro" ? "Book a visit" : "WhatsApp"}
            <ArrowUpRight size={11} />
          </span>
          <span>
            <Instagram size={12} />
            {plan.id === "tap" ? "Explore menu" : "Instagram"}
            <ArrowUpRight size={11} />
          </span>
          <span>
            <MapPin size={12} />
            {plan.id === "pro" ? "Review us" : "Find us"}
            <ArrowUpRight size={11} />
          </span>
        </div>
      </div>
      <span className={styles.access}>
        {plan.id === "qr"
          ? "QR PROFILE"
          : plan.id === "tap"
            ? "QR + NFC"
            : "CUSTOM + INSIGHTS"}
      </span>
    </div>
  );
}
