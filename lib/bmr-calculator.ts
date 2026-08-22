/**
 * BMR Calculator Utilities
 *
 * Basal Metabolic Rate is the energy the body spends at complete rest. Three
 * equations are in common clinical use and they disagree by a meaningful
 * margin, so all three are surfaced rather than hiding the spread behind a
 * single number.
 *
 * Mifflin-St Jeor is the default: it was validated against indirect
 * calorimetry on a modern population and is the equation the Academy of
 * Nutrition and Dietetics recommends for non-obese and obese adults alike.
 * Harris-Benedict (revised by Roza & Shizgal) runs 5% high on average because
 * its 1919 cohort was leaner and more active. Katch-McArdle ignores sex and
 * height entirely and works off lean body mass, which makes it the most
 * accurate of the three for lean, muscular people but useless without a body
 * fat measurement.
 */

export type Gender = "male" | "female";

export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active";

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Sedentary",
  light: "Lightly Active",
  moderate: "Moderately Active",
  active: "Active",
  very_active: "Very Active",
};

export const ACTIVITY_DESCRIPTIONS: Record<ActivityLevel, string> = {
  sedentary: "Desk job, little or no exercise",
  light: "Light exercise 1–3 days per week",
  moderate: "Moderate exercise 3–5 days per week",
  active: "Hard exercise 6–7 days per week",
  very_active: "Physical job or twice-daily training",
};

export const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

export type FormulaKey = "mifflin" | "harris" | "katch";

export interface FormulaResult {
  key: FormulaKey;
  name: string;
  year: string;
  bmr: number;
  /** Null when the formula cannot run: Katch-McArdle needs body fat. */
  available: boolean;
  note: string;
}

export interface BMRResult {
  /** The headline number, always Mifflin-St Jeor unless body fat was given. */
  bmr: number;
  primaryFormula: FormulaKey;
  formulas: FormulaResult[];
  /** Lean body mass in kg, only when body fat percentage was supplied. */
  leanBodyMassKg: number | null;
  /** TDEE at each activity level, derived from the primary BMR. */
  maintenance: { level: ActivityLevel; calories: number }[];
  /** Share of a sedentary day's calories that BMR alone accounts for. */
  bmrShareOfSedentary: number;
}

export function mifflinStJeor(
  gender: Gender,
  weightKg: number,
  heightCm: number,
  age: number
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

export function harrisBenedict(
  gender: Gender,
  weightKg: number,
  heightCm: number,
  age: number
): number {
  return gender === "male"
    ? 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age
    : 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * age;
}

export function katchMcArdle(leanBodyMassKg: number): number {
  return 370 + 21.6 * leanBodyMassKg;
}

export function calculateBMR(
  gender: Gender,
  weightKg: number,
  heightCm: number,
  age: number,
  bodyFatPercent?: number | null
): BMRResult {
  const hasBodyFat =
    typeof bodyFatPercent === "number" &&
    bodyFatPercent > 0 &&
    bodyFatPercent < 75;

  const leanBodyMassKg = hasBodyFat
    ? weightKg * (1 - (bodyFatPercent as number) / 100)
    : null;

  const mifflin = Math.round(mifflinStJeor(gender, weightKg, heightCm, age));
  const harris = Math.round(harrisBenedict(gender, weightKg, heightCm, age));
  const katch = leanBodyMassKg !== null ? Math.round(katchMcArdle(leanBodyMassKg)) : 0;

  const formulas: FormulaResult[] = [
    {
      key: "mifflin",
      name: "Mifflin-St Jeor",
      year: "1990",
      bmr: mifflin,
      available: true,
      note: "Validated on a modern population. The current clinical default and the most reliable choice when body fat is unknown.",
    },
    {
      key: "harris",
      name: "Revised Harris-Benedict",
      year: "1984",
      bmr: harris,
      available: true,
      note: "The 1919 original, revised in 1984. Tends to read about 5% high because its study group was leaner and more active than the population today.",
    },
    {
      key: "katch",
      name: "Katch-McArdle",
      year: "1996",
      bmr: katch,
      available: leanBodyMassKg !== null,
      note:
        leanBodyMassKg !== null
          ? "Works from lean body mass and ignores sex and height, which makes it the most accurate option for lean or muscular bodies."
          : "Needs a body fat percentage. Enter one above to see this estimate.",
    },
  ];

  // Katch-McArdle wins when lean mass is known, since it measures the tissue
  // that actually drives resting expenditure instead of inferring it.
  const primaryFormula: FormulaKey = leanBodyMassKg !== null ? "katch" : "mifflin";
  const bmr = primaryFormula === "katch" ? katch : mifflin;

  const maintenance = (Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]).map(
    (level) => ({
      level,
      calories: Math.round(bmr * ACTIVITY_MULTIPLIERS[level]),
    })
  );

  const sedentaryTdee = bmr * ACTIVITY_MULTIPLIERS.sedentary;
  const bmrShareOfSedentary = Math.round((bmr / sedentaryTdee) * 100);

  return {
    bmr,
    primaryFormula,
    formulas,
    leanBodyMassKg: leanBodyMassKg !== null ? Math.round(leanBodyMassKg * 10) / 10 : null,
    maintenance,
    bmrShareOfSedentary,
  };
}
