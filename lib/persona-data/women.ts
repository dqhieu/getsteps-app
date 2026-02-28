import { PersonaData } from "@/lib/personas";

export const womenPersona: PersonaData = {
  slug: "women",
  icon: "💪",
  metaTitle: "Fitness Tracker for Women - Step Counter & Workout App",
  metaDescription: "Steps is designed for women who want a complete fitness tracker. Track walks, runs, yoga, strength training and more with beautiful charts and Apple Watch.",
  keywords: ["fitness tracker for women", "fitness tracker for women athletes", "women step counter", "female fitness app", "workout tracker for women"],
  headline: "Your Complete Fitness Tracker",
  subheadline: "Track walks, workouts, and progress with an app built around your active lifestyle",
  introText: "Active women rarely fit into a single fitness box. A Monday morning might be a strength session, Tuesday a yoga class, Wednesday a run with friends, and Thursday just a busy day of walking. Most fitness apps are built around one type of activity — usually running — and leave everything else as an afterthought. Steps tracks 23+ workout types, from walking and running to yoga, strength training, cycling, and dance. Every activity feeds into your daily totals and weekly charts, giving you a complete picture of how active you really are across an entire week, not just your gym days.",
  problemPoints: [
    "Most step counters only count walking, ignoring yoga, strength, and other workouts",
    "Want a holistic view of activity across different workout types, not just steps",
    "Privacy concerns with apps that require social accounts or share your data",
    "Need flexible tracking that handles both structured workouts and casual daily movement",
  ],
  solutionText: "Steps tracks your full activity spectrum in one place. Log a yoga flow, a strength session, or a long run — all of it appears in your weekly activity view alongside your background step count. Your data stays on your device with no account required, so privacy is built in from the start. Beautiful yearly insights show patterns across months, revealing when you're most active and where your fitness has grown.",
  features: [
    { icon: "🏃", title: "23+ Workouts", description: "Track yoga, strength training, pilates, cycling, running, and 18+ more workout types alongside your daily steps." },
    { icon: "🔒", title: "Privacy First", description: "No account required. Your fitness data stays on your device and is never sold or shared with advertisers." },
    { icon: "📊", title: "Beautiful Charts", description: "Weekly and monthly charts show your complete activity picture across all workout types and daily movement." },
    { icon: "📅", title: "Yearly Insights", description: "Review your most active months, longest streaks, and personal records from the past year in a beautiful annual summary." },
    { icon: "⌚", title: "Apple Watch", description: "All workout types sync from Apple Watch, so your yoga session and morning run both appear in the same app." },
  ],
  testimonials: [
    { quote: "I do running three days a week and yoga the other four. Steps is the only app where I can see my complete week without stitching data together from multiple apps.", author: "Female runner, 30", context: "Trains for 10Ks while maintaining a daily yoga practice" },
    { quote: "I was using four different apps and none of them talked to each other. Switching to Steps meant one place for everything, and my weekly charts finally make sense.", author: "Yoga enthusiast, 26", context: "Combines yoga, barre, and walking as primary fitness activities" },
    { quote: "As a mom who cross-trains, I never have a typical workout week. Steps handles that perfectly — whatever I do that day gets logged and counted.", author: "Mom of 2, 38", context: "Mixes running, strength, and walking around a family schedule" },
  ],
  faqs: [
    { question: "Does Steps track yoga and strength training?", answer: "Yes. Steps includes dedicated tracking for yoga, strength training, pilates, barre, and many other non-step-based workouts. These sessions are logged with duration and estimated calorie burn, and they appear in your weekly activity summary." },
    { question: "Is my fitness data private?", answer: "Yes. Steps requires no account and stores your data on your device. The app does not sell your data or use it for advertising. You control your information completely." },
    { question: "How many steps should women aim for per day?", answer: "Research suggests 7,500 to 10,000 steps daily provides significant health benefits for most women. Steps lets you set any goal and tracks your progress toward it, adjusting as your fitness level changes." },
    { question: "Does Steps work with Apple Watch?", answer: "Yes. Steps is fully compatible with Apple Watch for all 23+ workout types. Your watch automatically tracks workouts and daily steps, syncing everything to the app." },
    { question: "Do I need a subscription to track multiple activities?", answer: "The free version of Steps includes step tracking and basic workout logging. A premium subscription unlocks detailed charts for all workout types, yearly insights, and additional themes." },
    { question: "Can I track multiple different activities in one day?", answer: "Yes. Steps handles multiple activities on the same day — a morning run, afternoon yoga, and evening walk all log separately and roll up into your daily totals." },
  ],
  relatedTools: [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "TDEE Calculator", href: "/tools/tdee-calculator" },
    { title: "Body Fat Calculator", href: "/tools/body-fat-calculator" },
  ],
  relatedPosts: [
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "Heart Rate Zones Explained", href: "/blog/heart-rate-zones-explained" },
    { title: "What Is TDEE?", href: "/blog/what-is-tdee" },
  ],
  relatedPersonas: [
    { title: "Pregnancy", slug: "pregnancy" },
    { title: "Runners", slug: "runners" },
  ],
  ctaHeadline: "Start Tracking Your Fitness Journey",
  ctaSubtext: "Download Steps and get a fitness tracker that keeps up with your active lifestyle.",
};
