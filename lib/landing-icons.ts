import {
  Orbit,
  Bot,
  Trophy,
  Watch,
  LineChart,
  Flame,
  LayoutGrid,
  Lock,
  Route,
  HeartPulse,
  Zap,
  Sunrise,
  Mountain,
  Timer,
  Ruler,
  Moon,
  Footprints,
  PersonStanding,
  Bike,
  Waves,
  Dumbbell,
  Flower2,
  CircleDot,
  type LucideIcon,
} from "lucide-react";

// Single source of truth: every icon name referenced in lib/constants.ts data
// must appear here so the data stays renderable. Guarded by landing-icons.test.ts.
export const LANDING_ICONS = {
  Orbit,
  Bot,
  Trophy,
  Watch,
  LineChart,
  Flame,
  LayoutGrid,
  Lock,
  Route,
  HeartPulse,
  Zap,
  Sunrise,
  Mountain,
  Timer,
  Ruler,
  Moon,
  Footprints,
  PersonStanding,
  Bike,
  Waves,
  Dumbbell,
  Flower2,
  CircleDot,
} satisfies Record<string, LucideIcon>;

export type LandingIconName = keyof typeof LANDING_ICONS;

export function getLandingIcon(name: LandingIconName): LucideIcon {
  return LANDING_ICONS[name];
}
