import type { DailyStepGoalCalculatorMessages } from "./en";

const ko: DailyStepGoalCalculatorMessages = {
  meta: {
    title: "하루 걸음 목표 계산기 — 나에게 맞는 추천",
    description:
      "나이, 활동 수준, 건강 목표에 맞춘 하루 걸음 목표를 받아요. 매일 몇 걸음 걸으면 좋은지 확인해요.",
    keywords: [
      "하루 걸음 목표",
      "하루에 몇 걸음 걸어야 하나",
      "나이별 걸음 목표",
      "하루 권장 걸음",
      "맞춤 걸음 목표",
      "걸음 목표 계산기",
      "하루 걷기 목표",
      "체중 감량 걸음",
    ],
    ogTitle: "하루 걸음 목표 계산기",
    ogDescription: "나이, 활동 수준, 건강 목표에 맞춘 하루 걸음 목표를 받아요.",
    ogImageAlt: "하루 걸음 목표 계산기",
  },
  hero: {
    title: "하루 걸음 목표 계산기",
    subtitle: "나이, 현재 활동 수준, 건강 목표에 맞춘 하루 걸음을 추천해요.",
  },
  resultCta: {
    headline: "하루 걸음 목표를 자동으로 채워요",
    description:
      "Steps는 직접 적지 않아도 백그라운드에서 걸음을 세요. 위의 목표에 실제로 닿고, 습관이 이어져요.",
  },
  stickyCta: "Steps로 걸음 기록하기",
  calculator: {
    yourProfile: "내 프로필",
    age: "나이",
    years: "세",
    gender: "성별",
    male: "남성",
    female: "여성",
    activityLevel: "현재 활동 수준",
    activity: {
      sedentary: "거의 안 움직임",
      lightly_active: "가볍게 활동",
      active: "활동적",
      very_active: "매우 활동적",
    },
    healthGoal: "건강 목표",
    goals: {
      maintain: "건강 유지",
      lose_weight: "체중 감량",
      improve_fitness: "체력 향상",
      train_event: "행사 준비",
    },
    currentSteps: "현재 하루 걸음(선택)",
    currentStepsPlaceholder: "예: 5000",
    currentStepsHint: "평균 하루 걸음을 넣으면 추천이 더 나에게 맞아요",
    resultTitle: "추천 하루 걸음 목표",
    stepsValue: "{steps}걸음",
    perDay: "하루",
    weeklyGoal: "주간 목표",
    distancePerDay: "거리/일",
    caloriesPerDay: "칼로리/일",
    kmValue: "{distance} km",
    approxCalories: "~{calories}",
    planTitle: "8주 진행 계획",
    planSubtitle: "주간 이정표로 목표까지 조금씩 올려요",
    weekLabel: "{week}주차",
    tipsTitle: "목표에 닿는 방법",
    tips: {
      sedentary: [
        "점심시간에 10분 걷기부터 시작해요",
        "엘리베이터 대신 계단을 이용해요",
        "입구에서 멀리 주차해요",
      ],
      lightlyActive: [
        "아침 15분 걷기를 루틴에 더해요",
        "통화하면서 걸어요",
      ],
      loseWeight: [
        "걷기에 균형 잡힌 식사를 더하면 결과가 더 좋아요",
        "칼로리를 더 쓰려면 빠른 페이스를 유지해요",
      ],
      improveFitness: [
        "페이스는 시간을 두고 조금씩 올려요",
        "오르막이나 계단을 조금 넣어요",
      ],
      trainEvent: [
        "단계적으로 늘어나는 운동 계획을 따라요",
        "회복을 위해 쉬는 날을 넣어요",
      ],
      general: [
        "동기가 이어지게 매일 걸음을 기록해요",
        "같이 걷는 사람을 두면 빼먹기 어려워요",
      ],
    },
  },
  info: {
    title: "걸음 목표 이해하기",
    intro:
      "알맞은 목표는 상황에 따라 달라요. 10,000걸음은 흔한 기준이지만, 연구에 따르면 건강 효과는 나이와 체력에 따라 다른 걸음 수에서 시작해요.",
    ageTitle: "나이별 권장 걸음",
    ages: [
      { label: "어린이와 청소년 (18세 미만):", steps: "하루 12,000–15,000걸음" },
      { label: "성인 (18–64세):", steps: "하루 10,000–12,000걸음" },
      { label: "65세 이상:", steps: "하루 7,000–10,000걸음" },
    ],
    faqTitle: "자주 묻는 질문",
  },
  faq: [
    {
      question: "하루에 10,000걸음이 필요한가요?",
      answer:
        "아니에요. 10,000걸음은 마법의 숫자가 아니에요. 최근 연구는 뚜렷한 건강 효과가 하루 약 7,000–8,000걸음에서 시작한다고 보여요. 핵심은 지금보다 더 움직이는 거예요.",
    },
    {
      question: "체중을 줄이려면 몇 걸음인가요?",
      answer:
        "체중 감량은 균형 잡힌 식사와 함께 하루 12,000걸음 이상을 목표로 해요. 하루에 400–600칼로리를 추가로 쓸 수 있어요. 매일 정확한 숫자보다 꾸준함이 더 중요해요.",
    },
    {
      question: "하루 걸음은 어떻게 늘리나요?",
      answer:
        "현재 평균에 매주 1,000걸음을 더하는 것부터 해요. 걸으면서 회의하고, 멀리 주차하고, 엘리베이터 대신 계단을 쓰고, 낮 동안 짧은 걷기 휴식을 넣어요.",
    },
    {
      question: "목표에 못 미치면 어떻게 하나요?",
      answer:
        "활동이 늘어나면 그것만으로도 도움이 돼요. 목표가 너무 크면 이어갈 수 있는 숫자로 낮춰요. 가장 좋은 목표는 꾸준히 지키는 목표예요. 완벽보다 진행을 봐요.",
    },
  ],
  cta: {
    title: "걸음 목표를 기록해요",
    description: "Steps 앱으로 하루 목표를 정하고, 진행을 보고, 걷는 습관을 만들어요.",
  },
  howTo: {
    name: "하루 걸음 목표를 찾는 방법",
    description: "나이, 성별, 체중, 키, 활동 수준, 목표를 넣으면 나에게 맞는 하루 걸음이 나와요.",
    steps: [
      {
        name: "프로필을 넣어요",
        text: "나이, 성별, 체중, 키를 채워요. 계산기는 이 값으로 기본 에너지 소모를 추정해요.",
      },
      {
        name: "현재 활동 수준을 골라요",
        text: "거의 안 움직임, 가벼운 활동, 보통, 매우 활동적 중에서 골라요. 솔직하게 골라요. 목표는 지금 위치에서 조정돼요.",
      },
      {
        name: "목표를 골라요",
        text: "일반 체력, 체중 감량, 심혈관 건강, 장수가 있어요. 각각 근거가 있는 걸음 목표를 써요.",
      },
      {
        name: "하루 목표를 확인해요",
        text: "나에게 맞는 하루 걸음, 주간 목표, 더 낮은 출발점이면 진행 계획까지 돌려줘요.",
      },
    ],
  },
};

export default ko;
