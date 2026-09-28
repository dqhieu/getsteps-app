import type { ConversionValuesMessages } from "./en";

const ko: ConversionValuesMessages = {
  ui: {
    breadcrumb: "탐색 경로",
    quickAnswer: "빠른 답",
    forContext: "참고로:",
    distanceByHeightTitle: "거리는 키에 따라 달라져요",
    distanceByHeightBody:
      "보폭은 키의 약 0.41배예요. 키가 작은 사람은 한 걸음에 덜 나가요.",
    heightColumn: "키",
    strideColumn: "보폭",
    milesColumn: "마일",
    kilometersColumn: "킬로미터",
    stepsColumn: "걸음",
    stepsRequiredTitle: "필요한 걸음 수는 키에 따라 달라져요",
    stepsRequiredBody: "키가 작은 사람은 같은 거리를 가려면 걸음을 더 많이 걸어야 해요.",
    caloriesTitle: "체중과 속도별 소모 칼로리",
    caloriesBody:
      "칼로리는 체중에 비례해서 늘어요. 속도가 빠르면 더 소모되지만, 걸을 때는 조금만 더 늘어요.",
    weightColumn: "체중",
    timeTitle: "얼마나 걸릴까요?",
    timeBody: "시간은 걷는 속도에 따라 달라져요. 대부분의 성인은 약 3 mph의 보통 속도로 걸어요.",
    paceColumn: "속도",
    speedColumn: "속력",
    timeColumn: "시간",
    cm: "{value} cm",
    mi: "{value} mi",
    km: "{value} km",
    cal: "{value} cal",
    mph: "{value} mph",
    ctaTitle: "Steps로 실제 숫자를 기록해요",
    ctaBody:
      "이 환산은 평균값을 써요. Steps 앱은 iPhone과 Apple Watch에서 동기화한 당신의 {actual} 보폭, 칼로리, 걷는 시간을 기록해요.",
    ctaActual: "실제",
    relatedTitle: "관련 환산",
    faqTitle: "자주 묻는 질문",
    heights: [
      `4'10" (147 cm) — 작은 키`,
      `5'4" (163 cm) — 여성 평균`,
      `5'9" (175 cm) — 성인 평균`,
      `6'0" (183 cm) — 남성 평균`,
      `6'4" (193 cm) — 큰 키`,
    ],
    weights: [
      "120 lb (54 kg)",
      "150 lb (68 kg)",
      "180 lb (82 kg)",
      "210 lb (95 kg)",
      "250 lb (113 kg)",
    ],
    paces: ["느림 (2 mph)", "보통 (3.1 mph)", "빠름 (4 mph)"],
    duration: {
      minutes: "{count}분",
      hours: "{count}시간",
      hoursMinutes: "{hours}시간 {minutes}분",
    },
  },
  plurals: {
    mile: { one: "1마일", other: "{count}마일" },
    mileArticle: { one: "1마일", other: "{count}마일" },
    mileInSteps: { one: "{count}마일 걸음", other: "{count}마일 걸음" },
    mileToSteps: { one: "{count}마일을 걸음으로", other: "{count}마일을 걸음으로" },
    howManyStepsInMile: {
      one: "{count}마일은 몇 걸음",
      other: "{count}마일은 몇 걸음",
    },
    howManyStepsIsMile: {
      one: "{count}마일 걸음 수",
      other: "{count}마일 걸음 수",
    },
    mileWalkSteps: "{count}마일 걷기 걸음",
    howLongDoesMile: {
      one: "{count}마일 걷는 데 얼마나",
      other: "{count}마일 걷는 데 얼마나",
    },
    howLongToMile: {
      one: "{count}마일 걷기 시간",
      other: "{count}마일 걷기 시간",
    },
    walkingTimeMile: {
      one: "걷는 시간 {count}마일",
      other: "걷는 시간 {count}마일",
    },
    mileWalkingTime: {
      one: "{count}마일 소요 시간",
      other: "{count}마일 소요 시간",
    },
    walkMileTime: {
      one: "{count}마일 걷기 — 시간",
      other: "{count}마일 걷기 — 시간",
    },
  },
  familiar: {
    olympic: "Olympic 400m 트랙 한 바퀴",
    centralPark: "Central Park(NYC)의 길이",
    fiveK: "5K 대회",
    tenK: "10K 대회",
    brooklyn: "Brooklyn Bridge 왕복",
    half: "하프 마라톤",
    marathon: "풀 마라톤",
  },
  foods: {
    banana: "바나나 1개 (105 cal)",
    apple: "사과 1개 (95 cal)",
    bread: "식빵 1장 (80 cal)",
    coffee: "크림 넣은 커피 1잔 (50 cal)",
    cookie: "초콜릿칩 쿠키 1개 (160 cal)",
    juice: "오렌지 주스 1잔 (110 cal)",
  },
  stepsToKm: {
    meta: {
      title: "{steps}걸음은 몇 km인가요 — {steps}걸음은 몇 킬로미터인가요?",
      description:
        "평균적인 성인 기준으로 {steps}걸음 ≈ {km} km({miles}마일)이에요. 키에 따른 정확한 거리, 소모 칼로리, 걷는 시간을 확인하세요.",
      keywords: [
        "{steps}걸음 km",
        "{steps}걸음은 몇 km",
        "{steps}걸음을 킬로미터로",
        "{steps}걸음 거리",
      ],
      ogImageAlt: "{steps}걸음을 km로",
    },
    h1: "{steps}걸음을 킬로미터로",
    subheading: "{steps}걸음에 도달하면 얼마나 걸은 걸까요?",
    primary: "{km} km",
    secondary: "{miles}마일 · 보통 속도로 약 {time} · 체중 70 kg인 사람 {calories}칼로리",
    intro:
      "평균적인 성인이 일반적인 보폭 76 cm(2.5 ft)로 {steps}걸음을 걸으면 약 {km} km({miles}마일)이에요. 보통 속도 5 km/h로는 약 {time}이 걸리고, 체중 70 kg(155 lb)인 사람은 대략 {calories}칼로리를 소모해요. 정확한 거리는 키에 따라 달라져요. 키가 클수록 한 걸음에 더 멀리 가요. 아래 표를 보세요.",
    crumb: "걸음에서 km",
    crumbValue: "{steps}걸음",
    related: "{steps}걸음을 km로",
    relatedHub: "1km는 몇 걸음인가요?",
    relatedMiles: "{steps}걸음을 마일로",
    faq: [
      {
        question: "{steps}걸음은 몇 km인가요?",
        answer:
          "보폭 76 cm인 평균적인 성인에게 {steps}걸음은 약 {km} km({miles}마일)이에요. 키가 작은 사람은 조금 짧고, 키가 큰 사람은 조금 더 길어요. 이 페이지의 키 표에서 본인 숫자를 확인하세요.",
      },
      {
        question: "{steps}걸음을 걷는 데 얼마나 걸리나요?",
        answer:
          "보통 속도 5 km/h로 {steps}걸음은 약 {time}이 걸려요. 빠른 속도 6.4 km/h로는 약 {brisk}이에요. 느린 산책 3.2 km/h로는 약 {slow}이에요.",
      },
      {
        question: "{steps}걸음은 칼로리를 얼마나 소모하나요?",
        answer:
          "체중 70 kg(155 lb)인 사람이 보통 속도로 걸으면 {steps}걸음에 대략 {calories}칼로리를 소모해요. 몸무게가 가벼운 사람은 한 걸음당 칼로리가 더 적고, 무거운 사람은 더 많아요. 이 페이지의 칼로리 표에서 본인 체중을 확인하세요.",
      },
      {
        question: "걸음을 km로 어떻게 계산하나요?",
        answer:
          "평균적인 성인의 보폭 76 cm(2.5 ft)를 써요. 걸음 × 보폭(cm) ÷ 100,000 = km 거리예요. 그래서 {steps}걸음 × 76 cm ÷ 100,000 ≈ {km} km예요. 실제 보폭은 키의 약 0.41배예요.",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "{steps}걸음은 몇 마일이죠 — {steps}걸음은 몇 마일인가요?",
      description:
        "평균적인 성인 기준으로 {steps}걸음 ≈ {miles}마일({km} km)예요. 키에 따른 정확한 거리, 소모 칼로리, 걷는 시간을 확인하세요.",
      keywords: [
        "{steps}걸음 마일",
        "{steps}걸음은 몇 마일",
        "{steps}걸음을 마일로",
        "{steps}걸음",
        "{steps}걸음 거리",
        "{steps}걸음 칼로리",
      ],
      ogImageAlt: "{steps}걸음을 마일로",
    },
    h1: "{steps}걸음을 마일로",
    subheading: "{steps}걸음에 도달하면 얼마나 걸은 걸까요?",
    primary: "{miles}마일",
    secondary:
      "{km} km · 보통 속도로 약 {time} · 체중 155 lb(70 kg)인 사람 {calories}칼로리",
    intro:
      "평균적인 성인이 일반적인 보폭 76 cm(2.5 ft)로 {steps}걸음을 걸으면 약 {miles}마일({km} km)예요. 보통 속도 3 mph로는 약 {time}이 걸리고, 체중 155 lb(70 kg)인 사람은 대략 {calories}칼로리를 소모해요. 정확한 거리는 키에 따라 달라져요. 키가 클수록 한 걸음에 더 멀리 가요. 아래 표를 보세요.",
    crumb: "걸음에서 마일",
    crumbValue: "{steps}걸음",
    related: "{steps}걸음을 마일로",
    relatedHub: "1마일은 몇 걸음인가요?",
    relatedCalories: "{steps}걸음을 칼로리로",
    realWorld: {
      roughly: "{miles}마일은 대략 {name} 거리예요.",
      times: "{name} 거리의 약 {factor}배예요.",
      shorter: "{name}보다 약 {factor}배 짧아요.",
    },
    faq: [
      {
        question: "{steps}걸음은 몇 마일인가요?",
        answer:
          "보폭 76 cm인 평균적인 성인에게 {steps}걸음은 약 {miles}마일({km} km)예요. 키가 작은 사람은 조금 짧고, 키가 큰 사람은 조금 더 길어요. 이 페이지의 키 표에서 본인 숫자를 확인하세요.",
      },
      {
        question: "{steps}걸음을 걷는 데 얼마나 걸리나요?",
        answer:
          "보통 속도 3 mph로 {steps}걸음은 약 {time}이 걸려요. 빠른 속도 4 mph로는 약 {brisk}이에요. 느린 산책 2 mph로는 약 {slow}이에요.",
      },
      {
        question: "{steps}걸음은 칼로리를 얼마나 소모하나요?",
        answer:
          "체중 155 lb(70 kg)인 사람이 보통 속도로 걸으면 {steps}걸음에 대략 {calories}칼로리를 소모해요. 몸무게가 가벼운 사람은 한 걸음당 칼로리가 더 적고, 무거운 사람은 더 많아요. 이 페이지의 칼로리 표에서 본인 체중을 확인하세요.",
      },
      {
        question: "이 환산은 어떻게 계산하나요?",
        answer:
          "CDC와 Mayo Clinic이 가장 자주 드는 평균 성인 보폭 76 cm(2.5 ft)를 써요. 걸음 × 보폭 = 걸은 거리예요. 실제 보폭은 키의 약 0.41배이고, 이 페이지의 키 표에 흔한 키 다섯 가지의 계산이 있어요.",
      },
    ],
    daily: {
      question: "{steps}걸음은 좋은 하루 목표인가요?",
      below:
        "{steps}걸음은 대부분의 보건 기관이 성인에게 권하는 하루 7,000–10,000걸음 목표보다 적어요. 여기서 시작해 조금씩 늘리세요. 하루에 1,000걸음만 더 걸어도 심장 건강에 도움이 돼요.",
      mid: "맞아요. {steps}걸음은 많은 연구와 CDC가 성인에게 말하는 적당한 범위에 들어가요. 꾸준히 달성하면 심혈관 질환 위험이 낮아지고 장기적인 건강에도 좋아요.",
      above:
        "{steps}걸음은 일반적인 하루 10,000걸음 목표보다 많아요. 심장 체력과 체중 관리에 좋은 양이지만, 걸음을 줄인 회복일도 건강에 좋아요.",
    },
  },
  milesToSteps: {
    meta: {
      title: "{miles}은 몇 걸음인가요 — {steps}걸음",
      description:
        "평균적인 성인 기준으로 {miles} ≈ {steps}걸음이에요. 키에 따른 정확한 걸음 수, 소모 칼로리, 걷는 시간을 확인하세요.",
      ogImageAlt: "{miles} 걸음",
    },
    h1: "{milesArticle}은 몇 걸음인가요?",
    subheading: "평균적인 성인의 답과, 키에 따라 어떻게 달라지는지예요.",
    primary: "{steps}걸음",
    secondary:
      "{miles} · {km} km · 보통 속도로 약 {time} · 체중 155 lb(70 kg)인 사람 {calories}칼로리",
    intro:
      "평균적인 성인이 일반적인 보폭 76 cm(2.5 ft)로 {miles}을 걸으면 약 {steps}걸음이에요. 보통 속도 3 mph로는 약 {time}이 걸리고, 체중 155 lb(70 kg)인 사람은 대략 {calories}칼로리를 소모해요. 정확한 걸음 수는 키에 따라 달라져요. 키가 작은 사람은 같은 거리에도 걸음이 더 필요해요. 아래 표를 보세요.",
    crumb: "마일에서 걸음",
    relatedHub: "걸음을 마일로 환산",
    relatedCalories: "{steps}걸음을 칼로리로",
    faq: [
      {
        question: "{miles}은 몇 걸음인가요?",
        answer:
          "보폭 76 cm인 평균적인 성인에게 {miles}은 약 {steps}걸음이에요. 키가 작은 사람은 같은 거리를 가려면 걸음이 더 필요해요. 이 페이지의 키 표에서 본인 숫자를 확인하세요.",
      },
      {
        question: "{miles}을 걷는 데 얼마나 걸리나요?",
        answer:
          "보통 속도 3 mph로 {miles}은 약 {time}이 걸려요. 빠른 속도 4 mph로는 약 {brisk}이에요. 느린 산책 2 mph로는 약 {slow}이에요.",
      },
      {
        question: "{milesArticle}은 칼로리를 얼마나 소모하나요?",
        answer:
          "{miles}을 걸으면 체중 155 lb(70 kg)인 사람은 보통 속도에서 대략 {calories}칼로리를 소모해요. 가벼운 사람은 더 적고, 무거운 사람은 더 많아요. 이 페이지의 칼로리 표를 보세요.",
      },
      {
        question: "마일을 걸음으로 어떻게 계산하나요?",
        answer:
          "거리를 미터로 100배 하고(cm/m) 평균 보폭 76 cm로 나눠요. 그래서 {miles} = {meters} m × 100 ÷ 76 ≈ {steps}걸음이에요. 실제 보폭은 키의 약 0.41배예요.",
      },
    ],
    exercise: {
      question: "하루에 {miles}을 걸으면 운동으로 충분한가요?",
      yes: "충분해요. 하루에 {miles}({steps}걸음)를 보통에서 빠른 속도로 걸으면 CDC가 권하는 주 150분의 중간 강도 유산소 활동을 넉넉히 채워요.",
      start:
        "하루에 {miles}은 좋은 시작이에요. 활동적인 범위에 들고, CDC가 권하는 주 150분의 유산소 활동에도 보탬이 돼요. 하루에 한 번 더 걸으면 건강 효과가 더 커져요.",
      below:
        "하루에 {miles}보다 적으면 CDC의 최소 권장보다 낮아요. 조금씩 늘리세요. 하루에 1,000걸음만 더 걸어도 심장 건강에 도움이 돼요.",
    },
  },
  kmToSteps: {
    meta: {
      title: "{km} km는 몇 걸음인가요 — {steps}걸음",
      description:
        "평균적인 성인 기준으로 {km} km ≈ {steps}걸음이에요. 키에 따른 정확한 걸음 수, 소모 칼로리, 걷는 시간을 확인하세요.",
      keywords: [
        "{km} km 걸음",
        "{km} km는 몇 걸음",
        "{km} km를 걸음으로",
        "{km}킬로미터 걸음",
      ],
      ogImageAlt: "{km} km 걸음",
    },
    h1: "{km} km는 몇 걸음인가요?",
    subheading: "평균적인 성인의 답과, 키에 따라 어떻게 달라지는지예요.",
    primary: "{steps}걸음",
    secondary: "{km} km · 보통 속도로 약 {time} · 체중 70 kg인 사람 {calories}칼로리",
    intro:
      "평균적인 성인이 일반적인 보폭 76 cm(2.5 ft)로 {km} km를 걸으면 약 {steps}걸음이에요. 보통 속도 5 km/h로는 약 {time}이 걸리고, 체중 70 kg(155 lb)인 사람은 대략 {calories}칼로리를 소모해요. 정확한 걸음 수는 키에 따라 달라져요. 키가 작은 사람은 같은 거리에도 걸음이 더 필요해요.",
    crumb: "km에서 걸음",
    crumbValue: "{km} km",
    related: "{km} km 걸음",
    relatedHub: "걸음을 km로 환산",
    faq: [
      {
        question: "{km} km는 몇 걸음인가요?",
        answer:
          "보폭 76 cm인 평균적인 성인에게 {km} km는 약 {steps}걸음이에요. 키가 작은 사람은 같은 거리를 가려면 걸음이 더 필요해요. 이 페이지의 키 표에서 본인 숫자를 확인하세요.",
      },
      {
        question: "{km} km를 걷는 데 얼마나 걸리나요?",
        answer:
          "보통 속도 5 km/h로 {km} km는 약 {time}이 걸려요. 빠른 속도 6.4 km/h로는 약 {brisk}이에요. 느린 속도 3.2 km/h로는 약 {slow}이에요.",
      },
      {
        question: "{km} km를 걸으면 칼로리를 얼마나 소모하나요?",
        answer:
          "체중 70 kg(155 lb)인 사람이 보통 속도로 {km} km를 걸으면 대략 {calories}칼로리를 소모해요. 이 페이지의 칼로리 표에서 본인 체중을 확인하세요.",
      },
      {
        question: "km를 걸음으로 어떻게 계산하나요?",
        answer:
          "거리에 100,000을 곱하고(cm/km) 평균 보폭 76 cm로 나눠요. 그래서 {km} km = {cm} cm ÷ 76 cm ≈ {steps}걸음이에요. 실제 보폭은 키의 약 0.41배예요.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "{steps}걸음 칼로리 — {steps}걸음은 칼로리를 얼마나 소모하나요?",
      description:
        "평균적인 성인이 {steps}걸음을 걸으면 대략 {calories}칼로리를 소모해요. 체중, 속도, 걷는 시간별 소모량을 확인하세요.",
      keywords: [
        "{steps}걸음 칼로리",
        "{steps}걸음 몇 칼로리",
        "{steps}걸음 소모 칼로리",
        "{steps}걸음 칼로리 소비",
        "{steps}걸음은 몇 칼로리",
      ],
      ogImageAlt: "{steps}걸음 칼로리",
    },
    h1: "{steps}걸음 칼로리 — 칼로리를 얼마나 소모하나요?",
    subheading: "{steps}걸음을 걸을 때 체중과 속도별 칼로리 소모예요.",
    primary: "≈ {calories}칼로리",
    secondary: "체중 155 lb(70 kg), 보통 속도 · {miles} mi / {km} km · 약 {time}",
    intro:
      "평균적인 성인(155 lb / 70 kg)이 보통 속도로 {steps}걸음을 걸으면 약 {calories}칼로리를 소모해요. 거리는 {miles}마일({km} km)이고, 약 {time}이 걸려요. 칼로리 소모는 체중과 함께 늘어요. 가벼운 사람은 더 적고, 무거운 사람은 더 많아요.",
    crumb: "걸음에서 칼로리",
    crumbValue: "{steps}걸음",
    related: "{steps}걸음 칼로리",
    relatedMiles: "{steps}걸음을 마일로",
    relatedTool: "걷기 칼로리 계산기",
    realWorld: {
      roughly: "{calories}칼로리는 대략 {name} 정도예요.",
      times: "{calories}칼로리는 {name}의 약 {factor}배예요.",
      less: "{calories}칼로리는 {name}보다 약 {factor}배 적어요.",
    },
    faq: [
      {
        question: "{steps}걸음은 칼로리를 얼마나 소모하나요?",
        answer:
          "체중 155 lb(70 kg)인 사람이 보통 속도 3 mph로 걸으면 {steps}걸음에 약 {calories}칼로리를 소모해요. 체중이 더 무거운 사람은 더 많이 소모해요. 이 페이지의 체중 표를 보세요.",
      },
      {
        question: "걷는 속도에 따라 칼로리 소모가 달라지나요?",
        answer:
          "조금 달라져요. 4 mph(빠름)는 2 mph(느림)보다 분당 약 30% 더 많은 칼로리를 소모하지만, 거리도 더 빨리 끝나서 걸음 수가 같으면 총량은 생각보다 비슷해요. 체중 150 lb인 사람은 대략 {slowCal}(느림)에서 {briskCal}(빠름) 사이예요.",
      },
      {
        question: "{steps}걸음을 걷는 데 얼마나 걸리나요?",
        answer:
          "보통 걷는 속도(3 mph)로 약 {time}이에요. 더 빠른 4 mph는 {brisk}이에요. 느린 2 mph 산책은 {slow}이에요.",
      },
      {
        question: "이 숫자의 계산식은 무엇인가요?",
        answer:
          "표준 MET 칼로리 식을 써요. 칼로리 = MET × 체중(kg) × 시간(h)이에요. 보통 걷는 속도에서 MET = 3.5예요. 평균 보폭 76 cm로 걸음을 거리로 바꾸고, 그 거리를 걷는 시간으로 바꿔요.",
      },
    ],
    loss: {
      question: "{steps}걸음의 칼로리로 체중을 줄일 수 있나요?",
      yes: "{calories}칼로리는 하루 적자에서 의미 있는 양이에요. 더 먹어서 메우지 않으면 2주 동안 약 0.5 lb가 빠져요. 식사만 조금 조절해도 꾸준히 체중을 줄일 수 있어요.",
      no: "{calories}칼로리는 도움이 되지만, 그것만으로 체중이 줄지는 않아요. 식사에서 약간의 칼로리 적자를 만들고 하루에 최소 7,500–10,000걸음을 목표로 하세요.",
    },
  },
  stepsToTime: {
    meta: {
      title: "{steps}걸음을 걷는 데 얼마나 걸리나요?",
      description:
        "{steps}걸음은 보통 속도로 약 {time}이 걸려요. 5가지 속도의 걷는 시간, 거리, 칼로리 소모를 확인하세요.",
      keywords: [
        "{steps}걸음 걷는 시간",
        "{steps}걸음 얼마나 걸려",
        "{steps}걸음 몇 분",
        "{steps}걸음 소요 시간",
        "{steps}걸음 시간",
      ],
      ogImageAlt: "{steps}걸음 걷는 시간",
    },
    h1: "{steps}걸음을 걷는 데 얼마나 걸리나요?",
    subheading: "{steps}걸음의 걷는 시간, 거리, 칼로리예요.",
    primary: "≈ {time}",
    secondary: "보통 속도 3 mph · {miles} mi / {km} km · {calories}칼로리",
    intro:
      "{steps}걸음은 보통 속도 3 mph(5 km/h)로 약 {time}이 걸려요. 빠른 4 mph는 {brisk}로 줄고, 느린 2 mph 산책은 {slow}로 늘어나요. {miles}마일({km} km)을 걷고 약 {calories}칼로리를 소모해요.",
    crumb: "걷는 시간",
    crumbValue: "{steps}걸음",
    related: "{steps}걸음 — 걷는 시간",
    relatedMiles: "{steps}걸음을 마일로",
    relatedTool: "걷기 시간 계산기",
    faq: [
      {
        question: "{steps}걸음을 걷는 데 얼마나 걸리나요?",
        answer:
          "보통 걷는 속도 3 mph로 약 {time}이에요. 빠른 속도(4 mph)는 {brisk}이에요. 느린 산책(2 mph)은 {slow}이에요.",
      },
      {
        question: "걷는 시간은 키에 따라 달라지나요?",
        answer:
          "시간은 거의 같아요. 달라지는 건 걸음 수예요. 키가 큰 사람은 같은 거리를 더 적은 걸음으로 가지만, 대부분 비슷한 케이던스(분당 약 100걸음)로 걸어요. 그래서 시간은 키보다 주로 속도에 따라 정해져요.",
      },
      {
        question: "{steps}걸음은 얼마나 먼가요?",
        answer: "평균적인 성인에게 {steps}걸음은 약 {miles}마일({km} km)예요.",
      },
      {
        question: "걷는 시간은 어떻게 계산하나요?",
        answer:
          "시간 = 거리 ÷ 속도예요. 평균 보폭 76 cm로 걸음 수에서 거리를 구한 다음 걷는 속도로 나눠요. 보통 속도(3 mph / 5 km/h)가 기본값이고, 이 페이지의 표에 세 가지 속도가 있어요.",
      },
    ],
    spread: {
      question: "{steps}걸음을 하루 중에 나눠 걸을 수 있나요?",
      high: "그럼요. 하루에 {steps}걸음을 채우는 사람 대부분은 산책, 볼일, 일상적인 움직임으로 모아요. 15분 산책 세 번에 평소 활동을 더하면 보통 거기에 닿아요.",
      low: "돼요. 20–30분 산책 한 번에 평소 활동(차까지 걷기, 사무실에서 걷기 등)만 더해도, 긴 산책을 따로 하지 않아도 보통 {steps}걸음에 닿아요.",
    },
  },
  milesToTime: {
    meta: {
      title: "{miles}을 걷는 데 얼마나 걸리나요?",
      description:
        "{miles}은 보통 속도 3 mph로 약 {time}이 걸려요. 세 가지 속도의 걷는 시간과 함께 걸음 수, 칼로리를 확인하세요.",
      ogImageAlt: "{miles} 걷는 시간",
    },
    h1: "{milesArticle}을 걷는 데 얼마나 걸리나요?",
    subheading: "{miles}의 걷는 시간, 걸음, 칼로리예요.",
    primary: "≈ {time}",
    secondary: "보통 속도 3 mph · {steps}걸음 · 체중 70 kg인 사람 {calories}칼로리",
    intro:
      "{miles}은 보통 속도 3 mph(5 km/h)로 약 {time}이 걸려요. 빠른 4 mph는 {brisk}로 줄고, 느긋한 2 mph는 {slow}로 늘어나요. 약 {steps}걸음을 걷고 대략 {calories}칼로리를 소모해요.",
    crumb: "걷는 시간",
    relatedTool: "걷기 시간 계산기",
    faq: [
      {
        question: "{milesArticle}을 걷는 데 얼마나 걸리나요?",
        answer: "보통 속도 3 mph로 약 {time}이에요. 빠른 4 mph는 {brisk}이에요. 느린 2 mph는 {slow}이에요.",
      },
      {
        question: "{miles}은 몇 걸음인가요?",
        answer:
          "보폭 76 cm인 평균적인 성인에게 {miles}은 약 {steps}걸음이에요. 키가 작은 사람은 걸음이 더 필요해요. 이 페이지의 키 표를 보세요.",
      },
      {
        question: "{miles}을 걸으면 칼로리를 얼마나 소모하나요?",
        answer:
          "체중 70 kg(155 lb)인 사람이 보통 속도로 걸으면 대략 {calories}칼로리예요. 더 무거운 사람은 더 많이 소모해요. 체중 표를 보세요.",
      },
      {
        question: "걷는 시간은 어떻게 계산하나요?",
        answer:
          "시간 = 거리 ÷ 속도예요. {miles} = {km} km예요. 5 km/h에서는 {time}이에요. CDC와 ACSM이 중간 강도의 신체 활동으로 발표한 같은 세 가지 속도를 써요.",
      },
    ],
    exercise: {
      question: "하루에 {miles}을 걸으면 운동으로 충분한가요?",
      yes: "충분해요. 하루에 {miles}을 보통에서 빠른 속도로 걸으면 CDC가 권하는 주 150분의 중간 강도 유산소 활동을 넉넉히 채워요.",
      start:
        "하루에 {miles}은 좋은 시작이에요. 평소 활동과 합치면 활동적인 범위에 들지만, 산책을 한 번 더 하면 건강 효과가 더 커져요.",
      below:
        "하루에 {miles}보다 적으면 CDC의 최소 권장보다 낮아요. 조금씩 늘리세요. 하루에 0.5마일만 더 걸어도 심장 건강에 도움이 돼요.",
    },
  },
};

export default ko;
