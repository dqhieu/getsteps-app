export interface RelatedLink {
  title: string;
  href: string;
}

// Tool slug → related blog post links
export const TOOL_RELATED_BLOGS: Record<string, RelatedLink[]> = {
  "step-distance-calculator": [
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
  ],
  "steps-to-calories-calculator": [
    { title: "How Many Calories Does 10,000 Steps Burn?", href: "/blog/10000-steps-calories-burned" },
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "15,000 Steps a Day Benefits", href: "/blog/15000-steps-a-day-benefits" },
  ],
  "steps-per-mile-calculator": [
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
  ],
  "walking-calories-calculator": [
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
  ],
  "walking-time-calculator": [
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
  ],
  "daily-step-goal-calculator": [
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "15,000 Steps a Day Benefits", href: "/blog/15000-steps-a-day-benefits" },
  ],
  "weight-loss-walking-calculator": [
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
    { title: "How Many Miles to Walk a Day to Lose Weight?", href: "/blog/how-many-miles-to-walk-a-day-to-lose-weight" },
  ],
  "bmi-calculator": [
    { title: "How to Calculate Body Fat Percentage", href: "/blog/how-to-calculate-body-fat-percentage" },
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
    { title: "What Is TDEE? A Walker's Guide", href: "/blog/what-is-tdee" },
  ],
  "heart-rate-zones-calculator": [
    { title: "Heart Rate Zones for Walkers", href: "/blog/heart-rate-zones-explained" },
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "What Is TDEE? A Walker's Guide", href: "/blog/what-is-tdee" },
  ],
  "running-pace-calculator": [
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "Heart Rate Zones Explained", href: "/blog/heart-rate-zones-explained" },
  ],
  "body-fat-calculator": [
    { title: "How to Calculate Body Fat Percentage", href: "/blog/how-to-calculate-body-fat-percentage" },
    { title: "What Is TDEE? A Walker's Guide", href: "/blog/what-is-tdee" },
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
  ],
  "water-intake-calculator": [
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
    { title: "15,000 Steps a Day Benefits", href: "/blog/15000-steps-a-day-benefits" },
  ],
  "tdee-calculator": [
    { title: "What Is TDEE? A Walker's Guide", href: "/blog/what-is-tdee" },
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "How to Calculate Body Fat Percentage", href: "/blog/how-to-calculate-body-fat-percentage" },
  ],
  "macro-calculator": [
    { title: "Macro Calculator Guide", href: "/blog/macro-calculator-guide" },
    { title: "What Is TDEE?", href: "/blog/what-is-tdee" },
  ],
  "calorie-deficit-calculator": [
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "What Is TDEE? A Walker's Guide", href: "/blog/what-is-tdee" },
  ],
  "resting-heart-rate-calculator": [
    { title: "Heart Rate Zones Explained", href: "/blog/heart-rate-zones-explained" },
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
  ],
  "marathon-pace-predictor": [
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "Heart Rate Zones for Walkers", href: "/blog/heart-rate-zones-explained" },
    { title: "Steps vs Strava", href: "/blog/steps-vs-strava-comparison" },
  ],
  "vo2-max-calculator": [
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "Heart Rate Zones Explained", href: "/blog/heart-rate-zones-explained" },
  ],
  "training-pace-zones": [
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "Heart Rate Zones Explained", href: "/blog/heart-rate-zones-explained" },
  ],
  "pace-to-speed-converter": [
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
  ],
  "race-time-predictor": [
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "Heart Rate Zones for Walkers", href: "/blog/heart-rate-zones-explained" },
    { title: "Steps vs Strava", href: "/blog/steps-vs-strava-comparison" },
  ],
  "distance-equivalent-calculator": [
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
  ],
  "activity-to-steps-converter": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
  ],
  "gpx-viewer": [
    { title: "How to Export GPX from Apple Watch Workouts", href: "/blog/how-to-export-gpx-from-apple-watch-workouts" },
    { title: "Steps vs Strava", href: "/blog/steps-vs-strava-comparison" },
  ],
};

