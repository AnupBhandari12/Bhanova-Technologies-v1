// All menu items, rooms and traffic values are fictional demonstration content.
export const burgerMenu = [
  {
    name: "The house classic",
    description: "Grilled patty, cheese, fresh greens & house sauce",
    price: "NPR 390",
    icon: "Sandwich",
  },
  {
    name: "Garden crunch",
    description: "A crisp vegetable patty with a little heat",
    price: "NPR 320",
    icon: "Leaf",
  },
  {
    name: "Loaded fries",
    description: "Golden fries, cheese & house seasoning",
    price: "NPR 220",
    icon: "UtensilsCrossed",
  },
  {
    name: "Fresh lemonade",
    description: "Lemon, mint & a little sunshine",
    price: "NPR 150",
    icon: "Coffee",
  },
];
export const hotelRooms = [
  {
    name: "Classic room",
    description: "A restful double room for slow mornings",
    price: "NPR 4,500 / night",
    icon: "BedDouble",
  },
  {
    name: "Garden suite",
    description: "A little more space and a quiet green outlook",
    price: "NPR 6,500 / night",
    icon: "Leaf",
  },
  {
    name: "Family retreat",
    description: "Room to settle in and spend time together",
    price: "NPR 8,500 / night",
    icon: "UsersRound",
  },
];
export const hotelGallery = [
  {
    id: "mountains",
    title: "A sense of place",
    caption: "Nepal-inspired scenery · Concept illustration",
    icon: "Mountain",
  },
  {
    id: "room",
    title: "Rest, beautifully",
    caption: "Room atmosphere · Concept illustration",
    icon: "BedDouble",
  },
  {
    id: "garden",
    title: "A slower morning",
    caption: "Garden atmosphere · Concept illustration",
    icon: "Leaf",
  },
];

// Totals agree with the chart. These are not measured visits, NFC taps or QR scans.
export const analyticsPeriods = {
  month: {
    label: "This month",
    range: "Sample month · four weeks",
    profileOpens: 1284,
    whatsappClicks: 96,
    reviewClicks: 184,
    bookingClicks: 72,
    visits: [
      { label: "Week 1", value: 252 },
      { label: "Week 2", value: 321 },
      { label: "Week 3", value: 289 },
      { label: "Week 4", value: 422 },
    ],
    links: [
      { label: "Instagram", value: 204 },
      { label: "Google review", value: 184 },
      { label: "Directions", value: 110 },
      { label: "WhatsApp", value: 96 },
      { label: "Booking", value: 72 },
    ],
  },
  day: {
    label: "Today",
    range: "Sample day · four time windows",
    profileOpens: 52,
    whatsappClicks: 7,
    reviewClicks: 11,
    bookingClicks: 4,
    visits: [
      { label: "Morning", value: 8 },
      { label: "Midday", value: 14 },
      { label: "Afternoon", value: 21 },
      { label: "Evening", value: 9 },
    ],
    links: [
      { label: "Instagram", value: 14 },
      { label: "Google review", value: 11 },
      { label: "Directions", value: 9 },
      { label: "WhatsApp", value: 7 },
      { label: "Booking", value: 4 },
    ],
  },
};
