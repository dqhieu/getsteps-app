import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { getAllPersonas } from "@/lib/personas";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Steps for Everyone - Find Your Perfect Walking Companion",
  description:
    "Whether you're a senior, runner, nurse, or beginner - Steps has features tailored for you. Find the perfect step counter for your lifestyle.",
  keywords: [
    "step counter app",
    "pedometer app",
    "walking app",
    "fitness tracker",
    "step counter for seniors",
    "walking app for weight loss",
    "pedometer for nurses",
  ],
  openGraph: {
    title: "Steps for Everyone",
    description:
      "Find the perfect step counter for your lifestyle.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/for`,
    images: [{ url: "/meta.png", width: 1200, height: 630, alt: "Steps for Everyone" }],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/for`,
  },
};

export default function PersonaIndexPage() {
  const personas = getAllPersonas();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Steps for Everyone
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            No matter your age, goal, or lifestyle — Steps is built to help you
            move more. Find features tailored for you.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona) => (
              <Link
                key={persona.slug}
                href={`/for/${persona.slug}`}
                className="group p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 hover:border-[#ED772F] dark:hover:border-[#ED772F] transition-colors"
              >
                <span className="text-3xl mb-3 block">{persona.icon}</span>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-[#ED772F] transition-colors">
                  {persona.headline}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {persona.subheadline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Ready to Start Walking?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download Steps for free and discover why thousands trust it as their
            daily fitness companion.
          </p>
          <a
            href={SITE_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store"
          >
            <Image
              src="/badge_light_mode.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-12 w-auto dark:hidden"
            />
            <Image
              src="/badge_dark_mode.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-12 w-auto hidden dark:block"
            />
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
            Free on the App Store
          </p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
