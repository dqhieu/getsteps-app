import type { Vo2MaxCalculatorMessages } from "./en";

const ko: Vo2MaxCalculatorMessages = {
  meta: {
    title: "VO2 Max 계산기: 유산소 체력 추정",
    description:
      "심박수 방법이나 Cooper 12분 달리기로 VO2 Max를 추정해요. 유산소 수준과 높이는 방법을 확인해요.",
    keywords: [
      "VO2 Max 계산기",
      "vo2max 계산기",
      "유산소 체력 계산기",
      "Cooper 테스트 계산기",
      "VO2 Max 계산 방법",
      "나이별 VO2 Max",
      "심폐 체력 테스트",
    ],
    ogTitle: "VO2 Max 계산기: 유산소 체력 추정",
    ogDescription:
      "심박수 방법이나 Cooper 12분 달리기로 VO2 Max를 추정해요. 유산소 수준과 높이는 방법을 확인해요.",
    ogImageAlt: "VO2 Max 계산기",
  },
  hero: {
    title: "VO2 Max 계산기",
    subtitle:
      "유산소 체력의 기준인 VO2 Max를 심박수나 12분 달리기로 추정해요.",
  },
  intro:
    "나이, 성별, 안정 시 심박수(또는 Cooper 12분 달리기 거리)를 넣으면 VO2 Max를 추정하고 같은 나이대에서 어디쯤인지 볼 수 있어요.",
  calculator: {
    method: "방법",
    heartRateMethod: "심박수 방법",
    cooperMethod: "Cooper 12분 달리기",
    gender: "성별",
    male: "남성",
    female: "여성",
    age: "나이",
    years: { one: "년", other: "년" },
    restingHeartRate: "안정 시 심박수",
    bpm: "bpm",
    restingHint: "아침에 침대에서 일어나기 전에 재세요.",
    distanceLabel: "12분 동안 달린 거리",
    km: "km",
    miles: "마일",
    distanceHint: "평평한 트랙에서 정확히 12분 달리고 거리를 적어요.",
    calculate: "VO2 Max 계산하기",
    yourEstimate: "추정 VO2 Max",
    unit: "ml/kg/min",
    improvementTip: "향상 팁",
    disclaimer:
      "VO2 Max는 유산소 체력의 기준이에요. 강한 운동 중 몸이 쓸 수 있는 최대 산소량이에요. 높을수록 심폐 여력이 좋아요. 기준은 나이에 따라 달라요. 여기 구간은 일반적인 안내를 위해 단순화했어요.",
    categories: {
      superior: {
        label: "최상",
        description:
          "뛰어난 유산소 능력이에요. 지구력 경기 선수에게 흔한, 매우 높은 심폐 체력이에요.",
        tip: "주기화 훈련으로 유지해요. 긴 달리기, 템포 훈련, 회복 주를 섞어 과훈련을 피해요.",
      },
      excellent: {
        label: "우수",
        description:
          "평균을 크게 넘는 유산소 체력이에요. 심장과 폐가 일하는 근육에 산소를 효율적으로 보내요.",
        tip: "주에 한 번 VO2 Max 인터벌(예: 강한 강도로 3분×5회)을 더하면 최상 구간에 가까워져요.",
      },
      good: {
        label: "양호",
        description:
          "평균 이상이에요. 일상 활동과 취미 운동을 받치는 탄탄한 유산소 기초가 있어요.",
        tip: "주에 유산소 3~4회를 목표로 해요. 템포 달리기 한 번과 긴 쉬운 달리기 한 번으로 기초를 쌓아요.",
      },
      fair: {
        label: "보통",
        description:
          "평균적인 유산소 능력이에요. 규칙적인 훈련으로 8~12주 안에 VO2 Max가 분명하게 오를 수 있어요.",
        tip: "존 2에서 30분 달리기를 주 3회부터 시작해요. 기초 4주 뒤에 고강도 인터벌을 주에 한 번 더해요.",
      },
      poor: {
        label: "낮음",
        description:
          "평균보다 낮은 유산소 능력이에요. 좋은 점은 이 수준이 꾸준한 훈련에 빨리 반응한다는 거예요.",
        tip: "빠른 걷기를 20~30분, 주 5회부터 시작해요. 2~3주 뒤에 달리기와 걷기 인터벌로 넘어가요.",
      },
    },
  },
  info: {
    title: "VO2 Max — 자주 묻는 질문",
  },
  faq: [
    {
      question: "VO2 Max란 무엇인가요?",
      answer:
        "VO2 Max는 강한 운동 중 몸이 산소를 소비할 수 있는 최대 속도예요. 체중 1킬로그램당 1분에 쓰는 산소의 밀리리터(ml/kg/min)로 나타내요. 유산소 체력과 심폐 건강의 기준으로 널리 쓰여요. VO2 Max가 높을수록 심장, 폐, 근육이 산소를 전달하고 쓰는 효율이 좋아요.",
    },
    {
      question: "좋은 VO2 Max는 어느 정도인가요?",
      answer:
        "남성은 40–50 ml/kg/min이 양호, 55를 넘으면 우수예요. 여성은 35–45가 양호, 50을 넘으면 우수예요. 마라톤 선수나 사이클 선수 같은 엘리트 지구력 선수는 60–85 ml/kg/min에 이르는 경우가 많아요. 오랜 심폐 적응의 결과예요. 훈련하지 않은 성인 평균은 여성이 30대, 남성이 40대 초반이에요.",
    },
    {
      question: "VO2 Max는 어떻게 높이나요?",
      answer:
        "가장 효과적인 방법은 고강도 인터벌, 템포 달리기, 길고 느린 달리기예요. 최대에 가까운 강도로 3–5분을 4–6번 하는 인터벌은 유산소 계통에 직접 부하를 주고 VO2 Max를 가장 크게 올려요. 주에 쉬운 존 2 달리기를 두세 번 더하면, 초보자와 중간 정도 훈련한 사람은 8–12주에 10–20% 향상이 흔해요.",
    },
    {
      question: "Cooper 12분 달리기란 무엇인가요?",
      answer:
        "Cooper 테스트는 Kenneth Cooper 박사가 1968년 미군 체력 평가를 위해 만든 검사예요. 평평한 곳에서 정확히 12분 동안 최대한 멀리 달려요. 달린 거리로 VO2max = (distanceMeters − 504.9) / 44.73 공식을 써서 VO2 Max를 예측해요. 실험실 장비 없이 잰 트랙과 초시계만 있으면 돼서 스포츠 과학에서 널리 쓰여요.",
    },
    {
      question: "VO2 Max는 나이와 함께 떨어지나요?",
      answer:
        "네. 대략 25세 이후, 움직이지 않는 사람은 평균 해마다 약 1% 떨어져요. 규칙적인 유산소 훈련은 이 하락을 크게 늦춰요. 활동적인 60대, 70대는 20년 젊은 비활동적인 사람과 비슷한 VO2 Max를 유지하는 경우가 많아요. 핵심은 꾸준한 심폐 운동이에요. 달리기, 자전거, 수영을 중간 정도만 해도 나이 들 때까지 유산소 능력을 지킬 수 있어요.",
    },
  ],
  cta: {
    title: "유산소 체력의 변화를 기록해요",
    description: "Steps 앱으로 하루 활동을 기록하고 유산소 체력을 높여요.",
  },
  howTo: {
    name: "VO2 Max를 추정하는 방법",
    description:
      "안정 시 심박수와 최대 심박수, 또는 Cooper 12분 달리기로 VO2 Max를 추정해요.",
    steps: [
      {
        name: "방법을 골라요",
        text: "심박수 방법(나이와 안정 시 심박수) 또는 Cooper 테스트(12분에 달린 거리)를 골라요.",
      },
      {
        name: "값을 입력해요",
        text: "나이와 안정 시 심박수, 또는 전력으로 12분 달린 거리를 넣어요.",
      },
      {
        name: "VO2 Max 추정을 읽어요",
        text: "추정 VO2 Max(ml/kg/min)와 나이·성별 체력 백분위가 나와요.",
      },
    ],
  },
};

export default ko;
