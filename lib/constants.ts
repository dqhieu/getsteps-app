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
  supportEmail: "support@getsteps.app",
  appStoreRating: "4.9",
} as const;

export const THEME = {
  accentColor: "#ED772F",
  darkBg: "#1A1A1A",
  lightBg: "#F2F0EF",
  cardRadius: "32px",
} as const;

export const PERSONAL_RECORDS = [
  { icon: "Zap", title: "Fastest Pace" },
  { icon: "Flame", title: "Most Calories" },
  { icon: "Sunrise", title: "Earliest Start" },
  { icon: "Mountain", title: "Most Elevation" },
  { icon: "Timer", title: "Longest Duration" },
  { icon: "Ruler", title: "Farthest Distance" },
  { icon: "Moon", title: "Latest Night" },
  { icon: "HeartPulse", title: "Max Heart Rate" },
] as const;

export const WORKOUT_TYPES = [
  { icon: "Footprints", name: "Running" },
  { icon: "PersonStanding", name: "Walking" },
  { icon: "Bike", name: "Cycling" },
  { icon: "Mountain", name: "Hiking" },
  { icon: "Waves", name: "Swimming" },
  { icon: "Dumbbell", name: "Strength" },
  { icon: "Flower2", name: "Yoga" },
  { icon: "CircleDot", name: "Pickleball" },
] as const;

// Hero feature spotlights. `media` points at a caption-free asset in
// public/spotlights/; a missing file degrades to the neutral media frame.
export const SPOTLIGHTS: ReadonlyArray<{
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  media: string;
  icon: LandingIconName;
}> = [
  {
    key: "route-3d",
    eyebrow: "New in 1.27",
    title: "3D Route Playback",
    description:
      "Replay your activity routes with a cinematic 3D follow camera. Pick your map style and adjust the playback speed to relive every workout your way.",
    media: "/spotlights/route-3d.mp4",
    icon: "Orbit",
  },
  {
    key: "ai-coach",
    eyebrow: "Apple Intelligence",
    title: "AI Coach",
    description:
      "Personalized feedback on every workout, plus chat about any activity — powered by on-device Apple Intelligence.",
    media: "/spotlights/ai-coach.mp4",
    icon: "Bot",
  },
  {
    key: "stepboard",
    eyebrow: "Compete with friends",
    title: "Stepboard",
    description:
      "Daily leaderboards with friends. Create private boards, invite with a getsteps.app/join link, and rank by steps or distance.",
    media: "/spotlights/stepboard.png",
    icon: "Trophy",
  },
  {
    key: "apple-watch",
    eyebrow: "On your wrist",
    title: "Apple Watch Workouts",
    description:
      "Start and track workouts from your wrist with GPS routes, live metrics, and real-time mirroring to your phone.",
    media: "/spotlights/apple-watch.png",
    icon: "Watch",
  },
];

// Secondary features ("everything else"). Spotlighted features, Yearly Insights
// (own section), records and workout types (own sub-blocks) are intentionally
// excluded to avoid duplication.
export const FEATURE_GRID: ReadonlyArray<{
  icon: LandingIconName;
  title: string;
  description: string;
}> = [
  { icon: "LineChart", title: "Beautiful Charts", description: "Hourly, weekly & monthly views" },
  { icon: "Flame", title: "Goals & Streaks", description: "Stay motivated every day" },
  { icon: "LayoutGrid", title: "Home Widgets", description: "10 widgets for your home screen" },
  { icon: "Lock", title: "App Lock", description: "Block apps until you hit your goal" },
  { icon: "Route", title: "GPX Export", description: "Export & share your workout routes" },
  { icon: "HeartPulse", title: "Apple Health Sync", description: "Accurate, automatic tracking" },
];

export const SCREENSHOTS = [
  "/screenshots/screenshot1.png",
  "/screenshots/screenshot2.png",
  "/screenshots/screenshot3.png",
  "/screenshots/screenshot4.png",
  "/screenshots/screenshot5.png",
  "/screenshots/screenshot9.png",
  "/screenshots/screenshot6.png",
  "/screenshots/screenshot7.png",
  "/screenshots/screenshot8.png",
] as const;

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