// Tool slug → related tool links (for the 8 pages missing Related Calculators)
export const TOOL_RELATED_TOOLS: Record<string, RelatedLink[]> = {
  "bmi-calculator": [
    { title: "Body Fat Calculator", href: "/tools/body-fat-calculator" },
    { title: "TDEE Calculator", href: "/tools/tdee-calculator" },
    { title: "Calorie Deficit Calculator", href: "/tools/calorie-deficit-calculator" },
  ],
  "daily-step-goal-calculator": [
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
    { title: "Walking Time Calculator", href: "/tools/walking-time-calculator" },
  ],
  "step-distance-calculator": [
    { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
    { title: "Walking Time Calculator", href: "/tools/walking-time-calculator" },
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
  ],
  "steps-per-mile-calculator": [
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
    { title: "Walking Time Calculator", href: "/tools/walking-time-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
  "steps-to-calories-calculator": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Calorie Deficit Calculator", href: "/tools/calorie-deficit-calculator" },
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
  ],
  "walking-calories-calculator": [
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
    { title: "TDEE Calculator", href: "/tools/tdee-calculator" },
  ],
  "walking-time-calculator": [
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
  ],
  "weight-loss-walking-calculator": [
    { title: "Calorie Deficit Calculator", href: "/tools/calorie-deficit-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "BMI Calculator", href: "/tools/bmi-calculator" },
  ],
  "gpx-viewer": [
    { title: "Running Pace Calculator", href: "/tools/running-pace-calculator" },
    { title: "Distance Equivalent Calculator", href: "/tools/distance-equivalent-calculator" },
    { title: "Heart Rate Zones Calculator", href: "/tools/heart-rate-zones-calculator" },
  ],
};

// Blog slug → related blog post links
export const BLOG_RELATED_POSTS: Record<string, RelatedLink[]> = {
  "10000-steps-a-day-benefits": [
    { title: "How Many Calories Does 10,000 Steps Burn?", href: "/blog/10000-steps-calories-burned" },
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
    { title: "15,000 Steps a Day Benefits", href: "/blog/15000-steps-a-day-benefits" },
  ],
  "10000-steps-calories-burned": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
  ],
  "15000-steps-a-day-benefits": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
  ],
  "how-many-miles-is-10000-steps": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "How Many Miles to Walk a Day to Lose Weight?", href: "/blog/how-many-miles-to-walk-a-day-to-lose-weight" },
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
  ],
  "recommended-steps-per-day-by-age": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "15,000 Steps a Day Benefits", href: "/blog/15000-steps-a-day-benefits" },
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
  ],
  "walking-for-weight-loss-how-many-steps": [
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
    { title: "How Many Miles to Walk a Day to Lose Weight?", href: "/blog/how-many-miles-to-walk-a-day-to-lose-weight" },
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
  ],
  "walking-to-lose-weight-chart": [
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
    { title: "How Many Miles to Walk a Day to Lose Weight?", href: "/blog/how-many-miles-to-walk-a-day-to-lose-weight" },
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
  ],
  "how-many-miles-to-walk-a-day-to-lose-weight": [
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
  ],
  "calories-burned-walking-by-time-and-distance": [
    { title: "How Many Calories Does 10,000 Steps Burn?", href: "/blog/10000-steps-calories-burned" },
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
  ],
  "heart-rate-zones-explained": [
    { title: "Running Pace Calculator Guide", href: "/blog/running-pace-calculator-guide" },
    { title: "What Is TDEE?", href: "/blog/what-is-tdee" },
  ],
  "running-pace-calculator-guide": [
    { title: "Heart Rate Zones Explained", href: "/blog/heart-rate-zones-explained" },
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
  ],
  "how-to-calculate-body-fat-percentage": [
    { title: "What Is TDEE?", href: "/blog/what-is-tdee" },
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
    { title: "Macro Calculator Guide", href: "/blog/macro-calculator-guide" },
  ],
  "what-is-tdee": [
    { title: "Macro Calculator Guide", href: "/blog/macro-calculator-guide" },
    { title: "How to Calculate Body Fat Percentage", href: "/blog/how-to-calculate-body-fat-percentage" },
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
  ],
  "macro-calculator-guide": [
    { title: "What Is TDEE?", href: "/blog/what-is-tdee" },
    { title: "How to Calculate Body Fat Percentage", href: "/blog/how-to-calculate-body-fat-percentage" },
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
  ],
  "best-step-counter-app-apple-watch-2026": [
    { title: "Steps vs Apple Fitness", href: "/blog/steps-vs-apple-fitness-comparison" },
    { title: "Steps vs Strava", href: "/blog/steps-vs-strava-comparison" },
    { title: "Best Step Counter Widgets for iPhone", href: "/blog/best-step-counter-widgets-iphone-home-screen-2026" },
  ],
  "best-step-counter-widgets-iphone-home-screen-2026": [
    { title: "Best Step Counter App for Apple Watch", href: "/blog/best-step-counter-app-apple-watch-2026" },
    { title: "Steps vs Pedometer++", href: "/blog/steps-vs-pedometer-plus-plus-comparison" },
    { title: "Steps vs Apple Fitness", href: "/blog/steps-vs-apple-fitness-comparison" },
  ],
  "steps-vs-apple-fitness-comparison": [
    { title: "Steps vs Strava", href: "/blog/steps-vs-strava-comparison" },
    { title: "Best Step Counter App for Apple Watch", href: "/blog/best-step-counter-app-apple-watch-2026" },
    { title: "Steps vs Nike Run Club", href: "/blog/steps-vs-nike-run-club-comparison" },
  ],
  "steps-vs-strava-comparison": [
    { title: "Steps vs Apple Fitness", href: "/blog/steps-vs-apple-fitness-comparison" },
    { title: "Steps vs Nike Run Club", href: "/blog/steps-vs-nike-run-club-comparison" },
    { title: "Best Step Counter App for Apple Watch", href: "/blog/best-step-counter-app-apple-watch-2026" },
  ],
  "steps-vs-nike-run-club-comparison": [
    { title: "Steps vs Strava", href: "/blog/steps-vs-strava-comparison" },
    { title: "Steps vs Apple Fitness", href: "/blog/steps-vs-apple-fitness-comparison" },
    { title: "Steps vs Pedometer++", href: "/blog/steps-vs-pedometer-plus-plus-comparison" },
  ],
  "steps-vs-pedometer-plus-plus-comparison": [
    { title: "Steps vs Apple Fitness", href: "/blog/steps-vs-apple-fitness-comparison" },
    { title: "Best Step Counter Widgets for iPhone", href: "/blog/best-step-counter-widgets-iphone-home-screen-2026" },
    { title: "Steps vs Nike Run Club", href: "/blog/steps-vs-nike-run-club-comparison" },
  ],
  "fitness-wrapped-yearly-recap-steps-insights": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "Best Step Counter App for Apple Watch", href: "/blog/best-step-counter-app-apple-watch-2026" },
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
  ],
  "how-to-export-gpx-from-apple-watch-workouts": [
    { title: "Steps vs Strava", href: "/blog/steps-vs-strava-comparison" },
    { title: "Best Step Counter App for Apple Watch", href: "/blog/best-step-counter-app-apple-watch-2026" },
    { title: "Steps vs Nike Run Club", href: "/blog/steps-vs-nike-run-club-comparison" },
  ],
  "welcome-to-steps-blog": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "Best Step Counter App for Apple Watch", href: "/blog/best-step-counter-app-apple-watch-2026" },
  ],
  "how-many-steps-in-a-mile": [
    { title: "How Many Steps in a Mile Running?", href: "/blog/how-many-steps-in-a-mile-running" },
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
    { title: "Benefits of Walking Every Day", href: "/blog/benefits-of-walking-everyday" },
  ],
  "benefits-of-walking-everyday": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
    { title: "10,000 Steps Weight Loss Results", href: "/blog/10000-steps-weight-loss-results" },
  ],
  "walking-vs-running-for-weight-loss": [
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "Walking for Weight Loss: How Many Steps?", href: "/blog/walking-for-weight-loss-how-many-steps" },
    { title: "How Many Steps in a Mile Running?", href: "/blog/how-many-steps-in-a-mile-running" },
  ],
  "how-many-steps-in-a-mile-running": [
    { title: "How Many Steps in a Mile?", href: "/blog/how-many-steps-in-a-mile" },
    { title: "Walking vs Running for Weight Loss", href: "/blog/walking-vs-running-for-weight-loss" },
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
  ],
  "10000-steps-weight-loss-results": [
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
    { title: "How Many Calories Does 10,000 Steps Burn?", href: "/blog/10000-steps-calories-burned" },
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
  ],
  "calories-burned-on-treadmill": [
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "Walking vs Running for Weight Loss", href: "/blog/walking-vs-running-for-weight-loss" },
    { title: "Calories Burned Hiking", href: "/blog/calories-burned-hiking" },
  ],
  "calories-burned-hiking": [
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "Calories Burned on Treadmill", href: "/blog/calories-burned-on-treadmill" },
    { title: "Walking vs Running for Weight Loss", href: "/blog/walking-vs-running-for-weight-loss" },
  ],
  "best-step-counter-app-iphone-2026": [
    { title: "Best Step Counter App for Apple Watch", href: "/blog/best-step-counter-app-apple-watch-2026" },
    { title: "Best Step Counter Widgets for iPhone", href: "/blog/best-step-counter-widgets-iphone-home-screen-2026" },
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
  ],
  "best-pedometer-app-iphone-2026": [
    { title: "Steps vs Pedometer++", href: "/blog/steps-vs-pedometer-plus-plus-comparison" },
    { title: "Best Step Counter App for Apple Watch", href: "/blog/best-step-counter-app-apple-watch-2026" },
    { title: "Benefits of Walking Every Day", href: "/blog/benefits-of-walking-everyday" },
  ],
  "how-long-to-walk-10000-steps": [
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
    { title: "How Many Steps in 30 Minutes of Walking?", href: "/blog/how-many-steps-in-30-minutes-walking" },
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
  ],
  "how-many-steps-burn-500-calories": [
    { title: "How Many Steps to Lose a Pound?", href: "/blog/how-many-steps-to-lose-a-pound" },
    { title: "How Many Calories Does 10,000 Steps Burn?", href: "/blog/10000-steps-calories-burned" },
    { title: "Walking After Eating Benefits", href: "/blog/walking-after-eating-benefits" },
  ],
  "how-many-steps-in-30-minutes-walking": [
    { title: "How Long Does It Take to Walk 10,000 Steps?", href: "/blog/how-long-to-walk-10000-steps" },
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
  ],
  "how-many-steps-to-lose-a-pound": [
    { title: "How Many Steps Burn 500 Calories?", href: "/blog/how-many-steps-burn-500-calories" },
    { title: "Does Walking Reduce Belly Fat?", href: "/blog/does-walking-reduce-belly-fat" },
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
  ],
  "does-walking-reduce-belly-fat": [
    { title: "How Many Steps to Lose a Pound?", href: "/blog/how-many-steps-to-lose-a-pound" },
    { title: "Morning Walk Benefits", href: "/blog/morning-walk-benefits" },
    { title: "10,000 Steps Weight Loss Results", href: "/blog/10000-steps-weight-loss-results" },
  ],
  "morning-walk-benefits": [
    { title: "Benefits of Walking Every Day", href: "/blog/benefits-of-walking-everyday" },
    { title: "Does Walking Reduce Belly Fat?", href: "/blog/does-walking-reduce-belly-fat" },
    { title: "Walking After Eating Benefits", href: "/blog/walking-after-eating-benefits" },
  ],
  "walking-after-eating-benefits": [
    { title: "Morning Walk Benefits", href: "/blog/morning-walk-benefits" },
    { title: "How Many Steps in 30 Minutes of Walking?", href: "/blog/how-many-steps-in-30-minutes-walking" },
    { title: "Does Walking Reduce Belly Fat?", href: "/blog/does-walking-reduce-belly-fat" },
  ],
  "how-far-is-5000-steps": [
    { title: "How Many Miles Is 10,000 Steps?", href: "/blog/how-many-miles-is-10000-steps" },
    { title: "How Many Steps in a Mile?", href: "/blog/how-many-steps-in-a-mile" },
    { title: "Average Steps Per Day for Women", href: "/blog/average-steps-per-day-for-women" },
  ],
  "20000-steps-calories-burned": [
    { title: "How Many Calories Does 10,000 Steps Burn?", href: "/blog/10000-steps-calories-burned" },
    { title: "How Many Steps Burn 500 Calories?", href: "/blog/how-many-steps-burn-500-calories" },
    { title: "How Many Steps to Burn 100 Calories?", href: "/blog/how-many-steps-to-burn-100-calories" },
  ],
  "calories-burned-walking-one-mile": [
    { title: "Calories Burned Walking: 30 Min, 1 Hour & Beyond", href: "/blog/calories-burned-walking-by-time-and-distance" },
    { title: "Walking vs Running for Weight Loss", href: "/blog/walking-vs-running-for-weight-loss" },
    { title: "How Many Steps in a Mile?", href: "/blog/how-many-steps-in-a-mile" },
  ],
  "benefits-of-walking-30-minutes-a-day": [
    { title: "Walking 30 Minutes a Day for a Month Results", href: "/blog/walking-30-minutes-a-day-results" },
    { title: "Morning Walk Benefits", href: "/blog/morning-walk-benefits" },
    { title: "Benefits of Walking Every Day", href: "/blog/benefits-of-walking-everyday" },
  ],
  "how-many-steps-to-burn-100-calories": [
    { title: "How Many Steps Burn 500 Calories?", href: "/blog/how-many-steps-burn-500-calories" },
    { title: "20,000 Steps Calories Burned", href: "/blog/20000-steps-calories-burned" },
    { title: "Calories Burned Walking 1 Mile", href: "/blog/calories-burned-walking-one-mile" },
  ],
  "walking-30-minutes-a-day-results": [
    { title: "Benefits of Walking 30 Minutes a Day", href: "/blog/benefits-of-walking-30-minutes-a-day" },
    { title: "10,000 Steps Weight Loss Results", href: "/blog/10000-steps-weight-loss-results" },
    { title: "Walking to Lose Weight Chart", href: "/blog/walking-to-lose-weight-chart" },
  ],
  "average-steps-per-day-for-women": [
    { title: "Recommended Steps Per Day by Age", href: "/blog/recommended-steps-per-day-by-age" },
    { title: "How Far Is 5,000 Steps?", href: "/blog/how-far-is-5000-steps" },
    { title: "10,000 Steps a Day Benefits", href: "/blog/10000-steps-a-day-benefits" },
  ],
};

