import type { ReactNode } from "react";

export function TLDR({ children }: { children: ReactNode }) {
  return (
    <aside
      role="note"
      aria-label="TL;DR summary"
      className="not-prose my-8 rounded-[20px] border border-accent/30 bg-chip p-5 text-chip-text"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-chip-text">
        TL;DR
      </p>
      <div className="text-[15px] leading-relaxed text-foreground [&_p]:my-0 [&_p+p]:mt-2 [&_strong]:text-foreground dark:[&_strong]:text-foreground">
        {children}
      </div>
    </aside>
  );
}
