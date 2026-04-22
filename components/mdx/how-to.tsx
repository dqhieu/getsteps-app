import { HOW_TOS } from "@/lib/mdx-data/how-tos";

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface Props {
  slug?: string;
  name?: string;
  description?: string;
  steps?: HowToStep[];
  totalTime?: string;
  heading?: string;
}

export function HowTo(props: Props) {
  const lookup = props.slug ? HOW_TOS[props.slug] : undefined;
  const name = props.name ?? lookup?.name;
  const description = props.description ?? lookup?.description;
  const steps = props.steps ?? lookup?.steps;
  const totalTime = props.totalTime ?? lookup?.totalTime;
  const heading = props.heading ?? lookup?.heading;

  if (!name || !steps) {
    if (typeof console !== "undefined") {
      console.error("HowTo: missing data (slug=" + String(props.slug) + ")");
    }
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    ...(description && { description }),
    ...(totalTime && { totalTime }),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.image && { image: s.image }),
      ...(s.url && { url: s.url }),
    })),
  };

  return (
    <section className="not-prose my-10">
      <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-white">
        {heading ?? name}
      </h2>
      {description && (
        <p className="mb-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {description}
        </p>
      )}
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <li
            key={i}
            className="flex gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="font-semibold text-neutral-900 dark:text-white">
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
