import { ArrowLeft, ArrowUpRight, BarChart3, Bell, Bot, Check, ChevronRight, FileText, LayoutDashboard, MessageCircle, Search, Sparkles, Users } from "lucide-react";
import { exampleDemos, exampleSlugs } from "@/lib/example-demos";
import "./example.css";

const WHATSAPP_NUMBER = "9779702432556";

export function generateStaticParams() {
  return exampleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const demo = exampleDemos[slug];
  return { title: demo ? `${demo.label} Demo | Bhanova Technologies` : "Demo | Bhanova Technologies", description: demo?.description };
}

function DemoTopbar({ demo }) {
  return <div className="demo-topbar"><a href="/#services"><ArrowLeft/> Back to Bhanova</a><span>Interactive concept preview</span><a className="topbar-cta" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Bhanova Technologies, I am interested in a ${demo.label}.`)}`} target="_blank" rel="noreferrer">Build something similar <ArrowUpRight/></a></div>;
}

function WebsiteDemo({ demo }) {
  return <div className={`website-demo theme-${demo.accent}`}><nav className="sample-nav"><a className="sample-brand" href="#"><i>{demo.brand.charAt(0)}</i><strong>{demo.brand}</strong></a><div>{demo.nav.map(item=><a href="#demo-features" key={item}>{item}</a>)}</div><button>{demo.primary}</button></nav><main className="sample-hero"><div className="sample-copy"><span>{demo.eyebrow}</span><h1>{demo.headline}</h1><p>{demo.description}</p><div className="sample-actions"><button>{demo.primary} <ArrowUpRight/></button><a href="#demo-features">Explore more <ChevronRight/></a></div></div><div className="sample-visual"><div className="visual-card card-main"><small>Trusted by growing organisations</small><strong>{demo.stats[1][0]}</strong><span>{demo.stats[1][1]}</span><div className="bars"><i/><i/><i/><i/></div></div><div className="visual-card card-float"><Sparkles/><span><strong>Designed to convert</strong><small>Clear. Fast. Responsive.</small></span></div></div></main><section className="sample-stats">{demo.stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section><section className="sample-features" id="demo-features"><span>WHAT THIS SOLUTION INCLUDES</span><h2>Everything your audience needs.</h2><div>{demo.features.map((feature,index)=><article key={feature}><b>0{index+1}</b><h3>{feature}</h3><p>Thoughtfully structured, easy to manage and optimised for mobile visitors.</p></article>)}</div></section></div>;
}

function SoftwareDemo({ demo }) {
  return <div className={`software-demo theme-${demo.accent}`}><aside className="app-sidebar"><a className="app-logo" href="#"><i>{demo.brand.charAt(0)}</i><strong>{demo.brand}</strong></a><nav><span className="active"><LayoutDashboard/> Overview</span><span><Users/> Customers</span><span><FileText/> Reports</span><span><BarChart3/> Analytics</span></nav><small>Powered by Bhanova</small></aside><main className="app-main"><header><div><span>{demo.eyebrow}</span><h1>{demo.headline}</h1></div><div className="app-tools"><button><Search/></button><button><Bell/></button><i>AB</i></div></header><section className="metric-grid">{demo.stats.map(([value,label],index)=><article key={label}><div><span>{label}</span><strong>{value}</strong></div><i className={`trend trend-${index}`}>+{12+index*4}%</i></article>)}</section><section className="dashboard-grid"><article className="chart-panel"><div className="panel-head"><div><span>PERFORMANCE</span><h2>Monthly overview</h2></div><b>Last 6 months</b></div><div className="big-chart"><span/><span/><span/><span/><span/><span/><svg viewBox="0 0 600 180"><path d="M0 150 C80 135 100 95 170 112 S270 140 320 74 S420 88 470 42 S540 58 600 18" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/></svg></div></article><article className="activity-panel"><div className="panel-head"><div><span>LIVE UPDATES</span><h2>Recent activity</h2></div></div>{demo.activity.map((item,index)=><div className="activity-row" key={item}><i><Check/></i><span><strong>{item}</strong><small>{index+1} hour{index ? "s" : ""} ago</small></span></div>)}</article></section><section className="module-row">{demo.features.map((feature,index)=><article key={feature}><i>0{index+1}</i><div><strong>{feature}</strong><span>Configured for your workflow</span></div><ChevronRight/></article>)}</section></main></div>;
}

function AiDemo({ demo }) {
  return <div className={`ai-demo theme-${demo.accent}`}><nav className="ai-nav"><a className="ai-brand" href="#"><i><Sparkles/></i><span><strong>{demo.brand}</strong><small>Intelligent workspace</small></span></a><div><span><i/>Online</span><button><Bell/></button><b>AB</b></div></nav><main className="ai-main"><section className="ai-intro"><span>{demo.eyebrow}</span><h1>{demo.headline}</h1><p>{demo.description}</p><div className="ai-benefits">{demo.features.map(item=><span key={item}><Check/>{item}</span>)}</div></section><section className="assistant-window"><header><div><i><Bot/></i><span><strong>{demo.brand}</strong><small>Usually replies instantly</small></span></div><b><i/>AI active</b></header><div className="conversation"><div className="message user-message"><span>You</span><p>{demo.prompt}</p></div><div className="message ai-message"><span><Sparkles/> AI Assistant</span><p>{demo.reply}</p><small>Answer generated from approved business knowledge</small></div></div><footer><span>Ask a question...</span><button><ArrowUpRight/></button></footer></section></main><section className="ai-process"><div><span>01</span><strong>Customer asks</strong><small>Natural conversation</small></div><ChevronRight/><div><span>02</span><strong>AI understands</strong><small>Uses your business knowledge</small></div><ChevronRight/><div><span>03</span><strong>Action happens</strong><small>Answer, capture or automate</small></div></section></div>;
}

export default async function ExamplePage({ params }) {
  const { slug } = await params;
  const demo = exampleDemos[slug];
  if (!demo) return <main className="missing-demo"><h1>Example not found</h1><a href="/#services">Return to Bhanova</a></main>;
  return <div className="demo-page"><DemoTopbar demo={demo}/>{demo.kind === "website" ? <WebsiteDemo demo={demo}/> : demo.kind === "software" ? <SoftwareDemo demo={demo}/> : <AiDemo demo={demo}/>}<section className="demo-bottom-cta"><span>INSPIRED BY THIS CONCEPT?</span><h2>Let&apos;s adapt it to your business.</h2><p>This is a concept preview. Your final solution will be tailored to your brand, content and requirements.</p><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Bhanova Technologies, I would like to build something similar to the ${demo.label} demo.`)}`} target="_blank" rel="noreferrer"><MessageCircle/> Discuss this project on WhatsApp</a></section></div>;
}
