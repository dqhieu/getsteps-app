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
      <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-xl border border-border text-sm">
        {caption && (
          <caption className="caption-top pb-3 text-left text-sm text-muted">
            {caption}
          </caption>
        )}
        <thead className="bg-surface ">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left font-semibold text-foreground"
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
                    ? "text-chip-text"
                    : "text-foreground",
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
                  ? "bg-card "
                  : "bg-surface/60 "
              }
            >
              <th
                scope="row"
                className="border-t border-border px-4 py-3 text-left font-medium text-foreground"
              >
                {row.label}
              </th>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={[
                    "border-t border-border px-4 py-3 align-top text-muted-soft",
                    col.highlight ? "bg-chip" : "",
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
