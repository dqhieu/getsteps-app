import type { Metadata } from "next";
import {
  LandingNavbar,
  LandingHero,
  LandingStepboardTotal,
  LandingTrust,
  LandingSpotlights,
  LandingYearlyInsights,
  LandingFeatureGrid,
  LandingPrivacy,
  LandingCTA,
  LandingFooter,
} from "@/components";
import { SITE_CONFIG } from "@/lib/constants";
import { OG_LOCALE } from "@/lib/i18n/config";
import { absoluteUrl, alternatesFor } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { getLandingMessages } from "@/lib/i18n/messages/landing";
import { getLocale, type LangPageProps } from "@/lib/i18n/page";

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const { site } = getCommonMessages(locale);
  return {
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      url: absoluteUrl(locale, "/"),
      title: SITE_CONFIG.name,
      description: site.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: "/meta.png",
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
  };
}

export default async function Home({ params }: LangPageProps) {
  const locale = await getLocale(params);
  return (
    <>
      <LandingNavbar locale={locale} />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden selection:bg-orange-500/30">
        <LandingHero locale={locale} />
        <LandingTrust locale={locale} />
        <LandingSpotlights locale={locale} />
        <LandingYearlyInsights locale={locale} />
        <LandingFeatureGrid locale={locale} />
        <LandingPrivacy locale={locale} />
        <LandingCTA locale={locale} />
        <LandingStepboardTotal
          locale={locale}
          labels={getLandingMessages(locale).stepboard}
        />
      </main>
      <LandingFooter locale={locale} />
    </>
  );
}
