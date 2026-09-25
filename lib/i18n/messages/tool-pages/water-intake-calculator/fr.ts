import type { WaterIntakeCalculatorMessages } from "./en";

const fr: WaterIntakeCalculatorMessages = {
  meta: {
    title: "Calculateur d'eau : combien boire par jour ?",
    description:
      "Calculez votre apport quotidien en eau selon votre poids, votre niveau d'activité et le climat. Des recommandations d'hydratation personnalisées.",
    keywords: [
      "calculateur apport en eau",
      "combien d'eau boire",
      "apport quotidien en eau",
      "calculateur hydratation",
      "eau par jour",
      "recommandation eau quotidienne",
    ],
    ogTitle: "Calculateur d'eau : combien boire par jour ?",
    ogDescription:
      "Calculez votre apport quotidien en eau selon votre poids, votre niveau d'activité et le climat. Des recommandations d'hydratation personnalisées.",
    ogImageAlt: "Calculateur d'apport en eau",
  },
  hero: {
    title: "Calculateur d'apport en eau",
    subtitle:
      "Découvrez exactement combien d'eau vous devez boire chaque jour selon votre poids et votre niveau d'activité.",
  },
  intro:
    "Utilisez ce calculateur gratuit pour trouver votre objectif d'hydratation quotidien. Saisissez votre poids et votre niveau d'activité pour une recommandation immédiate en litres, onces et tasses.",
  calculator: {
    yourDetails: "Vos informations",
    bodyWeight: "Poids",
    activityLevel: "Niveau d'activité",
    climate: "Climat",
    activities: {
      sedentary: "Sédentaire",
      moderate: "Modérément actif",
      active: "Actif",
      very_active: "Très actif",
    },
    climates: {
      temperate: "Tempéré",
      hot: "Chaud / humide",
    },
    dailyIntake: "Apport quotidien en eau",
    perDay: "L / jour",
    ozPerDay: "oz / jour",
    cupsPerDay: "tasses / jour",
    glassesPerDay: "verres / jour",
    tipLabel: "Conseil d'hydratation",
    tips: {
      sedentary:
        "Essayez de boire un verre d'eau toutes les 2 heures pour rester hydraté tout au long de la journée.",
      moderate:
        "Buvez avant, pendant et après chaque séance. Gardez une gourde réutilisable pour rester dans le rythme.",
      active:
        "Ajoutez 500 ml les jours d'entraînement et remplacez les électrolytes si vous transpirez beaucoup.",
      very_active:
        "Pesez-vous avant et après les séances intenses : buvez 500 ml pour chaque 0,5 kg perdu en sueur.",
    },
  },
  info: {
    title: "Pourquoi l'hydratation compte",
  },
  faq: [
    {
      question: "Combien d'eau faut-il boire par jour ?",
      answer:
        "La règle souvent citée des « 8 verres par jour » n'est qu'une approximation. Une méthode plus juste part du poids : environ 33 ml par kilogramme. Pour un adulte de 70 kg, cela fait environ 2,3 litres, mais le niveau d'activité et le climat peuvent faire monter nettement ce chiffre. Ce calculateur applique ces ajustements automatiquement.",
    },
    {
      question: "L'exercice change-t-il la quantité d'eau dont vous avez besoin ?",
      answer:
        "Oui, nettement. Pendant l'effort, vous perdez de l'eau par la sueur et la respiration. Une séance modérée peut ajouter 500 ml ou plus, et une séance intense ou un sport d'endurance peut demander 1 à 2 litres de plus. Buvez avant d'avoir soif : la soif est un signal tardif de déshydratation. Ce calculateur augmente votre cible de 20 à 60 % selon le niveau d'activité choisi.",
    },
    {
      question: "Le café et le thé comptent-ils dans l'apport en eau ?",
      answer:
        "En partie. Le café et le thé contribuent aux liquides totaux, mais la caféine a un léger effet diurétique qui en annule une partie. Une règle utile est de compter les boissons caféinées à environ 50 à 75 % de leur volume dans l'objectif du jour, et de boire un demi-verre d'eau plate en plus pour chaque tasse de café.",
    },
    {
      question: "Le climat change-t-il vos besoins d'hydratation ?",
      answer:
        "Un temps chaud ou humide augmente la transpiration même au repos et relève le besoin de base de 500 à 1 000 ml par jour. L'altitude augmente aussi les pertes par une respiration plus rapide. Choisir « Chaud / humide » dans le calculateur ajoute 500 ml au total du jour pour le refléter. Les jours très chauds, ou après une activité dehors dans la chaleur, buvez encore davantage.",
    },
  ],
  cta: {
    title: "Suivez votre parcours santé",
    description: "Suivez vos pas quotidiens et restez actif avec l'application Steps.",
  },
  howTo: {
    name: "Comment calculer l'apport quotidien en eau",
    description:
      "Saisissez le poids, le niveau d'activité et le climat pour estimer les besoins en eau du jour en litres ou en onces.",
    steps: [
      {
        name: "Saisissez votre poids",
        text: "Les besoins en eau suivent la taille du corps. Indiquez le poids en kilogrammes ou en livres.",
      },
      {
        name: "Choisissez votre niveau d'activité",
        text: "Ajoutez du liquide si vous faites de l'exercice, transpirez beaucoup ou vivez dans un climat chaud.",
      },
      {
        name: "Lisez votre objectif d'eau du jour",
        text: "Le calculateur donne l'eau du jour en litres et en onces, plus une répartition en verres.",
      },
    ],
  },
};

export default fr;
