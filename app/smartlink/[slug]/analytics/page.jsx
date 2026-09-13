import { notFound } from "next/navigation";
import { smartLinkProfiles } from "@/data/smartlink";
import { SmartLinkAnalytics } from "@/components/smartlink/SmartLinkAnalytics";

const supportedProfiles = ["tap", "pro"];
export const dynamicParams = true;

export function generateStaticParams() {
  return supportedProfiles.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!supportedProfiles.includes(slug)) return { title: "Preview not found" };
  return {
    title: `${smartLinkProfiles[slug].name} — Analytics Demo`,
    description:
      "Interactive dashboard with illustrative data. No live analytics are collected.",
    robots: { index: false, follow: true },
    alternates: { canonical: `/smartlink/${slug}/analytics` },
  };
}

export default async function AnalyticsPage({ params }) {
  const { slug } = await params;
  if (!supportedProfiles.includes(slug)) notFound();
  return <SmartLinkAnalytics profile={smartLinkProfiles[slug]} />;
}
