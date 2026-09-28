import type { BodyFatCalculatorMessages } from "./en";

const ko: BodyFatCalculatorMessages = {
  meta: {
    title: "체지방률 계산기 — Navy 방식, 장비 없이",
    description:
      "정확한 Navy 방식으로 체지방률을 계산해요. 치수만 넣으면 돼요. 체지방 저울이나 헬스장 장비는 필요 없어요.",
    keywords: [
      "체지방률 계산기",
      "체지방 계산기",
      "Navy 체지방",
      "체지방률 계산 방법",
      "남성 체지방률",
      "여성 체지방률",
    ],
    ogTitle: "체지방률 계산기 — Navy 방식",
    ogDescription:
      "정확한 Navy 방식으로 체지방률을 계산해요. 치수만 넣으면 돼요. 체지방 저울이나 헬스장 장비는 필요 없어요.",
    ogImageAlt: "체지방률 계산기",
  },
  hero: {
    title: "체지방률 계산기",
    subtitle: "Navy 방식으로 체지방률을 정확하게 계산해요. 줄자만 있으면 돼요.",
  },
  intro:
    "성별, 키, 둘레를 넣으면 검증된 Navy 공식으로 체지방률을 계산해요. 체지방 저울이나 헬스장 장비는 필요 없어요.",
  calculator: {
    measurements: "내 치수",
    gender: "성별",
    male: "남성",
    female: "여성",
    height: "키",
    weight: "체중",
    circumferenceUnit: "둘레 단위",
    waist: "허리 둘레",
    neck: "목 둘레",
    hip: "엉덩이 둘레",
    measurementHint: "둘레는 가장 가는 곳에서 재요.",
    invalidTitle: "치수를 확인해 주세요",
    invalidDetail: "허리 둘레가 목 둘레보다 커야 해요.",
    yourBodyFat: "내 체지방",
    percent: "{value}%",
    fatMass: "지방량",
    leanMass: "제지방량",
    massKg: "{value} kg",
    massLbs: "{value} lbs",
    recommendedSteps: "권장 하루 걸음",
    categoriesTitle: "체지방 구간",
    categoriesSubtitleMale: "American Council on Exercise(ACE) 남성 분류",
    categoriesSubtitleFemale: "American Council on Exercise(ACE) 여성 분류",
    categoryColumn: "구간",
    rangeColumn: "체지방 범위",
    categories: {
      essential: "필수 지방",
      athletic: "운동선수",
      fitness: "피트니스",
      acceptable: "보통",
      obese: "비만",
    },
  },
  info: {
    title: "체지방률 이해하기",
    intro:
      "체지방률은 BMI만으로 보는 것보다 몸 상태를 더 정확하게 말해요. BMI는 체중과 키만 보지만, 체지방률은 지방량과 제지방량(근육, 뼈, 수분)을 나눠요.",
    faqTitle: "자주 묻는 질문",
  },
  faq: [
    {
      question: "건강한 체지방률은 얼마인가요?",
      answer:
        "남성은 피트니스 14–17%, 보통 18–24%가 건강한 범위예요. 여성은 피트니스 21–24%, 보통 25–31%예요. 선수 수준은 더 낮아서 남성 6–13%, 여성 14–20%가 흔해요.",
    },
    {
      question: "Navy 방식은 얼마나 정확한가요?",
      answer:
        "Navy 방식은 DEXA와 보통 3–4% 차이예요. 장비 없이 줄자로 재는 방법 중 가장 정확한 편이에요. 꼼꼼하고 늘 같은 방식으로 재면 정확도가 올라가요.",
    },
    {
      question: "허리는 어디서 재나요?",
      answer:
        "가장 가는 곳, 보통 배꼽이나 그 바로 위에서 재요. 줄자는 바닥과 평행하게 하고, 평소처럼 숨을 내쉰 뒤에 재요. 배를 들이밀지 않아요.",
    },
    {
      question: "체지방과 BMI는 어떻게 다른가요?",
      answer:
        "BMI는 키와 체중만 써서 지방과 근육을 구분하지 못해요. 근육이 많은 선수는 BMI가 높아도 체지방은 낮을 수 있어요. 체지방률이 실제 체성분과 건강 위험을 더 정확히 보여 줘요.",
    },
    {
      question: "체지방은 어떻게 줄이나요?",
      answer:
        "규칙적인 걷기나 유산소, 근력 운동, 적당한 칼로리 적자를 같이 해요. 목표는 주당 지방 0.5–1 kg이에요. 하루 10,000걸음 이상은 힘든 운동 없이 소모를 늘리는 이어가기 좋은 방법이에요.",
    },
  ],
  cta: {
    title: "건강 기록을 이어가요",
    description: "체성분 목표를 Steps의 하루 걸음 기록과 함께 가져가요.",
  },
  howTo: {
    name: "체지방률을 계산하는 방법 (Navy 방식)",
    description: "목, 허리, 엉덩이 둘레와 키, 성별을 넣으면 Navy 공식으로 체지방률을 추정해요.",
    steps: [
      {
        name: "목을 재요",
        text: "부드러운 줄자로 목울대 바로 아래 목 둘레를 재요.",
      },
      {
        name: "허리를 재요",
        text: "남성은 배꼽 높이, 여성은 허리에서 가장 가는 곳이에요.",
      },
      {
        name: "엉덩이를 재요 (여성만)",
        text: "여성은 엉덩이에서 가장 넓은 곳도 더해요.",
      },
      {
        name: "둘레와 키를 넣어요",
        text: "모든 둘레와 키를 입력해요. 미터법과 야드파운드법을 지원해요.",
      },
      {
        name: "체지방률과 구간을 확인해요",
        text: "추정 체지방률과 ACE 구간(필수 지방, 운동선수, 피트니스, 평균, 비만)을 보여 줘요.",
      },
    ],
  },
};

export default ko;
