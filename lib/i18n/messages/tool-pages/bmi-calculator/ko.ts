import type { BmiCalculatorMessages } from "./en";

const ko: BmiCalculatorMessages = {
  meta: {
    title: "BMI 계산기 — 체질량지수를 계산해요",
    description:
      "체질량지수(BMI)를 계산하고 건강한 체중 범위인지 확인해요. 건강 안내와 걸음 추천도 받을 수 있어요.",
    keywords: [
      "BMI 계산기",
      "체질량지수",
      "BMI 계산",
      "건강 체중 계산기",
      "BMI 표",
      "키에 맞는 체중",
      "BMI 분류",
      "건강한 BMI 범위",
    ],
    ogTitle: "BMI 계산기",
    ogDescription: "체질량지수(BMI)를 계산하고 건강한 체중 범위인지 확인해요.",
  },
  hero: {
    title: "BMI 계산기",
    subtitle: "체질량지수를 계산해 체중 구간을 알고, 나에게 맞는 건강 안내를 확인해요.",
  },
  calculator: {
    measurements: "내 수치",
    weight: "체중",
    height: "키",
    yourBmi: "내 BMI",
    healthyRange: "건강한 체중 범위",
    recommendedSteps: "권장 하루 걸음",
    aboveRange: "키 기준 건강한 체중 범위보다 {amount} 높아요.",
    belowRange: "키 기준 건강한 체중 범위보다 {amount} 낮아요.",
    categoriesTitle: "BMI 구간",
    categoriesSubtitle: "성인 WHO BMI 분류",
    categoryColumn: "구간",
    rangeColumn: "BMI 범위",
    categories: {
      underweight: "저체중",
      normal: "정상",
      overweight: "과체중",
      "obese-1": "비만 1단계",
      "obese-2": "비만 2단계",
      "obese-3": "비만 3단계",
    },
  },
  info: {
    title: "BMI 이해하기",
    intro:
      "체질량지수(BMI)는 키와 체중으로 체지방을 가늠하고 체중이 건강한 범위인지 보는 간단한 계산이에요. 체중 구간을 선별하는 도구로 널리 써요.",
    formulaTitle: "공식",
    formula: "BMI = 체중 (kg) ÷ 키 (m)²",
    exampleLabel: "예시:",
    example: "체중 70 kg, 키 1.75 m이면 BMI = 70 ÷ (1.75 × 1.75) = 22.9",
    faqTitle: "자주 묻는 질문",
  },
  faq: [
    {
      question: "건강한 BMI는 얼마인가요?",
      answer:
        "대부분의 성인은 18.5에서 24.9가 건강한 범위예요. 다만 BMI는 근육량, 골밀도, 지방 분포를 보지 않아서 건강을 보는 요소 중 하나일 뿐이에요.",
    },
    {
      question: "BMI는 누구에게나 정확한가요?",
      answer:
        "근육이 많은 운동선수, 고령자, 특정 체형에서는 정확하지 않을 수 있어요. 선별에는 유용하지만 다른 건강 지표와 함께 봐요.",
    },
    {
      question: "BMI를 어떻게 개선하나요?",
      answer:
        "건강한 범위 밖이라면 이어갈 수 있는 변화부터 해요. 매일 걷기 같은 규칙적인 활동, 균형 잡힌 식사, 충분한 잠이에요. 개인 조언은 의료 전문가와 상담해요.",
    },
    {
      question: "BMI에 따라 몇 걸음 걸어야 하나요?",
      answer:
        "건강한 BMI를 유지하려면 하루 10,000걸음을 목표로 해요. 체중을 줄이려면 12,000걸음 이상을 고려해요. 지금 수준에서 시작해 매주 1,000걸음씩 늘려요.",
    },
    {
      question: "어린이 BMI는 다른가요?",
      answer:
        "네. 어린이와 청소년의 BMI는 계산이 다르고, 나이와 성별 백분위와 비교해요. 이 계산기는 18세 이상 성인용이에요. 어린이는 소아과 의사와 상담해요.",
    },
  ],
  cta: {
    title: "건강 기록을 이어가요",
    description: "Steps 앱을 받아 하루 활동을 기록하고 더 건강한 체중으로 다가가요.",
  },
  howTo: {
    name: "BMI를 계산하는 방법",
    description:
      "체질량지수(BMI)는 키와 체중으로 체성분 구간을 추정해요. 성인 구간은 CDC 기준이에요.",
    steps: [
      {
        name: "키를 넣어요",
        text: "키를 센티미터 또는 피트/인치로 넣어요.",
      },
      {
        name: "체중을 넣어요",
        text: "체중을 킬로그램 또는 파운드로 넣어요.",
      },
      {
        name: "BMI와 구간을 확인해요",
        text: "BMI 값과 CDC 건강 구간(저체중, 정상, 과체중, 비만)을 짧은 설명과 함께 보여 줘요.",
      },
    ],
  },
};

export default ko;
