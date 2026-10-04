/** Shared surface, field, and choice styles for the GrokBots-based system. */

export const cardClass =
  "rounded-[20px] bg-card shadow-[var(--shadow-border)]";

export const cardHoverClass =
  "transition-[box-shadow,transform] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] hover:-translate-y-px";

export const fieldClass =
  "w-full rounded-[10px] bg-surface px-4 py-3 text-base text-foreground outline-none transition-[box-shadow] duration-[var(--duration-1)] placeholder:text-muted focus:shadow-[var(--shadow-button-ghost-focus)]";

export const choiceActiveClass =
  "bg-accent text-white";

export const choiceInactiveClass =
  "bg-surface text-muted hover:text-foreground";

export const wellClass = "rounded-xl bg-surface";

export const highlightClass =
  "rounded-xl border border-accent/30 bg-chip text-chip-text";
