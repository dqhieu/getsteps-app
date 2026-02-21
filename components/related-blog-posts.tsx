import type { RelatedLink } from "@/lib/internal-links";

interface RelatedBlogPostsProps {
  items: RelatedLink[];
}

export function RelatedBlogPosts({ items }: RelatedBlogPostsProps) {
  if (items.length === 0) return null;

  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
        Related Articles
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
