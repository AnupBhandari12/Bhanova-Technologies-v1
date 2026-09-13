import { ArrowDown, ArrowUpRight, Check, Minus } from "lucide-react";
import {
  SMARTLINK_PACKAGES,
  PACKAGE_COMPARISON,
  formatPackagePrice,
} from "@/data/smartlink-packages";
import { createPackageEnquiryUrl } from "@/lib/smartlink";
import { Icon } from "@/components/shared/Icon";
import { PackagePreview } from "@/components/smartlink/PackagePreview";
import styles from "./SmartLinkPackages.module.css";

export function SmartLinkPackages() {
  return (
    <section
      className={styles.section}
      id="smartlink-packages"
      aria-labelledby="packages-title"
    >
      <div className={styles.intro}>
        <div>
          <span className={styles.eyebrow}>A SMALL STAND. A BETTER CONNECTION.</span>
          <h2 id="packages-title">
            One profile.
            <br />
            <em>Three ways to make it yours.</em>
          </h2>
        </div>
        <p>
          Start with QR. Add the ease of NFC. Or create a complete branded experience.
          Open a demo and see how your business could look.
        </p>
      </div>

      <div className={styles.cards}>
        {SMARTLINK_PACKAGES.map((plan) => (
          <article
            key={plan.id}
            className={`${styles.card} ${plan.recommended ? styles.recommended : ""}`}
            data-package={plan.id}
          >
            <div className={styles.cardTop}>
              <span className={styles.planIcon}>
                <Icon name={plan.icon} />
              </span>
              <span className={styles.planBadge}>
                {plan.recommended
                  ? "RECOMMENDED"
                  : plan.id === "pro"
                    ? "CUSTOM EXPERIENCE"
                    : "THE ESSENTIALS"}
              </span>
            </div>
            <h3>{plan.name}</h3>
            <p className={styles.summary}>{plan.summary}</p>
            <div className={styles.price}>
              <strong>{formatPackagePrice(plan.price)}</strong>
              <span>Package price</span>
            </div>
            <PackagePreview plan={plan} />
            <div className={styles.exampleLabel}>
              <span>EXAMPLE</span>
              <strong>{plan.example}</strong>
            </div>
            <p className={styles.description}>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className={styles.audience}>
              <strong>Made for</strong> {plan.audience}
            </p>
            <div className={styles.actions}>
              <a
                className={styles.demoButton}
                href={plan.demoUrl}
                aria-label={`Explore ${plan.name} demo`}
              >
                Explore live demo <ArrowUpRight size={18} />
              </a>
              <a
                className={styles.orderButton}
                href={createPackageEnquiryUrl(plan)}
                target="_blank"
                rel="noreferrer"
              >
                Choose {plan.name} <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.details}>
        <span>
          <ArrowDown size={18} /> THE DIFFERENCE, AT A GLANCE
        </span>
        <p>
          QR keeps the essentials together. Tap adds NFC and basic analytics; Pro adds
          custom design, link insights and reports.
        </p>
      </div>
      <div
        className={styles.comparison}
        role="region"
        aria-label="Compare SmartLink package features"
        tabIndex={0}
      >
        <table>
          <caption>Compare Bhanova SmartLink packages</caption>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              {SMARTLINK_PACKAGES.map((plan) => (
                <th key={plan.id} scope="col">
                  {plan.name.replace("Bhanova ", "")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PACKAGE_COMPARISON.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.values.map((included, index) => (
                  <td key={index}>
                    <span aria-label={included ? "Included" : "Not included"}>
                      {included ? (
                        <Check aria-hidden="true" />
                      ) : (
                        <Minus aria-hidden="true" />
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.terms}>
        <p>
          <strong>Before you order:</strong> Confirm delivery, taxes, hosting/renewal, the
          service period for unlimited link updates and support terms with Bhanova. NFC
          needs a compatible, NFC-enabled phone and a programmed physical stand. Custom
          domains and additional languages are optional, separately scoped additions.
        </p>
        <p>
          <strong>*Analytics preview:</strong> Tap and Pro dashboards use clearly labelled
          sample data. Live tracking, reports and booking integrations need
          customer-specific setup. These demos do not collect visitor analytics. Scan and
          tap counts cannot be distinguished from profile visits without additional
          tracking.
        </p>
      </div>
    </section>
  );
}
