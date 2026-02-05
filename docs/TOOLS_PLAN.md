# Tools Implementation Plan

## Overview

| # | Tool | Route | Priority | Status |
|---|------|-------|----------|--------|
| 1 | Step Distance Calculator | `/tools/step-distance-calculator` | High | Done |
| 2 | Steps to Calories Calculator | `/tools/steps-to-calories-calculator` | High | Planned |
| 3 | Walking Calories Burned Calculator | `/tools/walking-calories-calculator` | High | Planned |
| 4 | Daily Step Goal Calculator | `/tools/daily-step-goal-calculator` | Medium | Planned |
| 5 | Steps Per Mile Calculator | `/tools/steps-per-mile-calculator` | Medium | Planned |
| 6 | Walking Time Calculator | `/tools/walking-time-calculator` | Medium | Planned |
| 7 | Weight Loss Walking Calculator | `/tools/weight-loss-walking-calculator` | High | Planned |
| 8 | BMI Calculator | `/tools/bmi-calculator` | Medium | Planned |

---

## Tool 1: Step Distance Calculator (DONE)

**Route:** `/tools/step-distance-calculator`

**Status:** Implemented

---

## Tool 2: Steps to Calories Calculator

**Route:** `/tools/steps-to-calories-calculator`

**Description:** Calculate calories burned from a given number of steps.

### Inputs

| Field | Type | Required | Default |
|-------|------|----------|---------|
| Steps | number | Yes | 10,000 |
| Weight | number | Yes | 70 kg |
| Weight Unit | toggle | Yes | kg |
| Gender | toggle | Yes | Male |
| Age | number | Yes | 30 |

### Calculation Logic

```
MET (Metabolic Equivalent) for walking ≈ 3.5
Calories = (MET × weight in kg × duration in hours)
Duration = steps / steps per hour (avg ~100 steps/min = 6000/hr)
Simplified: Calories ≈ steps × 0.04 × (weight/70)
```

### Outputs

- Calories burned
- Equivalent food (e.g., "= 1.5 bananas")
- Distance walked (using step length)
- Walking time estimate

### SEO Keywords

- steps to calories
- how many calories in 10000 steps
- calories burned per step
- step calorie calculator

### Reference Table

| Steps | Calories (70kg) |
|-------|-----------------|
| 1,000 | ~40 kcal |
| 5,000 | ~200 kcal |
| 10,000 | ~400 kcal |
| 15,000 | ~600 kcal |
| 20,000 | ~800 kcal |

---

## Tool 3: Walking Calories Burned Calculator

**Route:** `/tools/walking-calories-calculator`

**Description:** Calculate calories burned based on walking distance, time, or speed.

### Inputs

| Field | Type | Required | Default |
|-------|------|----------|---------|
| Weight | number | Yes | 70 kg |
| Weight Unit | toggle | Yes | kg |
| Mode | toggle | Yes | Distance |
| Distance | number | If mode=distance | 5 km |
| Distance Unit | toggle | If mode=distance | km |
| Duration | number | If mode=time | 60 min |
| Walking Speed | select | Yes | Normal (5 km/h) |

### Walking Speed Options

| Speed | km/h | MET |
|-------|------|-----|
| Slow | 3.2 | 2.5 |
| Normal | 5.0 | 3.5 |
| Brisk | 6.4 | 4.5 |
| Fast | 7.2 | 5.0 |

### Calculation Logic

```
Calories = MET × weight (kg) × duration (hours)
```

### Outputs

- Calories burned
- Distance (if time input)
- Time (if distance input)
- Steps estimate
- Fat burned (calories / 7700 × 1000 = grams)

### SEO Keywords

- walking calories calculator
- calories burned walking
- how many calories walking 1 mile
- calories burned walking 30 minutes

---

## Tool 4: Daily Step Goal Calculator

**Route:** `/tools/daily-step-goal-calculator`

**Description:** Get a personalized daily step goal recommendation.