// Tool slug → related persona page links (reverse of persona.relatedTools)
export interface PersonaLink {
  title: string;
  slug: string;
}

export const TOOL_RELATED_PERSONAS: Record<string, PersonaLink[]> = {
  "daily-step-goal-calculator": [
    { title: "Seniors", slug: "seniors" },
    { title: "Beginners", slug: "beginners" },
    { title: "Kids", slug: "kids" },
    { title: "Pregnancy", slug: "pregnancy" },
    { title: "Office Workers", slug: "office-workers" },
    { title: "Heart Health", slug: "heart-health" },
  ],
  "walking-time-calculator": [
    { title: "Seniors", slug: "seniors" },
    { title: "Beginners", slug: "beginners" },
    { title: "Pregnancy", slug: "pregnancy" },
    { title: "Office Workers", slug: "office-workers" },
    { title: "Heart Health", slug: "heart-health" },
  ],
  "walking-calories-calculator": [
    { title: "Seniors", slug: "seniors" },
    { title: "Weight Loss", slug: "weight-loss" },
    { title: "Women", slug: "women" },
    { title: "Pregnancy", slug: "pregnancy" },
    { title: "Nurses", slug: "nurses" },
  ],
  "weight-loss-walking-calculator": [
    { title: "Weight Loss", slug: "weight-loss" },
  ],
  "steps-to-calories-calculator": [
    { title: "Weight Loss", slug: "weight-loss" },
    { title: "Office Workers", slug: "office-workers" },
  ],
  "step-distance-calculator": [
    { title: "Beginners", slug: "beginners" },
    { title: "Kids", slug: "kids" },
    { title: "Nurses", slug: "nurses" },
  ],
  "activity-to-steps-converter": [
    { title: "Kids", slug: "kids" },
  ],
  "running-pace-calculator": [
    { title: "Runners", slug: "runners" },
  ],
  "marathon-pace-predictor": [
    { title: "Runners", slug: "runners" },
  ],
  "vo2-max-calculator": [
    { title: "Runners", slug: "runners" },
  ],
  "heart-rate-zones-calculator": [
    { title: "Runners", slug: "runners" },
    { title: "Heart Health", slug: "heart-health" },
  ],
  "tdee-calculator": [
    { title: "Women", slug: "women" },
  ],
  "body-fat-calculator": [
    { title: "Women", slug: "women" },
  ],
  "steps-per-mile-calculator": [
    { title: "Nurses", slug: "nurses" },
  ],
};

