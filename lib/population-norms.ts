// Population norms for VO2 Max and Body Fat percentile comparisons

export type AgeGroup = "20s" | "30s" | "40s" | "50plus";

function getAgeGroup(age: number): AgeGroup {
  if (age < 30) return "20s";
  if (age < 40) return "30s";
  if (age < 50) return "40s";
  return "50plus";
}

// ACSM VO2 Max percentiles by gender and age group
// category → { percentile, descriptor }
type VO2Category = "Poor" | "Fair" | "Good" | "Excellent" | "Superior";

const VO2_PERCENTILES: Record<
  "male" | "female",
  Record<AgeGroup, Record<VO2Category, number>>
> = {
  male: {
    "20s":    { Poor: 18, Fair: 33, Good: 52, Excellent: 78, Superior: 93 },
    "30s":    { Poor: 18, Fair: 33, Good: 53, Excellent: 79, Superior: 93 },
    "40s":    { Poor: 19, Fair: 34, Good: 55, Excellent: 80, Superior: 93 },
    "50plus": { Poor: 20, Fair: 36, Good: 57, Excellent: 81, Superior: 93 },
  },
  female: {
    "20s":    { Poor: 18, Fair: 33, Good: 52, Excellent: 78, Superior: 92 },
    "30s":    { Poor: 19, Fair: 34, Good: 53, Excellent: 79, Superior: 92 },
    "40s":    { Poor: 20, Fair: 35, Good: 55, Excellent: 80, Superior: 92 },
    "50plus": { Poor: 21, Fair: 37, Good: 57, Excellent: 81, Superior: 92 },
  },
};

export function getVO2MaxPercentile(
  age: number,
  gender: "male" | "female",
  category: string
): { percentile: number; descriptor: string } | null {
  const ageGroup = getAgeGroup(age);
  const catMap = VO2_PERCENTILES[gender]?.[ageGroup];
  if (!catMap) return null;

  const cat = category as VO2Category;
  const percentile = catMap[cat];
  if (percentile === undefined) return null;

  const genderLabel = gender === "male" ? "men" : "women";
  return {
    percentile,
    descriptor: `Better than ${percentile}% of ${genderLabel} your age`,
  };
}

// ACE Body Fat percentile by category
// Essential/Athletic → top performers, Obese → below average
type BodyFatACECategory =
  | "Essential Fat"
  | "Athletes"
  | "Fitness"
  | "Acceptable"
  | "Obese";

const BODY_FAT_PERCENTILES: Record<BodyFatACECategory, number> = {
  "Essential Fat": 97,
  Athletes: 88,
  Fitness: 65,
  Acceptable: 40,
  Obese: 15,
};

const BODY_FAT_CATEGORY_MAP: Record<string, BodyFatACECategory> = {
  "Essential Fat": "Essential Fat",
  Athletic: "Athletes",
  Athletes: "Athletes",
  Fitness: "Fitness",
  Acceptable: "Acceptable",
  Average: "Acceptable",
  Obese: "Obese",
};

export function getBodyFatPercentile(
  categoryLabel: string
): { percentile: number; descriptor: string } | null {
  const key = BODY_FAT_CATEGORY_MAP[categoryLabel];
  if (!key) return null;
  const percentile = BODY_FAT_PERCENTILES[key];
  if (percentile === undefined) return null;
  return {
    percentile,
    descriptor: `Leaner than ${percentile}% of the population`,
  };
}
