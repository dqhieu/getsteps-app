import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { ActivityToStepsCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Activity to Steps Converter - Convert Any Exercise to Steps",
  description:
    "Convert cycling, swimming, yoga, rowing, and 10+ activities into equivalent steps. Perfect for step challenges and fitness tracking.",
  keywords: [
    "activity to steps converter",
    "convert exercise to steps",
    "cycling steps equivalent",
    "swimming steps equivalent",
    "steps equivalent calculator",
    "non-walking steps",
  ],
  openGraph: {
    title: "Activity to Steps Converter - Convert Any Exercise to Steps",
    description:
      "Convert cycling, swimming, yoga, rowing, and 10+ activities into equivalent steps. Perfect for step challenges and fitness tracking.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/activity-to-steps-converter`,
    images: [
      {
        url: "/og/activity-to-steps-converter.png",
        width: 1200,
        height: 630,
        alt: "Activity to Steps Converter",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/activity-to-steps-converter`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Activity to Steps Converter - Convert Any Exercise to Steps",
    description: "Convert cycling, swimming, yoga, and 10+ activities into equivalent steps. Perfect for step challenges and fitness tracking.",
    images: ["/og/activity-to-steps-converter.png"],
  },
};

export default function ActivityToStepsConverterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Activity to Steps Converter
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Convert any activity — cycling, swimming, yoga, and more — into equivalent steps
            for your step challenge or fitness goal.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Select your activity, enter the duration, and instantly see your equivalent step count. Uses MET (Metabolic Equivalent) values for accurate conversions across 10 activities.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <ActivityToStepsCalculatorClient />
        </div>
      </section>

      {/* Info / FAQ Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How Step Equivalents Work
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How are activity steps calculated?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  This converter uses MET (Metabolic Equivalent of Task) values — a standard
                  measure of exercise intensity used in exercise science. Walking at a normal
                  pace has a MET of 3.5, equating to roughly 100 steps per minute. Each
                  activity&apos;s MET is compared to walking to produce an equivalent step count.
                  For example, an activity with MET 7.0 (twice walking) produces twice as many
                  equivalent steps per minute.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Is cycling equivalent to walking steps?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Yes — 30 minutes of cycling at medium intensity (MET ~6.8) is approximately
                  7,000–9,000 equivalent steps depending on your pace. Competitive cycling at
                  high intensity can reach 14,000+ equivalent steps in 30 minutes. While
                  pedometers won&apos;t count these as literal steps, this conversion gives you a
                  fair comparison for step challenge purposes.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Does swimming count as steps?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Swimming isn&apos;t natively tracked as steps by most fitness apps and pedometers.
                  However, 30 minutes of swimming at medium intensity (MET ~7.0) is equivalent
                  to roughly 6,000–8,000 steps. Use this converter to get credit for your swim
                  sessions in step challenges that allow manual activity logging.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Why convert activities to steps?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Step challenges at work or through fitness apps often measure progress in
                  steps, but cyclists, swimmers, and yogis naturally accumulate fewer GPS-tracked
                  steps. Converting your non-walking activities to equivalent steps lets you
                  participate fairly in step challenges, track your overall daily activity, and
                  compare effort across different exercise types on a common scale.
                </p>
              </details>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                <a href="/tools/steps-to-calories-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Steps to Calories Calculator</a>
                <a href="/tools/daily-step-goal-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Daily Step Goal Calculator</a>
                <a href="/tools/walking-calories-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Walking Calories Calculator</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Health Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Track all your daily activities and steps automatically with the Steps app.
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
                "name": "How are activity steps calculated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Activity step equivalents are calculated using MET (Metabolic Equivalent of Task) values. Walking at a normal pace has a MET of 3.5 and produces approximately 100 steps per minute. Other activities are converted proportionally: if cycling has a MET of 6.8, 30 minutes equals (6.8 / 3.5) × 30 × 100 = approximately 5,800 equivalent steps."
                }
              },
              {
                "@type": "Question",
                "name": "Is cycling equivalent to walking steps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. 30 minutes of moderate cycling (MET ~6.8) is equivalent to approximately 5,800–7,000 steps depending on intensity. High-intensity cycling can equal over 9,000 steps in 30 minutes. Most fitness apps don't automatically convert cycling to steps, which is why this converter is useful for step challenges."
                }
              },
              {
                "@type": "Question",
                "name": "Does swimming count as steps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Swimming doesn't generate steps naturally, but it can be converted to step equivalents using MET values. 30 minutes of moderate swimming (MET ~7.0) equals approximately 6,000 equivalent steps. This is useful for step challenges where you want to count all physical activity toward your daily goal."
                }
              },
              {
                "@type": "Question",
                "name": "Why convert activities to steps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many step challenges and fitness goals are measured in steps, but not everyone walks as their primary exercise. Converting other activities to steps lets you participate in step challenges, track all physical activity in one unit, and get credit for non-walking workouts like cycling, swimming, or yoga."
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
