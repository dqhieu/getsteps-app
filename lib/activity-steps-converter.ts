/**
 * Activity to Steps Converter
 *
 * Converts non-walking activities into equivalent step counts using MET values.
 * Formula: equivalentSteps = (activityMET / 3.5) × durationMinutes × 100
 */

export type ActivityKey =
  | "cycling"
  | "swimming"
  | "elliptical"
  | "rowing"
  | "jump_rope"
  | "dancing"
  | "yoga"
  | "basketball"
  | "hiking"
  | "pilates";

export type Intensity = "low" | "medium" | "high";

export interface ActivityDefinition {
  label: string;
  emoji: string;
  met: { low: number; medium: number; high: number };
}

export const ACTIVITIES: Record<ActivityKey, ActivityDefinition> = {
  cycling:    { label: "Cycling",    emoji: "🚴", met: { low: 4.0, medium: 6.8,  high: 10.0 } },
  swimming:   { label: "Swimming",   emoji: "🏊", met: { low: 5.8, medium: 7.0,  high: 9.8  } },
  elliptical: { label: "Elliptical", emoji: "🏃", met: { low: 4.6, medium: 5.0,  high: 5.7  } },
  rowing:     { label: "Rowing",     emoji: "🚣", met: { low: 4.8, medium: 7.0,  high: 8.5  } },
  jump_rope:  { label: "Jump Rope",  emoji: "⚡", met: { low: 8.8, medium: 10.0, high: 12.3 } },
  dancing:    { label: "Dancing",    emoji: "💃", met: { low: 3.0, medium: 4.8,  high: 6.5  } },
  yoga:       { label: "Yoga",       emoji: "🧘", met: { low: 2.5, medium: 3.0,  high: 4.0  } },
  basketball: { label: "Basketball", emoji: "🏀", met: { low: 4.5, medium: 6.5,  high: 8.0  } },
  hiking:     { label: "Hiking",     emoji: "🥾", met: { low: 5.3, medium: 6.0,  high: 7.0  } },
  pilates:    { label: "Pilates",    emoji: "🤸", met: { low: 3.0, medium: 3.5,  high: 4.0  } },
};

export interface ActivityConversionResult {
  equivalentSteps: number;
  distanceKm: number;
  caloriesBurned: number;
  walkingMinutes: number;
}

/**
 * Convert an activity session into equivalent steps and metrics.
 * Walking at normal pace (MET 3.5) ≈ 100 steps/minute.
 */
export function convertActivityToSteps(
  activity: ActivityKey,
  durationMinutes: number,
  intensity: Intensity,
  weightKg: number = 70
): ActivityConversionResult {
  if (durationMinutes <= 0) {
    return { equivalentSteps: 0, distanceKm: 0, caloriesBurned: 0, walkingMinutes: 0 };
  }

  const met = ACTIVITIES[activity].met[intensity];
  const WALKING_MET = 3.5;

  // Equivalent steps relative to walking pace
  const equivalentSteps = Math.round((met / WALKING_MET) * durationMinutes * 100);

  // Distance based on average 0.75m step length
  const distanceKm = Math.round((equivalentSteps * 0.00075) * 100) / 100;

  // Calories: MET × weight_kg × duration_hours
  const caloriesBurned = Math.round(met * weightKg * (durationMinutes / 60));

  // How long you'd need to walk at normal pace for the same steps
  const walkingMinutes = Math.round(equivalentSteps / 100);

  return { equivalentSteps, distanceKm, caloriesBurned, walkingMinutes };
}
