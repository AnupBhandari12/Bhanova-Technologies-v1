import { Plus } from "lucide-react";
import styles from "./FaqSection.module.css";

export function FaqSection({
  items,
  id = "faq",
  eyebrow = "A FEW USEFUL ANSWERS",
  title = "Before we build.",
  description = "The practical details, explained simply.",
}) {
  return (
    <section className={styles.section} id={id} aria-labelledby={id + "-heading"}>
      <div className={styles.heading}>
        <span className="kicker">{eyebrow}</span>
        <h2 id={id + "-heading"}>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.items}>
        {items.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <Plus size={18} aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
