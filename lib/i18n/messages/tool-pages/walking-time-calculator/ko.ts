import type { WalkingTimeCalculatorMessages } from "./en";

const ko: WalkingTimeCalculatorMessages = {
  meta: {
    title: "걷기 시간 계산기: 1 km ≈ 12 min, 1마일 ≈ 18 min",
    description:
      "1 km는 얼마나 걸리나요? 약 12 min. 1마일은? 약 18 min. 5 km는? 약 60 min. 느린, 보통, 빠른, 매우 빠른 페이스로 어떤 거리든 계산하는 무료 계산기예요.",
    keywords: [
      "걷기 시간",
      "걷기 시간 계산기",
      "5km 걷는 시간",
      "8km 걷는 시간",
      "1마일 걷는 시간",
      "걷기 거리 시간",
      "걷기 페이스 계산기",
      "10000걸음 걷는 시간",
      "걷기 소요 시간 계산기",
    ],
    ogTitle: "걷기 시간 계산기: 1 km ≈ 12 min, 1마일 ≈ 18 min",
    ogDescription:
      "보통 페이스로 1 km ≈ 12 min, 1마일 ≈ 18 min, 5 km ≈ 60 min. 어떤 거리든 쓰는 무료 계산기예요.",
    ogImageAlt: "걷기 시간 계산기",
  },
  hero: {
    title: "걷기 시간 계산기",
    subtitle:
      "5 km, 8 km, 28마일은 걷는 데 얼마나 걸리나요? 거리를 넣으면 느린, 보통, 빠른, 매우 빠른 페이스의 시간이 나와요.",
  },
  resultCta: {
    headline: "모든 걷기를 자동으로 기록해요",
    description:
      "Steps는 시간, 거리, 페이스를 백그라운드에서 기록해서 실제 걷기가 어떻게 쌓이는지 보여 줘요.",
  },
  stickyCta: "Steps로 걸음을 기록해요",
  calculator: {
    title: "걷기 시간 계산하기",
    distance: "거리",
    miles: "마일",
    walkingSpeed: "걷기 속도",
    speeds: {
      slow: { label: "느림", description: "3.2 km/h", inline: "느린" },
      normal: { label: "보통", description: "5.0 km/h", inline: "보통" },
      brisk: { label: "빠름", description: "6.4 km/h", inline: "빠른" },
      fast: { label: "매우 빠름", description: "7.2 km/h", inline: "매우 빠른" },
    },
    includeBreaks: "휴식 포함 (30 min마다 5 min)",
    walkingTime: "걸은 시간",
    breaksDetail: "걷기 {walking} + 휴식 {breaks} min",
    distanceLabel: "거리",
    stepsLabel: "걸음",
    caloriesLabel: "칼로리",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "~{calories}",
    referenceTitle: "걷기 시간 참고",
    referenceSubtitle: "자주 가는 거리를 {pace} 페이스({speed} km/h)로 걷는 시간",
    colDistance: "거리",
    colTime: "시간",
    hoursMinutes: "{hours}시간 {minutes}분",
    hoursOnly: "{hours}시간",
    minutesOnly: "{minutes} min",
    distances: ["1 km", "1마일", "2 km", "3 km", "5 km", "5마일", "10 km", "하프 마라톤"],
  },
  info: {
    title: "걷기 속도 안내",
    intro:
      "속도는 체력, 지면, 목적에 따라 달라요. 페이스를 알면 걷기를 계획하기 쉬워요.",
    paceTitle: "페이스 안내",
    paces: [
      {
        label: "느림 (3.2 km/h / 2 mph):",
        text: "느긋한 산책. 회복이나 대화에 알맞아요",
      },
      {
        label: "보통 (5 km/h / 3.1 mph):",
        text: "대부분 성인의 평균 페이스",
      },
      {
        label: "빠름 (6.4 km/h / 4 mph):",
        text: "심박을 올리는 목적 있는 걷기",
      },
      {
        label: "매우 빠름 (7.2 km/h / 4.5 mph):",
        text: "가벼운 달리기에 가까운 아주 빠른 걷기",
      },
    ],
    faqTitle: "자주 묻는 질문",
  },
  faq: [
    {
      question: "1 km를 걷는 데 얼마나 걸리나요?",
      answer:
        "보통 페이스(5 km/h)로 1 km는 약 12분이에요. 느린 페이스(3.2 km/h)는 약 19분, 빠른 페이스(6.4 km/h)는 약 9분에 끝나요. 평균 성인에게 약 1,300걸음이에요.",
    },
    {
      question: "5 km를 걷는 데 얼마나 걸리나요?",
      answer:
        "보통 페이스(5 km/h)로 5 km는 약 60분이에요. 빠른 페이스(6.4 km/h)면 약 47분에 걸을 수 있어요.",
    },
    {
      question: "1마일을 걷는 데 얼마나 걸리나요?",
      answer:
        "1마일은 보통 페이스로 약 15–20분이에요. 빠르게 걷는 사람은 12–15분에 끝낼 수 있어요.",
    },
    {
      question: "10,000걸음을 걷는 데 얼마나 걸리나요?",
      answer:
        "10,000걸음은 약 7–8 km(4–5마일)예요. 보통 페이스면 약 1시간 20–40분이에요. 한 번에 다 걸을 필요는 없어요. 하루에 나눠도 돼요.",
    },
    {
      question: "7 km를 걷는 데 얼마나 걸리나요?",
      answer:
        "보통 페이스(5 km/h)로 7 km는 약 84분(1시간 24분)이에요. 빠른 페이스(6.4 km/h)면 약 66분에 끝낼 수 있어요. 평균 성인에게 약 9,100걸음이에요.",
    },
    {
      question: "8 km를 걷는 데 얼마나 걸리나요?",
      answer:
        "8 km는 보통 페이스(5 km/h)로 약 96분(1시간 36분), 빠른 페이스로 약 75분이에요. 약 10,400걸음이에요.",
    },
    {
      question: "걷기 시간에 휴식을 넣어야 하나요?",
      answer:
        "30분이 넘는 걷기에서는 짧은 휴식이 힘을 유지하고 피로를 덜어 줘요. 이 옵션을 켜면 걷는 30분마다 5분 휴식을 더할 수 있어요.",
    },
  ],
  precomputedTitle: "미리 계산한 걷기 시간",
  precomputed: [
    "10,000걸음 걷는 시간",
    "5마일 걷는 시간",
    "3마일 걷는 시간",
    "1마일 걷는 시간",
  ],
  allConversions: "모든 환산 →",
  cta: {
    title: "걷기를 자동으로 기록해요",
    description:
      "Steps 앱을 받아 걷기 시간, 거리, 페이스를 자동으로 기록해요.",
  },
  howTo: {
    name: "걷기 시간 계산기를 쓰는 방법",
    description:
      "거리와 페이스를 넣으면 분 단위 예상 시간이 나와요. 킬로미터, 마일, 걸음 수에 쓸 수 있어요.",
    steps: [
      {
        name: "거리를 입력해요",
        text: "걸을 거리를 적어요. 킬로미터와 마일을 바꾸거나 걸음 수를 넣을 수 있어요.",
      },
      {
        name: "페이스를 골라요",
        text: "느림(3.2 km/h), 보통(5 km/h), 빠름(6.4 km/h), 매우 빠름(7.2 km/h) 중에서 골라요. 보통은 일반적인 성인의 기본값이에요.",
      },
      {
        name: "걷기 시간을 읽어요",
        text: "그 거리를 각 페이스로 걷는 예상 분과 총 걸음 추정이 나와요.",
      },
    ],
  },
};

export default ko;
