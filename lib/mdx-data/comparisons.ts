import type {
  ComparisonColumn,
  ComparisonRow,
} from "@/components/mdx/comparison-table";

export interface ComparisonData {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  caption?: string;
  featureLabel?: string;
}

export const COMPARISONS: Record<string, ComparisonData> = {
  "steps-vs-apple-fitness": {
    columns: [
      { key: "steps", label: "Steps", highlight: true },
      { key: "af", label: "Apple Fitness" },
    ],
    rows: [
      { label: "Step Counting", cells: { steps: "✓", af: "✓" } },
      { label: "iPhone Widgets", cells: { steps: "8 widget types", af: "1 basic widget" } },
      { label: "Apple Watch App", cells: { steps: "Native", af: "Native" } },
      { label: "Watch Complications", cells: { steps: "Multiple styles", af: "Activity rings only" } },
      { label: "GPX Export", cells: { steps: "✓", af: "✗" } },
      { label: "Workout Types", cells: { steps: "23+", af: "10+" } },
      { label: "Streak Tracking", cells: { steps: "Daily streaks", af: "Move rings" } },
      { label: "Yearly Insights", cells: { steps: "Wrapped-style", af: "Monthly summaries" } },
      { label: "Personal Records", cells: { steps: "8 PR categories", af: "✗" } },
      { label: "Charts", cells: { steps: "Hourly / weekly / monthly", af: "Weekly summaries" } },
      { label: "Price", cells: { steps: "Free (Pro available)", af: "Free (Fitness+ paid)" } },
    ],
  },
  "steps-vs-strava": {
    columns: [
      { key: "steps", label: "Steps", highlight: true },
      { key: "strava", label: "Strava" },
    ],
    rows: [
      { label: "Step Counting", cells: { steps: "Dedicated", strava: "Not a focus" } },
      { label: "iPhone Widgets", cells: { steps: "8 widget types", strava: "1 basic widget" } },
      { label: "Apple Watch App", cells: { steps: "Native", strava: "Native" } },
      { label: "Watch Complications", cells: { steps: "Multiple styles", strava: "Basic" } },
      { label: "GPX Export", cells: { steps: "Free", strava: "Subscription required" } },
      { label: "Workout Types", cells: { steps: "23+", strava: "30+" } },
      { label: "Streak Tracking", cells: { steps: "✓", strava: "✗" } },
      { label: "Yearly Insights", cells: { steps: "Wrapped-style", strava: "Year in Sport (paid)" } },
      { label: "Personal Records", cells: { steps: "8 PR categories", strava: "Segment-based" } },
      { label: "Social Features", cells: { steps: "✗", strava: "Feed, clubs, kudos" } },
      { label: "Route Planning", cells: { steps: "✗", strava: "Subscription" } },
      { label: "Segments / Leaderboards", cells: { steps: "✗", strava: "✓" } },
      { label: "Charts", cells: { steps: "Hourly / weekly / monthly", strava: "Weekly summaries" } },
      { label: "Price", cells: { steps: "Free (Pro available)", strava: "Free (Summit $11.99/mo)" } },
    ],
  },
  "steps-vs-pedometer-plus-plus": {
    columns: [
      { key: "steps", label: "Steps", highlight: true },
      { key: "p2", label: "Pedometer++" },
    ],
    rows: [
      { label: "Step Counting", cells: { steps: "✓", p2: "✓" } },
      { label: "iPhone Widgets", cells: { steps: "8 widget types", p2: "3 widget types" } },
      { label: "Apple Watch App", cells: { steps: "Native", p2: "Native" } },
      { label: "Watch Complications", cells: { steps: "Multiple styles", p2: "Basic" } },
      { label: "GPX Export", cells: { steps: "✓", p2: "✗" } },
      { label: "Workout Types", cells: { steps: "23+", p2: "Walking only" } },
      { label: "Streak Tracking", cells: { steps: "✓", p2: "✗" } },
      { label: "Yearly Insights", cells: { steps: "Wrapped-style", p2: "✗" } },
      { label: "Personal Records", cells: { steps: "8 PR categories", p2: "✗" } },
      { label: "Charts", cells: { steps: "Hourly / weekly / monthly", p2: "Daily / weekly" } },
      { label: "HealthKit Sync", cells: { steps: "✓", p2: "✓" } },
      { label: "Price", cells: { steps: "Free (Pro available)", p2: "Free (Premium paid)" } },
    ],
  },
  "steps-vs-nike-run-club": {
    columns: [
      { key: "steps", label: "Steps", highlight: true },
      { key: "nrc", label: "Nike Run Club" },
    ],
    rows: [
      { label: "Step Counting", cells: { steps: "Dedicated", nrc: "Basic (via Apple Health)" } },
      { label: "iPhone Widgets", cells: { steps: "8 widget types", nrc: "1 widget" } },
      { label: "Apple Watch App", cells: { steps: "Native", nrc: "Native" } },
      { label: "Watch Complications", cells: { steps: "Multiple styles", nrc: "Run-focused" } },
      { label: "GPX Export", cells: { steps: "✓", nrc: "✗" } },
      { label: "Workout Types", cells: { steps: "23+", nrc: "Running-focused" } },
      { label: "Streak Tracking", cells: { steps: "Daily steps", nrc: "Run streaks" } },
      { label: "Yearly Insights", cells: { steps: "Wrapped-style", nrc: "Monthly recap" } },
      { label: "Personal Records", cells: { steps: "8 PR categories", nrc: "Running PRs only" } },
      { label: "Guided Workouts", cells: { steps: "✗", nrc: "Audio-guided runs" } },
      { label: "Social Features", cells: { steps: "✗", nrc: "Challenges & clubs" } },
      { label: "Charts", cells: { steps: "Hourly / weekly / monthly", nrc: "Run history" } },
      { label: "Price", cells: { steps: "Free (Pro available)", nrc: "Free" } },
    ],
  },
  "best-step-counter-iphone": {
    columns: [
      { key: "steps", label: "Steps", highlight: true },
      { key: "p2", label: "Pedometer++" },
      { key: "sa", label: "StepsApp" },
      { key: "pacer", label: "Pacer" },
    ],
    rows: [
      { label: "Widgets", cells: { steps: "8 types", p2: "3 types", sa: "2 types", pacer: "2 types" } },
      { label: "Watch App", cells: { steps: "Native", p2: "Native", sa: "✓", pacer: "✓" } },
      { label: "Workout Types", cells: { steps: "23+", p2: "Walking only", sa: "3", pacer: "5" } },
      { label: "GPX Export", cells: { steps: "✓", p2: "✗", sa: "✗", pacer: "✗" } },
      { label: "Streaks", cells: { steps: "✓", p2: "✗", sa: "✗", pacer: "✓" } },
      { label: "Yearly Recap", cells: { steps: "✓", p2: "✗", sa: "✗", pacer: "✗" } },
      { label: "Personal Records", cells: { steps: "8", p2: "✗", sa: "✗", pacer: "✗" } },
      { label: "Free Tier", cells: { steps: "✓", p2: "✓", sa: "✓", pacer: "✓" } },
    ],
  },
  "best-step-counter-apple-watch": {
    featureLabel: "Capability",
    columns: [
      { key: "steps", label: "Steps: Workout & Pedometer", highlight: true },
    ],
    rows: [
      { label: "Native Watch App", cells: { steps: "✓" } },
      { label: "Complications", cells: { steps: "Multiple styles" } },
      { label: "iPhone Widgets", cells: { steps: "8 widget types" } },
      { label: "GPX Export", cells: { steps: "✓" } },
      { label: "Yearly Insights", cells: { steps: "✓" } },
      { label: "Streak Tracking", cells: { steps: "✓" } },
      { label: "23+ Workout Types", cells: { steps: "✓" } },
    ],
  },
  "best-pedometer-app-iphone": {
    columns: [
      { key: "steps", label: "Steps", highlight: true },
      { key: "p2", label: "Pedometer++" },
      { key: "sa", label: "StepsApp" },
      { key: "ah", label: "Apple Health" },
    ],
    rows: [
      { label: "Step Counting", cells: { steps: "✓", p2: "✓", sa: "✓", ah: "✓" } },
      { label: "Widgets", cells: { steps: "8 types", p2: "3 types", sa: "2 types", ah: "✗" } },
      { label: "Watch Complications", cells: { steps: "Multiple", p2: "Basic", sa: "✓", ah: "Activity" } },
      { label: "Workout Tracking", cells: { steps: "23+ types", p2: "✗", sa: "3 types", ah: "✗" } },
      { label: "GPX Export", cells: { steps: "✓", p2: "✗", sa: "✗", ah: "✗" } },
      { label: "Streak Tracking", cells: { steps: "✓", p2: "✗", sa: "✗", ah: "✗" } },
      { label: "Yearly Insights", cells: { steps: "✓", p2: "✗", sa: "✗", ah: "✗" } },
      { label: "Calorie Tracking", cells: { steps: "✓", p2: "✓", sa: "✓", ah: "✓" } },
      { label: "Free", cells: { steps: "✓", p2: "✓", sa: "✓", ah: "✓" } },
    ],
  },
};
