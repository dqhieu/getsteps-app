import type { DailyStepGoalCalculatorMessages } from "./en";

const fr: DailyStepGoalCalculatorMessages = {
  meta: {
    title: "Calculateur d'objectif de pas quotidien – recommandations personnalisées",
    description:
      "Obtenez un objectif de pas quotidien personnalisé selon votre âge, votre niveau d'activité et vos objectifs santé. Découvrez combien de pas marcher chaque jour.",
    keywords: [
      "objectif de pas quotidien",
      "combien de pas par jour",
      "objectif de pas selon l'âge",
      "pas recommandés par jour",
      "objectif de pas personnalisé",
      "calculateur objectif de pas",
      "objectif de marche quotidien",
      "pas pour perdre du poids",
    ],
    ogTitle: "Calculateur d'objectif de pas quotidien",
    ogDescription:
      "Obtenez un objectif de pas quotidien personnalisé selon votre âge, votre niveau d'activité et vos objectifs santé.",
    ogImageAlt: "Calculateur d'objectif de pas quotidien",
  },
  hero: {
    title: "Calculateur d'objectif de pas quotidien",
    subtitle:
      "Obtenez un objectif de pas quotidien personnalisé selon votre âge, votre niveau d'activité actuel et vos objectifs de santé.",
  },
  resultCta: {
    headline: "Atteignez votre objectif de pas, automatiquement",
    description:
      "Steps compte vos pas en arrière-plan, sans saisie manuelle, pour que vous atteigniez vraiment l'objectif ci-dessus et preniez une habitude durable.",
  },
  stickyCta: "Suivez vos pas avec Steps",
  calculator: {
    yourProfile: "Votre profil",
    age: "Âge",
    years: "ans",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    activityLevel: "Niveau d'activité actuel",
    activity: {
      sedentary: "Sédentaire",
      lightly_active: "Peu actif",
      active: "Actif",
      very_active: "Très actif",
    },
    healthGoal: "Objectif santé",
    goals: {
      maintain: "Rester en forme",
      lose_weight: "Perdre du poids",
      improve_fitness: "Améliorer la forme",
      train_event: "Préparer un événement",
    },
    currentSteps: "Pas quotidiens actuels (facultatif)",
    currentStepsPlaceholder: "p. ex. 5\u202f000",
    currentStepsHint: "Indiquez votre moyenne de pas quotidiens pour une recommandation plus personnalisée",
    resultTitle: "Votre objectif de pas quotidien recommandé",
    stepsValue: "{steps} pas",
    perDay: "par jour",
    weeklyGoal: "Objectif hebdomadaire",
    distancePerDay: "Distance/jour",
    caloriesPerDay: "Calories/jour",
    kmValue: "{distance} km",
    approxCalories: "~{calories}",
    planTitle: "Plan de progression sur 8 semaines",
    planSubtitle: "Montez progressivement vers votre objectif avec des paliers hebdomadaires",
    weekLabel: "Semaine {week}",
    tipsTitle: "Conseils pour atteindre votre objectif",
    tips: {
      sedentary: [
        "Commencez par une marche de 10 minutes pendant la pause déjeuner",
        "Prenez les escaliers plutôt que l'ascenseur",
        "Garez-vous plus loin de l'entrée",
      ],
      lightlyActive: [
        "Ajoutez une marche de 15 minutes le matin à votre routine",
        "Marchez pendant vos appels téléphoniques",
      ],
      loseWeight: [
        "Associez la marche à une alimentation équilibrée pour de meilleurs résultats",
        "Essayez de garder une allure soutenue pour brûler plus de calories",
      ],
      improveFitness: [
        "Augmentez progressivement votre allure",
        "Ajoutez un peu de marche en côte ou des escaliers",
      ],
      trainEvent: [
        "Suivez un plan d'entraînement progressif",
        "Prévoyez des jours de repos pour récupérer",
      ],
      general: [
        "Suivez vos pas chaque jour pour rester motivé",
        "Trouvez un partenaire de marche pour rester régulier",
      ],
    },
  },
  info: {
    title: "Comprendre les objectifs de pas",
    intro:
      "Le bon objectif de pas dépend de votre situation. 10\u202f000 pas est une cible populaire, mais les bénéfices pour la santé peuvent apparaître à des volumes différents selon votre âge et votre condition physique.",
    ageTitle: "Pas recommandés selon l'âge",
    ages: [
      { label: "Enfants et ados (moins de 18 ans) :", steps: "12\u202f000-15\u202f000 pas/jour" },
      { label: "Adultes (18-64 ans) :", steps: "10\u202f000-12\u202f000 pas/jour" },
      { label: "Seniors (65 ans et plus) :", steps: "7\u202f000-10\u202f000 pas/jour" },
    ],
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "Faut-il vraiment faire 10\u202f000 pas par jour ?",
      answer:
        "Non, 10\u202f000 pas n'est pas un chiffre magique. Des études récentes montrent que des bénéfices importants pour la santé commencent autour de 7\u202f000 à 8\u202f000 pas par jour. L'essentiel est d'être plus actif qu'aujourd'hui.",
    },
    {
      question: "Combien de pas pour perdre du poids ?",
      answer:
        "Pour perdre du poids, visez 12\u202f000 pas ou plus par jour, avec une alimentation équilibrée. Cela peut brûler 400 à 600 calories supplémentaires par jour. La régularité compte plus que d'atteindre un chiffre parfait chaque jour.",
    },
    {
      question: "Comment augmenter mes pas quotidiens ?",
      answer:
        "Ajoutez 1\u202f000 pas par semaine à votre moyenne actuelle. Faites des réunions en marchant, garez-vous plus loin, prenez les escaliers plutôt que l'ascenseur et prévoyez de courtes pauses marche dans la journée.",
    },
    {
      question: "Et si je n'arrive pas à atteindre mon objectif ?",
      answer:
        "Toute augmentation d'activité est utile. Si l'objectif vous semble trop ambitieux, ajustez-le pour qu'il soit tenable. Le meilleur objectif est celui que vous pouvez garder dans la durée. Visez le progrès, pas la perfection.",
    },
  ],
  cta: {
    title: "Suivez vos objectifs de pas",
    description:
      "Téléchargez l'application Steps pour fixer des objectifs quotidiens, suivre vos progrès et prendre de bonnes habitudes de marche.",
  },
  howTo: {
    name: "Comment trouver votre objectif de pas quotidien",
    description:
      "Indiquez l'âge, le sexe, le poids, la taille, le niveau d'activité et l'objectif pour obtenir un nombre de pas quotidien personnalisé.",
    steps: [
      {
        name: "Renseignez votre profil",
        text: "Indiquez l'âge, le sexe, le poids et la taille. Le calculateur s'en sert pour estimer votre dépense énergétique de base.",
      },
      {
        name: "Choisissez votre niveau d'activité actuel",
        text: "Sélectionnez sédentaire, peu actif, modérément actif ou très actif. Soyez honnête : l'objectif part de là où vous en êtes.",
      },
      {
        name: "Choisissez votre objectif",
        text: "Les options incluent la forme générale, la perte de poids, la santé cardiovasculaire et la longévité. Chacune s'appuie sur des cibles de pas fondées sur les données.",
      },
      {
        name: "Lisez votre objectif quotidien",
        text: "Le calculateur affiche un objectif de pas quotidien personnalisé, un total hebdomadaire et un plan de progression si vous partez d'un niveau plus bas.",
      },
    ],
  },
};

export default fr;
