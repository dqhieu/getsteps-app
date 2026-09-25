import Link from "next/link";
import type { PersonaLink } from "@/lib/internal-links";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

interface PersonaLinksProps {
  items: PersonaLink[];
  /** Persona pages are English-only, so the block is hidden on other locales. */
  locale?: Locale;
}

export function PersonaLinks({ items, locale = DEFAULT_LOCALE }: PersonaLinksProps) {
  if (items.length === 0 || locale !== DEFAULT_LOCALE) return null;

  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
        Steps For
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/for/${item.slug}`}
            className="text-sm px-3 py-1.5 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
