import type { ConversionHubsMessages } from "./en";

const ko: ConversionHubsMessages = {
  breadcrumbLabel: "이동 경로",
  openCalculator: "계산기 열기 →",
  units: {
    steps: "{count}걸음",
    miles: "{count}마일",
    mi: "{count} mi",
    km: "{count} km",
    cal: "{count} kcal",
    strideCm: "{stride} cm",
    detailSteps: "{count}걸음 →",
    detailArrow: "{count} →",
    detailKm: "{count} km →",
    detailMi: "{count} mi →",
  },
  mile: {
    one: "{count}마일",
    other: "{count}마일",
  },
  mileArrow: {
    one: "{count}마일 →",
    other: "{count}마일 →",
  },
  duration: {
    minutes: "{minutes}분",
    hours: "{hours}시간",
    hoursMinutes: "{hours}시간 {minutes}분",
  },
  heights: [
    `4'10" (147 cm) — 작은 키`,
    `5'4" (163 cm) — 평균 여성`,
    `5'9" (175 cm) — 평균 성인`,
    `6'0" (183 cm) — 평균 남성`,
    `6'4" (193 cm) — 큰 키`,
  ],
  heightShort: {
    petite: `4'10"`,
    tall: `6'4"`,
  },
  paces: {
    slow: "느린 걸음 (2 mph)",
    normal: "보통 (3 mph)",
    brisk: "빠른 걸음 (4 mph)",
  },
  hub: {
    meta: {
      title: "걸음 환산 — 마일, 킬로미터, 칼로리",
      description:
        "걸음, 마일, 킬로미터, 칼로리를 환산해요. 빠른 답, 전체 환산표, 키와 몸무게에 맞춘 계산기가 있어요.",
      keywords: [
        "걸음 환산",
        "걸음 환산표",
        "걸음 마일",
        "마일 걸음",
        "걸음 칼로리",
        "걸음 거리 환산",
      ],
      ogTitle: "걸음 환산",
      ogDescription: "걸음, 마일, 킬로미터, 칼로리를 환산해요. 빠른 답과 전체 표가 있어요.",
      ogImageAlt: "걸음 환산",
    },
    title: "걸음 환산",
    subtitle:
      "자주 쓰는 걸음 환산에 빠르고 정확한 답을 드려요. 마일, 킬로미터, 칼로리, 걷기 시간이에요.",
    seeAll: "{count}개 모두 보기 →",
    categories: {
      "steps-to-miles": {
        title: "걸음을 마일로",
        description: "걸음 수를 걸은 마일로 환산해요",
      },
      "miles-to-steps": {
        title: "마일을 걸음으로",
        description: "마일을 같은 거리의 걸음 수로 환산해요",
      },
      "steps-to-calories": {
        title: "걸음을 칼로리로",
        description: "걸음 수로 소모 칼로리를 추정해요",
      },
      "steps-to-km": {
        title: "걸음을 킬로미터로",
        description: "걸음 수를 걸은 킬로미터로 환산해요",
      },
      "km-to-steps": {
        title: "킬로미터를 걸음으로",
        description: "킬로미터를 같은 거리의 걸음 수로 환산해요",
      },
      "steps-to-time": {
        title: "걸음을 걷기 시간으로",
        description: "그 걸음을 걷는 데 걸리는 시간이에요",
      },
      "miles-to-time": {
        title: "마일을 걷기 시간으로",
        description: "그 마일을 걷는 데 걸리는 시간이에요",
      },
    },
    stepsToMilesTitle: "인기: 걸음을 마일로",
    milesToStepsTitle: "인기: 마일을 걸음으로",
    stepsToCaloriesTitle: "인기: 걸음을 칼로리로",
    personalTitle: "내 숫자가 필요해요?",
    personalBody:
      "이 표는 평균이에요. 계산기에 키, 몸무게, 속도를 넣으면 정확한 답이 나와요.",
    distanceCta: "걸음 거리 계산기",
    calorieCta: "칼로리 계산기",
  },
  stepsToMiles: {
    meta: {
      title: "걸음을 마일로 환산 — 표와 계산기",
      description:
        "걸음 수를 마일로 환산해요. {ten}걸음 ≈ {tenMiles}마일 · {five}걸음 ≈ {fiveMiles}마일. {from}걸음부터 {to}걸음까지 표가 있어요.",
      keywords: [
        "걸음 마일 환산",
        "걸음을 마일로",
        "걸음 마일 계산기",
        "걸음 마일 표",
        "걸음 마일 변환",
        "걸음은 몇 마일",
      ],
      ogTitle: "걸음을 마일로 환산 — 표와 계산기",
      ogDescription:
        "걸음 수를 마일로 환산해요. {ten}걸음 ≈ {tenMiles}마일. {from} → {to}걸음 표예요.",
      ogImageAlt: "걸음을 마일로",
    },
    crumb: "걸음을 마일로",
    title: "걸음 마일 환산",
    intro:
      "걸음 수를 마일로 환산해요. 각 행에서 칼로리, 걷기 시간, 키별 보폭 표가 있는 상세 페이지로 이동해요.",
    formulaTitle: "빠른 식",
    formula: "마일 ≈ 걸음 × {factor}",
    formulaNote:
      "성인 평균 보폭 {stride} cm({feet}피트)로 계산해요. 키가 크면 한 걸음이 조금 길고, 작으면 짧아요. 정확한 숫자는 아래 표의 행을 누르면 돼요.",
    tableTitle: "전체 환산표",
    columns: {
      steps: "걸음",
      miles: "마일",
      kilometers: "킬로미터",
      detail: "상세 페이지",
    },
    exactTitle: "키에 맞춘 정확한 숫자가 필요해요?",
    exactBody:
      "걸음 거리 계산기는 {your} 보폭에 맞춘 정확한 답을 계산해요. 키만 입력하면 돼요.",
    your: "당신의",
    accuracyTitle: "걸음을 마일로 환산하면 얼마나 정확해요?",
    accuracyBody:
      "기본 보폭 {stride} cm / {feet}피트는 평균 키의 성인에 대해 CDC, Mayo Clinic, Harvard Health가 자주 쓰는 숫자예요. 실제 보폭은 약 {short} cm(작은 키)에서 {tall} cm(큰 키)라서, 거리는 ±{low}–{high}% 달라져요.",
    accuracyApp:
      "가장 정확한 숫자는 iPhone이나 Apple Watch의 Steps가 내줘요. 운동 기록으로 실제 보폭을 시간이 지나며 재요.",
  },
  milesToSteps: {
    meta: {
      title: "1마일은 몇 걸음? — {steps}걸음 (환산표)",
      description:
        "평균 성인은 {one}마일 ≈ {steps}걸음이에요. 마일을 걸음으로 바꾸는 표와, 키별 칼로리·걷기 시간이 있어요.",
      keywords: [
        "1마일 몇 걸음",
        "마일 걸음",
        "마일을 걸음으로",
        "1마일 걸음 수",
        "마일은 몇 걸음",
        "마일 걸음 환산",
      ],
      ogTitle: "1마일은 몇 걸음? — {steps}걸음",
      ogDescription: "평균 성인은 {one}마일 ≈ {steps}걸음이에요. 전체 표와 키별 계산이 있어요.",
      ogImageAlt: "마일을 걸음으로",
    },
    crumb: "마일을 걸음으로",
    title: "1마일은 몇 걸음이에요?",
    intro: "짧게 답하면 평균 성인은 약 {highlight}이에요. 정확한 수는 키에 따라 달라요. 표를 보세요.",
    quickLabel: "빠른 답",
    heroFigure: "≈ {steps}",
    heroNote: "평균 성인, 보폭 {stride} cm({feet}피트)예요. 숫자는 키에 따라 달라요.",
    heightTitle: "키별 1마일 걸음",
    heightIntro: "보폭은 키의 약 {ratio}배예요. 키가 작을수록 같은 거리에 걸음이 더 필요해요.",
    heightColumns: {
      height: "키",
      stride: "보폭",
      steps: "1마일당 걸음",
    },
    formulaTitle: "환산 식",
    formula: "걸음 ≈ 마일 × {steps}",
    formulaNote: "또는 {one}마일 = {meters} m × {cm} cm ÷ 보폭 {stride} cm ≈ {steps}걸음이에요.",
    tableTitle: "마일 → 걸음 환산표",
    columns: {
      miles: "마일",
      steps: "걸음 (평균 성인)",
      detail: "상세 페이지",
    },
    exactTitle: "키에 맞춘 정확한 수가 필요해요?",
    exactBody: "걸음 거리 계산기에 키를 한 번 넣으면 1마일당 걸음이 나와요.",
    whyTitle: "왜 「1마일은 {rule}걸음」이라고만 하지 않나요?",
    whyBody:
      "{rule}걸음 어림은 편리하지만 차이가 남아요. CDC와 Mayo Clinic이 쓰는 성인 평균 보폭 {stride} cm면 약 {perMile}이고, {rule}이 아니에요. {daily}걸음인 하루에는 간단한 어림이 약 4분의 1마일을 놓쳐요.",
    perMile: "1마일당 {steps}걸음",
    connectionTitle: "하루 {daily}걸음과의 관계",
    connectionBody:
      "흔한 하루 {daily}걸음 목표는 평균 성인에게 약 {distance}예요. 그래서 {daily}걸음은 보통 속도 걷기 약 {minutes}분을 하루에 나눈 양이에요.",
    distance: "{miles}마일 ({km} km)",
    faq: [
      {
        question: "1마일은 몇 걸음이에요?",
        answer:
          "보폭 {stride} cm({feet}피트)인 평균 성인은 약 {steps}걸음이에요. {tallHeight}는 대략 {tallSteps}걸음, {petiteHeight}는 대략 {petiteSteps}걸음이에요.",
      },
      {
        question: "2마일은 몇 걸음이에요?",
        answer: "평균 성인은 약 {steps}걸음이에요. 다른 거리는 이 페이지의 표를 보세요.",
      },
      {
        question: "5마일은 몇 걸음이에요?",
        answer: "약 {steps}걸음으로, 흔한 하루 {daily}걸음 목표와 비슷해요.",
      },
      {
        question: "1마일 걸음 수는 키에 따라 달라요?",
        answer:
          "네. 보폭은 키의 약 {ratio}배예요. {petiteHeight}는 1마일에 약 {petiteSteps}걸음, {tallHeight}는 약 {tallSteps}걸음이라 차이가 {percent}%예요.",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "걸음을 킬로미터로 환산 — 표와 계산기",
      description:
        "걸음 수를 킬로미터로 환산해요. {steps}걸음 ≈ {km} km. {from}걸음부터 {to}걸음까지 표가 있어요.",
      keywords: [
        "걸음 km 환산",
        "걸음 킬로미터",
        "걸음을 km로",
        "걸음 킬로 환산",
        "걸음 km 표",
        "걸음은 몇 km",
      ],
      ogTitle: "걸음을 km로 환산",
      ogDescription: "걸음 수를 km로 환산해요. {steps}걸음 ≈ {km} km. 전체 환산표예요.",
      ogImageAlt: "걸음을 킬로미터로",
    },
    crumb: "걸음을 km로",
    title: "걸음 킬로미터 환산",
    intro:
      "걸음 수를 킬로미터로 환산해요. 각 행에서 칼로리, 걷기 시간, 키별 보폭 표가 있는 상세 페이지로 이동해요. 정확한 개인 답은 {calculator}에서 확인해요.",
    calculatorLink: "걸음 거리 계산기",
    formulaTitle: "빠른 식",
    formula: "km ≈ 걸음 × {factor}",
    formulaNote:
      "또는 걸음 × 보폭 {stride} cm ÷ {perKm} = km 거리예요. 성인 평균 보폭은 {stride} cm({feet}피트)예요.",
    tableTitle: "전체 환산표",
    columns: {
      steps: "걸음",
      kilometers: "킬로미터",
      miles: "마일",
      detail: "상세 페이지",
    },
    exactTitle: "키에 맞춘 정확한 숫자가 필요해요?",
    exactBody: "걸음 거리 계산기는 보폭에 맞춘 정확한 답을 계산해요. 키만 입력하면 돼요.",
  },
  kmToSteps: {
    meta: {
      title: "1km는 몇 걸음? — {steps}걸음 (환산표)",
      description:
        "평균 성인은 {one} km ≈ {steps}걸음이에요. {from}–{to} km 표와, 키에 맞춘 정확한 걸음 계산이 있어요.",
      keywords: [
        "1km 몇 걸음",
        "km 걸음",
        "킬로미터 걸음",
        "1km 걸음 수",
        "5km 걸음",
        "km를 걸음으로",
      ],
      ogTitle: "1km는 몇 걸음? — {steps}걸음",
      ogDescription: "평균 성인은 {one} km ≈ {steps}걸음이에요. 전체 환산표예요.",
      ogImageAlt: "km를 걸음으로",
    },
    crumb: "km를 걸음으로",
    title: "1킬로미터는 몇 걸음이에요?",
    intro: "짧게 답하면 평균 성인은 약 {highlight}이에요. 정확한 수는 키에 따라 달라요. 표를 보세요.",
    quickLabel: "빠른 답",
    heroFigure: "≈ {steps}",
    heroNote: "평균 성인, 보폭 {stride} cm({feet}피트)예요. 숫자는 키에 따라 달라요.",
    heightTitle: "키별 1km 걸음",
    heightIntro: "보폭은 키의 약 {ratio}배예요. 키가 작을수록 같은 거리의 걸음이 더 많아요.",
    heightColumns: {
      height: "키",
      stride: "보폭",
      steps: "1km당 걸음",
    },
    formulaTitle: "환산 식",
    formula: "걸음 ≈ km × {steps}",
    formulaNote: "또는 {one} km = {cm} cm ÷ 보폭 {stride} cm ≈ {steps}걸음이에요.",
    tableTitle: "km → 걸음 환산표",
    columns: {
      kilometers: "킬로미터",
      steps: "걸음 (평균 성인)",
      detail: "상세 페이지",
    },
    exactTitle: "키에 맞춘 정확한 숫자가 필요해요?",
    exactBody: "걸음 거리 계산기에 키를 한 번 넣으면 1km당 걸음이 나와요.",
    faq: [
      {
        question: "1킬로미터는 몇 걸음이에요?",
        answer:
          "보폭 {stride} cm인 평균 성인은 약 {steps}걸음이에요. 대략 {tall}(큰 키)에서 {petite}(작은 키) 사이예요.",
      },
      {
        question: "5km는 몇 걸음이에요?",
        answer: "평균 성인은 약 {steps}걸음이에요. 일반적인 5K 대회예요.",
      },
      {
        question: "10km는 몇 걸음이에요?",
        answer: "약 {steps}걸음으로, 흔한 하루 {daily}걸음 목표를 넘어요.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "걸음을 칼로리로 환산 — 한 걸음 칼로리",
      description:
        "걸음 수를 소모 칼로리로 환산해요. {steps}걸음 ≈ {calories}칼로리. {from}걸음부터 {to}걸음까지 몸무게별 표가 있어요.",
      keywords: [
        "걸음 칼로리",
        "한 걸음 칼로리",
        "걸음 칼로리 환산",
        "걸음은 몇 칼로리",
        "걸음을 칼로리로",
      ],
      ogTitle: "걸음 칼로리 환산",
      ogDescription: "{steps}걸음 ≈ {calories}칼로리. {from}–{to}걸음 환산표예요.",
      ogImageAlt: "걸음을 칼로리로",
    },
    crumb: "걸음을 칼로리로",
    title: "걸음 칼로리 환산",
    intro: "걸음 수를 소모 칼로리로 환산한 뒤, 몸무게, 속도, 걷기 시간별 내역으로 들어가요.",
    formulaTitle: "빠른 식",
    formula: "칼로리 ≈ 걸음 × {factor} × (체중 kg ÷ {weight})",
    formulaNote:
      "평균 성인은 약 {per}걸음당 {one}칼로리예요. 몸무게가 더 나가면 그만큼 더 소모해요.",
    tableTitle: "전체 환산표 ({lb} lb / {kg} kg 성인, 보통 속도)",
    columns: {
      steps: "걸음",
      calories: "칼로리",
      detail: "상세 페이지",
    },
    exactTitle: "개인 소모 칼로리가 필요해요?",
    exactBody: "걸음 칼로리 계산기에 몸무게, 나이, 성별을 넣으면 더 정확한 숫자가 나와요.",
  },
  stepsToTime: {
    meta: {
      title: "걸음 수 걷는 시간 — 시간 환산표",
      description:
        "걸음 수별 걷기 시간이에요. 보통 속도로 {steps}걸음 ≈ {hours}시간 {mins}분. {from} → {to}걸음을 세 가지 속도로 담은 표예요.",
      keywords: [
        "걸음 걷는 시간",
        "걸음 걷기 시간",
        "한 걸음 시간",
        "걸음 분",
        "몇 걸음 몇 분",
      ],
      ogTitle: "걸음을 걷는 데 얼마나 걸려요?",
      ogDescription: "걸음 수별 걷기 시간이에요. 세 가지 속도의 표가 있어요.",
      ogImageAlt: "걸음과 걷기 시간",
    },
    crumb: "걷기 시간",
    title: "걸음을 걷는 데 얼마나 걸려요?",
    intro:
      "세 가지 흔한 속도로 걸음 수별 걷기 시간을 보여줘요. 행을 누르면 칼로리와 보폭이 있는 상세 페이지가 열려요.",
    formulaTitle: "빠른 식",
    formula: "분 ≈ 걸음 ÷ {cadence}",
    formulaNote:
      "대부분의 성인은 보통 속도로 1분에 약 {cadence}걸음 걸어요. 그래서 {steps}걸음은 약 {minutes}분({hours}시간 {mins}분) 걷기예요. 조금 빠른 속도({mph} mph)면 {fastHours}시간 {fastMins}분으로 줄어요.",
    tableTitle: "걸음 수와 속도별 걷기 시간",
    columns: {
      steps: "걸음",
      detail: "자세히",
    },
    exactTitle: "특정 걷기를 계획할 건가요?",
    exactBody: "걷기 시간 계산기는 거리나 걸음 수의 시간을, 출발과 도착 시각과 함께 추정해요.",
  },
  milesToTime: {
    meta: {
      title: "마일 걷는 시간 — 속도별",
      description:
        "마일 거리별 걷기 시간이에요. {one}마일 ≈ {oneMin}분, {three}마일 ≈ {threeHours}시간, {five}마일 ≈ {fiveHours}시간 {fiveMins}분. 세 가지 속도의 표예요.",
      keywords: [
        "1마일 걷는 시간",
        "마일 걷기 몇 분",
        "마일 걷기 시간",
        "마일 소요 시간",
        "5마일 걷는 시간",
        "3마일 걷는 시간",
      ],
      ogTitle: "마일을 걷는 데 얼마나 걸려요?",
      ogDescription: "마일 거리별 걷기 시간이에요. 세 가지 속도가 있어요.",
      ogImageAlt: "마일과 걷기 시간",
    },
    crumb: "마일 걷기 시간",
    title: "마일을 걷는 데 얼마나 걸려요?",
    intro: "세 가지 흔한 속도로 거리별 걷기 시간을 보여줘요. 행을 누르면 상세 페이지가 열려요.",
    formulaTitle: "빠른 기준",
    formula: "분 ≈ 마일 × {minutes}",
    formulaNote:
      "보통 걷기 속도 {normal} mph 기준이에요. 빠른 걸음({brisk} mph)은 약 {briskCut}% 줄고, 느린 걸음({slow} mph)은 {slowAdd}% 늘어요.",
    tableTitle: "거리와 속도별 걷기 시간",
    columns: {
      distance: "거리",
      detail: "자세히",
    },
    exactTitle: "특정 경로를 계획하고 있나요?",
    exactBody: "걷기 시간 계산기는 출발·도착 시각, 휴식, 속도를 포함해 어떤 거리든 계산해요.",
    faq: [
      {
        question: "1마일을 걷는 데 얼마나 걸려요?",
        answer:
          "보통 속도 {normalMph} mph로 약 {normalMin}분이에요. 빠른 걸음({briskMph} mph)은 {briskMin}분. 느린 걸음({slowMph} mph)은 {slowMin}분이에요.",
      },
      {
        question: "3마일을 걷는 데 얼마나 걸려요?",
        answer:
          "보통 속도로 약 {hours}시간이에요. 빠른 걸음은 {briskMin}분. 느린 걸음은 {slowHours}시간 {slowMins}분이에요.",
      },
      {
        question: "5마일을 걷는 데 얼마나 걸려요?",
        answer:
          "보통 속도로 약 {hours}시간 {mins}분이에요. 빠른 걸음은 {briskHours}시간 {briskMins}분. 느린 걸음은 {slowHours}시간 {slowMins}분이에요.",
      },
    ],
  },
};

export default ko;
