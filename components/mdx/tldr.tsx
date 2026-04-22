import type { ReactNode } from "react";

export function TLDR({ children }: { children: ReactNode }) {
  return (
    <aside
      role="note"
      aria-label="TL;DR summary"
      className="not-prose my-8 rounded-2xl border border-orange-200 dark:border-orange-500/30 bg-orange-50/60 dark:bg-orange-500/5 p-5"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
        TL;DR
      </p>
      <div className="text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200 [&_p]:my-0 [&_p+p]:mt-2 [&_strong]:text-neutral-900 dark:[&_strong]:text-white">
        {children}
      </div>
    </aside>
  );
}
