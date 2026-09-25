import type { WalkingTimeCalculatorMessages } from "./en";

const de: WalkingTimeCalculatorMessages = {
  meta: {
    title: "Gehzeit-Rechner: 1 km ≈ 12 Min., 1 Meile ≈ 18 Min.",
    description:
      "Wie lange dauert 1 km zu Fuß? ~12 Min. 1 Meile? ~18 Min. 5 km? ~60 Min. Kostenloser Rechner für jede Distanz bei langsamem, normalem, zügigem oder schnellem Tempo.",
    keywords: [
      "Gehzeit",
      "Gehzeit Rechner",
      "wie lange dauert 5 km zu Fuß",
      "8 km Gehzeit",
      "wie lange dauert eine Meile zu Fuß",
      "Gehzeit nach Distanz",
      "Gehtempo Rechner",
      "wie lange dauern 10000 Schritte",
      "Gehdauer Rechner",
    ],
    ogTitle: "Gehzeit-Rechner: 1 km ≈ 12 Min., 1 Meile ≈ 18 Min.",
    ogDescription:
      "1 km ≈ 12 Min., 1 Meile ≈ 18 Min., 5 km ≈ 60 Min. bei normalem Tempo. Kostenloser Rechner für jede Distanz.",
    ogImageAlt: "Gehzeit-Rechner",
  },
  hero: {
    title: "Gehzeit-Rechner",
    subtitle:
      "Wie lange brauchst du für 5 km, 8 km oder 28 Meilen? Gib eine Distanz ein und erhalte Gehzeiten für langsames, normales, zügiges und schnelles Tempo.",
  },
  resultCta: {
    headline: "Jede Runde automatisch erfassen",
    description:
      "Steps protokolliert Gehzeit, Distanz und Tempo im Hintergrund, damit du siehst, wie sich deine echten Wege summieren.",
  },
  stickyCta: "Verfolge deine Schritte mit Steps",
  calculator: {
    title: "Gehzeit berechnen",
    distance: "Distanz",
    miles: "Meilen",
    walkingSpeed: "Gehtempo",
    speeds: {
      slow: { label: "Langsam", description: "3,2 km/h", inline: "langsamem" },
      normal: { label: "Normal", description: "5,0 km/h", inline: "normalem" },
      brisk: { label: "Zügig", description: "6,4 km/h", inline: "zügigem" },
      fast: { label: "Schnell", description: "7,2 km/h", inline: "schnellem" },
    },
    includeBreaks: "Pausen einrechnen (5 Min. alle 30 Min.)",
    walkingTime: "Gehzeit",
    breaksDetail: "{walking} Gehen + {breaks} Min. Pause",
    distanceLabel: "Distanz",
    stepsLabel: "Schritte",
    caloriesLabel: "Kalorien",
    kmValue: "{distance} km",
    miValue: "{distance} mi",
    approxCalories: "~{calories}",
    referenceTitle: "Gehzeit-Übersicht",
    referenceSubtitle: "Zeit für gängige Distanzen bei {pace} Tempo ({speed} km/h)",
    colDistance: "Distanz",
    colTime: "Zeit",
    hoursMinutes: "{hours} Std. {minutes} Min.",
    hoursOnly: "{hours} Std.",
    minutesOnly: "{minutes} Min.",
    distances: ["1 km", "1 Meile", "2 km", "3 km", "5 km", "5 Meilen", "10 km", "Halbmarathon"],
  },
  info: {
    title: "Gehtempo im Überblick",
    intro:
      "Das Gehtempo hängt von Fitness, Gelände und Zweck ab. Wenn du die verschiedenen Tempi kennst, kannst du deine Wege besser planen.",
    paceTitle: "Gehtempo-Guide",
    paces: [
      {
        label: "Langsam (3,2 km/h / 2 mph):",
        text: "Ein gemütlicher Spaziergang, gut für Erholung oder ein Gespräch",
      },
      {
        label: "Normal (5 km/h / 3,1 mph):",
        text: "Durchschnittliches Gehtempo der meisten Erwachsenen",
      },
      {
        label: "Zügig (6,4 km/h / 4 mph):",
        text: "Zielgerichtetes Gehen, das den Puls hebt",
      },
      {
        label: "Schnell (7,2 km/h / 4,5 mph):",
        text: "Walking-Tempo, knapp am Joggen",
      },
    ],
    faqTitle: "Häufige Fragen",
  },
  faq: [
    {
      question: "Wie lange dauert 1 km zu Fuß?",
      answer:
        "Bei normalem Tempo (5 km/h) brauchst du etwa 12 Minuten für 1 km. Bei langsamem Tempo (3,2 km/h) sind es ~19 Minuten, bei zügigem Tempo (6,4 km/h) etwa 9 Minuten. Das sind ungefähr 1.300 Schritte für einen durchschnittlichen Erwachsenen.",
    },
    {
      question: "Wie lange dauern 5 km zu Fuß?",
      answer:
        "Bei normalem Tempo (5 km/h) brauchst du etwa 60 Minuten für 5 km. Bei zügigem Tempo (6,4 km/h) schaffst du sie in etwa 47 Minuten.",
    },
    {
      question: "Wie lange dauert 1 Meile zu Fuß?",
      answer:
        "Eine Meile dauert bei normalem Gehtempo ungefähr 15–20 Minuten. Wer zügig geht, schafft sie in 12–15 Minuten.",
    },
    {
      question: "Wie lange dauern 10.000 Schritte?",
      answer:
        "10.000 Schritte sind ungefähr 7–8 km (4–5 Meilen). Bei normalem Tempo dauert das etwa 1 Stunde und 20–40 Minuten. Du musst das nicht am Stück schaffen – verteile es über den Tag.",
    },
    {
      question: "Wie lange dauern 7 km zu Fuß?",
      answer:
        "Bei normalem Tempo (5 km/h) brauchst du etwa 84 Minuten (1 Stunde 24 Min.) für 7 km. Bei zügigem Tempo (6,4 km/h) sind es etwa 66 Minuten. Das sind ungefähr 9.100 Schritte für einen durchschnittlichen Erwachsenen.",
    },
    {
      question: "Wie lange dauern 8 km zu Fuß?",
      answer:
        "8 km dauern bei normalem Tempo (5 km/h) etwa 96 Minuten (1 Stunde 36 Min.) oder etwa 75 Minuten bei zügigem Tempo. Das sind ungefähr 10.400 Schritte.",
    },
    {
      question: "Soll ich Pausen in die Gehzeit einrechnen?",
      answer:
        "Bei Wegen länger als 30 Minuten helfen kurze Pausen, die Energie zu halten und Müdigkeit zu vermeiden. Der Rechner kann 5 Minuten Pause je 30 Minuten Gehen dazurechnen, wenn du die Option aktivierst.",
    },
  ],
  precomputedTitle: "Fertige Gehzeiten",
  precomputed: [
    "Wie lange dauern 10.000 Schritte",
    "Wie lange dauern 5 Meilen zu Fuß",
    "Wie lange dauern 3 Meilen zu Fuß",
    "Wie lange dauert 1 Meile zu Fuß",
  ],
  allConversions: "Alle Umrechnungen →",
  cta: {
    title: "Erfasse deine Wege automatisch",
    description:
      "Lade die Steps-App herunter und tracke Gehzeit, Distanz und Tempo automatisch.",
  },
  howTo: {
    name: "So nutzt du den Gehzeit-Rechner",
    description:
      "Gib eine Distanz und ein Gehtempo ein und erhalte die geschätzte Gehzeit in Minuten — für Kilometer, Meilen oder eine Schrittzahl.",
    steps: [
      {
        name: "Gib die Distanz ein",
        text: "Tippe die Strecke ein, die du gehen willst. Du kannst zwischen Kilometern und Meilen wechseln oder eine Schrittzahl eingeben.",
      },
      {
        name: "Wähle ein Gehtempo",
        text: "Wähle langsam (3,2 km/h), normal (5 km/h), zügig (6,4 km/h) oder schnell (7,2 km/h). Normal ist die Vorgabe für einen typischen Erwachsenen.",
      },
      {
        name: "Lies deine Gehzeit",
        text: "Der Rechner zeigt die geschätzten Minuten für die Distanz in jedem Tempo plus eine Schätzung der Gesamtschritte.",
      },
    ],
  },
};

export default de;
