import type { MacroCalculatorMessages } from "./en";

const fr: MacroCalculatorMessages = {
  meta: {
    title: "Calculateur de macronutriments – protéines, glucides et lipides",
    description:
      "Calculez vos macronutriments quotidiens (protéines, glucides, lipides) pour la perte de poids, le maintien ou la prise de muscle. À partir de votre TDEE et de vos objectifs.",
    keywords: [
      "calculateur de macros",
      "calculateur de macronutriments",
      "calculateur de protéines pour la perte de poids",
      "calculer les macros",
      "combien de grammes de protéines par jour",
      "répartition des macronutriments",
      "calculateur IIFYM",
    ],
    ogTitle: "Calculateur de macronutriments – protéines, glucides et lipides",
    ogDescription:
      "Calculez vos macronutriments quotidiens (protéines, glucides, lipides) pour la perte de poids, le maintien ou la prise de muscle.",
  },
  hero: {
    title: "Calculateur de macronutriments",
    subtitle:
      "Obtenez vos cibles quotidiennes de protéines, de glucides et de lipides selon vos mensurations et votre objectif.",
  },
  intro:
    "Indiquez vos données et choisissez votre objectif pour calculer vos cibles quotidiennes de macronutriments. Que vous soyez en sèche, en maintien ou en prise de muscle, la bonne répartition fait la différence.",
  calculator: {
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    weight: "Poids",
    height: "Taille (cm)",
    activityLevel: "Niveau d'activité",
    activity: {
      sedentary: "Sédentaire",
      light: "Légèrement actif",
      moderate: "Modérément actif",
      active: "Actif",
      very_active: "Très actif",
    },
    goal: "Objectif",
    goals: {
      weight_loss: "Perte de poids",
      maintenance: "Maintien",
      muscle_gain: "Prise de muscle",
    },
    calculate: "Calculer les macronutriments",
    dailyTarget: "Votre cible quotidienne",
    cal: "cal",
    bmrTdee: "BMR : {bmr} · TDEE : {tdee}",
    protein: "Protéines",
    carbs: "Glucides",
    fat: "Lipides",
    grams: "{grams}g",
  },
  info: {
    title: "Comprendre les macronutriments",
    faqTitle: "Questions courantes",
  },
  faq: [
    {
      question: "Que sont les macronutriments ?",
      answer:
        "Les macronutriments (protéines, glucides, lipides) sont les trois principales sources de calories. Les protéines et les glucides apportent 4 calories par gramme, les lipides 9 calories par gramme. Le bon équilibre selon votre objectif détermine la composition corporelle.",
    },
    {
      question: "Quelle quantité de protéines manger par jour ?",
      answer:
        "Les personnes actives visent 1,6 à 2,4 g de protéines par kg de poids. Le haut de la fourchette (2,2 à 2,4 g/kg) est recommandé pour la prise de muscle ou pendant un déficit calorique, afin de préserver la masse musculaire.",
    },
    {
      question: "Faut-il compter les macronutriments ou seulement les calories ?",
      answer:
        "Suivre les macronutriments donne plus de contrôle sur la composition corporelle. Compter seulement les calories pendant une perte de poids peut faire perdre du muscle si les protéines sont trop basses — les macronutriments assurent que vous perdez de la graisse tout en préservant la masse maigre.",
    },
    {
      question: "Quelle répartition de macronutriments pour la perte de poids ?",
      answer:
        "Une répartition riche en protéines fonctionne le mieux : environ 35 à 40 % de protéines pour préserver le muscle, 25 % de lipides pour l'équilibre hormonal, et 30 à 35 % de glucides pour l'énergie. Atteindre la cible de protéines passe avant le reste.",
    },
    {
      question: "Combien de grammes de glucides par jour ?",
      answer:
        "En général 150 à 300 g pour un adulte actif. Visez le bas pendant une perte de poids, et plus haut pour les sports d'endurance ou la prise de muscle. Les besoins en glucides suivent le volume d'entraînement.",
    },
  ],
  cta: {
    title: "Associez vos macronutriments à un objectif de pas",
    description: "Associez vos objectifs de macronutriments à un objectif de pas quotidien pour de meilleurs résultats.",
  },
  howTo: {
    name: "Comment calculer vos macronutriments quotidiens",
    description:
      "Indiquez vos données et votre objectif pour obtenir des cibles quotidiennes de protéines, de glucides et de lipides en grammes et en calories.",
    steps: [
      {
        name: "Indiquez vos données",
        text: "Âge, sexe, poids, taille et niveau d'activité — les mêmes données que le calculateur TDEE.",
      },
      {
        name: "Choisissez votre objectif",
        text: "Sèche (perdre du poids), maintien ou prise de muscle. Chaque objectif utilise des ratios de macronutriments différents.",
      },
      {
        name: "Lisez vos cibles de macronutriments",
        text: "Le calculateur renvoie les grammes et les calories pour les protéines, les glucides et les lipides, plus les calories quotidiennes totales.",
      },
    ],
  },
};

export default fr;
