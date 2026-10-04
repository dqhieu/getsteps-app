import type { Metadata } from "next";
import Link from "next/link";
import { LandingNavbar, LandingFooter } from "@/components";
import { SITE_CONFIG, PRESS_ARTICLES } from "@/lib/constants";

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

export default function PressPage() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Hero */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-foreground">
                In the Press
              </h1>
              <p className="text-muted">
                Steps has been featured in leading tech publications.
              </p>
            </header>

            {/* Featured Coverage */}
            <section className="mb-16">
              <h2 className="text-xl font-medium text-foreground mb-6">
                Featured Coverage
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {PRESS_ARTICLES.map((article) => (
                  <a
                    key={article.url}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-border p-6 hover:border-accent/50 dark:hover:border-accent/50 transition-colors"
                  >
                    <p className="text-sm font-semibold text-accent mb-1">
                      {article.outlet}
                    </p>
                    <p className="text-xs text-muted mb-3">
                      {article.date} · {article.author}
                    </p>
                    <p className="font-medium text-foreground mb-2">
                      {article.title}
                    </p>
                    <p className="text-sm text-muted">
                      {article.summary}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* Press Kit */}
            <section className="mb-16">
              <div className="rounded-2xl border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-medium text-foreground mb-1">
                    Press Kit
                  </h2>
                  <p className="text-sm text-muted">
                    Logos, screenshots, and app information for media use.
                  </p>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1IkduOJ2FA47tvVzUXEU9MbBb4-AF6SSw?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-[#d9691f] transition-colors shrink-0"
                >
                  Download Press Kit
                </a>
              </div>
            </section>

            {/* Learn More */}
            <section className="mb-16">
              <h2 className="text-xl font-medium text-foreground mb-6">
                Learn More
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="/about"
                  className="block rounded-[20px] bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:-translate-y-px hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="font-medium text-foreground">
                    About Steps
                  </p>
                </Link>
                <Link
                  href="/blog"
                  className="block rounded-[20px] bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:-translate-y-px hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="font-medium text-foreground">
                    Steps Blog
                  </p>
                </Link>
                <Link
                  href="/tools"
                  className="block rounded-[20px] bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:-translate-y-px hover:shadow-[var(--shadow-border-hover)]"
                >
                  <p className="font-medium text-foreground">
                    Free Fitness Tools
                  </p>
                </Link>
              </div>
            </section>

            {/* Press Contact */}
            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">
                Press Contact
              </h2>
              <p className="text-muted">
                For press inquiries, reach out at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="text-foreground hover:underline"
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
