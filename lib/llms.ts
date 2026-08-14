/**
 * Shared builder for /llms.txt and /llms-full.txt.
 *
 * Every list here is derived from the same modules the site renders from, so
 * the two files regenerate on each build instead of drifting from the content.
 */

import { getAllPosts, type BlogPost } from "./blog";
import { getAllPersonas } from "./personas";
import { TOOLS } from "./tools";
import { SITE_CONFIG } from "./constants";
import {
  CONVERSION_CATEGORIES,
  STEPS_TO_MILES_VALUES,
  MILES_TO_STEPS_VALUES,
  STEPS_TO_CALORIES_VALUES,
  STEPS_TO_KM_VALUES,
  KM_TO_STEPS_VALUES,
  STEPS_TO_TIME_VALUES,
  MILES_TO_TIME_VALUES,
  type ConversionCategorySlug,
} from "./conversions";

const BASE_URL = SITE_CONFIG.baseUrl;

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

/** Collapse newlines and runs of whitespace so one entry stays on one line. */
export const escapeMarkdown = (input: string): string =>
  input.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();

export const formatLink = (
  title: string,
  url: string,
  description?: string
): string => {
  const label = escapeMarkdown(title);
  const detail = description ? escapeMarkdown(description) : "";
  return detail ? `- [${label}](${url}): ${detail}` : `- [${label}](${url})`;
};

export const TEXT_RESPONSE_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=3600",
};

// ---------------------------------------------------------------------------
// Static prose
// ---------------------------------------------------------------------------

export const HEADER = `# Steps: Workout & Pedometer

> Steps is an iOS and watchOS fitness app for iPhone and Apple Watch that tracks daily steps, workouts, calories, distance, heart rate, and health data. getsteps.app is the marketing site, hosting free fitness calculators, a blog, documentation, and Stepboard, an optional leaderboard for group step challenges.`;

export const ABOUT_SECTION = `## About

Steps was built by Hieu Dinh and his wife after they started running in 2024. They wanted a step counter that was simple, beautiful, and private: not bloated with social features they did not need, and not stuck looking like it was last updated in 2018. Steps serves both casual walkers and more serious runners.

- [Founder story](${BASE_URL}/about): How and why Steps was built.`;

export const APP_FEATURES_SECTION = `## App capabilities

- Step counting with automatic tracking via iPhone and Apple Watch (reads from Apple HealthKit).
- 23+ workout types: running, walking, cycling, hiking, swimming, strength, yoga, pickleball, tennis, rowing, dance, stair climbing, and more.
- Charts with hourly, weekly, and monthly views.
- Daily goal, streaks, and reminders for motivation.
- App Lock: block distracting apps until you hit your daily step goal.
- GPX export for walking, running, and hiking routes.
- 3D Route Playback: replay activity routes with a cinematic follow camera.
- AI Coach: personalized workout feedback powered by on-device Apple Intelligence.
- 8 personal records: fastest pace, most calories, earliest start, most elevation, longest duration, farthest distance, latest night, max heart rate.
- Home screen and Lock Screen widgets in multiple sizes.
- Apple Watch companion app with complications in multiple styles.
- Yearly Insights: a free year-in-review recap of the year's steps and workouts.
- Siri Shortcuts and shortcut actions for automation.
- Sharing: share activity summaries, routes, and personal records.
- Privacy-first: health data stays on device by default.`;

export const STEPBOARD_SECTION = `## Stepboard (group leaderboards)

Stepboard is an opt-in social feature for step challenges. Users join a group via a 4-character invite code, shared with links like ${BASE_URL}/join/ABCD. Data synced for Stepboard is limited to display name, country, daily steps, distance, calories, and flights climbed. Users can leave a group at any time and have their data removed. Nothing syncs unless a user actively joins.`;

export const PRICING_SECTION = `## Pricing

Steps is free to download and its core tracking is free forever. Steps Pro is an optional upgrade that unlocks additional features such as detailed workout history and extended analytics. Yearly Insights (the year-in-review recap) is free, not a Pro feature.

- [Steps Pro](${BASE_URL}/docs/features/steps-pro): What the Pro upgrade includes.`;

export const PLATFORMS_SECTION = `## Platforms supported

- iOS 17+ on iPhone.
- watchOS 10+ on Apple Watch.
- Data source: Apple HealthKit. Steps does not require Fitbit, Garmin, or any other third-party hardware.`;

export const LINKS_SECTION = `## Links

- [Homepage](${BASE_URL})
- [App Store](${SITE_CONFIG.appStoreUrl})
- [Feedback board](${BASE_URL}/feedback): Public board of user feature requests, bug reports, and their statuses.
- [Press](${BASE_URL}/press)
- [Privacy policy](${BASE_URL}/privacy)
- [Terms of service](${BASE_URL}/terms)`;

// Docs are authored in a separate repository and served through a rewrite, so
// there is no importable source for this list.
const FEATURE_DOCS: ReadonlyArray<{ slug: string; name: string }> = [
  { slug: "getting-started", name: "Getting Started" },
  { slug: "steps-pro", name: "Steps Pro" },
  { slug: "home-dashboard", name: "Home Dashboard" },
  { slug: "streaks", name: "Streaks" },
  { slug: "workout-session", name: "Workout Session" },
  { slug: "activity-list", name: "Activity List" },
  { slug: "activity-detail", name: "Activity Detail" },
  { slug: "history", name: "History" },
  { slug: "insights-overview", name: "Insights Overview" },
  { slug: "daily-goal", name: "Daily Goal" },
  { slug: "app-lock", name: "App Lock" },
  { slug: "notifications", name: "Notifications" },
  { slug: "color-themes", name: "Color Themes" },
  { slug: "app-icon-selector", name: "App Icon Selector" },
  { slug: "settings-overview", name: "Settings Overview" },
  { slug: "widgets", name: "Widgets" },
  { slug: "watch-app", name: "Apple Watch App" },
  { slug: "siri-shortcuts", name: "Siri Shortcuts" },
  { slug: "sharing", name: "Sharing" },
];

