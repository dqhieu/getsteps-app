import type { LandingMessages } from "./en";

const ko: LandingMessages = {
  hero: {
    iconAlt: "Steps 앱 아이콘",
    titleLead: "모든 걸음이 쌓입니다.",
    titleAccent: "모든 이정표가 보입니다.",
    subtitle:
      "iPhone과 Apple Watch를 위한 단순하고 아름다운 만보기이자 운동 기록 앱. Apple Health로 동작합니다.",
    freeDownload: "무료 다운로드",
  },
  trust: {
    featuredIn: "소개된 곳",
    videoAria: "YouTube에서 Erick the Architect 주연 Appreciation 보기",
    videoTitle: "APPRECIATION",
    videoCredit: "주연 Erick the Architect",
    lovedBy: "1만 명이 넘는 워커가 좋아합니다",
    fiveStars: "별 5개 만점에 5개",
  },
  spotlights: {
    "route-3d": {
      eyebrow: "1.27의 새로운 기능",
      title: "3D 경로 재생",
      description:
        "영화 같은 3D 추적 카메라로 활동 경로를 다시 보세요. 지도 스타일과 재생 속도를 골라, 운동을 나만의 방식으로 되짚을 수 있습니다.",
    },
    "ai-coach": {
      eyebrow: "Apple Intelligence",
      title: "AI 코치",
      description:
        "운동마다 맞춤 피드백을 받고, 어떤 활동이든 대화할 수 있습니다. 기기 안의 Apple Intelligence로 동작합니다.",
    },
    stepboard: {
      eyebrow: "친구와 겨루기",
      title: "Stepboard",
      description:
        "친구와 함께하는 매일 리더보드. 비공개 보드를 만들고 getsteps.app/join 링크로 초대한 뒤, 걸음 수나 거리로 순위를 매기세요.",
    },
    "apple-watch": {
      eyebrow: "손목 위에서",
      title: "Apple Watch 운동",
      description:
        "손목에서 운동을 시작하고 기록하세요. GPS 경로, 실시간 지표, iPhone으로의 실시간 미러링을 지원합니다.",
    },
  },
  spotlightImageAlt: "Steps 앱에 표시된 {title}",
  yearly: {
    badge: "누구나 무료",
    title: "한 해 돌아보기",
    subtitle: "피트니스 여정을 다채롭고 공유하기 좋은 카드로 바꿉니다.",
    cards: {
      receipt: {
        title: "피트니스 영수증",
        description: "한 해 기록을 나만의 영수증으로",
      },
      tickets: {
        title: "달성 티켓",
        description: "이정표 달성을 항공권처럼",
      },
      stamps: {
        title: "여권 스탬프",
        description: "도달한 이정표마다 스탬프를 모으세요",
      },
    },
  },
  features: {
    title: "그 밖에 필요한 것도 다 있습니다",
    subtitle: "iPhone과 Apple Watch를 위해 네이티브로 만들었고, Apple Health와 연동됩니다.",
    healthBadgeAlt: "Apple Health와 함께 사용",
    grid: {
      LineChart: { title: "또렷한 차트", description: "시간, 주, 월 단위" },
      Flame: { title: "목표와 연속 달성", description: "매일 동기부여를 유지" },
      LayoutGrid: { title: "홈 화면 위젯", description: "홈 화면용 위젯 10종" },
      Lock: { title: "앱 잠금", description: "목표를 달성할 때까지 앱을 잠급니다" },
      Route: { title: "GPX 내보내기", description: "운동 경로를 내보내고 공유" },
      HeartPulse: { title: "Apple Health 동기화", description: "정확한 자동 기록" },
    },
    recordsTitle: "개인 기록 {count}개",
    records: {
      Zap: "최고 페이스",
      Flame: "최다 칼로리",
      Sunrise: "가장 이른 시작",
      Mountain: "최대 고도",
      Timer: "최장 시간",
      Ruler: "최장 거리",
      Moon: "가장 늦은 밤",
      HeartPulse: "최대 심박수",
    },
    workoutsTitle: "운동 종류 {count}가지",
    workouts: {
      Footprints: "러닝",
      PersonStanding: "걷기",
      Bike: "사이클링",
      Mountain: "하이킹",
      Waves: "수영",
      Dumbbell: "근력 운동",
      Flower2: "요가",
      CircleDot: "피클볼",
    },
    moreWorkouts: "15가지 더",
  },
  privacy: {
    title: "데이터는 기본적으로 기기에 남습니다",
    body: "건강 데이터는 기기에 저장되며, 허용한 경우에만 Apple HealthKit을 통해 안전하게 읽습니다. Stepboard 리더보드에 참여하면 선택한 지표가 순위를 위해 동기화됩니다.",
  },
  cta: {
    title: "모든 걸음을 기록할 준비가 되셨나요?",
    footnote: "영원히 무료 · 계정 불필요 · Pro 기능 제공",
  },
  stepboard: {
    sectionLabel: "Stepboard 커뮤니티 총걸음",
    counterLabel: "Steps 커뮤니티가 걸은 {total}걸음",
    footer: "Stepboard 멤버가 걸은 총걸음",
  },
};

export default ko;
