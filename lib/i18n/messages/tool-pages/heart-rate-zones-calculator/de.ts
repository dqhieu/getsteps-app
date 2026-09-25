import type { HeartRateZonesCalculatorMessages } from "./en";

const de: HeartRateZonesCalculatorMessages = {
  meta: {
    title: "Herzfrequenzzonen-Rechner – Finde deine 5 Trainingszonen",
    description:
      "Berechne deine 5 Herzfrequenz-Trainingszonen anhand von Alter und Ruhepuls. Optimiere dein Training für Fettverbrennung, Ausdauer und Leistung.",
    keywords: [
      "Herzfrequenzzonen Rechner",
      "Zielherzfrequenz Zonen",
      "Herzfrequenz Trainingszonen",
      "maximale Herzfrequenz Rechner",
      "Fettverbrennungszone",
      "Zone-2-Training",
    ],
    ogTitle: "Herzfrequenzzonen-Rechner – Finde deine 5 Trainingszonen",
    ogDescription:
      "Berechne deine 5 Herzfrequenz-Trainingszonen anhand von Alter und Ruhepuls. Optimiere dein Training für Fettverbrennung, Ausdauer und Leistung.",
    ogImageAlt: "Herzfrequenzzonen-Rechner",
  },
  hero: {
    title: "Herzfrequenzzonen-Rechner",
    subtitle:
      "Finde deine persönlichen Herzfrequenz-Trainingszonen, um die Fettverbrennung zu steigern, Ausdauer aufzubauen und deine Leistung zu verbessern.",
  },
  intro:
    "Gib dein Alter ein und sieh sofort deine 5 persönlichen Herzfrequenz-Trainingszonen. Ergänze deinen Ruhepuls, um mit der Karvonen-Methode genauere, individuellere Zonen zu erhalten.",
  calculator: {
    yourDetails: "Deine Angaben",
    age: "Alter",
    years: { one: "Jahr", other: "Jahre" },
    advanced: "Erweiterte Optionen",
    knowResting: "Ich kenne meinen Ruhepuls",
    restingHint: "Miss ihn morgens als Erstes, bevor du aufstehst.",
    knowMax: "Ich kenne meine maximale Herzfrequenz",
    maxHint: "Aus einem aktuellen Labortest oder einer maximalen Belastung beim Training.",
    bpm: "bpm",
    maxHeartRate: "Maximale Herzfrequenz",
    methodKarvonen: "Personalisiert (Karvonen)",
    methodStandard: "Standard (220 − Alter)",
    zoneBadge: "Z{n}",
    bpmRange: "{min} – {max}",
    pctRange: "{min}–{max}%",
    zones: {
      recovery: { name: "Erholung", benefit: "Aktive Erholung, geringe Intensität" },
      fatBurn: { name: "Fettverbrennung", benefit: "Aerobe Basis, optimale Fettverbrennung" },
      aerobic: { name: "Aerob", benefit: "Ausdauer, Herz-Kreislauf-Fitness" },
      threshold: { name: "Schwelle", benefit: "Schnelligkeit, Laktatschwelle" },
      maximum: { name: "Maximum", benefit: "Spitzenleistung, VO2max" },
    },
  },
  info: {
    title: "Herzfrequenzzonen verstehen",
  },
  faq: [
    {
      question: "Was sind Herzfrequenz-Trainingszonen?",
      answer:
        "Herzfrequenzzonen sind Bereiche in Schlägen pro Minute, die verschiedenen Belastungsintensitäten entsprechen. Es gibt fünf Zonen, jeweils als Prozentsatz deiner maximalen Herzfrequenz. Training in verschiedenen Zonen erzeugt unterschiedliche Anpassungen — von aktiver Erholung und Fettverbrennung im unteren Bereich bis zu Höchstgeschwindigkeit und VO2max-Entwicklung im oberen Bereich. Wenn du deine Einheiten über die Zonen verteilst, werden deine Fortschritte ausgewogener und wirksamer.",
    },
    {
      question: "Was ist die Fettverbrennungszone?",
      answer:
        "Zone 2 (60–70 % der HFmax) wird oft Fettverbrennungszone genannt, weil der Körper bei dieser Intensität vor allem Fett als Brennstoff nutzt. Höhere Intensitäten verbrennen insgesamt mehr Kalorien, ein größerer Anteil stammt aber aus Kohlenhydraten. Für dauerhaften Fettabbau ist die Kombination aus Zone-2-Cardio und einer ausgeglichenen Energiebilanz am wirksamsten. Zone 2 baut außerdem Mitochondriendichte und die aerobe Basis auf, ohne übermäßig viel Erholung zu verlangen.",
    },
    {
      question: "Wie berechne ich meine maximale Herzfrequenz?",
      answer:
        "Die Standardformel lautet 220 minus dein Alter. Bei 30 Jahren ergibt das eine HFmax von 190 bpm. Das ist eine Schätzung mit einer Spanne von etwa ±10–12 bpm — Genetik, Fitness und Medikamente können dein wahres Maximum verschieben. Wenn du einen Labor-Belastungstest hast oder bei einem Rennen oder harten Training einen echten Maximalwert aufgezeichnet hast, trage ihn unter „Erweiterte Optionen“ ein, damit die Zonen genauer werden.",
    },
    {
      question: "Was ist Zone-2-Training?",
      answer:
        "Zone-2-Training — auch lockeres Dauertraining (LISS) genannt — ist durch Forschung zu Langlebigkeit und Ausdauerleistung sehr populär geworden. Du hältst eine Belastung bei 60–70 % der HFmax, bei der du noch ein ganzes Gespräch führen kannst. Spitzen-Ausdauersportler verbringen oft 80 % ihres Trainingsumfangs in Zone 2. Vorteile sind ein besserer Fettstoffwechsel, effizientere Mitochondrien, ein höheres Herzzeitvolumen und eine schnellere Erholung zwischen harten Einheiten.",
    },
    {
      question: "Worin unterscheidet sich die Karvonen-Methode?",
      answer:
        "Die Karvonen-Methode nutzt deine Herzfrequenzreserve (HFR) — die Differenz zwischen maximaler Herzfrequenz und Ruhepuls — um die Zonen zu berechnen. Die Formel lautet: Ziel-HF = Ruhepuls + (HFR × Zonenprozent). Weil sie dein kardiovaskuläres Ausgangsniveau einbezieht, liefert sie persönlichere und meist genauere Zonen als die einfache Prozentmethode. Ein gut trainierter Athlet mit einem Ruhepuls von 45 bpm erhält deutlich andere Zonen als eine untrainierte Person mit 75 bpm, auch beim gleichen Alter.",
    },
  ],
  cta: {
    title: "Verfolge deinen Gesundheitsweg",
    description:
      "Nutze Steps, um deine täglichen Spaziergänge zu erfassen und deine Herzfrequenz in der optimalen Zone zu halten.",
  },
  howTo: {
    name: "So findest du deine Herzfrequenzzonen",
    description:
      "Gib Alter oder maximale Herzfrequenz ein (und optional den Ruhepuls), um deine 5 Trainingszonen mit der Karvonen-Methode zu erhalten.",
    steps: [
      {
        name: "Gib dein Alter ein",
        text: "Das Alter schätzt die maximale Herzfrequenz (220 − Alter), wenn du keinen Wert direkt eingibst.",
      },
      {
        name: "Optional den Ruhepuls eingeben",
        text: "Wenn du den Ruhepuls angibst, nutzt der Rechner die Karvonen-Methode für persönlichere Zonen.",
      },
      {
        name: "Lies deine 5 Zonen",
        text: "Der Rechner zeigt die Zonen 1–5 mit bpm-Bereichen und Trainingszweck (Erholung, Ausdauer, Tempo, Schwelle, Intervall).",
      },
    ],
  },
};

export default de;
