"use client";

import { Share2 } from "lucide-react";
import { getSmartLinkPackage } from "@/data/smartlink-packages";
import { Icon } from "@/components/shared/Icon";
import { ProfileLink } from "./ProfileLink";
import { ProfileActionDialog } from "./ProfileActionDialog";
import { ProfileExperiences } from "./ProfileExperiences";
import { DemoNavigation, DemoEnquiry } from "./DemoControls";
import { useProfileActions } from "./useProfileActions";
import styles from "./SmartLinkProfile.module.css";

export function SmartLinkProfile({ profile }) {
  const plan = getSmartLinkPackage(profile.packageId);
  const actions = useProfileActions(profile);

  return (
    <main
      id="main-content"
      className={`${styles.page} ${styles[profile.theme] || styles.corporate}`}
    >
      <DemoNavigation profile={profile} plan={plan} />
      <div className={styles.shell}>
        <header className={styles.hero}>
          {profile.cover && (
            <>
              <img
                className={styles.cover}
                src={profile.cover}
                alt={profile.coverAlt || "Café interior concept"}
              />
              <div className={styles.shade} />
            </>
          )}
          {plan?.id === "tap" && (
            <div className={styles.burgerArt} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          )}
          {plan?.id === "pro" && (
            <div className={styles.mountainArt} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          )}
          <span className={styles.badge}>
            {plan
              ? `${plan.name} · Demo`
              : profile.isDemo
                ? "Café demo · Sample business"
                : "Bhanova SmartLink"}
          </span>
          <button
            className={styles.share}
            type="button"
            aria-label="Share this profile"
            onClick={actions.shareProfile}
          >
            <Share2 size={20} />
          </button>
          <div className={styles.heroContent}>
            <div className={styles.brand}>
              {profile.logo ? <img src={profile.logo} alt="" /> : profile.monogram}
            </div>
            <p className={styles.eyebrow}>{profile.eyebrow}</p>
            <h1>{profile.name}</h1>
            <p>{profile.description}</p>
            <span className={styles.note}>{profile.note}</span>
          </div>
        </header>
        {plan && (
          <div className={styles.accessNote}>
            <Icon name={plan.icon} />
            <span>
              {plan.access}
              <small>Fictional business · Interactive design preview</small>
            </span>
          </div>
        )}
        <section className={styles.quickActions} aria-label="Contact shortcuts">
          {profile.actions.map((item) => (
            <ProfileLink
              key={item.label}
              item={item}
              compact
              onAction={actions.handleAction}
            />
          ))}
        </section>
        <ProfileExperiences profile={profile} onAction={actions.handleAction} />
        <section className={styles.linksSection} aria-labelledby="profile-links-heading">
          <span className={styles.sectionLabel}>CONNECT &amp; EXPLORE</span>
          <h2 id="profile-links-heading">
            {profile.linksHeading || "Everything in one place."}
          </h2>
          <div className={styles.links}>
            {profile.links.map((item) => (
              <ProfileLink key={item.label} item={item} onAction={actions.handleAction} />
            ))}
          </div>
        </section>
        <section className={styles.highlight}>
          <span className={styles.sectionLabel}>{profile.highlight.label}</span>
          <div>
            <h2>{profile.highlight.title}</h2>
            {profile.highlight.price && <strong>{profile.highlight.price}</strong>}
          </div>
          <p>{profile.highlight.description}</p>
        </section>
        {plan?.id === "pro" ? (
          <footer className={styles.merchantFooter}>
            <strong>HIMALAYAN HOTEL</strong>
            <span>A warm stay. A brighter journey.</span>
            <small>End of guest profile · Fictional hotel</small>
          </footer>
        ) : (
          <footer className={styles.footer}>
            <a href="/">Powered by Bhanova Technologies</a>
            <span>
              {profile.isDemo
                ? "Illustrative business, hours and prices."
                : "Your direct connection to Bhanova."}
            </span>
          </footer>
        )}
      </div>
      <DemoEnquiry plan={plan} />
      {actions.feedback && (
        <div className={styles.feedback} role="status">
          <span>{actions.feedback}</span>
          {actions.manualShareUrl && (
            <input
              aria-label="Profile link to copy"
              value={actions.manualShareUrl}
              readOnly
              onFocus={(event) => event.target.select()}
            />
          )}
          <button type="button" onClick={actions.clearFeedback}>
            Dismiss
          </button>
        </div>
      )}
      <ProfileActionDialog
        profile={profile}
        activeAction={actions.activeAction}
        onClose={() => actions.setActiveAction(null)}
        triggerRef={actions.actionTrigger}
      />
    </main>
  );
}
