// Shared constants for the Steps landing page

import type { LandingIconName } from "./landing-icons";

export const SITE_CONFIG = {
  name: "Steps: Workout & Pedometer",
  shortName: "Steps",
  description:
    "Track your daily steps, workouts, and health data with Steps - the ultimate fitness companion for your Apple device.",
  baseUrl: "https://getsteps.app",
  appStoreUrl:
    "https://apps.apple.com/us/app/steps-workout-pedometer/id6746096378",
  // RevenueCat-hosted web checkout (Stripe gateway, RC as merchant of record).
  // `/get-pro` redirects here so ad/CTA links can change destination without edits.
  proWebCheckoutUrl: "https://pay.rev.cat/almjpuvcjngxzlih/",
  supportEmail: "support@getsteps.app",
  appStoreRating: "4.9",
} as const;

export const THEME = {
  accentColor: "#ED772F",
  darkBg: "#1A1A1A",
  lightBg: "#F2F0EF",
  cardRadius: "32px",
} as const;

// Landing copy lives in lib/i18n/messages/landing, keyed by `icon` / `key`.
export const PERSONAL_RECORDS = [
  { icon: "Zap" },
  { icon: "Flame" },
  { icon: "Sunrise" },
  { icon: "Mountain" },
  { icon: "Timer" },
  { icon: "Ruler" },
  { icon: "Moon" },
  { icon: "HeartPulse" },
] as const;

export const WORKOUT_TYPES = [
  { icon: "Footprints" },
  { icon: "PersonStanding" },
  { icon: "Bike" },
  { icon: "Mountain" },
  { icon: "Waves" },
  { icon: "Dumbbell" },
  { icon: "Flower2" },
  { icon: "CircleDot" },
] as const;

// Hero feature spotlights. `media` points at a caption-free asset in
// public/spotlights/; a missing file degrades to the neutral media frame.
export const SPOTLIGHTS = [
  {
    key: "route-3d",
    media: "/spotlights/route-3d.mp4",
    icon: "Orbit",
  },
  {
    key: "ai-coach",
    media: "/spotlights/ai-coach.mp4",
    icon: "Bot",
  },
  {
    key: "stepboard",
    media: "/spotlights/stepboard.png",
    mediaWidth: 600,
    mediaHeight: 1252,
    icon: "Trophy",
  },
  {
    key: "apple-watch",
    media: "/spotlights/apple-watch.png",
    mediaWidth: 600,
    mediaHeight: 1028,
    icon: "Watch",
  },
] as const satisfies ReadonlyArray<{
  key: string;
  media: string;
  mediaWidth?: number;
  mediaHeight?: number;
  icon: LandingIconName;
}>;

// Secondary features ("everything else"). Spotlighted features, Yearly Insights
// (own section), records and workout types (own sub-blocks) are intentionally
// excluded to avoid duplication.
export const FEATURE_GRID = [
  { icon: "LineChart" },
  { icon: "Flame" },
  { icon: "LayoutGrid" },
  { icon: "Lock" },
  { icon: "Route" },
  { icon: "HeartPulse" },
] as const satisfies ReadonlyArray<{ icon: LandingIconName }>;

// App Store reviews shown in the "Loved by thousands" section.
// `country` is an ISO 3166-1 alpha-2 code, rendered as a flag emoji.
export const REVIEWS = [
  {
    title: "Exactly what I was looking for",
    body: "This does everything I wanted without unnecessary bloat, all the while having an amazing UX/UI that fits into Apple's design system while still being unique.",
    author: "eric_geee",
    country: "US",
    image: "/reviews/memoji/Memoji_Liam.png",
  },
  {
    title: "Made iOS 10x Better for Me",
    body: "It not only beats every iOS step tracker out there, but any step tracker app ever. The UI is so good. I just love the widgets.",
    author: "daddy_jasveer",
    country: "IN",
    image: "/reviews/memoji/Memoji_Hieu.png",
  },
  {
    title: "Does one thing and it does it GREAT",
    body: "Love everything about this app. The stuff I want is front and center, no fancy extraneous stuff shoved in my face.",
    author: "Leavism",
    country: "US",
    image: "/reviews/memoji/Memoji_Osca.png",
  },
  {
    title: "Great app for daily activity tracking",
    body: "Steps is a simple and helpful app for tracking daily steps and staying motivated. It's easy to use, and the progress tracking helps me stay more consistent.",
    author: "Abdulrahman",
    country: "SA",
    image: "/reviews/memoji/Memoji_Marco.png",
  },
  {
    title: "Dad loves it",
    body: "My dads recovering from a year of severe illness and he's excited to use this and get back to it!",
    author: "JustSuperHuman",
    country: "US",
    image: "/reviews/memoji/Memoji_Emma.png",
  },
  {
    title: "Great app",
    body: "The app is visually stunning! Looking forward to better integration with Apple Watch.",
    author: "Đinh Văn Quý",
    country: "VN",
    image: "/reviews/memoji/Memoji_Kenji.png",
  },
  {
    title: "Awesome App",
    body: "It's a great app for step count. Very interactive interface. I recommend all to install this app.",
    author: "haresh1234",
    country: "IN",
    image: "/reviews/memoji/Memoji_Priya.png",
  },
  {
    title: "Nice app",
    body: "Very well done application, interesting features and very beautiful to see.",
    author: "Al3c18",
    country: "IT",
    image: "/reviews/memoji/Memoji_Yuki.png",
  },
] as const;

// Press coverage, shared by the landing "Featured in" strip and the /press page.
export const PRESS_ARTICLES = [
  {
    outlet: "iPhoneBlog.de",
    url: "https://www.iphoneblog.de/2026/02/21/steps-visualisiert-das-tagliche-schrittziel/",
    title: "Steps visualisiert das tägliche Schrittziel",
    summary:
      "A look at how Steps visualizes your daily step goal with beautiful charts, widgets, and personal records.",
    author: "Alex Olma",
    date: "Feb 21, 2026",
  },
  {
    outlet: "iphone-ticker.de",
    url: "https://www.iphone-ticker.de/schrittzaehler-mit-mehrwert-compresto-entwickler-startet-steps-273418/",
    title: 'Schrittzähler mit Mehrwert: Compresto-Entwickler startet „Steps"',
    summary:
      "How the Compresto developer built Steps as a step counter with real added value — workouts, App Lock, and more.",
    author: "Nicolas",
    date: "Feb 23, 2026",
  },
] as const;
