const en = {
  hero: {
    iconAlt: "Steps app icon",
    titleLead: "Every step counts.",
    titleAccent: "Every milestone shows.",
    subtitle:
      "A beautifully simple pedometer and workout tracker for iPhone and Apple Watch — powered by Apple Health.",
    freeDownload: "Free download",
  },
  trust: {
    featuredIn: "FEATURED IN",
    videoAria: "Watch Appreciation, starring Erick the Architect, on YouTube",
    videoTitle: "APPRECIATION",
    videoCredit: "starring Erick the Architect",
    lovedBy: "LOVED BY 10,000+ WALKERS",
    fiveStars: "5 out of 5 stars",
  },
  spotlights: {
    "route-3d": {
      eyebrow: "New in 1.27",
      title: "3D Route Playback",
      description:
        "Replay your activity routes with a cinematic 3D follow camera. Pick your map style and adjust the playback speed to relive every workout your way.",
    },
    "ai-coach": {
      eyebrow: "Apple Intelligence",
      title: "AI Coach",
      description:
        "Personalized feedback on every workout, plus chat about any activity — powered by on-device Apple Intelligence.",
    },
    stepboard: {
      eyebrow: "Compete with friends",
      title: "Stepboard",
      description:
        "Daily leaderboards with friends. Create private boards, invite with a getsteps.app/join link, and rank by steps or distance.",
    },
    "apple-watch": {
      eyebrow: "On your wrist",
      title: "Apple Watch Workouts",
      description:
        "Start and track workouts from your wrist with GPS routes, live metrics, and real-time mirroring to your phone.",
    },
  },
  spotlightImageAlt: "{title} shown in the Steps app",
  yearly: {
    badge: "Free for everyone",
    title: "Your Year in Review",
    subtitle: "Your fitness journey turned into colorful, shareable visualizations.",
    cards: {
      receipt: {
        title: "Fitness Receipt",
        description: "Your year's stats as a personalized receipt",
      },
      tickets: {
        title: "Achievement Tickets",
        description: "Milestone achievements as flight tickets",
      },
      stamps: {
        title: "Passport Stamps",
        description: "Collect a stamp for every milestone reached",
      },
    },
  },
  features: {
    title: "Everything else you'd want",
    subtitle: "Built natively for iPhone and Apple Watch, powered by Apple Health.",
    healthBadgeAlt: "Works with Apple Health",
    grid: {
      LineChart: { title: "Clear Charts", description: "Hourly, weekly & monthly views" },
      Flame: { title: "Goals & Streaks", description: "Stay motivated every day" },
      LayoutGrid: { title: "Home Widgets", description: "10 widgets for your home screen" },
      Lock: { title: "App Lock", description: "Block apps until you hit your goal" },
      Route: { title: "GPX Export", description: "Export & share your workout routes" },
      HeartPulse: { title: "Apple Health Sync", description: "Accurate, automatic tracking" },
    },
    recordsTitle: "{count} PERSONAL RECORDS",
    records: {
      Zap: "Fastest Pace",
      Flame: "Most Calories",
      Sunrise: "Earliest Start",
      Mountain: "Most Elevation",
      Timer: "Longest Duration",
      Ruler: "Farthest Distance",
      Moon: "Latest Night",
      HeartPulse: "Max Heart Rate",
    },
    workoutsTitle: "{count} WORKOUT TYPES",
    workouts: {
      Footprints: "Running",
      PersonStanding: "Walking",
      Bike: "Cycling",
      Mountain: "Hiking",
      Waves: "Swimming",
      Dumbbell: "Strength",
      Flower2: "Yoga",
      CircleDot: "Pickleball",
    },
    moreWorkouts: "+15 more",
  },
  privacy: {
    title: "Your data stays on your device by default",
    body: "Health data is stored locally and accessed securely through Apple HealthKit with your permission. If you opt into the Stepboard leaderboard, selected metrics are synced to power the rankings.",
  },
  cta: {
    title: "Ready to track every step?",
    footnote: "Free forever · No account needed · Pro features available",
  },
  stepboard: {
    sectionLabel: "Stepboard community step total",
    counterLabel: "{total} steps walked by the Steps community",
    footer: "Total steps walked by Stepboard members",
  },
};

export type LandingMessages = typeof en;
export default en;
