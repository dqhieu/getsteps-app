import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { StravaStatsGenerator } from "@/components/strava-stats-generator";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { ToolHowToBlock } from "@/components/tool-how-to-block";
import { ToolAppCta } from "@/components/tool-app-cta";
import { TOOL_RELATED_BLOGS, TOOL_RELATED_TOOLS } from "@/lib/internal-links";

const SLUG = "strava-stats-generator";

export const metadata: Metadata = {
  title: "Strava Stats Generator - Free Workout Stats Card Maker | Steps",
  description:
    "Turn your Strava run into a transparent stats overlay for Instagram Stories. Enter distance and time, get pace calculated automatically, and download a free 1080x1080 transparent PNG.",
  keywords: [
    "strava stats generator",
    "strava workout stats",
    "strava stats overlay",
    "transparent workout stats png",
    "running stats overlay instagram",
    "workout stats image",
    "share running stats",
    "instagram story running stats",
  ],
  openGraph: {
    title: "Strava Stats Generator - Transparent Workout Stats Overlay",
    description:
      "Turn your Strava run into a transparent stats overlay for Instagram Stories. Distance, moving time, and auto-calculated pace on a free downloadable PNG.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
    images: [
      {
        url: `/og/${SLUG}.png`,
        width: 1200,
        height: 630,
        alt: "Strava Stats Generator - Free Workout Stats Card Maker",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/${SLUG}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Strava Stats Generator - Transparent Workout Stats Overlay",
    description:
      "Turn your Strava run into a transparent stats overlay for Instagram Stories. Distance, moving time, and auto-calculated pace on a free downloadable PNG.",
    images: [`/og/${SLUG}.png`],
  },
};

const FAQS = [
  {
    question: "How do I make a stats overlay from my Strava run?",
    answer:
      "Open the activity in Strava and read off the distance and moving time, then type both into the form above. Pace is calculated for you. Tap Download to save a transparent PNG with just those three stats on it.",
  },
  {
    question: "How do I put the overlay on my photo?",
    answer:
      "Open Instagram Stories and pick the photo you want to post. Tap the sticker button, choose the photo sticker, and select the PNG you downloaded. Because the background is transparent, only the text lands on your image — then pinch to resize and drag it wherever it sits best. The same trick works in TikTok, Snapchat, and any photo editor that supports layers.",
  },
  {
    question: "Is this tool affiliated with Strava?",
    answer:
      "No. This is a free tool from Steps, and it is not affiliated with, endorsed by, or connected to Strava. It produces an original, unbranded graphic of the numbers you enter — not a copy of a Strava activity screen.",
  },
  {
    question: "How is pace calculated?",
    answer:
      "Pace is your moving time divided by your distance, shown as minutes and seconds per kilometer or per mile depending on the unit you pick. A 10 km run in 52:30 works out to 5:15 per kilometer. You never type pace in yourself — it always follows from the distance and time you enter.",
  },
  {
    question: "What size is the image?",
    answer:
      "1080 by 1080 pixels — a square 1:1 that works as a feed post and drops cleanly onto a Stories or TikTok photo, where you can pinch to resize and place it. The stats are centered, so they read well wherever you position the overlay.",
  },
  {
    question: "Why is the background transparent?",
    answer:
      "So the overlay layers onto a photo you already took rather than replacing it. A solid card covers your run photo; a transparent PNG lets the stats sit on top of it. The text carries a soft drop shadow so it stays readable over bright backgrounds like snow or sky.",
  },
  {
    question: "Is my workout data uploaded anywhere?",
    answer:
      "No. The overlay is drawn in your browser with a canvas element and saved straight to your device. Nothing you type is sent to a server, stored, or logged.",
  },
  {
    question: "Does Strava show step count?",
    answer:
      "No — Strava records distance, time, and pace, but it does not count steps for your day. If you want step tracking alongside your runs, the Steps app reads step data from your iPhone and Apple Watch and shows it next to your workouts.",
  },
];

export default function StravaStatsGeneratorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Strava Stats Generator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Turn the run you just logged into a transparent stats overlay for
            your Story. Enter your distance and time — we work out the pace and
            hand you a free PNG that drops straight onto your photo.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <StravaStatsGenerator />

          <ToolAppCta
            headline="Track the steps Strava misses"
            description="Steps counts every step from your iPhone and Apple Watch and shows it right alongside your runs — plus streaks, trends, and a free Year in Review."
          />
        </div>
      </section>

      {/* Explainer + FAQ */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Why a Transparent Overlay?
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              The photo is the post. You took a picture at the turnaround point
              or at the finish line, and that is what people want to see — a
              solid stats card just covers it up. A transparent PNG keeps your
              photo and lays the three numbers that matter — distance, moving
              time, and pace — on top of it, at a size that is readable on a
              phone.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              This generator works with any run, walk, or ride, whether you
              recorded it in Strava, Garmin Connect, Apple Watch, Nike Run Club,
              or on a treadmill with no tracking at all. Type in what you did and
              the overlay is ready in seconds — no account, no email, no
              watermark.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-6 bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Related tools */}
          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
              Related Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {(TOOL_RELATED_TOOLS[SLUG] || []).map((tool) => (
                <a
                  key={tool.href}
                  href={tool.href}
                  className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
                >
                  {tool.title}
                </a>
              ))}
            </div>
          </div>

          <RelatedBlogPosts items={TOOL_RELATED_BLOGS[SLUG] || []} />
          <ToolHowToBlock slug={SLUG} />

          <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
            Steps is not affiliated with, endorsed by, or connected to Strava.
            Strava is a trademark of Strava, Inc. Overlays generated here are
            original graphics built from the numbers you enter.
          </p>
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
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <LandingFooter />
    </div>
  );
}
