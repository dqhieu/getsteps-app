export interface ToolHowToStep {
  name: string;
  text: string;
}

export interface ToolHowToData {
  name: string;
  description: string;
  steps: ToolHowToStep[];
}

export const TOOL_HOW_TO: Record<string, ToolHowToData> = {
  "walking-time-calculator": {
    name: "How to use the walking time calculator",
    description:
      "Enter a distance and walking pace to get an estimated walking time in minutes — works for kilometers, miles, or a step count.",
    steps: [
      {
        name: "Enter the distance",
        text: "Type the distance you plan to walk. You can switch the unit between kilometers and miles, or enter a step count instead.",
      },
      {
        name: "Pick a walking pace",
        text: "Choose slow (3.2 km/h), normal (5 km/h), brisk (6.4 km/h), or fast (7.2 km/h). Normal is the default for a typical adult.",
      },
      {
        name: "Read your walking time",
        text: "The calculator returns the estimated minutes to cover the distance at each pace, plus a total step estimate.",
      },
    ],
  },
  "steps-to-calories-calculator": {
    name: "How to calculate calories burned from steps",
    description:
      "Enter your daily step count, body weight, and walking pace to estimate calories burned using MET values and standard step length.",
    steps: [
      {
        name: "Enter your step count",
        text: "Type the number of steps you took — for example, 10,000 for a typical daily goal.",
      },
      {
        name: "Enter your body weight",
        text: "Weight is the biggest factor in how many calories walking burns. Use kilograms or pounds.",
      },
      {
        name: "Pick your walking pace",
        text: "Choose the pace (slow, normal, brisk, or fast). The calculator uses the MET value for that pace to estimate energy burn.",
      },
      {
        name: "Read your calorie estimate",
        text: "The calculator returns total calories burned plus a per-mile and per-kilometer breakdown.",
      },
    ],
  },
  "step-distance-calculator": {
    name: "How to convert steps to distance (or distance to steps)",
    description:
      "Enter your height and either a step count or a distance. The calculator estimates the conversion based on your personal step length.",
    steps: [
      {
        name: "Enter your height",
        text: "Height is used to estimate your average step length. Stride length for walking is roughly 0.413 × height for women and 0.415 × height for men.",
      },
      {
        name: "Enter steps or distance",
        text: "Switch the input to steps to get a distance, or to distance to get an equivalent step count. Metric and imperial units are both supported.",
      },
      {
        name: "Read the converted value",
        text: "The result shows the conversion plus your estimated step length in meters and feet.",
      },
    ],
  },
  "steps-per-mile-calculator": {
    name: "How to calculate steps per mile",
    description:
      "Enter your height and walking pace to estimate how many steps are in a mile (and a kilometer) for you specifically.",
    steps: [
      {
        name: "Enter your height",
        text: "Taller people cover more ground per step, so height adjusts the result.",
      },
      {
        name: "Choose a pace",
        text: "Brisk walking and running have longer strides than slow walking. Pick the pace you care about.",
      },
      {
        name: "Read the steps per mile estimate",
        text: "The result shows steps per mile and steps per kilometer based on your personal stride length at that pace.",
      },
    ],
  },
  "daily-step-goal-calculator": {
    name: "How to find your daily step goal",
    description:
      "Enter age, sex, weight, height, activity level, and goal to get a personalized daily step target.",
    steps: [
      {
        name: "Enter your profile",
        text: "Fill in age, sex, weight, and height. The calculator uses these to estimate baseline energy expenditure.",
      },
      {
        name: "Pick your current activity level",
        text: "Select sedentary, lightly active, moderately active, or very active. Be honest — the goal adjusts from where you are.",
      },
      {
        name: "Choose your goal",
        text: "Options include general fitness, weight loss, cardiovascular health, and longevity. Each uses evidence-based step targets.",
      },
      {
        name: "Read your daily step target",
        text: "The calculator returns a personalized daily step goal, plus a weekly target and a progression plan if you are starting from a lower baseline.",
      },
    ],
  },
  "bmi-calculator": {
    name: "How to calculate your BMI",
    description:
      "Body Mass Index (BMI) estimates body composition category from height and weight, using the CDC adult categories.",
    steps: [
      {
        name: "Enter your height",
        text: "Enter height in centimeters or feet/inches.",
      },
      {
        name: "Enter your weight",
        text: "Enter weight in kilograms or pounds.",
      },
      {
        name: "Read your BMI and category",
        text: "The calculator returns your BMI value and the CDC health category (underweight, healthy, overweight, obese) with a short description of each.",
      },
    ],
  },
  "heart-rate-zones-calculator": {
    name: "How to find your heart rate zones",
    description:
      "Enter age or max heart rate (and optionally resting heart rate) to get your 5 training zones using the Karvonen method.",
    steps: [
      {
        name: "Enter your age",
        text: "Age is used to estimate max heart rate (220 - age) if you do not enter one directly.",
      },
      {
        name: "Optionally enter resting heart rate",
        text: "If you provide resting heart rate, the calculator uses the Karvonen method for more personalized zones.",
      },
      {
        name: "Read your 5 zones",
        text: "The calculator shows zones 1-5 with BPM ranges and training purpose (recovery, endurance, tempo, threshold, interval).",
      },
    ],
  },
  "running-pace-calculator": {
    name: "How to use the running pace calculator",
    description:
      "Convert between pace, speed, and time — enter any two of distance, pace, or finish time, and the calculator fills in the third.",
    steps: [
      {
        name: "Pick the unknown you want",
        text: "Choose whether you want pace, time, or distance. You will provide the other two values.",
      },
      {
        name: "Enter your two known values",
        text: "Enter distance and time to get pace, or pace and distance to get finish time, etc. Supports minutes per km and minutes per mile.",
      },
      {
        name: "Read the result",
        text: "The calculator returns the third value in both metric and imperial units, plus a pace chart comparing your result to common race paces.",
      },
    ],
  },
  "body-fat-calculator": {
    name: "How to calculate body fat percentage (Navy method)",
    description:
      "Enter neck, waist, hip circumference, height, and sex to estimate body fat percentage using the U.S. Navy formula.",
    steps: [
      {
        name: "Measure your neck",
        text: "Measure around your neck just below the Adam's apple with a soft measuring tape.",
      },
      {
        name: "Measure your waist",
        text: "For men, measure around the navel. For women, measure at the narrowest point of the waist.",
      },
      {
        name: "Measure your hips (women only)",
        text: "For women, add a measurement at the widest point of the hips.",
      },
      {
        name: "Enter measurements and height",
        text: "Type all measurements plus your height. The calculator supports metric and imperial units.",
      },
      {
        name: "Read your body fat percentage and category",
        text: "The result gives your estimated body fat percentage plus the ACE category (essential fat, athletes, fitness, average, obese).",
      },
    ],
  },
  "tdee-calculator": {
    name: "How to calculate your Total Daily Energy Expenditure",
    description:
      "Enter age, sex, weight, height, and activity level to get your BMR and TDEE using the Mifflin-St Jeor equation.",
    steps: [
      {
        name: "Enter age, sex, weight, and height",
        text: "Required inputs for the Mifflin-St Jeor formula, which is the most accurate for the general population.",
      },
      {
        name: "Pick your activity level",
        text: "Sedentary (desk job), lightly active (1-3 days/week exercise), moderately active (3-5 days), very active (6-7 days), or extra active.",
      },
      {
        name: "Read BMR and TDEE",
        text: "The calculator returns your Basal Metabolic Rate (calories to stay alive at rest) and Total Daily Energy Expenditure (calories to maintain weight).",
      },
    ],
  },
  "macro-calculator": {
    name: "How to calculate your daily macros",
    description:
      "Enter your stats and goal to get daily protein, carbs, and fat targets in grams and calories.",
    steps: [
      {
        name: "Enter your stats",
        text: "Age, sex, weight, height, and activity level — same inputs as the TDEE calculator.",
      },
      {
        name: "Pick your goal",
        text: "Cutting (lose weight), maintaining, or bulking (gain muscle). Each goal uses different macro ratios.",
      },
      {
        name: "Read your macro targets",
        text: "The calculator returns grams and calories for protein, carbs, and fat, plus total daily calories.",
      },
    ],
  },
  "walking-calories-calculator": {
    name: "How to calculate calories burned walking",
    description:
      "Enter your walking duration, pace, and body weight to estimate calories burned using MET values.",
    steps: [
      {
        name: "Enter duration or distance",
        text: "You can switch between entering how long you walked or how far. Both give the same final estimate.",
      },
      {
        name: "Pick your walking pace",
        text: "Slow, normal, brisk, or fast. Faster pace uses a higher MET value and burns more calories per minute.",
      },
      {
        name: "Enter your body weight",
        text: "Weight is the biggest multiplier on calorie burn.",
      },
      {
        name: "Read your calorie estimate",
        text: "The calculator returns calories burned, average calories per minute, and the MET value used.",
      },
    ],
  },
  "weight-loss-walking-calculator": {
    name: "How to calculate walking requirements for weight loss",
    description:
      "Enter current weight, goal weight, and timeline to get how many steps, miles, and minutes per day to walk to hit your target.",
    steps: [
      {
        name: "Enter current and goal weight",
        text: "The difference determines how many calories you need to burn through walking.",
      },
      {
        name: "Pick a timeline",
        text: "Choose a realistic weeks-to-goal duration. Aggressive timelines require more daily walking.",
      },
      {
        name: "Read your daily walking plan",
        text: "The calculator returns daily steps, miles, and minutes of walking needed. It also warns if the timeline requires an unsustainable deficit.",
      },
    ],
  },
  "calorie-deficit-calculator": {
    name: "How to calculate a calorie deficit for weight loss",
    description:
      "Enter your TDEE (or stats) and desired rate of loss per week to get a daily calorie target.",
    steps: [
      {
        name: "Enter your TDEE or stats",
        text: "Either paste a TDEE you already know or enter your age, sex, weight, height, and activity level.",
      },
      {
        name: "Pick your rate of weight loss",
        text: "0.25 to 1 kg per week is the sustainable range. Higher rates risk muscle loss.",
      },
      {
        name: "Read your daily calorie target",
        text: "The calculator returns the daily calorie target and the size of the deficit vs maintenance.",
      },
    ],
  },
  "water-intake-calculator": {
    name: "How to calculate daily water intake",
    description:
      "Enter weight, activity level, and climate to estimate daily water needs in liters or ounces.",
    steps: [
      {
        name: "Enter your body weight",
        text: "Water needs scale with body size. Enter weight in kilograms or pounds.",
      },
      {
        name: "Pick your activity level",
        text: "Add extra fluid if you exercise, sweat heavily, or live in a hot climate.",
      },
      {
        name: "Read your daily water target",
        text: "The calculator returns daily water in liters and ounces, plus a glasses-per-day breakdown.",
      },
    ],
  },
  "activity-to-steps-converter": {
    name: "How to convert activities to equivalent steps",
    description:
      "Enter an activity type, duration, and intensity to get the equivalent step count for your daily goal.",
    steps: [
      {
        name: "Pick an activity",
        text: "Cycling, swimming, yoga, strength training, and dozens more are supported.",
      },
      {
        name: "Enter duration and intensity",
        text: "Duration in minutes plus a light/moderate/vigorous intensity selector.",
      },
      {
        name: "Read equivalent steps",
        text: "The calculator returns the equivalent step count based on MET values, helping you hit a daily step goal even if you didn't actually walk.",
      },
    ],
  },
  "resting-heart-rate-calculator": {
    name: "How to check your resting heart rate fitness category",
    description:
      "Enter age and resting heart rate to see your cardiovascular fitness level and Karvonen training zones.",
    steps: [
      {
        name: "Enter age and resting heart rate",
        text: "Measure RHR first thing in the morning, before caffeine, while still lying in bed.",
      },
      {
        name: "Read your fitness category",
        text: "The calculator places you on a fitness scale from athlete to poor based on age-normed RHR ranges.",
      },
      {
        name: "Read your Karvonen zones",
        text: "Also returns 5 heart rate training zones personalized to your RHR.",
      },
    ],
  },
  "pace-to-speed-converter": {
    name: "How to convert running pace to speed (or speed to pace)",
    description:
      "Enter any value — minutes per kilometer, minutes per mile, km/h, or mph — and get the others.",
    steps: [
      {
        name: "Pick the unit you know",
        text: "Choose the unit you have a value for (for example, min/km).",
      },
      {
        name: "Enter the value",
        text: "Type the pace or speed.",
      },
      {
        name: "Read the conversions",
        text: "All four units update together — min/km, min/mile, km/h, mph.",
      },
    ],
  },
  "distance-equivalent-calculator": {
    name: "How to convert between distance units",
    description:
      "Enter a distance in any unit (km, miles, meters, yards, steps) to get all the equivalents, plus walking time and calories.",
    steps: [
      {
        name: "Pick the source unit",
        text: "Kilometers, miles, meters, yards, feet, or steps — any unit works as input.",
      },
      {
        name: "Enter the distance value",
        text: "Type the distance.",
      },
      {
        name: "Read all equivalents",
        text: "The calculator returns every unit, plus estimated walking time and calories for someone of average weight and pace.",
      },
    ],
  },
  "race-time-predictor": {
    name: "How to predict a race finish time",
    description:
      "Enter distance and either a pace or a target finish time to get the missing value.",
    steps: [
      {
        name: "Enter the race distance",
        text: "Pick a common race (5K, 10K, half marathon, marathon) or enter a custom distance.",
      },
      {
        name: "Enter pace or target time",
        text: "Provide either — the calculator fills in the other.",
      },
      {
        name: "Read your predicted time or required pace",
        text: "The result shows the predicted finish time plus split breakdowns for common race distances.",
      },
    ],
  },
  "marathon-pace-predictor": {
    name: "How to predict your marathon time",
    description:
      "Enter a recent race distance and time to predict your finish time for a marathon (and 5K, 10K, half).",
    steps: [
      {
        name: "Enter a known race distance and time",
        text: "Use a recent, hard effort — 5K, 10K, half marathon, or any distance you've raced recently.",
      },
      {
        name: "Read your predicted times",
        text: "Using the Riegel formula, the calculator predicts your finish times for 5K, 10K, half marathon, and marathon distances.",
      },
    ],
  },
  "training-pace-zones": {
    name: "How to get your running training pace zones",
    description:
      "Enter a recent race distance and time to get 5 personalized training pace zones for easy runs, tempo, threshold, and intervals.",
    steps: [
      {
        name: "Enter a recent race result",
        text: "A hard-effort 5K, 10K, or half marathon time.",
      },
      {
        name: "Read your 5 training zones",
        text: "The calculator returns recovery, endurance, tempo, threshold, and interval paces in min/km and min/mile.",
      },
    ],
  },
  "vo2-max-calculator": {
    name: "How to estimate your VO2 max",
    description:
      "Estimate VO2 max from resting and max heart rate, or from the Cooper 12-minute run test.",
    steps: [
      {
        name: "Pick your input method",
        text: "Either heart rate method (age + resting HR) or Cooper test (distance covered in 12 minutes).",
      },
      {
        name: "Enter the values",
        text: "Provide age and resting heart rate, or the distance covered in 12 minutes of all-out running.",
      },
      {
        name: "Read your VO2 max estimate",
        text: "The calculator returns an estimated VO2 max in ml/kg/min plus your fitness percentile for your age and sex.",
      },
    ],
  },
  "gpx-viewer": {
    name: "How to view a GPX file online",
    description:
      "Upload any GPX file and see its route on an interactive map with distance, duration, pace, and elevation stats.",
    steps: [
      {
        name: "Drop your GPX file",
        text: "Drag a .gpx file into the browser, or click to select one from your device.",
      },
      {
        name: "See the map and stats",
        text: "The viewer renders the route on an interactive map with total distance, elevation gain, duration, and average pace.",
      },
      {
        name: "Browse waypoints and elevation",
        text: "Hover the map or the elevation chart to see speed and altitude at each point.",
      },
    ],
  },
};
