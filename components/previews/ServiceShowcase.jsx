"use client";

import { useState } from "react";
import { ArrowUpRight, Check, GraduationCap, Search, Sparkles } from "lucide-react";
import { SHOWCASE_TABS } from "@/data/showcase";
import { Icon } from "@/components/shared/Icon";
import styles from "./ServiceShowcase.module.css";

function WebsitePreview() {
  return (
    <div className={styles.website}>
      <div className={styles.schoolNav}>
        <span>
          <GraduationCap size={17} />
          Horizon Academy
        </span>
        <small>Learn · Explore · Grow</small>
      </div>
      <div className={styles.schoolBody}>
        <span>EDUCATION WEBSITE CONCEPT</span>
        <strong>
          A bright beginning.
          <br />A bigger tomorrow.
        </strong>
        <p>Courses, admissions and your next chapter, all in one place.</p>
        <span className={styles.sampleButton}>
          Explore programmes <ArrowUpRight size={12} />
        </span>
      </div>
      <div className={styles.schoolBlocks}>
        <span>
          Programmes<b>Find your path</b>
        </span>
        <span>
          Admissions<b>Take the next step</b>
        </span>
        <span>
          Campus life<b>Feel at home</b>
        </span>
      </div>
    </div>
  );
}
function SoftwarePreview() {
  return (
    <div className={styles.software}>
      <div className={styles.appNav}>
        <span>
          Workspace <small>/ Overview</small>
        </span>
        <Search size={15} />
      </div>
      <div className={styles.appHeading}>
        <strong>Keep everything moving.</strong>
        <small>Example project workspace</small>
      </div>
      <div className={styles.workCards}>
        <span>
          <small>Projects</small>
          <b>08</b>
        </span>
        <span>
          <small>In progress</small>
          <b>05</b>
        </span>
        <span>
          <small>Ready to review</small>
          <b>03</b>
        </span>
      </div>
      <div className={styles.workRows}>
        {[
          ["Website refresh", "In progress"],
          ["Customer portal", "In review"],
          ["Monthly report", "Ready"],
        ].map(([name, status]) => (
          <div key={name}>
            <span>
              <Check size={12} />
              {name}
            </span>
            <small>{status}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
function AiPreview() {
  return (
    <div className={styles.ai}>
      <div className={styles.appNav}>
        <span>
          <Sparkles size={15} /> Business assistant
        </span>
        <small>UI concept</small>
      </div>
      <div className={styles.chatQuestion}>
        What should I prepare for a website project?
      </div>
      <div className={styles.chatAnswer}>
        <span>
          <Sparkles size={15} />A useful starting point
        </span>
        <p>
          Your business goals, preferred pages, logo and contact details. We can help plan
          the rest.
        </p>
        <small>Illustrative answer · No live AI connection</small>
      </div>
      <div className={styles.chatChips}>
        <span>Project planning</span>
        <span>Common questions</span>
        <span>Document search</span>
      </div>
    </div>
  );
}

export function ServiceShowcase() {
  const [activeId, setActiveId] = useState("website");
  const active = SHOWCASE_TABS.find((tab) => tab.id === activeId);
  return (
    <div className={styles.showcase} aria-label="Explore our three core services">
      <div className={styles.heading}>
        <span>IDEAS INTO INTERFACES</span>
        <span className={styles.previewLabel}>Design preview</span>
      </div>
      <div className={styles.tabs} aria-label="Choose a service preview">
        {SHOWCASE_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            aria-pressed={activeId === tab.id}
            onClick={() => setActiveId(tab.id)}
          >
            <Icon name={tab.icon} />
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.browser}>
        <div className={styles.browserTop}>
          <div>
            <i />
            <i />
            <i />
          </div>
          <span>bhanova / {activeId}</span>
          <span>CONCEPT</span>
        </div>
        <div className={styles.preview} aria-live="polite">
          {activeId === "website" ? (
            <WebsitePreview />
          ) : activeId === "software" ? (
            <SoftwarePreview />
          ) : (
            <AiPreview />
          )}
        </div>
      </div>
      <div className={styles.caption}>
        <span>BUILT AROUND YOUR GOALS</span>
        <h2>{active.title}</h2>
        <p>{active.description}</p>
        <a href={active.href}>
          {active.linkLabel}
          <ArrowUpRight size={17} />
        </a>
      </div>
    </div>
  );
}
