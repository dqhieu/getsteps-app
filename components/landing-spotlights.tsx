import Image from "next/image";
import { SPOTLIGHTS } from "@/lib/constants";
import { getLandingIcon } from "@/lib/landing-icons";
import { Reveal } from "./landing-reveal";

function SpotlightMedia({ src, title }: { src: string; title: string }) {
  const isVideo = src.endsWith(".mp4");
  return (
    <div className="relative mx-auto w-[240px] md:w-[280px] aspect-[1170/2532] rounded-[2.25rem] overflow-hidden border-[7px] border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-black/5 dark:shadow-black/40">
      {isVideo ? (
        <video
          className="w-full h-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      ) : (
        <Image
          src={src}
          alt={`${title} shown in the Steps app`}
          fill
          className="object-cover"
          sizes="280px"
        />
      )}
    </div>
  );
}

export function LandingSpotlights() {
  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto px-4 flex flex-col gap-20 md:gap-28">
        {SPOTLIGHTS.map((item, index) => {
          const Icon = getLandingIcon(item.icon);
          const reversed = index % 2 === 1;
          return (
            <Reveal key={item.key}>
              <div
                className={`flex flex-col items-center gap-10 md:gap-16 ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="flex-1 max-w-md text-center md:text-left">
                  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 px-3 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {item.eyebrow}
                  </span>
                  <h2 className="mt-5 text-3xl md:text-4xl font-medium tracking-tight text-balance text-neutral-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <SpotlightMedia src={item.media} title={item.title} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
