import type { PaceToSpeedConverterMessages } from "./en";

const fr: PaceToSpeedConverterMessages = {
  meta: {
    title: "Convertisseur allure et vitesse — min/km, min/mile, km/h, mph",
    description:
      "Convertissez instantanément l'allure de course en vitesse, et l'inverse. Passez de min/km à km/h, de min/mile à mph, et voyez vos temps sur 5 km et 10 km à n'importe quelle allure.",
    keywords: [
      "convertisseur allure vitesse",
      "min par km en km/h",
      "calculateur d'allure",
      "convertir allure en vitesse",
      "min/km en mph",
      "convertisseur de vitesse de course",
      "convertisseur d'allure",
    ],
    ogTitle: "Convertisseur allure et vitesse — min/km, min/mile, km/h, mph",
    ogDescription:
      "Convertissez instantanément l'allure de course en vitesse, et l'inverse. Passez de min/km à km/h, de min/mile à mph, et voyez vos temps sur 5 km et 10 km à n'importe quelle allure.",
    ogImageAlt: "Convertisseur allure et vitesse",
  },
  hero: {
    title: "Convertisseur allure et vitesse",
    subtitle: "Convertissez instantanément l'allure (min/km, min/mile) et la vitesse (km/h, mph).",
  },
  intro:
    "Saisissez une allure ou une vitesse : les autres unités se mettent à jour aussitôt. Voyez vos temps estimés sur 5 km et 10 km, et la distance parcourue en 30 ou 60 minutes.",
  calculator: {
    title: "Saisissez une valeur à convertir",
    paceKm: "Allure (min/km)",
    paceMile: "Allure (min/mile)",
    speedKmh: "Vitesse (km/h)",
    speedMph: "Vitesse (mph)",
    distanceTitle: "Distance parcourue",
    min30: "30 min",
    min60: "60 min",
    raceTitle: "Temps d'arrivée",
    referenceTitle: "Allures de référence",
    activityColumn: "Activité",
    kmhColumn: "km/h",
    minKmColumn: "min/km",
    minMiColumn: "min/mi",
    clickHint: "Cliquez sur une ligne pour charger cette allure",
    races: {
      "5k": "5 km",
      "10k": "10 km",
    },
    activities: {
      walking: "Marche",
      jogging: "Jogging",
      running: "Course",
      fast: "Course rapide",
      sprint: "Sprint",
    },
  },
  faqTitle: "FAQ allure et vitesse",
  faq: [
    {
      question: "Comment convertir des min/km en km/h ?",
      answer:
        "Divisez 60 par votre allure en min/km. Par exemple, 5:00/km donne 60 ÷ 5 = 12 km/h. Une allure plus lente de 6:00/km donne 60 ÷ 6 = 10 km/h.",
    },
    {
      question: "Quelle est une bonne allure en km/h ?",
      answer:
        "Jogging tranquille : 7–9 km/h ; course modérée : 9–12 km/h ; course rapide : 12–16 km/h ; allure de marathon d'élite : 18 km/h et plus. La plupart des coureurs loisir se situent entre 8 et 11 km/h.",
    },
    {
      question: "Comment convertir des min/km en min/mile ?",
      answer:
        "Multipliez votre allure en min/km par 1,60934 pour obtenir des min/mile. Par exemple, 5:00/km × 1,60934 = 8:03/mile. Ce convertisseur le fait automatiquement.",
    },
    {
      question: "Quelle vitesse pour un 5 km en 30 minutes ?",
      answer:
        "Un 5 km en 30 minutes demande une allure de 6:00/km, soit 10,0 km/h ou 6,2 mph. C'est une allure de course loisir solide.",
    },
    {
      question: "Quelle est la différence entre allure et vitesse ?",
      answer:
        "L'allure est le temps par unité de distance (par ex. min/km) : plus elle est basse, plus vous allez vite. La vitesse est la distance par unité de temps (par ex. km/h) : plus elle est haute, plus vous allez vite. C'est la même chose, avec des unités inversées.",
    },
  ],
  cta: {
    title: "Suivez vos courses et vos pas dans l'application Steps.",
    description: "Surveillez votre allure, votre distance et votre nombre de pas quotidien, au même endroit.",
  },
  howTo: {
    name: "Comment convertir l'allure en vitesse (ou la vitesse en allure)",
    description:
      "Saisissez une valeur — minutes par kilomètre, minutes par mile, km/h ou mph — et obtenez les autres.",
    steps: [
      {
        name: "Choisissez l'unité que vous connaissez",
        text: "Sélectionnez l'unité dont vous avez une valeur (par exemple min/km).",
      },
      {
        name: "Saisissez la valeur",
        text: "Indiquez l'allure ou la vitesse.",
      },
      {
        name: "Lisez les conversions",
        text: "Les quatre unités se mettent à jour ensemble : min/km, min/mile, km/h, mph.",
      },
    ],
  },
};

export default fr;
