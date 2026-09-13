import { ArrowLeft, ArrowUpRight, BarChart3 } from "lucide-react";
import { CONTACT, SMARTLINK_DEMOS } from "@/config/site";
import { SMARTLINK_PACKAGES, formatPackagePrice } from "@/data/smartlink-packages";
import { createPackageEnquiryUrl } from "@/lib/smartlink";
import { Icon } from "@/components/shared/Icon";
import styles from "./SmartLinkProfile.module.css";

// Showcase navigation stays outside the merchant's profile.
export function DemoNavigation({ profile, plan }) {
  const otherDemo = profile.slug === "cafe" ? "bhanova" : "cafe";
  return (
    <>
      <nav className={styles.navigation} aria-label="SmartLink navigation">
        <a href={plan ? "/smartlink#smartlink-packages" : "/smartlink"}>
          <ArrowLeft size={16} />
          {plan ? "Compare packages" : "Explore SmartLink"}
        </a>
        <a href={plan ? SMARTLINK_DEMOS.bhanova : SMARTLINK_DEMOS[otherDemo]}>
          {plan
            ? "Bhanova profile"
            : `View ${otherDemo === "cafe" ? "café" : "Bhanova"} example`}
          <ArrowUpRight size={16} />
        </a>
      </nav>
      {plan && (
        <nav className={styles.packageSwitcher} aria-label="Try another package demo">
          {SMARTLINK_PACKAGES.map((item) => (
            <a
              key={item.id}
              href={item.demoUrl}
              aria-current={item.id === plan.id ? "page" : undefined}
              aria-label={`${item.name.replace("Bhanova ", "")} ${formatPackagePrice(item.price)}`}
            >
              <Icon name={item.icon} />
              <span>
                {item.name.replace("Bhanova ", "")}
                <small>{formatPackagePrice(item.price)}</small>
              </span>
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

export function DemoEnquiry({ plan }) {
  const hasAnalytics = plan && ["tap", "pro"].includes(plan.id);
  return (
    <aside className={styles.demoArea} aria-label="About this SmartLink example">
      {hasAnalytics && (
        <section className={styles.ownerPreview} aria-labelledby="owner-preview-title">
          <BarChart3 size={26} />
          <span className={styles.sectionLabel}>
            BUSINESS-OWNER PREVIEW · SAMPLE DATA
          </span>
          <h2 id="owner-preview-title">
            {plan.id === "pro"
              ? "The bigger picture, at a glance."
              : "See how your profile is doing."}
          </h2>
          <p>
            {plan.id === "pro"
              ? "Explore example visits, link insights and a downloadable report."
              : "Explore a simple profile-visit overview."}{" "}
            This public demo is not connected to live tracking.
          </p>
          <a href={`/smartlink/${plan.id}/analytics`}>
            Explore {plan.id === "tap" ? "basic" : "sample"} analytics{" "}
            <ArrowUpRight size={18} />
          </a>
        </section>
      )}
      <section className={styles.productCta}>
        <img src="/bhanova-mark.png" alt="" width={44} height={44} />
        <span className={styles.sectionLabel}>
          {plan?.name.toUpperCase() || "BHANOVA SMARTLINK"}
        </span>
        <h2>{plan ? `Make ${plan.name} yours.` : "Want this for your business?"}</h2>
        <p>
          {plan
            ? `${plan.summary} — ${formatPackagePrice(plan.price)}. Let's discuss your business, design and setup.`
            : "Your website, contact details and social pages in one professional QR profile."}
        </p>
        <a
          href={plan ? createPackageEnquiryUrl(plan) : CONTACT.smartLinkWhatsapp}
          target="_blank"
          rel="noreferrer"
        >
          {plan ? `Enquire about ${plan.name}` : "Get your SmartLink"}
          <ArrowUpRight size={20} />
        </a>
        {plan && (
          <small>
            Demo showcase controls are outside the customer profile. Delivery,
            hosting/renewal and support terms confirmed before ordering.
          </small>
        )}
      </section>
    </aside>
  );
}
