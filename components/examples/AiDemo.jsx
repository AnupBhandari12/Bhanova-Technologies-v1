import { ArrowUpRight, Bell, Bot, Check, ChevronRight, Sparkles } from "lucide-react";

export function AiDemo({ demo }) {
  return (
    <div className={`ai-demo theme-${demo.accent}`}>
      <nav className="ai-nav">
        <a className="ai-brand" href="#demo-preview">
          <i>
            <Sparkles />
          </i>
          <span>
            <strong>{demo.brand}</strong>
            <small>Intelligent workspace</small>
          </span>
        </a>
        <div>
          <span>
            <i />
            Demo preview
          </span>
          <span className="demo-control" aria-hidden="true">
            <Bell />
          </span>
          <b>AB</b>
        </div>
      </nav>
      <section className="ai-main">
        <section className="ai-intro">
          <span>{demo.eyebrow}</span>
          <h1>{demo.headline}</h1>
          <p>{demo.description}</p>
          <div className="ai-benefits">
            {demo.features.map((item) => (
              <span key={item}>
                <Check />
                {item}
              </span>
            ))}
          </div>
        </section>
        <section className="assistant-window">
          <header>
            <div>
              <i>
                <Bot />
              </i>
              <span>
                <strong>{demo.brand}</strong>
                <small>Illustrative conversation</small>
              </span>
            </div>
            <b>
              <i />
              AI concept
            </b>
          </header>
          <div className="conversation">
            <div className="message user-message">
              <span>You</span>
              <p>{demo.prompt}</p>
            </div>
            <div className="message ai-message">
              <span>
                <Sparkles /> AI Assistant
              </span>
              <p>{demo.reply}</p>
              <small>Sample answer — no AI service is connected in this preview.</small>
            </div>
          </div>
          <footer>
            <span>Ask a question...</span>
            <span className="demo-control" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </footer>
        </section>
      </section>
      <section className="ai-process">
        <div>
          <span>01</span>
          <strong>Customer asks</strong>
          <small>Natural conversation</small>
        </div>
        <ChevronRight />
        <div>
          <span>02</span>
          <strong>AI understands</strong>
          <small>Uses your business knowledge</small>
        </div>
        <ChevronRight />
        <div>
          <span>03</span>
          <strong>Action happens</strong>
          <small>Answer, capture or automate</small>
        </div>
      </section>
    </div>
  );
}
