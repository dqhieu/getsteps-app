interface Props {
  value: string | number;
  unit?: string;
  label: string;
  source?: string;
  sourceUrl?: string;
}

export function StatCallout({ value, unit, label, source, sourceUrl }: Props) {
  return (
    <div className="not-prose my-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-5">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl md:text-4xl font-bold text-orange-500">
          {value}
        </span>
        {unit && (
          <span className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            {unit}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {label}
      </p>
      {source && (
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
          Source:{" "}
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
        </p>
      )}
    </div>
  );
}
