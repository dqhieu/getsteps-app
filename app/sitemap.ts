import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllPersonas } from "@/lib/personas";
import {
  STEPS_TO_MILES_VALUES,
  MILES_TO_STEPS_VALUES,
  STEPS_TO_CALORIES_VALUES,
  STEPS_TO_KM_VALUES,
  KM_TO_STEPS_VALUES,
  STEPS_TO_TIME_VALUES,
  MILES_TO_TIME_VALUES,
} from "@/lib/conversions";
import { TOOLS } from "@/lib/tools";
import { LOCALES } from "@/lib/i18n/config";
import { absoluteUrl, languageAlternates } from "@/lib/i18n/href";

type LocalizedEntry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

/** One sitemap entry per locale, each carrying the full hreflang set. */
function expandLocales(entries: LocalizedEntry[]): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return entries.flatMap(({ path, changeFrequency, priority }) => {
    const languages = languageAlternates(path);
    return LOCALES.map((locale) => ({
      url: absoluteUrl(locale, path),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getsteps.app";
  const posts = getAllPosts();
  const personas = getAllPersonas();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastUpdated ?? post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const valueEntries = (type: string, values: readonly (number | string)[]): LocalizedEntry[] =>
    values.map((value) => ({
      path: `/conversions/${type}/${value}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const localizedUrls = expandLocales([
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/tools", changeFrequency: "monthly", priority: 0.9 },
    ...TOOLS.map((tool): LocalizedEntry => ({
      path: tool.href,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    { path: "/conversions", changeFrequency: "monthly", priority: 0.9 },
    { path: "/conversions/steps-to-miles", changeFrequency: "monthly", priority: 0.8 },
    { path: "/conversions/miles-to-steps", changeFrequency: "monthly", priority: 0.9 },
    { path: "/conversions/steps-to-calories", changeFrequency: "monthly", priority: 0.8 },
    { path: "/conversions/steps-to-km", changeFrequency: "monthly", priority: 0.8 },
    { path: "/conversions/km-to-steps", changeFrequency: "monthly", priority: 0.8 },
    { path: "/conversions/steps-to-time", changeFrequency: "monthly", priority: 0.8 },
    { path: "/conversions/miles-to-time", changeFrequency: "monthly", priority: 0.8 },
    ...valueEntries("steps-to-miles", STEPS_TO_MILES_VALUES),
    ...valueEntries("miles-to-steps", MILES_TO_STEPS_VALUES),
    ...valueEntries("steps-to-calories", STEPS_TO_CALORIES_VALUES),
    ...valueEntries("steps-to-km", STEPS_TO_KM_VALUES),
    ...valueEntries("km-to-steps", KM_TO_STEPS_VALUES),
    ...valueEntries("steps-to-time", STEPS_TO_TIME_VALUES),
    ...valueEntries("miles-to-time", MILES_TO_TIME_VALUES),
  ]);

  return [
    ...localizedUrls,
    {
      url: `${baseUrl}/for`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...personas.map((persona) => ({
      url: `${baseUrl}/for/${persona.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...["zh", "fr", "de", "it", "pt-BR", "es"].map((lang) => ({
      url: `${baseUrl}/docs/${lang}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...[
      "getting-started",
      "steps-pro",
      "home-dashboard",
      "streaks",
      "workout-session",
      "activity-list",
      "activity-detail",
      "history",
      "insights-overview",
      "daily-goal",
      "app-lock",
      "notifications",
      "color-themes",
      "app-icon-selector",
      "settings-overview",
      "widgets",
      "watch-app",
      "siri-shortcuts",
      "sharing",
    ].flatMap((page) => {
      const languages = ["", "zh/", "fr/", "de/", "it/", "pt-BR/", "es/"];
      return languages.map((lang) => ({
        url: `${baseUrl}/docs/${lang}features/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: lang === "" ? 0.7 : 0.6,
      }));
    }),
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/feedback`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/troubleshooting`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/press`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
