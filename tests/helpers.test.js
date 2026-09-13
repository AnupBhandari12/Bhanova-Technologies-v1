import test from "node:test";
import assert from "node:assert/strict";
import { CONTACT, SMARTLINK_DEMOS } from "../config/site.js";
import { SERVICES } from "../data/services.js";
import { exampleDemos, exampleSlugs } from "../data/examples.js";
import { createEnquiryMessage, createWhatsAppUrl } from "../lib/whatsapp.js";
import { createBhanovaVCard, escapeVCardText } from "../lib/vcard.js";
import { getSiteOrigin } from "../lib/metadata.js";

test("WhatsApp keeps Unicode and punctuation intact without sending a message", () => {
  const message = "नमस्ते! Website & software? Budget: 40,000 / 50,000";
  const url = new URL(createWhatsAppUrl(message));
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, `/${CONTACT.whatsappNumber}`);
  assert.equal(url.searchParams.get("text"), message);
  assert.equal([...url.searchParams.keys()].length, 1);
});

test("Enquiry details are trimmed with a sensible optional-budget default", () => {
  const message = createEnquiryMessage({
    name: "  Anup  ",
    contact: " hello@example.com ",
    service: " Bhanova SmartLink ",
    details: " Café profile & menu ",
  });
  assert.ok(message.includes("Name: Anup\n"));
  assert.ok(message.includes("Phone / Email: hello@example.com\n"));
  assert.ok(message.includes("Estimated budget: Not decided yet\n"));
  assert.ok(message.endsWith("Project details: Café profile & menu"));
  assert.ok(!message.includes("undefined"));
});

test("Every service card points to an existing, unique local UI example", () => {
  const linkedSlugs = SERVICES.flatMap((service) =>
    service.examples.map(({ slug }) => slug),
  );
  assert.equal(SERVICES.length, 3);
  assert.equal(linkedSlugs.length, 12);
  assert.equal(new Set(linkedSlugs).size, 12);
  assert.deepEqual([...linkedSlugs].sort(), [...exampleSlugs].sort());
  for (const slug of linkedSlugs) {
    assert.match(slug, /^[a-z0-9-]+$/);
    assert.ok(["website", "software", "ai"].includes(exampleDemos[slug].kind));
  }
});

test("All SmartLink previews use routes inside this project", () => {
  assert.deepEqual(SMARTLINK_DEMOS, {
    cafe: "/smartlink/cafe",
    bhanova: "/smartlink/bhanova",
    qr: "/smartlink/qr",
    tap: "/smartlink/tap",
    pro: "/smartlink/pro",
  });
});

test("vCard escapes text and includes real public contact details and the current host", () => {
  assert.equal(escapeVCardText("A;B,C\\D\nE"), "A\\;B\\,C\\\\D\\nE");
  const vcard = createBhanovaVCard("https://business.example");
  assert.ok(vcard.startsWith("BEGIN:VCARD\r\nVERSION:3.0\r\n"));
  assert.ok(vcard.endsWith("END:VCARD\r\n"));
  assert.ok(vcard.includes(`TEL;TYPE=WORK,CELL:${CONTACT.phone}\r\n`));
  assert.ok(vcard.includes(`EMAIL;TYPE=INTERNET,WORK:${CONTACT.email}\r\n`));
  assert.ok(vcard.includes("URL:https://business.example/\r\n"));
  assert.ok(vcard.split("\r\n").every((line) => Buffer.byteLength(line, "utf8") <= 75));
  assert.throws(() => createBhanovaVCard("ftp://business.example"));
});

test("Metadata selects custom domain, Vercel production domain or local development", () => {
  const keys = ["NEXT_PUBLIC_SITE_URL", "VERCEL_PROJECT_PRODUCTION_URL", "VERCEL_URL"];
  const original = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
  try {
    keys.forEach((key) => delete process.env[key]);
    assert.equal(getSiteOrigin().origin, "http://localhost:3000");
    process.env.VERCEL_URL = "preview.example";
    assert.equal(getSiteOrigin().origin, "https://preview.example");
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "production.example";
    assert.equal(getSiteOrigin().origin, "https://production.example");
    process.env.NEXT_PUBLIC_SITE_URL = "https://custom.example/path";
    assert.equal(getSiteOrigin().origin, "https://custom.example");
    process.env.NEXT_PUBLIC_SITE_URL = "ftp://custom.example";
    assert.throws(getSiteOrigin, /http or https/);
  } finally {
    for (const key of keys) {
      if (original[key] === undefined) delete process.env[key];
      else process.env[key] = original[key];
    }
  }
});
