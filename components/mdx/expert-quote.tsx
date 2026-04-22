import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  author: string;
  title?: string;
  org?: string;
  source?: string;
  sourceUrl?: string;
}

export function ExpertQuote({
  children,
  author,
  title,
  org,
  source,
  sourceUrl,
}: Props) {
  return (
    <figure className="not-prose my-8 rounded-2xl border-l-4 border-orange-500 bg-neutral-50 dark:bg-neutral-900/40 p-5">
      <blockquote className="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 italic [&_p]:my-0 [&_p+p]:mt-3">
        {children}
      </blockquote>
      <figcaption className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        <span aria-hidden>— </span>
        <strong className="font-semibold text-neutral-900 dark:text-white not-italic">
          {author}
        </strong>
        {title && <span className="not-italic">, {title}</span>}
        {org && <span className="not-italic">, {org}</span>}
        {source && (
          <>
            {" "}
            <span className="not-italic">
              (
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted hover:text-orange-500"
                >
                  {source}
                </a>
              ) : (
                source
              )}
              )
            </span>
          </>
        )}
      </figcaption>
    </figure>
  );
}
