import { ArrowUpRight, BookOpen, FileText, Sparkles } from "lucide-react";
import { PORTFOLIO_EXAMPLES } from "@/data/portfolio";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Portfolio.module.css";

export function WorkSection() {
  return (
    <section className={styles.section} id="work" aria-labelledby="work-heading">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <span>EXPLORE OUR APPROACH</span>
            <h2 id="work-heading">
              Ideas you can
              <br />
              <em>see and explore.</em>
            </h2>
          </div>
          <p>
            A closer look at the interfaces and product concepts behind our three core
            services.
          </p>
        </div>
        <article className={styles.featured}>
          <div
            className={styles.studyPreview}
            aria-label="PadhAI illustrative product workspace"
          >
            <div className={styles.windowBar}>
              <span>
                <i />
                <i />
                <i />
              </span>
              <small>PRODUCT CONCEPT</small>
            </div>
            <div className={styles.workspace}>
              <div className={styles.studyBrand}>
                <BookOpen size={19} />
                <strong>PadhAI</strong>
                <span>STUDY WORKSPACE</span>
              </div>
              <div className={styles.studyGrid}>
                <aside>
                  <span>
                    <FileText size={15} />
                    Your materials
                  </span>
                  <div>Computer science.pdf</div>
                  <div>Revision notes.pdf</div>
                  <small>ILLUSTRATIVE FILES</small>
                </aside>
                <div className={styles.studyMain}>
                  <span>LESS SCATTER. MORE FOCUS.</span>
                  <h3>
                    Turn your notes
                    <br />
                    into your next step.
                  </h3>
                  <p>A space for summaries, questions and focused revision.</p>
                  <div className={styles.studyTools}>
                    <span>
                      <FileText size={15} />
                      Summary
                    </span>
                    <span>
                      <Sparkles size={15} />
                      Practice quiz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.featuredCopy}>
            <span>AI EDUCATION · PRODUCT CONCEPT</span>
            <h3>PadhAI</h3>
            <p className={styles.lead}>
              From scattered material to a focused study space.
            </p>
            <p>
              A concept that brings document-based learning, summaries, quizzes and
              revision tools into one interface.
            </p>
            <div className={styles.tags}>
              <span>Document learning</span>
              <span>Practice quizzes</span>
              <span>Study planning</span>
            </div>
            <a
              href={createWhatsAppUrl(
                "Hello Bhanova Technologies, I would like to discuss an education platform similar to the PadhAI concept.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Discuss an education platform <ArrowUpRight size={17} />
            </a>
          </div>
        </article>
        <div className={styles.grid}>
          {PORTFOLIO_EXAMPLES.map((item) => (
            <a
              className={styles.card}
              href={item.href}
              key={item.href}
              aria-label={`Open ${item.label} demo`}
            >
              <div className={styles.image}>
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={760}
                  loading="lazy"
                  decoding="async"
                />
                <span>UI CONCEPT</span>
              </div>
              <div className={styles.cardCopy}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong>
                  Open demo <ArrowUpRight size={16} />
                </strong>
              </div>
            </a>
          ))}
        </div>
        <p className={styles.disclaimer}>
          These are illustrative product and interface concepts. The examples show design
          direction and possible features; a live system is scoped and built for your
          requirements.
        </p>
      </div>
    </section>
  );
}
