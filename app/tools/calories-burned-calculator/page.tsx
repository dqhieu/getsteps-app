import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { CaloriesBurnedCalculatorClient } from "./client";
import { ToolAppCta, ToolStickyCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_TOOLS, TOOL_RELATED_BLOGS } from "@/lib/internal-links";
import { SITE_CONFIG } from "@/lib/constants";

const SLUG = "calories-burned-calculator";

export const metadata: Metadata = {
  title: "Calories Burned Calculator: 50+ Activities, MET-Based",
  description:
    "Calculate calories burned for 50+ activities from walking to HIIT. A 70 kg adult burns 360 calories running 30 minutes, 129 walking. Free MET-based calculator.",
  keywords: [
    "calories burned calculator",
    "calorie burn calculator",
    "exercise calorie calculator",
    "workout calorie calculator",
    "activity calorie calculator",
    "calories burned running calculator",
    "calories burned cycling calculator",
    "calories burned swimming calculator",
    "MET calculator",
    "how many calories did I burn",
  ],
  openGraph: {
    title: "Calories Burned Calculator: 50+ Activities, MET-Based",
    description:
      "Calculate calories burned across 50+ activities using MET values from the Compendium of Physical Activities.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [{ url: `/og/${SLUG}.png`, width: 1200, height: 630, alt: "Calories Burned Calculator" }],
  },
  alternates: { canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}` },
  twitter: {
    card: "summary_large_image",
    title: "Calories Burned Calculator: 50+ Activities, MET-Based",
    description:
      "Calculate calories burned across 50+ activities using MET values from the Compendium of Physical Activities.",
    images: [`/og/${SLUG}.png`],
  },
};

const FAQS = [
  {
    q: "How are calories burned calculated?",
    a: "Through MET values. One MET is your resting metabolic rate, defined as 3.5 ml of oxygen per kilogram per minute. An activity rated 8 METs costs eight times that. The arithmetic is: calories per minute = MET × 3.5 × weight in kg ÷ 200. A 70 kg adult running at 10 km/h (9.8 MET) burns about 12 calories a minute, so 360 over half an hour.",
  },
  {
    q: "What is the difference between gross and net calories?",
    a: "Gross calories are everything you burned during the activity, including the resting energy you would have spent sitting on the sofa. Net calories are the extra cost of the activity alone. For a 30 minute run the difference is around 10%, but for low-intensity activity it is much larger: half an hour of walking might show 129 gross and only 92 net. If you are logging exercise against a calorie budget, net is the honest number, because your TDEE already counted the resting portion.",
  },
  {
    q: "How accurate are MET-based estimates?",
    a: "Within roughly 10 to 15% for most people, which is about as good as anything short of a metabolic cart. MET values are population averages, so they cannot see your efficiency, fitness level, or body composition. A trained runner burns less than an untrained one at the same pace because their movement is more economical. Treat the output as a good estimate, not a measurement.",
  },
  {
    q: "Why does my fitness tracker give a different number?",
    a: "Most wrist trackers estimate from heart rate rather than MET values, and heart rate responds to heat, caffeine, stress and dehydration as well as to effort. Trackers also frequently report gross calories while your calorie app expects net. Gym machines are worse still: they typically assume a default body weight and overstate burn by 15 to 25%.",
  },
  {
    q: "Does body weight change how many calories I burn?",
    a: "Substantially, and proportionally. Calorie cost scales linearly with body mass, so a 90 kg person burns about 29% more than a 70 kg person doing exactly the same activity for the same time. This is why heavier people often see faster early weight loss from the same routine, and why the burn shrinks as they get lighter.",
  },
  {
    q: "Which activity burns the most calories?",
    a: "Per minute, running fast, jump rope and martial arts sit at the top, around 11 to 14.5 METs. But total burn is intensity multiplied by duration, and that is where the ranking changes. Most people cannot sustain 14 METs for more than a few minutes, while a 5 MET walk can run for an hour without difficulty. An hour of brisk walking beats ten minutes of sprinting.",
  },
  {
    q: "How many calories does walking burn compared to running?",
    a: "Running roughly doubles the per-minute rate. For a 70 kg adult, moderate walking (3.5 MET) burns about 4.3 calories a minute and running at 10 km/h (9.8 MET) about 12. But the gap narrows on any realistic comparison: 60 minutes of walking burns 258 calories, while the 20 minutes of running most beginners can actually manage burns 240.",
  },
];

export default function CaloriesBurnedCalculatorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Calories Burned Calculator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Calories burned across 50+ activities, from a slow walk to a HIIT
            session. Uses MET values from the Compendium of Physical Activities,
            and separates gross burn from what the activity actually added.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <CaloriesBurnedCalculatorClient
            resultCta={
              <ToolAppCta
                headline="Stop estimating one workout at a time"
                description="Steps counts your movement all day in the background and turns it into a running calorie total, no activity picker required."
              />
            }
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              How We Calculate Calories Burned
            </h2>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400">
              <p>
                Every activity carries a MET rating, its energy cost as a
                multiple of sitting still. Those ratings come from the 2011
                Compendium of Physical Activities, the reference researchers use
                for exactly this purpose.
              </p>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">The Formula</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Calories per minute</strong> = MET × 3.5 × weight(kg) ÷ 200
                  </li>
                  <li>
                    <strong>Net calories</strong> = gross × (MET − 1) ÷ MET,
                    stripping out the resting energy you would have spent anyway
                  </li>
                  <li>
                    1 MET = 3.5 ml O₂/kg/min, the oxygen uptake of a body at rest
                  </li>
                  <li>
                    <strong>Example:</strong> 70 kg running at 10 km/h is 9.8
                    MET, so 12.0 cal/min, 360 calories over 30 minutes, of which
                    323 are net.
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                Every result also converts to a walking equivalent in minutes and
                steps. A 30 minute run at 10 km/h comes out at roughly 84 minutes
                of moderate walking, about 8,400 steps, which is a more useful
                frame than a bare calorie figure if you track your day in steps.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="font-medium text-neutral-900 dark:text-white mb-3">Related Calculators</h3>
              <div className="flex flex-wrap gap-2">
                {TOOL_RELATED_TOOLS[SLUG]?.map((tool) => (
                  <a key={tool.href} href={tool.href}
                    className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {tool.title}
                  </a>
                ))}
              </div>
            </div>

            <RelatedBlogPosts items={TOOL_RELATED_BLOGS[SLUG] || []} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Track Every Calorie Automatically
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Download the Steps app to count your steps and calories burned in the
            background, all day, without logging anything.
          </p>
          <a href={SITE_CONFIG.appStoreUrl} data-fast-goal="open-app-store"
            target="_blank" rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store">
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
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <LandingFooter />
      <div aria-hidden className="h-20 md:hidden" />
      <ToolStickyCta label="Track your steps with Steps" />
    </div>
  );
}
