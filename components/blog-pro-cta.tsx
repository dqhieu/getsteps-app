import { Crown } from "lucide-react";
import { ProUpsell } from "./pro-upsell";

/**
 * Pro-only CTA card for blog posts, which otherwise carry no app CTA. Blog
 * traffic is the coldest segment, so this is a low-prominence upsell measured
 * via the get-pro goal rather than a primary download push. Horizontal
 * icon-led banner keeps it tight at the end of a long article.
 */
export function BlogProCta() {
  return (
    <div className="mt-8 rounded-2xl border border-[#ED772F]/30 bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 p-6 flex flex-wrap items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-[#ED772F]/15 flex items-center justify-center flex-shrink-0">
        <Crown className="w-6 h-6 text-[#ED772F]" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-[12rem]">
        <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-0.5">
          Get more from every walk
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Deeper insights, trends, and custom goals with Steps Pro.
        </p>
      </div>
      <ProUpsell compact />
    </div>
  );
}
