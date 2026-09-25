import type { ActivityToStepsMessages } from "./en";

const fr: ActivityToStepsMessages = {
  meta: {
    title: "Convertisseur activité en pas – Transformez tout exercice en pas",
    description:
      "Convertissez vélo, natation, yoga, aviron et plus de 10 activités en pas équivalents. Idéal pour les défis de pas et le suivi fitness.",
    keywords: [
      "convertisseur activité en pas",
      "convertir exercice en pas",
      "équivalent pas vélo",
      "équivalent pas natation",
      "calculateur pas équivalents",
      "pas hors marche",
    ],
    ogTitle: "Convertisseur activité en pas – Transformez tout exercice en pas",
    ogDescription:
      "Convertissez vélo, natation, yoga, aviron et plus de 10 activités en pas équivalents. Idéal pour les défis de pas et le suivi fitness.",
    ogImageAlt: "Convertisseur activité en pas",
  },
  hero: {
    title: "Convertisseur activité en pas",
    subtitle:
      "Convertissez n'importe quelle activité — vélo, natation, yoga et plus — en pas équivalents pour votre défi de pas ou votre objectif fitness.",
    intro:
      "Choisissez votre activité, indiquez la durée et voyez aussitôt le nombre de pas équivalents. Les valeurs MET (équivalent métabolique) assurent une conversion fiable sur 10 activités.",
  },
  appCta: {
    headline: "Comptez chaque activité en pas — automatiquement",
    description:
      "Steps suit vos mouvements toute la journée en arrière-plan et les convertit en équivalents-pas, sans saisie manuelle.",
  },
  stickyCta: "Suivez vos pas avec Steps",
  calculator: {
    yourActivity: "Votre activité",
    activityType: "Type d'activité",
    duration: "Durée (minutes)",
    intensity: "Intensité",
    intensities: {
      low: "Faible",
      medium: "Moyenne",
      high: "Élevée",
    },
    calorieToggle: "Pour le calcul des calories (facultatif)",
    bodyWeight: "Poids",
    equivalentSteps: "Pas équivalents",
    equivalentFor: "pas équivalents pour {duration} min de {activity}",
    walkingTime: "Temps de marche",
    minutes: "{minutes} min",
    distance: "Distance",
    distanceKm: "{distance} km",
    distanceMi: "{distance} mi",
    calories: "Calories",
    kcal: "kcal",
    metNote: "Calculé avec les valeurs MET (Metabolic Equivalent of Task)",
    activities: {
      cycling: "Vélo",
      swimming: "Natation",
      elliptical: "Elliptique",
      rowing: "Aviron",
      jump_rope: "Corde à sauter",
      dancing: "Danse",
      yoga: "Yoga",
      basketball: "Basketball",
      hiking: "Randonnée",
      pilates: "Pilates",
    },
  },
  info: {
    title: "Comment fonctionnent les pas équivalents",
  },
  faq: [
    {
      question: "Comment les pas d'une activité sont-ils calculés ?",
      answer:
        "Ce convertisseur utilise les valeurs MET (Metabolic Equivalent of Task), une mesure standard de l'intensité utilisée en sciences du sport. La marche à allure normale a un MET de 3,5, soit environ 100 pas par minute. Le MET de chaque activité est comparé à celui de la marche pour obtenir un nombre de pas équivalents. Par exemple, une activité à MET 7,0 (deux fois la marche) produit deux fois plus de pas équivalents par minute.",
    },
    {
      question: "Le vélo équivaut-il à des pas de marche ?",
      answer:
        "Oui — 30 minutes de vélo à intensité moyenne (MET ~6,8) représentent environ 7 000 à 9 000 pas équivalents selon votre allure. Le vélo de compétition à haute intensité peut dépasser 14 000 pas équivalents en 30 minutes. Un podomètre ne les comptera pas comme de vrais pas, mais cette conversion offre une comparaison juste pour un défi de pas.",
    },
    {
      question: "La natation compte-t-elle comme des pas ?",
      answer:
        "La natation n'est pas suivie nativement comme des pas par la plupart des applis et podomètres. Pourtant, 30 minutes de natation à intensité moyenne (MET ~7,0) équivalent à environ 6 000–8 000 pas. Utilisez ce convertisseur pour faire compter vos séances dans les défis qui acceptent une saisie manuelle.",
    },
    {
      question: "Pourquoi convertir des activités en pas ?",
      answer:
        "Les défis de pas, au travail ou dans les applis, mesurent souvent la progression en pas, alors que les cyclistes, nageurs et pratiquants de yoga accumulent naturellement moins de pas GPS. Convertir vos activités non marchées en pas équivalents vous permet de participer équitablement, de suivre votre activité du jour et de comparer l'effort entre sports sur une même échelle.",
    },
  ],
  related: [
    { title: "Calculateur pas en calories", href: "/tools/steps-to-calories-calculator" },
    { title: "Calculateur d'objectif de pas quotidien", href: "/tools/daily-step-goal-calculator" },
    { title: "Calculateur de calories de marche", href: "/tools/walking-calories-calculator" },
  ],
  cta: {
    title: "Suivez votre parcours santé",
    description: "Suivez toutes vos activités et vos pas automatiquement avec l'appli Steps.",
  },
  howTo: {
    name: "Comment convertir une activité en pas équivalents",
    description:
      "Indiquez le type d'activité, la durée et l'intensité pour obtenir le nombre de pas équivalents de votre objectif du jour.",
    steps: [
      {
        name: "Choisissez une activité",
        text: "Vélo, natation, yoga, musculation et des dizaines d'autres activités sont pris en charge.",
      },
      {
        name: "Indiquez la durée et l'intensité",
        text: "La durée en minutes, plus un sélecteur d'intensité légère, modérée ou vigoureuse.",
      },
      {
        name: "Lisez les pas équivalents",
        text: "Le calculateur renvoie le nombre de pas équivalents d'après les valeurs MET, pour atteindre un objectif de pas même sans avoir marché.",
      },
    ],
  },
};

export default fr;
