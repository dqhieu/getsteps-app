# Phase 2: UI Components

## Pattern Reference
Copy UI conventions from `components/bmi-calculator.tsx`:
- Input card → Result card → Reference table
- Toggle buttons for unit switching (kg/lbs, cm/ft)
- `bg-[#ED772F]` orange accent color
- `useMemo` for all calculations
- Dark mode: `dark:bg-neutral-800/50`, `dark:text-white`

---

## 1. `components/water-intake-calculator.tsx`

**Inputs section:**
- Weight input + kg/lbs toggle
- Activity level: 4-option segmented control (Sedentary / Moderate / Active / Very Active)
- Climate: 2-option toggle (Temperate / Hot)

**Results section:**
- Primary: Liters per day (large number)
- Secondary grid: Ounces, Cups (8oz), Glasses (250ml)
- Tip card: personalized hydration tip from `hydrationTip`

**No reference table needed** — keep it simple

---

## 2. `components/heart-rate-zones-calculator.tsx`

**Inputs section:**
- Age input (number, 15–90)
- Optional: Resting HR toggle → reveals resting HR input (for Karvonen method)
- Optional: Custom max HR toggle → reveals max HR input

**Results section:**
- Max HR display (large number)
- Method badge: "Karvonen (personalized)" or "Standard (age-based)"
- Zone table: 5 rows, each with:
  - Colored zone badge (Zone 1–5)
  - Zone name (Recovery, Fat Burn, Aerobic, Threshold, Maximum)
  - BPM range (e.g., 95–114 bpm)
  - Color-coded bar visualization
  - Benefit text

---

## 3. `components/activity-to-steps-calculator.tsx`

**Inputs section:**
- Activity select (dropdown with icons/emojis, 10 activities)
- Duration input (minutes) with quick presets: 15 / 30 / 45 / 60
- Intensity: 3-option toggle (Low / Medium / High) — shown only for activities where it applies
- Optional weight input + kg/lbs toggle (for calorie output)

**Results section:**
- Primary: Equivalent steps (large number, formatted)
- Secondary grid: Walking equivalent (min), Distance (km/miles), Calories burned
- Info note: "Based on MET metabolic equivalents"

**Activity lookup table:** show MET values for reference

---

## 4. `components/running-pace-calculator.tsx`

**3 input modes** (tab selector): Enter Pace | Enter Speed | Enter Time + Distance

- **Pace mode:** pace input (MM:SS) + unit toggle (per km / per mile)
- **Speed mode:** speed input + unit toggle (km/h / mph)
- **Time mode:** time input (HH:MM:SS) + distance input (km/miles)

**Results section:**
- 3-column grid: Pace/km | Pace/mile | Speed km/h | Speed mph
- Race predictions table:
  | Distance | Finish Time |
  |----------|------------|
  | 5K | HH:MM:SS |
  | 10K | HH:MM:SS |
  | Half Marathon | HH:MM:SS |
  | Marathon | HH:MM:SS |

---

## 5. `components/body-fat-calculator.tsx`

**Inputs section:**
- Gender toggle (Male / Female)
- Height input + cm/ft toggle
- Waist circumference input (cm/inches)
- Neck circumference input (cm/inches)
- Hip circumference input (cm/inches) — shown only for Female

**Results section:**
- Primary: Body fat % (large number)
- Category badge (Athletic / Fitness / Acceptable / Obese) with color
- Secondary grid: Fat mass (kg/lbs), Lean mass (kg/lbs)
- Visual gauge bar (similar to BMI scale)

**Reference table:** Body fat categories by gender

---

## 6. `components/calorie-deficit-calculator.tsx`

**Inputs section:**
- Gender toggle
- Age, weight (kg/lbs), height (cm/ft)
- Activity level: 5-option segmented control
- Goal weight input (same unit as current weight)
- Timeframe: slider or select (4, 8, 12, 16, 24 weeks)

**Results section:**
- TDEE display
- Daily calorie deficit (highlight red if unsafe)
- Target daily calories
- Safety warning card if deficit > 1000 cal/day
- Steps to add per day (to help close deficit through activity)
- Estimated weeks to goal (if different from input)
