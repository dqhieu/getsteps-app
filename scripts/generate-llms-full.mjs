#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const REPO_ROOT = path.resolve(path.dirname(__filename), "..");
const POSTS_DIR = path.join(REPO_ROOT, "content/blog");
const OUT_FILE = path.join(REPO_ROOT, "public/llms-full.txt");
const BASE_URL = "https://getsteps.app";

const TOOLS = [
  { slug: "step-distance-calculator", name: "Step Distance Calculator", summary: "Convert steps to distance or distance to steps based on user height. Supports metric and imperial units.", inputs: "Height, steps or distance", outputs: "Distance in km/miles or step count." },
  { slug: "steps-to-calories-calculator", name: "Steps to Calories Calculator", summary: "Calculate calories burned from daily steps using weight and pace.", inputs: "Steps, weight, pace", outputs: "Calories burned." },
  { slug: "walking-calories-calculator", name: "Walking Calories Calculator", summary: "Calculate calories burned while walking based on distance, time, body weight, and terrain using MET values.", inputs: "Distance or time, pace, weight", outputs: "Calories burned, MET multiplier used." },
  { slug: "steps-per-mile-calculator", name: "Steps Per Mile Calculator", summary: "Find how many steps fit in a mile or kilometer, adjusted for height and pace.", inputs: "Height, optional pace", outputs: "Steps per mile, steps per km." },
  { slug: "walking-time-calculator", name: "Walking Time Calculator", summary: "Estimate how long it takes to walk any distance at slow, normal, brisk, or fast pace.", inputs: "Distance, pace", outputs: "Walking time in minutes." },
  { slug: "daily-step-goal-calculator", name: "Daily Step Goal Calculator", summary: "Personalized daily step goal recommendation based on age, sex, BMI, activity level, and goal (fitness, weight loss, longevity).", inputs: "Age, sex, weight, height, activity, goal", outputs: "Suggested daily step count." },
  { slug: "weight-loss-walking-calculator", name: "Weight Loss Walking Calculator", summary: "Calculate steps, distance, and time needed to walk to hit a weight loss target.", inputs: "Current weight, goal weight, timeline, pace", outputs: "Daily steps needed, total weeks." },
  { slug: "bmi-calculator", name: "BMI Calculator", summary: "Body Mass Index calculator with CDC health category breakdown.", inputs: "Height, weight", outputs: "BMI value, health category." },
  { slug: "body-fat-calculator", name: "Body Fat Percentage Calculator", summary: "Navy method body fat percentage estimate with ACE category breakdown. No calipers needed.", inputs: "Neck, waist, hip circumference, height, sex", outputs: "Body fat %, category." },
  { slug: "calorie-deficit-calculator", name: "Calorie Deficit Calculator", summary: "Calorie target to lose weight at a chosen rate per week.", inputs: "Current weight, goal weight, TDEE, rate per week", outputs: "Daily calorie target, deficit size." },
  { slug: "tdee-calculator", name: "TDEE Calculator", summary: "Total Daily Energy Expenditure calculator using Mifflin-St Jeor + activity multiplier.", inputs: "Age, sex, weight, height, activity level", outputs: "BMR, TDEE." },
  { slug: "macro-calculator", name: "Macro Calculator", summary: "Daily protein, carbs, and fat targets by fitness goal (cut, maintain, bulk).", inputs: "TDEE or stats, goal", outputs: "Grams of protein, carbs, fat." },
  { slug: "water-intake-calculator", name: "Water Intake Calculator", summary: "Recommended daily water intake based on body weight, activity, and climate.", inputs: "Weight, activity, climate", outputs: "Daily water intake in L or oz." },
  { slug: "activity-to-steps-converter", name: "Activity to Steps Converter", summary: "Convert cycling, swimming, yoga, strength training, and other workouts into equivalent step counts.", inputs: "Activity type, duration, intensity", outputs: "Equivalent step count." },
  { slug: "distance-equivalent-calculator", name: "Distance Equivalent Calculator", summary: "Convert between km, miles, meters, yards — plus steps, time, and calories.", inputs: "Distance in any unit", outputs: "Equivalent units, time, steps." },
  { slug: "running-pace-calculator", name: "Running Pace Calculator", summary: "Convert pace, speed, and race times for any distance.", inputs: "Pace or distance and time", outputs: "min/km, min/mile, km/h, mph." },
  { slug: "pace-to-speed-converter", name: "Pace to Speed Converter", summary: "Convert between min/km, min/mile, km/h, and mph instantly.", inputs: "Pace or speed", outputs: "Pace and speed in all units." },
  { slug: "training-pace-zones", name: "Training Pace Zones", summary: "Five personalized running training pace zones (recovery, endurance, tempo, threshold, interval) from any recent race result.", inputs: "Race distance, race time", outputs: "Five pace zones." },
  { slug: "race-time-predictor", name: "Race Time Predictor", summary: "Finish time from pace, or pace needed for a goal time.", inputs: "Distance, pace or target time", outputs: "Predicted finish or required pace." },
  { slug: "marathon-pace-predictor", name: "Marathon Pace Predictor", summary: "Predict marathon, half marathon, 10K, and 5K finish times using the Riegel formula.", inputs: "Known race distance and time", outputs: "Predicted times for other distances." },
  { slug: "heart-rate-zones-calculator", name: "Heart Rate Zones Calculator", summary: "Five training heart rate zones from age or max HR. Supports Karvonen method with resting HR.", inputs: "Age, max HR, optional resting HR", outputs: "HR range for 5 zones." },
  { slug: "resting-heart-rate-calculator", name: "Resting Heart Rate Calculator", summary: "Cardiovascular fitness category and Karvonen zones from resting heart rate.", inputs: "Age, resting HR", outputs: "Fitness category, Karvonen zones." },
  { slug: "vo2-max-calculator", name: "VO2 Max Calculator", summary: "Estimate aerobic fitness level using heart rate method or Cooper test.", inputs: "Age, max HR or Cooper distance", outputs: "VO2 max estimate, fitness percentile." },
  { slug: "gpx-viewer", name: "GPX Viewer", summary: "Upload and view GPX files on an interactive map with distance, duration, pace, and elevation stats.", inputs: "GPX file", outputs: "Map, stats." },
];

