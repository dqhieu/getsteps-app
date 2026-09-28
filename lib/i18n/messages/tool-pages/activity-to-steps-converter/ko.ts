import type { ActivityToStepsMessages } from "./en";

const ko: ActivityToStepsMessages = {
  meta: {
    title: "활동을 걸음으로 환산 — 어떤 운동이든 걸음으로 변환",
    description:
      "사이클링, 수영, 요가, 로잉 등 10가지가 넘는 활동을 걸음으로 환산해요. 걸음 챌린지와 활동량 기록에 맞아요.",
    keywords: [
      "활동 걸음 환산",
      "운동을 걸음으로 변환",
      "자전거 걸음 환산",
      "수영 걸음 환산",
      "걸음 환산 계산기",
      "걷기 외 걸음",
    ],
    ogTitle: "활동을 걸음으로 환산 — 어떤 운동이든 걸음으로 변환",
    ogDescription:
      "사이클링, 수영, 요가, 로잉 등 10가지가 넘는 활동을 걸음으로 환산해요. 걸음 챌린지와 활동량 기록에 맞아요.",
    ogImageAlt: "활동 걸음 환산",
  },
  hero: {
    title: "활동을 걸음으로 환산",
    subtitle:
      "사이클링, 수영, 요가 같은 활동을 걸음 챌린지나 목표에 맞는 걸음으로 바꿔요.",
    intro:
      "활동을 고르고 시간을 넣으면 환산 걸음이 바로 나와요. 10가지 활동을 MET 값으로 정확하게 환산해요.",
  },
  appCta: {
    headline: "모든 활동을 걸음으로 자동 계산해요",
    description:
      "Steps는 하루 움직임을 백그라운드에서 기록하고, 직접 입력하지 않아도 활동을 걸음으로 바꿔요.",
  },
  stickyCta: "Steps로 걸음 기록하기",
  calculator: {
    yourActivity: "내 활동",
    activityType: "활동 종류",
    duration: "시간(분)",
    intensity: "강도",
    intensities: {
      low: "낮음",
      medium: "보통",
      high: "높음",
    },
    calorieToggle: "칼로리 계산용(선택)",
    bodyWeight: "체중",
    equivalentSteps: "환산 걸음",
    equivalentFor: "{activity} {duration} min의 환산 걸음",
    walkingTime: "걷기 시간",
    minutes: "{minutes} min",
    distance: "거리",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "칼로리",
    kcal: "kcal",
    metNote: "MET(대사 당량) 값으로 계산해요",
    activities: {
      cycling: "사이클링",
      swimming: "수영",
      elliptical: "일립티컬",
      rowing: "로잉",
      jump_rope: "줄넘기",
      dancing: "댄스",
      yoga: "요가",
      basketball: "농구",
      hiking: "하이킹",
      pilates: "필라테스",
    },
  },
  info: {
    title: "환산 걸음이 나오는 방식",
  },
  faq: [
    {
      question: "활동 걸음은 어떻게 계산하나요?",
      answer:
        "이 환산은 MET(대사 당량)를 써요. 운동 과학에서 쓰는 강도의 기준이에요. 보통 페이스의 걷기는 MET 3.5이고, 분당 약 100걸음이에요. 각 활동의 MET를 걷기와 비교해 걸음으로 바꿔요. 예를 들어 MET 7.0(걷기의 두 배)이면 분당 환산 걸음도 두 배예요.",
    },
    {
      question: "사이클링은 걷기 걸음과 같나요?",
      answer:
        "맞아요. 중간 강도로 30분 사이클링(MET 약 6.8)은 페이스에 따라 약 7,000–9,000걸음이에요. 고강도 경기 사이클링은 30분에 14,000걸음이 넘을 수 있어요. 만보기가 이걸 실제 걸음으로 세지는 않지만, 걸음 챌린지에서는 공정한 비교가 돼요.",
    },
    {
      question: "수영도 걸음으로 치나요?",
      answer:
        "수영은 대부분 앱과 만보기에서 걸음으로 기록되지 않아요. 그래도 중간 강도 수영 30분(MET 약 7.0)은 대략 6,000–8,000걸음이에요. 활동을 직접 넣을 수 있는 챌린지라면 이 환산으로 수영을 인정받을 수 있어요.",
    },
    {
      question: "왜 활동을 걸음으로 바꾸나요?",
      answer:
        "직장이나 앱의 걸음 챌린지는 걸음으로 진행을 재요. 그런데 사이클링, 수영, 요가는 위치 기록 걸음이 적게 쌓여요. 걷기가 아닌 활동을 걸음으로 바꾸면 공정하게 참여하고, 하루 활동량을 보고, 다른 운동의 부담을 같은 기준으로 비교할 수 있어요.",
    },
  ],
  related: [
    { title: "걸음을 칼로리로 바꾸는 계산기", href: "/tools/steps-to-calories-calculator" },
    { title: "하루 걸음 목표 계산기", href: "/tools/daily-step-goal-calculator" },
    { title: "걷기 칼로리 계산기", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "건강 기록을 이어가요",
    description: "Steps 앱으로 하루 활동과 걸음을 자동으로 기록해요.",
  },
  howTo: {
    name: "활동을 걸음으로 환산하는 방법",
    description:
      "활동 종류, 시간, 강도를 넣으면 하루 목표에 해당하는 걸음을 알 수 있어요.",
    steps: [
      {
        name: "활동을 골라요",
        text: "사이클링, 수영, 요가, 근력 운동 등 수십 가지를 지원해요.",
      },
      {
        name: "시간과 강도를 넣어요",
        text: "분 단위 시간과 가벼움, 보통, 격렬 중 강도를 골라요.",
      },
      {
        name: "환산 걸음을 확인해요",
        text: "MET 값으로 환산 걸음을 돌려줘요. 실제로 걷지 않아도 하루 걸음 목표에 닿을 수 있어요.",
      },
    ],
  },
};

export default ko;
