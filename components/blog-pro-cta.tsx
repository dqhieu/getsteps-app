import { ProUpsell } from "./pro-upsell";

/**
 * Pro-only CTA card for blog posts, which otherwise carry no app CTA. Blog
 * traffic is the coldest segment, so this is a low-prominence upsell measured
 * via the get-pro goal rather than a primary download push.
 */
export function BlogProCta() {
  return (
    <div className="mt-8 rounded-2xl border border-[#ED772F]/30 bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 p-6">
      <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
        Get more from every walk
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Steps Pro unlocks deeper insights and goals.
      </p>
      <ProUpsell />
    </div>
  );
}
