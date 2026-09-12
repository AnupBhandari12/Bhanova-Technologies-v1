"use client";

import { ArrowUpRight, BadgeDollarSign, Bot, Braces, Building2, CalendarCheck, Camera, Check, ChevronRight, Clock3, FileSearch, Globe2, GraduationCap, Headphones, LayoutDashboard, Layers3, Mail, Menu, MessageCircle, MessagesSquare, PackageSearch, ShieldCheck, ShoppingBag, Sparkles, UsersRound, UtensilsCrossed, Workflow, X, Zap } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const WHATSAPP_URL = "https://wa.me/9779702432556?text=Hello%20Bhanova%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20website%2C%20software%2C%20or%20AI%20project.";

const services = [
  { no:"01", icon:Globe2, title:"Website Development", price:"Starting from NPR 20,000", text:"Professional, mobile-first websites that build trust and turn visitors into genuine enquiries.", audience:"Ideal for local businesses, consultancies and education institutes.", features:["Up to 5 essential pages","Responsive design for every device","WhatsApp, contact form and Google Maps","Basic SEO and one month of support"], examples:[
    {slug:"corporate-website",icon:Building2,title:"Corporate Website",type:"Professional presence",text:"A credible company website with services, portfolio, team and enquiry flow."},
    {slug:"school-consultancy",icon:GraduationCap,title:"School & Consultancy",type:"Education platform",text:"Courses, admissions, notices, results and student enquiry in one clear experience."},
    {slug:"ecommerce-store",icon:ShoppingBag,title:"E-commerce Store",type:"Online selling",text:"A mobile-friendly product catalogue, cart, order flow and payment-ready setup."},
    {slug:"restaurant-website",icon:UtensilsCrossed,title:"Restaurant Website",type:"Local business",text:"Menu, gallery, location, reservations and direct WhatsApp ordering."},
  ] },
  { no:"02", icon:Braces, title:"Custom Software", price:"Starting from NPR 40,000", text:"Purpose-built dashboards and web applications that simplify daily operations and keep information organised.", audience:"Ideal for teams replacing spreadsheets or manual processes.", features:["Secure login and role-based access","Admin dashboard and database","Forms, reports and workflow automation","Deployment, training and technical support"], examples:[
    {slug:"business-dashboard",icon:LayoutDashboard,title:"Business Dashboard",type:"Management system",text:"Track customers, sales, expenses and performance from one secure dashboard."},
    {slug:"student-management",icon:GraduationCap,title:"Student Management",type:"Education software",text:"Manage students, attendance, fees, classes, exams and reports efficiently."},
    {slug:"inventory-system",icon:PackageSearch,title:"Inventory System",type:"Operations software",text:"Monitor products, stock movement, suppliers and low-stock alerts in real time."},
    {slug:"booking-platform",icon:CalendarCheck,title:"Booking Platform",type:"Service workflow",text:"Let customers book appointments while your team manages schedules and status."},
  ] },
  { no:"03", icon:Bot, title:"AI & Automation", price:"Starting from NPR 30,000", text:"Practical AI tools that answer customer questions, work with business documents and reduce repetitive tasks.", audience:"Ideal for organisations ready to improve response time and productivity.", features:["Website chatbot or FAQ assistant","Document-based question answering","Lead collection and smart workflows","API integration and usage guidance"], examples:[
    {slug:"ai-support-assistant",icon:MessagesSquare,title:"AI Support Assistant",type:"Customer experience",text:"Answer common customer questions instantly and guide visitors to the right service."},
    {slug:"document-qa",icon:FileSearch,title:"Document Q&A",type:"Knowledge assistant",text:"Search policies, notes or learning materials and receive clear, source-based answers."},
    {slug:"workflow-automation",icon:Workflow,title:"Workflow Automation",type:"Business automation",text:"Connect forms, alerts and follow-ups to reduce repetitive administrative work."},
    {slug:"ai-lead-assistant",icon:Bot,title:"AI Lead Assistant",type:"Sales support",text:"Qualify enquiries, capture requirements and organise leads for faster follow-up."},
  ] },
];

const steps = [
  ["01","Discovery","We define your goals, audience, required features and a realistic project scope."],
  ["02","Design","We prepare the structure and visual direction for your approval before development."],
  ["03","Development","We build, test and share progress at agreed project milestones."],
  ["04","Launch & Support","We deploy the final product, guide your team and provide post-launch support."],
];

