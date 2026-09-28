import type { TdeeCalculatorMessages } from "./en";

const ko: TdeeCalculatorMessages = {
  meta: {
    title: "TDEE 계산기 — 하루 총 에너지 소비와 필요 칼로리",
    description:
      "하루 총 에너지 소비(TDEE)와 기초대사량(BMR)을 계산해요. 체중 감량, 유지, 근육 증가에 필요한 하루 칼로리를 찾아요.",
    keywords: [
      "TDEE 계산기",
      "하루 총 에너지 소비 계산기",
      "칼로리 계산기",
      "BMR 계산기",
      "하루에 칼로리 얼마나 먹어야 하나요",
      "유지 칼로리 계산기",
      "하루 필요 칼로리",
    ],
    ogTitle: "TDEE 계산기 — 하루 총 에너지 소비와 필요 칼로리",
    ogDescription:
      "하루 총 에너지 소비(TDEE)와 기초대사량(BMR)을 계산해요. 체중 감량, 유지, 근육 증가에 필요한 하루 칼로리를 찾아요.",
  },
  hero: {
    title: "TDEE 계산기",
    subtitle: "신체 수치와 활동량으로 하루에 소모하는 칼로리를 계산해요.",
  },
  intro:
    "성별, 나이, 체중, 키, 활동량을 입력하면 하루 총 에너지 소비(TDEE), 몸이 하루에 쓰는 칼로리를 계산해요. 목표에 맞는 칼로리 기준을 정하는 데 쓰세요.",
  calculator: {
    details: "내 정보",
    gender: "성별",
    male: "남성",
    female: "여성",
    age: "나이",
    years: "세",
    weight: "체중",
    height: "키",
    activityLevel: "활동량",
    activity: {
      sedentary: "거의 움직이지 않음",
      light: "가벼운 활동",
      moderate: "보통 활동",
      active: "활동적",
      very_active: "매우 활동적",
    },
    calculate: "TDEE 계산",
    results: "결과",
    bmr: "BMR",
    bmrUnit: "안정 시 cal/일",
    tdee: "TDEE",
    tdeeUnit: "합계 cal/일",
    calorieGoals: "칼로리 목표",
    maintenanceBadge: "유지",
    belowMinimum: "최소 미만",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "빠른 감량", weekly: "−1 kg / 주" },
      moderate_loss: { label: "보통 감량", weekly: "−0.5 kg / 주" },
      mild_loss: { label: "가벼운 감량", weekly: "−0.25 kg / 주" },
      maintenance: { label: "유지", weekly: "0 kg / 주" },
      mild_gain: { label: "가벼운 증량", weekly: "+0.25 kg / 주" },
      muscle_gain: { label: "근육 증가", weekly: "+0.5 kg / 주" },
    },
  },
  faqTitle: "TDEE와 칼로리 질문",
  faq: [
    {
      question: "TDEE가 무엇인가요?",
      answer:
        "TDEE는 하루 총 에너지 소비, 몸이 하루에 쓰는 칼로리 전체예요. 기초대사량 BMR(안정 시 칼로리), 신체 활동에 쓰는 에너지, 음식 열효과(소화에 쓰는 칼로리)가 들어가요. 감량, 유지, 근육 증가의 칼로리 목표를 정할 때 가장 중요한 숫자예요.",
    },
    {
      question: "TDEE는 얼마나 정확한가요?",
      answer:
        "Mifflin-St Jeor 방정식을 쓰는 TDEE 계산기는 대부분 사람에게 10–15% 안에서 맞아요. 유전, 근육량, 호르몬, 대사 적응 때문에 실제 값은 달라질 수 있어요. 결과를 출발점으로 삼고 2–3주 체중을 본 다음, 실제 변화에 맞춰 섭취를 100–200칼로리 올리거나 내리세요.",
    },
    {
      question: "BMR과 TDEE는 어떻게 다른가요?",
      answer:
        "BMR(기초대사량)은 완전히 쉬는 동안 몸이 쓰는 칼로리, 호흡, 순환, 세포 회복을 유지하는 최소 에너지예요. TDEE는 BMR 위에 신체 활동, 운동, 소화의 소비를 더해요. TDEE는 항상 BMR보다 높고, 칼로리 목표에는 이 숫자를 써야 해요.",
    },
    {
      question: "체중을 줄이려면 TDEE보다 칼로리를 얼마나 줄이나요?",
      answer:
        "주당 0.25–0.5 kg의 지속 가능한 감량에는 TDEE보다 하루 250–500칼로리 낮은 결핍이 권장돼요. 더 큰 결핍은 근육 손실, 영양 부족, 대사 적응을 부를 수 있어요. 의료 관리 없이는 여성은 하루 1,200칼로리 미만, 남성은 1,500칼로리 미만으로 먹지 않는 것이 일반적이에요. 적당한 결핍에 하루 걸음을 더하는 편이 제한만 하는 것보다 더 효과적인 경우가 많아요.",
    },
    {
      question: "TDEE는 나이에 따라 변하나요?",
      answer:
        "네. 20세 이후 TDEE는 10년마다 약 1–2% 줄어요. 주된 이유는 근육량 감소(근감소증)예요. 근육은 대사가 활발해서 안정 시 지방 조직보다 칼로리를 더 써요. 근력 운동과 활동적인 생활은 이 감소를 꽤 늦춰요. 호르몬 변화, 특히 폐경도 여성의 TDEE를 낮출 수 있어요.",
    },
  ],
  cta: {
    title: "TDEE를 자연스럽게 올려요",
    description: "하루 걸음을 더해 TDEE를 자연스럽게 올리세요. Steps 앱에서 기록해요.",
  },
  howTo: {
    name: "하루 총 에너지 소비를 계산하는 방법",
    description:
      "나이, 성별, 체중, 키, 활동량을 입력하면 Mifflin-St Jeor 방정식으로 BMR과 TDEE를 받아요.",
    steps: [
      {
        name: "나이, 성별, 체중, 키를 입력해요",
        text: "Mifflin-St Jeor 공식에 필요한 입력이에요. 일반 인구에서 가장 정확하다고 보는 식이에요.",
      },
      {
        name: "활동량을 골라요",
        text: "거의 움직이지 않음(책상 일), 가벼운 활동(주 1–3일 운동), 보통(주 3–5일), 매우 활동적(주 6–7일), 또는 그 이상이에요.",
      },
      {
        name: "BMR과 TDEE를 읽어요",
        text: "계산기는 기초대사량 BMR(안정 상태에서 생명을 유지하는 칼로리)과 하루 총 에너지 소비 TDEE(체중을 유지하는 칼로리)를 돌려줘요.",
      },
    ],
  },
};

export default ko;
