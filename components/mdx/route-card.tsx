import Image from "next/image";

// Rough average for an adult walking stride (~2,100 steps per mile).
const STEPS_PER_KM = 1300;

const LABELS = {
  de: {
    distance: "Strecke",
    duration: "Gehzeit",
    steps: "Schritte",
    elevation: "Höhenmeter",
    start: "Start",
    end: "Ziel",
    loop: "Rundweg",
    openInMaps: "Route in Google Maps öffnen",
    photo: "Foto",
    via: "via Wikimedia Commons",
    approx: "ca.",
  },
  en: {
    distance: "Distance",
    duration: "Walking time",
    steps: "Steps",
    elevation: "Elevation gain",
    start: "Start",
    end: "Finish",
    loop: "Loop",
    openInMaps: "Open route in Google Maps",
    photo: "Photo",
    via: "via Wikimedia Commons",
    approx: "approx.",
  },
} as const;

const NUMBER_LOCALE = { de: "de-DE", en: "en-US" } as const;

// MDX props are plain strings: the next-mdx-remote fallback strips JS
// expressions, so numbers and lists are parsed here.
interface Props {
  /** Distance in km, e.g. "6.5". Steps are derived from it. */
  km: string;
  /** Human-readable walking time, e.g. "1,5–2 Std." */
  duration: string;
  /** Elevation gain in metres, e.g. "80". */
  elevation?: string;
  /** Google Maps search strings for the route. Omit `end` for a loop. */
  start: string;
  end?: string;
  /** Stops in order, separated by "|". */
  waypoints?: string;
  image: string;
  imageAlt: string;
  /** Photographer name, license and source page, shown under the photo. */
  credit: string;
  license: string;
  creditUrl: string;
  lang?: keyof typeof LABELS;
}

function mapsUrl(origin: string, destination: string, waypoints: string[]) {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "walking",
  });
  if (waypoints.length) params.set("waypoints", waypoints.join("|"));
  return `https://www.google.com/maps/dir/?${params}`;
}

function embedUrl(key: string, origin: string, destination: string, waypoints: string[]) {
  const params = new URLSearchParams({ key, origin, destination, mode: "walking" });
  if (waypoints.length) params.set("waypoints", waypoints.join("|"));
  return `https://www.google.com/maps/embed/v1/directions?${params}`;
}

export function RouteCard({
  km,
  duration,
  elevation,
  start,
  end,
  waypoints,
  image,
  imageAlt,
  credit,
  license,
  creditUrl,
  lang = "de",
}: Props) {
  const t = LABELS[lang];
  const fmt = (n: number) => n.toLocaleString(NUMBER_LOCALE[lang]);
  const distance = parseFloat(km);
  const gain = elevation ? parseFloat(elevation) : 0;
  const stops = waypoints ? waypoints.split("|").map((w) => w.trim()) : [];
  const destination = end ?? start;
  const steps = Math.round((distance * STEPS_PER_KM) / 100) * 100;
  const embedKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;

  const stats = [
    { label: t.distance, value: `${fmt(distance)} km` },
    { label: t.duration, value: duration },
    { label: t.steps, value: `${t.approx} ${fmt(steps)}` },
    ...(gain ? [{ label: t.elevation, value: `${fmt(gain)} m` }] : []),
  ];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-[20px] bg-card shadow-[var(--shadow-border)]">
      <Image
        src={image}
        alt={imageAlt}
        width={1200}
        height={675}
        sizes="(min-width: 768px) 720px, 100vw"
        className="aspect-video w-full object-cover"
      />
      <figcaption className="px-5 pt-2 text-xs text-muted">
        {t.photo}:{" "}
        <a
          href={creditUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:text-accent"
        >
          {credit}
        </a>
        , {license}, {t.via}
      </figcaption>

      <dl className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-xs text-muted-soft">{s.label}</dt>
            <dd className="text-lg font-semibold">{s.value}</dd>
          </div>
        ))}
      </dl>

      <p className="px-5 text-sm text-muted-soft">
        {end ? (
          <>
            {t.start}: {start} · {t.end}: {end}
          </>
        ) : (
          <>
            {t.loop} · {t.start}/{t.end}: {start}
          </>
        )}
      </p>

      {embedKey && (
        <iframe
          title={`${t.openInMaps}: ${start}`}
          src={embedUrl(embedKey, start, destination, stops)}
          className="mt-4 h-72 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      )}

      <div className="p-5">
        <a
          href={mapsUrl(start, destination, stops)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          {t.openInMaps} →
        </a>
      </div>
    </figure>
  );
}
