import { notFound } from "next/navigation";
import { smartLinkProfiles } from "@/data/smartlink";
import { SmartLinkProfile } from "@/components/smartlink/SmartLinkProfile";

// Known profiles are pre-rendered. Unknown slugs render the branded 404 page.
export const dynamicParams = true;

export function generateStaticParams() {
  return Object.keys(smartLinkProfiles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const profile = Object.hasOwn(smartLinkProfiles, slug) ? smartLinkProfiles[slug] : null;
  if (!profile) return { title: "Profile not found" };
  return {
    title: `${profile.name} — SmartLink`,
    description: profile.description,
    alternates: { canonical: `/smartlink/${slug}` },
    robots: { index: !profile.isDemo, follow: true },
    openGraph: { title: `${profile.name} — SmartLink`, description: profile.description },
  };
}

export default async function SmartLinkPage({ params }) {
  const { slug } = await params;
  const profile = Object.hasOwn(smartLinkProfiles, slug) ? smartLinkProfiles[slug] : null;
  if (!profile) notFound();
  return <SmartLinkProfile profile={profile} />;
}