// Blog slug → related persona page links (reverse of persona.relatedPosts)
export const BLOG_RELATED_PERSONAS: Record<string, PersonaLink[]> = {
  "recommended-steps-per-day-by-age": [
    { title: "Seniors", slug: "seniors" },
    { title: "Beginners", slug: "beginners" },
    { title: "Pregnancy", slug: "pregnancy" },
    { title: "Heart Health", slug: "heart-health" },
  ],
  "benefits-of-walking-everyday": [
    { title: "Seniors", slug: "seniors" },
    { title: "Kids", slug: "kids" },
    { title: "Pregnancy", slug: "pregnancy" },
    { title: "Heart Health", slug: "heart-health" },
  ],
  "morning-walk-benefits": [
    { title: "Seniors", slug: "seniors" },
    { title: "Pregnancy", slug: "pregnancy" },
    { title: "Office Workers", slug: "office-workers" },
    { title: "Heart Health", slug: "heart-health" },
  ],
  "walking-for-weight-loss-how-many-steps": [
    { title: "Weight Loss", slug: "weight-loss" },
  ],
  "walking-to-lose-weight-chart": [
    { title: "Weight Loss", slug: "weight-loss" },
  ],
  "10000-steps-weight-loss-results": [
    { title: "Weight Loss", slug: "weight-loss" },
  ],
  "10000-steps-a-day-benefits": [
    { title: "Beginners", slug: "beginners" },
    { title: "Kids", slug: "kids" },
    { title: "Office Workers", slug: "office-workers" },
  ],
  "how-many-steps-in-30-minutes-walking": [
    { title: "Beginners", slug: "beginners" },
  ],
  "running-pace-calculator-guide": [
    { title: "Runners", slug: "runners" },
  ],
  "how-many-steps-in-a-mile-running": [
    { title: "Runners", slug: "runners" },
  ],
  "calories-burned-hiking": [
    { title: "Runners", slug: "runners" },
  ],
  "calories-burned-walking-by-time-and-distance": [
    { title: "Women", slug: "women" },
    { title: "Nurses", slug: "nurses" },
  ],
  "heart-rate-zones-explained": [
    { title: "Women", slug: "women" },
  ],
  "what-is-tdee": [
    { title: "Women", slug: "women" },
  ],
  "walking-after-eating-benefits": [
    { title: "Office Workers", slug: "office-workers" },
  ],
  "how-many-steps-in-a-mile": [
    { title: "Nurses", slug: "nurses" },
  ],
  "how-many-miles-is-10000-steps": [
    { title: "Nurses", slug: "nurses" },
  ],
};

