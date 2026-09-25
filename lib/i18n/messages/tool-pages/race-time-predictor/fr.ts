import type { RaceTimePredictorMessages } from "./en";

const fr: RaceTimePredictorMessages = {
  meta: {
    title: "Prédicteur de temps de course : 5 km, 10 km, semi et marathon",
    description:
      "Prédicteur de temps gratuit : entrez votre allure pour obtenir le temps d'arrivée, ou fixez un objectif pour trouver l'allure nécessaire. Résultats instantanés pour le 5 km, le 10 km, le semi-marathon et le marathon.",
    keywords: [
      "prédicteur de temps de course",
      "calculateur de temps d'arrivée",
      "quelle allure pour un semi-marathon sous les 2 heures",
      "calculateur de temps sur 5 km",
      "calculateur d'allure marathon",
      "calculateur d'objectif de course",
    ],
    ogTitle: "Prédicteur de temps de course : 5 km, 10 km, semi et marathon",
    ogDescription:
      "Prédicteur de temps gratuit : entrez votre allure pour obtenir le temps d'arrivée, ou fixez un objectif pour trouver l'allure nécessaire. Résultats instantanés pour le 5 km, le 10 km, le semi-marathon et le marathon.",
    ogImageAlt: "Prédicteur de temps de course",
  },
  hero: {
    title: "Prédicteur de temps de course",
    subtitle:
      "Calculez votre temps d'arrivée à partir de l'allure visée, ou trouvez l'allure exacte pour tenir votre objectif.",
  },
  intro:
    "Indiquez la distance et soit votre allure cible, soit votre temps d'arrivée visé. Voyez aussitôt le temps prévu ou l'allure au kilomètre nécessaire, plus des fractions de 5 km pour gérer votre course.",
  calculator: {
    title: "Réglages de course",
    distanceLabel: "Distance de course",
    customPlaceholder: "Distance en km",
    modeLabel: "Que voulez-vous calculer ?",
    finishTimeMode: "Temps d'arrivée",
    requiredPaceMode: "Allure nécessaire",
    paceLabel: "Votre allure (min/km, ex. 5:30)",
    goalLabel: "Temps visé (H:MM:SS ou MM:SS)",
    calculate: "Calculer",
    predictedFinish: "Temps d'arrivée prévu",
    requiredPaceResult: "Allure nécessaire",
    pacePerKm: "Allure /km",
    pacePerMi: "Allure /mi",
    speedKmh: "Vitesse km/h",
    speedMph: "Vitesse mph",
    splitsTitle: "Fractions de 5 km",
    markerColumn: "Repère",
    cumulativeColumn: "Temps cumulé",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Semi-marathon",
      marathon: "Marathon",
      custom: "Personnalisé",
    },
  },
  faqTitle: "FAQ allure de course",
  faq: [
    {
      question: "Quelle allure pour un semi-marathon sous les 2 heures ?",
      answer:
        "Vous devez tenir 5:41/km (9:09/mile), soit environ 10,6 km/h. Utilisez le calculateur ci-dessus, choisissez « Allure nécessaire », sélectionnez Semi-marathon et entrez 2:00:00 comme temps visé.",
    },
    {
      question: "Quelle allure pour un 5 km en 25 minutes ?",
      answer:
        "Un 5 km en 25 minutes demande une allure de 5:00/km (8:03/mile). C'est un objectif intermédiaire solide : la plupart des débutants partent autour de 6:30–7:00/km et descendent ensuite.",
    },
    {
      question: "Comment utiliser les fractions en course ?",
      answer:
        "Courez en fractions régulières (même allure tous les 5 km) pour une performance prévisible. Les fractions négatives — deuxième moitié plus rapide que la première — sont l'idéal, et ce que visent les élites. Évitez de partir trop vite sur le premier kilomètre.",
    },
    {
      question: "Quel est un bon temps sur 10 km ?",
      answer:
        "Débutant : 60–70 min ; intermédiaire : 50–60 min ; confirmé : 40–50 min ; élite : moins de 35 min. Le record du monde est sous les 27 minutes. La plupart des coureurs loisir finissent entre 50 et 65 minutes.",
    },
    {
      question: "Comment gérer mon allure sur semi-marathon ?",
      answer:
        "Partez à l'allure visée sur les 10 premiers kilomètres, puis accélérez les 11 derniers si vous vous sentez fort. Évitez de courir plus vite que l'allure visée au début : la deuxième moitié est toujours plus dure que la première, quelle que soit l'allure.",
    },
  ],
  cta: {
    title: "Suivez vos pas d'entraînement chaque jour dans l'application Steps.",
    description: "Notez chaque sortie, suivez vos fractions et atteignez vos objectifs de course avec l'application Steps.",
  },
  howTo: {
    name: "Comment prédire un temps d'arrivée",
    description:
      "Saisissez la distance et soit une allure, soit un temps visé, pour obtenir la valeur manquante.",
    steps: [
      {
        name: "Indiquez la distance",
        text: "Choisissez une course courante (5 km, 10 km, semi-marathon, marathon) ou entrez une distance personnalisée.",
      },
      {
        name: "Saisissez l'allure ou le temps visé",
        text: "Fournissez l'un des deux : le calculateur complète l'autre.",
      },
      {
        name: "Lisez le temps prévu ou l'allure nécessaire",
        text: "Le résultat affiche le temps d'arrivée prévu plus les fractions pour les distances de course courantes.",
      },
    ],
  },
};

export default fr;
