import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { PaceSpeedConverterClient } from "./client";

export const metadata: Metadata = {
  title: "Pace to Speed Converter - min/km, min/mile, km/h, mph",
  description:
    "Instantly convert running pace to speed and back. Convert min/km to km/h, min/mile to mph, and see your 5K and 10K finish times at any pace.",
  keywords: [
    "pace to speed converter",
    "min per km to km/h",
    "running pace calculator",
    "convert pace to speed",
    "min/km to mph",
    "running speed converter",
    "pace converter",
  ],
  openGraph: {
    title: "Pace to Speed Converter - min/km, min/mile, km/h, mph",
    description:
      "Instantly convert running pace to speed and back. Convert min/km to km/h, min/mile to mph, and see your 5K and 10K finish times at any pace.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/pace-to-speed-converter`,
    images: [{ url: "/og/pace-to-speed-converter.png", width: 1200, height: 630, alt: "Pace to Speed Converter" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/pace-to-speed-converter` },
  twitter: {
    card: "summary_large_image",
    title: "Pace to Speed Converter - min/km, min/mile, km/h, mph",
    description: "Instantly convert running pace to speed and back. Convert min/km to km/h, min/mile to mph, and see your 5K and 10K finish times at any pace.",
    images: ["/og/pace-to-speed-converter.png"],
  },
};

const faqs = [
  {
    q: "How do I convert min/km to km/h?",
    a: "Divide 60 by your min/km pace. For example, a pace of 5:00/km gives 60 ÷ 5 = 12 km/h. A slower pace of 6:00/km gives 60 ÷ 6 = 10 km/h.",
  },
  {
    q: "What is a good running pace in km/h?",
    a: "Casual jog: 7–9 km/h; moderate running: 9–12 km/h; fast running: 12–16 km/h; elite marathon pace: 18+ km/h. Most recreational runners fall in the 8–11 km/h range.",
  },
  {
    q: "How do I convert min/km to min/mile?",
    a: "Multiply your min/km pace by 1.60934 to get min/mile. For example, 5:00/km × 1.60934 = 8:03/mile. This converter handles that automatically.",
  },
  {
    q: "What speed is a 30-minute 5K?",
    a: "A 30-minute 5K requires a pace of 6:00/km, which equals 10.0 km/h or 6.2 mph. That's a solid recreational running pace.",
  },
  {
    q: "What's the difference between pace and speed?",
    a: "Pace is time per unit of distance (e.g., min/km) — lower is faster. Speed is distance per unit of time (e.g., km/h) — higher is faster. They represent the same thing with inverted units.",
  },
];

export default function PaceToSpeedConverterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Pace to Speed Converter
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Instantly convert between running pace (min/km, min/mile) and speed (km/h, mph).
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Type any pace or speed value and all other units update instantly. See your estimated 5K and 10K finish times and how far you'd run in 30 or 60 minutes.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <PaceSpeedConverterClient />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Pace &amp; Speed FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Running Pace Calculator", href: "/tools/running-pace-calculator" },
                { label: "Marathon Race Predictor", href: "/tools/marathon-pace-predictor" },
                { label: "Race Time Predictor", href: "/tools/race-time-predictor" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["pace-to-speed-converter"] || []} />
          <PersonaLinks items={TOOL_RELATED_PERSONAS["pace-to-speed-converter"] || []} />
          <ToolHowToBlock slug="pace-to-speed-converter" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track your runs and steps in the Steps app.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Monitor your pace, distance, and daily step count — all in one place.
          </p>
          <a href={SITE_CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95 inline-block" aria-label="Download on the App Store">
            <Image src="/badge_light_mode.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto dark:hidden" />
            <Image src="/badge_dark_mode.svg" alt="Download on the App Store" width={120} height={40} className="h-12 w-auto hidden dark:block" />
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">Free on the App Store</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <LandingFooter />
    </div>
  );
}
