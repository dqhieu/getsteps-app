/**
 * Step Goal Calculator Utilities
 *
 * Provides personalized daily step goal recommendations based on age, gender,
 * current activity level, and health goals.
 */

export type ActivityLevel = "sedentary" | "lightly_active" | "active" | "very_active";
export type HealthGoal = "maintain" | "lose_weight" | "improve_fitness" | "train_event";
export type Gender = "male" | "female";

export interface StepGoalInput {
  age: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  healthGoal: HealthGoal;
  currentSteps?: number;
}

export interface StepGoalResult {
  dailyGoal: number;
  weeklyGoal: number;
  distancePerDayKm: number;
  caloriesPerDay: number;
  tips: string[];
  milestones: {
    week: number;
    steps: number;
  }[];
}

// Activity level descriptions and typical step ranges
export const ACTIVITY_LEVELS: Record<
  ActivityLevel,
  { label: string; description: string; stepsRange: string; typicalSteps: number }
> = {
  sedentary: {
    label: "Sedentary",
    description: "Desk job, minimal movement",
    stepsRange: "< 5,000",
    typicalSteps: 3500,
  },
  lightly_active: {
    label: "Lightly Active",
    description: "Some walking, light activity",
    stepsRange: "5,000 - 7,499",
    typicalSteps: 6000,
  },
  active: {
    label: "Active",
    description: "Regular movement throughout day",
    stepsRange: "7,500 - 9,999",
    typicalSteps: 8500,
  },
  very_active: {
    label: "Very Active",
    description: "Active job or lifestyle",
    stepsRange: "10,000+",
    typicalSteps: 12000,
  },
};

// Health goal descriptions
export const HEALTH_GOALS: Record<HealthGoal, { label: string; description: string }> = {
  maintain: {
    label: "Maintain Health",
    description: "Stay healthy and maintain current fitness",
  },
  lose_weight: {
    label: "Lose Weight",
    description: "Burn extra calories for weight loss",
  },
  improve_fitness: {
    label: "Improve Fitness",
    description: "Increase endurance and overall fitness",
  },
  train_event: {
    label: "Train for Event",
    description: "Prepare for a walking/running event",
  },
};

/**
 * Get base step goal by age
 */
function getBaseGoalByAge(age: number): { min: number; max: number } {
  if (age < 18) {
    return { min: 12000, max: 15000 };
  } else if (age <= 64) {
    return { min: 10000, max: 12000 };
  } else {
    return { min: 7000, max: 10000 };
  }
}

/**
 * Adjust goal based on health goal
 */
function getGoalAdjustment(healthGoal: HealthGoal): number {
  switch (healthGoal) {
    case "maintain":
      return 0;
    case "lose_weight":
      return 2000;
    case "improve_fitness":
      return 3000;
    case "train_event":
      return 4000;
    default:
      return 0;
  }
}

/**
 * Generate tips based on the step goal and user profile
 */
function generateTips(
  goal: number,
  activityLevel: ActivityLevel,
  healthGoal: HealthGoal
): string[] {
  const tips: string[] = [];

  // Activity level based tips
  if (activityLevel === "sedentary") {
    tips.push("Start with a 10-minute walk during lunch break");
    tips.push("Take the stairs instead of the elevator");
    tips.push("Park farther away from entrances");
  } else if (activityLevel === "lightly_active") {
    tips.push("Add a 15-minute morning walk to your routine");
    tips.push("Walk while taking phone calls");
  }

  // Goal based tips
  if (healthGoal === "lose_weight") {
    tips.push("Combine walking with a balanced diet for best results");
    tips.push("Try to maintain a brisk pace to maximize calorie burn");
  } else if (healthGoal === "improve_fitness") {
    tips.push("Gradually increase your pace over time");
    tips.push("Include some incline walking or stairs");
  } else if (healthGoal === "train_event") {
    tips.push("Follow a progressive training plan");
    tips.push("Include rest days for recovery");
  }

  // General tips
  tips.push("Track your steps daily to stay motivated");
  tips.push("Find a walking buddy for accountability");

  return tips.slice(0, 5);
}

/**
 * Generate milestone progression over 8 weeks
 */
function generateMilestones(currentSteps: number, targetSteps: number): { week: number; steps: number }[] {
  const milestones: { week: number; steps: number }[] = [];
  const stepDifference = targetSteps - currentSteps;
  const weeksToGoal = 8;

  for (let week = 1; week <= weeksToGoal; week++) {
    const progress = week / weeksToGoal;
    // Use ease-out curve for gradual increase
    const easedProgress = 1 - Math.pow(1 - progress, 2);
    const weekSteps = Math.round(currentSteps + stepDifference * easedProgress);
    milestones.push({
      week,
      steps: Math.round(weekSteps / 500) * 500, // Round to nearest 500
    });
  }

  return milestones;
}

/**
 * Estimate distance from steps (average step length ~0.75m)
 */
function estimateDistanceKm(steps: number): number {
  const averageStepLengthCm = 75;
  return (steps * averageStepLengthCm) / 100000;
}

/**
 * Estimate calories burned from steps (average ~0.04 cal/step for 70kg person)
 */
function estimateCalories(steps: number): number {
  return Math.round(steps * 0.04);
}

/**
 * Calculate personalized step goal
 */
export function calculateStepGoal(input: StepGoalInput): StepGoalResult {
  const { age, gender, activityLevel, healthGoal, currentSteps } = input;

  // Get base goal by age
  const baseGoal = getBaseGoalByAge(age);

  // Start with the midpoint of the base goal
  let dailyGoal = Math.round((baseGoal.min + baseGoal.max) / 2);

  // Add adjustment for health goal
  dailyGoal += getGoalAdjustment(healthGoal);

  // If current steps provided, ensure goal is achievable (at least current + 1000)
  const estimatedCurrentSteps =
    currentSteps || ACTIVITY_LEVELS[activityLevel].typicalSteps;

  if (dailyGoal < estimatedCurrentSteps + 1000) {
    dailyGoal = estimatedCurrentSteps + 1000;
  }

  // Cap the goal at reasonable limits
  dailyGoal = Math.min(dailyGoal, 20000);

  // Round to nearest 500
  dailyGoal = Math.round(dailyGoal / 500) * 500;

  const weeklyGoal = dailyGoal * 7;
  const distancePerDayKm = estimateDistanceKm(dailyGoal);
  const caloriesPerDay = estimateCalories(dailyGoal);
  const tips = generateTips(dailyGoal, activityLevel, healthGoal);
  const milestones = generateMilestones(estimatedCurrentSteps, dailyGoal);

  return {
    dailyGoal,
    weeklyGoal,
    distancePerDayKm: Math.round(distancePerDayKm * 10) / 10,
    caloriesPerDay,
    tips,
    milestones,
  };
}

/**
 * Get activity level from current steps
 */
export function getActivityLevelFromSteps(steps: number): ActivityLevel {
  if (steps < 5000) return "sedentary";
  if (steps < 7500) return "lightly_active";
  if (steps < 10000) return "active";
  return "very_active";
}
