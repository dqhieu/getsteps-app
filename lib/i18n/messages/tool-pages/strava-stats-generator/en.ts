import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "Strava Stats Generator - Free Workout Stats Card Maker | Steps",
    description:
      "Turn your Strava run into a transparent stats overlay for Instagram Stories. Enter distance and time, get pace calculated automatically, and download a free 1080x1080 transparent PNG.",
    keywords: [
      "strava stats generator",
      "strava workout stats",
      "strava stats overlay",
      "transparent workout stats png",
      "running stats overlay instagram",
      "workout stats image",
      "share running stats",
      "instagram story running stats",
    ],
    ogTitle: "Strava Stats Generator - Transparent Workout Stats Overlay",
    ogDescription:
      "Turn your Strava run into a transparent stats overlay for Instagram Stories. Distance, moving time, and auto-calculated pace on a free downloadable PNG.",
    ogImageAlt: "Strava Stats Generator - Free Workout Stats Card Maker",
  },
  hero: {
    title: "Strava Stats Generator",
    subtitle:
      "Turn the run you just logged into a transparent stats overlay for your Story. Enter your distance and time — we work out the pace and hand you a free PNG that drops straight onto your photo.",
  },
  tool: {
    workout: "Your Workout",
    distance: "Distance",
    switchToMiles: "Switch to miles",
    switchToKilometers: "Switch to kilometers",
    movingTime: "Moving Time (MM:SS or H:MM:SS)",
    durationPlaceholder: "52:30",
    paceHint: "Pace is calculated for you from distance and time.",
    overlay: "Your Overlay",
    overlayAria: "Workout stats overlay: {distance} {distanceUnit}, {time}, {pace} {paceUnit}",
    saved: "Saved!",
    download: "Download Transparent PNG",
    downloadHint:
      "1080×1080 with a transparent background — drop it straight over your photo in Instagram Stories. Everything runs in your browser; nothing is uploaded.",
    canvas: {
      distance: "Distance",
      pace: "Pace",
      time: "Time",
    },
  },
  inlineCta: {
    headline: "Track the steps Strava misses",
    description:
      "Steps counts every step from your iPhone and Apple Watch and shows it right alongside your runs — plus streaks, trends, and a free Year in Review.",
  },
  about: {
    title: "Why a Transparent Overlay?",
    p1: "The photo is the post. You took a picture at the turnaround point or at the finish line, and that is what people want to see — a solid stats card just covers it up. A transparent PNG keeps your photo and lays the three numbers that matter — distance, moving time, and pace — on top of it, at a size that is readable on a phone.",
    p2: "This generator works with any run, walk, or ride, whether you recorded it in Strava, Garmin Connect, Apple Watch, Nike Run Club, or on a treadmill with no tracking at all. Type in what you did and the overlay is ready in seconds — no account, no email, no watermark.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "How do I make a stats overlay from my Strava run?",
      answer:
        "Open the activity in Strava and read off the distance and moving time, then type both into the form above. Pace is calculated for you. Tap Download to save a transparent PNG with just those three stats on it.",
    },
    {
      question: "How do I put the overlay on my photo?",
      answer:
        "Open Instagram Stories and pick the photo you want to post. Tap the sticker button, choose the photo sticker, and select the PNG you downloaded. Because the background is transparent, only the text lands on your image — then pinch to resize and drag it wherever it sits best. The same trick works in TikTok, Snapchat, and any photo editor that supports layers.",
    },
    {
      question: "Is this tool affiliated with Strava?",
      answer:
        "No. This is a free tool from Steps, and it is not affiliated with, endorsed by, or connected to Strava. It produces an original, unbranded graphic of the numbers you enter — not a copy of a Strava activity screen.",
    },
    {
      question: "How is pace calculated?",
      answer:
        "Pace is your moving time divided by your distance, shown as minutes and seconds per kilometer or per mile depending on the unit you pick. A 10 km run in 52:30 works out to 5:15 per kilometer. You never type pace in yourself — it always follows from the distance and time you enter.",
    },
    {
      question: "What size is the image?",
      answer:
        "1080 by 1080 pixels — a square 1:1 that works as a feed post and drops cleanly onto a Stories or TikTok photo, where you can pinch to resize and place it. The stats are centered, so they read well wherever you position the overlay.",
    },
    {
      question: "Why is the background transparent?",
      answer:
        "So the overlay layers onto a photo you already took rather than replacing it. A solid card covers your run photo; a transparent PNG lets the stats sit on top of it. The text carries a soft drop shadow so it stays readable over bright backgrounds like snow or sky.",
    },
    {
      question: "Is my workout data uploaded anywhere?",
      answer:
        "No. The overlay is drawn in your browser with a canvas element and saved straight to your device. Nothing you type is sent to a server, stored, or logged.",
    },
    {
      question: "Does Strava show step count?",
      answer:
        "No — Strava records distance, time, and pace, but it does not count steps for your day. If you want step tracking alongside your runs, the Steps app reads step data from your iPhone and Apple Watch and shows it next to your workouts.",
    },
  ],
  disclaimer:
    "Steps is not affiliated with, endorsed by, or connected to Strava. Strava is a trademark of Strava, Inc. Overlays generated here are original graphics built from the numbers you enter.",
  howTo: TOOL_HOW_TO["strava-stats-generator"],
};

export type StravaStatsGeneratorMessages = typeof en;
export default en;
