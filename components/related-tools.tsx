import Link from "next/link";
import { TOOL_RELATED_TOOLS, type RelatedLink } from "@/lib/internal-links";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/href";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { toolLinkTitle } from "@/lib/i18n/messages/tools";

/**
 * "Related Calculators" chips. Pass `slug` to use the shared
 * `TOOL_RELATED_TOOLS` map, or `items` for a page-specific list.
 */
export function RelatedTools({
  locale = DEFAULT_LOCALE,
  slug,
  items,
  className = "mt-6",
}: {
  locale?: Locale;
  slug?: string;
  items?: RelatedLink[];
  className?: string;
}) {
  const links = items ?? (slug ? TOOL_RELATED_TOOLS[slug] : undefined) ?? [];
  if (links.length === 0) return null;

  return (
    <div className={className}>
      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
        {getCommonMessages(locale).related.calculators}
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((tool) => (
          <Link
            key={tool.href}
            href={localizePath(locale, tool.href)}
            className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
          >
            {toolLinkTitle(locale, tool.href, tool.title)}
          </Link>
        ))}
      </div>
    </div>
  );
}
