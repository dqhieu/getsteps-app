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
    <div className="mt-12 pt-8 border-t border-border">
      {relatedPosts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            You Might Also Like
          </h2>
          <div className="grid gap-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="block px-4 py-3 rounded-xl bg-surface  border border-border text-foreground hover:border-accent dark:hover:border-accent transition-colors"
              >
                <span className="text-sm font-medium">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedTools.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Try Our Calculators
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="text-sm px-3 py-1.5 rounded-lg bg-surface text-muted-soft hover:text-accent transition-colors"
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
