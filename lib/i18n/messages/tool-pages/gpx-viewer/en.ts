import { TOOL_HOW_TO } from "@/lib/tool-how-to";

const en = {
  meta: {
    title: "GPX Viewer - View GPX Files Online Free | Steps",
    description:
      "Upload and view GPX files online for free. Visualize tracks on an interactive map with elevation profiles, distance, speed, waypoints, and route data. No signup required.",
    keywords: [
      "gpx viewer",
      "gpx reader",
      "gpx file viewer",
      "view gpx file",
      "gpx file reader",
      "gpx viewer online",
      "gpx file viewer online",
      "open gpx file",
      "gpx file opener",
      "gpx analyzer",
      "gpx editor",
    ],
    ogTitle: "GPX Viewer - View GPX Files Online Free",
    ogDescription:
      "Upload and visualize your GPX files on an interactive map with elevation profiles, distance, speed, and waypoint data.",
    ogImageAlt: "GPX Viewer - View GPX Files Online",
  },
  hero: {
    title: "GPX Viewer - View GPX Files Online",
    subtitle:
      "Upload and visualize your GPX files. View tracks on an interactive map with elevation profiles, distance, speed, and waypoint data.",
  },
  intro:
    "Drag and drop any .gpx file to instantly view your route on a map. Works with files from Strava, Garmin, Apple Watch, Komoot, and any other GPS device or app.",
  tool: {
    dropTitle: "Drop your GPX file here",
    dropHint: "or click to browse",
    dropFormats: "Supports .gpx files from Strava, Garmin, Apple Watch, and more",
    errors: {
      notGpx: "Please upload a .gpx file",
      noTrack: "No track data found in this GPX file",
      parse: "Failed to parse GPX file. Please check the file format.",
    },
    newFile: "New file",
    points: {
      one: "{count} point",
      other: "{count} points",
    },
    waypoints: {
      one: "{count} waypoint",
      other: "{count} waypoints",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "Distance",
      duration: "Duration",
      avgSpeed: "Avg Speed",
      maxSpeed: "Max Speed",
      elevationGain: "Elevation Gain",
      elevationLoss: "Elevation Loss",
      maxElevation: "Max Elevation",
      minElevation: "Min Elevation",
    },
    na: "N/A",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "Elevation Profile",
    waypointsTitle: "Waypoints ({count})",
    waypointFallback: "Waypoint {n}",
    start: "Start",
    end: "End",
  },
  about: {
    title: "What Is a GPX File?",
    p1: "GPX (GPS Exchange Format) is the standard XML file format for storing GPS data. It contains latitude, longitude, elevation, and timestamps for tracks, routes, and waypoints. GPX files are used by virtually every GPS device and fitness app including Garmin, Strava, Apple Watch, Komoot, and AllTrails.",
    p2: "Common uses include recording running or cycling routes, planning hiking trails, sharing routes with others, and analyzing workout data like elevation gain, distance, and pace. This free GPX viewer lets you open and visualize any GPX file directly in your browser — no software installation needed.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "How do I open a GPX file?",
      answer:
        "Simply drag and drop your .gpx file onto the upload area above, or click to browse your files. The viewer will instantly parse the file and display your tracks on an interactive map with stats like distance, elevation, and speed. Your file is processed entirely in your browser — nothing is uploaded to any server.",
    },
    {
      question: "What data does a GPX file contain?",
      answer:
        "A GPX file stores three types of data: tracks (recorded paths from GPS), routes (planned navigation paths), and waypoints (individual points of interest). Each point includes latitude, longitude, and optionally elevation and timestamp. This allows calculating distance, speed, elevation gain/loss, and duration.",
    },
    {
      question: "How do I export a GPX file from my fitness app?",
      answer:
        "Most fitness apps support GPX export. In Strava, open an activity and choose \"Export GPX\" from the menu. In Garmin Connect, go to the activity and click the gear icon to export. On Apple Watch, use the Steps app or a third-party tool to export workouts as GPX files. Check your app's settings or export options.",
    },
    {
      question: "Is my GPX data private and secure?",
      answer:
        "Yes. This GPX viewer processes your file entirely in your browser using JavaScript. Your GPX data is never uploaded to any server or stored anywhere. Once you close the page, the data is gone. This makes it completely safe for viewing personal routes and location data.",
    },
    {
      question: "What apps create GPX files?",
      answer:
        "GPX files are created by most GPS and fitness apps including Strava, Garmin Connect, Apple Watch (via Steps or third-party apps), Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros, and many more. Any GPS device from Garmin, Wahoo, or similar brands can also export GPX files.",
    },
  ],
  cta: {
    title: "Record & Export GPX with Steps",
    description:
      "Track your workouts and export GPX files directly from the Steps app on iPhone and Apple Watch.",
  },
  howTo: TOOL_HOW_TO["gpx-viewer"],
};

export type GpxViewerMessages = typeof en;
export default en;
