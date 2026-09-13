import { CONTACT, site } from "../config/site.js";

export function escapeVCardText(value) {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,");
}

// vCard uses CRLF and folds long UTF-8 lines at 75 bytes, not 75 characters.
function foldLine(line) {
  const encoder = new TextEncoder();
  const parts = [];
  let part = "";
  let bytes = 0;
  for (const character of line) {
    const length = encoder.encode(character).length;
    if (bytes + length > 75) {
      parts.push(part);
      part = " ";
      bytes = 1;
    }
    part += character;
    bytes += length;
  }
  parts.push(part);
  return parts.join("\r\n");
}

export function createBhanovaVCard(origin) {
  const website = new URL("/", origin);
  if (!["https:", "http:"].includes(website.protocol))
    throw new Error("Invalid website URL");
  return (
    [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${escapeVCardText(site.name)}`,
      "N:;Bhanova Technologies;;;",
      `ORG:${escapeVCardText(site.name)}`,
      `TEL;TYPE=WORK,CELL:${CONTACT.phone}`,
      `EMAIL;TYPE=INTERNET,WORK:${CONTACT.email}`,
      `URL:${website.href}`,
      "END:VCARD",
    ]
      .map(foldLine)
      .join("\r\n") + "\r\n"
  );
}

// Fictional examples must never export Bhanova's real contact as the merchant's.
export function createDemoVCard(profile, origin) {
  if (!profile.isDemo) throw new Error("Use the verified contact for real businesses");
  const website = new URL(`/smartlink/${encodeURIComponent(profile.slug)}`, origin);
  if (!["https:", "http:"].includes(website.protocol))
    throw new Error("Invalid website URL");
  return (
    [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${escapeVCardText(profile.name)} (Demo)`,
      `N:;${escapeVCardText(profile.name)} (Demo);;;`,
      `ORG:${escapeVCardText(profile.name)} (Demo)`,
      `URL:${website.href}`,
      "NOTE:Fictional SmartLink example. No real phone or email is included.",
      "END:VCARD",
    ]
      .map(foldLine)
      .join("\r\n") + "\r\n"
  );
}
