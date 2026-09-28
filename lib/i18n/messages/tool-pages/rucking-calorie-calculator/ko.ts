import type { RuckingCalorieCalculatorMessages } from "./en";

const ko: RuckingCalorieCalculatorMessages = {
  meta: {
    title: "러킹 칼로리 계산기: 배낭 무게, 지형, 경사",
    description:
      "배낭 무게, 페이스, 경사, 지형으로 러킹 칼로리를 Pandolf 방정식으로 계산해요. 70 kg인 사람이 15 kg을 메고 한 시간 걸으면 약 350칼로리예요. 무료 계산기예요.",
    keywords: [
      "러킹 칼로리 계산기",
      "배낭 행군 칼로리 계산",
      "러킹 소모 칼로리",
      "웨이트 베스트 칼로리 계산기",
      "백패킹 칼로리 계산기",
      "Pandolf 방정식",
      "부하 운반 에너지 소비",
      "배낭 걷기 칼로리",
    ],
    ogTitle: "러킹 칼로리 계산기: 배낭 무게, 지형, 경사",
    ogDescription:
      "배낭 무게, 페이스, 경사, 지형으로 러킹 소모 칼로리를 계산해요. Pandolf 부하 운반 방정식을 쓰는 무료 계산기예요.",
    ogImageAlt: "러킹 칼로리 계산기",
  },
  hero: {
    title: "러킹 칼로리 계산기",
    subtitle:
      "배낭 무게, 페이스, 경사, 지형으로 러킹 소모 칼로리를 계산해요. Pandolf 부하 운반 방정식을 쓰기 때문에 등에 진 무게가 실제로 반영돼요.",
  },
  calculator: {
    yourRuck: "나의 러킹",
    switchImperial: "lb / mph로 전환",
    switchMetric: "kg / km/h로 전환",
    bodyWeight: "체중",
    packWeight: "배낭 무게",
    pace: "페이스",
    duration: "시간",
    minutes: "분",
    grade: "경사: {percent}%",
    terrain: "지형",
    terrains: {
      blacktop: {
        label: "포장도로",
        inline: "포장도로",
        description: "아스팔트나 트레드밀이에요. 기준이 되는 노면이에요.",
      },
      gravel: {
        label: "자갈길",
        inline: "자갈길",
        description: "흙길이나 자갈길에 낮은 덤불이 있어요.",
      },
      trail: {
        label: "하이킹 트레일",
        inline: "하이킹 트레일",
        description: "뿌리와 바위가 있는 다져진 싱글트랙이에요.",
      },
      "heavy-brush": {
        label: "울창한 덤불",
        inline: "울창한 덤불",
        description: "밑풀이 두껍고 다져진 길이 없어요.",
      },
      swampy: {
        label: "습지",
        inline: "습지",
        description: "발밑이 꺼지는 부드럽고 물 먹은 땅이에요.",
      },
      sand: {
        label: "성긴 모래",
        inline: "성긴 모래",
        description: "마른 해변 모래예요. 흔한 노면 가운데 에너지가 가장 많이 들어요.",
      },
    },
    terrainFactor: "{description} 지형 계수는 {factor}예요.",
    caloriesBurned: "소모 칼로리",
    packAdds:
      "{load} 배낭은 짐을 들지 않은 같은 걷기({unloaded} kcal)보다 {extra} kcal를 더해요.",
    heavyLoad:
      "그 배낭은 체중의 {percent}%예요. 체중의 약 3분의 1을 넘는 부하는 부상 위험을 급격히 높이고, Pandolf 모델도 그 구간에서 가장 덜 신뢰할 수 있어요. 이 무게로 바로 뛰지 말고 서서히 올리세요.",
    met: "MET",
    kcalPerMin: "kcal / min",
    distance: "거리",
    distanceValue: "{km} km / {mi} mi",
    packRatio: "배낭 / 체중",
    equation: "Pandolf 부하 운반 방정식: {watts}와트, {terrain}, 경사 {grade}%.",
    tableTitle: "배낭 무게별 칼로리",
    tableSubtitle: "페이스, 경사, 지형, 시간은 같아요. 바뀌는 것은 짐뿐이에요.",
    colPack: "배낭",
    colCalories: "칼로리",
    colVsUnloaded: "무부하 대비",
    vsUnloaded: "+{percent}%",
    loadValue: "{value} {unit}",
  },
  resultCta: {
    headline: "러킹을 자동으로 기록해요",
    description:
      "Steps는 거리와 걸음을 백그라운드에서 세므로, 러킹도 나머지 걷기와 함께 스스로 기록돼요.",
  },
  info: {
    title: "러킹 칼로리를 계산하는 방법",
    intro:
      "MET 표와 ACSM 방정식에는 부하 항이 전혀 없어요. 배낭이 비어 있든 30킬로그램이 들어 있든 같은 소모량을 돌려줘요. 대신 부하 운반 비용을 매기기 위해 만든 Pandolf 방정식을 써요.",
    formulaTitle: "공식",
    formulas: [
      {
        strong: "M",
        rest: "= 1.5W + 2.0(W+L)(L/W)² + η(W+L)(1.5V² + 0.35VG)",
      },
      {
        strong: "",
        rest: "M은 대사량(와트), W는 체중(kg), L은 짐(kg), V는 속도(m/s), G는 경사(퍼센트), η는 지형 계수예요.",
      },
      { strong: "kcal/min", rest: "= 와트 × 60 ÷ 4184" },
      {
        strong: "",
        rest: "가운데 항이 부하 페널티이고 (L/W)²에 비례해요. 배낭을 두 배로 하면 이 항은 두 배보다 더 커져요.",
      },
      {
        strong: "예:",
        rest: "70 kg인 사람이 20 kg을 메고 포장도로를 4.8 km/h로 걸으면 360와트, 분당 약 5.2 kcal예요.",
      },
    ],
    note: "Pandolf는 평지와 오르막 걷기를 다뤄요. 내리막에는 별도의 Santee 보정이 필요해서, 모델이 뒷받침하지 못하는 숫자를 내는 대신 여기서는 내리막을 평지로 봐요.",
  },
  faqTitle: "자주 묻는 질문",
  faq: [
    {
      question: "러킹은 칼로리를 얼마나 소모하나요?",
      answer:
        "70 kg(155 lb)인 사람이 포장도로를 5 km/h로 걷고 15 kg(33 lb) 배낭을 메면 한 시간에 대략 310칼로리를 소모해요. 같은 한 시간을 짐 없이 걸으면 약 265칼로리라서, 배낭 몫은 45칼로리 정도예요. 배낭 무게, 경사, 지형이 이 숫자를 크게 움직이므로 시간당 칼로리 하나로는 부족해요.",
    },
    {
      question: "러킹이 걷기보다 칼로리를 더 소모하나요?",
      answer:
        "네. 늘어난 무게만으로 짐작하는 것보다 더 소모해요. 짐을 나르는 비용은 두 번이에요. 추가 질량을 옮기고, 그 짐이 몸의 일부가 아니라 메고 있는 것에 대한 별도 페널티를 내요. Pandolf 방정식에서 그 페널티는 짐과 체중 비율의 제곱으로 커지므로, 킬로그램을 더할수록 이전보다 비용이 커져요.",
    },
    {
      question: "러킹은 얼마나 무거운 짐으로 시작하나요?",
      answer:
        "대부분의 안내는 초보를 체중의 10퍼센트에서 시작하고, 많아야 3분의 1까지 올려요. 체중의 대략 3분의 1을 넘으면 무릎, 허리, 발의 부상 위험이 급격히 오르고, Pandolf 모델 자체도 덜 신뢰할 수 있어요. 검증이 대부분 그 비율 아래에서 이뤄졌기 때문이에요. 거리를 늘리기 전에 무게를 천천히 더하세요.",
    },
    {
      question: "지형이 러킹 칼로리를 바꾸나요?",
      answer:
        "꽤 바꿔요. Pandolf 방정식은 이동 비용에 지형 계수를 곱해요. 포장도로는 기준 1.0, 흙길과 트레일은 약 1.2, 울창한 덤불은 1.5, 습지는 1.8, 성긴 모래는 2.1이에요. 마른 해변 모래 위의 러킹은 같은 러킹을 아스팔트에서 할 때보다 이동 에너지가 대략 두 배예요.",
    },
    {
      question: "Pandolf 방정식이 무엇인가요?",
      answer:
        "짐을 나를 때의 대사 비용을 보는 표준 모델이에요. 1977년 Pandolf, Givoni, Goldman이 미 육군을 위해 발표했어요. 체중, 짐의 질량, 걷는 속도, 경사, 지형으로 대사량을 와트로 예측해요. MET 표나 ACSM 방정식과 달리 짐을 무시하지 않고 실제 입력으로 다뤄요.",
    },
    {
      question: "이 계산기는 왜 내리막 경사를 받지 않나요?",
      answer:
        "Pandolf 방정식이 평지와 오르막 걷기에서만 검증됐기 때문이에요. 음의 경사를 넣으면 비현실적으로 낮은 비용이 나와요. 식에서는 내리막이 평지보다 싸지만, 현실에서는 끝없이 싸지지 않아요. 내리막을 정확히 보려면 별도의 Santee 보정이 필요해서, 이 계산기는 책임질 수 없는 숫자 대신 내리막을 평지로 봐요.",
    },
    {
      question: "지방을 빼려면 러킹이 러닝보다 나은가요?",
      answer:
        "지속하기가 더 쉽고, 보통은 분당 소모량보다 그게 더 중요해요. 러킹은 짐과 경사에 따라 약 6에서 8 MET로, 대부분의 러닝보다 낮지만 충격이 작아서 러닝을 끊게 만드는 관절 부담 없이 주간 양을 훨씬 더 견딜 수 있어요. 지방을 빼는 것은 한 번의 강도가 아니라 한 주의 총 에너지 소비예요.",
    },
  ],
  cta: {
    title: "러킹을 기록해요",
    description:
      "Steps 앱을 받아서 걷기, 소모 칼로리, 시간에 따른 변화를 자동으로 기록하세요.",
  },
  sticky: "Steps로 걸음을 기록해요",
  howTo: {
    name: "러킹 칼로리를 계산하는 방법",
    description:
      "체중, 배낭 무게, 페이스, 경사, 지형을 입력하면 소모 칼로리와 그중 짐이 차지하는 몫을 받아요.",
    steps: [
      {
        name: "체중과 배낭 무게를 입력해요",
        text: "둘 다 킬로그램 또는 파운드예요. 부하 페널티는 배낭과 체중 비율의 제곱으로 커지므로, 배낭만이 아니라 두 숫자가 모두 중요해요.",
      },
      {
        name: "페이스와 시간을 정해요",
        text: "러킹 페이스를 km/h 또는 mph로 넣고, 움직인 시간을 넣어요. 둘이 함께 이동 거리를 정해요.",
      },
      {
        name: "경사를 더해요",
        text: "오르막의 평균 경사를 퍼센트로 넣어요. 내리막은 평지로 봐요. Pandolf 방정식은 평지와 오르막 걷기에서만 검증됐기 때문이에요.",
      },
      {
        name: "지형을 골라요",
        text: "포장도로부터 트레일, 울창한 덤불, 성긴 모래까지예요. 지형은 이동 비용을 곱하고, 모래는 아스팔트의 두 배를 넘어요.",
      },
      {
        name: "칼로리와 짐의 기여를 읽어요",
        text: "계산기는 총칼로리, 배낭만으로 나온 칼로리, 와트 단위 대사량, 흔한 러킹 짐의 칼로리 표를 돌려줘요.",
      },
    ],
  },
};

export default ko;
