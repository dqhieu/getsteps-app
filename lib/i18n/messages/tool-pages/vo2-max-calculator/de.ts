import type { Vo2MaxCalculatorMessages } from "./en";

const de: Vo2MaxCalculatorMessages = {
  meta: {
    title: "VO2max-Rechner – Schätze dein aerobes Fitnesslevel",
    description:
      "Schätze dein VO2max mit der Herzfrequenz-Methode oder dem Cooper-12-Minuten-Lauftest. Sieh dein aerobes Fitnesslevel und wie du es verbessern kannst.",
    keywords: [
      "VO2max Rechner",
      "vo2max Rechner",
      "aerobe Fitness Rechner",
      "Cooper-Test Rechner",
      "VO2max berechnen",
      "VO2max nach Alter",
      "kardiovaskulärer Fitnesstest",
    ],
    ogTitle: "VO2max-Rechner – Schätze dein aerobes Fitnesslevel",
    ogDescription:
      "Schätze dein VO2max mit der Herzfrequenz-Methode oder dem Cooper-12-Minuten-Lauftest. Sieh dein aerobes Fitnesslevel und wie du es verbessern kannst.",
    ogImageAlt: "VO2max-Rechner",
  },
  hero: {
    title: "VO2max-Rechner",
    subtitle:
      "Schätze dein VO2max — der Goldstandard der aeroben Fitness — anhand deiner Herzfrequenz oder eines 12-Minuten-Lauftests.",
  },
  intro:
    "Gib Alter, Geschlecht und Ruhepuls ein (oder die Distanz des Cooper-12-Minuten-Laufs), um dein VO2max zu schätzen und zu sehen, wo du in deiner Altersgruppe liegst.",
  calculator: {
    method: "Methode",
    heartRateMethod: "Herzfrequenz-Methode",
    cooperMethod: "Cooper-12-Minuten-Lauf",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    years: { one: "Jahr", other: "Jahre" },
    restingHeartRate: "Ruhepuls",
    bpm: "bpm",
    restingHint: "Miss ihn morgens als Erstes, bevor du aufstehst.",
    distanceLabel: "In 12 Minuten zurückgelegte Strecke",
    km: "km",
    miles: "Meilen",
    distanceHint: "Laufe genau 12 Minuten auf einer flachen Bahn und notiere deine Strecke.",
    calculate: "VO2max berechnen",
    yourEstimate: "Dein geschätztes VO2max",
    unit: "ml/kg/min",
    improvementTip: "Tipp zur Verbesserung",
    disclaimer:
      "VO2max ist der Goldstandard der aeroben Fitness — der maximale Sauerstoff, den dein Körper bei intensiver Belastung nutzen kann. Höher bedeutet bessere kardiovaskuläre Kapazität. Die Normen hängen vom Alter ab; diese Schwellen sind zur Orientierung vereinfacht.",
    categories: {
      superior: {
        label: "Überragend",
        description:
          "Herausragende aerobe Kapazität. Du hast eine außergewöhnliche Herz-Kreislauf-Fitness, typisch für wettkampforientierte Ausdauersportler.",
        tip: "Halte sie mit periodisiertem Training: mische lange Läufe, Tempoeinheiten und Erholungswochen, um Übertraining zu vermeiden.",
      },
      excellent: {
        label: "Ausgezeichnet",
        description:
          "Deutlich überdurchschnittliche aerobe Fitness. Herz und Lunge versorgen die arbeitende Muskulatur effizient mit Sauerstoff.",
        tip: "Füge einmal pro Woche eine VO2max-Intervalleinheit hinzu (z. B. 5×3 Min. bei harter Belastung), um in den Bereich Überragend zu kommen.",
      },
      good: {
        label: "Gut",
        description:
          "Überdurchschnittliche Fitness. Du hast eine solide aerobe Basis für Alltag und Freizeitsport.",
        tip: "Plane 3–4 Cardioeinheiten pro Woche. Nimm einen Tempolauf und einen längeren lockeren Lauf dazu, um die Basis auszubauen.",
      },
      fair: {
        label: "Ausreichend",
        description:
          "Durchschnittliche aerobe Kapazität. Regelmäßiges Training kann dein VO2max in 8–12 Wochen spürbar verbessern.",
        tip: "Starte mit 30-minütigen Zone-2-Läufen, 3× pro Woche. Nach 4 Wochen Basis füge wöchentlich eine HIIT-Einheit hinzu.",
      },
      poor: {
        label: "Schlecht",
        description:
          "Unterdurchschnittliche aerobe Kapazität. Die gute Nachricht: dieses Niveau reagiert schnell auf konstantes Training.",
        tip: "Beginne mit zügigen Spaziergängen von 20–30 Min., 5× pro Woche. Wechsle nach 2–3 Wochen zu Lauf-Geh-Intervallen.",
      },
    },
  },
  info: {
    title: "VO2max — häufige Fragen",
  },
  faq: [
    {
      question: "Was ist VO2max?",
      answer:
        "VO2max ist die maximale Rate, mit der dein Körper bei intensiver Belastung Sauerstoff aufnehmen kann, gemessen in Millilitern Sauerstoff pro Kilogramm Körpergewicht und Minute (ml/kg/min). Es gilt weithin als Goldstandard für aerobe Fitness und Herz-Kreislauf-Gesundheit. Ein höheres VO2max bedeutet, dass Herz, Lunge und Muskeln effizienter zusammenarbeiten, um Sauerstoff bei längerer Belastung zu liefern und zu nutzen.",
    },
    {
      question: "Was ist ein gutes VO2max?",
      answer:
        "Bei Männern gelten 40–50 ml/kg/min als gut und Werte über 55 als ausgezeichnet. Bei Frauen sind 35–45 gut und Werte über 50 ausgezeichnet. Elite-Ausdauersportler wie Marathonläufer und Radfahrer erreichen oft 60–85 ml/kg/min — Werte, die Jahre trainingsbedingter Herz-Kreislauf-Anpassung widerspiegeln. Untrainierte Erwachsene liegen im Schnitt bei Frauen in den 30ern und bei Männern im unteren 40er-Bereich.",
    },
    {
      question: "Wie kann ich mein VO2max verbessern?",
      answer:
        "Am wirksamsten sind hochintensives Intervalltraining (HIIT), Tempoläufe und lange lockere Läufe (LSD). HIIT-Einheiten — etwa 4–6 Intervalle von 3–5 Minuten nahe der Maximalbelastung — belasten das aerobe System direkt und bringen die größten VO2max-Zuwächse. Zusammen mit zwei oder drei lockeren Zone-2-Läufen pro Woche sind 10–20 % Verbesserung in 8–12 Wochen typisch für Einsteiger und mäßig Trainierte.",
    },
    {
      question: "Was ist der Cooper-12-Minuten-Lauftest?",
      answer:
        "Der Cooper-Test, 1968 von Dr. Kenneth Cooper für die Fitnessbewertung des US-Militärs entwickelt, besteht darin, in genau 12 Minuten auf ebener Strecke so weit wie möglich zu laufen. Die zurückgelegte Distanz schätzt das VO2max mit der Formel: VO2max = (distanceMeters − 504,9) / 44,73. Er gehört weiterhin zu den meistgenutzten Feldtests der Sportwissenschaft, weil er kein Labor braucht — nur eine abgemessene Bahn und eine Stoppuhr.",
    },
    {
      question: "Sinkt das VO2max mit dem Alter?",
      answer:
        "Ja. Ab etwa 25 Jahren sinkt das VO2max bei bewegungsarmen Menschen im Schnitt um etwa 1 % pro Jahr. Regelmäßiges Ausdauertraining bremst diesen Rückgang deutlich — aktive Menschen in den 60ern und 70ern halten oft VO2max-Werte, die denen bewegungsarmer Menschen 20 Jahre jünger entsprechen. Entscheidend ist konstantes Herz-Kreislauf-Training: schon moderate Mengen Laufen, Radfahren oder Schwimmen erhalten die aerobe Kapazität bis ins höhere Alter.",
    },
  ],
  cta: {
    title: "Verfolge deine aerobe Fitness",
    description: "Erfasse deine tägliche Aktivität und verbessere deine aerobe Fitness mit der Steps-App.",
  },
  howTo: {
    name: "So schätzt du dein VO2max",
    description:
      "Schätze das VO2max aus Ruhe- und maximaler Herzfrequenz oder mit dem Cooper-12-Minuten-Lauftest.",
    steps: [
      {
        name: "Wähle die Methode",
        text: "Entweder die Herzfrequenz-Methode (Alter + Ruhepuls) oder der Cooper-Test (Strecke in 12 Minuten).",
      },
      {
        name: "Gib die Werte ein",
        text: "Nenne Alter und Ruhepuls oder die in 12 Minuten maximalen Laufens zurückgelegte Strecke.",
      },
      {
        name: "Lies deine VO2max-Schätzung",
        text: "Der Rechner liefert ein geschätztes VO2max in ml/kg/min plus dein Fitnessperzentil für Alter und Geschlecht.",
      },
    ],
  },
};

export default de;