const PERSONAS = [
  { slug: "seniors", title: "Step Tracking for Seniors", blurb: "Gentler daily goals, bigger text, fall-aware design, and simple Apple Watch setup for older adults." },
  { slug: "weight-loss", title: "Step Tracking for Weight Loss", blurb: "Step and calorie targets that fit a weight loss plan, with progress charts and streak motivation." },
  { slug: "beginners", title: "Step Tracking for Beginners", blurb: "Start from zero with achievable daily goals, plain-language guidance, and an interface that is not overwhelming." },
  { slug: "kids", title: "Step Tracking for Kids and Families", blurb: "Family-friendly step goals by age, privacy-respecting tracking, and shared group challenges via Stepboard." },
  { slug: "runners", title: "Step Tracking for Runners", blurb: "Detailed workout sessions with GPX export, pace zones, personal records, and cross-training step totals." },
  { slug: "women", title: "Step Tracking for Women", blurb: "Step recommendations by life stage and fitness goal, plus body composition tools like BMI and body fat estimates." },
  { slug: "pregnancy", title: "Step Tracking During Pregnancy", blurb: "Trimester-aware step guidance that prioritizes comfort and consistency over hitting aggressive targets." },
  { slug: "nurses", title: "Step Tracking for Nurses", blurb: "Built for 12-hour shifts: large step counts, fast glance widgets, and realistic calorie burn estimates for hospital floor walking." },
  { slug: "office-workers", title: "Step Tracking for Office Workers", blurb: "Reach 10,000 steps despite a desk job using goal reminders, lunchtime targets, and activity-to-steps conversions for cycling or gym sessions." },
  { slug: "heart-health", title: "Step Tracking for Heart Health", blurb: "Heart rate zone guidance, brisk walking targets, and consistency streaks backed by cardiovascular research." },
];

const FEATURE_DOCS = [
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

function readAllPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const full = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data } = matter(full);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      lastUpdated: data.lastUpdated ?? data.updated ?? "",
      keyword: data.keyword ?? "",
    };
  });
  return posts.sort((a, b) => {
    const ad = a.lastUpdated || a.date;
    const bd = b.lastUpdated || b.date;
    return (bd || "").localeCompare(ad || "");
  });
}

function toolLine(tool) {
  return `- [${tool.name}](${BASE_URL}/tools/${tool.slug}): ${tool.summary} Inputs: ${tool.inputs}. Outputs: ${tool.outputs}`;
}

function personaLine(persona) {
  return `- [${persona.title}](${BASE_URL}/for/${persona.slug}): ${persona.blurb}`;
}

function postLine(post) {
  const dateStr = post.lastUpdated || post.date;
  const dateSuffix = dateStr ? ` (updated ${dateStr})` : "";
  const desc = post.description ? `: ${post.description}` : "";
  return `- [${post.title}](${BASE_URL}/blog/${post.slug})${desc}${dateSuffix}`;
}

function docLine(doc) {
  return `- [${doc.name}](${BASE_URL}/docs/features/${doc.slug})`;
}

