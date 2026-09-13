import { ArrowUpRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/config/site";
import styles from "./WhyBhanova.module.css";

const commitments = [
  {
    icon: Check,
    title: "Clarity from the start",
    description:
      "A written scope, agreed milestones and a clear explanation of what your project includes.",
  },
  {
    icon: MessageCircle,
    title: "A direct conversation",
    description:
      "Discuss decisions, review progress and get answers in straightforward language.",
  },
  {
    icon: ShieldCheck,
    title: "Care beyond delivery",
    description:
      "Responsive design, practical handover and support agreed around your needs.",
  },
];

export function WhyBhanovaSection() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-heading">
      <span id="why-us" className={styles.anchor} aria-hidden="true" />
      <div className={styles.story}>
        <span className="kicker">WHY BHANOVA</span>
        <h2 id="about-heading">
          Local understanding.
          <br />
          <em>Thoughtful delivery.</em>
        </h2>
        <p>
          Bhanova Technologies is a Nepal-based software and IT company building websites,
          custom applications and practical AI solutions for education institutes and
          growing businesses.
        </p>
        <p>
          We start with the way your business works, then shape the technology around it.
          You get a clear plan, a considered design and a product you can understand.
        </p>
        <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
          Tell us what you have in mind <ArrowUpRight size={17} />
        </a>
        <div className={styles.signature}>
          <img src="/bhanova-mark.png" alt="" width={34} height={34} />
          <span>
            BHANOVA TECHNOLOGIES<small>Innovating From Nepal</small>
          </span>
        </div>
      </div>
      <div className={styles.commitments}>
        {commitments.map(({ icon: Icon, title, description }, index) => (
          <article key={title}>
            <span className={styles.number}>0{index + 1}</span>
            <div>
              <Icon size={20} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
