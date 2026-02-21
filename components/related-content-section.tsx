import Link from "next/link";
import type { RelatedLink } from "@/lib/internal-links";

interface RelatedContentSectionProps {
  relatedPosts: RelatedLink[];
  relatedTools: RelatedLink[];
}

export function RelatedContentSection({
  relatedPosts,
  relatedTools,
}: RelatedContentSectionProps) {
  if (relatedPosts.length === 0 && relatedTools.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      {relatedPosts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
            You Might Also Like
          </h2>
          <div className="grid gap-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="block px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 text-neutral-900 dark:text-white hover:border-[#ED772F] dark:hover:border-[#ED772F] transition-colors"
              >
                <span className="text-sm font-medium">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedTools.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
            Try Our Calculators
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
              >
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
