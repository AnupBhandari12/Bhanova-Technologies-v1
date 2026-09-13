// Launch packages supplied by Bhanova. Confirm fulfilment and renewal terms before orders.
export const SMARTLINK_PACKAGES = [
  {
    id: "qr",
    name: "Bhanova QR",
    price: 1199,
    icon: "QrCode",
    theme: "cafe",
    label: "SIMPLE. SMART. AFFORDABLE.",
    summary: "QR Stand + Digital Business Profile",
    description:
      "A welcoming home for every important business link. One scan is all it takes.",
    audience: "Small shops, cafés, salons, tuition centres & freelancers",
    example: "Namaste Café",
    demoUrl: "/smartlink/qr",
    access: "Scan QR → open your profile",
    features: [
      "Acrylic QR stand",
      "Mobile-friendly digital business profile",
      "Call, WhatsApp & social links",
      "Website, Maps, reviews & save contact",
      "Unlimited link updates",
      "Bhanova branding included",
    ],
  },
  {
    id: "tap",
    name: "Bhanova Tap",
    price: 1999,
    icon: "Nfc",
    theme: "restaurant",
    label: "ONE TAP. ONE SCAN. EVERYTHING.",
    summary: "QR + NFC Smart Stand + Digital Profile",
    description:
      "A quicker hello at the counter. Scan or tap to find your menu, socials and more.",
    audience: "Restaurants, cafés, retailers, clinics & gyms",
    example: "The Burger House",
    demoUrl: "/smartlink/tap",
    access: "Scan QR or tap NFC → the same profile",
    recommended: true,
    features: [
      "Everything in Bhanova QR",
      "Premium stand with NFC tap",
      "QR and NFC open the same profile",
      "Website or menu shortcut",
      "Basic profile analytics*",
      "Bhanova branding included",
    ],
  },
  {
    id: "pro",
    name: "Bhanova Pro",
    price: 2999,
    icon: "Crown",
    theme: "luxe",
    label: "YOUR BRAND. BEAUTIFULLY CONNECTED.",
    summary: "QR + NFC + Custom Design + Analytics",
    description:
      "A distinctive first impression, with a reporting preview for the people behind your business.",
    audience: "Hotels, premium restaurants, clinics & growing brands",
    example: "Himalayan Hotel",
    demoUrl: "/smartlink/pro",
    access: "Scan or tap → your custom branded profile",
    features: [
      "Everything in Bhanova Tap",
      "Custom stand design & digital theme",
      "Gallery or booking-link option",
      "Advanced link insights & reports*",
      "Remove Bhanova profile branding",
      "Priority support",
    ],
  },
];

export const PACKAGE_COMPARISON = [
  { label: "QR stand & digital profile", values: [true, true, true] },
  { label: "Contact, socials, Maps & reviews", values: [true, true, true] },
  { label: "Save contact & unlimited link updates", values: [true, true, true] },
  { label: "NFC tap", values: [false, true, true] },
  { label: "Basic profile analytics*", values: [false, true, true] },
  { label: "Custom stand & digital theme", values: [false, false, true] },
  { label: "Advanced link insights & reports*", values: [false, false, true] },
  { label: "Remove Bhanova branding", values: [false, false, true] },
  { label: "Priority support", values: [false, false, true] },
];

export function getSmartLinkPackage(id) {
  return SMARTLINK_PACKAGES.find((plan) => plan.id === id) ?? null;
}

export function formatPackagePrice(price) {
  return `NPR ${price.toLocaleString("en-US")}`;
}
