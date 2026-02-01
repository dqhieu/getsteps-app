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
          className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
        >
          ← Previous
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm font-medium text-neutral-300 dark:text-neutral-700 border border-neutral-100 dark:border-neutral-900 rounded-lg cursor-not-allowed">
          ← Previous
        </span>
      )}

      <span className="text-sm text-neutral-500 dark:text-neutral-500">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
        >
          Next →
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm font-medium text-neutral-300 dark:text-neutral-700 border border-neutral-100 dark:border-neutral-900 rounded-lg cursor-not-allowed">
          Next →
        </span>
      )}
    </nav>
  );
}