const trustPoints = [
  { icon:BadgeDollarSign, title:"Transparent pricing", text:"A clear project scope, payment schedule and cost breakdown before work begins." },
  { icon:Clock3, title:"Milestone-based delivery", text:"Review progress at agreed stages and know exactly what comes next." },
  { icon:ShieldCheck, title:"Built with care", text:"Responsive, secure and maintainable solutions tested before launch." },
  { icon:Headphones, title:"Post-launch support", text:"Practical guidance and technical support after your product goes live." },
];

function Logo(){return <span className="logo-mark" aria-hidden="true"><span>B</span><i>✦</i></span>}
function BrandLogo(){return <img className="brand-logo-image" src="/bhanova-logo.png" alt="Bhanova Technologies"/>}

export default function Home(){
  const [menu,setMenu]=useState(false);
  function handleEnquirySubmit(event){
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const message=[
      "Hello Bhanova Technologies, I would like to discuss a project.",
      "",
      `Name: ${form.get("name")}`,
      `Phone / Email: ${form.get("contact")}`,
      `Service: ${form.get("service")}`,
      `Estimated budget: ${form.get("budget")}`,
      `Project details: ${form.get("details")}`
    ].join("\n");
    window.open(`https://wa.me/9779702432556?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  }
  return <main>
    <header className="header">
      <a className="logo official-logo" href="#home"><BrandLogo/></a>
      <nav className={menu?"nav open":"nav"}>
        <a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#process" onClick={()=>setMenu(false)}>Process</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#enquiry" onClick={()=>setMenu(false)}>Contact</a>
        <a className="nav-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={()=>setMenu(false)}>Start a project <ArrowUpRight size={16}/></a>
      </nav>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="home">
      <div className="hero-glow"/>
      <div className="hero-copy">
        <div className="pill"><span/> Technology partner based in Nepal</div>
        <h1>Websites, software &amp; AI built for <em>real business growth.</em></h1>
        <p>We help education institutes and growing businesses turn ideas into credible, easy-to-use digital products that attract customers and simplify work.</p>
        <div className="hero-actions"><a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Get a free project consultation <MessageCircle/></a><a className="btn btn-ghost" href="#work">Explore our work <ChevronRight/></a></div>
        <div className="hero-reassurance"><span><Check/>No-obligation first conversation</span><span><Check/>Clear scope before development</span></div>
        <div className="hero-proof"><div><strong>3</strong><span>Specialised services</span></div><i/><div><strong>24h</strong><span>Response target</span></div><i/><div><strong>Nepal</strong><span>Local communication</span></div></div>
      </div>
      <div className="showcase" aria-label="Digital product dashboard preview">
        <div className="showcase-top"><div className="dots"><i/><i/><i/></div><span>bhanova / live-project</span><div className="online"><i/> Online</div></div>
        <div className="showcase-body">
          <aside><Logo/><span className="active"><Layers3/>Overview</span><span><Zap/>Activity</span><span><Globe2/>Website</span><span><Bot/>AI tools</span></aside>
          <div className="dash"><div className="dash-heading"><div><small>PROJECT OVERVIEW</small><h3>Growth dashboard</h3></div><button>Live</button></div><div className="metrics"><div><small>Visitors</small><b>12.8K</b><span>+24%</span></div><div><small>Leads</small><b>684</b><span>+18%</span></div><div><small>Saved time</small><b>42h</b><span>AI</span></div></div><div className="chart"><div className="chart-label"><span>Weekly growth</span><b>+31.4%</b></div><svg viewBox="0 0 500 170" role="img" aria-label="Upward growth chart"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#5ee7f2" stopOpacity=".35"/><stop offset="1" stopColor="#5ee7f2" stopOpacity="0"/></linearGradient></defs><path d="M0 145 C55 132 68 105 120 112 S190 142 235 88 S310 92 350 52 S430 72 500 18 L500 170 L0 170Z" fill="url(#area)"/><path d="M0 145 C55 132 68 105 120 112 S190 142 235 88 S310 92 350 52 S430 72 500 18" fill="none" stroke="#5ee7f2" strokeWidth="4" strokeLinecap="round"/></svg></div></div>
        </div>
        <div className="float-tag tag-one"><Sparkles/><span><b>AI powered</b><small>Smarter workflows</small></span></div><div className="float-tag tag-two"><Check/><span><b>Project ready</b><small>Built to launch</small></span></div>
      </div>
    </section>

    <section className="ticker"><div><span>WEBSITES</span><i>✦</i><span>SOFTWARE</span><i>✦</i><span>AI AUTOMATION</span><i>✦</i><span>DIGITAL GROWTH</span><i>✦</i></div></section>

    <section className="services section" id="services">
      <div className="section-intro"><div><span className="kicker">OUR SERVICES</span><h2>Choose the right solution.<br/><em>See what we can build.</em></h2></div><p>Explore real interface examples, compare what is included and start a conversation when you find the right fit.</p></div>
      <div className="service-grid">{services.map(({no,icon:Icon,title,price,text,audience,features,examples})=><article className="service-card" key={title}><div className="card-head"><span>{no}</span><div><Icon/></div></div><h3>{title}</h3><span className="service-price">{price}</span><p>{text}</p><p className="service-audience">{audience}</p><ul className="service-features">{features.map(feature=><li key={feature}><Check/>{feature}</li>)}</ul><div className="service-actions"><Dialog><DialogTrigger asChild><button className="example-button">View examples <Layers3/></button></DialogTrigger><DialogContent className="service-modal"><DialogHeader><span className="modal-kicker">WHAT WE CAN BUILD</span><DialogTitle>{title} Examples</DialogTitle><DialogDescription>Select any example to explore a complete UI concept created for that type of product.</DialogDescription></DialogHeader><div className="example-grid">{examples.map(({slug,icon:ExampleIcon,title:exampleTitle,type,text:exampleText},index)=><a className="example-card" href={`/examples/${slug}`} key={exampleTitle}><div className={`example-preview preview-${index+1}`}><div className="preview-bar"><i/><i/><i/></div><ExampleIcon/></div><span>{type}</span><h4>{exampleTitle}</h4><p>{exampleText}</p><b className="open-demo">Open UI demo <ArrowUpRight/></b></a>)}</div><div className="modal-cta"><div><strong>Have a similar idea?</strong><span>Tell us what you need and receive a practical recommendation.</span></div><a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle/> Build something similar</a></div></DialogContent></Dialog><a className="discuss-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Discuss project <ArrowUpRight/></a></div></article>)}</div>
    </section>

    <section className="trust section" id="why-us"><div className="trust-heading"><span className="kicker">A RELIABLE WAY TO BUILD</span><h2>Professional work.<br/><em>Clear commitments.</em></h2><p>From the first conversation to post-launch support, every project is handled with clarity, accountability and respect for your goals.</p></div><div className="trust-grid">{trustPoints.map(({icon:Icon,title,text},index)=><article key={title}><div><span>0{index+1}</span><i><Icon/></i></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="work section-dark" id="work">
      <div className="section-intro inverse"><div><span className="kicker">SELECTED WORK</span><h2>Purposeful products.<br/><em>Thoughtful execution.</em></h2></div><p>A selection of product concepts that demonstrate our approach to design, development and problem-solving.</p></div>
      <article className="case-study"><div className="case-copy"><span className="case-type">AI EDUCATION · PRODUCT DESIGN</span><h3>PadhAI</h3><p>An AI-powered study workspace that turns learning materials into summaries, quizzes, flashcards and focused study plans.</p><div className="case-points"><span><Check/>Document learning</span><span><Check/>Smart quizzes</span><span><Check/>Progress tracking</span></div><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Build something similar <ArrowUpRight/></a></div><div className="product-window"><div className="window-top"><i/><i/><i/><span>Student workspace</span></div><div className="product-body"><aside><b>पढAI</b><i/><i/><i/><i/></aside><div className="study"><small>GOOD MORNING</small><h4>Ready to learn?</h4><div className="study-grid"><div className="study-main"><span>Today&apos;s focus</span><b>Computer Science</b><div className="progress"><i/></div><small>68% complete</small></div><div className="score"><span>Quiz score</span><b>86%</b><small>Great progress</small></div></div><div className="notes"><i/><i/><i/></div></div></div></div></article>
      <div className="mini-work"><article><div className="mini-visual analytics"><div><span/><span/><span/></div><b>Business analytics</b></div><small>OPERATIONS DASHBOARD</small><h3>One view. Better decisions.</h3></article><article><div className="mini-visual auth"><div className="auth-card"><Logo/><i/><i/><button>Continue</button></div></div><small>SECURE PLATFORM</small><h3>Simple, trusted access.</h3></article></div>
    </section>

    <section className="process section" id="process"><div className="process-title"><span className="kicker">HOW WE WORK</span><h2>A clear path from<br/>idea to <em>launch.</em></h2><p>A structured, transparent process keeps the project focused and ensures you always know what comes next.</p></div><div className="steps">{steps.map(([no,title,text])=><article key={no}><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="about" id="about"><div className="about-mark"><img src="/bhanova-mark.png" alt="Bhanova Technologies symbol"/><div className="rings"/></div><div className="about-text"><span className="kicker">WHY BHANOVA</span><h2>Local understanding.<br/><em>Professional delivery.</em></h2><p><strong>Bhanova Technologies</strong> is a Nepal-based technology company focused on helping education institutes and growing businesses move forward with reliable digital solutions. We combine thoughtful planning, modern development and straightforward communication to build products that are useful from day one.</p><div className="values"><span><b>01</b>Clear scope and transparent pricing</span><span><b>02</b>Solutions aligned with business goals</span><span><b>03</b>Reliable support beyond launch</span></div></div></section>

    <section className="enquiry section" id="enquiry">
      <div className="enquiry-intro"><span className="kicker">PROJECT ENQUIRY</span><h2>Tell us what you<br/><em>want to build.</em></h2><p>Share a few details and we&apos;ll open a structured WhatsApp message for you. You can review it before sending.</p><div className="enquiry-benefits"><span><Check/>Free initial consultation</span><span><Check/>Practical recommendation</span><span><Check/>Response target within 24 hours</span></div></div>
      <form className="enquiry-form" onSubmit={handleEnquirySubmit}>
        <div className="form-row"><label><span>Your name *</span><input name="name" type="text" placeholder="Full name" required/></label><label><span>Phone or email *</span><input name="contact" type="text" placeholder="How should we reach you?" required/></label></div>
        <div className="form-row"><label><span>Service needed *</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Website Development</option><option>Custom Software</option><option>AI &amp; Automation</option><option>Not sure yet</option></select></label><label><span>Estimated budget</span><select name="budget" defaultValue="Not decided yet"><option>Not decided yet</option><option>NPR 20,000–40,000</option><option>NPR 40,000–80,000</option><option>NPR 80,000+</option></select></label></div>
        <label><span>Tell us about your project *</span><textarea name="details" rows="5" placeholder="What do you want to build, who is it for, and what result do you expect?" required/></label>
        <button className="btn btn-primary enquiry-submit" type="submit"><MessageCircle/> Review &amp; send on WhatsApp <ArrowUpRight/></button>
        <small>Your details stay in your browser until you choose to send the WhatsApp message.</small>
      </form>
    </section>

    <section className="contact" id="contact"><div className="contact-orb"><Sparkles/></div><span className="kicker">LET&apos;S BUILD SOMETHING VALUABLE</span><h2>Your next digital product<br/><em>starts with a conversation.</em></h2><p>Share your idea, budget or current challenge. We&apos;ll recommend a practical solution and explain the next step clearly.</p><a className="btn btn-primary contact-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle/> Get a free project consultation</a><span className="contact-note"><Check/> No obligation · Clear response · Direct conversation</span><div className="contact-methods"><a href="mailto:bhanovatechnologies@gmail.com"><i><Mail/></i><span><small>EMAIL US</small><strong>bhanovatechnologies@gmail.com</strong></span><ArrowUpRight/></a><a href="https://www.linkedin.com/company/bhanova-technologies/" target="_blank" rel="noreferrer"><i><Building2/></i><span><small>CONNECT ON LINKEDIN</small><strong>Bhanova Technologies</strong></span><ArrowUpRight/></a><a href="https://www.instagram.com/bhanovatechnologies/" target="_blank" rel="noreferrer"><i><Camera/></i><span><small>FOLLOW ON INSTAGRAM</small><strong>@bhanovatechnologies</strong></span><ArrowUpRight/></a><a href="https://www.facebook.com/Bhanova" target="_blank" rel="noreferrer"><i><UsersRound/></i><span><small>FOLLOW ON FACEBOOK</small><strong>Bhanova Technologies</strong></span><ArrowUpRight/></a></div><div className="contact-actions"><span>Available Monday–Saturday · Nepal</span><a href="#home">Back to top <ArrowUpRight/></a></div></section>
    <footer><a className="logo official-logo footer-logo" href="#home"><BrandLogo/></a><p>Innovating From Nepal</p><div className="footer-socials"><a href="mailto:bhanovatechnologies@gmail.com" aria-label="Email Bhanova Technologies"><Mail/></a><a href="https://www.linkedin.com/company/bhanova-technologies/" target="_blank" rel="noreferrer" aria-label="Bhanova Technologies on LinkedIn"><Building2/></a><a href="https://www.instagram.com/bhanovatechnologies/" target="_blank" rel="noreferrer" aria-label="Bhanova Technologies on Instagram"><Camera/></a><a href="https://www.facebook.com/Bhanova" target="_blank" rel="noreferrer" aria-label="Bhanova Technologies on Facebook"><UsersRound/></a></div><small>© 2026 Bhanova Technologies</small></footer>
  </main>
}
