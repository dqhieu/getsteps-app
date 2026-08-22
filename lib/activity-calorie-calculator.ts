/**
 * Activity Calorie Calculator Utilities
 *
 * Multi-activity calorie burn from MET values. Where `calorie-calculator.ts`
 * covers walking in depth, this module trades that depth for breadth across
 * the whole activity range.
 *
 * MET values are from the 2011 Compendium of Physical Activities (Ainsworth
 * et al.). One MET is resting oxygen uptake, 3.5 ml/kg/min.
 *
 * Formula: kcal = MET × 3.5 × weight(kg) ÷ 200 × minutes
 *
 * Note this yields gross calories, which include the resting energy you would
 * have spent anyway. Net burn (the extra cost of the activity) is roughly
 * (MET − 1)/MET of the gross figure, and is reported separately because the
 * difference matters when logging exercise against a calorie budget.
 */

export interface Activity {
  key: string;
  name: string;
  category: ActivityCategory;
  met: number;
}

export type ActivityCategory =
  | "Walking & Running"
  | "Cycling"
  | "Gym & Strength"
  | "Sports"
  | "Water"
  | "Outdoor & Winter"
  | "Home & Daily";

export const ACTIVITIES: Activity[] = [
  // Walking & Running
  { key: "walking-slow", name: "Walking, slow (3.2 km/h)", category: "Walking & Running", met: 2.8 },
  { key: "walking-moderate", name: "Walking, moderate (5 km/h)", category: "Walking & Running", met: 3.5 },
  { key: "walking-brisk", name: "Walking, brisk (6.4 km/h)", category: "Walking & Running", met: 5.0 },
  { key: "walking-uphill", name: "Walking uphill (5 km/h, 5% grade)", category: "Walking & Running", met: 5.3 },
  { key: "hiking", name: "Hiking, cross-country", category: "Walking & Running", met: 6.0 },
  { key: "stairs", name: "Stair climbing", category: "Walking & Running", met: 8.8 },
  { key: "jogging", name: "Jogging (8 km/h)", category: "Walking & Running", met: 8.3 },
  { key: "running-10", name: "Running (10 km/h)", category: "Walking & Running", met: 9.8 },
  { key: "running-12", name: "Running (12 km/h)", category: "Walking & Running", met: 11.8 },
  { key: "running-16", name: "Running (16 km/h)", category: "Walking & Running", met: 14.5 },

  // Cycling
  { key: "cycling-light", name: "Cycling, light (16–19 km/h)", category: "Cycling", met: 6.8 },
  { key: "cycling-moderate", name: "Cycling, moderate (19–22 km/h)", category: "Cycling", met: 8.0 },
  { key: "cycling-vigorous", name: "Cycling, vigorous (22–25 km/h)", category: "Cycling", met: 10.0 },
  { key: "cycling-stationary", name: "Stationary bike, moderate", category: "Cycling", met: 6.8 },
  { key: "spinning", name: "Spinning class", category: "Cycling", met: 8.5 },

  // Gym & Strength
  { key: "weight-light", name: "Weight training, light", category: "Gym & Strength", met: 3.5 },
  { key: "weight-vigorous", name: "Weight training, vigorous", category: "Gym & Strength", met: 6.0 },
  { key: "circuit", name: "Circuit training", category: "Gym & Strength", met: 7.2 },
  { key: "hiit", name: "HIIT", category: "Gym & Strength", met: 8.0 },
  { key: "elliptical", name: "Elliptical trainer", category: "Gym & Strength", met: 5.0 },
  { key: "rowing-machine", name: "Rowing machine, moderate", category: "Gym & Strength", met: 7.0 },
  { key: "yoga", name: "Yoga, hatha", category: "Gym & Strength", met: 2.5 },
  { key: "pilates", name: "Pilates", category: "Gym & Strength", met: 3.0 },
  { key: "stretching", name: "Stretching", category: "Gym & Strength", met: 2.3 },
  { key: "jump-rope", name: "Jump rope, moderate", category: "Gym & Strength", met: 11.8 },

  // Sports
  { key: "basketball", name: "Basketball, game", category: "Sports", met: 8.0 },
  { key: "soccer", name: "Soccer, casual", category: "Sports", met: 7.0 },
  { key: "tennis", name: "Tennis, singles", category: "Sports", met: 8.0 },
  { key: "badminton", name: "Badminton, casual", category: "Sports", met: 5.5 },
  { key: "golf", name: "Golf, walking with clubs", category: "Sports", met: 4.8 },
  { key: "volleyball", name: "Volleyball, casual", category: "Sports", met: 4.0 },
  { key: "boxing-bag", name: "Boxing, punching bag", category: "Sports", met: 5.5 },
  { key: "martial-arts", name: "Martial arts", category: "Sports", met: 10.3 },
  { key: "table-tennis", name: "Table tennis", category: "Sports", met: 4.0 },

  // Water
  { key: "swimming-leisure", name: "Swimming, leisurely", category: "Water", met: 6.0 },
  { key: "swimming-freestyle", name: "Swimming, freestyle moderate", category: "Water", met: 8.3 },
  { key: "swimming-vigorous", name: "Swimming, freestyle vigorous", category: "Water", met: 9.8 },
  { key: "water-aerobics", name: "Water aerobics", category: "Water", met: 5.5 },
  { key: "kayaking", name: "Kayaking", category: "Water", met: 5.0 },
  { key: "surfing", name: "Surfing", category: "Water", met: 3.0 },

  // Outdoor & Winter
  { key: "skiing-downhill", name: "Skiing, downhill moderate", category: "Outdoor & Winter", met: 5.3 },
  { key: "skiing-cross", name: "Cross-country skiing", category: "Outdoor & Winter", met: 9.0 },
  { key: "snowboarding", name: "Snowboarding", category: "Outdoor & Winter", met: 5.3 },
  { key: "ice-skating", name: "Ice skating", category: "Outdoor & Winter", met: 7.0 },
  { key: "rock-climbing", name: "Rock climbing, ascending", category: "Outdoor & Winter", met: 8.0 },
  { key: "rucking", name: "Backpacking with load", category: "Outdoor & Winter", met: 7.0 },

  // Home & Daily
  { key: "cleaning", name: "House cleaning, moderate", category: "Home & Daily", met: 3.5 },
  { key: "gardening", name: "Gardening", category: "Home & Daily", met: 3.8 },
  { key: "mowing", name: "Mowing the lawn, push mower", category: "Home & Daily", met: 5.5 },
  { key: "shovelling-snow", name: "Shovelling snow", category: "Home & Daily", met: 6.0 },
  { key: "grocery-shopping", name: "Grocery shopping", category: "Home & Daily", met: 2.3 },
  { key: "childcare", name: "Playing with children, vigorous", category: "Home & Daily", met: 5.8 },
  { key: "desk-work", name: "Desk work, sitting", category: "Home & Daily", met: 1.5 },
];

