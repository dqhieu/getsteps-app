import type { TrainingPaceZonesMessages } from "./en";

const fr: TrainingPaceZonesMessages = {
  meta: {
    title: "Calculateur de zones d'allure — zones d'entraînement selon votre forme",
    description:
      "Calculez vos 5 zones d'allure à partir d'un résultat récent. Obtenez les plages exactes pour les sorties faciles, le tempo, le seuil et les intervalles VO2 max.",
    keywords: [
      "zones d'allure",
      "calculateur de zones d'allure",
      "zones de course Jack Daniels",
      "calculateur d'allure tempo",
      "calculateur d'allure facile",
      "allure d'intervalles",
      "calculateur d'allure seuil",
    ],
    ogTitle: "Calculateur de zones d'allure — zones d'entraînement selon votre forme",
    ogDescription:
      "Calculez vos 5 zones d'allure à partir d'un résultat récent. Obtenez les plages exactes pour les sorties faciles, le tempo, le seuil et les intervalles VO2 max.",
    ogImageAlt: "Calculateur de zones d'allure",
  },
  hero: {
    title: "Calculateur de zones d'allure",
    subtitle: "Obtenez vos zones d'entraînement personnalisées à partir d'une performance récente.",
  },
  intro:
    "Saisissez un temps de course récent pour calculer vos 5 zones d'allure, de la récupération facile aux intervalles intenses. Utilisez-les pour structurer votre entraînement.",
  calculator: {
    distanceLabel: "Distance de course",
    customDistanceLabel: "Distance (km)",
    finishTimeLabel: "Temps d'arrivée",
    hour: "h",
    minute: "min",
    second: "s",
    invalidTime: "Veuillez saisir un temps de course valide.",
    invalidDistance: "Veuillez saisir une distance valide.",
    calculate: "Calculer les zones",
    footnote:
      "Un résultat récent couru à l'effort de course donne les zones les plus justes. Elles bougent avec votre forme : recalculez après les courses importantes.",
    races: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Semi-marathon",
      marathon: "Marathon",
      custom: "Personnalisé",
    },
    zones: {
      easy: {
        name: "Facile / Récupération",
        description: "Effort très léger. Conversation complète possible. Construit la base aérobie et aide la récupération.",
        usage: "~80 % de toutes les sorties",
      },
      aerobic: {
        name: "Base aérobie",
        description: "Allure confortable et tenable. Respiration plus haute mais stable. Zone principale des sorties longues.",
        usage: "Sortie longue hebdomadaire",
      },
      tempo: {
        name: "Tempo",
        description: "Confortablement dur. Respiration laborieuse. Courses progressives et travail à allure marathon.",
        usage: "Courses progressives",
      },
      threshold: {
        name: "Seuil",
        description: "Effort soutenu et dur. Allure au seuil lactique. Sorties tempo de 20 à 40 min.",
        usage: "Sorties tempo (20-40 min)",
      },
      interval: {
        name: "Intervalle / VO2",
        description: "Effort proche du maximum. Intervalles courts (400 m-1600 m). Développe le VO2 max et la vitesse.",
        usage: "Intervalles sur piste",
      },
    },
  },
  faqTitle: "Comprendre les zones d'allure",
  faq: [
    {
      question: "Que sont les zones d'allure d'entraînement ?",
      answer:
        "Les zones d'allure sont des plages qui ciblent des filières énergétiques différentes. Chaque zone produit des adaptations distinctes : les zones faciles construisent la base aérobie et la densité mitochondriale, les zones plus dures développent le seuil lactique et le VO2 max. Courir à la bonne intensité pour chaque séance — plutôt que toujours modérément dur — est l'un des principes les plus importants de l'entraînement d'endurance.",
    },
    {
      question: "Combien de zones d'allure existe-t-il ?",
      answer:
        "La plupart des systèmes utilisent 5 zones, même si certains entraîneurs préfèrent 3 (facile, modéré, dur) ou 7 (comme chez Garmin et Polar). Le modèle à 5 zones — Facile, Aérobie, Tempo, Seuil et Intervalle VO2 — est le plus pratique pour les coureurs loisir et compétiteurs. Il s'aligne sur le cadre VDOT de Jack Daniels et s'appuie sur la recherche en sciences du sport.",
    },
    {
      question: "À quelle allure doivent être mes sorties faciles ?",
      answer:
        "Les sorties faciles (zones 1–2) doivent être vraiment confortables : vous devez pouvoir tenir une conversation complète sans être essoufflé. Elles sont en général 60 à 90 secondes par kilomètre plus lentes que votre allure de 5 km. Beaucoup de coureurs courent leurs jours faciles trop vite et accumulent une fatigue qui dégrade les séances dures. Le vrai facile est plus lent qu'on ne le croit, et c'est là que se fait l'essentiel des adaptations aérobies.",
    },
    {
      question: "À quelle fréquence courir dans chaque zone ?",
      answer:
        "La règle des 80/20, appuyée par la recherche sur les coureurs d'élite, recommande environ 80 % du volume en zones 1–2 et 20 % en zones 3–5. Cette approche polarisée donne de meilleurs résultats que s'entraîner la plupart du temps à intensité modérée. Une semaine type peut compter 3 à 4 sorties faciles, une sortie longue, une séance tempo (zone 4) et une séance d'intervalles (zone 5) — dans les bonnes zones, pas seulement « dur ».",
    },
    {
      question: "Comment améliorer mon allure au seuil ?",
      answer:
        "L'allure au seuil lactique (zone 4) progresse surtout avec une sortie tempo hebdomadaire de 20 à 40 minutes à un effort confortablement dur — l'allure que vous pourriez tenir environ une heure en course. À mesure que le corps s'adapte, il élimine le lactate plus efficacement et vous courez plus vite avant d'accumuler la fatigue. Une séance de seuil par semaine pendant 8 à 12 semaines améliore en général les temps sur 10 km et semi-marathon.",
    },
  ],
  cta: {
    title: "Suivez vos courses et vos pas quotidiens",
    description: "Suivez vos courses et vos pas quotidiens ensemble dans l'application Steps.",
  },
  howTo: {
    name: "Comment obtenir vos zones d'allure d'entraînement",
    description:
      "Saisissez une distance et un temps de course récents pour obtenir 5 zones d'allure personnalisées : facile, tempo, seuil et intervalles.",
    steps: [
      {
        name: "Saisissez un résultat récent",
        text: "Un temps de 5 km, 10 km ou semi-marathon couru à fond.",
      },
      {
        name: "Lisez vos 5 zones",
        text: "Le calculateur renvoie les allures de récupération, d'endurance, de tempo, de seuil et d'intervalles en min/km et min/mile.",
      },
    ],
  },
};

export default fr;
