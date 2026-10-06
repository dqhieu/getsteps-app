"use client";

import { useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { AppStoreBadge } from "./app-store-badge";

/**
 * Result-anchored CTA shown immediately below a calculator's output, while the
 * user's intent is highest. Copy ties the app to the number they just saw.
 */
export function ToolAppCta({
  headline,
  description,
  locale = DEFAULT_LOCALE,
}: {
  headline: string;
  description: string;
  locale?: Locale;
}) {
  return (
    <div className="mt-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            {headline}
          </h2>
          <p className="text-muted max-w-xl">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col md:items-end gap-2">
          <AppStoreBadge locale={locale} />
          <p className="text-sm text-muted">
            {getCommonMessages(locale).appStore.freeOnAppStore}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Persistent bottom bar on mobile, where ~80% of traffic lands and bounce is
 * high. Captures users who never scroll to an in-page CTA. This slot carries
 * the bulk of App Store clicks, so it stays on the free download — pointing it
 * at a paid upgrade instead cut tool-page App Store clicks by ~73%.
 */
export function ToolStickyCta({
  label,
  locale = DEFAULT_LOCALE,
}: {
  label: string;
  locale?: Locale;
}) {
  const t = getCommonMessages(locale).appStore;
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || typeof ResizeObserver === "undefined") return;

    const apply = () => {
      const height = bar.getBoundingClientRect().height;
      if (height <= 0) return;
      document.documentElement.style.setProperty("--tool-sticky-cta-height", `${height}px`);
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(bar);
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  return (
    <>
      <div aria-hidden className="tool-sticky-spacer md:hidden" />
      <div
        ref={barRef}
        className="tool-sticky-cta fixed bottom-0 inset-x-0 z-50 md:hidden flex items-center justify-between gap-3 border-t border-border bg-card/95 /95 backdrop-blur"
      >
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            {label}
          </p>
          <p className="text-xs text-muted">
            {t.freeOnAppStore}
          </p>
        </div>
        <a
          href={SITE_CONFIG.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-fast-goal="open-app-store"
          aria-label={t.badgeAlt}
          className="flex-shrink-0 rounded-full bg-accent text-white text-sm font-semibold px-5 py-2.5 active:scale-95 transition-transform"
        >
          {t.getSteps}
        </a>
      </div>
    </>
  );
}
