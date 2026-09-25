import type { TdeeCalculatorMessages } from "./en";

const fr: TdeeCalculatorMessages = {
  meta: {
    title: "Calculateur TDEE – dépense énergétique quotidienne totale et besoins en calories",
    description:
      "Calculez votre dépense énergétique quotidienne totale (TDEE) et votre métabolisme de base (BMR). Trouvez vos besoins caloriques pour la perte de poids, le maintien ou la prise de muscle.",
    keywords: [
      "calculateur TDEE",
      "calculateur de dépense énergétique quotidienne totale",
      "calculateur de calories",
      "calculateur BMR",
      "combien de calories dois-je manger",
      "calculateur de calories de maintien",
      "besoins caloriques quotidiens",
    ],
    ogTitle: "Calculateur TDEE – dépense énergétique quotidienne totale et besoins en calories",
    ogDescription:
      "Calculez votre dépense énergétique quotidienne totale (TDEE) et votre métabolisme de base (BMR). Trouvez vos besoins caloriques pour la perte de poids, le maintien ou la prise de muscle.",
  },
  hero: {
    title: "Calculateur TDEE",
    subtitle: "Calculez combien de calories vous brûlez par jour selon vos mensurations et votre niveau d'activité.",
  },
  intro:
    "Indiquez votre sexe, votre âge, votre poids, votre taille et votre niveau d'activité pour calculer votre dépense énergétique quotidienne totale (TDEE) — le nombre de calories que votre corps brûle par jour. Utilisez-le pour fixer la bonne cible calorique selon vos objectifs.",
  calculator: {
    details: "Vos données",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    years: "ans",
    weight: "Poids",
    height: "Taille",
    activityLevel: "Niveau d'activité",
    activity: {
      sedentary: "Sédentaire",
      light: "Légèrement actif",
      moderate: "Modérément actif",
      active: "Actif",
      very_active: "Très actif",
    },
    calculate: "Calculer le TDEE",
    results: "Vos résultats",
    bmr: "BMR",
    bmrUnit: "cal/jour au repos",
    tdee: "TDEE",
    tdeeUnit: "cal/jour au total",
    calorieGoals: "Objectifs caloriques",
    maintenanceBadge: "Maintien",
    belowMinimum: "Sous le minimum",
    cal: "cal",
    goals: {
      aggressive_loss: { label: "Perte agressive", weekly: "-1 kg / semaine" },
      moderate_loss: { label: "Perte modérée", weekly: "-0.5 kg / semaine" },
      mild_loss: { label: "Perte légère", weekly: "-0.25 kg / semaine" },
      maintenance: { label: "Maintien", weekly: "0 kg / semaine" },
      mild_gain: { label: "Prise légère", weekly: "+0.25 kg / semaine" },
      muscle_gain: { label: "Prise de muscle", weekly: "+0.5 kg / semaine" },
    },
  },
  faqTitle: "FAQ TDEE et calories",
  faq: [
    {
      question: "Qu'est-ce que le TDEE ?",
      answer:
        "TDEE signifie dépense énergétique quotidienne totale — le nombre total de calories que votre corps brûle en une journée. Il inclut le métabolisme de base (calories brûlées au repos), l'énergie utilisée pendant l'activité physique et l'effet thermique des aliments (calories brûlées pour digérer). Le TDEE est le chiffre le plus important pour fixer des cibles caloriques de perte de poids, de maintien ou de prise de muscle.",
    },
    {
      question: "Le TDEE est-il précis ?",
      answer:
        "Les calculateurs de TDEE qui utilisent l'équation de Mifflin-St Jeor sont en général précis à 10–15 % près pour la plupart des gens. La variation individuelle liée à la génétique, à la masse musculaire, aux hormones et à l'adaptation métabolique peut déplacer la valeur réelle. Partez du résultat, suivez votre poids pendant 2 à 3 semaines, puis ajustez votre apport de 100 à 200 calories selon la progression réelle.",
    },
    {
      question: "Quelle est la différence entre BMR et TDEE ?",
      answer:
        "Le BMR (métabolisme de base) est le nombre de calories que votre corps brûle au repos complet — l'énergie minimale pour la respiration, la circulation et la réparation cellulaire. Le TDEE ajoute toute l'autre dépense au-dessus du BMR : activité physique, exercice et digestion. Le TDEE est toujours plus élevé que le BMR et c'est le chiffre à utiliser pour fixer des objectifs caloriques.",
    },
    {
      question: "Combien de calories sous le TDEE pour perdre du poids ?",
      answer:
        "Un déficit quotidien de 250 à 500 calories sous le TDEE est recommandé pour une perte durable de 0,25 à 0,5 kg par semaine. Des déficits plus grands peuvent entraîner une perte de muscle, des carences et une adaptation métabolique. Les femmes ne devraient en général pas descendre sous 1 200 calories/jour et les hommes sous 1 500 calories/jour sans suivi médical. Associer un déficit modéré à plus de pas quotidiens est souvent plus efficace que la restriction seule.",
    },
    {
      question: "Le TDEE change-t-il avec l'âge ?",
      answer:
        "Oui. Le TDEE baisse en général d'environ 1 à 2 % par décennie après 20 ans, surtout à cause de la perte de masse musculaire (sarcopénie). Le muscle est actif sur le plan métabolique et brûle plus de calories au repos que le tissu adipeux. La musculation et un mode de vie actif peuvent nettement ralentir cette baisse. Les changements hormonaux, en particulier à la ménopause, peuvent aussi réduire le TDEE chez les femmes.",
    },
  ],
  cta: {
    title: "Augmentez votre TDEE naturellement",
    description: "Augmentez votre TDEE naturellement en ajoutant des pas chaque jour. Suivez-les dans l'application Steps.",
  },
  howTo: {
    name: "Comment calculer votre dépense énergétique quotidienne totale",
    description:
      "Indiquez l'âge, le sexe, le poids, la taille et le niveau d'activité pour obtenir votre BMR et votre TDEE avec l'équation de Mifflin-St Jeor.",
    steps: [
      {
        name: "Indiquez l'âge, le sexe, le poids et la taille",
        text: "Données requises pour la formule de Mifflin-St Jeor, la plus précise pour la population générale.",
      },
      {
        name: "Choisissez votre niveau d'activité",
        text: "Sédentaire (travail de bureau), légèrement actif (exercice 1 à 3 jours/semaine), modérément actif (3 à 5 jours), très actif (6 à 7 jours) ou extra actif.",
      },
      {
        name: "Lisez le BMR et le TDEE",
        text: "Le calculateur renvoie votre métabolisme de base (calories pour rester en vie au repos) et votre dépense énergétique quotidienne totale (calories pour maintenir le poids).",
      },
    ],
  },
};

export default fr;
