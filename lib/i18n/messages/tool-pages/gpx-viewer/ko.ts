import type { GpxViewerMessages } from "./en";

const ko: GpxViewerMessages = {
  meta: {
    title: "GPX 뷰어 — GPX 파일을 온라인에서 무료로 보기 | Steps",
    description:
      "GPX 파일을 무료로 올려서 보세요. 고도 그래프, 거리, 속도, 경유지, 경로 데이터가 있는 인터랙티브 지도예요. 가입은 필요 없어요.",
    keywords: [
      "GPX 뷰어",
      "GPX 리더",
      "GPX 파일 뷰어",
      "GPX 파일 보기",
      "GPX 파일 읽기",
      "GPX 뷰어 온라인",
      "GPX 파일 온라인",
      "GPX 파일 열기",
      "GPX 여는 방법",
      "GPX 분석",
      "GPX 편집기",
    ],
    ogTitle: "GPX 뷰어 — GPX 파일을 온라인에서 무료로 보기",
    ogDescription:
      "GPX 파일을 인터랙티브 지도에서 보세요. 고도 그래프, 거리, 속도, 경유지 데이터도 함께 나와요.",
    ogImageAlt: "GPX 뷰어 — GPX 파일을 온라인에서 보기",
  },
  hero: {
    title: "GPX 뷰어 — GPX 파일을 온라인에서 보기",
    subtitle:
      "GPX 파일을 올려서 보세요. 인터랙티브 지도의 트랙, 고도 그래프, 거리, 속도, 경유지를 확인할 수 있어요.",
  },
  intro:
    ".gpx 파일을 끌어다 놓으면 경로가 바로 지도에 나와요. Strava, Garmin, Apple Watch, Komoot와 다른 GPS 기기나 앱 파일도 돼요.",
  tool: {
    dropTitle: "GPX 파일을 여기에 놓으세요",
    dropHint: "또는 클릭해서 찾아보세요",
    dropFormats: "Strava, Garmin, Apple Watch 등의 .gpx 파일을 지원해요",
    errors: {
      notGpx: ".gpx 파일을 올려 주세요",
      noTrack: "이 GPX 파일에 트랙 데이터가 없어요",
      parse: "GPX 파일을 읽지 못했어요. 파일 형식을 확인해 주세요.",
    },
    newFile: "새 파일",
    points: {
      one: "{count}지점",
      other: "{count}지점",
    },
    waypoints: {
      one: "{count}경유지",
      other: "{count}경유지",
    },
    fileMeta: "{points} | {waypoints}",
    stats: {
      distance: "거리",
      duration: "시간",
      avgSpeed: "평균 속도",
      maxSpeed: "최고 속도",
      elevationGain: "상승 고도",
      elevationLoss: "하강 고도",
      maxElevation: "최고 고도",
      minElevation: "최저 고도",
    },
    na: "없음",
    durationHms: "{h}h {m}m {s}s",
    durationMs: "{m}m {s}s",
    durationS: "{s}s",
    distanceKm: "{value} km",
    distanceM: "{value} m",
    speed: "{value} km/h",
    elevation: "{value} m",
    elevationProfile: "고도 그래프",
    waypointsTitle: "경유지 ({count})",
    waypointFallback: "경유지 {n}",
    start: "출발",
    end: "도착",
  },
  about: {
    title: "GPX 파일이란?",
    p1: "GPX(GPS Exchange Format)는 GPS 데이터를 저장하는 표준 XML 형식이에요. 트랙, 경로, 경유지의 위도, 경도, 고도, 시각이 들어 있어요. Garmin, Strava, Apple Watch, Komoot, AllTrails를 비롯해 거의 모든 GPS 기기와 운동 앱에서 써요.",
    p2: "달리기나 자전거 경로를 기록하고, 하이킹 코스를 계획하고, 경로를 공유하고, 상승 고도, 거리, 페이스를 분석할 때 써요. 이 무료 뷰어는 프로그램을 설치하지 않고 브라우저에서 GPX 파일을 열어요.",
  },
  faqTitle: "자주 묻는 질문",
  faq: [
    {
      question: "GPX 파일은 어떻게 열어요?",
      answer:
        "위의 영역에 .gpx 파일을 끌어다 놓거나, 클릭해서 파일을 고르세요. 뷰어가 바로 파일을 읽고 거리, 고도, 속도 같은 수치와 함께 트랙을 인터랙티브 지도에 보여 줘요. 처리는 전부 브라우저 안에서 이뤄지고, 서버로는 아무것도 올라가지 않아요.",
    },
    {
      question: "GPX 파일에는 어떤 데이터가 있어요?",
      answer:
        "GPX 파일에는 세 가지 데이터가 있어요. 트랙(GPS가 기록한 경로), 경로(계획한 길), 경유지(개별 지점)예요. 각 지점에는 위도와 경도가 있고, 고도와 시각이 있을 수도 있어요. 이걸로 거리, 속도, 상승·하강 고도, 소요 시간을 계산해요.",
    },
    {
      question: "운동 앱에서 GPX는 어떻게 내보내요?",
      answer:
        "대부분의 운동 앱이 GPX 내보내기를 지원해요. Strava에서는 활동을 열고 메뉴에서 GPX 내보내기를 고르세요. Garmin Connect에서는 활동으로 들어가 톱니바퀴 아이콘을 누르세요. Apple Watch에서는 Steps나 다른 도구로 운동을 GPX 파일로 내보내세요. 앱 설정이나 내보내기 항목을 확인해 보세요.",
    },
    {
      question: "GPX 데이터는 비공개로 남나요?",
      answer:
        "네. 이 뷰어는 JavaScript로 파일을 브라우저 안에서만 처리해요. GPX 데이터는 서버에 올라가지 않고 어디에도 저장되지 않아요. 페이지를 닫으면 데이터는 사라져요. 개인 경로와 위치 데이터를 봐도 안전해요.",
    },
    {
      question: "GPX 파일을 만드는 앱은 뭐예요?",
      answer:
        "Strava, Garmin Connect, Apple Watch(Steps나 다른 앱), Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros를 비롯한 대부분의 GPS·운동 앱이 GPX를 만들어요. Garmin, Wahoo 같은 GPS 기기도 GPX를 내보낼 수 있어요.",
    },
  ],
  cta: {
    title: "Steps로 GPX를 기록하고 내보내세요",
    description:
      "iPhone과 Apple Watch의 Steps에서 운동을 기록하고 GPX 파일을 바로 내보내세요.",
  },
  howTo: {
    name: "GPX 파일을 온라인에서 보는 방법",
    description:
      "GPX 파일을 올리면 거리, 시간, 페이스, 고도와 함께 경로가 인터랙티브 지도에 나와요.",
    steps: [
      {
        name: "GPX 파일을 놓으세요",
        text: ".gpx 파일을 브라우저로 끌어다 놓거나, 클릭해서 기기에서 고르세요.",
      },
      {
        name: "지도와 숫자를 보세요",
        text: "뷰어가 경로를 인터랙티브 지도에 그리고, 총거리, 상승 고도, 시간, 평균 페이스를 보여 줘요.",
      },
      {
        name: "경유지와 고도를 살펴보세요",
        text: "지도나 고도 그래프 위에 커서를 올리면 각 지점의 속도와 고도가 나와요.",
      },
    ],
  },
};

export default ko;
