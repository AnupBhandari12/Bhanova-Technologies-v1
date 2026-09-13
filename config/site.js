export const site = {
  name: "Bhanova Technologies",
  tagline: "Innovating From Nepal",
  description:
    "Modern websites, custom software and practical AI solutions for education institutes and growing businesses in Nepal.",
};

// Change this number once; the call and WhatsApp links below use it automatically.
const businessNumber = "9779702432556";
const whatsappLink = (message) =>
  `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

// Public business information. Never put passwords or API keys in this file.
export const CONTACT = {
  phone: `+${businessNumber}`,
  whatsappNumber: businessNumber,
  email: "bhanovatechnologies@gmail.com",
  whatsapp: whatsappLink(
    "Hello Bhanova Technologies, I would like to discuss a project.",
  ),
  smartLinkWhatsapp: whatsappLink(
    "Hello Bhanova Technologies, I am interested in Bhanova SmartLink.",
  ),
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/Bhanova",
  instagram: "https://www.instagram.com/bhanovatechnologies/",
  linkedin: "https://www.linkedin.com/company/bhanova-technologies/",
};

// Relative links keep every example on this website, including on a future domain.
export const SMARTLINK_DEMOS = {
  cafe: "/smartlink/cafe",
  bhanova: "/smartlink/bhanova",
  qr: "/smartlink/qr",
  tap: "/smartlink/tap",
  pro: "/smartlink/pro",
};

export const NAVIGATION = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/smartlink" },
  { label: "Contact", href: "/#contact" },
];
