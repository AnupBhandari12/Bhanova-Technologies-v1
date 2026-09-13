import test from "node:test";
import assert from "node:assert/strict";
import { CONTACT, SMARTLINK_DEMOS } from "../config/site.js";
import { smartLinkProfiles } from "../data/smartlink.js";
import { SMARTLINK_PACKAGES } from "../data/smartlink-packages.js";
import { analyticsPeriods } from "../data/smartlink-demo-content.js";
import { createPackageEnquiryUrl, createAnalyticsCsv } from "../lib/smartlink.js";
import { createDemoVCard } from "../lib/vcard.js";

test("Approved prices reach the correct package enquiry and local business demo", () => {
  assert.deepEqual(
    SMARTLINK_PACKAGES.map((plan) => plan.price),
    [1199, 1999, 2999],
  );
  for (const plan of SMARTLINK_PACKAGES) {
    assert.equal(smartLinkProfiles[plan.id].packageId, plan.id);
    assert.equal(smartLinkProfiles[plan.id].name, plan.example);
    assert.equal(plan.demoUrl, SMARTLINK_DEMOS[plan.id]);
    const enquiry = new URL(createPackageEnquiryUrl(plan));
    assert.equal(enquiry.pathname, `/${CONTACT.whatsappNumber}`);
    const message = enquiry.searchParams.get("text");
    assert.ok(message.includes(plan.name));
    assert.ok(message.includes(plan.price.toLocaleString("en-US")));
  }
});

test("Fictional contact downloads exclude the real Bhanova phone and email", () => {
  for (const id of ["qr", "tap", "pro"]) {
    const card = createDemoVCard(smartLinkProfiles[id], "https://business.example");
    assert.ok(card.includes("(Demo)"));
    assert.ok(card.includes(`URL:https://business.example/smartlink/${id}`));
    assert.ok(!card.includes("TEL;") && !card.includes("EMAIL;"));
    assert.ok(!card.includes(CONTACT.phone) && !card.includes(CONTACT.email));
    assert.ok(card.split("\r\n").every((line) => Buffer.byteLength(line, "utf8") <= 75));
  }
  assert.throws(() =>
    createDemoVCard(smartLinkProfiles.bhanova, "https://business.example"),
  );
  assert.throws(() => createDemoVCard(smartLinkProfiles.qr, "ftp://business.example"));
});

test("Analytics charts and CSV reports agree and are labelled sample data", () => {
  for (const [key, period] of Object.entries(analyticsPeriods)) {
    assert.equal(
      period.visits.reduce((sum, item) => sum + item.value, 0),
      period.profileOpens,
    );
    assert.equal(
      period.links.find((item) => item.label === "WhatsApp").value,
      period.whatsappClicks,
    );
    assert.equal(
      period.links.find((item) => item.label === "Booking").value,
      period.bookingClicks,
    );
    const csv = createAnalyticsCsv(key);
    assert.ok(csv.startsWith('"SAMPLE DATA",'));
    assert.ok(csv.includes(`"Profile visits","${period.profileOpens}"`));
    assert.ok(csv.includes("not connected to live tracking"));
  }
  assert.throws(() => createAnalyticsCsv("constructor"));
});
