import type { ReactNode } from "react";
import { COMPARISONS } from "@/lib/mdx-data/comparisons";

export interface ComparisonColumn {
  key: string;
  label: string;
  highlight?: boolean;
}

export interface ComparisonRow {
  label: string;
  cells: Record<string, ReactNode>;
}

interface Props {
  slug?: string;
  columns?: ComparisonColumn[];
  rows?: ComparisonRow[];
  caption?: string;
  featureLabel?: string;
}

export function ComparisonTable(props: Props) {
  const lookup = props.slug ? COMPARISONS[props.slug] : undefined;
  const columns = props.columns ?? lookup?.columns;
  const rows = props.rows ?? lookup?.rows;
  const caption = props.caption ?? lookup?.caption;
  const featureLabel = props.featureLabel ?? lookup?.featureLabel ?? "Feature";

  if (!columns || !rows) {
    if (typeof console !== "undefined") {
      console.error(
        "ComparisonTable: missing data (slug=" + String(props.slug) + ")"
      );
    }
    return null;
  }

  return (
    <div className="not-prose my-8 overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm">
        {caption && (
          <caption className="caption-top pb-3 text-left text-sm text-neutral-500 dark:text-neutral-400">
            {caption}
          </caption>
        )}
        <thead className="bg-neutral-50 dark:bg-neutral-900">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white"
            >
              {featureLabel}
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={[
                  "px-4 py-3 text-left font-semibold",
                  col.highlight
                    ? "text-orange-600 dark:text-orange-400"
                    : "text-neutral-900 dark:text-white",
                ].join(" ")}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                i % 2 === 0
                  ? "bg-white dark:bg-neutral-950"
                  : "bg-neutral-50/60 dark:bg-neutral-900/40"
              }
            >
              <th
                scope="row"
                className="border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 text-left font-medium text-neutral-900 dark:text-white"
              >
                {row.label}
              </th>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={[
                    "border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 align-top text-neutral-700 dark:text-neutral-300",
                    col.highlight ? "bg-orange-50/50 dark:bg-orange-500/5" : "",
                  ].join(" ")}
                >
                  {row.cells[col.key] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
