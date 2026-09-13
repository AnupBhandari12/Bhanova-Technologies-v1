export function getSiteOrigin() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const url = new URL(
    configuredUrl || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000"),
  );
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("Site URL must use http or https.");
  return new URL(url.origin);
}
