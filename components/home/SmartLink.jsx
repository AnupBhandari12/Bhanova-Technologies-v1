import { ArrowUpRight, Link2, MessageCircle, QrCode, Star } from "lucide-react";
import styles from "./SmartLink.module.css";

export function SmartLinkSection() {
  return (
    <section
      className={styles.section}
      id="smartlink"
      aria-labelledby="smartlink-heading"
    >
      <span id="smartlink-packages" className={styles.anchor} aria-hidden="true" />
      <div className={styles.copy}>
        <span>OUR PRODUCT · BHANOVA SMARTLINK</span>
        <h2 id="smartlink-heading">
          A small stand.
          <br />
          <em>More ways to connect.</em>
        </h2>
        <p>
          A QR and NFC business profile that puts contact details, social pages and
          important links in one place. A simple product for local businesses, built by
          Bhanova.
        </p>
        <a href="/smartlink">
          Explore SmartLink <ArrowUpRight size={18} />
        </a>
      </div>
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.connection}>
          <QrCode size={40} />
          <span>SCAN OR TAP</span>
          <i />
        </div>
        <div className={styles.profile}>
          <div>
            <img src="/bhanova-mark.png" alt="" width={31} height={31} />
            <span>
              Your business<small>One profile. Every connection.</small>
            </span>
          </div>
          <span>
            <MessageCircle size={14} />
            Contact & WhatsApp
          </span>
          <span>
            <Link2 size={14} />
            Website & social links
          </span>
          <span>
            <Star size={14} />
            Reviews & location
          </span>
        </div>
      </div>
    </section>
  );
}
