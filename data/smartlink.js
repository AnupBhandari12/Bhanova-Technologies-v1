import { CONTACT, SOCIAL_LINKS } from "../config/site.js";

// Demo merchants have no real phone, location or social accounts.
// Replace sample actions with verified href values when onboarding a real customer.
const demoActions = [
  { label: "Call", icon: "Phone", action: "sample" },
  { label: "WhatsApp", icon: "MessagesSquare", action: "sample", featured: true },
  { label: "Location", icon: "MapPin", action: "sample" },
  { label: "Save contact", icon: "UsersRound", action: "save-contact" },
];

const socialLinks = [
  {
    label: "Follow on Instagram",
    caption: "Fresh updates & everyday inspiration",
    icon: "Camera",
    action: "sample",
  },
  {
    label: "Connect on Facebook",
    caption: "News from your favourite local business",
    icon: "UsersRound",
    action: "sample",
  },
  {
    label: "Watch on TikTok",
    caption: "Short stories from behind the scenes",
    icon: "Music2",
    action: "sample",
  },
];

export const smartLinkProfiles = {
  qr: {
    slug: "qr",
    packageId: "qr",
    name: "Namaste Café",
    theme: "cafe",
    isDemo: true,
    eyebrow: "GOOD COFFEE. GOOD COMPANY.",
    description:
      "A warm cup, a familiar face and a little room to slow down. Find your everyday pause.",
    note: "Kathmandu café concept · Sample hours 7 AM–9 PM",
    monogram: "n.",
    cover: "/smartlink/cafe-hero.png",
    coverAlt: "Warm café interior concept",
    linksHeading: "Come for a coffee. Stay a little.",
    actions: demoActions,
    links: [
      {
        label: "Chat on WhatsApp",
        caption: "A quick question or a takeaway enquiry",
        icon: "MessagesSquare",
        action: "sample",
      },
      {
        label: "View our menu",
        caption: "Coffee, breakfast & something sweet",
        icon: "UtensilsCrossed",
        action: "menu",
      },
      {
        label: "Get directions",
        caption: "Your verified Google Maps location",
        icon: "MapPin",
        action: "sample",
      },
      {
        label: "Leave a Google review",
        caption: "Help someone find their new favourite",
        icon: "MessagesSquare",
        action: "sample",
      },
      ...socialLinks,
      {
        label: "Visit our website",
        caption: "A shortcut to your existing website",
        icon: "Globe2",
        action: "sample",
      },
    ],
    highlight: {
      label: "THE QR EXPERIENCE",
      title: "A small scan. A warm welcome.",
      description:
        "One page for the links customers ask for most. Update the details while keeping the same printed profile URL.",
    },
  },
  tap: {
    slug: "tap",
    packageId: "tap",
    name: "The Burger House",
    theme: "restaurant",
    isDemo: true,
    eyebrow: "BIG FLAVOUR. ZERO FUSS.",
    description:
      "Fresh off the grill. Built the way you like it. Your next good bite starts right here.",
    note: "Nepal restaurant concept · Sample hours 11 AM–10 PM",
    monogram: "BH",
    linksHeading: "Good food is one tap away.",
    actions: demoActions,
    links: [
      {
        label: "Explore our menu",
        caption: "Signature burgers, crispy sides & cold drinks",
        icon: "UtensilsCrossed",
        action: "menu",
      },
      {
        label: "Order enquiry on WhatsApp",
        caption: "Ask the restaurant about your order",
        icon: "MessagesSquare",
        action: "sample",
      },
      {
        label: "Leave a Google review",
        caption: "Tell us how your first bite felt",
        icon: "MessagesSquare",
        action: "sample",
      },
      {
        label: "Find the restaurant",
        caption: "Directions to your next good meal",
        icon: "MapPin",
        action: "sample",
      },
      ...socialLinks,
      {
        label: "Visit our website",
        caption: "Discover the story behind the grill",
        icon: "Globe2",
        action: "sample",
      },
    ],
    highlight: {
      label: "SCAN OR TAP",
      title: "Two ways in. One delicious destination.",
      description:
        "A QR scan and a tap on a programmed NFC stand open this same profile. Menu, contact, reviews and social links stay together.",
    },
  },
  pro: {
    slug: "pro",
    packageId: "pro",
    name: "Himalayan Hotel",
    theme: "luxe",
    isDemo: true,
    eyebrow: "A WARM STAY. A BRIGHTER JOURNEY.",
    description:
      "Thoughtful rooms, unhurried mornings and a welcome that feels like Nepal. Make a little space for your next escape.",
    note: "Kathmandu hotel concept · A premium profile example",
    monogram: "H",
    linksHeading: "Your stay begins with a connection.",
    actions: [
      { label: "Enquire", icon: "CalendarCheck", action: "booking", featured: true },
      ...demoActions.filter((item) => item.label !== "Call"),
    ],
    links: [
      {
        label: "Explore our rooms",
        caption: "Find a space for the way you travel",
        icon: "Building2",
        action: "rooms",
      },
      {
        label: "Preview a booking enquiry",
        caption: "Choose a room and your preferred stay",
        icon: "CalendarCheck",
        action: "booking",
      },
      {
        label: "View the gallery",
        caption: "A glimpse of the hotel experience",
        icon: "Camera",
        action: "gallery",
      },
      {
        label: "Message on WhatsApp",
        caption: "Speak with the team before your visit",
        icon: "MessagesSquare",
        action: "sample",
      },
      {
        label: "Get directions",
        caption: "The last step of your journey",
        icon: "MapPin",
        action: "sample",
      },
      {
        label: "Leave a Google review",
        caption: "Share a little of your stay",
        icon: "MessagesSquare",
        action: "sample",
      },
      ...socialLinks.slice(0, 2),
      {
        label: "Visit our website",
        caption: "Meet the brand behind the welcome",
        icon: "Globe2",
        action: "sample",
      },
    ],
    highlight: {
      label: "THOUGHTFULLY YOURS",
      title: "More than a room. A place to arrive.",
      description:
        "A considered stay, from your first enquiry to your last morning coffee. Explore the room and gallery concepts above.",
    },
  },
  bhanova: {
    slug: "bhanova",
    name: "Bhanova Technologies",
    theme: "corporate",
    isDemo: false,
    eyebrow: "WEBSITES · SOFTWARE · AI AUTOMATION",
    description:
      "Modern digital solutions for education institutes and growing businesses in Nepal.",
    note: "Let's discuss your next project.",
    logo: "/bhanova-mark.png",
    actions: [
      { label: "Call", icon: "Phone", href: `tel:${CONTACT.phone}` },
      {
        label: "WhatsApp",
        icon: "MessagesSquare",
        href: CONTACT.whatsapp,
        featured: true,
      },
      { label: "Email", icon: "Mail", href: `mailto:${CONTACT.email}` },
      { label: "Save contact", icon: "UsersRound", action: "save-contact" },
    ],
    links: [
      {
        label: "Visit our website",
        caption: "Services, portfolio and project examples",
        icon: "Globe2",
        href: "/",
      },
      {
        label: "Connect on LinkedIn",
        caption: "Bhanova Technologies",
        icon: "Building2",
        href: SOCIAL_LINKS.linkedin,
      },
      {
        label: "Follow on Instagram",
        caption: "@bhanovatechnologies",
        icon: "Camera",
        href: SOCIAL_LINKS.instagram,
      },
      {
        label: "Connect on Facebook",
        caption: "Bhanova Technologies",
        icon: "UsersRound",
        href: SOCIAL_LINKS.facebook,
      },
    ],
    highlight: {
      label: "START A PROJECT",
      title: "Turn your idea into a useful digital product.",
      description: "Tell us what you need and receive a clear, practical recommendation.",
    },
  },
  cafe: {
    slug: "cafe",
    name: "Himalayan Brew Café",
    theme: "cafe",
    isDemo: true,
    eyebrow: "SPECIALTY COFFEE · CAFÉ CONCEPT",
    description:
      "Fresh coffee, warm conversations and a quiet corner in the heart of the city.",
    note: "Sample opening hours · 7:00 AM–9:00 PM",
    monogram: "HB",
    cover: "/smartlink/cafe-hero.png",
    actions: [
      { label: "Call", icon: "Phone", action: "sample" },
      { label: "WhatsApp", icon: "MessagesSquare", action: "sample", featured: true },
      { label: "Location", icon: "MapPin", action: "sample" },
      { label: "Save contact", icon: "UsersRound", action: "sample" },
    ],
    links: [
      {
        label: "View our menu",
        caption: "Coffee, breakfast & desserts",
        icon: "UtensilsCrossed",
        action: "menu",
      },
      {
        label: "Leave a Google review",
        caption: "Example of a review shortcut",
        icon: "MessagesSquare",
        action: "sample",
      },
      {
        label: "Follow on Instagram",
        caption: "Sample café profile",
        icon: "Camera",
        action: "sample",
      },
      {
        label: "Connect on Facebook",
        caption: "Sample café page",
        icon: "UsersRound",
        action: "sample",
      },
    ],
    highlight: {
      label: "SAMPLE MENU SPECIAL",
      title: "Himalayan Honey Latte",
      price: "NPR 320",
      description: "Local honey, double espresso and steamed milk.",
    },
  },
};

export const cafeMenu = [
  {
    name: "Espresso",
    description: "A double shot of specialty coffee",
    price: "NPR 160",
  },
  {
    name: "Cappuccino",
    description: "Espresso, steamed milk and soft foam",
    price: "NPR 250",
  },
  {
    name: "Himalayan Honey Latte",
    description: "Local honey with a double espresso",
    price: "NPR 320",
  },
  {
    name: "Breakfast toast",
    description: "Seasonal toppings on warm sourdough",
    price: "NPR 350",
  },
];
