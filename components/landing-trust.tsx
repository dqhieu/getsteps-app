import { PRESS_ARTICLES, SITE_CONFIG } from "@/lib/constants";
import { Reveal } from "./landing-reveal";

export function LandingTrust() {
  return (
    <section className="py-14 md:py-20 border-y border-neutral-200/70 dark:border-white/5 bg-neutral-50/60 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <span className="text-amber-500" aria-hidden>
                ★★★★★
              </span>
              <span className="font-medium">
                <span className="tabular-nums">{SITE_CONFIG.appStoreRating}</span>{" "}
                rating
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span>Loved by thousands of walkers</span>
            </div>

            <p className="mt-10 text-xs font-medium tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
              FEATURED IN
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {PRESS_ARTICLES.map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-neutral-200 dark:border-white/10 px-4 py-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:border-[#ED772F]/50 hover:text-[#ED772F] transition-colors"
                >
                  {article.outlet}
                </a>
              ))}
            </div>

            <a
              href="https://www.youtube.com/watch?v=hx-JzOCNBbM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Appreciation, starring Erick the Architect, on YouTube"
              className="mt-10 relative block w-full max-w-sm rounded-3xl overflow-hidden bg-black shadow-sm"
            >
              <video
                className="w-full aspect-square object-cover"
                src="/featured/appreciation.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 pb-5 pt-10 bg-gradient-to-t from-black/80 to-transparent text-center">
                <p className="text-sm font-semibold tracking-[0.3em] text-white/80">
                  APPRECIATION
                </p>
                <p className="text-xs font-medium text-white/50 mt-1">
                  starring Erick the Architect
                </p>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
