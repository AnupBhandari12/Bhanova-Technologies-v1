import { createWhatsAppUrl } from "./whatsapp.js";
import { formatPackagePrice } from "../data/smartlink-packages.js";
import { analyticsPeriods } from "../data/smartlink-demo-content.js";

export function createPackageEnquiryUrl(plan) {
  return createWhatsAppUrl(
    `Hello Bhanova Technologies, I am interested in ${plan.name} (${formatPackagePrice(plan.price)}). Please confirm the setup, delivery, hosting/renewal and support details for my business.`,
  );
}

export function createAnalyticsCsv(periodKey) {
  if (!Object.hasOwn(analyticsPeriods, periodKey)) throw new Error("Unknown demo period");
  const period = analyticsPeriods[periodKey];
  const rows = [
    ["SAMPLE DATA", "Himalayan Hotel — not connected to live tracking"],
    ["Period", period.range],
    ["Metric", "Count"],
    ["Profile visits", period.profileOpens],
    ["WhatsApp clicks", period.whatsappClicks],
    ["Google review clicks", period.reviewClicks],
    ["Booking enquiry clicks", period.bookingClicks],
    ["Visit period", "Visits"],
    ...period.visits.map((item) => [item.label, item.value]),
    ["Link", "Clicks"],
    ...period.links.map((item) => [item.label, item.value]),
  ];
  return (
    rows
      .map((row) =>
        row.map((value) => '"' + String(value).replaceAll('"', '""') + '"').join(","),
      )
      .join("\r\n") + "\r\n"
  );
}
