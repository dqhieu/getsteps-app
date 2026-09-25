import type { RestingHeartRateCalculatorMessages } from "./en";

const de: RestingHeartRateCalculatorMessages = {
  meta: {
    title: "Ruhepuls-Rechner – Fitnesslevel und Karvonen-Zonen",
    description:
      "Berechne dein Fitnesslevel anhand des Ruhepulses und persönliche Karvonen-Trainingszonen. Gib Alter und gemessenen Ruhepuls ein und erhalte sofort ein Ergebnis.",
    keywords: [
      "Ruhepuls Rechner",
      "Ruhepuls nach Alter",
      "was ist ein guter Ruhepuls",
      "Herzfrequenzreserve Rechner",
      "Karvonen Formel",
      "Ruhepuls Fitnesslevel",
    ],
    ogTitle: "Ruhepuls-Rechner – Fitnesslevel und Karvonen-Zonen",
    ogDescription:
      "Berechne dein Fitnesslevel anhand des Ruhepulses und persönliche Karvonen-Trainingszonen. Gib Alter und gemessenen Ruhepuls ein und erhalte sofort ein Ergebnis.",
    ogImageAlt: "Ruhepuls-Rechner",
  },
  hero: {
    title: "Ruhepuls-Rechner",
    subtitle:
      "Prüfe dein kardiovaskuläres Fitnesslevel und erhalte persönliche Trainingszonen auf Basis deiner Herzfrequenzreserve.",
  },
  intro:
    "Gib Alter, Geschlecht und gemessenen Ruhepuls ein, um deine Fitnesskategorie zu sehen und Karvonen-Zonen für Fettverbrennung, aerobe Ausdauer und Spitzenleistung zu berechnen.",
  calculator: {
    yourDetails: "Deine Angaben",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    years: { one: "Jahr", other: "Jahre" },
    restingHeartRate: "Ruhepuls",
    bpm: "bpm",
    rhrHint:
      "Tipp: Miss morgens, bevor du aufstehst. Sitze 5 Min. ruhig, dann zähle 60 Sek. lang die Schläge.",
    calculate: "Berechnen",
    fitnessLevel: "Dein Fitnessniveau",
    hrMax: "HFmax",
    hrr: "HFR",
    zonesTitle: "Karvonen-Trainingszonen",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "Athlet",
      excellent: "Ausgezeichnet",
      good: "Gut",
      above_average: "Überdurchschnittlich",
      average: "Durchschnittlich",
      below_average: "Unterdurchschnittlich",
      poor: "Schlecht",
    },
    zones: {
      activeRecovery: { name: "Aktive Erholung", purpose: "Erholung" },
      fatBurn: { name: "Fettverbrennung", purpose: "Fettverbrennung" },
      aerobicEndurance: { name: "Aerobe Ausdauer", purpose: "Aerob" },
      lactateThreshold: { name: "Laktatschwelle", purpose: "Schwelle" },
      vo2Max: { name: "VO2max", purpose: "VO2max" },
    },
  },
  info: {
    title: "FAQ zum Ruhepuls",
  },
  faq: [
    {
      question: "Was ist ein normaler Ruhepuls?",
      answer:
        "Bei den meisten Erwachsenen liegt ein normaler Ruhepuls zwischen 60 und 100 Schlägen pro Minute (bpm). Trainierte Athletinnen und Athleten haben oft einen Ruhepuls von 40–60 bpm, weil ihr Herz stärker ist und pro Schlag mehr Blut pumpt. Werte unter 60 bpm (Bradykardie) können bei fitten Menschen normal sein, sollten aber ärztlich abgeklärt werden, wenn Symptome dazukommen.",
    },
    {
      question: "Wie messe ich meinen Ruhepuls?",
      answer:
        "Miss deinen Ruhepuls morgens, bevor du aufstehst. Liege 5 Minuten still, lege dann zwei Finger an das Handgelenk (Speichenarterie) oder den Hals (Halsschlagader) und zähle die Schläge 60 Sekunden lang. Miss nicht nach Kaffee, Sport oder Stress. Der Mittelwert von drei aufeinanderfolgenden Morgen ist am genauesten.",
    },
    {
      question: "Sinkt der Ruhepuls mit besserer Fitness?",
      answer:
        "Ja. Regelmäßiges Herz-Kreislauf-Training stärkt den Herzmuskel, sodass er pro Schlag mehr Blut pumpt. Durch dieses höhere Schlagvolumen muss das Herz seltener schlagen, um dieselbe Blutmenge zu liefern. Konsequentes Ausdauertraining senkt den Ruhepuls typischerweise um 5–25 bpm über mehrere Monate, je nach deinem Ausgangsniveau.",
    },
    {
      question: "Was ist der Unterschied zwischen Ruhepuls und maximaler Herzfrequenz?",
      answer:
        "Der Ruhepuls ist die Schlagzahl pro Minute in völliger Ruhe. Die maximale Herzfrequenz (HFmax) ist die höchste Schlagzahl, die dein Herz bei maximaler Belastung erreichen kann, geschätzt als 220 minus dein Alter. Die Herzfrequenzreserve (HFR) ist die Differenz der beiden und beschreibt den Bereich, in dem dein Herz beim Training arbeiten kann. Die Karvonen-Methode nutzt die HFR für persönliche Trainingszonen.",
    },
    {
      question: "Wie kann ich meinen Ruhepuls senken?",
      answer:
        "Am wirksamsten ist regelmäßiges Ausdauertraining: plane 3–5 Einheiten pro Woche mit anhaltendem Cardio mittlerer Intensität, etwa Gehen, Joggen, Radfahren oder Schwimmen. Ausreichend Schlaf (7–9 Stunden), Stressbewältigung (Meditation, tiefes Atmen), weniger Koffein und Alkohol sowie ein gesundes Körpergewicht tragen ebenfalls zu einem niedrigeren Ruhepuls bei. Verbesserungen zeigen sich meist nach 4–8 Wochen konstantem Training.",
    },
  ],
  cta: {
    title: "Verbessere deine Herzgesundheit",
    description: "Erfasse deine täglichen Schritte, um deine Herz-Kreislauf-Gesundheit mit der Zeit zu verbessern.",
  },
  howTo: {
    name: "So prüfst du deine Fitnesskategorie anhand des Ruhepulses",
    description:
      "Gib Alter und Ruhepuls ein, um dein kardiovaskuläres Fitnesslevel und die Karvonen-Trainingszonen zu sehen.",
    steps: [
      {
        name: "Alter und Ruhepuls eingeben",
        text: "Miss den Ruhepuls morgens als Erstes, vor dem Koffein, noch im Liegen.",
      },
      {
        name: "Lies deine Fitnesskategorie",
        text: "Der Rechner ordnet dich auf einer Skala von Athlet bis schlecht ein, anhand altersbezogener Ruhepulsbereiche.",
      },
      {
        name: "Lies deine Karvonen-Zonen",
        text: "Du erhältst außerdem 5 Herzfrequenz-Trainingszonen, personalisiert nach deinem Ruhepuls.",
      },
    ],
  },
};

export default de;
