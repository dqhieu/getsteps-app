import type { RestingHeartRateCalculatorMessages } from "./en";

const fr: RestingHeartRateCalculatorMessages = {
  meta: {
    title: "Calculateur de fréquence cardiaque au repos – Forme et zones de Karvonen",
    description:
      "Évaluez votre niveau de forme à partir de votre fréquence cardiaque au repos et obtenez des zones d'entraînement de Karvonen personnalisées. Indiquez votre âge et votre mesure pour un résultat immédiat.",
    keywords: [
      "calculateur fréquence cardiaque au repos",
      "fréquence cardiaque au repos selon l'âge",
      "quelle est une bonne fréquence cardiaque au repos",
      "calculateur réserve de fréquence cardiaque",
      "formule de Karvonen",
      "niveau de forme fréquence cardiaque au repos",
    ],
    ogTitle: "Calculateur de fréquence cardiaque au repos – Forme et zones de Karvonen",
    ogDescription:
      "Évaluez votre niveau de forme à partir de votre fréquence cardiaque au repos et obtenez des zones d'entraînement de Karvonen personnalisées. Indiquez votre âge et votre mesure pour un résultat immédiat.",
    ogImageAlt: "Calculateur de fréquence cardiaque au repos",
  },
  hero: {
    title: "Calculateur de fréquence cardiaque au repos",
    subtitle:
      "Vérifiez votre niveau de forme cardiovasculaire et obtenez des zones d'entraînement personnalisées à partir de votre réserve de fréquence cardiaque.",
  },
  intro:
    "Indiquez votre âge, votre sexe et votre fréquence cardiaque au repos mesurée pour voir votre catégorie de forme et calculer des zones de Karvonen adaptées à la combustion des graisses, à l'endurance aérobie et à la performance maximale.",
  calculator: {
    yourDetails: "Vos informations",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    years: { one: "an", other: "ans" },
    restingHeartRate: "Fréquence cardiaque au repos",
    bpm: "bpm",
    rhrHint:
      "Astuce : mesurez le matin avant de vous lever. Restez assis au calme 5 min, puis comptez les battements pendant 60 s.",
    calculate: "Calculer",
    fitnessLevel: "Votre niveau de forme",
    hrMax: "FCmax",
    hrr: "RFC",
    zonesTitle: "Zones d'entraînement de Karvonen",
    zoneBadge: "Z{n}",
    bpmRange: "{min}–{max} bpm",
    pctRange: "{min}–{max}%",
    categories: {
      athlete: "Athlète",
      excellent: "Excellent",
      good: "Bon",
      above_average: "Supérieur à la moyenne",
      average: "Moyen",
      below_average: "Inférieur à la moyenne",
      poor: "Médiocre",
    },
    zones: {
      activeRecovery: { name: "Récupération active", purpose: "Récupération" },
      fatBurn: { name: "Combustion des graisses", purpose: "Graisses" },
      aerobicEndurance: { name: "Endurance aérobie", purpose: "Aérobie" },
      lactateThreshold: { name: "Seuil lactique", purpose: "Seuil" },
      vo2Max: { name: "VO2 max", purpose: "VO2 max" },
    },
  },
  info: {
    title: "FAQ sur la fréquence cardiaque au repos",
  },
  faq: [
    {
      question: "Quelle est une fréquence cardiaque au repos normale ?",
      answer:
        "Chez la plupart des adultes, une fréquence cardiaque au repos normale se situe entre 60 et 100 battements par minute (bpm). Les athlètes entraînés ont souvent une fréquence cardiaque au repos de 40–60 bpm, car leur cœur est plus fort et pompe davantage de sang à chaque battement. Des valeurs sous 60 bpm (bradycardie) peuvent être normales chez les personnes en forme, mais doivent être évaluées par un médecin si elles s'accompagnent de symptômes.",
    },
    {
      question: "Comment mesurer ma fréquence cardiaque au repos ?",
      answer:
        "Mesurez votre fréquence cardiaque au repos le matin, avant de sortir du lit. Restez immobile 5 minutes, puis posez deux doigts sur le poignet (artère radiale) ou le cou (artère carotide) et comptez les battements pendant 60 secondes. Évitez de mesurer après le café, l'exercice ou un stress. La moyenne de trois matins consécutifs donne la lecture la plus fiable.",
    },
    {
      question: "La fréquence cardiaque au repos s'améliore-t-elle avec la forme ?",
      answer:
        "Oui. L'exercice cardiovasculaire régulier renforce le muscle cardiaque, qui pompe alors plus de sang à chaque battement. Ce volume d'éjection plus élevé signifie que le cœur a besoin de battre moins souvent pour délivrer la même quantité de sang. Un entraînement aérobie régulier abaisse en général la fréquence cardiaque au repos de 5–25 bpm en plusieurs mois, selon votre niveau de départ.",
    },
    {
      question: "Quelle est la différence entre fréquence cardiaque au repos et maximale ?",
      answer:
        "La fréquence cardiaque au repos est le nombre de battements par minute au repos complet. La fréquence cardiaque maximale (FCmax) est le plus grand nombre de battements par minute que votre cœur peut atteindre lors d'un effort maximal, estimée par 220 moins votre âge. La réserve de fréquence cardiaque (RFC) est la différence entre les deux et représente la plage dans laquelle votre cœur peut travailler à l'exercice. La méthode de Karvonen utilise la RFC pour calculer des zones d'entraînement personnalisées.",
    },
    {
      question: "Comment faire baisser ma fréquence cardiaque au repos ?",
      answer:
        "Le moyen le plus efficace est l'exercice aérobie régulier : visez 3 à 5 séances par semaine de cardio d'intensité modérée et soutenue, comme la marche, le jogging, le vélo ou la natation. Un sommeil suffisant (7–9 heures), la gestion du stress (méditation, respiration profonde), la limitation de la caféine et de l'alcool, et un poids corporel sain contribuent aussi à une fréquence cardiaque au repos plus basse. Les progrès se voient en général en 4 à 8 semaines d'entraînement régulier.",
    },
  ],
  cta: {
    title: "Améliorez votre santé cardiaque",
    description: "Suivez vos pas quotidiens pour améliorer votre santé cardiovasculaire dans le temps.",
  },
  howTo: {
    name: "Comment vérifier votre catégorie de forme selon la fréquence cardiaque au repos",
    description:
      "Indiquez votre âge et votre fréquence cardiaque au repos pour voir votre niveau de forme cardiovasculaire et vos zones d'entraînement de Karvonen.",
    steps: [
      {
        name: "Indiquez l'âge et la fréquence cardiaque au repos",
        text: "Mesurez la fréquence cardiaque au repos au réveil, avant la caféine, encore allongé dans le lit.",
      },
      {
        name: "Lisez votre catégorie de forme",
        text: "Le calculateur vous place sur une échelle de forme, de l'athlète au niveau médiocre, selon des plages de fréquence cardiaque au repos ajustées à l'âge.",
      },
      {
        name: "Lisez vos zones de Karvonen",
        text: "Il renvoie aussi 5 zones d'entraînement cardiaque personnalisées selon votre fréquence cardiaque au repos.",
      },
    ],
  },
};

export default fr;