export const DOCS_SECTION = `## Documentation

English docs are canonical. Translations: Chinese (zh), French (fr), German (de), Italian (it), Portuguese Brazil (pt-BR), Spanish (es). Example: ${BASE_URL}/docs/fr/features/getting-started.

- [Docs home](${BASE_URL}/docs)
${FEATURE_DOCS.map((doc) =>
  formatLink(doc.name, `${BASE_URL}/docs/features/${doc.slug}`)
).join("\n")}`;

export const MAIN_PAGES_SECTION = `## Main pages

- [Homepage](${BASE_URL}): Product overview, features, reviews, and App Store download.
- [Free fitness calculators](${BASE_URL}/tools): Directory of ${TOOLS.length} browser-based calculators.
- [Blog](${BASE_URL}/blog): Walking and running guides, fitness explainers, and app updates.
- [Use cases](${BASE_URL}/for): Step tracking guidance by audience.
- [Conversions](${BASE_URL}/conversions): Steps, distance, calorie, and walking-time conversion tables.
- [Documentation](${BASE_URL}/docs): App documentation and feature guides.
- [About](${BASE_URL}/about): The founder story behind Steps.
- [Press](${BASE_URL}/press): Press coverage and media assets.
- [Feedback](${BASE_URL}/feedback): Public feature request and bug board.`;

// ---------------------------------------------------------------------------
// Data-driven sections
// ---------------------------------------------------------------------------

export const getToolEntries = (): string =>
  TOOLS.map((tool) =>
    formatLink(
      tool.title,
      `${BASE_URL}${tool.href}`,
      `${tool.description}. Inputs: ${tool.inputs}. Outputs: ${tool.outputs}.`
    )
  ).join("\n");

export const getPersonaEntries = (): string =>
  getAllPersonas()
    .map((persona) =>
      formatLink(
        persona.headline,
        `${BASE_URL}/for/${persona.slug}`,
        persona.subheadline
      )
    )
    .join("\n");

const CONVERSION_VALUES: Record<
  ConversionCategorySlug,
  ReadonlyArray<number>
> = {
  "steps-to-miles": STEPS_TO_MILES_VALUES,
  "miles-to-steps": MILES_TO_STEPS_VALUES,
  "steps-to-calories": STEPS_TO_CALORIES_VALUES,
  "steps-to-km": STEPS_TO_KM_VALUES,
  "km-to-steps": KM_TO_STEPS_VALUES,
  "steps-to-time": STEPS_TO_TIME_VALUES,
  "miles-to-time": MILES_TO_TIME_VALUES,
};

/** The 7 category landing pages only. */
export const getConversionHubEntries = (): string =>
  CONVERSION_CATEGORIES.map((category) =>
    formatLink(
      category.title,
      `${BASE_URL}/conversions/${category.slug}`,
      category.description
    )
  ).join("\n");

/** Every category landing page plus each individual value page beneath it. */
export const getConversionEntries = (): string =>
  CONVERSION_CATEGORIES.map((category) => {
    const values = CONVERSION_VALUES[category.slug];
    const hub = formatLink(
      category.title,
      `${BASE_URL}/conversions/${category.slug}`,
      category.description
    );
    const pages = values
      .map((value) =>
        formatLink(
          `${value} ${category.title.toLowerCase()}`,
          `${BASE_URL}/conversions/${category.slug}/${value}`
        )
      )
      .join("\n");
    return `${hub}\n${pages}`;
  }).join("\n");

/**
 * Posts newest-first by the date they were last touched, so a refreshed
 * evergreen guide outranks a newer but untouched one. `getAllPosts` sorts by
 * publish date alone, which buries updates.
 */
const getPostsByRecency = (): BlogPost[] =>
  [...getAllPosts()].sort((a, b) => {
    const dateA = a.lastUpdated || a.date;
    const dateB = b.lastUpdated || b.date;
    return (dateB || "").localeCompare(dateA || "");
  });

export const getPostCount = (): number => getAllPosts().length;

export const getPostEntries = (limit?: number): string => {
  const posts = getPostsByRecency();
  const selected = typeof limit === "number" ? posts.slice(0, limit) : posts;

  return selected
    .map((post) => {
      const stamp = post.lastUpdated || post.date;
      const suffix = stamp ? ` (updated ${stamp})` : "";
      return `${formatLink(post.title, `${BASE_URL}/blog/${post.slug}`, post.description)}${suffix}`;
    })
    .join("\n");
};

export const getLastUpdatedLine = (): string => {
  const latest = getAllPosts()
    .map((post) => post.lastUpdated || post.date)
    .filter(Boolean)
    .reduce<string>((acc, date) => (date > acc ? date : acc), "");

  return latest ? `Last updated: ${latest}` : "";
};

/** `crossLinkTo` names the *other* file this one should point readers at. */
export const getSitemapsSection = (
  crossLinkTo: "full" | "curated"
): string => {
  const crossLink =
    crossLinkTo === "full"
      ? `- [Full index](${BASE_URL}/llms-full.txt): Complete index of every page on this site.`
      : `- [Curated index](${BASE_URL}/llms.txt): Shorter, curated version of this index.`;

  return `## Sitemaps

- [Sitemap](${BASE_URL}/sitemap.xml)
${crossLink}`;
};
