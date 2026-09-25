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
    <div className="mt-8 rounded-2xl border border-[#ED772F]/30 bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            {headline}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col md:items-end gap-2">
          <AppStoreBadge locale={locale} />
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
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
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden flex items-center justify-between gap-3 border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur px-4 py-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
          {label}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {t.freeOnAppStore}
        </p>
      </div>
      <a
        href={SITE_CONFIG.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-fast-goal="open-app-store"
        aria-label={t.badgeAlt}
        className="flex-shrink-0 rounded-full bg-[#ED772F] text-white text-sm font-semibold px-5 py-2.5 active:scale-95 transition-transform"
      >
        {t.getSteps}
      </a>
    </div>
  );
}
