import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar, LandingFooter } from "@/components";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Steps",
  description:
    "My wife and I started running last year. Walking 10K steps and running 10KM weekly cleared our minds — so we built Steps.",
  alternates: {
    canonical: "https://getsteps.app/about",
  },
};

const PHOTOS = [
  { src: "/about/race-1.jpg", alt: "Hieu and his wife at a 10K race finish line" },
  { src: "/about/race-2.jpg", alt: "Running together on a morning trail" },
  { src: "/about/race-3.jpg", alt: "Post-race celebration with medals" },
];

const STATS = [
  { value: "10,000", label: "steps walked daily" },
  { value: "10 KM", label: "run every week" },
  { value: "1 app", label: "built with love" },
];

export default function AboutPage() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-orange-500/30">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Hero */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                About Steps
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Built by runners who wanted a step counter that felt right.
              </p>
            </header>

            {/* Our Story */}
            <section className="mb-16">
              <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  My wife and I started running last year. Neither of us was
                  particularly athletic — we just wanted to move more and clear
                  our heads. So we signed up for a local 10K, laced up, and
                  started showing up.
                </p>
                <p>
                  What surprised us was how much it changed the way we think.
                  Walking 10,000 steps every day became a daily reset. Running
                  10KM every weekend became the thing we looked forward to most.
                  The rhythm of it — one foot in front of the other — gave us
                  space to process ideas, solve problems, and just breathe.
                </p>
                <p>
                  Along the way, we tried a bunch of step counter apps. Some
                  were bloated with social features we didn&apos;t need. Others
                  looked like they hadn&apos;t been updated since 2018. We wanted
                  something simple, beautiful, and private — so we built Steps.
                </p>
              </div>
            </section>

            {/* Photo Gallery */}
            <section className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PHOTOS.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* By the Numbers */}
            <section className="mb-16">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Download CTA */}
            <section className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
                Ready to track every step?
              </h2>
              <a
                href={SITE_CONFIG.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 active:scale-95 inline-block mb-6"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/badge_light_mode.svg"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-14 w-auto dark:hidden"
                />
                <Image
                  src="/badge_dark_mode.svg"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-14 w-auto hidden dark:block"
                />
              </a>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Free forever · Pro features available
              </p>
            </section>
          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
