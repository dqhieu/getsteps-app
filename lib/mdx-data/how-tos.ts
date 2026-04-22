import type { HowToStep } from "@/components/mdx/how-to";

export interface HowToData {
  name: string;
  description?: string;
  totalTime?: string;
  steps: HowToStep[];
  heading?: string;
}

export const HOW_TOS: Record<string, HowToData> = {
  "export-gpx-apple-watch": {
    name: "Export a GPX file from an Apple Watch workout",
    description:
      "Record a workout in Steps, then export its GPS route as a GPX file directly from your iPhone. Works for walking, running, hiking, and cycling.",
    totalTime: "PT2M",
    steps: [
      {
        name: "Complete a GPS-tracked workout",
        text: "Open Steps on your Apple Watch or iPhone and start a walking, running, hiking, or cycling workout. Steps automatically records your full GPS route in the background.",
      },
      {
        name: "Open the workout details on iPhone",
        text: "After finishing, open Steps on your iPhone, go to the Activities tab, and tap the workout you want to export.",
      },
      {
        name: "Export as GPX",
        text: "Scroll down to the route map and tap the share button, then choose Export GPX. Pick where to save the file — Files, AirDrop, Messages, or any sharing destination.",
      },
      {
        name: "Use your GPX file",
        text: "Import the GPX into Strava, Komoot, AllTrails, or any other route-capable app. You can also open it in Google Earth for 3D visualization or send it directly to friends.",
      },
    ],
  },
};
