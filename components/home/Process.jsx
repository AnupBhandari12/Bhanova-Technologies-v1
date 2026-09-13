import { PROCESS_STEPS } from "@/data/company";
import styles from "./Process.module.css";

export function ProcessSection() {
  return (
    <section className={styles.section} id="process" aria-labelledby="process-heading">
      <div className={styles.heading}>
        <div>
          <span className="kicker">HOW WE WORK</span>
          <h2 id="process-heading">A clear path from idea to launch.</h2>
        </div>
        <p>Small, visible steps. Room for your feedback along the way.</p>
      </div>
      <div className={styles.steps}>
        {PROCESS_STEPS.map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
