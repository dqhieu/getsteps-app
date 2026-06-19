import { PRESS_ARTICLES } from "@/lib/constants";

export function LandingFeatured() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium tracking-[0.3em] text-white/60 mb-8">
          FEATURED IN
        </p>

        {/* Showcase video */}
        <div className="max-w-md mx-auto">
          <a
            href="https://www.youtube.com/watch?v=hx-JzOCNBbM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Appreciation, starring Erick the Architect, on YouTube"
            className="relative block rounded-3xl overflow-hidden bg-black"
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
              <p className="text-sm font-semibold tracking-[0.3em] text-white/75">
                APPRECIATION
              </p>
              <p className="text-xs font-medium text-white/50 mt-1">
                starring Erick the Architect
              </p>
            </div>
          </a>
        </div>

        {/* Press strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {PRESS_ARTICLES.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/70 hover:border-[#ED772F]/50 hover:text-[#ED772F] transition-colors"
            >
              {article.outlet}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
