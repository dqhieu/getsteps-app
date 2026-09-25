import type { ActivityToStepsMessages } from "./en";

const de: ActivityToStepsMessages = {
  meta: {
    title: "Aktivität-in-Schritte-Rechner – Jede Übung in Schritte umrechnen",
    description:
      "Rechne Radfahren, Schwimmen, Yoga, Rudern und über 10 Aktivitäten in äquivalente Schritte um. Für Schritt-Challenges und Fitness-Tracking.",
    keywords: [
      "aktivität in schritte umrechnen",
      "übung in schritte umwandeln",
      "radfahren schritte äquivalent",
      "schwimmen schritte äquivalent",
      "schritte äquivalent rechner",
      "schritte ohne gehen",
    ],
    ogTitle: "Aktivität-in-Schritte-Rechner – Jede Übung in Schritte umrechnen",
    ogDescription:
      "Rechne Radfahren, Schwimmen, Yoga, Rudern und über 10 Aktivitäten in äquivalente Schritte um. Für Schritt-Challenges und Fitness-Tracking.",
    ogImageAlt: "Aktivität-in-Schritte-Rechner",
  },
  hero: {
    title: "Aktivität-in-Schritte-Rechner",
    subtitle:
      "Rechne jede Aktivität — Radfahren, Schwimmen, Yoga und mehr — in äquivalente Schritte für deine Schritt-Challenge oder dein Fitnessziel um.",
    intro:
      "Wähle deine Aktivität, gib die Dauer ein und sieh sofort die äquivalenten Schritte. MET-Werte (Metabolic Equivalent) sorgen für eine belastbare Umrechnung über 10 Aktivitäten.",
  },
  appCta: {
    headline: "Zähl jede Aktivität automatisch als Schritte",
    description:
      "Steps erfasst deine Bewegung den ganzen Tag im Hintergrund und macht daraus Schritt-Äquivalente, ohne manuelles Eintragen.",
  },
  stickyCta: "Verfolge deine Schritte mit Steps",
  calculator: {
    yourActivity: "Deine Aktivität",
    activityType: "Aktivitätsart",
    duration: "Dauer (Minuten)",
    intensity: "Intensität",
    intensities: {
      low: "Niedrig",
      medium: "Mittel",
      high: "Hoch",
    },
    calorieToggle: "Für die Kalorienberechnung (optional)",
    bodyWeight: "Körpergewicht",
    equivalentSteps: "Äquivalente Schritte",
    equivalentFor: "Schritte-Äquivalent für {duration} min {activity}",
    walkingTime: "Gehzeit",
    minutes: "{minutes} min",
    distance: "Distanz",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "Kalorien",
    kcal: "kcal",
    metNote: "Berechnet mit MET-Werten (Metabolic Equivalent of Task)",
    activities: {
      cycling: "Radfahren",
      swimming: "Schwimmen",
      elliptical: "Crosstrainer",
      rowing: "Rudern",
      jump_rope: "Seilspringen",
      dancing: "Tanzen",
      yoga: "Yoga",
      basketball: "Basketball",
      hiking: "Wandern",
      pilates: "Pilates",
    },
  },
  info: {
    title: "So funktionieren Schritt-Äquivalente",
  },
  faq: [
    {
      question: "Wie werden Aktivitäts-Schritte berechnet?",
      answer:
        "Dieser Rechner nutzt MET-Werte (Metabolic Equivalent of Task), das Standardmaß für Belastungsintensität in der Sportwissenschaft. Gehen in normalem Tempo hat einen MET von 3,5, etwa 100 Schritte pro Minute. Der MET jeder Aktivität wird mit dem Gehen verglichen und ergibt so eine äquivalente Schrittzahl. Eine Aktivität mit MET 7,0 (doppelt so viel wie Gehen) liefert doppelt so viele äquivalente Schritte pro Minute.",
    },
    {
      question: "Entspricht Radfahren Gehen in Schritten?",
      answer:
        "Ja — 30 Minuten Radfahren bei mittlerer Intensität (MET ~6,8) sind je nach Tempo ungefähr 7.000–9.000 äquivalente Schritte. Wettkampf-Radfahren bei hoher Intensität kann in 30 Minuten über 14.000 äquivalente Schritte erreichen. Ein Schrittzähler zählt das nicht als echte Schritte, die Umrechnung ist aber ein fairer Vergleich für Schritt-Challenges.",
    },
    {
      question: "Zählt Schwimmen als Schritte?",
      answer:
        "Schwimmen wird von den meisten Fitness-Apps und Schrittzählern nicht von selbst als Schritte erfasst. 30 Minuten Schwimmen bei mittlerer Intensität (MET ~7,0) entsprechen aber etwa 6.000–8.000 Schritten. Mit diesem Rechner bekommst du Schwimmeinheiten in Challenges angerechnet, die manuelles Eintragen erlauben.",
    },
    {
      question: "Warum Aktivitäten in Schritte umrechnen?",
      answer:
        "Schritt-Challenges auf der Arbeit oder in Apps messen Fortschritt oft in Schritten, Radfahrer, Schwimmer und Yogis sammeln aber von Natur aus weniger GPS-Schritte. Wenn du Aktivitäten abseits des Gehens umrechnest, kannst du fair mitmachen, deine Tagesbewegung verfolgen und den Aufwand verschiedener Sportarten auf einer Skala vergleichen.",
    },
  ],
  related: [
    { title: "Schritte-in-Kalorien-Rechner", href: "/tools/steps-to-calories-calculator" },
    { title: "Tagesziel-Schritte-Rechner", href: "/tools/daily-step-goal-calculator" },
    { title: "Gehkalorien-Rechner", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "Begleite deine Gesundheitsreise",
    description: "Erfasse alle täglichen Aktivitäten und Schritte automatisch mit der Steps-App.",
  },
  howTo: {
    name: "So rechnest du Aktivitäten in äquivalente Schritte um",
    description:
      "Gib Aktivitätsart, Dauer und Intensität ein und erhalte die äquivalente Schrittzahl für dein Tagesziel.",
    steps: [
      {
        name: "Wähle eine Aktivität",
        text: "Radfahren, Schwimmen, Yoga, Krafttraining und Dutzende weitere sind möglich.",
      },
      {
        name: "Gib Dauer und Intensität ein",
        text: "Dauer in Minuten plus eine Auswahl für leicht, moderat oder anstrengend.",
      },
      {
        name: "Lies die äquivalenten Schritte ab",
        text: "Der Rechner liefert die äquivalente Schrittzahl anhand von MET-Werten, damit du ein Tagesziel auch ohne Gehen erreichst.",
      },
    ],
  },
};

export default de;
