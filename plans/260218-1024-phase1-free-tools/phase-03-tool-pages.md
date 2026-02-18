# Phase 3: Tool Pages

## Pattern Reference
Copy from `app/tools/bmi-calculator/page.tsx`:
- Server component with `export const metadata: Metadata`
- Sections: Hero → Calculator → Info/FAQ → CTA
- Import `SITE_CONFIG` from `@/lib/constants`
- `client.tsx` is always a thin wrapper: just renders the component

---

## Files per Tool (×6 = 12 files total)

### Tool 1: Water Intake Calculator
**`app/tools/water-intake-calculator/page.tsx`**
- Title: `"Water Intake Calculator - How Much Water Should I Drink Per Day?"`
- Description: `"Calculate your daily water intake based on weight, activity level, and climate. Get personalized hydration recommendations."`
- Keywords: `["water intake calculator", "how much water should I drink", "daily water intake", "hydration calculator", "water per day"]`
- OG url: `/tools/water-intake-calculator`
- H1: "Water Intake Calculator"
- Subtitle: "Find out exactly how much water you should drink daily based on your body weight and activity level."
- Info section: "Why Hydration Matters" + 4 FAQs
- CTA: "Track your daily steps and hydration goals with the Steps app."

**`app/tools/water-intake-calculator/client.tsx`**
```tsx
"use client";
import { WaterIntakeCalculator } from "@/components/water-intake-calculator";
export function WaterIntakeCalculatorClient() {
  return <WaterIntakeCalculator />;
}
```

---

### Tool 2: Heart Rate Zones Calculator
**`app/tools/heart-rate-zones-calculator/page.tsx`**
- Title: `"Heart Rate Zone Calculator - Find Your Training Zones"`
- Description: `"Calculate your 5 heart rate training zones based on age and resting heart rate. Optimize your workouts for fat burning, endurance, and performance."`
- Keywords: `["heart rate zone calculator", "target heart rate zones", "heart rate training zones", "max heart rate calculator", "fat burning zone"]`
- OG url: `/tools/heart-rate-zones-calculator`
- H1: "Heart Rate Zone Calculator"
- Subtitle: "Discover your personalized heart rate training zones to maximize fat burn, build endurance, and improve performance."
- Info section: "Understanding Heart Rate Zones" + 5 FAQs
- CTA: "Use Steps to track your walks in the right heart rate zone."

**`app/tools/heart-rate-zones-calculator/client.tsx`** — thin wrapper

---

### Tool 3: Activity to Steps Converter
**`app/tools/activity-to-steps-converter/page.tsx`**
- Title: `"Activity to Steps Converter - Convert Any Exercise to Steps"`
- Description: `"Convert cycling, swimming, yoga, and 10+ activities into equivalent steps. Perfect for step challenges and fitness tracking."`
- Keywords: `["activity to steps converter", "convert exercise to steps", "cycling steps equivalent", "swimming steps equivalent", "steps equivalent calculator"]`
- OG url: `/tools/activity-to-steps-converter`
- H1: "Activity to Steps Converter"
- Subtitle: "Convert any activity — cycling, swimming, yoga, and more — into equivalent steps for your step challenge or fitness goal."
- Info section: "How Step Equivalents Work" + 4 FAQs
- CTA: "Track all your activities as steps in the Steps app."

**`app/tools/activity-to-steps-converter/client.tsx`** — thin wrapper

---

### Tool 4: Running Pace Calculator
**`app/tools/running-pace-calculator/page.tsx`**
- Title: `"Running Pace Calculator - Convert Pace, Speed & Race Times"`
- Description: `"Calculate your running pace in min/km or min/mile, convert to speed, and predict finish times for 5K, 10K, half marathon, and marathon."`
- Keywords: `["running pace calculator", "pace calculator", "min per km calculator", "min per mile calculator", "race time calculator", "running pace converter"]`
- OG url: `/tools/running-pace-calculator`
- H1: "Running Pace Calculator"
- Subtitle: "Convert between pace, speed, and race finish times. Works for 5K, 10K, half marathon, and marathon distances."
- Info section: "Understanding Running Pace" + 5 FAQs
- CTA: "Track your runs and steps together in the Steps app."

**`app/tools/running-pace-calculator/client.tsx`** — thin wrapper

---

### Tool 5: Body Fat Calculator
**`app/tools/body-fat-calculator/page.tsx`**
- Title: `"Body Fat Percentage Calculator - Navy Method"`
- Description: `"Calculate your body fat percentage using the U.S. Navy method. Get accurate results with just a tape measure — no equipment needed."`
- Keywords: `["body fat percentage calculator", "body fat calculator", "navy method body fat", "how to calculate body fat", "body fat percentage"]`
- OG url: `/tools/body-fat-calculator`
- H1: "Body Fat Percentage Calculator"
- Subtitle: "Calculate your body fat percentage accurately using the U.S. Navy method — no gym equipment required."
- Info section: "Understanding Body Fat %" + 5 FAQs
- CTA: "Pair your body fat goals with daily step tracking in Steps."

**`app/tools/body-fat-calculator/client.tsx`** — thin wrapper

---

### Tool 6: Calorie Deficit Calculator
**`app/tools/calorie-deficit-calculator/page.tsx`**
- Title: `"Calorie Deficit Calculator - How Much to Eat to Lose Weight"`
- Description: `"Calculate your daily calorie deficit to reach your weight loss goal. Get your TDEE, target calories, and recommended daily steps."`
- Keywords: `["calorie deficit calculator", "how many calories to lose weight", "calorie deficit for weight loss", "TDEE calculator", "daily calorie goal"]`
- OG url: `/tools/calorie-deficit-calculator`
- H1: "Calorie Deficit Calculator"
- Subtitle: "Find out exactly how many calories to eat per day to reach your goal weight safely and sustainably."
- Info section: "What Is a Calorie Deficit?" + 5 FAQs
- CTA: "Burn extra calories through daily walking — track it with Steps."

**`app/tools/calorie-deficit-calculator/client.tsx`** — thin wrapper
