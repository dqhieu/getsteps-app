import type { MarathonPacePredictorMessages } from "./en";

const fr: MarathonPacePredictorMessages = {
  meta: {
    title: "Prédicteur de marathon : estimez votre temps à partir de n'importe quel résultat",
    description:
      "Vous avez couru un 5 km ou un 10 km ? Prédisez instantanément vos temps de marathon et de semi-marathon avec la formule de Riegel. Calculateur gratuit, tableaux d'allure et conseils.",
    keywords: [
      "prédicteur de marathon",
      "prédicteur de temps de course",
      "calculateur de temps de marathon",
      "prédicteur de semi-marathon",
      "calculateur formule de Riegel",
      "prédire un temps de marathon",
      "convertir un 5 km en temps de marathon",
    ],
    ogTitle: "Prédicteur de marathon : estimez votre temps à partir de n'importe quel résultat",
    ogDescription:
      "Vous avez couru un 5 km ou un 10 km ? Prédisez instantanément vos temps de marathon et de semi-marathon avec la formule de Riegel.",
    ogImageAlt: "Prédicteur de marathon",
  },
  hero: {
    title: "Prédicteur de marathon",
    subtitle: "Saisissez un résultat récent pour prédire vos temps sur toutes les distances standards.",
  },
  intro:
    "Indiquez un temps et une distance récents pour prédire aussitôt vos temps sur 5 km, 10 km, semi-marathon et marathon avec la formule de Riegel, la référence pour la prédiction des temps de course.",
  calculator: {
    distanceLabel: "Votre distance de course",
    customDistanceLabel: "Distance (km)",
    finishTimeLabel: "Votre temps d'arrivée",
    hour: "h",
    minute: "min",
    second: "s",
    invalidDistance: "Veuillez saisir une distance valide.",
    invalidTime: "Veuillez saisir un temps valide.",
    predict: "Prédire les temps",
    resultsTitle: "Temps d'arrivée prédits",
    distanceColumn: "Distance",
    timeColumn: "Temps",
    paceKmColumn: "Allure (km)",
    paceMileColumn: "Allure (mi)",
    speedColumn: "Vitesse",
    you: "vous",
    footnote:
      "Les prédictions utilisent la formule de Riegel (facteur de fatigue 1,06). Elles sont plus fiables pour des courses récentes à effort comparable.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Semi-marathon",
      marathon: "Marathon",
      custom: "Personnalisé (km)",
    },
  },
  info: {
    title: "À propos de la prédiction des temps",
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "La formule de Riegel est-elle précise ?",
      answer:
        "La formule de Riegel est précise à ±5–10 % pour des coureurs bien entraînés qui prédisent entre des distances proches. La précision baisse quand l'écart de distance est grand (par ex. du 5 km au marathon) ou si la course saisie n'a pas été courue à fond.",
    },
    {
      question: "Qu'est-ce que la formule de Riegel ?",
      answer:
        "T2 = T1 × (D2/D1)^1,06, où T1 est votre temps connu, D1 la distance connue, D2 la distance visée et T2 le temps prédit. L'exposant 1,06 tient compte de la fatigue qui augmente sur les longues distances.",
    },
    {
      question: "Puis-je prédire un marathon à partir d'un 5 km ?",
      answer:
        "Oui, mais la prédiction sera moins précise. La formule fonctionne mieux quand la course saisie est proche de la distance visée. Pour un marathon, un 10 km ou un semi-marathon récent donne l'estimation la plus fiable.",
    },
    {
      question: "Quel est un bon temps de marathon ?",
      answer:
        "Débutant : 4:30–5:30 | intermédiaire : 3:30–4:30 | confirmé : moins de 3:30 | élite : moins de 2:30. Le temps moyen d'un marathon est d'environ 4:30 chez les hommes et 4:55 chez les femmes.",
    },
    {
      question: "Comment m'en servir pour gérer mon allure ?",
      answer:
        "Utilisez la colonne d'allure de la distance visée pour caler votre stratégie au kilomètre. Par exemple, si votre allure de marathon prédite est 5:30/km, visez un peu plus lent sur la première moitié (5:35/km) et un split négatif sur la seconde.",
    },
  ],
  cta: {
    title: "Entraînez-vous mieux avec Steps: Workout & Pedometer",
    description:
      "Entraînez-vous mieux en suivant vos pas et votre activité quotidiens dans l'application Steps: Workout & Pedometer.",
  },
  howTo: {
    name: "Comment prédire votre temps de marathon",
    description:
      "Saisissez une distance et un temps de course récents pour prédire votre temps sur marathon (et sur 5 km, 10 km, semi).",
    steps: [
      {
        name: "Saisissez une distance et un temps connus",
        text: "Utilisez un effort récent et soutenu — 5 km, 10 km, semi-marathon, ou toute distance courue récemment.",
      },
      {
        name: "Lisez vos temps prédits",
        text: "Avec la formule de Riegel, le calculateur prédit vos temps sur 5 km, 10 km, semi-marathon et marathon.",
      },
    ],
  },
};

export default fr;
