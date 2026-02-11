import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { WalkingTimeCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Walking Time Calculator - How Long to Walk Any Distance",
  description:
    "Calculate how long it takes to walk any distance at different speeds. Find out walking time for 1 mile, 5 km, or any distance you choose.",
  keywords: [
    "walking time calculator",
    "how long to walk 5 km",
    "walking distance time",
    "time to walk a mile",
    "walking pace calculator",
    "how long to walk 10000 steps",
    "walk duration calculator",
    "walking speed time",
  ],
  openGraph: {
    title: "Walking Time Calculator",
    description:
      "Calculate how long it takes to walk any distance at different speeds.",
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
            Find out how long it will take you to walk any distance. Plan your
            walks with accurate time estimates for different paces.
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

      <LandingFooter />
    </div>
  );
}
