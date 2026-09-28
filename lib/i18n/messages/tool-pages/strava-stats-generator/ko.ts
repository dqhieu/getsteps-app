import type { StravaStatsGeneratorMessages } from "./en";

const ko: StravaStatsGeneratorMessages = {
  meta: {
    title: "Strava 통계 생성기 — 무료 운동 통계 카드 | Steps",
    description:
      "Strava 러닝을 Instagram 스토리용 투명 통계 오버레이로 만들어요. 거리와 시간을 넣으면 페이스가 자동으로 계산되고, 무료 1080×1080 투명 PNG를 받아요.",
    keywords: [
      "Strava 통계 생성기",
      "Strava 운동 통계",
      "Strava 통계 오버레이",
      "투명 운동 통계 PNG",
      "러닝 통계 Instagram",
      "운동 통계 이미지",
      "러닝 통계 공유",
      "Instagram 스토리 러닝 통계",
    ],
    ogTitle: "Strava 통계 생성기 — 투명 운동 통계 오버레이",
    ogDescription:
      "Strava 러닝을 Instagram 스토리용 투명 통계 오버레이로 만들어요. 거리, 이동 시간, 자동 계산 페이스를 무료 PNG로 받아요.",
    ogImageAlt: "Strava 통계 생성기 — 무료 운동 통계 카드",
  },
  hero: {
    title: "Strava 통계 생성기",
    subtitle:
      "방금 기록한 러닝을 스토리용 투명 통계 오버레이로 만들어요. 거리와 시간을 넣으면 페이스를 계산하고, 사진 위에 바로 얹는 무료 PNG를 드려요.",
  },
  tool: {
    workout: "내 운동",
    distance: "거리",
    switchToMiles: "마일로 전환",
    switchToKilometers: "킬로미터로 전환",
    movingTime: "이동 시간 (MM:SS 또는 H:MM:SS)",
    durationPlaceholder: "52:30",
    paceHint: "페이스는 거리와 시간으로 자동 계산해요.",
    overlay: "내 오버레이",
    overlayAria: "운동 통계 오버레이: {distance} {distanceUnit}, {time}, {pace} {paceUnit}",
    saved: "저장했어요",
    download: "투명 PNG 다운로드",
    downloadHint:
      "1080×1080, 배경은 투명해요. Instagram 스토리 사진 위에 바로 얹으세요. 모든 작업은 브라우저에서 이뤄지고, 아무것도 업로드되지 않아요.",
    canvas: {
      distance: "거리",
      pace: "페이스",
      time: "시간",
    },
  },
  inlineCta: {
    headline: "Strava가 놓치는 걸음을 기록해요",
    description:
      "Steps는 iPhone과 Apple Watch의 걸음을 모두 세고 러닝 옆에 보여줘요. 연속 기록, 추세, 무료 한 해 정리도 있어요.",
  },
  about: {
    title: "왜 투명 오버레이인가요?",
    p1: "게시물의 주인공은 사진이에요. 반환점이나 결승선에서 찍은 장면을 사람들이 보고 싶어 해요. 꽉 찬 통계 카드는 그 사진을 가려요. 투명 PNG는 사진을 남기고, 중요한 숫자 세 개, 거리, 이동 시간, 페이스를 휴대폰에서 읽히는 크기로 올려요.",
    p2: "이 생성기는 Strava, Garmin Connect, Apple Watch, Nike Run Club, 기록 없는 트레드밀 중 어디에서 남긴 러닝, 걷기, 라이드든 쓸 수 있어요. 한 일을 입력하면 몇 초 만에 오버레이가 나와요. 계정, 이메일, 워터마크가 없어요.",
  },
  faqTitle: "자주 묻는 질문",
  faq: [
    {
      question: "Strava 러닝으로 통계 오버레이를 어떻게 만드나요?",
      answer:
        "Strava에서 활동을 열고 거리와 이동 시간을 읽은 다음, 위 양식에 둘 다 입력해요. 페이스는 자동으로 계산돼요. 다운로드를 누르면 그 세 가지 통계만 있는 투명 PNG가 저장돼요.",
    },
    {
      question: "오버레이를 사진 위에 어떻게 올리나요?",
      answer:
        "Instagram 스토리를 열고 올릴 사진을 골라요. 스티커 버튼을 누르고 사진 스티커를 선택한 뒤, 내려받은 PNG를 지정해요. 배경이 투명해서 이미지에는 글자만 올라가요. 그다음 핀치로 크기를 바꾸고 가장 잘 맞는 곳으로 드래그하세요. 같은 방법은 TikTok, Snapchat, 레이어를 지원하는 사진 편집기에서도 돼요.",
    },
    {
      question: "이 도구는 Strava와 관련이 있나요?",
      answer:
        "아니요. Steps의 무료 도구이고, Strava와 제휴하거나 Strava의 승인, 연결이 없어요. 입력한 숫자로 만든 원래의 브랜드 없는 그래픽이지, Strava 활동 화면의 복사가 아니에요.",
    },
    {
      question: "페이스는 어떻게 계산하나요?",
      answer:
        "페이스는 이동 시간을 거리로 나눈 값이에요. 고른 단위에 따라 킬로미터당 또는 마일당 분과 초로 보여요. 10 km를 52:30에 뛰면 킬로미터당 5:15예요. 페이스는 직접 입력하지 않아요. 항상 거리와 시간에서 따라와요.",
    },
    {
      question: "이미지 크기는 얼마인가요?",
      answer:
        "1080×1080픽셀, 정사각형 1:1이에요. 피드 게시물로도 되고, 스토리나 TikTok 사진 위에 깨끗하게 올라가 핀치로 크기와 위치를 바꿀 수 있어요. 통계가 가운데에 있어서 어디에 두어도 잘 읽혀요.",
    },
    {
      question: "배경이 투명한 이유는 무엇인가요?",
      answer:
        "이미 찍은 사진 위에 얹기 위해서예요. 사진을 바꾸려는 것이 아니에요. 꽉 찬 카드는 러닝 사진을 가리고, 투명 PNG는 통계를 그 위에 올려요. 글자에 부드러운 그림자가 있어서 눈이나 하늘처럼 밝은 배경에서도 읽혀요.",
    },
    {
      question: "운동 데이터가 어딘가에 업로드되나요?",
      answer:
        "아니요. 오버레이는 브라우저에서 그려지고 기기에 바로 저장돼요. 입력한 내용은 서버로 보내지지 않고, 저장되거나 기록되지도 않아요.",
    },
    {
      question: "Strava는 걸음 수를 보여주나요?",
      answer:
        "아니요. Strava는 거리, 시간, 페이스를 기록하지만 하루 걸음은 세지 않아요. 러닝 옆에 걸음이 필요하면 Steps 앱이 iPhone과 Apple Watch의 걸음을 읽어 운동 옆에 보여줘요.",
    },
  ],
  disclaimer:
    "Steps는 Strava와 제휴하거나 Strava의 승인, 연결이 없어요. Strava는 Strava, Inc.의 상표예요. 여기서 만든 오버레이는 입력한 숫자로 만든 원래 그래픽이에요.",
  howTo: {
    name: "투명한 운동 통계 오버레이를 만드는 방법",
    description:
      "러닝의 거리와 이동 시간을 입력하고 투명 PNG를 받은 다음, Instagram 스토리의 사진 위에 얹어요.",
    steps: [
      {
        name: "거리와 이동 시간을 입력해요",
        text: "이동한 거리를 입력하고 킬로미터와 마일을 전환한 다음, 이동 시간을 MM:SS 또는 H:MM:SS로 넣어요.",
      },
      {
        name: "투명 PNG를 받아요",
        text: "페이스는 거리와 시간으로 계산돼요. 다운로드를 누르면 배경 없는 1080×1080 PNG, 통계 세 개만 저장돼요.",
      },
      {
        name: "사진 위에 얹어요",
        text: "Instagram 스토리에서 사진을 고르고 스티커 버튼을 누른 뒤, 사진 스티커로 PNG를 선택해요. 이미지 위에는 통계만 나타나요. 핀치로 크기를 바꾸고 자리로 드래그하세요.",
      },
    ],
  },
};

export default ko;