// Blog slug → related tool links
export const BLOG_RELATED_TOOLS: Record<string, RelatedLink[]> = {
  "10000-steps-a-day-benefits": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "10000-steps-calories-burned": [
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
  ],
  "15000-steps-a-day-benefits": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
  "how-many-miles-is-10000-steps": [
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
    { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
  ],
  "recommended-steps-per-day-by-age": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
  ],
  "walking-for-weight-loss-how-many-steps": [
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
  ],
  "walking-to-lose-weight-chart": [
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
    { title: "Calorie Deficit Calculator", href: "/tools/calorie-deficit-calculator" },
  ],
  "how-many-miles-to-walk-a-day-to-lose-weight": [
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "calories-burned-walking-by-time-and-distance": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
  "heart-rate-zones-explained": [
    { title: "Heart Rate Zones Calculator", href: "/tools/heart-rate-zones-calculator" },
    { title: "Resting Heart Rate Calculator", href: "/tools/resting-heart-rate-calculator" },
  ],
  "running-pace-calculator-guide": [
    { title: "Running Pace Calculator", href: "/tools/running-pace-calculator" },
    { title: "Marathon Pace Predictor", href: "/tools/marathon-pace-predictor" },
  ],
  "how-to-calculate-body-fat-percentage": [
    { title: "Body Fat Calculator", href: "/tools/body-fat-calculator" },
    { title: "BMI Calculator", href: "/tools/bmi-calculator" },
  ],
  "what-is-tdee": [
    { title: "TDEE Calculator", href: "/tools/tdee-calculator" },
    { title: "Calorie Deficit Calculator", href: "/tools/calorie-deficit-calculator" },
  ],
  "macro-calculator-guide": [
    { title: "Macro Calculator", href: "/tools/macro-calculator" },
    { title: "TDEE Calculator", href: "/tools/tdee-calculator" },
  ],
  "best-step-counter-app-apple-watch-2026": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Activity to Steps Converter", href: "/tools/activity-to-steps-converter" },
  ],
  "best-step-counter-widgets-iphone-home-screen-2026": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "steps-vs-apple-fitness-comparison": [
    { title: "Activity to Steps Converter", href: "/tools/activity-to-steps-converter" },
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
  ],
  "steps-vs-strava-comparison": [
    { title: "Running Pace Calculator", href: "/tools/running-pace-calculator" },
    { title: "Activity to Steps Converter", href: "/tools/activity-to-steps-converter" },
  ],
  "steps-vs-nike-run-club-comparison": [
    { title: "Running Pace Calculator", href: "/tools/running-pace-calculator" },
    { title: "Activity to Steps Converter", href: "/tools/activity-to-steps-converter" },
  ],
  "steps-vs-pedometer-plus-plus-comparison": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
  "fitness-wrapped-yearly-recap-steps-insights": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Activity to Steps Converter", href: "/tools/activity-to-steps-converter" },
  ],
  "how-to-export-gpx-from-apple-watch-workouts": [
    { title: "GPX Viewer", href: "/tools/gpx-viewer" },
    { title: "Running Pace Calculator", href: "/tools/running-pace-calculator" },
    { title: "Distance Equivalent Calculator", href: "/tools/distance-equivalent-calculator" },
  ],
  "welcome-to-steps-blog": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "how-many-steps-in-a-mile": [
    { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "benefits-of-walking-everyday": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
  ],
  "walking-vs-running-for-weight-loss": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
  ],
  "how-many-steps-in-a-mile-running": [
    { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "10000-steps-weight-loss-results": [
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
  "calories-burned-on-treadmill": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
  "calories-burned-hiking": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "best-step-counter-app-iphone-2026": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Activity to Steps Converter", href: "/tools/activity-to-steps-converter" },
  ],
  "best-pedometer-app-iphone-2026": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
  "how-long-to-walk-10000-steps": [
    { title: "Walking Time Calculator", href: "/tools/walking-time-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "how-many-steps-burn-500-calories": [
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
  ],
  "how-many-steps-in-30-minutes-walking": [
    { title: "Walking Time Calculator", href: "/tools/walking-time-calculator" },
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
  ],
  "how-many-steps-to-lose-a-pound": [
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
  "does-walking-reduce-belly-fat": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
  ],
  "morning-walk-benefits": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
  ],
  "walking-after-eating-benefits": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
  ],
  "how-far-is-5000-steps": [
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
    { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
  ],
  "20000-steps-calories-burned": [
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
    { title: "Step Distance Calculator", href: "/tools/step-distance-calculator" },
  ],
  "calories-burned-walking-one-mile": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Steps Per Mile Calculator", href: "/tools/steps-per-mile-calculator" },
  ],
  "benefits-of-walking-30-minutes-a-day": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
  ],
  "how-many-steps-to-burn-100-calories": [
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
  ],
  "walking-30-minutes-a-day-results": [
    { title: "Walking Calories Calculator", href: "/tools/walking-calories-calculator" },
    { title: "Weight Loss Walking Calculator", href: "/tools/weight-loss-walking-calculator" },
  ],
  "average-steps-per-day-for-women": [
    { title: "Daily Step Goal Calculator", href: "/tools/daily-step-goal-calculator" },
    { title: "Steps to Calories Calculator", href: "/tools/steps-to-calories-calculator" },
  ],
};
