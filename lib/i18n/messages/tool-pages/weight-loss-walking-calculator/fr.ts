import type { WeightLossWalkingMessages } from "./en";

const fr: WeightLossWalkingMessages = {
  meta: {
    title: "Calculateur de marche pour perdre du poids — Combien de pas pour maigrir",
    description:
      "Calculateur gratuit de pas pour perdre du poids. Trouvez combien de pas par jour il vous faut pour atteindre votre poids cible. Objectif de pas, plan de déficit et délai personnalisés.",
    keywords: [
      "calculateur combien de pas pour perdre du poids",
      "combien de pas pour maigrir",
      "calculateur de pas pour perdre du poids",
      "marche pour perdre du poids",
      "combien marcher pour maigrir",
      "pas pour perdre du poids",
      "calculateur marche perte de poids",
      "objectif de pas pour maigrir",
      "déficit calorique en marchant",
      "objectif de pas quotidien pour maigrir",
      "combien de pas par jour pour perdre du poids",
    ],
    ogTitle: "Calculateur de marche pour perdre du poids — Combien de pas pour maigrir",
    ogDescription:
      "Calculateur gratuit de pas pour perdre du poids. Trouvez votre objectif de pas quotidien et votre plan de déficit.",
    ogImageAlt: "Calculateur de marche pour perdre du poids",
  },
  hero: {
    title: "Calculateur de marche pour perdre du poids",
    subtitle:
      "Calculez exactement combien marcher pour atteindre votre objectif. Obtenez un objectif de pas quotidien et un délai personnalisés.",
  },
  calculator: {
    goal: "Votre objectif de perte de poids",
    switchUnit: "Passer en {unit}",
    currentWeight: "Poids actuel",
    targetWeight: "Poids cible",
    timeframe: "Durée",
    timeframes: {
      "1_month": "1 mois",
      "2_months": "2 mois",
      "3_months": "3 mois",
      "6_months": "6 mois",
      "1_year": "1 an",
    },
    walkingDays: "Jours de marche par semaine : {days}",
    days: { one: "{count} jour", other: "{count} jours" },
    safetyTitle: "Avertissement de sécurité",
    warningWeekly:
      "Ce plan demande de perdre plus de {max} kg par semaine. Envisagez d'allonger la durée pour un résultat plus sûr et plus tenable.",
    warningDeficit:
      "Ce plan demande un déficit quotidien de {deficit} kcal, au-dessus des {max} kcal recommandées. Envisagez une durée plus longue.",
    dailyRequirement: "Marche quotidienne nécessaire",
    stepsValue: "{count} pas",
    distancePerDay: "{km} km ({miles} miles) par jour de marche",
    walkingTime: "Temps de marche",
    hoursMinutes: "{hours}h {minutes}m",
    hoursOnly: "{hours}h",
    minutesOnly: "{minutes} min",
    dailyBurn: "Dépense calorique quotidienne",
    kcalValue: "{value} kcal",
    weeklyDistance: "Distance hebdomadaire",
    kmValue: "{value} km",
    totalToLose: "Total à perdre",
    weightKg: "{value} kg",
    weightLbs: "{value} lbs",
    progress: "Progression attendue",
    progressHint: "Votre poids prévu à chaque jalon (en supposant un effort régulier)",
    weekColumn: "Semaine",
    weightColumn: "Poids attendu",
    week: "Semaine {week}",
    notesTitle: "Points importants",
    notes: [
      "Ces calculs supposent que la marche est votre principale activité qui brûle des calories. Pour de meilleurs résultats, associez-la à une alimentation équilibrée.",
      "Une perte sûre est en général de 0,5 à 1 kg (1 à 2 lb) par semaine. Aller plus vite peut ne pas être tenable.",
      "La marche seule peut ne pas créer un déficit assez grand pour une perte importante. Envisagez de l'associer à des changements alimentaires.",
      "Consultez un professionnel de santé avant de commencer un programme de perte de poids, surtout si vous avez des problèmes de santé.",
    ],
    resultCta: {
      headline: "Atteignez votre objectif de pas — automatiquement",
      description:
        "Steps compte vos pas en arrière-plan, sans saisie manuelle, pour que vous atteigniez vraiment le chiffre ci-dessus et restiez sur la voie de votre poids cible.",
    },
  },
  info: {
    title: "Marcher pour perdre du poids",
    intro:
      "La marche est l'un des exercices les plus accessibles et les plus efficaces pour perdre du poids. Elle a un faible impact, ne demande aucun équipement et se pratique presque partout.",
    scienceTitle: "La science",
    scienceLeads: [
      "1 kg de graisse = environ 7 700 calories",
      "La marche brûle environ 60 à 80 kcal/km",
      "Perte sûre : 0,5 à 1 kg/semaine",
    ],
    science: [
      "{lead} - C'est l'énergie stockée dans la graisse corporelle",
      "{lead} - Varie selon le poids du corps",
      "{lead} - Rythme tenable pour un résultat durable",
    ],
    faqTitle: "Questions fréquentes",
  },
  faq: [
    {
      question: "De combien de pas ai-je besoin pour perdre du poids ?",
      answer:
        "Pour perdre du poids, la plupart des gens ont besoin de 12 000 à 15 000 pas par jour, avec une alimentation saine. Le chiffre exact dépend de votre poids actuel, de l'objectif et de la durée. Utilisez notre calculateur pour une recommandation personnalisée.",
    },
    {
      question: "Puis-je perdre du poids uniquement en marchant ?",
      answer:
        "Oui, mais c'est plus efficace avec une alimentation équilibrée. La marche crée un déficit calorique, et gérer les apports accélère les résultats. 10 000 pas brûlent environ 400 à 500 calories.",
    },
    {
      question: "Au bout de combien de temps voit-on des résultats ?",
      answer:
        "Avec une marche régulière et une alimentation adaptée, vous pouvez noter des changements en 2 à 3 semaines. Une perte visible arrive en général après 4 à 6 semaines. Une perte durable est progressive.",
    },
    {
      question: "Dois-je marcher tous les jours ?",
      answer:
        "Marcher 5 à 6 jours par semaine avec 1 à 2 jours de repos convient à la plupart des gens. Les jours de repos évitent l'épuisement et laissent le corps récupérer. Vous pouvez garder une activité légère ces jours-là.",
    },
    {
      question: "La marche rapide est-elle meilleure pour perdre du poids ?",
      answer:
        "Oui, la marche rapide (environ 6 km/h) brûle plus de calories par minute qu'une marche tranquille. La distance totale compte toutefois plus que la vitesse. Marchez à une allure que vous pouvez tenir.",
    },
    {
      question: "Combien de pas par jour pour perdre 1 livre par semaine ?",
      answer:
        "Pour perdre 1 livre (0,45 kg) par semaine, il faut un déficit quotidien de 500 calories. Environ 12 500 pas supplémentaires (au-delà de votre base) brûlent à peu près 500 calories pour une personne de 70 kg. Avec l'alimentation, moins de pas supplémentaires peuvent suffire.",
    },
    {
      question: "Combien de pas pour perdre 2 livres par semaine ?",
      answer:
        "Perdre 2 livres par semaine demande un déficit quotidien de 1 000 calories. La marche seule exigerait plus de 25 000 pas supplémentaires par jour, ce qui n'est pas réaliste. Associez plutôt 10 000 à 15 000 pas quotidiens à une réduction alimentaire de 500 calories.",
    },
  ],
  cta: {
    title: "Suivez votre parcours de perte de poids",
    description:
      "Téléchargez l'application Steps pour suivre vos pas, voir vos progrès et rester motivé.",
  },
  sticky: "Suivez vos pas avec Steps",
  howTo: {
    name: "Comment calculer la marche nécessaire pour perdre du poids",
    description:
      "Indiquez le poids actuel, le poids cible et le délai pour obtenir les pas, les miles et les minutes de marche par jour.",
    steps: [
      {
        name: "Indiquez le poids actuel et le poids cible",
        text: "La différence détermine combien de calories vous devez brûler en marchant.",
      },
      {
        name: "Choisissez un délai",
        text: "Choisissez un nombre de semaines réaliste. Un délai agressif demande plus de marche chaque jour.",
      },
      {
        name: "Lisez votre plan de marche quotidien",
        text: "Le calculateur renvoie les pas, les miles et les minutes de marche nécessaires chaque jour. Il avertit aussi si le délai exige un déficit intenable.",
      },
    ],
  },
};

export default fr;
