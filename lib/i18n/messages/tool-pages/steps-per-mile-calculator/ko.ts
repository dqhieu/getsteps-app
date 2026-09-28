import type { StepsPerMileCalculatorMessages } from "./en";

const ko: StepsPerMileCalculatorMessages = {
  meta: {
    title: "1마일은 몇 걸음인가요? 계산기 [무료]",
    description:
      "1마일은 몇 걸음인가요? 키와 페이스에 따라 약 2,000–2,500걸음이에요. 나에게 맞는 마일당, km당 걸음을 걷기와 러닝 표와 함께 받아요.",
    keywords: [
      "마일당 걸음",
      "km당 걸음",
      "1마일은 몇 걸음",
      "1마일 걸음 수",
      "1킬로미터 걸음",
      "보폭 계산기",
      "걷기 마일당 걸음",
      "걸음 마일 변환",
      "마일 걸음 변환",
    ],
    ogTitle: "1마일은 몇 걸음인가요? 계산기 [무료]",
    ogDescription:
      "1마일은 몇 걸음인가요? 키에 따라 2,000–2,500걸음이에요. 나에게 맞는 마일당, km당 걸음을 받아요.",
    ogImageAlt: "마일당 걸음 계산기",
  },
  hero: {
    title: "1마일은 몇 걸음인가요?",
    subtitle:
      "1마일은 몇 걸음인가요? 대부분 성인은 약 2,000–2,500걸음이에요. 키를 입력하면 마일당, km당 걸음을 받아요.",
  },
  resultCta: {
    headline: "실제 마일당 걸음을 알아봐요",
    description:
      "Steps는 실제 걸음과 거리를 자동으로 기록해서, 추정이 아니라 진짜 페이스와 보폭을 보여줘요.",
  },
  stickyCta: "Steps로 걸음을 기록해요",
  calculator: {
    yourInformation: "내 정보",
    height: "키",
    gender: "성별",
    male: "남성",
    female: "여성",
    stepLength: "예상 보폭: {cm} {inches}",
    cmUnit: "{value} cm",
    inchesUnit: "({value}인치)",
    stepsPerMile: "마일당 걸음",
    stepsPerKm: "킬로미터당 걸음",
    stepsUnit: "걸음",
    referenceTitle: "거리 참고 표",
    referenceSubtitle: "내 보폭으로 흔한 거리에 필요한 걸음",
    colDistance: "거리",
    colSteps: "걸음",
    distances: ["1 km", "1마일", "5 km", "5마일", "10 km", "하프 마라톤", "마라톤"],
  },
  info: {
    title: "마일당 걸음을 계산하는 방법",
    intro:
      "마일당 걸음은 보폭에 따라 달라지고, 보폭은 주로 키와 성별이 정해요. 키가 큰 사람은 보통 보폭이 길어 같은 거리를 더 적은 걸음으로 가요.",
    formulaTitle: "공식",
    stepLengthLabel: "보폭:",
    stepLengthFormula: "키 (cm) × 0.415 (남성) 또는 0.413 (여성)",
    perKmLabel: "km당 걸음:",
    perKmFormula: "100,000 ÷ 보폭 (cm)",
    perMileLabel: "마일당 걸음:",
    perMileFormula: "km당 걸음 × 1.609",
    heightTitle: "키별 평균 걸음",
    heights: [
      { height: "5'0\" (152 cm):", steps: "약 2,500걸음/마일" },
      { height: "5'6\" (168 cm):", steps: "약 2,300걸음/마일" },
      { height: "6'0\" (183 cm):", steps: "약 2,100걸음/마일" },
      { height: "6'6\" (198 cm):", steps: "약 1,950걸음/마일" },
    ],
    faqTitle: "자주 묻는 질문",
  },
  faq: [
    {
      question: "1마일은 몇 걸음인가요?",
      answer:
        "평균적으로 1마일은 약 2,000–2,500걸음이에요. 정확한 수는 키와 보폭에 따라 달라요. 키가 작은 사람은 걸음이 더 많고, 큰 사람은 더 적어요.",
    },
    {
      question: "1킬로미터는 몇 걸음인가요?",
      answer:
        "평균적으로 1킬로미터는 약 1,250–1,550걸음이에요. 1킬로미터가 약 0.62마일이라서, 1마일의 걸음 중 대략 62%예요.",
    },
    {
      question: "걷는 속도가 마일당 걸음에 영향을 주나요?",
      answer:
        "네, 조금 줘요. 더 빨리 걷거나 달리면 보폭이 길어져 마일당 걸음이 줄어요. 다만 대부분의 걷기 속도에서는 차이가 비교적 작아요.",
    },
    {
      question: "실제 보폭은 어떻게 재나요?",
      answer:
        "아는 거리(예를 들어 100피트)를 평소 페이스로 걷고 걸음을 세요. 거리를 걸음 수로 나누면 평균 보폭이 나와요. 시작점을 표시하고 10걸음 걸어 이동 거리를 재도 돼요.",
    },
  ],
  cta: {
    title: "걸음과 거리를 기록해요",
    description:
      "Steps 앱을 받아서 iPhone과 Apple Watch에서 걸음과 거리를 자동으로 기록하세요.",
  },
  howTo: {
    name: "마일당 걸음을 계산하는 방법",
    description:
      "키와 걷기 페이스를 입력하면, 나에게 맞는 1마일과 1킬로미터의 걸음을 추정해요.",
    steps: [
      {
        name: "키를 입력해요",
        text: "키가 큰 사람은 한 걸음에 더 가므로, 키가 결과를 조정해요.",
      },
      {
        name: "페이스를 골라요",
        text: "빠른 걷기와 러닝은 느린 걷기보다 보폭이 길어요. 알고 싶은 페이스를 고르세요.",
      },
      {
        name: "마일당 걸음 추정을 읽어요",
        text: "결과에는 그 페이스의 개인 보폭을 기준으로 마일당 걸음과 킬로미터당 걸음이 나와요.",
      },
    ],
  },
};

export default ko;
