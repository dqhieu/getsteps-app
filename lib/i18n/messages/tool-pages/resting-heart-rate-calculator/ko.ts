import type { RestingHeartRateCalculatorMessages } from "./en";

const ko: RestingHeartRateCalculatorMessages = {
  meta: {
    title: "안정 시 심박수 계산기 — 체력 수준과 Karvonen 존",
    description:
      "안정 시 심박수로 체력 수준과 개인 Karvonen 심박수 훈련 존을 계산해요. 나이와 측정값을 넣으면 결과가 바로 나와요.",
    keywords: [
      "안정 시 심박수 계산기",
      "나이별 안정 시 심박수",
      "정상 안정 시 심박수",
      "심박수 예비 계산기",
      "Karvonen 공식",
      "안정 시 심박수 체력 수준",
    ],
    ogTitle: "안정 시 심박수 계산기 — 체력 수준과 Karvonen 존",
    ogDescription:
      "안정 시 심박수로 체력 수준과 개인 Karvonen 심박수 훈련 존을 계산해요. 나이와 측정값을 넣으면 결과가 바로 나와요.",
    ogImageAlt: "안정 시 심박수 계산기",
  },
  hero: {
    title: "안정 시 심박수 계산기",
    subtitle:
      "심폐 체력 수준을 확인하고, 심박수 예비에 맞춘 훈련 존을 받아 보세요.",
  },
  intro:
    "나이, 성별, 측정한 안정 시 심박수를 넣으면 체력 구분과 지방 연소, 유산소 지구력, 최고 수행에 맞춘 Karvonen 존이 나와요.",
  calculator: {
    yourDetails: "내 정보",
    gender: "성별",
    male: "남성",
    female: "여성",
    age: "나이",
    years: { one: "살", other: "살" },
    restingHeartRate: "안정 시 심박수",
    bpm: "bpm",
    rhrHint:
      "팁: 아침에 일어나기 전에 재세요. 5분 조용히 앉은 뒤 60초 동안 박동을 세세요.",
    calculate: "계산",
    fitnessLevel: "체력 수준",
    hrMax: "최대 심박수",
    hrr: "심박수 예비",
    zonesTitle: "Karvonen 훈련 존",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "선수",
      excellent: "매우 좋음",
      good: "좋음",
      above_average: "평균 이상",
      average: "평균",
      below_average: "평균 이하",
      poor: "낮음",
    },
    zones: {
      activeRecovery: { name: "적극적 회복", purpose: "회복" },
      fatBurn: { name: "지방 연소", purpose: "지방 연소" },
      aerobicEndurance: { name: "유산소 지구력", purpose: "유산소" },
      lactateThreshold: { name: "젖산 역치", purpose: "역치" },
      vo2Max: { name: "VO2 max", purpose: "VO2 max" },
    },
  },
  info: {
    title: "안정 시 심박수 질문",
  },
  faq: [
    {
      question: "정상 안정 시 심박수는 얼마예요?",
      answer:
        "대부분의 성인에게 정상 안정 시 심박수는 분당 60–100회(bpm)예요. 훈련된 선수는 심장이 더 강하고 한 번에 더 많은 피를 보내서 40–60 bpm인 경우가 많아요. 60 bpm 미만(서맥)은 체력이 좋은 사람에게 정상일 수 있지만, 증상이 있으면 의사에게 확인해야 해요.",
    },
    {
      question: "안정 시 심박수는 어떻게 재요?",
      answer:
        "아침에 침대에서 일어나기 전에 재세요. 5분 가만히 누운 뒤 손목(요골동맥)이나 목(경동맥)에 손가락 두 개를 대고 60초 동안 박동을 세세요. 커피, 운동, 스트레스 직후에는 재지 마세요. 연속 사흘 아침의 평균이 가장 정확해요.",
    },
    {
      question: "체력이 좋아지면 안정 시 심박수는 낮아져요?",
      answer:
        "네. 규칙적인 심폐 운동은 심장 근육을 강하게 해서 한 박동에 더 많은 피를 보내요. 일회박출량이 커지면 같은 양의 피를 보내는 데 필요한 박동 수가 줄어요. 꾸준한 유산소 훈련은 시작 체력에 따라 몇 달에 걸쳐 안정 시 심박수를 보통 5–25 bpm 낮춰요.",
    },
    {
      question: "안정 시 심박수와 최대 심박수는 뭐가 달라요?",
      answer:
        "안정 시 심박수는 완전히 쉴 때의 분당 박동 수예요. 최대 심박수는 전력일 때 심장이 낼 수 있는 가장 높은 분당 박동 수이고, 220에서 나이를 빼서 추정해요. 심박수 예비는 그 차이이고, 운동 중 심장이 움직일 수 있는 범위예요. Karvonen 방법은 심박수 예비로 개인 훈련 존을 계산해요.",
    },
    {
      question: "안정 시 심박수는 어떻게 낮춰요?",
      answer:
        "가장 효과적인 방법은 규칙적인 유산소 운동이에요. 걷기, 가벼운 달리기, 자전거, 수영처럼 중간 강도를 유지하는 운동을 주 3–5회 하세요. 충분한 잠(7–9시간), 스트레스 관리(명상, 깊은 호흡), 카페인과 술을 줄이는 것, 건강한 체중도 안정 시 심박수를 낮춰요. 꾸준히 하면 변화는 보통 4–8주 안에 느껴져요.",
    },
  ],
  cta: {
    title: "심장 건강을 높이세요",
    description: "하루 걸음을 기록해서 시간이 지나며 심폐 건강을 높이세요.",
  },
  howTo: {
    name: "안정 시 심박수로 체력 구분을 확인하는 방법",
    description:
      "나이와 안정 시 심박수를 넣으면 심폐 체력 수준과 Karvonen 훈련 존이 나와요.",
    steps: [
      {
        name: "나이와 안정 시 심박수를 입력하세요",
        text: "안정 시 심박수는 아침 일찍, 카페인 전에, 아직 침대에 누운 채로 재세요.",
      },
      {
        name: "체력 구분을 읽으세요",
        text: "나이별 안정 시 심박수 범위로 선수에서 낮음까지 체력 위치를 보여 줘요.",
      },
      {
        name: "Karvonen 존을 읽으세요",
        text: "안정 시 심박수에 맞춘 심박수 훈련 존 5개도 함께 나와요.",
      },
    ],
  },
};

export default ko;
