import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { RaceTimePredictorClient } from "./client";

export const metadata: Metadata = {
  title: "Race Time Predictor: Calculate Your 5K, 10K, Half & Full Marathon Time",
  description:
    "Free race time predictor — enter your pace to get your finish time, or set a goal time to find the pace you need. Instant results for 5K, 10K, half marathon, and marathon.",
  keywords: [
    "race time predictor",
    "race finish time calculator",
    "what pace do I need for a sub-2 hour half marathon",
    "5k finish time calculator",
    "marathon pace calculator",
    "running goal time calculator",
  ],
  openGraph: {
    title: "Race Time Predictor: Calculate Your 5K, 10K, Half & Full Marathon Time",
    description:
      "Free race time predictor — enter your pace to get your finish time, or set a goal time to find the pace you need. Instant results for 5K, 10K, half marathon, and marathon.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/race-time-predictor`,
    images: [{ url: "/og/race-time-predictor.png", width: 1200, height: 630, alt: "Race Time Predictor" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/race-time-predictor` },
  twitter: {
    card: "summary_large_image",
    title: "Race Time Predictor: Calculate Your 5K, 10K, Half & Full Marathon Time",
    description: "Free race time predictor — enter your pace to get your finish time, or set a goal time to find the pace you need.",
    images: ["/og/race-time-predictor.png"],
  },
};

const faqs = [
  {
    q: "What pace do I need for a sub-2 hour half marathon?",
    a: "You need to maintain 5:41/km (9:09/mile), equivalent to about 10.6 km/h. Use the calculator above and select 'Required Pace', choose Half Marathon, and enter 2:00:00 as your goal time.",
  },
  {
    q: "What pace do I need to run a 25-minute 5K?",
    a: "A 25-minute 5K requires a pace of 5:00/km (8:03/mile). That's a solid intermediate goal — most beginners start around 6:30–7:00/km and work down from there.",
  },
  {
    q: "How do I use splits in a race?",
    a: "Run even splits (same pace every 5km) for the most predictable performance. Negative splits — running the second half faster than the first — are ideal and what elite runners aim for. Avoid going out too fast in the first km.",
  },
  {
    q: "What is a good 10K time?",
    a: "Beginner: 60–70 min; Intermediate: 50–60 min; Advanced: 40–50 min; Elite: under 35 min. The world record is under 27 minutes. Most recreational runners finish between 50 and 65 minutes.",
  },
  {
    q: "How do I pace myself in a half marathon?",
    a: "Start at your goal pace for the first 10km, then push the final 11km if you feel strong. Avoid running faster than goal pace early — the second half feels much harder than the first regardless of pace.",
  },
];

export default function RaceTimePredictorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Race Time Predictor
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calculate your race finish time from your target pace, or find the exact pace you need to hit your goal time.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your race distance and either your target pace or goal finish time. Instantly see your predicted finish time or required per-kilometer pace, plus 5K splits to pace your race perfectly.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <RaceTimePredictorClient />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Race Pacing FAQ
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
                { label: "Pace to Speed Converter", href: "/tools/pace-to-speed-converter" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["race-time-predictor"] || []} />
          <PersonaLinks items={TOOL_RELATED_PERSONAS["race-time-predictor"] || []} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track your training steps every day in the Steps app.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Log every run, track your splits, and hit your race goals with the Steps app.
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
