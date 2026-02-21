import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { MarathonRacePredictorClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { TOOL_RELATED_BLOGS } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "Marathon Race Predictor - Predict Your Finish Time from Any Distance",
  description:
    "Predict your marathon, half marathon, 10K, and 5K finish times from any recent race result using the Riegel formula. Free and instant race time predictor.",
  keywords: [
    "marathon race predictor",
    "race time predictor",
    "marathon time calculator",
    "half marathon time predictor",
    "Riegel formula calculator",
    "predict marathon finish time",
    "5k to marathon time converter",
  ],
  openGraph: {
    title: "Marathon Race Predictor - Predict Your Finish Time from Any Distance",
    description:
      "Predict your marathon, half marathon, 10K, and 5K finish times from any recent race result using the Riegel formula.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/marathon-pace-predictor`,
    images: [{ url: "/og/marathon-pace-predictor.png", width: 1200, height: 630, alt: "Marathon Race Predictor" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/marathon-pace-predictor` },
  twitter: {
    card: "summary_large_image",
    title: "Marathon Race Predictor - Predict Your Finish Time from Any Distance",
    description: "Free race time predictor using the Riegel formula. Enter any race result, get predictions for 5K, 10K, half marathon, and marathon.",
    images: ["/og/marathon-pace-predictor.png"],
  },
};

export default function MarathonPacePredictorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Marathon Race Predictor
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Enter any recent race result to predict your finish times across all standard race distances.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Enter your recent race time and distance to instantly predict your 5K, 10K, half marathon, and marathon finish times using the Riegel formula — the gold standard for race time prediction.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <MarathonRacePredictorClient />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              About Race Time Prediction
            </h2>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">Common Questions</h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How accurate is the Riegel formula?
                    </summary>
                    <p className="mt-2 text-sm">
                      The Riegel formula is accurate to within ±5–10% for well-trained runners predicting across similar distances. Accuracy decreases with large distance gaps (e.g. 5K to marathon) or when the input race was not run at maximum effort.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is the Riegel formula?
                    </summary>
                    <p className="mt-2 text-sm">
                      T2 = T1 × (D2/D1)^1.06, where T1 is your known finish time, D1 is the known distance, D2 is the target distance, and T2 is the predicted time. The exponent 1.06 accounts for the increasing effect of fatigue over longer distances.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      Can I predict a marathon from a 5K?
                    </summary>
                    <p className="mt-2 text-sm">
                      Yes, but the prediction will be less accurate. The formula works best with input races closer to the target distance. For marathon prediction, a recent 10K or half marathon result will give the most reliable estimate.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      What is a good marathon finish time?
                    </summary>
                    <p className="mt-2 text-sm">
                      Beginner: 4:30–5:30 | Intermediate: 3:30–4:30 | Advanced: under 3:30 | Elite: under 2:30. The average marathon finish time is around 4:30 for men and 4:55 for women.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                      How do I use this to pace my race?
                    </summary>
                    <p className="mt-2 text-sm">
                      Use the pace column for your target distance to set your per-kilometer strategy. For example, if your predicted marathon pace is 5:30/km, aim to run the first half slightly slower (5:35/km) and negative split the second half.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Calculators</p>
            <div className="flex flex-wrap gap-2">
              {[
                ["Running Pace Calculator", "/tools/running-pace-calculator"],
                ["Heart Rate Zones Calculator", "/tools/heart-rate-zones-calculator"],
                ["Activity to Steps Converter", "/tools/activity-to-steps-converter"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["marathon-pace-predictor"] || []} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Train Smarter With the Steps App
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Train smarter by tracking your daily steps and activity in the Steps app.
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
              { "@type": "Question", name: "How accurate is the Riegel formula?", acceptedAnswer: { "@type": "Answer", text: "The Riegel formula is accurate to within ±5–10% for trained runners. Accuracy decreases with large distance gaps or when the input race was not run at maximum effort." } },
              { "@type": "Question", name: "What is the Riegel formula?", acceptedAnswer: { "@type": "Answer", text: "T2 = T1 × (D2/D1)^1.06. The exponent 1.06 accounts for the increasing effect of fatigue over longer distances." } },
              { "@type": "Question", name: "Can I predict a marathon from a 5K?", acceptedAnswer: { "@type": "Answer", text: "Yes, but less accurate. For marathon prediction, a recent 10K or half marathon gives the most reliable estimate." } },
              { "@type": "Question", name: "What is a good marathon finish time?", acceptedAnswer: { "@type": "Answer", text: "Beginner: 4:30–5:30 | Intermediate: 3:30–4:30 | Advanced: under 3:30 | Elite: under 2:30." } },
              { "@type": "Question", name: "How do I use this to pace my race?", acceptedAnswer: { "@type": "Answer", text: "Use the pace column for your target distance to set your per-kilometer strategy on race day." } },
            ],
          }),
        }}
      />

      <LandingFooter />
    </div>
  );
}
