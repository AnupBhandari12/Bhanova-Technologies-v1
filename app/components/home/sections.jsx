import {
  ArrowUpRight,
  Bot,
  Building2,
  Camera,
  Check,
  ChevronRight,
  Globe2,
  Layers3,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  QrCode,
  Smartphone,
  Sparkles,
  Star,
  UsersRound,
  Zap,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CONTACT,
  PROCESS_STEPS,
  SERVICES,
  SMARTLINK_DEMOS,
  SOCIAL_LINKS,
  TRUST_POINTS,
} from "@/app/lib/site-content";
import { BrandLogo, BrandMark } from "./brand";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-copy">
        <div className="pill"><span /> Technology partner based in Nepal</div>
        <h1>
          Digital products that make your business <em>look credible and work smarter.</em>
        </h1>
        <p>
          Bhanova designs and develops modern websites, custom software and practical AI
          solutions for education institutes and growing businesses.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            Discuss your project <MessageCircle />
          </a>
          <a className="btn btn-ghost" href="#services">
            Explore solutions <ChevronRight />
          </a>
        </div>

        <div className="hero-reassurance">
          <span><Check /> Free initial conversation</span>
          <span><Check /> Clear scope before development</span>
        </div>

        <div className="hero-proof">
          <div><strong>3</strong><span>Specialised services</span></div>
          <i />
          <div><strong>24h</strong><span>Response target</span></div>
          <i />
          <div><strong>Nepal</strong><span>Local communication</span></div>
        </div>
      </div>

      <DashboardPreview />
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="showcase" aria-label="Digital product dashboard preview">
      <div className="showcase-top">
        <div className="dots"><i /><i /><i /></div>
        <span>bhanova / client-project</span>
        <div className="online"><i /> Live</div>
      </div>

      <div className="showcase-body">
        <aside>
          <BrandMark />
          <span className="active"><Layers3 /> Overview</span>
          <span><Zap /> Activity</span>
          <span><Globe2 /> Website</span>
          <span><Bot /> AI tools</span>
        </aside>

        <div className="dash">
          <div className="dash-heading">
            <div><small>PROJECT OVERVIEW</small><h3>Growth dashboard</h3></div>
            <button>Live</button>
          </div>
          <div className="metrics">
            <div><small>Visitors</small><b>12.8K</b><span>+24%</span></div>
            <div><small>Leads</small><b>684</b><span>+18%</span></div>
            <div><small>Saved time</small><b>42h</b><span>AI</span></div>
          </div>
          <div className="chart">
            <div className="chart-label"><span>Weekly growth</span><b>+31.4%</b></div>
            <svg viewBox="0 0 500 170" role="img" aria-label="Upward growth chart">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#5ee7f2" stopOpacity=".35" />
                  <stop offset="1" stopColor="#5ee7f2" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 145 C55 132 68 105 120 112 S190 142 235 88 S310 92 350 52 S430 72 500 18 L500 170 L0 170Z" fill="url(#area)" />
              <path d="M0 145 C55 132 68 105 120 112 S190 142 235 88 S310 92 350 52 S430 72 500 18" fill="none" stroke="#5ee7f2" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="float-tag tag-one"><Sparkles /><span><b>AI powered</b><small>Smarter workflows</small></span></div>
      <div className="float-tag tag-two"><Check /><span><b>Launch ready</b><small>Built with care</small></span></div>
    </div>
  );
}

