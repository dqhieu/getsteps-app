# Steps App Site Context

## Site
- Domain: getsteps.app
- GSC Property: sc-domain:getsteps.app
- Framework: Next.js (App Router)
- Blog: MDX via next-mdx-remote at /blog

## Tool Pages (SEO landing pages)

25 live tool pages. Regenerate this list with `ls app/tools/` if it looks stale.

### Walking & steps
| Tool | Route | Primary Keywords |
|------|-------|-----------------|
| Step Distance Calculator | /tools/step-distance-calculator | steps to distance, steps to km, steps to miles |
| Steps Per Mile Calculator | /tools/steps-per-mile-calculator | steps per mile, steps in a mile |
| Steps to Calories Calculator | /tools/steps-to-calories-calculator | steps to calories, calories per step |
| Walking Calories Calculator | /tools/walking-calories-calculator | walking calories calculator, calories burned walking |
| Walking Time Calculator | /tools/walking-time-calculator | walking time calculator, how long to walk |
| Daily Step Goal Calculator | /tools/daily-step-goal-calculator | daily step goal, how many steps per day |
| Weight Loss Walking Calculator | /tools/weight-loss-walking-calculator | walking for weight loss, steps to lose weight |
| Activity to Steps Converter | /tools/activity-to-steps-converter | activity to steps, exercise step equivalent |
| Distance Equivalent Calculator | /tools/distance-equivalent-calculator | distance equivalent, distance comparison |

### Body & nutrition
| Tool | Route | Primary Keywords |
|------|-------|-----------------|
| BMI Calculator | /tools/bmi-calculator | BMI calculator, body mass index |
| Body Fat Calculator | /tools/body-fat-calculator | body fat calculator, navy body fat calculator |
| TDEE Calculator | /tools/tdee-calculator | TDEE calculator, daily energy expenditure |
| Calorie Deficit Calculator | /tools/calorie-deficit-calculator | calorie deficit calculator |
| Macro Calculator | /tools/macro-calculator | macro calculator, macros for weight loss |
| Water Intake Calculator | /tools/water-intake-calculator | water intake calculator, daily water needs |

### Heart & fitness
| Tool | Route | Primary Keywords |
|------|-------|-----------------|
| Heart Rate Zones Calculator | /tools/heart-rate-zones-calculator | heart rate zones, target heart rate |
| Resting Heart Rate Calculator | /tools/resting-heart-rate-calculator | resting heart rate |
| VO2 Max Calculator | /tools/vo2-max-calculator | vo2 max calculator |

### Running & pace
| Tool | Route | Primary Keywords |
|------|-------|-----------------|
| Running Pace Calculator | /tools/running-pace-calculator | running pace calculator |
| Pace to Speed Converter | /tools/pace-to-speed-converter | pace to speed converter, speed converter |
| Training Pace Zones | /tools/training-pace-zones | training pace zones |
| Marathon Pace Predictor | /tools/marathon-pace-predictor | marathon pace predictor |
| Race Time Predictor | /tools/race-time-predictor | race time predictor |

### Data & utilities
| Tool | Route | Primary Keywords |
|------|-------|-----------------|
| GPX Viewer | /tools/gpx-viewer | gpx viewer, view gpx file |
| Strava Stats Generator | /tools/strava-stats-generator | strava stats, strava year in review |

## Conversion Pages (programmatic)

`/conversions/steps-to-km`, `/conversions/steps-to-miles`, `/conversions/steps-to-calories`,
`/conversions/km-to-steps` — plus numeric sub-routes (e.g. `/conversions/steps-to-calories/17000`).
Numeric conversion queries ("7000 steps in km") belong here, NOT in new blog posts.

## Seed Keywords for Expansion

Walking & steps, calorie counting, fitness calculators, pedometer, weight loss walking,
step counter app, daily step goal, walking distance, steps per mile, BMI health,
walking workout, 10000 steps, walking benefits, step tracking, fitness walking

## Internal Linking Targets

- App download: https://apps.apple.com/us/app/steps-workout-pedometer/id6746096378
- Tools hub: /tools
- Blog: /blog
- Each tool page can link to related tools (e.g., calories → weight loss → BMI)
