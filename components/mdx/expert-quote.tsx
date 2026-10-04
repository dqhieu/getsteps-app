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
    <figure className="not-prose my-8 rounded-2xl border-l-4 border-accent bg-surface p-5">
      <blockquote className="text-lg leading-relaxed text-foreground italic [&_p]:my-0 [&_p+p]:mt-3">
        {children}
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        <span aria-hidden>— </span>
        <strong className="font-semibold text-foreground not-italic">
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
                  className="underline decoration-dotted hover:text-accent"
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
