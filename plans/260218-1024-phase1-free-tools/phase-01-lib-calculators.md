# Phase 1: Lib Calculation Files

## Files to Create

### 1. `lib/water-intake-calculator.ts`

**Inputs:** weight (kg), activity level, climate
**Formula:**
```
base = weight × 0.033 liters
activity multipliers: sedentary ×1.0, moderate ×1.2, active ×1.4, very_active ×1.6
climate add: temperate +0, hot +0.5L
```
**Exports:**
- `calculateWaterIntake(weightKg, activityLevel, climate): WaterIntakeResult`
- `ActivityLevel` type: `"sedentary" | "moderate" | "active" | "very_active"`
- `Climate` type: `"temperate" | "hot"`
- `WaterIntakeResult`: `{ liters, ounces, cups, mlPerHour, hydrationTip }`

---

### 2. `lib/heart-rate-calculator.ts`

**Inputs:** age, restingHR (optional), maxHR (optional)
**Formula:**
```
maxHR = custom || (220 - age)  [Tanaka formula]
If restingHR provided → Karvonen method for zones:
  HRR = maxHR - restingHR
  Zone N min = restingHR + (HRR × minPct)
  Zone N max = restingHR + (HRR × maxPct)
Else simple %maxHR:
  Zone N min = maxHR × minPct
  Zone N max = maxHR × maxPct
```
**5 Zones:**
| Zone | % Max HR | Name | Benefit |
|------|----------|------|---------|
| 1 | 50-60% | Recovery | Active recovery, fat burn |
| 2 | 60-70% | Fat Burn | Aerobic base, weight loss |
| 3 | 70-80% | Aerobic | Endurance, cardiovascular |
| 4 | 80-90% | Threshold | Speed, lactate threshold |
| 5 | 90-100% | Maximum | Peak performance, VO2 max |

**Exports:**
- `calculateHeartRateZones(age, restingHR?, maxHR?): HeartRateResult`
- `HeartRateZone`: `{ zone, name, minBpm, maxBpm, benefit, color, description }`
- `HeartRateResult`: `{ maxHR, zones: HeartRateZone[], method: "karvonen" | "simple" }`

---

### 3. `lib/activity-steps-converter.ts`

**Inputs:** activity type, duration (minutes), intensity (low/medium/high for applicable activities)
**Formula:**
```
steps_equivalent = MET_value × duration_minutes × steps_per_MET_minute
steps_per_MET_minute ≈ 100 (walking at normal pace = MET 3.5 = 100 steps/min)
equivalent_steps = (activity_MET / walking_MET) × duration_minutes × 100
```
**Activities with MET values:**
| Activity | MET (low/med/high) |
|----------|---------------------|
| Cycling | 4.0 / 6.8 / 10.0 |
| Swimming | 5.8 / 7.0 / 9.8 |
| Elliptical | 4.6 / 5.0 / 5.7 |
| Rowing | 4.8 / 7.0 / 8.5 |
| Jump Rope | 8.8 / 10.0 / 12.3 |
| Dancing | 3.0 / 4.8 / 6.5 |
| Yoga | 2.5 / 3.0 / 4.0 |
| Basketball | 4.5 / 6.5 / 8.0 |
| Hiking | 5.3 / 6.0 / 7.0 |
| Pilates | 3.0 / 3.5 / 4.0 |

**Exports:**
- `ACTIVITIES`: record of activity definitions
- `convertActivityToSteps(activity, durationMinutes, intensity, weightKg?): ActivityConversionResult`
- `ActivityConversionResult`: `{ equivalentSteps, distanceKm, caloriesBurned, walkingEquivalentMinutes }`
- `ActivityType` type union

---

### 4. `lib/pace-calculator.ts`

**Three-way conversion:** pace (sec/km) ↔ speed (km/h) ↔ race finish time
```
pace (sec/km) = 3600 / speed (km/h)
speed (km/h) = 3600 / pace (sec/km)
finish time (sec) = pace (sec/km) × distance (km)
```
**Unit conversions:**
```
pace min/km → sec/km: × 60
pace min/mile → sec/km: × 60 / 1.60934
speed mph → km/h: × 1.60934
```
**Exports:**
- `paceToSpeed(paceSecPerKm): number` → km/h
- `speedToPace(speedKmh): number` → sec/km
- `finishTime(paceSecPerKm, distanceKm): number` → seconds
- `formatPace(secPerKm, unit: "km" | "mile"): string` → "5:30 /km"
- `formatFinishTime(seconds): string` → "2:15:30"
- `calculatePaceResult(input, distanceKm?): PaceResult`
- `PaceResult`: `{ pacePerKm, pacePerMile, speedKmh, speedMph, racePredictions }`
- `RACE_DISTANCES`: `{ "5K": 5, "10K": 10, "Half Marathon": 21.0975, "Marathon": 42.195 }`

---

### 5. `lib/body-fat-calculator.ts`

**Method: U.S. Navy formula** (most accurate non-invasive)
```
Men:
  BF% = 495 / (1.0324 - 0.19077 × log10(waist - neck) + 0.15456 × log10(height)) - 450

Women:
  BF% = 495 / (1.29579 - 0.35004 × log10(waist + hip - neck) + 0.22100 × log10(height)) - 450

All measurements in cm
```
**Categories:**
| Category | Men | Women |
|----------|-----|-------|
| Essential Fat | 2-5% | 10-13% |
| Athletic | 6-13% | 14-20% |
| Fitness | 14-17% | 21-24% |
| Acceptable | 18-24% | 25-31% |
| Obese | 25%+ | 32%+ |

**Exports:**
- `calculateBodyFat(gender, heightCm, waistCm, neckCm, hipCm?): BodyFatResult`
- `BodyFatResult`: `{ bodyFatPercent, fatMassKg, leanMassKg, category, categoryColor, recommendedSteps }`
- `BODY_FAT_CATEGORIES`: record of category info

---

### 6. `lib/calorie-deficit-calculator.ts`

**Formula:**
```
BMR (Mifflin-St Jeor):
  Men: 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5
  Women: 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161

TDEE = BMR × activity_multiplier
Activity: sedentary ×1.2, light ×1.375, moderate ×1.55, active ×1.725, very_active ×1.9

To lose 1 kg of fat: burn 7700 cal deficit
Weekly deficit needed = (weightToLose × 7700) / weeks
Daily deficit = weeklyDeficit / 7
Target daily calories = TDEE - dailyDeficit
Safe range: deficit ≤ 1000 cal/day (flag if exceeded)
Steps to burn deficit: ~0.04 cal/step (70kg) → deficit / 0.04
```
**Exports:**
- `calculateBMR(gender, weightKg, heightCm, age): number`
- `calculateTDEE(bmr, activityLevel): number`
- `calculateCalorieDeficit(input): CalorieDeficitResult`
- `CalorieDeficitInput`: `{ gender, weightKg, heightCm, age, activityLevel, goalWeightKg, weeks }`
- `CalorieDeficitResult`: `{ bmr, tdee, dailyDeficit, targetCalories, stepsToAdd, weeksToGoal, isSafe, safetyWarning? }`
