import type { PaceToSpeedConverterMessages } from "./en";

const ko: PaceToSpeedConverterMessages = {
  meta: {
    title: "페이스 속도 변환 — min/km, min/mile, km/h, mph",
    description:
      "달리기 페이스와 속도를 바로 서로 바꿔요. min/km를 km/h로, min/mile를 mph로 바꾸고, 어떤 페이스에서든 5K와 10K 시간을 봐요.",
    keywords: [
      "페이스 속도 변환",
      "분당 킬로미터 km/h",
      "러닝 페이스 계산기",
      "페이스를 속도로 변환",
      "min/km를 mph로",
      "달리기 속도 변환",
      "페이스 변환기",
    ],
    ogTitle: "페이스 속도 변환 — min/km, min/mile, km/h, mph",
    ogDescription:
      "달리기 페이스와 속도를 바로 서로 바꿔요. min/km를 km/h로, min/mile를 mph로 바꾸고, 어떤 페이스에서든 5K와 10K 시간을 봐요.",
    ogImageAlt: "페이스 속도 변환",
  },
  hero: {
    title: "페이스 속도 변환",
    subtitle:
      "달리기 페이스(min/km, min/mile)와 속도(km/h, mph)를 바로 바꿔요.",
  },
  intro:
    "페이스나 속도 중 하나만 넣으면 나머지 단위가 바로 바뀌어요. 5K와 10K 예상 시간과 30분·60분에 뛰는 거리도 나와요.",
  calculator: {
    title: "아무 값이나 입력해서 변환",
    paceKm: "페이스 (min/km)",
    paceMile: "페이스 (min/mile)",
    speedKmh: "속도 (km/h)",
    speedMph: "속도 (mph)",
    distanceTitle: "이동 거리",
    min30: "30분",
    min60: "60분",
    raceTitle: "완주 시간",
    referenceTitle: "참고 페이스",
    activityColumn: "활동",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "줄을 누르면 그 페이스를 불러와요",
    races: {
      "5k": "5K",
      "10k": "10K",
    },
    activities: {
      walking: "걷기",
      jogging: "조깅",
      running: "달리기",
      fast: "빠른 달리기",
      sprint: "전력 질주",
    },
  },
  faqTitle: "페이스와 속도 질문",
  faq: [
    {
      question: "min/km를 km/h로 어떻게 바꿔요?",
      answer:
        "60을 min/km 페이스로 나누세요. 예를 들어 5:00/km는 60 ÷ 5 = 12 km/h예요. 더 느린 6:00/km는 60 ÷ 6 = 10 km/h예요.",
    },
    {
      question: "km/h로 좋은 달리기 페이스는 얼마예요?",
      answer:
        "가벼운 조깅: 7–9 km/h, 보통 달리기: 9–12 km/h, 빠른 달리기: 12–16 km/h, 엘리트 마라톤 페이스: 18 km/h 이상이에요. 취미 주자 대부분은 8–11 km/h예요.",
    },
    {
      question: "min/km를 min/mile로 어떻게 바꿔요?",
      answer:
        "min/km 페이스에 1.60934를 곱하면 min/mile가 돼요. 예를 들어 5:00/km × 1.60934 = 8:03/mile예요. 이 변환기는 자동으로 계산해요.",
    },
    {
      question: "30분 5K는 속도가 얼마예요?",
      answer:
        "30분 5K에는 6:00/km가 필요하고, 이는 10.0 km/h 또는 6.2 mph예요. 탄탄한 취미 달리기 페이스예요.",
    },
    {
      question: "페이스와 속도는 뭐가 달라요?",
      answer:
        "페이스는 거리당 시간(예: min/km)이에요. 작을수록 빨라요. 속도는 시간당 거리(예: km/h)예요. 클수록 빨라요. 단위만 뒤집힌 같은 값이에요.",
    },
  ],
  cta: {
    title: "Steps 앱에서 달리기와 걸음을 기록하세요.",
    description: "페이스, 거리, 하루 걸음을 한곳에서 확인해요.",
  },
  howTo: {
    name: "달리기 페이스를 속도로 바꾸는 방법 (속도에서 페이스도)",
    description:
      "킬로미터당 분, 마일당 분, km/h, mph 중 아무 값이나 넣으면 나머지가 나와요.",
    steps: [
      {
        name: "아는 단위를 고르세요",
        text: "값이 있는 단위를 고르세요(예를 들어 min/km).",
      },
      {
        name: "값을 입력하세요",
        text: "페이스나 속도를 입력하세요.",
      },
      {
        name: "변환 결과를 읽으세요",
        text: "네 단위가 함께 바뀌어요. min/km, min/mile, km/h, mph예요.",
      },
    ],
  },
};

export default ko;
