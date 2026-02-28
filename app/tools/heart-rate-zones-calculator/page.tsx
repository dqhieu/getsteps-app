import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { HeartRateZonesCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "Heart Rate Zone Calculator - Find Your 5 Training Zones",
  description:
    "Calculate your 5 heart rate training zones based on age and resting heart rate. Optimize your workouts for fat burning, endurance, and performance.",
  keywords: [
    "heart rate zone calculator",
    "target heart rate zones",
    "heart rate training zones",
    "max heart rate calculator",
    "fat burning heart rate zone",
    "zone 2 training",
  ],
  openGraph: {
    title: "Heart Rate Zone Calculator - Find Your 5 Training Zones",
    description:
      "Calculate your 5 heart rate training zones based on age and resting heart rate. Optimize your workouts for fat burning, endurance, and performance.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/heart-rate-zones-calculator`,
    images: [
      {
        url: "/og/heart-rate-zones-calculator.png",
        width: 1200,
        height: 630,
        alt: "Heart Rate Zone Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/heart-rate-zones-calculator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Heart Rate Zone Calculator - Find Your 5 Training Zones",
    description: "Calculate your 5 heart rate training zones based on age and resting heart rate. Optimize your workouts for fat burning, endurance, and performance.",
    images: ["/og/heart-rate-zones-calculator.png"],
  },
};

export default function HeartRateZonesCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Heart Rate Zone Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover your personalized heart rate training zones to maximize fat
            burn, build endurance, and improve performance.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your age to instantly see your 5 personalized heart rate training zones. Add your resting heart rate to use the Karvonen method for more accurate, individualized zones.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <HeartRateZonesCalculatorClient />
        </div>
      </section>

      {/* Info / FAQ Section */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Understanding Heart Rate Zones
            </h2>

            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What are heart rate training zones?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Heart rate zones are ranges of beats per minute that correspond
                  to different exercise intensities. There are five zones, each
                  defined as a percentage of your maximum heart rate. Training in
                  different zones produces different physiological adaptations —
                  from active recovery and fat burning at the low end to peak
                  speed and VO2 max development at the high end. Structuring your
                  workouts across zones leads to more balanced and effective
                  fitness gains.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is the fat burning zone?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Zone 2 (60–70% of max HR) is often called the fat burning zone
                  because the body relies primarily on fat as its fuel source at
                  this intensity. While higher intensities burn more total
                  calories, a greater proportion comes from carbohydrates. For
                  sustained fat loss, combining Zone 2 cardio sessions with
                  overall caloric balance is most effective. Zone 2 also builds
                  mitochondrial density and aerobic base without excessive
                  recovery demands.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How do I calculate my maximum heart rate?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  The standard formula is 220 minus your age. For a 30-year-old
                  that gives a max HR of 190 bpm. This is an estimate with a
                  margin of roughly ±10–12 bpm — genetics, fitness level, and
                  medications can all shift your true maximum. If you have access
                  to a lab stress test or have recorded a true all-out effort
                  during a race or hard workout, enter that value in the
                  &quot;Advanced Options&quot; section for more accurate zones.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is Zone 2 training?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Zone 2 training — also called low-intensity steady-state (LISS)
                  cardio — has surged in popularity thanks to research on
                  longevity and endurance performance. It involves sustained
                  effort at 60–70% of max HR where you can hold a full
                  conversation. Elite endurance athletes often spend 80% of their
                  total training volume in Zone 2. Benefits include improved fat
                  metabolism, mitochondrial efficiency, cardiac output, and faster
                  recovery between hard sessions.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How does the Karvonen method differ?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  The Karvonen method uses your Heart Rate Reserve (HRR) —
                  the difference between your maximum and resting heart rate —
                  to calculate zones. The formula is: Target HR = Resting HR +
                  (HRR × Zone percentage). Because it accounts for your
                  cardiovascular fitness baseline, it produces more personalized
                  and typically more accurate zones than the simple percentage
                  method. A well-trained athlete with a low resting HR of 45 bpm
                  will get meaningfully different zones than a sedentary person
                  with a resting HR of 75 bpm, even at the same age.
                </p>
              </details>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                <a href="/tools/running-pace-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Running Pace Calculator</a>
                <a href="/tools/daily-step-goal-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Daily Step Goal Calculator</a>
                <a href="/tools/calorie-deficit-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Calorie Deficit Calculator</a>
              </div>
            </div>
            <RelatedBlogPosts items={TOOL_RELATED_BLOGS["heart-rate-zones-calculator"] || []} />
            <PersonaLinks items={TOOL_RELATED_PERSONAS["heart-rate-zones-calculator"] || []} />
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
            Use Steps to track your daily walks and keep your heart rate in the
            optimal zone.
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
                "name": "What are heart rate training zones?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Heart rate zones are ranges of beats per minute corresponding to different exercise intensities, defined as a percentage of your maximum heart rate. There are five zones from Zone 1 (50–60%, active recovery) to Zone 5 (90–100%, maximum effort). Training across zones produces different physiological benefits — fat burning in Zone 2, endurance in Zone 3, and speed in Zones 4–5."
                }
              },
              {
                "@type": "Question",
                "name": "What is the fat burning zone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zone 2 (60–70% of max heart rate) is called the fat burning zone because the body uses fat as its primary fuel source at this intensity. While higher intensities burn more total calories, Zone 2 burns a higher proportion from fat and can be sustained for longer periods."
                }
              },
              {
                "@type": "Question",
                "name": "How do I calculate my maximum heart rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The standard formula is 220 minus your age. For a 35-year-old, that gives 185 bpm. This estimate has a margin of roughly ±10–12 bpm. For more accuracy, enter a measured max heart rate from a race or hard effort in the advanced options."
                }
              },
              {
                "@type": "Question",
                "name": "What is Zone 2 training?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zone 2 training is sustained aerobic exercise at 60–70% of maximum heart rate — an intensity where you can hold a full conversation. It builds mitochondrial density, improves fat metabolism, and enhances aerobic base without excessive recovery demands. Elite endurance athletes often spend 80% of training in Zone 2."
                }
              },
              {
                "@type": "Question",
                "name": "How does the Karvonen method differ from standard heart rate zones?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Karvonen method uses Heart Rate Reserve (HRR = max HR minus resting HR) to calculate zones: Target HR = Resting HR + (HRR × zone percentage). This produces more personalized zones because it accounts for your cardiovascular fitness baseline."
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
