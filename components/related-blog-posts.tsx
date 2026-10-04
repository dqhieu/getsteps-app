import type { RelatedLink } from "@/lib/internal-links";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

interface RelatedBlogPostsProps {
  items: RelatedLink[];
  /** Blog posts are English-only, so the block is hidden on other locales. */
  locale?: Locale;
}

export function RelatedBlogPosts({ items, locale = DEFAULT_LOCALE }: RelatedBlogPostsProps) {
  if (items.length === 0 || locale !== DEFAULT_LOCALE) return null;

  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-muted-soft mb-3">
        Related Articles
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm px-3 py-1.5 rounded-lg bg-surface text-muted-soft hover:text-accent transition-colors"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