### Inputs

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Age | number | Yes | - |
| Gender | toggle | Yes | Male/Female |
| Current Activity Level | select | Yes | Sedentary/Lightly Active/Active/Very Active |
| Health Goal | select | Yes | Maintain Health/Lose Weight/Improve Fitness/Train for Event |
| Current Daily Steps | number | Optional | - |

### Activity Level Mapping

| Level | Current Steps | Description |
|-------|---------------|-------------|
| Sedentary | <5,000 | Desk job, minimal movement |
| Lightly Active | 5,000-7,499 | Some walking |
| Active | 7,500-9,999 | Regular movement |
| Very Active | 10,000+ | Active lifestyle |

### Recommendation Logic

```
Base goal by age:
- Under 18: 12,000-15,000
- 18-64: 10,000-12,000
- 65+: 7,000-10,000

Adjustments:
- Weight loss goal: +2,000 steps
- Fitness improvement: +3,000 steps
- Gradual increase: current + 1,000 (if below target)
```

### Outputs

- Recommended daily step goal
- Weekly goal
- Equivalent distance per day
- Estimated calories burned per day
- Tips for reaching goal
- Milestone tracker (Week 1 goal, Week 2 goal, etc.)

### SEO Keywords

- daily step goal
- how many steps should I walk
- step goal by age
- recommended steps per day

---

## Tool 5: Steps Per Mile/Km Calculator

**Route:** `/tools/steps-per-mile-calculator`

**Description:** Simple calculator showing steps per mile or km based on height.

### Inputs

| Field | Type | Required | Default |
|-------|------|----------|---------|
| Height | number | Yes | 170 cm |
| Height Unit | toggle | Yes | cm |
| Gender | toggle | Yes | Male |

### Calculation Logic

```
Step length = height × 0.415 (male) or 0.413 (female)
Steps per km = 100,000 / step length (cm)
Steps per mile = steps per km × 1.60934
```

### Outputs

- Steps per kilometer
- Steps per mile
- Step length (cm and inches)
- Quick reference table for common distances

### Reference Table

| Distance | Steps |
|----------|-------|
| 1 km | X |
| 1 mile | X |
| 5 km | X |
| 5 miles | X |
| 10 km | X |
| Half marathon | X |
| Marathon | X |

### SEO Keywords

- steps per mile
- steps per km
- how many steps in a mile
- steps in a kilometer

---

## Tool 6: Walking Time Calculator

**Route:** `/tools/walking-time-calculator`

**Description:** Estimate walking time for a given distance.

### Inputs

| Field | Type | Required | Default |
|-------|------|----------|---------|
| Distance | number | Yes | 5 |
| Distance Unit | toggle | Yes | km |
| Walking Speed | select | Yes | Normal |
| Include Breaks | toggle | No | No |

### Walking Speed Options

| Speed | km/h | Description |
|-------|------|-------------|
| Slow | 3.2 | Leisurely stroll |
| Normal | 5.0 | Average pace |
| Brisk | 6.4 | Fast walk |
| Fast | 7.2 | Power walking |

### Calculation Logic

```
Time (minutes) = (distance / speed) × 60
With breaks: add 5 min per 30 min of walking
```

### Outputs

- Walking time (hours and minutes)
- Departure/arrival time calculator
- Steps estimate
- Calories burned estimate

### SEO Keywords

- walking time calculator
- how long to walk 5 km
- walking distance time
- time to walk a mile

---

## Tool 7: Weight Loss Walking Calculator

**Route:** `/tools/weight-loss-walking-calculator`

**Description:** Calculate walking requirements to achieve weight loss goals.

### Inputs

| Field | Type | Required | Default |
|-------|------|----------|---------|
| Current Weight | number | Yes | 80 kg |
| Target Weight | number | Yes | 75 kg |
| Weight Unit | toggle | Yes | kg |
| Timeframe | select | Yes | 3 months |
| Days Per Week | slider | Yes | 5 |

### Timeframe Options

- 1 month
- 2 months
- 3 months
- 6 months
- 1 year

### Calculation Logic

