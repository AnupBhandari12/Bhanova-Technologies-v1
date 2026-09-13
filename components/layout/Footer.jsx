import { ArrowUpRight, Building2, Camera, Mail, UsersRound } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "@/config/site";
import { BrandLogo } from "@/components/shared/Brand";
import styles from "./Footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="/" aria-label="Bhanova Technologies home">
            <BrandLogo />
          </a>
          <p>
            Websites. Software. Practical AI.
            <br />
            Innovating From Nepal.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/#services">Our services</a>
          <a href="/#work">Explore our work</a>
          <a href="/smartlink">
            Bhanova SmartLink <ArrowUpRight size={13} />
          </a>
          <a href="/#contact">Start a conversation</a>
        </nav>
        <div className={styles.socials}>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email Bhanova">
            <Mail />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Bhanova on LinkedIn"
          >
            <Building2 />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Bhanova on Instagram"
          >
            <Camera />
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Bhanova on Facebook"
          >
            <UsersRound />
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Bhanova Technologies</span>
        <span>Built with care, in Nepal.</span>
      </div>
    </footer>
  );
}
