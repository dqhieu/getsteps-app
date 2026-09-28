import type { BmrCalculatorMessages } from "./en";

const ko: BmrCalculatorMessages = {
  meta: {
    title: "BMR 계산기: 기초대사량을 공식 3개로",
    description:
      "Mifflin-St Jeor, Harris-Benedict, Katch-McArdle로 BMR을 나란히 계산해요. 30세 75 kg 남성은 안정 시 하루 약 1,699칼로리를 써요. 무료 계산기예요.",
    keywords: [
      "BMR 계산기",
      "기초대사량 계산기",
      "안정 시 대사량",
      "Mifflin-St Jeor 공식",
      "Harris-Benedict 공식",
      "Katch-McArdle 공식",
      "안정 시 칼로리 소모",
      "BMR과 TDEE",
      "대사량 계산기",
    ],
    ogTitle: "BMR 계산기: 기초대사량을 공식 3개로",
    ogDescription:
      "임상 공식 세 가지로 기초대사량을 나란히 계산하고, 활동 수준별 하루 칼로리도 확인해요.",
    ogImageAlt: "BMR 계산기",
  },
  hero: {
    title: "BMR 계산기",
    subtitle:
      "완전히 쉴 때 몸이 쓰는 칼로리를 구해요. 임상 공식 세 가지를 나란히 돌려서, 하나의 숫자가 정확한 척하는 대신 차이를 보여 줘요.",
  },
  calculator: {
    details: "내 정보",
    gender: "성별",
    male: "남성",
    female: "여성",
    age: "나이",
    years: "세",
    weight: "체중",
    height: "키",
    bodyFat: "체지방 %",
    bodyFatOptional: "(선택: Katch-McArdle을 열어요)",
    bodyFatPlaceholder: "예: 20",
    activity: "활동 수준",
    activityLevels: {
      sedentary: "거의 안 움직임",
      light: "가볍게 활동",
      moderate: "보통으로 활동",
      active: "활동적",
      very_active: "매우 활동적",
    },
    activityDescriptions: {
      sedentary: "책상 업무, 운동이 거의 없음",
      light: "가벼운 운동 주 1–3일",
      moderate: "보통 강도 운동 주 3–5일",
      active: "힘든 운동 주 6–7일",
      very_active: "몸을 쓰는 일, 또는 하루 두 번 운동",
    },
    calculate: "BMR 계산",
    results: "결과",
    bmr: "BMR",
    atRest: "안정 시 칼로리/일",
    maintenance: "유지",
    maintenanceAt: "{level} 기준",
    leanMass:
      "제지방량: {mass}. 체지방률을 넣어서 대표 숫자는 Katch-McArdle을 써요.",
    kgValue: "{value} kg",
    share: "하루 종일 앉아 있어도, 쓰는 칼로리의 약 {percent}%는 BMR이에요.",
    formulasTitle: "공식 세 가지",
    formulaNames: {
      mifflin: "Mifflin-St Jeor",
      harris: "개정 Harris-Benedict",
      katch: "Katch-McArdle",
    },
    formulaNotes: {
      mifflin:
        "현대 인구로 검증됐어요. 체지방을 모를 때 쓰는 임상 기본값이고, 가장 믿을 만해요.",
      harris:
        "1919년 원식을 1984년에 고친 공식이에요. 당시 집단이 지금보다 마르고 활동적이라 약 5% 높게 나와요.",
      katch:
        "제지방량으로 계산하고 성별과 키는 보지 않아요. 마르거나 근육이 많은 몸에서 가장 정확해요.",
      katchLocked: "체지방률이 필요해요. 위에 넣으면 이 추정이 보여요.",
    },
    used: "사용 중",
    calValue: "{value} cal",
    byActivity: "활동 수준별 하루 칼로리",
    resultCta: {
      headline: "BMR은 바닥이에요. 걸음이 레버예요.",
      description:
        "안정 시 소모는 거의 못 움직이지만, 그 위는 움직일 수 있어요. Steps는 하루 활동을 자동으로 기록하고, 방금 계산한 숫자에 무엇이 더해지는지 보여 줘요.",
    },
  },
  info: {
    title: "BMR을 계산하는 방식",
    intro:
      "임상에서 자주 쓰는 식은 세 가지이고, 차이가 무시하기 어려워요. 하나를 골라 차이를 숨기지 않고, 이 계산기는 세 가지를 모두 돌려요.",
    formulaTitle: "공식",
    formulas: [
      {
        title: "Mifflin-St Jeor (1990)",
        lines: [
          "남성: (10 × 체중 kg) + (6.25 × 키 cm) − (5 × 나이) + 5",
          "여성: (10 × 체중 kg) + (6.25 × 키 cm) − (5 × 나이) − 161",
        ],
      },
      {
        title: "개정 Harris-Benedict (1984)",
        lines: [
          "남성: 88.362 + (13.397 × 체중) + (4.799 × 키) − (5.677 × 나이)",
          "여성: 447.593 + (9.247 × 체중) + (3.098 × 키) − (4.330 × 나이)",
        ],
      },
      {
        title: "Katch-McArdle",
        lines: ["370 + (21.6 × 제지방량 kg). 제지방량 = 체중 × (1 − 체지방 %)"],
      },
    ],
    exampleLabel: "예시:",
    example:
      "30세 남성, 75 kg, 175 cm는 Mifflin-St Jeor 1,699, Harris-Benedict 1,763이에요. 체지방 20%이면 Katch-McArdle은 1,666을 돌려줘요.",
    primary:
      "체지방률을 넣지 않으면 대표 숫자는 Mifflin-St Jeor예요. 넣으면 Katch-McArdle이 대신해요. 세 가지 중 키와 성별로 짐작하지 않고, 안정 시 소모를 실제로 맡는 조직을 재는 식은 이것뿐이에요.",
    activityFactors:
      "BMR에 활동 계수를 곱하면 TDEE가 나와요. 거의 안 움직임 1.2, 가벼운 활동 1.375, 보통 1.55, 활동적 1.725, 매우 활동적 1.9예요. 계산기는 다섯 가지를 모두 보여 줘요.",
  },
  faqTitle: "자주 묻는 질문",
  faq: [
    {
      question: "BMR이 무엇인가요?",
      answer:
        "BMR, 기초대사량은 아무것도 하지 않을 때 몸이 쓰는 에너지예요. 호흡, 혈액 순환, 체온, 세포 회복이 들어가요. 12시간 금식 뒤, 깨어 있는 상태로 가만히 누워서 재요. 대부분의 성인에게 BMR은 하루 칼로리의 60–75%라서, 소모에서 가장 큰 부분이에요.",
    },
    {
      question: "BMR과 안정 시 대사량은 어떻게 다른가요?",
      answer:
        "BMR은 실험실의 엄격한 조건에서 재요. 완전한 안정, 공복, 온도가 중립인 방이에요. 안정 시 대사량(RMR)은 조건이 느슨해서, 소화와 작은 움직임이 조금 들어가 약 10% 높게 나와요. 일상에서는 말이 섞이고, 이 계산기를 포함해 온라인 계산기는 사실 RMR에 가까운 값을 추정해요.",
    },
    {
      question: "어떤 BMR 공식이 가장 정확한가요?",
      answer:
        "대부분에게는 Mifflin-St Jeor예요. 현대 인구에서 간접 열량 측정으로 검증됐고, 성인의 약 80%에서 오차가 10% 안쪽이에요. Harris-Benedict는 1984년 개정판도 약 5% 높아요. 1919년 집단이 더 마르고 활동적이었기 때문이에요. 체지방률을 알면 Katch-McArdle이 둘보다 나아요. 안정 시 소모를 실제로 움직이는 제지방량으로 계산하거든요.",
    },
    {
      question: "BMR과 TDEE는 어떻게 다른가요?",
      answer:
        "BMR은 완전히 쉴 때의 소모예요. TDEE(하루 총 에너지 소비)는 BMR에 활동 계수를 곱한 값이라, 움직임, 운동, 음식 소화가 들어가요. TDEE는 항상 더 높고, 거의 안 움직이는 날도 BMR의 약 1.2배예요. 칼로리 목표는 BMR이 아니라 TDEE에 맞춰요.",
    },
    {
      question: "체중을 줄이려고 BMR만큼만 먹어야 하나요?",
      answer:
        "아니에요. BMR만큼 먹는 것은 하루 종일 움직이지 않은 것처럼 먹는 거예요. 움직이기 전에 수백에서 천 칼로리 적자가 생겨요. 근육이 빠질 만큼 세고, 많은 사람에게 여성 1,200, 남성 1,500칼로리 하한보다 낮아져요. TDEE에서 250–500칼로리를 빼요.",
    },
    {
      question: "BMR이 생각보다 낮은 이유는 무엇인가요?",
      answer:
        "몸 크기가 가장 큰 입력이라, 작고 가벼운 사람일수록 숫자가 낮고 모든 공식이 나이를 빼요. 체성분도 중요해요. 근육은 같은 무게의 지방보다 안정 시에 약 세 배를 써서, 같은 체중이어도 200칼로리 이상 다를 수 있어요. 긴 칼로리 적자 뒤에는 적응 열 생성이 실제 BMR을 예측보다 10–15% 낮출 수 있어요.",
    },
    {
      question: "BMR을 올릴 수 있나요?",
      answer:
        "조금, 그리고 천천히요. 오래 가는 방법은 근육을 더하는 것뿐이에요. 근육 1 kg은 안정 시에 하루 약 13칼로리를 더해서, 제대로 한 해 근력 운동을 해도 50–100칼로리 정도예요. 진짜지만 크지는 않아요. 매일 움직임을 늘리면 TDEE가 BMR으로 할 수 있는 어떤 것보다 훨씬 많이 바뀌어요. 그래서 걸음 수가 대사 요령보다 결과를 더 빨리 움직여요.",
    },
  ],
  cta: {
    title: "안정 시보다 더 쓴 칼로리를 기록해요",
    description:
      "Steps 앱으로 걸음을 자동으로 세고, 하루 칼로리 소모가 BMR 위에 쌓이는 모습을 확인해요.",
  },
  sticky: "Steps로 걸음 기록하기",
  howTo: {
    name: "BMR을 계산하는 방법",
    description:
      "성별, 나이, 체중, 키를 넣으면 임상 공식 세 가지의 기초대사량과 활동 수준별 하루 칼로리를 받아요.",
    steps: [
      {
        name: "몸 정보를 넣어요",
        text: "성별, 나이, 체중, 키를 넣어요. 체중은 킬로그램과 파운드, 키는 센티미터와 피트/인치를 바꿔요.",
      },
      {
        name: "알면 체지방률을 더해요",
        text: "선택이에요. 넣으면 Katch-McArdle이 열려요. 제지방량으로 계산해서 마르거나 근육이 많은 몸에 가장 정확해요.",
      },
      {
        name: "활동 수준을 골라요",
        text: "거의 안 움직임부터 매우 활동적까지예요. BMR은 바뀌지 않고, 어떤 유지 칼로리를 강조할지가 정해져요.",
      },
      {
        name: "BMR과 유지 칼로리를 확인해요",
        text: "BMR, 세 가지 추정을 나란히, 그리고 다섯 활동 수준 각각의 하루 총 칼로리를 돌려줘요.",
      },
    ],
  },
};

export default ko;
