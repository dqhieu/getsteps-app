import type { StepDistanceCalculatorMessages } from "./en";

const ko: StepDistanceCalculatorMessages = {
  meta: {
    title: "걸음 거리 계산기: 1 km ≈ 1,300걸음",
    description:
      "1 km ≈ 1,300걸음. 1마일 ≈ 2,100걸음. 5,000걸음 ≈ 3.8 km / 2.4 mi. 키와 보폭으로 맞추는 무료 걸음 거리 계산기예요.",
    keywords: [
      "km 걸음",
      "걸음 km 변환",
      "1km 몇 걸음",
      "2km 몇 걸음",
      "3km 몇 걸음",
      "6500걸음 km",
      "걸음 거리 계산기",
      "보폭 계산기",
      "걸음 거리 변환",
      "거리 걸음 변환",
      "걷기 거리 계산기",
      "보폭 길이 계산",
      "km당 걸음 수",
      "걸음 마일 변환",
    ],
    ogTitle: "걸음 거리 계산기: 1 km ≈ 1,300걸음",
    ogDescription:
      "1 km ≈ 1,300걸음 · 5,000걸음 ≈ 3.8 km / 2.4 mi · 10,000걸음 ≈ 7.6 km / 4.7 mi. 키에 맞춘 무료 걸음 거리 계산기예요.",
    ogImageAlt: "걸음 거리 계산기",
  },
  hero: {
    title: "걸음 거리 계산기",
    subtitle:
      "걸음을 거리로, 거리를 걸음으로 바꿔요. 키, 성별, 보폭에 맞춘 결과를 받아요.",
  },
  resultCta: {
    headline: "실제 걸음과 거리를 기록해요",
    description:
      "Steps는 걸음을 자동으로 세고, 매일 실제 거리, 페이스, 칼로리를 보여줘요. 직접 입력할 필요가 없어요.",
  },
  stickyCta: "Steps로 걸음을 기록해요",
  calculator: {
    yourInformation: "내 정보",
    gender: "성별",
    male: "남성",
    female: "여성",
    age: "나이",
    years: "세",
    height: "키",
    stepLength: "예상 보폭: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value}인치)",
    stepsToDistance: "걸음에서 거리",
    distanceToSteps: "거리에서 걸음",
    numberOfSteps: "걸음 수",
    stepsPlaceholder: "걸음 수를 입력하세요",
    distance: "거리",
    distancePlaceholder: "거리를 입력하세요",
    miles: "마일",
    result: "결과",
    kmValue: "{distance} km",
    milesParen: "({distance}마일)",
    stepsValue: "{steps}걸음",
    estimatedCalories: "예상 칼로리",
    kcalValue: "{calories} kcal",
    walkingTime: "걷기 시간",
    hoursMinutes: "{hours}시간 {minutes} min",
    minutesOnly: "{minutes} min",
    referenceTitle: "빠른 참고 표",
    referenceSubtitle: "내 프로필 기준의 흔한 걸음 목표와 같은 거리",
    colSteps: "걸음",
    colDistance: "거리",
    colCalories: "칼로리",
    colTime: "시간",
    miParen: "({distance} mi)",
    kcalSuffix: " kcal",
  },
  info: {
    title: "보폭을 계산하는 방법",
    intro:
      "보폭은 한 걸음에 얼마나 가는지를 정하는 핵심이에요. 키, 성별, 나이를 반영한 연구 기반 공식으로 보폭을 추정해요.",
    formulaTitle: "공식",
    maleLabel: "남성:",
    maleFormula: "보폭 = 키 (cm) × 0.415",
    femaleLabel: "여성:",
    femaleFormula: "보폭 = 키 (cm) × 0.413",
    ageLabel: "나이 보정:",
    ageFormula: "40세 이후에는 10년마다 보폭이 약 1% 줄어요",
    average:
      "성인의 평균 보폭은 60–80 cm(24–31인치)예요. 걷는 속도, 지형, 체력도 실제 보폭에 영향을 줘요.",
    faqTitle: "자주 묻는 질문",
  },
  faq: [
    {
      question: "1마일은 몇 걸음인가요?",
      answer:
        "평균적으로 1마일은 약 2,000–2,500걸음이에요. 보폭에 따라 달라요. 보폭이 긴 사람은 같은 거리를 더 적은 걸음으로 커버해요.",
    },
    {
      question: "1킬로미터는 몇 걸음인가요?",
      answer:
        "평균적으로 1킬로미터는 약 1,250–1,550걸음이에요. 위 계산기에 내 정보를 넣으면 맞춤 추정을 받아요.",
    },
    {
      question: "하루 10,000걸음이면 충분한가요?",
      answer:
        "하루 10,000걸음은 흔한 목표이고, 걷기로 약 5마일(8 km)이에요. 연구에 따르면 하루 7,000–8,000걸음만으로도 건강에 뚜렷한 도움이 있어요. 가장 좋은 목표는 도전되면서도 도달할 수 있는 목표예요.",
    },
    {
      question: "1.8 km는 몇 걸음인가요?",
      answer:
        "1.8 km는 평균 성인(보폭 약 77 cm) 기준 약 2,340걸음이에요. 더 정확히 보려면 위 계산기에 키를 입력하세요.",
    },
    {
      question: "3.5 km는 몇 걸음인가요?",
      answer:
        "3.5 km는 평균 성인 기준 약 4,550걸음이에요. 키가 큰 사람은 보폭이 길어 걸음이 적고, 작은 사람은 더 많아요.",
    },
    {
      question: "이 계산기는 얼마나 정확한가요?",
      answer:
        "신체 특성을 바탕으로 합리적인 추정을 해요. 가장 정확하게 보려면 아는 거리를 걷고 걸음을 세어 실제 보폭을 재세요.",
    },
  ],
  conversionsTitle: "빠른 변환 표",
  conversions: [
    "10,000걸음을 마일로",
    "5,000걸음을 마일로",
    "1마일의 걸음",
    "1 km의 걸음",
    "걸음에서 km 표",
    "걸음에서 마일 표",
    "걸음에서 칼로리 표",
  ],
  allConversions: "모든 변환 →",
  stepsToKm: {
    title: "걸음에서 km: 걸음은 몇 킬로미터인가요?",
    intro:
      "{phrase} 변환은 보폭에 따라 달라지고, 보폭은 키에 따라 달라져요. 빠른 기준은 평균 성인 {ruleA}, 그리고 {ruleB}예요.",
    phrase: "걸음을 km로",
    ruleA: "1,000걸음 ≈ 0.75 km",
    ruleB: "1 km ≈ 1,300걸음",
    cards: [
      { value: "0.75 km", label: "1,000걸음" },
      { value: "3.8 km", label: "5,000걸음" },
      { value: "7.5 km", label: "10,000걸음" },
      { value: "15 km", label: "20,000걸음" },
    ],
    guide:
      "평균값이에요. 실제 거리는 키와 보폭에 따라 달라요. 맞춤 변환은 위 계산기를 쓰거나, 키별 표가 있는 {link} 안내를 보세요.",
    guideLink: "1킬로미터는 몇 걸음인지",
  },
  kmTable: {
    title: "km에서 걸음 빠른 참고",
    intro:
      "흔한 거리의 대략적인 걸음 수예요. 평균 보폭 0.75 m(평균 성인) 기준이에요.",
    colDistance: "거리",
    colSteps: "걸음(대략)",
    colTime: "걷기 시간",
    rows: [
      { distance: "0.5 km", steps: "650", time: "약 6 min" },
      { distance: "1 km", steps: "1,300", time: "약 12 min" },
      { distance: "1.5 km", steps: "1,950", time: "약 18 min" },
      { distance: "1.8 km", steps: "2,340", time: "약 22 min" },
      { distance: "2 km", steps: "2,600", time: "약 24 min" },
      { distance: "2.5 km", steps: "3,250", time: "약 30 min" },
      { distance: "3 km", steps: "3,900", time: "약 36 min" },
      { distance: "3.5 km", steps: "4,550", time: "약 42 min" },
      { distance: "4 km", steps: "5,200", time: "약 48 min" },
      { distance: "5 km(~3.1마일)", steps: "6,500", time: "약 60 min" },
      { distance: "6 km", steps: "7,800", time: "약 72 min" },
      { distance: "7 km", steps: "9,100", time: "약 84 min" },
      { distance: "8 km(~5마일)", steps: "10,400", time: "약 96 min" },
      { distance: "10 km(~6.2마일)", steps: "13,000", time: "약 2시간" },
      { distance: "12 km", steps: "15,600", time: "약 2시간 24 min" },
      { distance: "15 km", steps: "19,500", time: "약 3시간" },
      { distance: "20 km", steps: "26,000", time: "약 4시간" },
    ],
    footnote:
      "평균 보폭(약 0.75 m)과 보통 걷기 페이스(약 5 km/h) 기준이에요. 키와 성별에 맞춘 결과는 위 계산기를 쓰세요.",
  },
  stepsTable: {
    title: "걸음에서 km와 마일 빠른 참고",
    intro:
      "흔한 걸음 수의 대략적인 km와 마일 거리예요. 평균 보폭 0.75 m 기준이에요.",
    colSteps: "걸음",
    colKm: "Km",
    colMiles: "마일",
    rows: [
      { steps: "1,000", km: "0.75 km", miles: "0.47 mi" },
      { steps: "2,000", km: "1.5 km", miles: "0.93 mi" },
      { steps: "2,500", km: "1.9 km", miles: "1.17 mi" },
      { steps: "3,000", km: "2.25 km", miles: "1.4 mi" },
      { steps: "5,000", km: "3.8 km", miles: "2.4 mi" },
      { steps: "6,000", km: "4.5 km", miles: "2.8 mi" },
      { steps: "6,500", km: "4.9 km", miles: "3.0 mi" },
      { steps: "7,000", km: "5.25 km", miles: "3.3 mi" },
      { steps: "7,500", km: "5.6 km", miles: "3.5 mi" },
      { steps: "10,000", km: "7.5 km", miles: "4.7 mi" },
      { steps: "12,000", km: "9.0 km", miles: "5.6 mi" },
      { steps: "13,000", km: "9.75 km", miles: "6.05 mi" },
      { steps: "15,000", km: "11.25 km", miles: "7.0 mi" },
      { steps: "20,000", km: "15 km", miles: "9.3 mi" },
    ],
    footnote:
      "거리는 평균 성인 보폭을 가정해요. 키가 큰 사람은 한 걸음에 더 가고, 작은 사람은 덜 가요. 키에 맞춘 결과는 위 계산기를 쓰세요.",
  },
  cta: {
    title: "걸음을 자동으로 기록해요",
    description:
      "Steps 앱을 받아서 iPhone과 Apple Watch에서 하루 걸음, 거리, 칼로리를 자동으로 기록하세요.",
  },
  howTo: {
    name: "걸음을 거리로(또는 거리를 걸음으로) 바꾸는 방법",
    description:
      "키와 걸음 수 또는 거리를 입력해요. 계산기는 개인 보폭으로 변환을 추정해요.",
    steps: [
      {
        name: "키를 입력해요",
        text: "키로 평균 보폭을 추정해요. 걷기 보폭은 여성이 대략 키 × 0.413, 남성이 키 × 0.415예요.",
      },
      {
        name: "걸음 또는 거리를 입력해요",
        text: "입력을 걸음으로 바꾸면 거리가, 거리로 바꾸면 같은 걸음 수가 나와요. 미터법과 야드파운드법을 모두 지원해요.",
      },
      {
        name: "변환 값을 읽어요",
        text: "결과에는 변환 값과 미터 및 피트의 예상 보폭이 나와요.",
      },
    ],
  },
};

export default ko;
