import Image from "next/image";
import { SCREENSHOTS } from "@/lib/constants";

export function LandingScreenshots() {
  return (
    <section className="py-12 md:py-16">
      <div className="w-full max-w-[1400px] mx-auto relative">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

        {/* Scrollable container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-32 scrollbar-hide">
          {SCREENSHOTS.map((src, index) => (
            <div
              key={index}
              className="snap-center shrink-0 first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0"
            >
              <div className="relative w-[280px] md:w-[320px] aspect-[1170/2532] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={src}
                  alt={`Steps app showing ${
                    index === 0
                      ? "daily step count dashboard"
                      : index === 1
                        ? "weekly activity charts"
                        : index === 2
                          ? "workout tracking"
                          : index === 3
                            ? "personal records"
                            : index === 4
                              ? "yearly insights"
                              : index === 5
                                ? "goal settings"
                                : "app widgets"
                  }`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
