import type { MarathonPacePredictorMessages } from "./en";

const ko: MarathonPacePredictorMessages = {
  meta: {
    title: "마라톤 시간 예측: 어떤 대회 기록으로도 완주 시간을 봐요",
    description:
      "5K나 10K를 뛰었나요? Riegel 공식으로 마라톤과 하프 마라톤 완주 시간을 바로 예측해요. 페이스 표가 있는 무료 계산기예요.",
    keywords: [
      "마라톤 기록 예측",
      "대회 시간 예측",
      "마라톤 시간 계산기",
      "하프 마라톤 시간 예측",
      "Riegel 공식 계산기",
      "마라톤 완주 시간 예측",
      "5K로 마라톤 시간",
    ],
    ogTitle: "마라톤 시간 예측: 어떤 대회 기록으로도 완주 시간을 봐요",
    ogDescription:
      "5K나 10K를 뛰었나요? Riegel 공식으로 마라톤과 하프 마라톤 완주 시간을 바로 예측해요.",
    ogImageAlt: "마라톤 시간 예측",
  },
  hero: {
    title: "마라톤 시간 예측",
    subtitle:
      "최근 대회 기록을 넣으면 표준 거리별 완주 시간을 예측해요.",
  },
  intro:
    "최근 시간과 거리를 넣으면 Riegel 공식으로 5K, 10K, 하프 마라톤, 마라톤 완주 시간이 바로 나와요. 대회 시간 예측의 기준이 되는 공식이에요.",
  calculator: {
    distanceLabel: "대회 거리",
    customDistanceLabel: "거리 (km)",
    finishTimeLabel: "완주 시간",
    hour: "시",
    minute: "분",
    second: "초",
    invalidDistance: "올바른 거리를 입력해 주세요.",
    invalidTime: "올바른 시간을 입력해 주세요.",
    predict: "시간 예측",
    resultsTitle: "예상 완주 시간",
    distanceColumn: "거리",
    timeColumn: "시간",
    paceKmColumn: "페이스 (km)",
    paceMileColumn: "페이스 (mi)",
    speedColumn: "속도",
    you: "본인",
    footnote:
      "예측은 Riegel 공식(피로 계수 1.06)을 써요. 비슷한 강도의 최근 대회일수록 정확해요.",
    races: {
      "5k": "5K",
      "10k": "10K",
      half: "하프 마라톤",
      marathon: "마라톤",
      custom: "직접 입력 (km)",
    },
  },
  info: {
    title: "대회 시간 예측에 대해",
    faqTitle: "자주 묻는 질문",
  },
  faq: [
    {
      question: "Riegel 공식은 얼마나 정확한가요?",
      answer:
        "잘 훈련된 주자가 비슷한 거리를 예측할 때 Riegel 공식은 대략 ±5–10% 안에 들어요. 거리 차이가 크거나(예를 들어 5K에서 마라톤), 입력한 대회가 최대 노력이 아니면 정확도가 떨어져요.",
    },
    {
      question: "Riegel 공식이 뭐예요?",
      answer:
        "T2 = T1 × (D2/D1)^1.06이에요. T1은 아는 완주 시간, D1은 그 거리, D2는 목표 거리, T2는 예측 시간이에요. 지수 1.06은 거리가 길어질수록 피로의 영향이 커지는 것을 반영해요.",
    },
    {
      question: "5K로 마라톤을 예측할 수 있나요?",
      answer:
        "할 수 있지만 정확도는 낮아져요. 입력한 거리가 목표에 가까울수록 공식이 잘 맞아요. 마라톤이라면 최근 10K나 하프 마라톤이 가장 믿을 만해요.",
    },
    {
      question: "좋은 마라톤 시간은 어느 정도예요?",
      answer:
        "초보: 4:30–5:30 | 중급: 3:30–4:30 | 상급: 3:30 미만 | 엘리트: 2:30 미만. 마라톤 평균 완주 시간은 남성은 약 4:30, 여성은 약 4:55예요.",
    },
    {
      question: "이 예측으로 페이스는 어떻게 짜요?",
      answer:
        "목표 거리의 페이스 열로 킬로미터별 전략을 잡으세요. 예측 마라톤 페이스가 5:30/km라면 전반은 조금 느리게(5:35/km), 후반은 전반보다 빠르게 뛰세요.",
    },
  ],
  cta: {
    title: "Steps: Workout & Pedometer로 더 똑똑하게 훈련하세요",
    description:
      "Steps: Workout & Pedometer에서 하루 걸음과 활동을 기록하면 더 똑똑하게 훈련할 수 있어요.",
  },
  howTo: {
    name: "마라톤 시간을 예측하는 방법",
    description:
      "최근 대회 거리와 시간을 넣으면 마라톤(그리고 5K, 10K, 하프) 완주 시간을 예측해요.",
    steps: [
      {
        name: "아는 거리와 시간을 입력하세요",
        text: "최근의 힘든 노력을 쓰세요. 5K, 10K, 하프 마라톤, 또는 최근에 뛴 거리예요.",
      },
      {
        name: "예측 시간을 읽으세요",
        text: "Riegel 공식으로 5K, 10K, 하프 마라톤, 마라톤 시간을 예측해요.",
      },
    ],
  },
};

export default ko;
