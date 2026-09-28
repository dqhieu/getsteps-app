import type { RaceTimePredictorMessages } from "./en";

const ko: RaceTimePredictorMessages = {
  meta: {
    title: "대회 시간 예측: 5K, 10K, 하프, 마라톤",
    description:
      "무료 대회 시간 예측이에요. 페이스를 넣으면 완주 시간이, 목표 시간을 넣으면 필요한 페이스가 나와요. 5K, 10K, 하프 마라톤, 마라톤을 바로 계산해요.",
    keywords: [
      "대회 시간 예측",
      "완주 시간 계산기",
      "하프 마라톤 2시간 페이스",
      "5K 시간 계산기",
      "마라톤 페이스 계산기",
      "목표 기록 계산 러닝",
    ],
    ogTitle: "대회 시간 예측: 5K, 10K, 하프, 마라톤",
    ogDescription:
      "무료 대회 시간 예측이에요. 페이스를 넣으면 완주 시간이, 목표 시간을 넣으면 필요한 페이스가 나와요. 5K, 10K, 하프 마라톤, 마라톤을 바로 계산해요.",
    ogImageAlt: "대회 시간 예측",
  },
  hero: {
    title: "대회 시간 예측",
    subtitle:
      "목표 페이스로 완주 시간을 계산하거나, 목표 시간에 필요한 정확한 페이스를 찾아요.",
  },
  intro:
    "거리와 목표 페이스 또는 완주 시간을 입력하세요. 예상 완주 시간이나 킬로미터당 필요 페이스가 바로 나오고, 5 km 구간으로 배분도 볼 수 있어요.",
  calculator: {
    title: "대회 설정",
    distanceLabel: "대회 거리",
    customPlaceholder: "거리 (km)",
    modeLabel: "무엇을 계산할까요?",
    finishTimeMode: "완주 시간",
    requiredPaceMode: "필요 페이스",
    paceLabel: "페이스 (min/km, 예: 5:30)",
    goalLabel: "목표 시간 (H:MM:SS 또는 MM:SS)",
    calculate: "계산",
    predictedFinish: "예상 완주 시간",
    requiredPaceResult: "필요 페이스",
    pacePerKm: "페이스 /km",
    pacePerMi: "페이스 /mi",
    speedKmh: "속도 km/h",
    speedMph: "속도 mph",
    splitsTitle: "5 km 구간",
    markerColumn: "지점",
    cumulativeColumn: "누적 시간",
    races: {
      "5k": "5K",
      "10k": "10K",
      half: "하프 마라톤",
      marathon: "마라톤",
      custom: "직접 입력",
    },
  },
  faqTitle: "대회 페이스 질문",
  faq: [
    {
      question: "2시간 안쪽 하프 마라톤에는 페이스가 얼마예요?",
      answer:
        "5:41/km(9:09/mile), 약 10.6 km/h를 유지해야 해요. 위의 계산기에서 「필요 페이스」를 고르고 하프 마라톤을 선택한 뒤 목표에 2:00:00을 입력하세요.",
    },
    {
      question: "25분 5K에는 페이스가 얼마예요?",
      answer:
        "25분 5K에는 5:00/km(8:03/mile)가 필요해요. 탄탄한 중급 목표예요. 초보 대부분은 6:30–7:00/km 근처에서 시작해 거기에서 줄여 가요.",
    },
    {
      question: "대회에서 구간 기록은 어떻게 써요?",
      answer:
        "일정한 구간(5 km마다 같은 페이스)이 가장 예측하기 쉬워요. 후반을 전반보다 빠르게 가는 배분이 이상적이고, 엘리트 주자가 노리는 방식이에요. 첫 1 km에서 너무 빠르게 나가지 마세요.",
    },
    {
      question: "좋은 10K 시간은 어느 정도예요?",
      answer:
        "초보: 60–70분, 중급: 50–60분, 상급: 40–50분, 엘리트: 35분 미만이에요. 세계 기록은 27분 미만이에요. 취미 주자 대부분은 50분에서 65분 사이에 들어와요.",
    },
    {
      question: "하프 마라톤 페이스는 어떻게 배분해요?",
      answer:
        "처음 10 km는 목표 페이스로 가고, 힘이 남으면 마지막 11 km를 밀어 올리세요. 초반에 목표보다 빠르게 뛰지 마세요. 페이스와 관계없이 후반은 전반보다 훨씬 힘들게 느껴져요.",
    },
  ],
  cta: {
    title: "Steps 앱에서 매일 훈련 걸음을 기록하세요.",
    description: "달리기마다 기록하고, 구간을 따라가고, Steps에서 대회 목표를 이루세요.",
  },
  howTo: {
    name: "완주 시간을 예측하는 방법",
    description: "거리와 페이스 또는 목표 시간을 넣으면 비어 있는 값이 나와요.",
    steps: [
      {
        name: "대회 거리를 입력하세요",
        text: "흔한 대회(5K, 10K, 하프 마라톤, 마라톤)를 고르거나 거리를 직접 넣으세요.",
      },
      {
        name: "페이스나 목표 시간을 입력하세요",
        text: "둘 중 하나만 있으면 돼요. 계산기가 나머지를 채워요.",
      },
      {
        name: "예상 시간이나 필요 페이스를 읽으세요",
        text: "예상 완주 시간과 흔한 대회 거리의 구간 기록이 나와요.",
      },
    ],
  },
};

export default ko;
