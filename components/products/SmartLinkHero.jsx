import { ArrowDown, ArrowUpRight, Check, Link2 } from "lucide-react";
import { CONTACT, SMARTLINK_DEMOS } from "@/config/site";
import { SMARTLINK_PACKAGES, formatPackagePrice } from "@/data/smartlink-packages";
import { SmartLinkPreview } from "@/components/previews/SmartLinkPreview";
import styles from "./SmartLinkHero.module.css";

export function SmartLinkHero() {
  return (
    <section className={styles.section} aria-labelledby="smartlink-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.label}>
            <Link2 size={16} />
            BHANOVA SMARTLINK
          </span>
          <h1 id="smartlink-heading">
            One scan.
            <br />
            <em>Every connection.</em>
          </h1>
          <p>
            Give customers one simple place to find your business. Contact, directions,
            reviews and social links—all from a QR stand or NFC tap.
          </p>
          <div className={styles.price}>
            Packages from{" "}
            <strong>{formatPackagePrice(SMARTLINK_PACKAGES[0].price)}</strong>
            <span>QR · Tap · Pro</span>
          </div>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="#smartlink-packages">
              Explore packages
              <ArrowDown size={18} />
            </a>
            <a className={styles.demoLink} href={SMARTLINK_DEMOS.bhanova}>
              See Bhanova's profile
              <ArrowUpRight size={18} />
            </a>
          </div>
          <ul>
            <li>
              <Check size={15} />
              One profile for your key links
            </li>
            <li>
              <Check size={15} />A design to suit your business
            </li>
          </ul>
          <p className={styles.byline}>
            A product by <a href="/">Bhanova Technologies</a>.<br />
            Need a custom website or software?{" "}
            <a href="/#services">Explore our IT services.</a>
          </p>
        </div>
        <div className={styles.visual}>
          <SmartLinkPreview />
          <a href={CONTACT.smartLinkWhatsapp} target="_blank" rel="noreferrer">
            Let's find the right package for you
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
