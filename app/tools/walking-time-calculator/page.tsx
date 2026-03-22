import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { WalkingTimeCalculatorClient } from "./client";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Walking Time Calculator: How Long to Walk 1 km, 5 km, or Any Distance",
  description:
    "How long does it take to walk 5 km? About 60 min at normal pace. Calculate walking time for any distance — 1 km (12 min), 1 mile (18 min), 8 km (96 min), and more.",
  keywords: [
    "walking time",
    "walking time calculator",
    "how long to walk 5 km",
    "8km walk time",
    "how long to walk a mile",
    "walking distance time",
    "walking pace calculator",
    "how long to walk 10000 steps",
    "walk duration calculator",
  ],
  openGraph: {
    title: "Walking Time Calculator: How Long to Walk Any Distance",
    description:
      "Calculate walking time for any distance. 5 km ≈ 60 min, 1 mile ≈ 18 min at normal pace.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/walking-time-calculator`,
    images: [
      {
        url: "/og/walking-time-calculator.png",
        width: 1200,
        height: 630,
        alt: "Walking Time Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/walking-time-calculator`,
  },
};

export default function WalkingTimeCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Walking Time Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            How long does it take to walk 5 km, 8 km, or 28 miles? Enter any
            distance and get walking time estimates for slow, normal, brisk,
            and fast paces.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <WalkingTimeCalculatorClient />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Walking Speed Guide
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Walking speed varies based on fitness level, terrain, and purpose.
                Understanding different walking paces helps you plan your walks
                effectively.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  Walking Pace Guide
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Slow (3.2 km/h / 2 mph):</strong> A leisurely stroll,
                    suitable for recovery walks or casual conversation
                  </li>
                  <li>
                    <strong>Normal (5 km/h / 3.1 mph):</strong> Average walking
                    pace for most adults
                  </li>
                  <li>
                    <strong>Brisk (6.4 km/h / 4 mph):</strong> Purposeful walking
                    that elevates heart rate
                  </li>
                  <li>
                    <strong>Fast (7.2 km/h / 4.5 mph):</strong> Power walking pace,
                    borderline jogging
                  </li>
                </ul>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  Common Questions
                </h3>

                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How long does it take to walk 5 km?
                    </summary>
                    <p className="mt-2 text-sm">
                      At a normal pace (5 km/h), it takes about 60 minutes to walk
                      5 km. At a brisk pace (6.4 km/h), you can complete it in
                      about 47 minutes.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How long does it take to walk 1 mile?
                    </summary>
                    <p className="mt-2 text-sm">
                      A mile takes approximately 15-20 minutes at a normal walking
                      pace. Brisk walkers can complete it in 12-15 minutes.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How long does it take to walk 10,000 steps?
                    </summary>
                    <p className="mt-2 text-sm">
                      10,000 steps equals roughly 7-8 km (4-5 miles). At a normal
                      pace, this takes about 1 hour and 20-40 minutes. You don&apos;t
                      need to do this all at once – spread it throughout the day.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How long does it take to walk 7 km?
                    </summary>
                    <p className="mt-2 text-sm">
                      At a normal pace (5 km/h), it takes about <strong>84 minutes</strong> (1 hour 24 min) to walk 7 km. At a brisk pace (6.4 km/h), you can finish in about 66 minutes. That&apos;s roughly 9,100 steps for an average adult.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How long does it take to walk 8 km?
                    </summary>
                    <p className="mt-2 text-sm">
                      Walking 8 km takes about <strong>96 minutes</strong> (1 hour 36 min) at a normal pace (5 km/h), or about 75 minutes at a brisk pace. That&apos;s approximately 10,400 steps.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Should I include breaks in my walking time?
                    </summary>
                    <p className="mt-2 text-sm">
                      For walks longer than 30 minutes, short breaks can help
                      maintain energy and prevent fatigue. Our calculator can add
                      5-minute breaks for every 30 minutes of walking if you enable
                      this option.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                {TOOL_RELATED_TOOLS["walking-time-calculator"]?.map((tool) => (
                  <a key={tool.href} href={tool.href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">{tool.title}</a>
                ))}
              </div>
            </div>

            <RelatedBlogPosts items={TOOL_RELATED_BLOGS["walking-time-calculator"] || []} />
            <PersonaLinks items={TOOL_RELATED_PERSONAS["walking-time-calculator"] || []} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Walks Automatically
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to track your walking time, distance, and pace
            automatically.
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
                "name": "How long does it take to walk 5 km?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At a normal pace (5 km/h), it takes about 60 minutes to walk 5 km. At a brisk pace (6.4 km/h), you can complete it in about 47 minutes."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to walk 1 mile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A mile takes approximately 15-20 minutes at a normal walking pace. Brisk walkers can complete it in 12-15 minutes."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to walk 10,000 steps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "10,000 steps equals roughly 7-8 km (4-5 miles). At a normal pace, this takes about 1 hour and 20-40 minutes. You don't need to do this all at once – spread it throughout the day."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to walk 7 km?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At a normal pace (5 km/h), it takes about 84 minutes (1 hour 24 min) to walk 7 km. At a brisk pace (6.4 km/h), you can finish in about 66 minutes. That's roughly 9,100 steps for an average adult."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to walk 8 km?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Walking 8 km takes about 96 minutes (1 hour 36 min) at a normal pace (5 km/h), or about 75 minutes at a brisk pace. That's approximately 10,400 steps."
                }
              },
              {
                "@type": "Question",
                "name": "Should I include breaks in my walking time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For walks longer than 30 minutes, short breaks can help maintain energy and prevent fatigue. Our calculator can add 5-minute breaks for every 30 minutes of walking if you enable this option."
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
