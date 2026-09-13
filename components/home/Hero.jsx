import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { CONTACT } from "@/config/site";
import { ServiceShowcase } from "@/components/previews/ServiceShowcase";
import styles from "./Hero.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-heading">
      <div className={styles.copy}>
        <span className={styles.eyebrow}>
          <i /> YOUR TECHNOLOGY PARTNER IN NEPAL
        </span>
        <h1 id="hero-heading">
          Good software.
          <br />
          Built around
          <br />
          <em>your business.</em>
        </h1>
        <p>
          Websites that introduce you. Software that keeps work moving. AI that makes
          everyday tasks easier.
        </p>
        <p className={styles.audience}>
          We help education institutes and growing businesses turn their ideas into
          practical digital products.
        </p>
        <div className={styles.actions}>
          <a className="btn btn-primary" href="#services">
            Explore services <ArrowDown size={17} />
          </a>
          <a
            className={styles.secondary}
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Discuss your project <ArrowUpRight size={17} />
          </a>
        </div>
        <div className={styles.reassurance}>
          <span>
            <Check />
            Clear project scope
          </span>
          <span>
            <Check />
            Direct communication
          </span>
          <span>
            <Check />
            Support after launch
          </span>
        </div>
      </div>
      <ServiceShowcase />
      <div className={styles.bottomLine}>
        <span>THREE CORE SERVICES. ONE THOUGHTFUL APPROACH.</span>
        <a href="#services">
          Find the right starting point <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
