import { PersonaData } from "@/lib/personas";

export const runnersPersona: PersonaData = {
  slug: "runners",
  icon: "🏃",
  metaTitle: "Step Counter for Runners & Hikers - Track Runs, Steps & Routes",
  metaDescription: "Steps tracks your runs, hikes, and daily steps in one app. GPS routes, pace tracking, GPX export, and 23+ workout types. Free for iPhone and Apple Watch.",
  keywords: ["running step counter", "step counter for runners", "step counter for hikers", "running tracker app", "hiker pedometer"],
  headline: "The Step Counter Runners Love",
  subheadline: "Track runs, hikes, and daily steps with GPS routes and Apple Watch",
  introText: "Runners and hikers need more than a basic step counter. You want GPS route maps to see exactly where you went, pace data so you know how hard you pushed, and the ability to export GPX files to Strava or Komoot after a trail session. You also want your casual daily steps counted in the background without switching apps. Steps handles all of it — 23+ workout types including running, trail running, hiking, and cycling, plus GPS route tracking and Apple Watch support that makes your wrist the only device you need on a run. One app for your morning jog, your weekend trail, and every step in between.",
  problemPoints: [
    "Basic pedometers track steps but miss pace, distance, and route data runners care about",
    "Separate apps for daily walking and serious runs means fragmented data and multiple subscriptions",
    "Can't export GPX from many apps, breaking your Strava or Komoot workflow",
    "Want casual background step counting AND detailed workout logging in one place",
  ],
  solutionText: "Steps bridges casual step tracking and serious workout logging. Start a run or hike from the workout screen to get GPS routes, pace, and distance. Your workout steps merge with your daily step count automatically. After your run, export a GPX file to import anywhere. Apple Watch tracks everything hands-free, so your phone can stay in your pack on the trail.",
  features: [
    { icon: "🏃", title: "23+ Workouts", description: "Log running, trail running, hiking, cycling, and 20+ more workout types — all contributing to your daily step and calorie totals." },
    { icon: "🗺️", title: "GPX Export", description: "Export GPS route files from any workout to import into Strava, Komoot, Garmin Connect, or any GPX-compatible platform." },
    { icon: "🏆", title: "Personal Records", description: "Track your longest run, fastest pace, highest step day, and other records — a built-in way to measure improvement over time." },
    { icon: "⌚", title: "Apple Watch", description: "Start and monitor workouts directly from your wrist — no phone required on the trail or track." },
    { icon: "⚡", title: "Pace Tracking", description: "See current pace, average pace, and splits for every run and hike with real-time GPS data." },
    { icon: "🎯", title: "Training Pace Zones", description: "Calculate your optimal training zones and run at the right intensity for easy days, tempo runs, and intervals." },
  ],
  testimonials: [
    { quote: "I was using three apps — one for daily steps, one for GPS runs, one for routes. Steps replaced all of them. The GPX export means I can still post to Strava without losing anything.", author: "Runner, 28", context: "Training for a half marathon using Steps as primary run tracker" },
    { quote: "The trail running mode with GPS is surprisingly good for a step counter app. I can see my exact route and export it after every hike.", author: "Hiker, 35", context: "Weekend hiker who tracks all trail outings and reviews routes afterward" },
    { quote: "My morning jogs are logged as workouts, but my afternoon walking around the office still counts too. Having it all in one place finally makes sense.", author: "Jogger, 42", context: "Daily runner who also wanted background step counting throughout the day" },
  ],
  faqs: [
    { question: "Does Steps track running pace?", answer: "Yes. When you start a run workout, Steps uses GPS to calculate your current pace, average pace, and distance in real time. You can see splits and review full pace data after the workout." },
    { question: "Can I export GPX files from Steps?", answer: "Yes. Every GPS workout can be exported as a GPX file directly from the app. You can share it to Strava, Komoot, Garmin Connect, or any service that accepts GPX imports." },
    { question: "How does Steps compare to Strava for runners?", answer: "Steps excels at combining daily step tracking with workout logging, while Strava focuses purely on social workout sharing. Many runners use Steps for daily tracking and GPX export to Strava for social sharing — they work well together." },
    { question: "How many steps are in a mile of running?", answer: "Running stride length is typically longer than walking, putting most runners at 1,400 to 1,700 steps per mile depending on height and pace. See our detailed guide linked below for full breakdowns." },
    { question: "Does Steps work with Apple Watch for runs?", answer: "Yes. You can start, monitor, and end workouts directly from your Apple Watch. Heart rate, pace, and GPS data all sync to the app automatically after your run." },
    { question: "Can I track trail running and hiking?", answer: "Yes. Steps includes dedicated trail running and hiking workout types with full GPS route maps. The GPX export works for all outdoor activities including hikes." },
    { question: "Does Steps estimate VO2 max?", answer: "Steps integrates with Apple Health, which estimates VO2 max from your Apple Watch workout data. Use the VO2 Max Calculator linked below for a manual estimate based on your race times." },
  ],
  relatedTools: [
    { title: "Running Pace Calculator", href: "/tools/running-pace-calculator" },
    { title: "Marathon Pace Predictor", href: "/tools/marathon-pace-predictor" },
    { title: "VO2 Max Calculator", href: "/tools/vo2-max-calculator" },
  ],
  relatedPosts: [
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "How Many Steps in a Mile Running?", href: "/blog/how-many-steps-in-a-mile-running" },
    { title: "Calories Burned Hiking", href: "/blog/calories-burned-hiking" },
  ],
  relatedPersonas: [
    { title: "Weight Loss", slug: "weight-loss" },
    { title: "Women", slug: "women" },
  ],
  ctaHeadline: "Track Every Run and Hike",
  ctaSubtext: "Download Steps and get a complete running companion with GPS routes and 23+ workout types.",
};
