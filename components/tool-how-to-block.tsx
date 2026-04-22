import { TOOL_HOW_TO } from "@/lib/tool-how-to";

interface Props {
  slug: string;
}

export function ToolHowToBlock({ slug }: Props) {
  const data = TOOL_HOW_TO[slug];
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
    <section className="mt-8 rounded-2xl border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 p-6">
      <h2 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
        {data.name}
      </h2>
      <p className="mb-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {data.description}
      </p>
      <ol className="space-y-3">
        {data.steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="font-medium text-neutral-900 dark:text-white">
                {s.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
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