export const CATEGORIES: ActivityCategory[] = [
  "Walking & Running",
  "Cycling",
  "Gym & Strength",
  "Sports",
  "Water",
  "Outdoor & Winter",
  "Home & Daily",
];

/** Steps a moderate walk covers per minute, used for the step equivalent. */
const STEPS_PER_MINUTE_WALKING = 100;
const WALKING_MODERATE_MET = 3.5;

export interface ActivityCalorieResult {
  activity: Activity;
  /** Total calories including resting expenditure. */
  grossCalories: number;
  /** Calories above what resting for the same time would have cost. */
  netCalories: number;
  caloriesPerMinute: number;
  caloriesPerHour: number;
  /** Minutes of moderate walking that would burn the same gross calories. */
  walkingEquivalentMinutes: number;
  /** Steps that walk would take, for readers who think in step counts. */
  stepEquivalent: number;
  /** Grams of body fat, at 7,700 kcal per kg. */
  fatGrams: number;
}

export function calculateActivityCalories(
  activity: Activity,
  weightKg: number,
  durationMinutes: number
): ActivityCalorieResult {
  const caloriesPerMinute = (activity.met * 3.5 * weightKg) / 200;
  const grossCalories = caloriesPerMinute * durationMinutes;

  // Resting cost is 1 MET; the activity's own contribution is the remainder.
  const netCalories = grossCalories * ((activity.met - 1) / activity.met);

  const walkingCaloriesPerMinute = (WALKING_MODERATE_MET * 3.5 * weightKg) / 200;
  const walkingEquivalentMinutes = grossCalories / walkingCaloriesPerMinute;

  return {
    activity,
    grossCalories: Math.round(grossCalories),
    netCalories: Math.round(Math.max(0, netCalories)),
    caloriesPerMinute: Math.round(caloriesPerMinute * 10) / 10,
    caloriesPerHour: Math.round(caloriesPerMinute * 60),
    walkingEquivalentMinutes: Math.round(walkingEquivalentMinutes),
    stepEquivalent: Math.round(walkingEquivalentMinutes * STEPS_PER_MINUTE_WALKING),
    fatGrams: Math.round((grossCalories / 7700) * 1000),
  };
}

export function getActivityByKey(key: string): Activity | undefined {
  return ACTIVITIES.find((a) => a.key === key);
}

/**
 * Same duration and weight across a spread of activities, so a reader can see
 * what swapping the activity is worth without re-running the calculator.
 */
export function compareActivities(
  weightKg: number,
  durationMinutes: number,
  keys: string[]
): ActivityCalorieResult[] {
  return keys
    .map((key) => getActivityByKey(key))
    .filter((a): a is Activity => a !== undefined)
    .map((a) => calculateActivityCalories(a, weightKg, durationMinutes))
    .sort((a, b) => b.grossCalories - a.grossCalories);
}
