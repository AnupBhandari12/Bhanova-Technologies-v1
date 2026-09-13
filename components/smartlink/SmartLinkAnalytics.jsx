"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Download,
  Eye,
  LayoutDashboard,
  Link2,
  MessageCircle,
  Star,
} from "lucide-react";
import { analyticsPeriods } from "@/data/smartlink-demo-content";
import { getSmartLinkPackage } from "@/data/smartlink-packages";
import { createAnalyticsCsv, createPackageEnquiryUrl } from "@/lib/smartlink";
import { downloadTextFile } from "@/lib/download";
import styles from "./SmartLinkAnalytics.module.css";

function MetricCard({ label, value, icon: Icon, note }) {
  return (
    <article className={styles.metric}>
      <div>
        <span>{label}</span>
        <Icon size={19} />
      </div>
      <strong>{value.toLocaleString("en-US")}</strong>
      <small>{note}</small>
    </article>
  );
}

function VisitChart({ period }) {
  const max = Math.max(...period.visits.map((item) => item.value));
  return (
    <section className={styles.panel} aria-labelledby="visit-chart-title">
      <div className={styles.panelHeading}>
        <div>
          <span className={styles.kicker}>PROFILE TRAFFIC</span>
          <h2 id="visit-chart-title">A little perspective.</h2>
        </div>
        <span className={styles.legend}>
          <i /> Sample visits
        </span>
      </div>
      <div
        className={styles.chart}
        role="img"
        aria-label={period.visits
          .map((item) => `${item.label}: ${item.value} visits`)
          .join("; ")}
      >
        {period.visits.map((item) => (
          <div key={item.label} className={styles.column}>
            <strong>{item.value}</strong>
            <div className={styles.barTrack}>
              <span style={{ height: `${(item.value / max) * 100}%` }} />
            </div>
            <small>{item.label}</small>
          </div>
        ))}
      </div>
      <p className={styles.chartNote}>
        {period.range}. Profile visits do not identify a unique customer or distinguish a
        QR scan from an NFC tap.
      </p>
    </section>
  );
}

