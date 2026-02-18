import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RestingHeartRateCalculatorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resting Heart Rate Calculator - Fitness Level & Karvonen Zones",
  description:
    "Calculate your resting heart rate fitness level and personalized Karvonen heart rate training zones. Enter your age and measured RHR for instant results.",
  keywords: [
    "resting heart rate calculator",
    "resting heart rate by age",
    "what is a good resting heart rate",
    "heart rate reserve calculator",
    "Karvonen formula",
    "resting heart rate fitness level",
  ],
  openGraph: {
    title: "Resting Heart Rate Calculator - Fitness Level & Karvonen Zones",
    description:
      "Calculate your resting heart rate fitness level and personalized Karvonen heart rate training zones. Enter your age and measured RHR for instant results.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/resting-heart-rate-calculator`,
    images: [
      {
        url: "/og/resting-heart-rate-calculator.png",
        width: 1200,
        height: 630,
        alt: "Resting Heart Rate Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/resting-heart-rate-calculator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Resting Heart Rate Calculator - Fitness Level & Karvonen Zones",
    description:
      "Calculate your resting heart rate fitness level and personalized Karvonen heart rate training zones. Enter your age and measured RHR for instant results.",
    images: ["/og/resting-heart-rate-calculator.png"],
  },
};

export default function RestingHeartRateCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Resting Heart Rate Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Check your cardiovascular fitness level and get personalized training zones based on your heart rate reserve.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your age, gender, and measured resting heart rate to see your fitness category and calculate Karvonen heart rate zones optimized for fat burn, aerobic endurance, and peak performance.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <RestingHeartRateCalculatorClient />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Resting Heart Rate FAQ
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is a normal resting heart rate?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  For most adults, a normal resting heart rate is between 60 and 100 beats per minute (bpm). Trained athletes often have resting heart rates of 40–60 bpm because their hearts are stronger and pump more blood per beat. Values below 60 bpm (bradycardia) can be normal for fit individuals but should be evaluated by a doctor if accompanied by symptoms.
                </p>
              </details>
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How do I measure my resting heart rate?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Measure your RHR in the morning before getting out of bed. Lie still for 5 minutes, then place two fingers on your wrist (radial artery) or neck (carotid artery) and count the beats for 60 seconds. Avoid measuring after coffee, exercise, or stress. Taking the average of three consecutive mornings gives the most accurate reading.
                </p>
              </details>
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Does resting heart rate improve with fitness?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Yes. Regular cardiovascular exercise strengthens the heart muscle, allowing it to pump more blood per beat. This increased stroke volume means the heart needs to beat fewer times per minute to deliver the same amount of blood. Consistent aerobic training typically lowers RHR by 5–25 bpm over several months, depending on your starting fitness level.
                </p>
              </details>
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What&apos;s the difference between resting and max heart rate?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Resting heart rate (RHR) is the number of beats per minute while completely at rest. Maximum heart rate (HRmax) is the highest number of beats per minute your heart can achieve during all-out effort, estimated as 220 minus your age. Heart Rate Reserve (HRR) is the difference between the two and represents the range your heart can operate in during exercise. The Karvonen method uses HRR to calculate personalized training zones.
                </p>
              </details>
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How can I lower my resting heart rate?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  The most effective way is regular aerobic exercise — aim for 3–5 sessions per week of sustained moderate-intensity cardio such as walking, jogging, cycling, or swimming. Adequate sleep (7–9 hours), stress management (meditation, deep breathing), limiting caffeine and alcohol, and maintaining a healthy body weight all contribute to a lower RHR. Improvements are typically noticeable within 4–8 weeks of consistent training.
                </p>
              </details>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                <a href="/tools/heart-rate-zones-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Heart Rate Zones Calculator</a>
                <a href="/tools/running-pace-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Running Pace Calculator</a>
                <a href="/tools/daily-step-goal-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Daily Step Goal Calculator</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Improve Your Heart Health
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Track your daily steps to improve your cardiovascular health over time.
          </p>
          <a
            href={SITE_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store"
          >
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
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a normal resting heart rate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For most adults, a normal resting heart rate is between 60 and 100 beats per minute. Trained athletes often have resting heart rates of 40–60 bpm because their hearts are stronger and more efficient.",
                },
              },
              {
                "@type": "Question",
                name: "How do I measure my resting heart rate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Measure your RHR first thing in the morning before getting out of bed. Lie still for 5 minutes, then count your pulse for 60 seconds. Avoid measuring after coffee, exercise, or stress.",
                },
              },
              {
                "@type": "Question",
                name: "Does resting heart rate improve with fitness?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Regular cardiovascular exercise strengthens the heart, allowing it to pump more blood per beat and beat fewer times per minute. Consistent aerobic training typically lowers RHR by 5–25 bpm over several months.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between resting and max heart rate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Resting heart rate (RHR) is beats per minute at rest. Maximum heart rate (HRmax) is estimated as 220 minus age. Heart Rate Reserve (HRR = HRmax - RHR) is used in the Karvonen formula to calculate personalized training zones.",
                },
              },
              {
                "@type": "Question",
                name: "How can I lower my resting heart rate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Regular aerobic exercise 3–5 times per week is most effective. Adequate sleep, stress management, limiting caffeine and alcohol, and maintaining a healthy weight also help. Improvements are typically noticeable within 4–8 weeks.",
                },
              },
            ],
          }),
        }}
      />
      <LandingFooter />
    </div>
  );
}
