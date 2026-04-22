import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { PersonaLinks } from "@/components/persona-links";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_PERSONAS } from "@/lib/internal-links";
import { TrainingPaceZonesCalculatorClient } from "./client";

export const metadata: Metadata = {
  title: "Training Pace Zones Calculator - Running Pace Zones for Your Fitness",
  description:
    "Calculate your 5 running training pace zones from any recent race result. Get exact pace ranges for easy runs, tempo, threshold, and VO2 max intervals.",
  keywords: [
    "training pace zones",
    "running pace zones calculator",
    "Jack Daniels running zones",
    "tempo run pace calculator",
    "easy run pace calculator",
    "interval training pace",
    "threshold pace calculator",
  ],
  openGraph: {
    title: "Training Pace Zones Calculator - Running Pace Zones for Your Fitness",
    description:
      "Calculate your 5 running training pace zones from any recent race result. Get exact pace ranges for easy runs, tempo, threshold, and VO2 max intervals.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/training-pace-zones`,
    images: [
      {
        url: "/og/training-pace-zones.png",
        width: 1200,
        height: 630,
        alt: "Training Pace Zones Calculator",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/training-pace-zones`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Pace Zones Calculator - Running Pace Zones for Your Fitness",
    description:
      "Calculate your 5 running training pace zones from any recent race result. Get exact pace ranges for easy runs, tempo, threshold, and VO2 max intervals.",
    images: ["/og/training-pace-zones.png"],
  },
};

export default function TrainingPaceZonesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Training Pace Zones Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get your personalized running training zones based on your recent race performance.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter a recent race time to calculate your 5 running training pace zones — from easy recovery runs to high-intensity intervals. Use these to structure your training for maximum improvement.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <TrainingPaceZonesCalculatorClient />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Understanding Training Pace Zones
            </h2>

            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What are training pace zones?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Training pace zones are specific pace ranges that target different energy systems during running. Each zone produces distinct physiological adaptations: easy zones build aerobic base and mitochondrial density, while harder zones develop lactate threshold and VO2 max. Running at the right intensity for each workout — rather than always going moderately hard — is one of the most important principles in structured endurance training.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How many pace zones are there?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Most training systems use 5 zones, though some coaches prefer 3 (easy, moderate, hard) or 7 (used in Garmin and Polar systems). The 5-zone model — Easy, Aerobic, Tempo, Threshold, and VO2 Interval — is the most practical for recreational and competitive runners. It aligns with Jack Daniels&apos; VDOT framework and is widely supported by sports science research on optimal training intensity distribution.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What pace should my easy runs be?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Easy runs (Zone 1–2) should feel genuinely comfortable — you should be able to hold a full conversation without gasping. They are typically 60–90 seconds per kilometre slower than your 5K race pace. Many runners make the mistake of running their easy days too hard, accumulating fatigue that compromises quality in hard sessions. True easy running is slower than most people think, and it is where the majority of your aerobic adaptations actually occur.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How often should I run in each zone?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  The 80/20 rule, supported by research on elite distance runners, recommends spending approximately 80% of training volume in Zones 1–2 and 20% in Zones 3–5. This polarized approach produces better results than training at moderate intensity most of the time. A typical weekly structure might include 3–4 easy runs, one long run, one tempo session (Zone 4), and one interval session (Zone 5) — all in the right zones, not just hard effort.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How do I improve my threshold pace?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Lactate threshold pace (Zone 4) improves most effectively with weekly tempo runs of 20–40 minutes at a comfortably hard effort — the pace you could sustain for roughly one hour in a race. As your body adapts, it clears lactate more efficiently, allowing you to run faster before accumulating fatigue. Adding one threshold session per week for 8–12 weeks typically produces measurable improvements in 10K and half marathon race times.
                </p>
              </details>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                <a href="/tools/running-pace-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Running Pace Calculator</a>
                <a href="/tools/marathon-pace-predictor" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Marathon Race Predictor</a>
                <a href="/tools/heart-rate-zones-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Heart Rate Zones Calculator</a>
              </div>
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["training-pace-zones"] || []} />
          <PersonaLinks items={TOOL_RELATED_PERSONAS["training-pace-zones"] || []} />
          <ToolHowToBlock slug="training-pace-zones" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Your Runs and Daily Steps
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
                name: "What are training pace zones?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Training pace zones are specific pace ranges that target different energy systems. Each zone produces distinct adaptations — easy zones build aerobic base while harder zones develop lactate threshold and VO2 max.",
                },
              },
              {
                "@type": "Question",
                name: "How many pace zones are there?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most systems use 5 zones: Easy, Aerobic, Tempo, Threshold, and VO2 Interval. This 5-zone model aligns with Jack Daniels' VDOT framework and is widely supported by sports science research.",
                },
              },
              {
                "@type": "Question",
                name: "What pace should my easy runs be?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Easy runs should feel genuinely comfortable with full conversation possible. Typically 60–90 seconds per kilometre slower than your 5K race pace. Most runners run their easy days too fast.",
                },
              },
              {
                "@type": "Question",
                name: "How often should I run in each zone?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 80/20 rule recommends 80% of training in easy zones (1–2) and 20% in hard zones (3–5). This polarized approach produces better results than training at moderate intensity most of the time.",
                },
              },
              {
                "@type": "Question",
                name: "How do I improve my threshold pace?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weekly tempo runs of 20–40 minutes at Zone 4 pace improve lactate clearance. One threshold session per week for 8–12 weeks produces measurable improvements in 10K and half marathon times.",
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
