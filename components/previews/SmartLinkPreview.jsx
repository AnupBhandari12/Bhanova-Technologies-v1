import { Link2, MapPin, MessageCircle, QrCode, Smartphone, Star } from "lucide-react";
import styles from "./SmartLinkPreview.module.css";

// An illustration of the physical stand. Actual QR codes are generated for each customer's URL.
export function SmartLinkPreview() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.orbit} />
      <div className={styles.stand}>
        <div className={styles.brand}>
          <img src="/bhanova-mark.png" alt="" width={32} height={32} />
          <span>
            BHANOVA<small>SMARTLINK</small>
          </span>
        </div>
        <p>PROFILE PREVIEW</p>
        <div className={styles.qr}>
          <QrCode size={135} />
        </div>
        <strong>Your Business</strong>
        <small>Everything in one place</small>
        <div className={styles.icons}>
          <Link2 />
          <MessageCircle />
          <MapPin />
          <Star />
        </div>
      </div>
      <div className={styles.base} />
      <div className={styles.review}>
        <Star size={18} />
        <span>
          Reviews<small>Share your experience</small>
        </span>
      </div>
      <div className={styles.location}>
        <MapPin size={18} />
        <span>
          Find us<small>Get directions</small>
        </span>
      </div>
      <div className={styles.contact}>
        <Smartphone size={18} />
        <span>
          Stay connected<small>Save our details</small>
        </span>
      </div>
    </div>
  );
}
