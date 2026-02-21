import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { Vo2MaxCalculatorClient } from "./client";

export const metadata: Metadata = {
  title: "VO2 Max Calculator - Estimate Your Aerobic Fitness Level",
  description:
    "Estimate your VO2 max using the heart rate method or Cooper 12-minute run test. Find out your aerobic fitness level and how to improve it.",
  keywords: [
    "VO2 max calculator",
    "vo2max calculator",
    "aerobic fitness calculator",
    "Cooper test calculator",
    "how to calculate VO2 max",
    "VO2 max by age",
    "cardiovascular fitness test",
  ],
  openGraph: {
    title: "VO2 Max Calculator - Estimate Your Aerobic Fitness Level",
    description:
      "Estimate your VO2 max using the heart rate method or Cooper 12-minute run test. Find out your aerobic fitness level and how to improve it.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/vo2-max-calculator`,
    images: [
      {
        url: "/og/vo2-max-calculator.png",
        width: 1200,
        height: 630,
        alt: "VO2 Max Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/vo2-max-calculator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "VO2 Max Calculator - Estimate Your Aerobic Fitness Level",
    description:
      "Estimate your VO2 max using the heart rate method or Cooper 12-minute run test. Find out your aerobic fitness level and how to improve it.",
    images: ["/og/vo2-max-calculator.png"],
  },
};

export default function Vo2MaxCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            VO2 Max Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Estimate your VO2 max — the gold standard measure of aerobic fitness — using your heart rate or a 12-minute run test.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your age, gender, and resting heart rate (or Cooper 12-minute run distance) to estimate your VO2 max and discover where you rank among your age group.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Vo2MaxCalculatorClient />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              VO2 Max — Common Questions
            </h2>

            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is VO2 max?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  VO2 max is the maximum rate at which your body can consume oxygen during intense exercise, measured in millilitres of oxygen per kilogram of body weight per minute (ml/kg/min). It is widely regarded as the gold standard indicator of aerobic fitness and cardiovascular health. A higher VO2 max means your heart, lungs, and muscles work more efficiently together to deliver and use oxygen during sustained effort.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is a good VO2 max?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  For men, a VO2 max of 40–50 ml/kg/min is considered good, and above 55 is excellent. For women, 35–45 is good, and above 50 is excellent. Elite endurance athletes such as marathon runners and cyclists often score 60–85 ml/kg/min — values that reflect years of training-driven cardiovascular adaptation. The average untrained adult scores in the 30s for women and low 40s for men.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How can I improve my VO2 max?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  The most effective methods are high-intensity interval training (HIIT), tempo runs, and long slow distance (LSD) runs. HIIT sessions — such as 4–6 intervals of 3–5 minutes near maximum effort — directly stress the aerobic system and produce the largest VO2 max gains. Combined with two or three easy Zone 2 runs per week, improvements of 10–20% are typical within 8–12 weeks for beginners and moderately trained athletes.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What is the Cooper 12-minute run test?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  The Cooper test, developed by Dr. Kenneth Cooper in 1968 for U.S. military fitness assessment, involves running as far as possible in exactly 12 minutes on a flat surface. The distance covered predicts VO2 max using the formula: VO2max = (distanceMeters − 504.9) / 44.73. It remains one of the most widely used field tests in sports science because it requires no lab equipment — just a measured track and a stopwatch.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Does VO2 max decline with age?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Yes. After approximately age 25, VO2 max declines at roughly 1% per year on average in sedentary individuals. However, regular aerobic training significantly slows this decline — active individuals in their 60s and 70s often maintain VO2 max values comparable to sedentary people 20 years younger. The key is consistent cardiovascular exercise: even moderate amounts of running, cycling, or swimming preserve aerobic capacity well into older age.
                </p>
              </details>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                <a href="/tools/heart-rate-zones-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Heart Rate Zones Calculator</a>
                <a href="/tools/resting-heart-rate-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Resting Heart Rate Calculator</a>
                <a href="/tools/running-pace-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Running Pace Calculator</a>
              </div>
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["vo2-max-calculator"] || []} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Aerobic Fitness Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Track your daily activity and improve your aerobic fitness with the Steps app.
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
                name: "What is VO2 max?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "VO2 max is the maximum rate at which your body can consume oxygen during intense exercise, measured in ml/kg/min. It is the gold standard indicator of aerobic fitness and cardiovascular health.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good VO2 max?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For men, 40–50 ml/kg/min is good and above 55 is excellent. For women, 35–45 is good and above 50 is excellent. Elite endurance athletes often score 60–85 ml/kg/min.",
                },
              },
              {
                "@type": "Question",
                name: "How can I improve my VO2 max?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "High-intensity interval training (HIIT), tempo runs, and long slow distance runs are the most effective methods. Improvements of 10–20% are typical within 8–12 weeks.",
                },
              },
              {
                "@type": "Question",
                name: "What is the Cooper 12-minute run test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Cooper test involves running as far as possible in 12 minutes. Distance predicts VO2 max using: VO2max = (distanceMeters − 504.9) / 44.73. Developed in 1968 for U.S. military fitness assessment.",
                },
              },
              {
                "@type": "Question",
                name: "Does VO2 max decline with age?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, approximately 1% per year after age 25 in sedentary individuals. Regular aerobic training significantly slows this decline — active older adults often maintain VO2 max values 20 years younger than sedentary peers.",
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
