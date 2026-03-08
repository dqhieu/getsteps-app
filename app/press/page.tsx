import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar, LandingFooter } from "@/components";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "In the Press",
  description:
    "Steps has been featured in leading tech publications. Read press coverage and download our press kit.",
  alternates: {
    canonical: "https://getsteps.app/press",
  },
  openGraph: {
    title: "In the Press",
    description: "Steps has been featured in leading tech publications. Read press coverage and download our press kit.",
    url: "https://getsteps.app/press",
    images: [{ url: "/meta.png", width: 1200, height: 630, alt: "Steps Press Coverage" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "In the Press",
    description: "Steps has been featured in leading tech publications. Read press coverage and download our press kit.",
    images: ["/meta.png"],
  },
};

const PRESS_ARTICLES = [
  {
    outlet: "iPhoneBlog.de",
    url: "https://www.iphoneblog.de/2026/02/21/steps-visualisiert-das-tagliche-schrittziel/",
    title: "Steps visualisiert das tägliche Schrittziel",
    summary:
      "A look at how Steps visualizes your daily step goal with beautiful charts, widgets, and personal records.",
    author: "Alex Olma",
    date: "Feb 21, 2026",
  },
  {
    outlet: "iphone-ticker.de",
    url: "https://www.iphone-ticker.de/schrittzaehler-mit-mehrwert-compresto-entwickler-startet-steps-273418/",
    title:
      'Schrittzähler mit Mehrwert: Compresto-Entwickler startet „Steps"',
    summary:
      "How the Compresto developer built Steps as a step counter with real added value — workouts, App Lock, and more.",
    author: "Nicolas",
    date: "Feb 23, 2026",
  },
] as const;


export default function PressPage() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-orange-500/30">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Hero */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                In the Press
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Steps has been featured in leading tech publications.
              </p>
            </header>

            {/* Featured Coverage */}
            <section className="mb-16">
              <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-6">
                Featured Coverage
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {PRESS_ARTICLES.map((article) => (
                  <a
                    key={article.url}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-[#ED772F]/50 dark:hover:border-[#ED772F]/50 transition-colors"
                  >
                    <p className="text-sm font-semibold text-[#ED772F] mb-1">
                      {article.outlet}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-3">
                      {article.date} · {article.author}
                    </p>
                    <p className="font-medium text-neutral-900 dark:text-white mb-2">
                      {article.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {article.summary}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* Press Kit */}
            <section className="mb-16">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-1">
                    Press Kit
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Logos, screenshots, and app information for media use.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1IkduOJ2FA47tvVzUXEU9MbBb4-AF6SSw?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#ED772F] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#d9691f] transition-colors shrink-0"
                >
                  Download Press Kit
                </a>
              </div>
            </section>

            {/* Learn More */}
            <section className="mb-16">
              <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-6">
                Learn More
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="/about"
                  className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors"
                >
                  <p className="font-medium text-neutral-900 dark:text-white">
                    About Steps
                  </p>
                </Link>
                <Link
                  href="/blog"
                  className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors"
                >
                  <p className="font-medium text-neutral-900 dark:text-white">
                    Steps Blog
                  </p>
                </Link>
                <Link
                  href="/tools"
                  className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors"
                >
                  <p className="font-medium text-neutral-900 dark:text-white">
                    Free Fitness Tools
                  </p>
                </Link>
              </div>
            </section>

            {/* Press Contact */}
            <section>
              <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">
                Press Contact
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                For press inquiries, reach out at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="text-neutral-900 dark:text-white hover:underline"
                >
                  {SITE_CONFIG.supportEmail}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
