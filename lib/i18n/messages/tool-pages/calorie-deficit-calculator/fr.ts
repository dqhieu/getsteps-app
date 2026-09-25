import type { CalorieDeficitMessages } from "./en";

const fr: CalorieDeficitMessages = {
  meta: {
    title: "Calculateur de déficit calorique – Combien manger pour perdre du poids",
    description:
      "Calculez votre déficit calorique quotidien pour atteindre votre objectif de perte de poids en toute sécurité. Obtenez votre TDEE, vos calories cibles et les pas quotidiens recommandés.",
    keywords: [
      "calculateur déficit calorique",
      "combien de calories pour perdre du poids",
      "déficit calorique pour maigrir",
      "calculateur objectif calorique quotidien",
      "TDEE pour la perte de poids",
      "quelle taille de déficit calorique",
    ],
    ogTitle: "Calculateur de déficit calorique – Combien manger pour perdre du poids",
    ogDescription:
      "Calculez votre déficit calorique quotidien pour atteindre votre objectif de perte de poids en toute sécurité. Obtenez votre TDEE, vos calories cibles et les pas quotidiens recommandés.",
    ogImageAlt: "Calculateur de déficit calorique",
  },
  hero: {
    title: "Calculateur de déficit calorique",
    subtitle:
      "Découvrez exactement combien de calories manger par jour pour atteindre votre poids cible, de façon sûre et durable.",
  },
  intro:
    "Indiquez vos mensurations, votre poids cible et la durée pour calculer vos calories quotidiennes, le déficit nécessaire et le nombre de pas supplémentaires qui vous aideront à aller plus vite.",
  calculator: {
    details: "Vos informations",
    gender: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    years: "ans",
    currentWeight: "Poids actuel",
    height: "Taille",
    activity: "Niveau d'activité",
    activityLevels: {
      sedentary: "Sédentaire",
      light: "Légèrement actif",
      moderate: "Modérément actif",
      active: "Actif",
      very_active: "Très actif",
    },
    goalWeight: "Poids cible",
    timeframe: "Durée",
    weeks: "{count} sem.",
    plan: "Votre plan",
    atGoalTitle: "Vous avez déjà atteint votre objectif !",
    atGoalBody: "Concentrez-vous sur le maintien de votre poids avec une alimentation équilibrée et une activité régulière.",
    tdee: "Votre TDEE (maintenance)",
    deficit: "Déficit quotidien nécessaire",
    target: "Calories quotidiennes cibles",
    extraSteps: "Pas supplémentaires à ajouter",
    stepsHint: "pour brûler le déficit en marchant",
    calPerDay: "cal/jour",
    stepsPerDay: "pas/jour",
    unsafe:
      "Attention : ce déficit dépasse {max} cal/jour. Envisagez d'allonger votre durée pour un résultat plus sûr.",
    belowMin:
      "Attention : vos calories cibles passent sous le minimum recommandé de {min} cal/jour. Consultez un professionnel de santé.",
    safe: "C'est un déficit sûr et tenable.",
  },
  info: {
    title: "Qu'est-ce qu'un déficit calorique ?",
    body: "Un déficit calorique se produit lorsque vous consommez moins de calories que votre corps n'en brûle. Avec le temps, le corps puise dans les graisses stockées, ce qui entraîne une perte de poids. L'essentiel est de trouver le bon déficit — assez grand pour voir des résultats, mais pas au point de devenir intenable ou malsain.",
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "Quelle doit être la taille de mon déficit calorique ?",
      answer:
        "Un déficit de 500 à 750 calories par jour est en général tenable et entraîne environ 0,5 à 0,75 kg de perte de graisse par semaine. Les déficits au-dessus de 1 000 cal/jour ne sont pas recommandés — ils peuvent provoquer une perte musculaire, des carences et sont difficiles à tenir dans la durée.",
    },
    {
      question: "Combien de temps faut-il pour perdre 1 kg ?",
      answer:
        "Comme 1 kg de graisse contient environ 7 700 calories, un déficit de 500 cal/jour permet de perdre 1 kg en environ 15 jours. À 1 000 cal/jour, comptez environ 8 jours. Les résultats réels varient selon la rétention d'eau, la prise de muscle et l'adaptation métabolique.",
    },
    {
      question: "Qu'est-ce que le TDEE ?",
      answer:
        "TDEE signifie dépense énergétique journalière totale — le nombre total de calories que votre corps brûle par jour, y compris le métabolisme de base (BMR) et toute l'activité physique. C'est votre niveau de « maintenance » : manger à hauteur du TDEE n'entraîne pas de changement de poids.",
    },
    {
      question: "Puis-je perdre du poids uniquement en marchant ?",
      answer:
        "Oui ! Ajouter 10 000 pas supplémentaires par jour brûle environ 400 calories de plus, ce qui crée à lui seul un déficit utile dans la durée. La marche est à faible impact, tenable, et se combine très bien avec une réduction alimentaire modeste.",
    },
    {
      question: "Est-il sûr de manger moins de 1 200 calories ?",
      answer:
        "En général, non. Des apports très bas (sous 1 200 pour les femmes, sous 1 500 pour les hommes) peuvent entraîner une perte musculaire, des carences, un dérèglement hormonal et un ralentissement du métabolisme. Si votre cible tombe sous ces seuils, allongez la durée ou consultez un professionnel de santé.",
    },
  ],
  cta: {
    title: "Suivez votre parcours santé",
    description: "Ajoutez des pas chaque jour pour augmenter naturellement votre déficit calorique avec l'application Steps.",
  },
  howTo: {
    name: "Comment calculer un déficit calorique pour perdre du poids",
    description:
      "Indiquez votre TDEE (ou vos mensurations) et le rythme de perte souhaité par semaine pour obtenir une cible calorique quotidienne.",
    steps: [
      {
        name: "Indiquez votre TDEE ou vos mensurations",
        text: "Collez un TDEE que vous connaissez déjà, ou saisissez votre âge, votre sexe, votre poids, votre taille et votre niveau d'activité.",
      },
      {
        name: "Choisissez votre rythme de perte de poids",
        text: "0,25 à 1 kg par semaine est la fourchette tenable. Au-delà, le risque de perte musculaire augmente.",
      },
      {
        name: "Lisez votre cible calorique quotidienne",
        text: "Le calculateur affiche la cible calorique quotidienne et la taille du déficit par rapport à la maintenance.",
      },
    ],
  },
};

export default fr;