function generate() {
  const posts = readAllPosts();

  const out = [];
  out.push("# Steps: Workout & Pedometer — Full Reference");
  out.push("");
  out.push("> Steps is an iOS and watchOS fitness app for iPhone and Apple Watch that tracks daily steps, workouts, calories, distance, heart rate, and health data. getsteps.app is the marketing site, hosting free fitness calculators, a blog, documentation, and Stepboard — an optional leaderboard for group step challenges. This is the expanded reference for AI crawlers and large language models.");
  out.push("");
  out.push("## About");
  out.push("Steps was built by Hieu Dinh and his wife after they started running in 2024. They wanted a step counter that was simple, beautiful, and private — not bloated with social features they did not need and not stuck looking like it was last updated in 2018. Steps tracks 10,000 steps a day and 10 KM a week of running, and serves both casual walkers and more serious runners.");
  out.push("Read the full founder story: " + BASE_URL + "/about");
  out.push("");
  out.push("## App Capabilities");
  out.push("- Step counting with automatic tracking via iPhone and Apple Watch (reads from Apple HealthKit).");
  out.push("- 23+ workout types: running, walking, cycling, hiking, swimming, strength, yoga, pickleball, tennis, rowing, dance, stair climbing, and more.");
  out.push("- Beautiful charts with hourly, weekly, and monthly views.");
  out.push("- Daily goal, streaks, and reminders for motivation.");
  out.push("- App Lock: block distracting apps until you hit your daily step goal.");
  out.push("- GPX export for walking, running, and hiking routes.");
  out.push("- 8 personal records: fastest pace, most calories, earliest start, most elevation, longest duration, farthest distance, latest night, max heart rate.");
  out.push("- 8 iPhone home screen widgets and Lock Screen widgets in multiple sizes.");
  out.push("- Apple Watch companion app with complications in multiple styles.");
  out.push("- Yearly Insights: a Fitness Wrapped-style recap of the year's steps and workouts.");
  out.push("- Siri Shortcuts and shortcut actions for automation.");
  out.push("- Sharing: share activity summaries, routes, and personal records.");
  out.push("- Privacy-first: health data stays on device by default. Stepboard (group leaderboards) is opt-in and only syncs the data needed for the leaderboard.");
  out.push("");
  out.push("## Stepboard (Group Leaderboards)");
  out.push("Stepboard is an opt-in social feature for step challenges. Users join a group via a 4-character invite code (shared via links like " + BASE_URL + "/join/ABCD). Data synced for Stepboard is limited to display name, country, daily steps, distance, calories, and flights climbed. Users can leave a group at any time and have their data removed. Nothing is synced unless a user actively joins.");
  out.push("");
  out.push("## Pricing");
  out.push("Steps core features are free forever. Steps Pro unlocks additional features such as detailed workout history and extended analytics. Free on the App Store: " + BASE_URL + "/docs/features/steps-pro");
  out.push("");
  out.push("## Free Fitness Calculators (Web Tools)");
  out.push("All tools are browser-based, require no signup, and work in all major browsers. Inputs are never sent to a server.");
  out.push("");
  for (const tool of TOOLS) out.push(toolLine(tool));
  out.push("");
  out.push("## Personas / Use Cases");
  out.push("");
  for (const persona of PERSONAS) out.push(personaLine(persona));
  out.push("");
  out.push("## Blog Posts (" + posts.length + " total)");
  out.push("");
  out.push("Fitness explainers, calculators, walking and running guides, comparisons, and app feature posts. Sorted by most recently updated.");
  out.push("");
  for (const post of posts) out.push(postLine(post));
  out.push("");
  out.push("## Documentation");
  out.push("English docs are canonical. Translations: Chinese (zh), French (fr), German (de), Italian (it), Portuguese Brazil (pt-BR), Spanish (es).");
  out.push("- [Docs Home](" + BASE_URL + "/docs)");
  for (const doc of FEATURE_DOCS) out.push(docLine(doc));
  out.push("");
  out.push("## Key Links");
  out.push("- [Homepage](" + BASE_URL + ")");
  out.push("- [App Store](https://apps.apple.com/us/app/steps-workout-pedometer/id6746096378)");
  out.push("- [Blog](" + BASE_URL + "/blog)");
  out.push("- [Tools](" + BASE_URL + "/tools)");
  out.push("- [Use Cases](" + BASE_URL + "/for)");
  out.push("- [About](" + BASE_URL + "/about)");
  out.push("- [Press](" + BASE_URL + "/press)");
  out.push("- [Feedback](" + BASE_URL + "/feedback)");
  out.push("- [Privacy](" + BASE_URL + "/privacy)");
  out.push("- [Terms](" + BASE_URL + "/terms)");
  out.push("- [Sitemap](" + BASE_URL + "/sitemap.xml)");
  out.push("- [llms.txt](" + BASE_URL + "/llms.txt)");
  out.push("");
  out.push("## Platforms Supported");
  out.push("- iOS 17+ on iPhone");
  out.push("- watchOS 10+ on Apple Watch");
  out.push("- Data source: Apple HealthKit. Steps does not require Fitbit, Garmin, or any other third-party hardware.");
  out.push("");

  fs.writeFileSync(OUT_FILE, out.join("\n"), "utf8");
  console.log("Wrote " + OUT_FILE + " (" + posts.length + " posts, " + TOOLS.length + " tools, " + PERSONAS.length + " personas)");
}

generate();
