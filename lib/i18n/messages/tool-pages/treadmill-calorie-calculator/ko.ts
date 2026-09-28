import type { TreadmillCalorieCalculatorMessages } from "./en";

const ko: TreadmillCalorieCalculatorMessages = {
  meta: {
    title: "트레드밀 칼로리 계산기: 경사까지 보는 무료 계산기",
    description:
      "속도, 경사, 체중으로 트레드밀 칼로리를 계산해요. 155 lb 성인은 평지 3 mph로 30 min에 약 120 cal, 경사 5%에서는 약 200 cal을 소모해요. ACSM 기반 무료 계산기예요.",
    keywords: [
      "트레드밀 칼로리 계산기",
      "트레드밀 칼로리 소모",
      "트레드밀 경사 칼로리 계산기",
      "트레드밀에서 소모하는 칼로리",
      "트레드밀 걷기 칼로리",
      "경사 트레드밀 칼로리",
      "12-3-30 칼로리",
      "ACSM 대사 공식",
      "트레드밀 MET",
    ],
    ogTitle: "트레드밀 칼로리 계산기: 경사까지 보는 무료 계산기",
    ogDescription:
      "속도, 경사, 체중, 시간으로 트레드밀 칼로리를 계산해요. ACSM 대사 공식을 쓰는 무료 계산기예요.",
    ogImageAlt: "트레드밀 칼로리 계산기",
  },
  hero: {
    title: "트레드밀 칼로리 계산기",
    subtitle:
      "속도, 경사, 체중, 시간으로 트레드밀에서 소모한 칼로리를 계산해요. ACSM 대사 공식을 써서 경사를 빠뜨리지 않고 반영해요.",
  },
  calculator: {
    session: "트레드밀 운동",
    weight: "체중",
    speed: "속도",
    incline: "경사: {percent}%",
    duration: "시간",
    minutes: "분",
    caloriesBurned: "소모 칼로리",
    kcalValue: "{value} kcal",
    inclineAdds:
      "경사 {grade}%는 같은 운동의 평지보다 {extra} kcal을 더해요 (평지 {flat} kcal).",
    met: "MET",
    distance: "거리",
    distanceValue: "{km} km / {mi} mi",
    estSteps: "예상 걸음",
    fatBurned: "소모한 지방",
    grams: "{value} g",
    equation: "ACSM {gait} 대사 공식을 사용해요 (VO₂ {vo2} ml/kg/min).",
    gaitWalking: "걷기",
    gaitRunning: "달리기",
    tableTitle: "경사별 칼로리",
    tableSubtitle: "체중, 속도, 시간은 같아요. 경사만 바뀌어요.",
    colIncline: "경사",
    colMet: "MET",
    colCalories: "칼로리",
    colVsFlat: "평지 대비",
    vsFlat: "+{percent}%",
  },
  resultCta: {
    headline: "실제로 소모한 칼로리를 기록해요",
    description:
      "Steps는 걸음을 백그라운드에서 세고, 매일 실제로 소모한 칼로리로 바꿔요. 직접 입력할 필요가 없어요.",
  },
  info: {
    title: "트레드밀 칼로리를 계산하는 방법",
    intro:
      "MET 값 하나로는 트레드밀 운동을 설명할 수 없어요. 경사가 모든 속도에서 에너지 소비를 바꾸기 때문이에요. ACSM 대사 공식은 속도와 경사로 산소 섭취량을 따로 추정한 뒤 칼로리로 환산해요.",
    formulaTitle: "공식",
    formulas: [
      { strong: "걷기 VO₂", rest: "= (0.1 × S) + (1.8 × S × G) + 3.5" },
      { strong: "달리기 VO₂", rest: "= (0.2 × S) + (0.9 × S × G) + 3.5" },
      {
        strong: "",
        rest: "S는 분당 미터 속도, G는 분수로 나타낸 경사예요 (5% = 0.05). VO₂ 단위는 ml/kg/min이에요.",
      },
      {
        strong: "MET",
        rest: "= VO₂ ÷ 3.5, kcal/min = MET × 3.5 × 체중(kg) ÷ 200",
      },
      {
        strong: "예시:",
        rest: "70 kg, 5 km/h, 경사 5%이면 VO₂는 19.3, 약 5.5 MET, 시간당 약 405 kcal이에요.",
      },
    ],
    note: "걷기 공식은 6.5 km/h 미만에, 달리기 공식은 그 이상에 적용해요. 대부분 여기서 빠른 걷기에서 가벼운 달리기로 넘어가요. 손잡이를 잡지 않은 상태를 가정한 추정치예요.",
  },
  faqTitle: "자주 묻는 질문",
  faq: [
    {
      question: "트레드밀 30분이면 칼로리를 얼마나 소모하나요?",
      answer:
        "70 kg(155 lb) 성인이 평지 벨트에서 5 km/h(3.1 mph)로 30분 걸으면 약 125칼로리예요. 경사를 5%로 올리면 같은 운동이 약 205칼로리, 10%에서는 285에 가까워요. 바꿀 수 있는 설정 가운데 경사의 영향이 가장 커요.",
    },
    {
      question: "경사는 정말 칼로리를 더 태우나요?",
      answer:
        "네, 꽤 많이요. 경사 1%마다 수평 이동에 수직 일이 더해져요. 걷기 속도에서 경사 5%는 평지보다 에너지 소비를 약 60% 높이고, 10%는 같은 속도와 시간에도 두 배 이상이 될 수 있어요.",
    },
    {
      question: "12-3-30은 칼로리를 얼마나 소모하나요?",
      answer:
        "12-3-30은 경사 12%, 3 mph, 30분이에요. 70 kg 성인이면 약 300칼로리이고, 평지에서 3 mph로 같은 30분을 걸으면 약 120칼로리예요. 일의 대부분은 경사가 해요. 전체 소모의 약 60%예요.",
    },
    {
      question: "트레드밀 자체의 칼로리 표시는 정확한가요?",
      answer:
        "보통은 아니에요. 대부분 기계는 기본 체중을 가정하고, 콘솔에 입력한 체중을 표시에 반영하지 않아요. 그래서 소모량을 15~25% 높게 보여주는 경우가 많아요. 실제 체중, 속도, 경사를 넣은 계산이 더 믿을 만해요.",
    },
    {
      question: "경사 걷기와 평지 달리기 중 어느 쪽이 칼로리를 더 소모하나요?",
      answer:
        "비슷해질 수 있지만 가파른 경사가 필요해요. 5 km/h에 경사 12% 걷기는 약 8.5 MET로, 평지 8 km/h 가벼운 달리기(8.6 MET)와 거의 같아요. 경사 10%에서는 7.7 MET라 조금 적어요. 경사 걷기의 장점은 관절 충격은 훨씬 낮으면서 에너지 소비는 비슷하다는 점이에요.",
    },
    {
      question: "손잡이를 잡아야 하나요?",
      answer:
        "칼로리 소모가 목적이면 잡지 않는 편이 좋아요. 손잡이에 체중 일부를 맡기면 실제 에너지 소비가 20~25% 줄 수 있어요. 가파른 경사일수록 더 그래요. 콘솔은 지지 없는 수치를 계속 보여줘요.",
    },
  ],
  cta: {
    title: "트레드밀 운동을 기록해요",
    description:
      "Steps 앱을 받아 걷기, 소모 칼로리, 변화를 자동으로 기록해요.",
  },
  sticky: "Steps로 걸음을 기록해요",
};

export default ko;
