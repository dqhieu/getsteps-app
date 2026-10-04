import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
}

export function BlogPagination({ currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex items-center justify-center gap-4 mt-12"
      aria-label="Blog pagination"
    >
      {currentPage > 1 ? (
        <Link
          href={currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}`}
          className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground border border-border rounded-lg hover:border-accent transition-colors"
        >
          ← Previous
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm font-medium text-muted border border-border rounded-lg cursor-not-allowed">
          ← Previous
        </span>
      )}

      <span className="text-sm text-muted">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground border border-border rounded-lg hover:border-accent transition-colors"
        >
          Next →
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm font-medium text-muted border border-border rounded-lg cursor-not-allowed">
          Next →
        </span>
      )}
    </nav>
  );
}
