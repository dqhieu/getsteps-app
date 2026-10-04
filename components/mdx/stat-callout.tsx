interface Props {
  value: string | number;
  unit?: string;
  label: string;
  source?: string;
  sourceUrl?: string;
}

export function StatCallout({ value, unit, label, source, sourceUrl }: Props) {
  return (
    <div className="not-prose my-6 rounded-[20px] bg-card shadow-[var(--shadow-border)] p-5">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl md:text-4xl font-bold text-accent">
          {value}
        </span>
        {unit && (
          <span className="text-lg font-medium text-muted-soft">
            {unit}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-soft leading-relaxed">
        {label}
      </p>
      {source && (
        <p className="mt-2 text-xs text-muted">
          Source:{" "}
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
        </p>
      )}
    </div>
  );
}