function LinkInsights({ period }) {
  const max = Math.max(...period.links.map((item) => item.value));
  return (
    <section className={styles.panel} aria-labelledby="link-insights-title">
      <div className={styles.panelHeading}>
        <div>
          <span className={styles.kicker}>WHAT CAUGHT THEIR EYE</span>
          <h2 id="link-insights-title">Every link tells a story.</h2>
        </div>
        <Link2 size={20} />
      </div>
      <table className={styles.linkTable}>
        <caption>Sample link clicks in the selected period</caption>
        <thead>
          <tr>
            <th scope="col">Destination</th>
            <th scope="col">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {period.links.map((item) => (
            <tr key={item.label}>
              <th scope="row">
                {item.label}
                <span className={styles.linkTrack} aria-hidden="true">
                  <span style={{ width: `${(item.value / max) * 100}%` }} />
                </span>
              </th>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.chartNote}>
        Clicks are actions, not confirmed reviews, bookings or sales. One visit can
        produce several clicks.
      </p>
    </section>
  );
}

export function SmartLinkAnalytics({ profile }) {
  const [periodKey, setPeriodKey] = useState("month");
  const [downloadStatus, setDownloadStatus] = useState("");
  const period = analyticsPeriods[periodKey];
  const plan = getSmartLinkPackage(profile.packageId);
  const isPro = plan.id === "pro";

  function exportReport() {
    downloadTextFile(
      createAnalyticsCsv(periodKey),
      `himalayan-hotel-demo-${periodKey}.csv`,
      "text/csv;charset=utf-8",
    );
    setDownloadStatus(
      "Sample CSV report downloaded. It contains demonstration data only.",
    );
  }

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.dashboard}>
        <aside className={styles.sidebar}>
          <a className={styles.brand} href="/">
            <img src="/bhanova-mark.png" alt="" width={34} height={34} />
            <strong>
              Bhanova<span>SMARTLINK</span>
            </strong>
          </a>
          <span className={styles.workspace}>BUSINESS WORKSPACE</span>
          <nav aria-label="Dashboard navigation">
            <span className={styles.active}>
              <LayoutDashboard size={18} />
              Overview
            </span>
            <a href={plan.demoUrl}>
              <Eye size={18} />
              View business profile
            </a>
            <a href="/smartlink#smartlink-packages">
              <BarChart3 size={18} />
              Compare packages
            </a>
          </nav>
          <div className={styles.sidebarNote}>
            <span>DEMO WORKSPACE</span>
            <p>
              Explore the experience.
              <br />
              All numbers are sample data.
            </p>
          </div>
          <div className={styles.business}>
            <span>{profile.monogram}</span>
            <div>
              <strong>{profile.name}</strong>
              <small>{plan.name} example</small>
            </div>
          </div>
        </aside>

        <div className={styles.content}>
          <div className={styles.topbar}>
            <a href={plan.demoUrl}>
              <ArrowLeft size={15} />
              Back to profile
            </a>
            <span>
              <i /> Public demo · No live tracking
            </span>
          </div>
          <header className={styles.header}>
            <div>
              <span className={styles.kicker}>
                {isPro ? "THE PRO PERSPECTIVE" : "THE TAP OVERVIEW"}
              </span>
              <h1>
                A clearer view of
                <br />
                <em>your connections.</em>
              </h1>
              <p>
                {profile.name} ·{" "}
                {isPro
                  ? "Profile visits, link insights and reports."
                  : "A simple view of profile activity."}
              </p>
            </div>
            {isPro && (
              <button type="button" className={styles.export} onClick={exportReport}>
                <Download size={17} />
                Download sample CSV
              </button>
            )}
          </header>
          <div className={styles.controls}>
            <span>
              <CalendarDays size={17} />
              {period.range}
            </span>
            <div
              className={styles.periodButtons}
              aria-label="Choose sample reporting period"
            >
              {Object.entries(analyticsPeriods).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={key === periodKey}
                  onClick={() => {
                    setPeriodKey(key);
                    setDownloadStatus("");
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className={`${styles.metrics} ${!isPro ? styles.basicMetrics : ""}`}>
            <MetricCard
              label="Profile visits"
              value={period.profileOpens}
              icon={Eye}
              note="Sample profile opens"
            />
            {isPro ? (
              <>
                <MetricCard
                  label="WhatsApp clicks"
                  value={period.whatsappClicks}
                  icon={MessageCircle}
                  note="Sample link activity"
                />
                <MetricCard
                  label="Review clicks"
                  value={period.reviewClicks}
                  icon={Star}
                  note="Clicks, not posted reviews"
                />
                <MetricCard
                  label="Booking clicks"
                  value={period.bookingClicks}
                  icon={CalendarDays}
                  note="Clicks, not reservations"
                />
              </>
            ) : (
              <div className={styles.basicIntro}>
                <span>BASIC ANALYTICS PREVIEW</span>
                <h2>Start with the essentials.</h2>
                <p>
                  See example profile visits by period. Pro adds a view of individual link
                  clicks and downloadable sample reports.
                </p>
              </div>
            )}
          </div>
          <div className={`${styles.panels} ${!isPro ? styles.singlePanel : ""}`}>
            <VisitChart period={period} />
            {isPro && <LinkInsights period={period} />}
          </div>
          <section className={styles.disclosure} aria-label="Demo data information">
            <div>
              <span>SAMPLE DATA, CLEARLY MARKED</span>
              <h2>This is a product preview.</h2>
              <p>
                These figures are fixed examples. Live analytics need event tracking, a
                database and a protected owner account. The website does not collect
                visitor analytics or provide an admin login.
              </p>
            </div>
            <a href={createPackageEnquiryUrl(plan)} target="_blank" rel="noreferrer">
              Discuss {plan.name}
              <ArrowUpRight size={17} />
            </a>
          </section>
          <p className={styles.status} role="status">
            {downloadStatus}
          </p>
        </div>
      </div>
    </main>
  );
}
