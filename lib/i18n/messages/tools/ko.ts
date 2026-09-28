import type { ToolsMessages } from "./en";

const ko: ToolsMessages = {
  meta: {
    title: "무료 피트니스 계산기 - 걸음, 칼로리, BMI 등",
    description:
      "걸음, 칼로리, BMI, 걷기 시간, 체중 감량을 위한 무료 온라인 피트니스 계산기예요. 프로필에 맞춘 결과를 받을 수 있어요.",
    keywords: [
      "피트니스 계산기",
      "걸음 계산기",
      "칼로리 계산기",
      "BMI 계산기",
      "걷기 계산기",
      "체중 감량 계산기",
      "걸음 칼로리",
      "걷기 시간 계산기",
    ],
    ogTitle: "무료 피트니스 계산기",
    ogDescription:
      "걸음, 칼로리, BMI, 걷기 시간, 체중 감량을 위한 무료 온라인 피트니스 계산기예요.",
  },
  itemListDescription:
    "브라우저에서 쓰는 무료 피트니스 계산기 모음이에요. 걸음, 칼로리, 페이스, 심박수, BMI, 체지방, TDEE, 매크로 등을 담았어요.",
  hero: {
    title: "무료 피트니스 계산기",
    subtitle:
      "걸음, 칼로리, 거리 등을 위한 맞춤 계산기예요. 모두 무료이고 가입은 필요 없어요.",
  },
  mostPopular: "인기",
  allCalculators: "모든 계산기",
  conversions: {
    title: "빠른 환산표",
    description: "자주 쓰는 걸음, 거리, 시간 환산을 미리 계산해 둔 답이에요.",
    hub: "환산 모음 →",
    links: {
      "steps-to-miles": "걸음 → 마일",
      "miles-to-steps": "마일 → 걸음",
      "steps-to-km": "걸음 → km",
      "km-to-steps": "Km → 걸음",
      "steps-to-calories": "걸음 → 칼로리",
      "steps-to-time": "걸음 → 걷기 시간",
      "miles-to-time": "마일 → 걷기 시간",
    },
  },
  why: {
    title: "이 계산기를 쓰는 이유",
    items: [
      {
        title: "맞춤 결과",
        description: "키, 몸무게, 나이, 성별을 반영해서 더 정확한 추정치를 내요.",
      },
      {
        title: "과학 기반",
        description: "연구로 뒷받침된 공식과 MET 값으로 믿을 수 있게 계산해요.",
      },
      {
        title: "100% 무료",
        description: "가입이 필요 없어요. 광고도 없어요. 유용한 피트니스 계산기만 있어요.",
      },
    ],
  },
  cta: {
    title: "피트니스를 자동으로 기록하세요",
    description:
      "Steps 앱을 다운로드하고 iPhone과 Apple Watch에서 걸음, 칼로리, 거리 등을 자동으로 기록하세요.",
  },
  conversionTables: {
    "steps-to-miles": "걸음에서 마일로 환산표",
    "steps-to-calories": "걸음에서 칼로리로 환산표",
  },
  tools: {
    "step-distance-calculator": {
      title: "걸음 거리 계산기",
      description: "키를 기준으로 걸음을 거리로, 거리를 걸음으로 바꿔요",
    },
    "steps-to-calories-calculator": {
      title: "걸음 칼로리 계산기",
      description: "하루 걸음으로 칼로리를 얼마나 태우는지 계산해요",
    },
    "walking-calories-calculator": {
      title: "걷기 칼로리 계산기",
      description: "걷기 거리나 시간으로 소모 칼로리를 계산해요",
    },
    "treadmill-calorie-calculator": {
      title: "트레드밀 칼로리 계산기",
      description: "속도, 경사, 체중, 시간으로 트레드밀 칼로리를 계산해요",
    },
    "treadmill-incline-calculator": {
      title: "트레드밀 경사 계산기",
      description: "트레드밀 경사를 같은 노력의 평지 페이스로 환산하고, 오른 고도도 보여 줘요",
    },
    "rucking-calorie-calculator": {
      title: "러킹 칼로리 계산기",
      description: "배낭 무게, 페이스, 경사, 지형에 따른 러킹 소모 칼로리예요",
    },
    "steps-per-mile-calculator": {
      title: "마일당 걸음 계산기",
      description: "1마일이나 1킬로미터에 몇 걸음인지 알아봐요",
    },
    "walking-time-calculator": {
      title: "걷기 시간 계산기",
      description: "어떤 거리든 걷는 데 걸리는 시간을 예상해요",
    },
    "daily-step-goal-calculator": {
      title: "하루 걸음 목표 계산기",
      description: "나에게 맞는 하루 걸음 목표를 추천해요",
    },
    "weight-loss-walking-calculator": {
      title: "체중 감량 걷기 계산기",
      description: "체중 감량 목표에 필요한 걷기량을 계산해요",
    },
    "bmi-calculator": {
      title: "BMI 계산기",
      description: "체질량지수를 계산하고 건강 안내도 확인해요",
    },
    "heart-rate-zones-calculator": {
      title: "심박수 존 계산기",
      description: "지방 연소와 지구력을 높이는 훈련 존 5개를 찾아요",
    },
    "running-pace-calculator": {
      title: "러닝 페이스 계산기",
      description: "페이스와 속도를 바꾸고, 어떤 거리든 완주 시간을 예측해요",
    },
    "body-fat-calculator": {
      title: "체지방률 계산기",
      description: "정확한 미국 해군 방식으로 체지방 %를 계산해요",
    },
    "water-intake-calculator": {
      title: "물 섭취 계산기",
      description: "체중과 활동량으로 하루에 마실 물의 양을 알아봐요",
    },
    "activity-to-steps-converter": {
      title: "활동을 걸음으로 환산",
      description: "사이클링, 수영, 요가 등을 같은 정도의 걸음으로 바꿔요",
    },
    "calorie-deficit-calculator": {
      title: "칼로리 적자 계산기",
      description: "목표 체중에 닿도록 하루에 먹을 칼로리를 계산해요",
    },
    "resting-heart-rate-calculator": {
      title: "안정 시 심박수 계산기",
      description: "심폐 체력과 Karvonen 심박수 존을 확인해요",
    },
    "tdee-calculator": {
      title: "TDEE 계산기",
      description: "하루 총 에너지 소비량과 필요한 칼로리를 계산해요",
    },
    "macro-calculator": {
      title: "매크로 계산기",
      description: "목표에 맞는 하루 단백질, 탄수화물, 지방을 계산해요",
    },
    "marathon-pace-predictor": {
      title: "마라톤 기록 예측",
      description: "마라톤, 하프 마라톤, 10K, 5K 완주 시간을 예측해요",
    },
    "vo2-max-calculator": {
      title: "VO2 Max 계산기",
      description: "심박수나 Cooper 테스트로 유산소 체력을 추정해요",
    },
    "training-pace-zones": {
      title: "훈련 페이스 존",
      description: "어떤 대회 결과든 나에게 맞는 러닝 페이스 존 5개를 받아요",
    },
    "pace-to-speed-converter": {
      title: "페이스 속도 변환기",
      description: "min/km, min/마일, km/h, mph를 바로 바꿔요",
    },
    "race-time-predictor": {
      title: "레이스 시간 예측",
      description: "페이스로 완주 시간을 계산하거나, 목표 시간에 필요한 페이스를 구해요",
    },
    "distance-equivalent-calculator": {
      title: "거리 환산 계산기",
      description: "km, 마일, 미터, 야드를 걸음, 시간, 칼로리와 함께 바꿔요",
    },
    "gpx-viewer": {
      title: "GPX 뷰어",
      description: "GPX 파일을 올리고 통계가 있는 인터랙티브 지도에서 봐요",
    },
    "strava-stats-generator": {
      title: "Strava 통계 생성기",
      description: "러닝을 Instagram 스토리용 투명 통계 오버레이로 만들어요",
    },
    "bmr-calculator": {
      title: "BMR 계산기",
      description: "세 가지 임상 공식으로 기초대사량을 계산해요",
    },
    "weight-loss-calculator": {
      title: "체중 감량 계산기",
      description: "목표 체중까지 하루 칼로리 목표와 기간을 알려 줘요",
    },
    "calories-burned-calculator": {
      title: "소모 칼로리 계산기",
      description: "MET 값으로 50가지가 넘는 활동의 소모 칼로리를 계산해요",
    },
    "ideal-weight-calculator": {
      title: "이상 체중 계산기",
      description: "네 가지 임상 공식과 키에 맞는 건강한 BMI 범위예요",
    },
    "waist-to-hip-ratio-calculator": {
      title: "허리-엉덩이 비율 계산기",
      description: "허리-엉덩이 비율을 WHO 위험 기준과 비교해요",
    },
  },
};

export default ko;
