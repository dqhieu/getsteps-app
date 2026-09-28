import type { WalkingCaloriesMessages } from "./en";

const ko: WalkingCaloriesMessages = {
  meta: {
    title: "걷기 칼로리 계산기: 체중과 페이스별 무료 계산",
    description:
      "걷기 칼로리: 155 lb 성인은 3.5 mph로 30 min에 약 150 cal을 소모해요. 체중, 속도, 시간, 거리, 걸음으로 바로 추정하는 무료 계산기예요.",
    keywords: [
      "걷기 칼로리 계산기",
      "걷기 소모 칼로리 계산",
      "걷기 MET",
      "걷기 5km/h MET",
      "시속 5km 걷기 MET",
      "빠른 걷기 MET",
      "보통 페이스 걷기 MET",
      "중간 페이스 걷기 MET",
      "걷기 소모 칼로리",
      "걷기 1km 칼로리",
      "걷기 4km/h MET",
      "걷기 4.5km/h MET",
      "걷기 6km/h MET",
      "걷기 칼로리 계산 공식 MET",
    ],
    ogTitle: "걷기 칼로리 계산기: 체중과 페이스별 무료 계산",
    ogDescription:
      "155 lb 성인은 3.5 mph로 30 min에 약 150 cal을 소모해요. 체중, 속도, 시간, 거리, 걸음으로 바로 결과가 나오는 무료 계산기예요.",
    ogImageAlt: "걷기 칼로리 계산기",
  },
  hero: {
    title: "걷기 칼로리 계산기와 MET",
    subtitle:
      "MET로 속도별 걷기 칼로리를 계산해요. 2 km/h의 느린 산책부터 7 km/h가 넘는 빠른 걷기까지예요. MET 전체 표도 있어요.",
  },
  appCta: {
    headline: "실제로 소모한 칼로리를 기록해요",
    description:
      "Steps는 걸음을 백그라운드에서 세고, 매일 실제로 소모한 칼로리로 바꿔요. 직접 입력할 필요가 없어요.",
  },
  stickyCta: "Steps로 걸음을 기록해요",
  calculator: {
    calculateBy: "계산 기준",
    distance: "거리",
    time: "시간",
    weight: "체중",
    duration: "시간",
    minutes: "분",
    miles: "마일",
    walkingSpeed: "걷기 속도",
    speeds: {
      slow: { label: "느림", description: "3.2 km/h (2 mph)" },
      normal: { label: "보통", description: "5 km/h (3.1 mph)" },
      brisk: { label: "빠름", description: "6.4 km/h (4 mph)" },
      fast: { label: "매우 빠름", description: "7.2 km/h (4.5 mph)" },
    },
    caloriesBurned: "소모 칼로리",
    walkingTime: "걸은 시간",
    distanceResult: "거리",
    steps: "걸음",
    fatBurned: "소모한 지방",
    metValue: "MET 값",
    metTableTitle: "걷기 속도와 MET",
    metTableIntro:
      "MET는 활동의 에너지 소비를 나타내요. MET가 높을수록 소모 칼로리가 커요.",
    columns: {
      speed: "속도",
      kmh: "km/h",
      mph: "mph",
      met: "MET",
      description: "설명",
    },
    paceDescriptions: {
      slow: "느긋한 산책",
      normal: "평균 페이스",
      brisk: "빠른 걷기",
      fast: "아주 빠른 걷기",
    },
  },
  info: {
    title: "걷기 칼로리를 계산하는 방법",
    intro:
      "소모 칼로리는 MET로 계산해요. 연구에 기반한 방법이라 체중, 시간, 강도를 반영해요.",
    formulaTitle: "공식",
    formula: "칼로리 = MET × 체중(kg) × 지속 시간(시간)",
    metLabel: "MET:",
    metText: "운동 대사당량. 안정 시 대비 에너지 소비를 나타내요",
    exampleLabel: "예시:",
    example:
      "70 kg인 사람이 보통 페이스(MET 3.5)로 1시간 걸으면 3.5 × 70 × 1 = 245칼로리예요",
    faqTitle: "자주 묻는 질문",
  },
  faq: [
    {
      question: "1마일을 걸으면 칼로리를 얼마나 소모하나요?",
      answer:
        "1마일 걷기는 대부분 약 80–100칼로리예요. 정확한 값은 체중과 속도에 따라 달라요. 체중이 무거울수록 마일당 소모가 커요.",
    },
    {
      question: "30분 걷기는 칼로리를 얼마나 소모하나요?",
      answer:
        "보통 페이스로 30분 걸으면 대부분 성인이 약 100–150칼로리예요. 빠르게 걸으면 150–200칼로리까지 올라가요. 개인 추정은 위 계산기를 쓰세요.",
    },
    {
      question: "40분 걷기는 칼로리를 얼마나 소모하나요?",
      answer:
        "155 lb 성인이 40분 걸으면 중간 페이스(3.0 mph)에서 약 140–200칼로리, 빠른 페이스(3.5–4.0 mph)에서 200–280칼로리예요. 5.0 mph의 아주 빠른 걷기는 같은 40분에 약 290칼로리예요. 6.0 mph(아주 빠른 걷기나 가벼운 조깅, MET 약 7.0)에서는 155 lb 기준 약 325–330칼로리예요.",
    },
    {
      question: "6.0 mph로 40분 걸으면 칼로리를 얼마나 소모하나요?",
      answer:
        "6.0 mph(9.7 km/h)로 40분 걷는 것은 트레드밀의 아주 빠른 걷기이고 MET는 약 7.0이에요. 155 lb(70 kg)이면 약 327칼로리예요. 체중이 무거울수록 더 많아요. 180 lb는 약 380 cal, 200 lb는 422 cal이에요. 이 속도의 걷기를 진짜로 유지하는 성인은 적고, 많은 사람이 가벼운 조깅으로 넘어가요. 체중에 맞춘 숫자는 위 계산기를 쓰세요.",
    },
    {
      question: "걷는 속도가 칼로리 소모에 영향을 주나요?",
      answer:
        "네, 분명히 줘요. 더 빨리 걸으면 MET가 오르고 분당 소모 칼로리가 늘어요. 빠른 걷기(6.4 km/h)는 느긋한 산책(3.2 km/h)보다 약 30% 더 소모해요.",
    },
    {
      question: "MET란 무엇이고 왜 중요한가요?",
      answer:
        "MET는 에너지 소비를 재는 과학적 단위예요. MET 1은 안정 시 대사예요. 보통 페이스 걷기는 MET 3.5라서, 안정 시보다 3.5배 많은 칼로리를 소모해요.",
    },
    {
      question: "평균 페이스 걷기의 MET는 얼마인가요?",
      answer:
        "평균 페이스(약 5 km/h, 3.1 mph)의 MET는 3.5예요. 성인에게 가장 흔한 속도이고 대부분 칼로리 계산기의 기준이에요. 70 kg인 사람은 이 페이스로 시간당 약 245칼로리를 소모해요.",
    },
    {
      question: "중간 페이스 걷기의 MET는 얼마인가요?",
      answer:
        "중간 페이스(4.0–4.5 km/h, 2.5–2.8 mph)의 MET는 3.0에서 3.3이에요. 대화할 수 있는 편한 속도로 매일 걷기에 알맞아요. 70 kg인 사람은 시간당 210–231칼로리를 소모해요.",
    },
    {
      question: "5 km/h(3.1 mph) 걷기의 MET는 얼마인가요?",
      answer:
        "5 km/h(3.1 mph) 걷기의 MET는 3.5예요. 보통 페이스로 봐요. 70 kg인 사람은 이 속도에서 시간당 약 245칼로리를 소모해요 (3.5 × 70 = 245 kcal/시간).",
    },
    {
      question: "4.5 km/h(2.8 mph) 걷기의 MET는 얼마인가요?",
      answer:
        "4.5 km/h(2.8 mph) 걷기의 MET는 3.3이에요. 일정하고 편한 페이스예요. 70 kg이면 시간당 약 231칼로리예요 (3.3 × 70 = 231 kcal/시간).",
    },
    {
      question: "6 km/h 빠른 걷기의 MET는 얼마인가요?",
      answer:
        "6.0 km/h(3.7 mph) 빠른 걷기의 MET는 4.5예요. 보통 걷기(MET 3.5)보다 에너지를 약 30% 더 써요. 70 kg인 사람은 이 페이스로 시간당 약 315칼로리를 소모해요.",
    },
    {
      question: "걷기로 지방을 얼마나 태울 수 있나요?",
      answer:
        "체지방 1킬로그램에는 약 7,700칼로리가 있어요. 매일 10,000걸음(약 400칼로리)을 걸으면, 식사가 그대로일 때 약 19일에 지방 1 kg분이에요. 더 나은 결과를 위해 균형 잡힌 식사와 함께하세요.",
    },
  ],
  formula: {
    title: "걷기 칼로리 공식이 작동하는 방식",
    intro:
      "{name}은 전 세계 운동생리학자가 쓰는 같은 자료인 {source}의 MET를 써요. 공식은 이래요.",
    name: "걷기 소모 칼로리 계산 공식",
    source: "신체 활동 개요",
    equation: "칼로리 = MET × 체중(kg) × 지속 시간(시간)",
    glance: "속도마다 MET가 정해져 있어요. 자주 찾는 값은 이래요.",
    highlights: [
      { phrase: "걷기 3 mph MET", detail: "(4.8 km/h) =" },
      { phrase: "중간 페이스 MET", detail: "(3.1 mph) =" },
      { phrase: "빠른 걷기 MET", detail: "(4 mph) =" },
      { phrase: "걷기 5 km/h MET", detail: "(3.1 mph) =" },
    ],
    chartNote:
      "전체 내역은 {chart}에서 보세요. 느린 산책부터 경보까지, 경사와 지면 보정도 있어요.",
    chartLabel: "걷기 MET 표",
  },
  understanding: {
    title: "걷기 MET 이해하기",
    term: "MET(운동 대사당량)",
    body:
      "{term}은 운동 강도의 표준적인 과학 척도예요. 1 MET는 완전히 쉬고 있을 때의 에너지 소비로, 체중 1킬로그램당 시간당 약 1칼로리예요. MET 3.5는 가만히 앉아 있을 때보다 3.5배의 에너지를 쓴다는 뜻이에요.",
    levels: {
      light: {
        title: "가벼운 걷기",
        detail: "느린 산책, 가게 앞을 천천히 걷는 속도 (2–4 km/h)",
      },
      moderate: {
        title: "중간 걷기",
        detail: "보통에서 빠른 페이스, 가장 흔함 (4–6 km/h)",
      },
      vigorous: {
        title: "강한 걷기",
        detail: "아주 빠른 걷기, 경보, 또는 오르막 (6 km/h 이상)",
      },
    },
    footnote:
      "계산기의 MET는 운동과학자가 쓰는 기준 자료인 신체 활동 개요에서 왔어요. 가장 많이 찾는 5 km/h(3.1 mph)의 MET는 3.5이고, 70 kg인 사람은 이 페이스로 시간당 245칼로리를 소모해요.",
  },
  metTable: {
    title: "걷기 속도별 MET 전체",
    intro:
      "MET는 에너지 소비를 재요. MET 1.0은 안정 시 대사예요. 아래 표에서 속도에 맞는 MET를 확인하세요. 값은 신체 활동 개요에 기반해요.",
    columns: {
      activity: "걷기 종류",
      kmh: "속도 (km/h)",
      mph: "속도 (mph)",
      met: "MET 값",
      cal: "cal/시간 (70 kg)",
    },
    activities: {
      "very-slow": "아주 느린 걷기",
      "slow-stroll": "느린 산책",
      leisurely: "느긋한 걷기",
      comfortable: "편한 페이스",
      moderate: "중간 걷기",
      steady: "일정한 페이스",
      normal: "보통 걷기",
      purposeful: "목적 있는 걷기",
      brisk: "빠른 걷기",
      fast: "빠른 속도의 걷기",
      "very-fast": "아주 빠른 걷기",
      race: "경보",
      "uphill-3": "오르막 걷기 (경사 3%)",
      "uphill-6": "오르막 걷기 (경사 6%)",
    },
    footnote:
      "시간당 칼로리는 70 kg(154 lb) 기준이에요. 실제 소모는 체중에 따라 달라요. 개인 추정은 위 계산기를 쓰세요. 강조한 행은 흔한 페이스예요. 출처는 신체 활동 개요예요.",
  },
  cta: {
    title: "걷기 운동을 기록해요",
    description:
      "Steps 앱을 받아 걷기, 소모 칼로리, 변화를 자동으로 기록해요.",
  },
  howTo: {
    name: "걷기 소모 칼로리를 계산하는 방법",
    description: "시간, 페이스, 체중을 넣으면 MET로 소모 칼로리를 추정해요.",
    steps: [
      {
        name: "시간이나 거리를 입력해요",
        text: "걸은 시간과 거리를 바꿀 수 있어요. 둘 다 같은 추정이 나와요.",
      },
      {
        name: "페이스를 골라요",
        text: "느림, 보통, 빠름, 매우 빠름 중에서 골라요. 빠를수록 MET가 높고 분당 소모 칼로리가 커요.",
      },
      {
        name: "체중을 입력해요",
        text: "체중은 칼로리 소모를 가장 크게 바꾸는 값이에요.",
      },
      {
        name: "추정을 읽어요",
        text: "소모 칼로리, 분당 평균, 사용한 MET가 나와요.",
      },
    ],
  },
};

export default ko;