```
Weight to lose = current - target (kg)
Calories to burn = weight × 7700 kcal/kg
Daily calorie deficit needed = total calories / days
Walking calories per km ≈ 50-70 kcal (based on weight)
Daily walking distance = daily deficit / calories per km
Daily steps = distance × steps per km
```

### Outputs

- Daily walking distance needed
- Daily steps needed
- Daily walking time
- Weekly walking goal
- Calorie deficit per day
- Safety warning if deficit > 1000 kcal/day
- Progress milestones

### SEO Keywords

- walking for weight loss
- how much walking to lose weight
- steps to lose weight
- walking weight loss calculator

---

## Tool 8: BMI Calculator

**Route:** `/tools/bmi-calculator`

**Description:** Calculate Body Mass Index with health insights.

### Inputs

| Field | Type | Required | Default |
|-------|------|----------|---------|
| Weight | number | Yes | 70 kg |
| Weight Unit | toggle | Yes | kg |
| Height | number | Yes | 170 cm |
| Height Unit | toggle | Yes | cm |
| Age | number | Optional | - |
| Gender | toggle | Optional | - |

### Calculation Logic

```
BMI = weight (kg) / height (m)²
```

### BMI Categories

| BMI | Category | Color |
|-----|----------|-------|
| < 18.5 | Underweight | Blue |
| 18.5 - 24.9 | Normal | Green |
| 25.0 - 29.9 | Overweight | Yellow |
| 30.0 - 34.9 | Obese I | Orange |
| 35.0 - 39.9 | Obese II | Red |
| ≥ 40.0 | Obese III | Dark Red |

### Outputs

- BMI value
- BMI category
- Visual scale/gauge
- Healthy weight range for height
- Steps recommendation based on BMI
- Link to Daily Step Goal Calculator

### SEO Keywords

- BMI calculator
- body mass index
- calculate BMI
- healthy weight calculator

---

## Shared Components & Utilities

### Reusable Components

```
/components/tools/
├── profile-inputs.tsx      # Gender, Age, Height inputs
├── weight-input.tsx        # Weight with unit toggle
├── result-card.tsx         # Styled result display
├── reference-table.tsx     # Generic table component
├── tool-cta.tsx            # App Store CTA for tools
└── tool-faq.tsx            # Collapsible FAQ section
```

### Shared Utilities

```
/lib/
├── step-calculator.ts      # (existing) Step & distance calcs
├── calorie-calculator.ts   # Calorie burn calculations
├── bmi-calculator.ts       # BMI calculations
├── unit-converter.ts       # kg↔lbs, cm↔ft, km↔miles
└── constants/
    └── met-values.ts       # MET values for activities
```

---

## Tools Landing Page (Future)

When you have 3+ tools, create a landing page at `/tools`:

```
/tools
├── Hero: "Free Fitness Calculators"
├── Tool Grid: Cards linking to each calculator
├── Popular Tools: Highlight top 3
└── CTA: Download Steps App
```

Update navbar/footer "Tools" link to point to `/tools` instead of directly to step-distance-calculator.

---

## Implementation Order (Recommended)

1. **Steps to Calories Calculator** - Shares most with existing code
2. **Steps Per Mile Calculator** - Simple, reuses step-calculator.ts
3. **Walking Calories Calculator** - New calorie utils, high SEO value
4. **BMI Calculator** - Standalone, high traffic potential
5. **Walking Time Calculator** - Simple calculation
6. **Daily Step Goal Calculator** - More complex logic
7. **Weight Loss Walking Calculator** - Combines multiple utils
8. **Tools Landing Page** - When 3+ tools are ready

---

## Checklist for Each Tool

- [ ] Create route at `/app/tools/[tool-name]/page.tsx`
- [ ] Create client component at `/app/tools/[tool-name]/client.tsx`
- [ ] Add calculation utilities to `/lib/`
- [ ] Add to sitemap at `/app/sitemap.ts`
- [ ] Add SEO metadata (title, description, keywords, OpenGraph)
- [ ] Include FAQ section with common questions
- [ ] Include App Store CTA
- [ ] Test on mobile and desktop
- [ ] Test dark mode
