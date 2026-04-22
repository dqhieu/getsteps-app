import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RunningPaceCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "Running Pace Calculator - Convert Pace, Speed & Race Times",
  description:
    "Calculate your running pace in min/km or min/mile, convert between pace and speed, and predict finish times for 5K, 10K, half marathon, and marathon.",
  keywords: [
    "running pace calculator",
    "pace calculator",
    "min per km calculator",
    "min per mile calculator",
    "race time predictor",
    "running speed calculator",
    "5k pace calculator",
  ],
  openGraph: {
    title: "Running Pace Calculator - Convert Pace, Speed & Race Times",
    description:
      "Calculate your running pace in min/km or min/mile, convert between pace and speed, and predict finish times for 5K, 10K, half marathon, and marathon.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/running-pace-calculator`,
    images: [
      {
        url: "/og/running-pace-calculator.png",
        width: 1200,
        height: 630,
        alt: "Running Pace Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/running-pace-calculator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Running Pace Calculator - Convert Pace, Speed & Race Times",
    description: "Calculate your running pace in min/km or min/mile, convert between pace and speed, and predict finish times for 5K, 10K, half marathon, and marathon.",
    images: ["/og/running-pace-calculator.png"],
  },
};

export default function RunningPaceCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Running Pace Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Convert between running pace, speed, and race finish times. Works for any
            distance — from 5K to marathon.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your pace, speed, or time and distance to instantly convert between all running metrics and predict your finish time for any race distance from 5K to marathon.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <RunningPaceCalculatorClient />
        </div>
      </section>

      {/* Info / FAQ Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Understanding Running Pace
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is a good running pace?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  It depends on your experience level. Beginners typically run at 7–9 min/km
                  (11–14 min/mile). Intermediate runners average 5–7 min/km (8–11 min/mile).
                  Advanced runners maintain under 5 min/km (under 8 min/mile). Elite marathon
                  runners sustain paces below 3:00/km. The best pace is the one that lets you
                  finish your run feeling challenged but not completely exhausted.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How do I convert min/km to min/mile?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Multiply your min/km pace by 1.60934 to get min/mile. For example, a 5:00/km
                  pace equals 5:00 × 1.60934 = 8:03/mile. Conversely, divide your min/mile pace
                  by 1.60934 to get min/km. This calculator handles the conversion automatically
                  when you toggle between units.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What pace do I need to run a sub-2-hour half marathon?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  To finish a half marathon (21.0975 km) in under 2 hours, you need to maintain
                  a pace faster than 5:41/km (9:09/mile), which equals a speed of about 10.6 km/h
                  (6.6 mph). This is a common intermediate goal — aim to build your base by
                  consistently running at 6:00–6:30/km before targeting the sub-2-hour barrier.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is the average running pace?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Most recreational runners run at 6–8 min/km (10–13 min/mile). The average
                  finish time for a 5K race is around 28–35 minutes, implying a pace of
                  5:30–7:00/km. For half marathons, average finish times cluster around
                  2:00–2:20, and for full marathons around 4:20–4:45. These vary significantly
                  by age, fitness level, and terrain.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How can I improve my running pace?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Combine three types of training for best results: interval runs (short bursts
                  at faster-than-race pace with recovery), long slow runs (build aerobic base at
                  conversational pace), and tempo runs (sustained effort at comfortably hard
                  pace). Add strength training 1–2 times per week for injury prevention.
                  Consistency matters most — aim to run at least 3 times per week and increase
                  weekly mileage by no more than 10% to avoid injury.
                </p>
              </details>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
            <div className="flex flex-wrap gap-2">
              <a href="/tools/heart-rate-zones-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Heart Rate Zones Calculator</a>
              <a href="/tools/activity-to-steps-converter" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Activity to Steps Converter</a>
              <a href="/tools/walking-calories-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Walking Calories Calculator</a>
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["running-pace-calculator"] || []} />
          <PersonaLinks items={TOOL_RELATED_PERSONAS["running-pace-calculator"] || []} />
          <ToolHowToBlock slug="running-pace-calculator" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Health Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Track your runs and daily steps together in the Steps app.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a good running pace?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your experience level. Beginners typically run at 7–9 min/km (11–14 min/mile). Intermediate runners average 5–7 min/km (8–11 min/mile). Advanced runners maintain under 5 min/km (under 8 min/mile). The best pace is one that lets you finish your run feeling challenged but not exhausted."
                }
              },
              {
                "@type": "Question",
                "name": "How do I convert min/km to min/mile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Multiply your min/km pace by 1.60934 to get min/mile. For example, a 5:00/km pace equals 5:00 × 1.60934 = 8:03/mile. To convert min/mile to min/km, divide by 1.60934. This calculator handles the conversion automatically when you toggle between units."
                }
              },
              {
                "@type": "Question",
                "name": "What pace do I need to run a sub-2-hour half marathon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To finish a half marathon (21.0975 km) in under 2 hours, you need to maintain a pace faster than 5:41/km (9:09/mile), equivalent to about 10.6 km/h (6.6 mph). Build your base by consistently training at 6:00–6:30/km before targeting the sub-2-hour barrier."
                }
              },
              {
                "@type": "Question",
                "name": "What is the average running pace?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most recreational runners run at 6–8 min/km (10–13 min/mile). The average 5K finish time is around 28–35 minutes (5:30–7:00/km pace). For half marathons, average finish times cluster around 2:00–2:20, and for full marathons around 4:20–4:45."
                }
              },
              {
                "@type": "Question",
                "name": "How can I improve my running pace?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Combine three training types: interval runs (short bursts at faster-than-race pace), long slow runs (aerobic base at conversational pace), and tempo runs (sustained effort at comfortably hard pace). Add strength training 1–2 times per week and increase weekly mileage by no more than 10% to avoid injury."
                }
              }
            ]
          })
        }}
      />

      <LandingFooter />
    </div>
  );
}
