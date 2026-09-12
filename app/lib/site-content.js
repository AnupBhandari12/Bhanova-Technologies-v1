import {
  BadgeDollarSign,
  Bot,
  Braces,
  Building2,
  CalendarCheck,
  Clock3,
  FileSearch,
  Globe2,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  MessagesSquare,
  PackageSearch,
  ShieldCheck,
  ShoppingBag,
  UtensilsCrossed,
  Workflow,
} from "lucide-react";

export const CONTACT = {
  phone: "+9779702432556",
  email: "bhanovatechnologies@gmail.com",
  whatsapp:
    "https://wa.me/9779702432556?text=Hello%20Bhanova%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20website%2C%20software%2C%20or%20AI%20project.",
  smartLinkWhatsapp:
    "https://wa.me/9779702432556?text=Hello%20Bhanova%20Technologies%2C%20I%20am%20interested%20in%20Bhanova%20SmartLink.",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/Bhanova",
  instagram: "https://www.instagram.com/bhanovatechnologies/",
  linkedin: "https://www.linkedin.com/company/bhanova-technologies/",
};

export const SMARTLINK_DEMOS = {
  cafe: "https://bhanova-smartlink-demo.anupbhandari192.chatgpt.site",
  bhanova: "https://bhanova-smartlink-demo.anupbhandari192.chatgpt.site/bhanova.html",
};

export const SERVICES = [
  {
    number: "01",
    icon: Globe2,
    title: "Website Development",
    price: "Starting from NPR 20,000",
    description:
      "Professional, mobile-first websites that build trust and turn visitors into genuine enquiries.",
    audience: "Ideal for local businesses, consultancies and education institutes.",
    features: [
      "Up to 5 essential pages",
      "Responsive design for every device",
      "WhatsApp, contact form and Google Maps",
      "Basic SEO and one month of support",
    ],
    examples: [
      { slug: "corporate-website", icon: Building2, title: "Corporate Website", type: "Professional presence", description: "A credible company website with services, portfolio, team and enquiry flow." },
      { slug: "school-consultancy", icon: GraduationCap, title: "School & Consultancy", type: "Education platform", description: "Courses, admissions, notices, results and student enquiry in one clear experience." },
      { slug: "ecommerce-store", icon: ShoppingBag, title: "E-commerce Store", type: "Online selling", description: "A mobile-friendly product catalogue, cart, order flow and payment-ready setup." },
      { slug: "restaurant-website", icon: UtensilsCrossed, title: "Restaurant Website", type: "Local business", description: "Menu, gallery, location, reservations and direct WhatsApp ordering." },
    ],
  },
  {
    number: "02",
    icon: Braces,
    title: "Custom Software",
    price: "Starting from NPR 40,000",
    description:
      "Purpose-built dashboards and web applications that simplify daily operations and keep information organised.",
    audience: "Ideal for teams replacing spreadsheets or manual processes.",
    features: [
      "Secure login and role-based access",
      "Admin dashboard and database",
      "Forms, reports and workflow automation",
      "Deployment, training and technical support",
    ],
    examples: [
      { slug: "business-dashboard", icon: LayoutDashboard, title: "Business Dashboard", type: "Management system", description: "Track customers, sales, expenses and performance from one secure dashboard." },
      { slug: "student-management", icon: GraduationCap, title: "Student Management", type: "Education software", description: "Manage students, attendance, fees, classes, exams and reports efficiently." },
      { slug: "inventory-system", icon: PackageSearch, title: "Inventory System", type: "Operations software", description: "Monitor products, stock movement, suppliers and low-stock alerts in real time." },
      { slug: "booking-platform", icon: CalendarCheck, title: "Booking Platform", type: "Service workflow", description: "Let customers book appointments while your team manages schedules and status." },
    ],
  },
  {
    number: "03",
    icon: Bot,
    title: "AI & Automation",
    price: "Starting from NPR 30,000",
    description:
      "Practical AI tools that answer customer questions, work with business documents and reduce repetitive tasks.",
    audience: "Ideal for organisations ready to improve response time and productivity.",
    features: [
      "Website chatbot or FAQ assistant",
      "Document-based question answering",
      "Lead collection and smart workflows",
      "API integration and usage guidance",
    ],
    examples: [
      { slug: "ai-support-assistant", icon: MessagesSquare, title: "AI Support Assistant", type: "Customer experience", description: "Answer common customer questions instantly and guide visitors to the right service." },
      { slug: "document-qa", icon: FileSearch, title: "Document Q&A", type: "Knowledge assistant", description: "Search policies, notes or learning materials and receive clear, source-based answers." },
      { slug: "workflow-automation", icon: Workflow, title: "Workflow Automation", type: "Business automation", description: "Connect forms, alerts and follow-ups to reduce repetitive administrative work." },
      { slug: "ai-lead-assistant", icon: Bot, title: "AI Lead Assistant", type: "Sales support", description: "Qualify enquiries, capture requirements and organise leads for faster follow-up." },
    ],
  },
];

export const PROCESS_STEPS = [
  ["01", "Discovery", "We define your goals, audience, required features and a realistic project scope."],
  ["02", "Design", "We prepare the structure and visual direction for your approval before development."],
  ["03", "Development", "We build, test and share progress at agreed project milestones."],
  ["04", "Launch & Support", "We deploy the final product, guide your team and provide post-launch support."],
];

export const TRUST_POINTS = [
  { icon: BadgeDollarSign, title: "Transparent pricing", description: "A clear project scope, payment schedule and cost breakdown before work begins." },
  { icon: Clock3, title: "Milestone-based delivery", description: "Review progress at agreed stages and know exactly what comes next." },
  { icon: ShieldCheck, title: "Built with care", description: "Responsive, secure and maintainable solutions tested before launch." },
  { icon: Headphones, title: "Post-launch support", description: "Practical guidance and technical support after your product goes live." },
];
