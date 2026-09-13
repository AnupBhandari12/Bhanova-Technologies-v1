import {
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  FileText,
  LayoutDashboard,
  Search,
  Users,
} from "lucide-react";

export function SoftwareDemo({ demo }) {
  return (
    <div className={`software-demo theme-${demo.accent}`}>
      <aside className="app-sidebar">
        <a className="app-logo" href="#demo-preview">
          <i>{demo.brand.charAt(0)}</i>
          <strong>{demo.brand}</strong>
        </a>
        <nav>
          <span className="active">
            <LayoutDashboard /> Overview
          </span>
          <span>
            <Users /> Customers
          </span>
          <span>
            <FileText /> Reports
          </span>
          <span>
            <BarChart3 /> Analytics
          </span>
        </nav>
        <small>Powered by Bhanova</small>
      </aside>
      <section className="app-main">
        <header>
          <div>
            <span>{demo.eyebrow}</span>
            <h1>{demo.headline}</h1>
          </div>
          <div className="app-tools">
            <span className="demo-control" aria-hidden="true">
              <Search />
            </span>
            <span className="demo-control" aria-hidden="true">
              <Bell />
            </span>
            <i>AB</i>
          </div>
        </header>
        <section className="metric-grid">
          {demo.stats.map(([value, label], index) => (
            <article key={label}>
              <div>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
              <i className={`trend trend-${index}`}>+{12 + index * 4}%</i>
            </article>
          ))}
        </section>
        <section className="dashboard-grid">
          <article className="chart-panel">
            <div className="panel-head">
              <div>
                <span>PERFORMANCE</span>
                <h2>Monthly overview</h2>
              </div>
              <b>Last 6 months</b>
            </div>
            <div className="big-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <svg viewBox="0 0 600 180">
                <path
                  d="M0 150 C80 135 100 95 170 112 S270 140 320 74 S420 88 470 42 S540 58 600 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </article>
          <article className="activity-panel">
            <div className="panel-head">
              <div>
                <span>SAMPLE ACTIVITY</span>
                <h2>Recent activity</h2>
              </div>
            </div>
            {demo.activity.map((item, index) => (
              <div className="activity-row" key={item}>
                <i>
                  <Check />
                </i>
                <span>
                  <strong>{item}</strong>
                  <small>
                    {index + 1} hour{index ? "s" : ""} ago
                  </small>
                </span>
              </div>
            ))}
          </article>
        </section>
        <section className="module-row">
          {demo.features.map((feature, index) => (
            <article key={feature}>
              <i>0{index + 1}</i>
              <div>
                <strong>{feature}</strong>
                <span>Configured for your workflow</span>
              </div>
              <ChevronRight />
            </article>
          ))}
        </section>
      </section>
    </div>
  );
}
