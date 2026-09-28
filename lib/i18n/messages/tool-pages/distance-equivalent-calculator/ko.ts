import type { DistanceEquivalentCalculatorMessages } from "./en";

const ko: DistanceEquivalentCalculatorMessages = {
  meta: {
    title: "거리 환산 계산기 — km, 마일, 미터, 걸음",
    description:
      "러닝 거리를 킬로미터, 마일, 미터, 야드 사이에서 바꿔요. 걷기, 조깅, 러닝의 환산 걸음, 예상 시간, 칼로리도 볼 수 있어요.",
    keywords: [
      "거리 환산",
      "km 마일 계산기",
      "1마일 몇 걸음",
      "거리 환산 계산기",
      "미터 마일 변환",
      "러닝 거리 계산기",
      "러닝 km 마일",
    ],
    ogTitle: "거리 환산 계산기 — km, 마일, 미터, 걸음",
    ogDescription:
      "러닝 거리를 킬로미터, 마일, 미터, 야드 사이에서 바꿔요. 걷기, 조깅, 러닝의 환산 걸음, 예상 시간, 칼로리도 볼 수 있어요.",
    ogImageAlt: "거리 환산 계산기",
  },
  hero: {
    title: "거리 환산 계산기",
    subtitle: "km, 마일, 미터, 야드 사이를 바꾸고 걸음, 시간, 칼로리도 확인해요.",
  },
  intro:
    "킬로미터, 마일, 미터, 야드 중 하나로 거리를 넣으면 모든 환산이 바로 나와요. 예상 걸음, 걷거나 달리는 시간, 대략적인 칼로리도 포함해요.",
  calculator: {
    enterDistance: "거리를 넣어요",
    placeholder: "5",
    units: {
      km: "km",
      miles: "마일",
      meters: "미터",
      yards: "야드",
    },
    quick: {
      "5k": "5K",
      "10k": "10K",
      half: "하프 마라톤",
      marathon: "마라톤",
    },
    equivalents: "거리 환산",
    kilometers: "킬로미터",
    miles: "마일",
    meters: "미터",
    yards: "야드",
    feet: "피트",
    approxSteps: "대략적인 걸음",
    context: "러닝 기준",
    activity: "활동",
    speed: "속도",
    time: "시간",
    calories: "칼로리",
    activities: {
      walking: "걷기",
      jogging: "조깅",
      running: "러닝",
    },
    speeds: {
      walking: "5 km/h",
      jogging: "8 km/h",
      running: "11 km/h",
    },
    calorieNote: "칼로리는 70 kg인 사람 기준 추정이에요",
  },
  faqTitle: "거리 환산 질문",
  faq: [
    {
      question: "1마일은 몇 km인가요?",
      answer:
        "1마일 = 1.60934 km예요. 반대로 1 km = 0.62137마일이에요. 5마일 러닝은 약 8.05 km, 10 km 러닝은 약 6.21마일이에요.",
    },
    {
      question: "1마일은 몇 걸음인가요?",
      answer:
        "키와 보폭에 따라 약 2,000–2,500걸음이에요. 평균은 마일당 약 2,112걸음(km당 1,312걸음)이에요. 키가 크고 보폭이 긴 사람은 걸음이 더 적어요.",
    },
    {
      question: "마라톤은 몇 km인가요?",
      answer:
        "마라톤은 정확히 42.195 km(26.219마일)예요. 하프 마라톤은 21.0975 km(13.109마일)예요. 이 거리는 World Athletics가 정해요.",
    },
    {
      question: "5K는 몇 걸음인가요?",
      answer:
        "대부분 약 6,250–7,500걸음이에요. 평균 보폭 1,312걸음/km이면 5K는 약 6,560걸음이에요. 키, 걸음걸이, 지면에 따라 달라져요.",
    },
    {
      question: "1마일을 걷는 데 얼마나 걸리나요?",
      answer:
        "보통 걷기 5 km/h면 마일당 약 12분이에요. 빠른 걷기 6 km/h면 약 10분이에요. 걷기에 익숙한 사람은 9분 안에도 걸어요.",
    },
  ],
  cta: {
    title: "오늘 얼마나 걸었는지는 Steps 앱에서 그대로 볼 수 있어요.",
    description: "한 걸음, 1킬로미터, 소모한 칼로리까지 모두 자동이에요.",
  },
  howTo: {
    name: "거리 단위를 바꾸는 방법",
    description:
      "아무 단위(km, 마일, 미터, 야드, 걸음)로 거리를 넣으면 모든 환산과 걷기 시간, 칼로리가 나와요.",
    steps: [
      {
        name: "시작 단위를 골라요",
        text: "킬로미터, 마일, 미터, 야드, 피트, 걸음. 어떤 단위든 입력할 수 있어요.",
      },
      {
        name: "거리 값을 넣어요",
        text: "거리를 입력해요.",
      },
      {
        name: "모든 환산을 확인해요",
        text: "모든 단위와 함께, 평균 체중과 페이스인 사람의 걷기 시간과 칼로리 추정을 돌려줘요.",
      },
    ],
  },
};

export default ko;
