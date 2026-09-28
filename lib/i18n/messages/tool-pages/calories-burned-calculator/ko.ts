import type { CaloriesBurnedMessages } from "./en";

const ko: CaloriesBurnedMessages = {
  meta: {
    title: "소모 칼로리 계산기: 50가지 이상, MET 기준",
    description:
      "걷기부터 HIIT까지 50가지가 넘는 활동의 칼로리를 계산해요. 70 kg 성인은 러닝 30분에 360칼로리, 걷기에 129칼로리를 써요. 무료 MET 계산기예요.",
    keywords: [
      "소모 칼로리 계산기",
      "칼로리 소모 계산",
      "운동 칼로리 계산기",
      "워크아웃 칼로리 계산기",
      "활동 칼로리 계산기",
      "러닝 칼로리 계산기",
      "사이클링 칼로리 계산기",
      "수영 칼로리 계산기",
      "MET 계산기",
      "칼로리 얼마나 소모했나",
    ],
    ogTitle: "소모 칼로리 계산기: 50가지 이상, MET 기준",
    ogDescription:
      "Compendium of Physical Activities의 MET로 50가지가 넘는 활동의 소모 칼로리를 계산해요.",
    ogImageAlt: "소모 칼로리 계산기",
  },
  hero: {
    title: "소모 칼로리 계산기",
    subtitle:
      "천천히 걷기부터 HIIT까지 50가지가 넘는 활동의 칼로리예요. Compendium of Physical Activities의 MET를 쓰고, 총소모와 활동이 실제로 더한 양을 나눠요.",
  },
  appCta: {
    headline: "운동을 하나씩 추정하지 마세요",
    description:
      "Steps는 하루 움직임을 백그라운드에서 세고, 활동을 고르지 않아도 칼로리 합계로 바꿔요.",
  },
  stickyCta: "Steps로 걸음 기록하기",
  calculator: {
    pickActivity: "활동 선택",
    category: "분류",
    activity: "활동",
    activityOption: "{name} · {met} MET",
    yourWeight: "체중",
    duration: "시간",
    durationPreset: "{minutes} min",
    minutes: "min",
    calculate: "소모 칼로리 계산",
    yourResults: "결과",
    caloriesBurned: "소모 칼로리",
    resultMeta: "{activity} · {duration} min · {met} MET",
    netBurn: "순소모",
    aboveResting: "안정 시를 넘는 양",
    perHour: "시간당",
    calories: "칼로리",
    stepEquivalent: "환산 걸음",
    steps: "걸음",
    bodyFat: "체지방",
    grams: "그램",
    walkingEquivalent: {
      one: "같은 소모량이면 보통 걷기 약 {minutes}분, 대략 {steps}걸음이에요.",
      other: "같은 소모량이면 보통 걷기 약 {minutes}분, 대략 {steps}걸음이에요.",
    },
    comparison: "같은 {duration}분, 다른 활동",
    cal: "{calories} cal",
    categories: {
      "Walking & Running": "걷기와 러닝",
      Cycling: "사이클링",
      "Gym & Strength": "헬스와 근력",
      Sports: "스포츠",
      Water: "수상",
      "Outdoor & Winter": "야외와 겨울",
      "Home & Daily": "집과 일상",
    },
    activities: {
      "walking-slow": "걷기, 천천히 (3.2 km/h)",
      "walking-moderate": "걷기, 보통 (5 km/h)",
      "walking-brisk": "걷기, 빠르게 (6.4 km/h)",
      "walking-uphill": "오르막 걷기 (5 km/h, 경사 5%)",
      hiking: "크로스컨트리 하이킹",
      stairs: "계단 오르기",
      jogging: "조깅 (8 km/h)",
      "running-10": "러닝 (10 km/h)",
      "running-12": "러닝 (12 km/h)",
      "running-16": "러닝 (16 km/h)",
      "cycling-light": "사이클링, 가볍게 (16–19 km/h)",
      "cycling-moderate": "사이클링, 보통 (19–22 km/h)",
      "cycling-vigorous": "사이클링, 강하게 (22–25 km/h)",
      "cycling-stationary": "실내 자전거, 보통",
      spinning: "스피닝",
      "weight-light": "웨이트 트레이닝, 가볍게",
      "weight-vigorous": "웨이트 트레이닝, 강하게",
      circuit: "서킷 트레이닝",
      hiit: "HIIT",
      elliptical: "일립티컬",
      "rowing-machine": "로잉 머신, 보통",
      yoga: "요가, 하타",
      pilates: "필라테스",
      stretching: "스트레칭",
      "jump-rope": "줄넘기, 보통",
      basketball: "농구, 경기",
      soccer: "축구, 가볍게",
      tennis: "테니스, 단식",
      badminton: "배드민턴, 가볍게",
      golf: "골프, 클럽을 들고 걷기",
      volleyball: "배구, 가볍게",
      "boxing-bag": "복싱, 샌드백",
      "martial-arts": "무술",
      "table-tennis": "탁구",
      "swimming-leisure": "수영, 여유롭게",
      "swimming-freestyle": "수영, 자유형 보통",
      "swimming-vigorous": "수영, 자유형 강하게",
      "water-aerobics": "수중 에어로빅",
      kayaking: "카약",
      surfing: "서핑",
      "skiing-downhill": "스키, 중급 활강",
      "skiing-cross": "크로스컨트리 스키",
      snowboarding: "스노보드",
      "ice-skating": "아이스 스케이팅",
      "rock-climbing": "암벽 등반, 오르기",
      rucking: "짐을 메고 하이킹",
      cleaning: "집안 청소, 보통",
      gardening: "정원 가꾸기",
      mowing: "잔디 깎기, 수동 예초기",
      "shovelling-snow": "눈 치우기",
      "grocery-shopping": "장보기",
      childcare: "아이와 활발히 놀기",
      "desk-work": "책상 업무, 앉아서",
    },
  },
  info: {
    title: "소모 칼로리를 계산하는 방식",
    intro:
      "활동마다 MET가 있어요. 가만히 앉아 있을 때의 몇 배 에너지인지예요. 수치는 2011년 Compendium of Physical Activities에서 가져왔어요. 연구자가 바로 이 목적으로 쓰는 자료예요.",
    formulaTitle: "공식",
    perMinuteLabel: "분당 칼로리",
    perMinute: "= MET × 3.5 × 체중 (kg) ÷ 200",
    netLabel: "순칼로리",
    net: "= 총량 × (MET − 1) ÷ MET. 가만히 있어도 썼을 안정 시 에너지를 빼요",
    oneMet: "1 MET = 3.5 ml O₂/kg/min, 안정 시 몸의 산소 섭취량",
    exampleLabel: "예시:",
    example:
      "70 kg으로 10 km/h 러닝은 9.8 MET라서 분당 12.0 cal, 30분에 360칼로리이고 그중 323이 순소모예요.",
    walkingNote:
      "결과마다 걷기 분과 걸음으로도 바꿔요. 10 km/h로 30분 달리기는 보통 걷기 약 84분, 대략 8,400걸음이에요. 하루를 걸음으로 보면 칼로리 숫자만 보는 것보다 더 쓸모 있어요.",
  },
  faqTitle: "자주 묻는 질문",
  faq: [
    {
      question: "소모 칼로리는 어떻게 계산하나요?",
      answer:
        "MET로 계산해요. 1 MET는 안정 시 대사량이고, 체중 1 kg당 분당 산소 3.5 ml로 정의해요. 8 MET 활동은 그 여덟 배예요. 식은 분당 칼로리 = MET × 3.5 × 체중 kg ÷ 200이에요. 70 kg 성인이 10 km/h로 달리면(9.8 MET) 분당 약 12칼로리, 30분에 360칼로리예요.",
    },
    {
      question: "총칼로리와 순칼로리는 어떻게 다른가요?",
      answer:
        "총칼로리는 활동 중에 쓴 전부예요. 소파에 앉아 있어도 썼을 안정 시 에너지가 들어가요. 순칼로리는 활동이 더한 양만이에요. 30분 러닝은 차이가 약 10%지만, 낮은 강도에서는 훨씬 커요. 걷기 30분이 총 129, 순 92로 나올 수 있어요. 운동을 칼로리 예산에 넣을 때는 순량이 정직한 숫자예요. TDEE가 안정 시 부분을 이미 세었거든요.",
    },
    {
      question: "MET 추정은 얼마나 정확한가요?",
      answer:
        "대부분 약 10–15% 안쪽이에요. 대사 측정 장비 없이 얻을 수 있는 거의 한계예요. MET는 인구 평균이라 효율, 체력, 체성분은 못 봐요. 같은 페이스여도 움직임이 경제적인 숙련 러너는 초보보다 적게 써요. 결과는 측정이 아니라 좋은 추정으로 봐요.",
    },
    {
      question: "트래커 숫자가 다른 이유는 무엇인가요?",
      answer:
        "대부분 손목 기기는 MET가 아니라 심박수로 추정해요. 심박수는 노력뿐 아니라 더위, 카페인, 스트레스, 탈수에도 반응해요. 트래커는 총칼로리를 자주 보여주고, 칼로리 앱은 순칼로리를 기대해요. 헬스장 기구는 더 어긋나요. 기본 체중을 가정해서 소모를 15–25% 높게 내는 경우가 많아요.",
    },
    {
      question: "체중에 따라 소모 칼로리가 달라지나요?",
      answer:
        "크게, 그리고 비례해서 달라져요. 칼로리는 체중에 직선으로 비례해서, 90 kg인 사람은 70 kg인 사람보다 같은 활동을 같은 시간 하면 약 29% 더 써요. 그래서 체중이 더 나가는 사람은 같은 루틴에서도 초반 감량이 빠르게 보이고, 가벼워질수록 소모는 줄어요.",
    },
    {
      question: "어떤 활동이 칼로리를 가장 많이 쓰나요?",
      answer:
        "분당으로는 빠른 러닝, 줄넘기, 무술이 위쪽이에요. 약 11–14.5 MET예요. 하지만 합계는 강도 곱하기 시간이라 순위가 바뀌어요. 대부분은 14 MET를 몇 분 넘게 못 유지하고, 5 MET 걷기는 한 시간도 어렵지 않아요. 빠른 걷기 한 시간이 10분 전력 질주보다 많아요.",
    },
    {
      question: "걷기는 러닝에 비해 칼로리를 얼마나 쓰나요?",
      answer:
        "러닝은 분당 소모가 대략 두 배예요. 70 kg 성인에게 보통 걷기(3.5 MET)는 분당 약 4.3칼로리, 10 km/h 러닝(9.8 MET)은 약 12칼로리예요. 현실적으로 비교하면 간격이 좁아져요. 걷기 60분은 258칼로리, 초보가 실제로 버티는 러닝 20분은 240칼로리예요.",
    },
  ],
  cta: {
    title: "모든 칼로리를 자동으로 기록해요",
    description: "Steps 앱으로 하루 종일 백그라운드에서 걸음과 소모 칼로리를 세요. 따로 적지 않아도 돼요.",
  },
  howTo: {
    name: "소모 칼로리를 계산하는 방법",
    description:
      "활동, 체중, 시간을 넣으면 Compendium of Physical Activities의 MET로 소모 칼로리를 받아요.",
    steps: [
      {
        name: "분류와 활동을 골라요",
        text: "걷기와 러닝, 스포츠 같은 분류를 고른 다음 구체적인 활동을 선택해요. 항목마다 MET가 보여요.",
      },
      {
        name: "체중을 넣어요",
        text: "칼로리 소모는 체중에 바로 비례해서, 가장 중요한 입력이에요. 킬로그램과 파운드를 바꿔요.",
      },
      {
        name: "시간을 정해요",
        text: "15분에서 90분 프리셋을 쓰거나 정확한 숫자를 넣어요.",
      },
      {
        name: "총칼로리와 순칼로리를 확인해요",
        text: "총칼로리, 안정 시를 넘는 순칼로리, 시간당 칼로리, 걷기와 걸음 환산, 같은 시간의 다른 활동 비교표를 돌려줘요.",
      },
    ],
  },
};

export default ko;
