import { TOOL_HOW_TO, type ToolHowToData } from "@/lib/tool-how-to";

interface Props {
  /** English data from `TOOL_HOW_TO`; ignored when `data` is passed. */
  slug?: string;
  /** Localized how-to content, usually `t.howTo` from the tool's messages. */
  data?: ToolHowToData;
}

export function ToolHowToBlock({ slug, data: dataProp }: Props) {
  const data = dataProp ?? (slug ? TOOL_HOW_TO[slug] : undefined);
  if (!data) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: data.name,
    description: data.description,
    step: data.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <section className="mt-8 rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
      <h2 className="mb-3 text-xl font-semibold text-foreground">
        {data.name}
      </h2>
      <p className="mb-5 text-sm text-muted leading-relaxed">
        {data.description}
      </p>
      <ol className="space-y-3">
        {data.steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="font-medium text-foreground">
                {s.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-soft">
                {s.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
