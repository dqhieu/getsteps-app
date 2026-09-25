import Image from "next/image";
import { PRESS_ARTICLES, REVIEWS, SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { interpolate } from "@/lib/i18n/format";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { getLandingMessages } from "@/lib/i18n/messages/landing";
import { Reveal } from "./landing-reveal";

// Convert an ISO 3166-1 alpha-2 country code to its flag emoji.
function flagEmoji(countryCode: string): string {
  const base = 0x1f1e6;
  const offset = 0x41;
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(base + char.charCodeAt(0) - offset))
    .join("");
}

function Laurel({ side }: { side: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className="block h-7 shrink-0 text-white/40"
      style={{
        width: "1.05rem",
        backgroundColor: "currentColor",
        maskImage: `url(/reviews/laurel-${side}.svg)`,
        WebkitMaskImage: `url(/reviews/laurel-${side}.svg)`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

export function LandingTrust({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getLandingMessages(locale).trust;
  const common = getCommonMessages(locale);

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Featured in */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="text-sm md:text-base font-medium tracking-[0.3em] text-white/80">
              {t.featuredIn}
            </p>
            <a
              href="https://www.youtube.com/watch?v=hx-JzOCNBbM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.videoAria}
              className="mt-6 block w-full max-w-sm text-center"
            >
              <div className="rounded-3xl overflow-hidden bg-black">
                <video
                  className="w-full aspect-square object-cover"
                  src="/featured/appreciation.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden
                />
              </div>
              <p className="-mt-8 text-sm font-semibold tracking-[0.3em] text-white/80">
                {t.videoTitle}
              </p>
              <p className="mt-1 text-xs font-medium text-white/50">
                {t.videoCredit}
              </p>
            </a>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {PRESS_ARTICLES.map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-white/70 hover:border-[#ED772F]/50 hover:text-[#ED772F] transition-colors"
                >
                  {article.outlet}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Loved by thousands */}
        <Reveal>
          <div className="mt-20 flex items-center justify-center gap-3">
            <Laurel side="left" />
            <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-white/80">
              {t.lovedBy}
            </h2>
            <Laurel side="right" />
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
            <span className="text-amber-500" aria-hidden>
              ★★★★★
            </span>
            <span className="tabular-nums">
              {interpolate(common.appStore.ratingOnAppStore, {
                rating: SITE_CONFIG.appStoreRating,
              })}
            </span>
          </div>
        </Reveal>

        {/* Reviews are verbatim App Store quotes, so they stay in their original language. */}
        <div
          lang="en"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {REVIEWS.map((review, index) => (
            <Reveal key={review.title} delay={(index % 4) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-amber-500 mb-3" aria-label={t.fiveStars}>
                  ★★★★★
                </div>
                <h3 className="font-medium text-white mb-2">{review.title}</h3>
                <p className="text-sm text-white/60 mb-5 flex-1">{review.body}</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <span className="text-sm font-medium text-white/80">
                    {review.author}
                  </span>
                  <span className="text-base" aria-hidden>
                    {flagEmoji(review.country)}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
