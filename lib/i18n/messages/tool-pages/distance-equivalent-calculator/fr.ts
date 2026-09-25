import type { DistanceEquivalentCalculatorMessages } from "./en";

const fr: DistanceEquivalentCalculatorMessages = {
  meta: {
    title: "Convertisseur de distance – km, miles, mètres, pas",
    description:
      "Convertissez une distance de course entre kilomètres, miles, mètres et yards. Voyez les pas équivalents, le temps estimé et les calories pour la marche, le jogging ou la course.",
    keywords: [
      "convertisseur de distance",
      "km en miles",
      "combien de pas dans un mile",
      "équivalence de distance",
      "mètres en miles",
      "calculateur distance course",
      "km en miles course à pied",
    ],
    ogTitle: "Convertisseur de distance – km, miles, mètres, pas",
    ogDescription:
      "Convertissez une distance de course entre kilomètres, miles, mètres et yards. Voyez les pas équivalents, le temps estimé et les calories pour la marche, le jogging ou la course.",
    ogImageAlt: "Convertisseur de distance",
  },
  hero: {
    title: "Convertisseur d'équivalences de distance",
    subtitle:
      "Convertissez une distance entre km, miles, mètres et yards — et voyez les pas, le temps et les calories équivalents.",
  },
  intro:
    "Saisissez une distance en kilomètres, miles, mètres ou yards et voyez tout de suite les équivalences. Nombre de pas estimé, temps pour la parcourir en marchant ou en courant, et calories approximatives.",
  calculator: {
    enterDistance: "Saisir une distance",
    placeholder: "5",
    units: {
      km: "km",
      miles: "milles",
      meters: "mètres",
      yards: "yards",
    },
    quick: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Semi-marathon",
      marathon: "Marathon",
    },
    equivalents: "Équivalences",
    kilometers: "Kilomètres",
    miles: "Miles",
    meters: "Mètres",
    yards: "Yards",
    feet: "Pieds",
    approxSteps: "Pas approx.",
    context: "En course à pied",
    activity: "Activité",
    speed: "Vitesse",
    time: "Temps",
    calories: "Calories",
    activities: {
      walking: "Marche",
      jogging: "Jogging",
      running: "Course",
    },
    speeds: {
      walking: "5 km/h",
      jogging: "8 km/h",
      running: "11 km/h",
    },
    calorieNote: "Calories estimées pour une personne de 70 kg",
  },
  faqTitle: "Questions sur les conversions de distance",
  faq: [
    {
      question: "Combien de km dans un mile ?",
      answer:
        "1 mile = 1,60934 km. À l'inverse, 1 km = 0,62137 mile. Une course de 5 miles fait environ 8,05 km, et un 10 km fait environ 6,21 miles.",
    },
    {
      question: "Combien de pas dans 1 mile ?",
      answer:
        "Environ 2 000 à 2 500 pas, selon votre taille et votre foulée. La moyenne tourne autour de 2 112 pas par mile (1 312 pas par km). Les personnes plus grandes, avec une foulée plus longue, font moins de pas.",
    },
    {
      question: "Combien de km dans un marathon ?",
      answer:
        "Un marathon fait exactement 42,195 km (26,219 miles). Un semi-marathon fait 21,0975 km (13,109 miles). Ces distances sont fixées par World Athletics.",
    },
    {
      question: "Combien de pas dans un 5 km ?",
      answer:
        "Environ 6 250 à 7 500 pas pour la plupart des gens. Avec une foulée moyenne de 1 312 pas/km, un 5 km représente environ 6 560 pas. Cela varie selon votre taille, votre foulée et le terrain.",
    },
    {
      question: "Combien de temps pour marcher 1 mile ?",
      answer:
        "À une allure de marche moyenne de 5 km/h, environ 12 minutes par mile. À 6 km/h, environ 10 minutes. En marche rapide, on peut descendre sous les 9 minutes.",
    },
  ],
  cta: {
    title: "Voyez exactement la distance parcourue aujourd'hui dans l'app Steps.",
    description: "Chaque pas, chaque kilomètre et chaque calorie brûlée — automatiquement.",
  },
  howTo: {
    name: "Comment convertir des unités de distance",
    description:
      "Saisissez une distance dans n'importe quelle unité (km, miles, mètres, yards, pas) pour obtenir toutes les équivalences, plus le temps de marche et les calories.",
    steps: [
      {
        name: "Choisissez l'unité de départ",
        text: "Kilomètres, miles, mètres, yards, pieds ou pas — n'importe quelle unité peut servir de point de départ.",
      },
      {
        name: "Saisissez la distance",
        text: "Tapez la distance.",
      },
      {
        name: "Lisez toutes les équivalences",
        text: "Le calculateur renvoie chaque unité, plus une estimation du temps de marche et des calories pour une personne de poids et d'allure moyens.",
      },
    ],
  },
};

export default fr;
