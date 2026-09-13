import { ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";

export function WebsiteDemo({ demo }) {
  return (
    <div className={`website-demo theme-${demo.accent}`}>
      <nav className="sample-nav">
        <a className="sample-brand" href="#demo-preview">
          <i>{demo.brand.charAt(0)}</i>
          <strong>{demo.brand}</strong>
        </a>
        <div>
          {demo.nav.map((item) => (
            <a href="#demo-features" key={item}>
              {item}
            </a>
          ))}
        </div>
        <a className="demo-control" href="#demo-enquiry">
          {demo.primary}
        </a>
      </nav>
      <section className="sample-hero">
        <div className="sample-copy">
          <span>{demo.eyebrow}</span>
          <h1>{demo.headline}</h1>
          <p>{demo.description}</p>
          <div className="sample-actions">
            <a className="demo-control" href="#demo-enquiry">
              {demo.primary} <ArrowUpRight />
            </a>
            <a href="#demo-features">
              Explore more <ChevronRight />
            </a>
          </div>
        </div>
        <div className="sample-visual">
          <div className="visual-card card-main">
            <small>Illustrative website content</small>
            <strong>{demo.stats[1][0]}</strong>
            <span>{demo.stats[1][1]}</span>
            <div className="bars">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="visual-card card-float">
            <Sparkles />
            <span>
              <strong>Designed to convert</strong>
              <small>Clear. Fast. Responsive.</small>
            </span>
          </div>
        </div>
      </section>
      <section className="sample-stats">
        {demo.stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>
      <section className="sample-features" id="demo-features">
        <span>WHAT THIS SOLUTION INCLUDES</span>
        <h2>Everything your audience needs.</h2>
        <div>
          {demo.features.map((feature, index) => (
            <article key={feature}>
              <b>0{index + 1}</b>
              <h3>{feature}</h3>
              <p>
                Thoughtfully structured, easy to manage and optimised for mobile visitors.
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
