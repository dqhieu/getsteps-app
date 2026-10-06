import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getCommonMessages } from "@/lib/i18n/messages/common";

export function FloatingQr({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getCommonMessages(locale).qr;

  return (
    <aside aria-label={t.ariaLabel} className="floating-qr hidden lg:block fixed z-40 w-64">
      <a
        href={SITE_CONFIG.appStoreUrl}
        data-fast-goal="open-app-store"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.14)] ring-1 ring-black/5 transition-transform duration-150 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.96]"
      >
        <span className="text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-neutral-500 text-balance">
          {t.label}
        </span>
        <Image
          src="/steps-qr.png"
          alt={t.imageAlt}
          width={640}
          height={640}
          unoptimized
          className="h-40 w-40"
        />
        <p className="text-xs font-medium leading-snug text-neutral-800 text-pretty">{t.caption}</p>
      </a>
    </aside>
  );
}
