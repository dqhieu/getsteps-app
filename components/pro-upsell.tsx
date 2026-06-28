/**
 * Secondary, warm-audience upsell to the web2app Pro checkout. Rendered
 * alongside (never instead of) the primary App Store free-download CTA, so the
 * proven download funnel stays the primary action. Links to /get-pro, which
 * redirects to the RevenueCat web checkout.
 */
export function ProUpsell() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-neutral-500 dark:text-neutral-400">
        Already using Steps?
      </span>
      <a
        href="/get-pro"
        data-fast-goal="get-pro"
        className="inline-block rounded-full border border-[#ED772F] text-[#ED772F] text-sm font-semibold px-4 py-2 transition-colors hover:bg-[#ED772F]/10 active:scale-95"
      >
        Get Pro — 20% off the App Store
      </a>
    </div>
  );
}
