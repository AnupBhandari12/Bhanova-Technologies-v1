import { ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import styles from "./SmartLinkProfile.module.css";

export function ProfileLink({ item, onAction, compact = false }) {
  const external = item.href?.startsWith("https://");
  const className = compact ? styles.quickAction : styles.link;
  const content = (
    <>
      <span className={`${styles.icon} ${item.featured ? styles.featuredIcon : ""}`}>
        <Icon name={item.icon} />
      </span>
      <span className={styles.linkText}>
        <strong>{item.label}</strong>
        {item.caption && <small>{item.caption}</small>}
      </span>
      {!compact && <ChevronRight className={styles.chevron} aria-hidden="true" />}
    </>
  );

  if (item.href) {
    return (
      <a
        className={className}
        href={item.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      className={className}
      type="button"
      onClick={(event) => onAction(item, event.currentTarget)}
    >
      {content}
    </button>
  );
}
