import Image from "next/image";
import { REVIEWS } from "@/lib/constants";
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
      className="block h-7 shrink-0 text-neutral-400 dark:text-neutral-500"
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

export function LandingReviews() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50/60 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Laurel side="left" />
          <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-neutral-600 dark:text-neutral-300">
            LOVED BY THOUSANDS
          </h2>
          <Laurel side="right" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.title} delay={(index % 3) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 p-6">
                <div className="text-amber-500 mb-3" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
                  {review.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 flex-1">
                  {review.body}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
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
