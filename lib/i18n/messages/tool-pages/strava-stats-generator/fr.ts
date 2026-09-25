import type { StravaStatsGeneratorMessages } from "./en";

const fr: StravaStatsGeneratorMessages = {
  meta: {
    title: "Générateur de stats Strava – carte de séance gratuite | Steps",
    description:
      "Transformez votre sortie Strava en overlay transparent pour les Stories Instagram. Distance, temps, allure calculée, et un PNG transparent 1080x1080 gratuit.",
    keywords: [
      "générateur stats strava",
      "stats séance strava",
      "overlay stats strava",
      "png stats transparent",
      "overlay course instagram",
      "image stats entraînement",
      "partager stats course",
      "stats course story instagram",
    ],
    ogTitle: "Générateur de stats Strava – overlay transparent",
    ogDescription:
      "Transformez votre sortie Strava en overlay transparent pour les Stories Instagram. Distance, temps de mouvement et allure calculée, en PNG gratuit.",
    ogImageAlt: "Générateur de stats Strava – carte de séance gratuite",
  },
  hero: {
    title: "Générateur de stats Strava",
    subtitle:
      "Transformez la sortie que vous venez d'enregistrer en overlay transparent pour votre Story. Entrez distance et temps — on calcule l'allure et vous donne un PNG gratuit à poser sur votre photo.",
  },
  tool: {
    workout: "Votre séance",
    distance: "Distance",
    switchToMiles: "Passer en miles",
    switchToKilometers: "Passer en kilomètres",
    movingTime: "Temps de mouvement (MM:SS ou H:MM:SS)",
    durationPlaceholder: "52:30",
    paceHint: "L'allure est calculée à partir de la distance et du temps.",
    overlay: "Votre overlay",
    overlayAria: "Overlay de stats : {distance} {distanceUnit}, {time}, {pace} {paceUnit}",
    saved: "Enregistré !",
    download: "Télécharger le PNG transparent",
    downloadHint:
      "1080×1080, fond transparent — posez-le directement sur votre photo dans les Stories Instagram. Tout se passe dans le navigateur, rien n'est envoyé.",
    canvas: {
      distance: "Distance",
      pace: "Allure",
      time: "Temps",
    },
  },
  inlineCta: {
    headline: "Comptez les pas que Strava ignore",
    description:
      "Steps compte chaque pas depuis votre iPhone et votre Apple Watch, juste à côté de vos sorties — avec séries, tendances et un bilan de l'année gratuit.",
  },
  about: {
    title: "Pourquoi un overlay transparent ?",
    p1: "La photo, c'est le post. Vous l'avez prise au demi-tour ou sur la ligne, et c'est ça que les gens veulent voir — une carte pleine de chiffres la recouvre. Un PNG transparent garde la photo et pose dessus les trois chiffres qui comptent — distance, temps de mouvement et allure — à une taille lisible sur téléphone.",
    p2: "Ça marche pour une course, une marche ou un vélo, que vous ayez enregistré dans Strava, Garmin Connect, Apple Watch, Nike Run Club, ou sur un tapis sans suivi. Saisissez ce que vous avez fait : l'overlay est prêt en quelques secondes — sans compte, sans e-mail, sans filigrane.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Comment faire un overlay à partir de ma sortie Strava ?",
      answer:
        "Ouvrez l'activité dans Strava, relevez la distance et le temps de mouvement, puis saisissez les deux dans le formulaire. L'allure se calcule toute seule. Touchez Télécharger pour enregistrer un PNG transparent avec seulement ces trois stats.",
    },
    {
      question: "Comment poser l'overlay sur ma photo ?",
      answer:
        "Ouvrez les Stories Instagram et choisissez la photo. Touchez le bouton d'autocollants, prenez l'autocollant photo et sélectionnez le PNG téléchargé. Le fond est transparent, donc seul le texte se pose sur l'image — pincez pour redimensionner et glissez-le où il va le mieux. Le même geste marche dans TikTok, Snapchat et tout éditeur qui gère les calques.",
    },
    {
      question: "Cet outil est-il lié à Strava ?",
      answer:
        "Non. C'est un outil gratuit de Steps. Il n'est ni affilié à Strava, ni approuvé par Strava, ni lié à Strava. Il produit un visuel original, sans marque, à partir des chiffres que vous entrez — pas une copie d'un écran d'activité Strava.",
    },
    {
      question: "Comment l'allure est-elle calculée ?",
      answer:
        "L'allure, c'est le temps de mouvement divisé par la distance, en minutes et secondes par kilomètre ou par mile selon l'unité choisie. Un 10 km en 52:30 donne 5:15 au kilomètre. Vous ne saisissez jamais l'allure : elle suit toujours la distance et le temps.",
    },
    {
      question: "Quelle est la taille de l'image ?",
      answer:
        "1080 par 1080 pixels — un carré 1:1 qui passe en post de fil et se pose proprement sur une photo Stories ou TikTok, où vous pouvez pincer pour la redimensionner. Les stats sont centrées, donc elles se lisent où que vous placiez l'overlay.",
    },
    {
      question: "Pourquoi le fond est-il transparent ?",
      answer:
        "Pour que l'overlay se pose sur une photo que vous avez déjà, au lieu de la remplacer. Une carte pleine cache la photo de la sortie ; un PNG transparent laisse les stats par-dessus. Le texte a une ombre légère pour rester lisible sur la neige ou le ciel.",
    },
    {
      question: "Mes données de séance sont-elles envoyées quelque part ?",
      answer:
        "Non. L'overlay est dessiné dans votre navigateur avec un élément canvas et enregistré directement sur votre appareil. Rien de ce que vous tapez n'est envoyé, stocké ou journalisé.",
    },
    {
      question: "Strava affiche-t-il le nombre de pas ?",
      answer:
        "Non — Strava enregistre distance, temps et allure, mais pas les pas de la journée. Si vous voulez les pas à côté de vos sorties, l'app Steps lit les pas de votre iPhone et de votre Apple Watch et les montre à côté de vos séances.",
    },
  ],
  disclaimer:
    "Steps n'est ni affilié à Strava, ni approuvé par Strava, ni lié à Strava. Strava est une marque de Strava, Inc. Les overlays générés ici sont des visuels originaux construits à partir des chiffres que vous saisissez.",
  howTo: {
    name: "Comment créer un overlay transparent de stats",
    description:
      "Saisissez la distance et le temps de mouvement d'une sortie, téléchargez un PNG transparent et posez-le sur votre photo dans les Stories Instagram.",
    steps: [
      {
        name: "Entrez la distance et le temps de mouvement",
        text: "Saisissez la distance parcourue et basculez entre kilomètres et miles, puis entrez le temps de mouvement au format MM:SS ou H:MM:SS.",
      },
      {
        name: "Téléchargez le PNG transparent",
        text: "L'allure est calculée à partir de la distance et du temps. Touchez Télécharger pour enregistrer un PNG 1080x1080 sans fond — seulement les trois stats.",
      },
      {
        name: "Posez-le sur votre photo",
        text: "Dans les Stories Instagram, choisissez votre photo, touchez le bouton d'autocollants, prenez l'autocollant photo et sélectionnez le PNG. Seules les stats apparaissent — pincez pour redimensionner et glissez l'overlay.",
      },
    ],
  },
};

export default fr;
