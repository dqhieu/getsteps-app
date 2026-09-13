import Image from "next/image";
import { SPOTLIGHTS } from "@/lib/constants";
import { getLandingIcon } from "@/lib/landing-icons";
import { Reveal } from "./landing-reveal";

function SpotlightMedia({
  src,
  title,
  width,
  height,
}: {
  src: string;
  title: string;
  width?: number;
  height?: number;
}) {
  const isVideo = src.endsWith(".mp4");

  if (isVideo) {
    return (
      <div className="relative mx-auto w-[260px] md:w-[300px] aspect-[1170/2532]">
        <video
          className="h-full w-full object-contain"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className="mx-auto w-[260px] md:w-[320px]">
      <Image
        src={src}
        alt={`${title} shown in the Steps app`}
        width={width ?? 600}
        height={height ?? 1200}
        className="h-auto w-full"
        sizes="(min-width: 768px) 320px, 260px"
      />
    </div>
  );
}

export function LandingSpotlights() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-4xl px-4 flex flex-col gap-20 md:gap-28">
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
                  <SpotlightMedia
                    src={item.media}
                    title={item.title}
                    width={item.mediaWidth}
                    height={item.mediaHeight}
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
