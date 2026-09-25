import type { HeartRateZonesCalculatorMessages } from "./en";

const fr: HeartRateZonesCalculatorMessages = {
  meta: {
    title: "Calculateur de zones de fréquence cardiaque – Vos 5 zones d'entraînement",
    description:
      "Calculez vos 5 zones d'entraînement cardiaque selon votre âge et votre fréquence cardiaque au repos. Optimisez vos séances pour la combustion des graisses, l'endurance et la performance.",
    keywords: [
      "calculateur zones fréquence cardiaque",
      "zones de fréquence cardiaque cible",
      "zones d'entraînement cardiaque",
      "calculateur fréquence cardiaque maximale",
      "zone de combustion des graisses",
      "entraînement zone 2",
    ],
    ogTitle: "Calculateur de zones de fréquence cardiaque – Vos 5 zones d'entraînement",
    ogDescription:
      "Calculez vos 5 zones d'entraînement cardiaque selon votre âge et votre fréquence cardiaque au repos. Optimisez vos séances pour la combustion des graisses, l'endurance et la performance.",
    ogImageAlt: "Calculateur de zones de fréquence cardiaque",
  },
  hero: {
    title: "Calculateur de zones de fréquence cardiaque",
    subtitle:
      "Découvrez vos zones d'entraînement cardiaque personnalisées pour maximiser la combustion des graisses, développer l'endurance et améliorer vos performances.",
  },
  intro:
    "Indiquez votre âge pour afficher instantanément vos 5 zones d'entraînement cardiaque personnalisées. Ajoutez votre fréquence cardiaque au repos pour utiliser la méthode de Karvonen et obtenir des zones plus précises.",
  calculator: {
    yourDetails: "Vos informations",
    age: "Âge",
    years: { one: "an", other: "ans" },
    advanced: "Options avancées",
    knowResting: "Je connais ma fréquence cardiaque au repos",
    restingHint: "Mesurez-la au réveil, avant de sortir du lit.",
    knowMax: "Je connais ma fréquence cardiaque maximale",
    maxHint: "Issue d'un test en laboratoire récent ou d'un effort maximal à l'entraînement.",
    bpm: "bpm",
    maxHeartRate: "Fréquence cardiaque maximale",
    methodKarvonen: "Personnalisé (Karvonen)",
    methodStandard: "Standard (220 − âge)",
    zoneBadge: "Z{n}",
    bpmRange: "{min} – {max}",
    pctRange: "{min}–{max}%",
    zones: {
      recovery: { name: "Récupération", benefit: "Récupération active, faible intensité" },
      fatBurn: { name: "Combustion des graisses", benefit: "Base aérobie, combustion optimale des graisses" },
      aerobic: { name: "Aérobie", benefit: "Endurance, forme cardiovasculaire" },
      threshold: { name: "Seuil", benefit: "Travail de vitesse, seuil lactique" },
      maximum: { name: "Maximum", benefit: "Performance maximale, VO2 max" },
    },
  },
  info: {
    title: "Comprendre les zones de fréquence cardiaque",
  },
  faq: [
    {
      question: "Que sont les zones d'entraînement cardiaque ?",
      answer:
        "Les zones de fréquence cardiaque sont des plages de battements par minute qui correspondent à différentes intensités d'exercice. Il en existe cinq, chacune définie en pourcentage de votre fréquence cardiaque maximale. S'entraîner dans des zones différentes produit des adaptations distinctes — de la récupération active et de la combustion des graisses à basse intensité jusqu'à la vitesse de pointe et le développement du VO2 max à haute intensité. Répartir vos séances entre les zones rend vos progrès plus équilibrés et plus efficaces.",
    },
    {
      question: "Qu'est-ce que la zone de combustion des graisses ?",
      answer:
        "La zone 2 (60–70 % de la FC max) est souvent appelée zone de combustion des graisses, car le corps y utilise surtout les graisses comme carburant. Les intensités plus élevées brûlent davantage de calories au total, mais une plus grande part vient des glucides. Pour une perte de graisse durable, associer des séances de cardio en zone 2 à un équilibre calorique global est le plus efficace. La zone 2 développe aussi la densité mitochondriale et la base aérobie sans exiger une récupération excessive.",
    },
    {
      question: "Comment calculer ma fréquence cardiaque maximale ?",
      answer:
        "La formule standard est 220 moins votre âge. Pour une personne de 30 ans, cela donne une FC max de 190 bpm. C'est une estimation avec une marge d'environ ±10–12 bpm — la génétique, le niveau de forme et les médicaments peuvent décaler votre vrai maximum. Si vous disposez d'un test d'effort en laboratoire ou d'un effort maximal réel en course ou à l'entraînement, saisissez cette valeur dans la section « Options avancées » pour des zones plus précises.",
    },
    {
      question: "Qu'est-ce que l'entraînement en zone 2 ?",
      answer:
        "L'entraînement en zone 2 — aussi appelé cardio en régime continu de faible intensité (LISS) — s'est beaucoup répandu grâce aux recherches sur la longévité et la performance d'endurance. Il s'agit d'un effort soutenu à 60–70 % de la FC max, où vous pouvez tenir une conversation entière. Les athlètes d'endurance de haut niveau passent souvent 80 % de leur volume d'entraînement en zone 2. Les bénéfices comprennent un meilleur métabolisme des graisses, une meilleure efficacité mitochondriale, un débit cardiaque plus élevé et une récupération plus rapide entre les séances difficiles.",
    },
    {
      question: "En quoi la méthode de Karvonen est-elle différente ?",
      answer:
        "La méthode de Karvonen utilise votre réserve de fréquence cardiaque (RFC) — la différence entre votre fréquence cardiaque maximale et votre fréquence cardiaque au repos — pour calculer les zones. La formule est : FC cible = FC au repos + (RFC × pourcentage de la zone). Comme elle tient compte de votre niveau cardiovasculaire de départ, elle produit des zones plus personnalisées et en général plus précises que la simple méthode en pourcentage. Un athlète bien entraîné avec une fréquence cardiaque au repos de 45 bpm obtiendra des zones nettement différentes d'une personne sédentaire à 75 bpm, même au même âge.",
    },
  ],
  cta: {
    title: "Suivez votre parcours santé",
    description:
      "Utilisez Steps pour suivre vos marches quotidiennes et garder votre fréquence cardiaque dans la zone optimale.",
  },
  howTo: {
    name: "Comment trouver vos zones de fréquence cardiaque",
    description:
      "Indiquez votre âge ou votre fréquence cardiaque maximale (et, si vous le souhaitez, votre fréquence cardiaque au repos) pour obtenir vos 5 zones d'entraînement avec la méthode de Karvonen.",
    steps: [
      {
        name: "Indiquez votre âge",
        text: "L'âge sert à estimer la fréquence cardiaque maximale (220 − âge) si vous n'en saisissez pas une directement.",
      },
      {
        name: "Ajoutez éventuellement votre fréquence cardiaque au repos",
        text: "Si vous indiquez votre fréquence cardiaque au repos, le calculateur utilise la méthode de Karvonen pour des zones plus personnalisées.",
      },
      {
        name: "Lisez vos 5 zones",
        text: "Le calculateur affiche les zones 1 à 5 avec les plages en bpm et l'objectif d'entraînement (récupération, endurance, tempo, seuil, intervalle).",
      },
    ],
  },
};

export default fr;