export function ServiceTicker() {
  return (
    <section className="ticker" aria-label="Core capabilities">
      <div><span>WEBSITES</span><i>✦</i><span>SOFTWARE</span><i>✦</i><span>AI AUTOMATION</span><i>✦</i><span>SMARTLINK</span><i>✦</i></div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="services section" id="services">
      <SectionIntro
        eyebrow="OUR SERVICES"
        title={<>Solutions designed to create <em>real business value.</em></>}
        description="Choose a service, explore complete interface examples and see what Bhanova can build for your organisation."
      />

      <div className="service-grid">
        {SERVICES.map((service) => <ServiceCard service={service} key={service.title} />)}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="card-head"><span>{service.number}</span><div><Icon /></div></div>
      <h3>{service.title}</h3>
      <span className="service-price">{service.price}</span>
      <p>{service.description}</p>
      <p className="service-audience">{service.audience}</p>
      <ul className="service-features">
        {service.features.map((feature) => <li key={feature}><Check />{feature}</li>)}
      </ul>

      <div className="service-actions">
        <Dialog>
          <DialogTrigger asChild>
            <button className="example-button">View examples <Layers3 /></button>
          </DialogTrigger>
          <ServiceExamples service={service} />
        </Dialog>
        <a className="discuss-link" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
          Discuss project <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}

function ServiceExamples({ service }) {
  return (
    <DialogContent className="service-modal">
      <DialogHeader>
        <span className="modal-kicker">WHAT WE CAN BUILD</span>
        <DialogTitle>{service.title} Examples</DialogTitle>
        <DialogDescription>
          Open an example to explore a complete interface concept for that product.
        </DialogDescription>
      </DialogHeader>

      <div className="example-grid">
        {service.examples.map((example, index) => {
          const ExampleIcon = example.icon;
          return (
            <a className="example-card" href={`/examples/${example.slug}`} key={example.title}>
              <div className={`example-preview preview-${index + 1}`}>
                <div className="preview-bar"><i /><i /><i /></div>
                <ExampleIcon />
              </div>
              <span>{example.type}</span>
              <h4>{example.title}</h4>
              <p>{example.description}</p>
              <b className="open-demo">Open UI demo <ArrowUpRight /></b>
            </a>
          );
        })}
      </div>

      <div className="modal-cta">
        <div><strong>Have a similar idea?</strong><span>Tell us what you need and receive a practical recommendation.</span></div>
        <a className="btn btn-primary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle /> Build something similar
        </a>
      </div>
    </DialogContent>
  );
}

export function SmartLinkSection() {
  return (
    <section className="smartlink-product" id="smartlink">
      <div className="smartlink-copy">
        <span className="product-label"><Sparkles /> FEATURED PRODUCT</span>
        <span className="kicker">BHANOVA SMARTLINK</span>
        <h2>One QR.<br /><em>Every connection.</em></h2>
        <p>
          Give customers one polished mobile page to call, message, find your location,
          view important information, follow your social pages and leave a review.
        </p>
        <div className="smartlink-features">
          <span><Check /> Every important link in one place</span>
          <span><Check /> Custom design matched to your brand</span>
          <span><Check /> Works on Android and iPhone</span>
          <span><Check /> QR stand ready for your counter</span>
        </div>
        <div className="smartlink-example-label">EXPLORE LIVE EXAMPLES</div>
        <div className="smartlink-actions">
          <a className="btn smartlink-demo-btn" href={SMARTLINK_DEMOS.cafe} target="_blank" rel="noreferrer">Café demo <ArrowUpRight /></a>
          <a className="btn smartlink-demo-alt" href={SMARTLINK_DEMOS.bhanova} target="_blank" rel="noreferrer">Bhanova demo <ArrowUpRight /></a>
          <a className="btn smartlink-order-btn" href={CONTACT.smartLinkWhatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Get SmartLink</a>
        </div>
      </div>

      <SmartLinkPreview />
    </section>
  );
}

function SmartLinkPreview() {
  return (
    <div className="smartlink-visual" aria-label="Bhanova SmartLink product preview">
      <div className="smartlink-glow" aria-hidden="true" />
      <div className="smartlink-chip chip-review"><Star /><span><b>Google Review</b><small>Build trust faster</small></span></div>
      <div className="smartlink-chip chip-location"><MapPin /><span><b>Location</b><small>Easy directions</small></span></div>
      <div className="smartlink-chip chip-contact"><Smartphone /><span><b>Save Contact</b><small>One quick tap</small></span></div>
      <div className="qr-stand">
        <div className="stand-brand"><span>B</span><div><b>BHANOVA</b><small>SMARTLINK</small></div></div>
        <p>SCAN TO CONNECT</p>
        <div className="qr-frame"><QrCode /></div>
        <h3>Your Business</h3>
        <small>Everything in one place</small>
        <div className="stand-icons"><Link2 /><MessageCircle /><MapPin /><Star /></div>
      </div>
      <div className="stand-base" aria-hidden="true" />
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="trust section" id="why-us">
      <div className="trust-heading">
        <span className="kicker">A RELIABLE WAY TO BUILD</span>
        <h2>Professional work.<br /><em>Clear commitments.</em></h2>
        <p>From the first conversation to post-launch support, every project is handled with clarity, accountability and respect for your goals.</p>
      </div>
      <div className="trust-grid">
        {TRUST_POINTS.map(({ icon: Icon, title, description }, index) => (
          <article key={title}>
            <div><span>0{index + 1}</span><i><Icon /></i></div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WorkSection() {
  return (
    <section className="work section-dark" id="work">
      <SectionIntro
        inverse
        eyebrow="SELECTED WORK"
        title={<>Purposeful products.<br /><em>Thoughtful execution.</em></>}
        description="Product concepts that demonstrate our approach to design, development and practical problem-solving."
      />
      <article className="case-study">
        <div className="case-copy">
          <span className="case-type">AI EDUCATION · PRODUCT DESIGN</span>
          <h3>PadhAI</h3>
          <p>An AI-powered study workspace that turns learning materials into summaries, quizzes, flashcards and focused study plans.</p>
          <div className="case-points"><span><Check /> Document learning</span><span><Check /> Smart quizzes</span><span><Check /> Progress tracking</span></div>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">Build something similar <ArrowUpRight /></a>
        </div>
        <ProductWindow />
      </article>
      <div className="mini-work">
        <article><div className="mini-visual analytics"><div><span /><span /><span /></div><b>Business analytics</b></div><small>OPERATIONS DASHBOARD</small><h3>One view. Better decisions.</h3></article>
        <article><div className="mini-visual auth"><div className="auth-card"><BrandMark /><i /><i /><button>Continue</button></div></div><small>SECURE PLATFORM</small><h3>Simple, trusted access.</h3></article>
      </div>
    </section>
  );
}

function ProductWindow() {
  return (
    <div className="product-window">
      <div className="window-top"><i /><i /><i /><span>Student workspace</span></div>
      <div className="product-body">
        <aside><b>पढAI</b><i /><i /><i /><i /></aside>
        <div className="study">
          <small>GOOD MORNING</small><h4>Ready to learn?</h4>
          <div className="study-grid">
            <div className="study-main"><span>Today&apos;s focus</span><b>Computer Science</b><div className="progress"><i /></div><small>68% complete</small></div>
            <div className="score"><span>Quiz score</span><b>86%</b><small>Great progress</small></div>
          </div>
          <div className="notes"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="process section" id="process">
      <div className="process-title"><span className="kicker">HOW WE WORK</span><h2>A clear path from<br />idea to <em>launch.</em></h2><p>A structured process keeps the project focused and ensures you always know what comes next.</p></div>
      <div className="steps">
        {PROCESS_STEPS.map(([number, title, description]) => (
          <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-mark"><img src="/bhanova-mark.png" alt="Bhanova Technologies symbol" /><div className="rings" /></div>
      <div className="about-text">
        <span className="kicker">WHY BHANOVA</span>
        <h2>Local understanding.<br /><em>Professional delivery.</em></h2>
        <p><strong>Bhanova Technologies</strong> is a Nepal-based technology company helping education institutes and growing businesses move forward with reliable digital solutions. We combine thoughtful planning, modern development and straightforward communication to build products that are useful from day one.</p>
        <div className="values"><span><b>01</b> Clear scope and transparent pricing</span><span><b>02</b> Solutions aligned with business goals</span><span><b>03</b> Reliable support beyond launch</span></div>
      </div>
    </section>
  );
}

export function EnquirySection({ onSubmit }) {
  return (
    <section className="enquiry section" id="enquiry">
      <div className="enquiry-intro">
        <span className="kicker">PROJECT ENQUIRY</span>
        <h2>Tell us what you<br /><em>want to build.</em></h2>
        <p>Share a few details and we&apos;ll prepare a structured WhatsApp message. You can review it before sending.</p>
        <div className="enquiry-benefits"><span><Check /> Free initial consultation</span><span><Check /> Practical recommendation</span><span><Check /> Response target within 24 hours</span></div>
      </div>
      <form className="enquiry-form" onSubmit={onSubmit}>
        <div className="form-row">
          <label><span>Your name *</span><input name="name" type="text" placeholder="Full name" required /></label>
          <label><span>Phone or email *</span><input name="contact" type="text" placeholder="How should we reach you?" required /></label>
        </div>
        <div className="form-row">
          <label><span>Service needed *</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Website Development</option><option>Custom Software</option><option>AI &amp; Automation</option><option>Bhanova SmartLink</option><option>Not sure yet</option></select></label>
          <label><span>Estimated budget</span><select name="budget" defaultValue="Not decided yet"><option>Not decided yet</option><option>NPR 20,000–40,000</option><option>NPR 40,000–80,000</option><option>NPR 80,000+</option></select></label>
        </div>
        <label><span>Tell us about your project *</span><textarea name="details" rows="5" placeholder="What do you want to build, who is it for, and what result do you expect?" required /></label>
        <button className="btn btn-primary enquiry-submit" type="submit"><MessageCircle /> Review &amp; send on WhatsApp <ArrowUpRight /></button>
        <small>Your details stay in your browser until you choose to send the WhatsApp message.</small>
      </form>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-orb"><Sparkles /></div>
      <span className="kicker">LET&apos;S BUILD SOMETHING VALUABLE</span>
      <h2>Your next digital product<br /><em>starts with a conversation.</em></h2>
      <p>Share your idea, budget or current challenge. We&apos;ll recommend a practical solution and explain the next step clearly.</p>
      <a className="btn btn-primary contact-button" href={CONTACT.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> Get a free project consultation</a>
      <span className="contact-note"><Check /> No obligation · Clear response · Direct conversation</span>
      <div className="contact-methods">
        <ContactMethod href={`mailto:${CONTACT.email}`} icon={Mail} label="EMAIL US" value={CONTACT.email} />
        <ContactMethod href={SOCIAL_LINKS.linkedin} icon={Building2} label="CONNECT ON LINKEDIN" value="Bhanova Technologies" external />
        <ContactMethod href={SOCIAL_LINKS.instagram} icon={Camera} label="FOLLOW ON INSTAGRAM" value="@bhanovatechnologies" external />
        <ContactMethod href={SOCIAL_LINKS.facebook} icon={UsersRound} label="FOLLOW ON FACEBOOK" value="Bhanova Technologies" external />
      </div>
      <div className="contact-actions"><span>Available Monday–Saturday · Nepal</span><a href="#home">Back to top <ArrowUpRight /></a></div>
    </section>
  );
}

function ContactMethod({ href, icon: Icon, label, value, external = false }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <i><Icon /></i><span><small>{label}</small><strong>{value}</strong></span><ArrowUpRight />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="logo official-logo footer-logo" href="#home"><BrandLogo /></a>
      <p>Innovating From Nepal</p>
      <div className="footer-socials">
        <a href={`mailto:${CONTACT.email}`} aria-label="Email Bhanova Technologies"><Mail /></a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="Bhanova Technologies on LinkedIn"><Building2 /></a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Bhanova Technologies on Instagram"><Camera /></a>
        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Bhanova Technologies on Facebook"><UsersRound /></a>
      </div>
      <small>© 2026 Bhanova Technologies</small>
    </footer>
  );
}

function SectionIntro({ eyebrow, title, description, inverse = false }) {
  return (
    <div className={inverse ? "section-intro inverse" : "section-intro"}>
      <div><span className="kicker">{eyebrow}</span><h2>{title}</h2></div>
      <p>{description}</p>
    </div>
  );
}
