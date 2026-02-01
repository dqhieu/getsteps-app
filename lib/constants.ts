// Shared constants for the Steps landing page

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

export const FEATURES = [
  {
    icon: "⌚",
    title: "Apple Watch",
    description: "Seamless sync with your Watch",
  },
  {
    icon: "📊",
    title: "Beautiful Charts",
    description: "Hourly, weekly & monthly views",
  },
  {
    icon: "🔥",
    title: "23+ Workouts",
    description: "Running, cycling, yoga & more",
  },
  {
    icon: "🎯",
    title: "Goals & Streaks",
    description: "Stay motivated every day",
  },
  {
    icon: "🏆",
    title: "Personal Records",
    description: "Track 8 different PRs",
  },
  {
    icon: "📱",
    title: "Home Widgets",
    description: "8 widgets for your home screen",
  },
] as const;

export const PERSONAL_RECORDS = [
  { icon: "⚡", title: "Fastest Pace" },
  { icon: "🔥", title: "Most Calories" },
  { icon: "🌅", title: "Earliest Start" },
  { icon: "🏔️", title: "Most Elevation" },
  { icon: "⏱️", title: "Longest Duration" },
  { icon: "📏", title: "Farthest Distance" },
  { icon: "🌙", title: "Latest Night" },
  { icon: "❤️", title: "Max Heart Rate" },
] as const;

export const WORKOUT_TYPES = [
  { icon: "🏃", name: "Running" },
  { icon: "🚶", name: "Walking" },
  { icon: "🚴", name: "Cycling" },
  { icon: "🥾", name: "Hiking" },
  { icon: "🏊", name: "Swimming" },
  { icon: "💪", name: "Strength" },
  { icon: "🧘", name: "Yoga" },
  { icon: "🏓", name: "Pickleball" },
] as const;

export const SCREENSHOTS = [
  "/screenshots/screenshot1.png",
  "/screenshots/screenshot2.png",
  "/screenshots/screenshot3.png",
  "/screenshots/screenshot4.png",
  "/screenshots/screenshot5.png",
  "/screenshots/screenshot6.png",
  "/screenshots/screenshot7.png",
  "/screenshots/screenshot8.png",
] as const;
