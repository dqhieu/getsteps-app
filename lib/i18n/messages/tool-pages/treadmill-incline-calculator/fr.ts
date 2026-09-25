import type { TreadmillInclineCalculatorMessages } from "./en";

const fr: TreadmillInclineCalculatorMessages = {
  meta: {
    title: "Calculateur d'inclinaison de tapis : allure et dénivelé",
    description:
      "Convertissez l'inclinaison du tapis en allure équivalente à plat, et voyez le dénivelé grimpé. 3 mph à 12 % équivaut à un jogging à 4,7 mph sur le plat. Calculateur gratuit fondé sur l'ACSM.",
    keywords: [
      "calculateur inclinaison tapis",
      "calculateur allure tapis",
      "calculateur dénivelé tapis",
      "calories marche en pente",
      "tableau conversion inclinaison tapis",
      "équivalent allure 12-3-30",
      "pente tapis en allure à plat",
      "dénivelé tapis de course",
    ],
    ogTitle: "Calculateur d'inclinaison de tapis : allure et dénivelé",
    ogDescription:
      "Transformez n'importe quelle inclinaison de tapis en allure à plat équivalente, et voyez le dénivelé grimpé. Calculateur gratuit avec les équations métaboliques de l'ACSM.",
    ogImageAlt: "Calculateur d'inclinaison de tapis",
  },
  hero: {
    title: "Calculateur d'inclinaison de tapis",
    subtitle:
      "Transformez n'importe quelle inclinaison en allure à plat qu'elle vaut vraiment, et voyez le dénivelé que vous avez grimpé. Les équations métaboliques de l'ACSM chiffrent la pente au lieu de l'estimer.",
  },
  calculator: {
    yourSetting: "Votre réglage de tapis",
    beltSpeed: "Vitesse du tapis",
    incline: "Inclinaison : {percent} %",
    duration: "Durée",
    minutes: "minutes",
    effortVsFlat: "Effort par rapport à la même vitesse à plat",
    flatBelt: "Tapis à plat : votre allure est votre effort",
    between:
      "Une pente de {grade} % à {speed} est plus dure que toute allure de marche à plat que vous tiendriez, et encore plus facile que le jogging à plat le plus lent : aucune vitesse à plat ne lui correspond.",
    sameEffort: "Même effort qu'en {gait} à plat à {speed} ({pace}).",
    gaitWalk: "marche",
    gaitJog: "jogging",
    kindWalk: "marche",
    kindJog: "jogging",
    betweenLabel: "entre une marche et un jogging",
    perKmPace: "{pace} par km",
    perMilePace: "{pace} par mile",
    yourPace: "Votre allure",
    perKm: "Par km",
    perMile: "Par mile",
    met: "MET",
    distance: "Distance",
    distanceValue: "{km} km / {mi} mi",
    elevationTitle: "Dénivelé grimpé",
    elevationSubtitle: "Pente de {grade} % pendant {minutes} minutes à {speed}.",
    verticalMetres: "Mètres verticaux",
    verticalFeet: "Pieds verticaux",
    storeys: "Étages",
    stairSteps: "Marches",
    briskWalk:
      "Pour rendre {speed} aussi exigeant qu'une marche vive à 6 km/h (3,7 mph) sur le plat, réglez l'inclinaison sur {grade}.",
    tableTitle: "Allure à plat équivalente selon l'inclinaison",
    tableSubtitle: "Vitesse du tapis maintenue à {speed}. Seule la pente change.",
    colIncline: "Inclinaison",
    colFeelsLike: "Équivaut à",
    colMet: "MET",
    colVsFlat: "vs plat",
    multiplier: "{value}x",
  },
  resultCta: {
    headline: "Sachez ce que vos marches valent vraiment",
    description:
      "Steps suit chaque marche en arrière-plan et la transforme en distance, dénivelé et calories réels, sans saisie manuelle.",
  },
  info: {
    title: "Comment nous calculons les équivalents d'inclinaison",
    intro:
      "Deux réglages de tapis sont équivalents lorsqu'ils coûtent le même oxygène. Nous estimons la consommation d'oxygène à partir de la vitesse et de la pente avec les équations métaboliques de l'ACSM, puis nous résolvons l'équation à plat à l'envers pour trouver l'allure de même coût.",
    formulaTitle: "Les formules",
    formulas: [
      { strong: "VO₂ marche", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "VO₂ course", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S est la vitesse en mètres par minute, G la pente en fraction (5 % = 0,05). La VO₂ est en ml/kg/min.",
      },
      {
        strong: "Multiplicateur d'effort",
        rest: "= 1 + 18G, qui découle directement de l'égalité des deux équations de marche. Il est valable à toute pente.",
      },
      { strong: "Dénivelé", rest: "= distance du tapis × G" },
      {
        strong: "Exemple :",
        rest: "4,8 km/h à 5 % de pente donne 5,3 MET, un multiplicateur de 1,9×, et 120 mètres verticaux en 30 minutes.",
      },
    ],
    note: "Les deux équations ACSM ne se rejoignent pas : la marche à plat plafonne vers 14,3 ml/kg/min et la course à plat commence près de 25,2. Une marche en pente modérée tombe entre les deux, là où aucune allure à plat ne correspond à l'effort. Le calculateur le dit, plutôt que d'extrapoler une équation hors de sa plage validée, et le multiplicateur d'effort reste parlant dans les deux cas.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Quelle allure à plat équivaut à marcher à 3 mph sur 12 % d'inclinaison ?",
      answer:
        "À peu près un jogging à 4,7 mph. Marcher à 3 mph sur une pente de 12 % coûte environ 29 ml/kg/min d'oxygène, soit autour de 8,3 MET. Aucune allure de marche durable sur le plat n'atteint ce coût, donc la comparaison honnête est un footing lent, pas une marche rapide. C'est pourquoi l'entraînement 12-3-30 paraît bien plus dur que sa vitesse ne le suggère.",
    },
    {
      question: "Comment convertir l'inclinaison du tapis en allure à plat ?",
      answer:
        "L'effort augmente presque linéairement : une pente multiplie le coût énergétique de la marche par (1 + 18 × la pente en décimal), donc 5 % est 1,9 fois plus dur que la même vitesse à plat. Transformer ce multiplicateur en vitesse à plat ne fonctionne que tant que la réponse reste dans la plage de marche, soit, aux allures courantes, des pentes sous environ 2 à 3,5 %. Au-delà, l'effort dépasse toute marche durable sans encore atteindre le jogging le plus lent, et aucune allure à plat ne correspond.",
    },
    {
      question: "Quel dénivelé gagnez-vous sur un tapis ?",
      answer:
        "Le gain vertical est la distance du tapis multipliée par la pente. Trente minutes à 5 km/h couvrent 2,5 km, et à 10 % cela fait 250 mètres verticaux, environ 820 pieds, ou à peu près 83 étages. Le tapis indique la pente comme élévation sur distance de tapis, ce que ce calcul suppose exactement.",
    },
    {
      question: "1 % d'inclinaison simule-t-il vraiment la course en extérieur ?",
      answer:
        "C'est une convention raisonnable, pas une loi précise. L'ajustement de 1 % vient d'une étude de 1996 de Jones et Doust, qui a trouvé qu'une pente de 1 % égalait le coût énergétique de la course en extérieur au-dessus d'environ 8 mph. Aux vitesses plus lentes où la plupart des gens marchent ou trottinent, la résistance de l'air est négligeable et un tapis à 0 % est déjà proche de l'effort extérieur.",
    },
    {
      question: "Marcher en pente vaut-il mieux que courir à plat ?",
      answer:
        "Pour un coût énergétique comparable à un impact bien plus faible, oui. Marcher à 5 km/h sur 12 % tourne autour de 8,5 MET, soit presque un jogging à plat à 8 km/h (8,6 MET), mais les forces de réaction au sol sont bien plus basses parce que les deux pieds ne quittent jamais le tapis en même temps. Le compromis : la marche en pente charge nettement plus les mollets et le tendon d'Achille.",
    },
    {
      question: "Pourquoi une petite inclinaison change-t-elle autant l'effort ?",
      answer:
        "Parce que soulever le corps à la verticale coûte cher par rapport au déplacement horizontal. Dans l'équation de marche ACSM, le terme vertical a un coefficient de 1,8 contre 0,1 pour le terme horizontal, donc chaque 1 % de pente ajoute environ 18 % au coût énergétique de la marche à la même vitesse. Cinq pour cent le doublent presque, et douze pour cent le triplent à peu près.",
    },
    {
      question: "Faut-il faire confiance à l'inclinaison affichée par le tapis ?",
      answer:
        "Tenez-la pour approximative. L'étalonnage de la bande dérive, et beaucoup d'appareils grand public affichent la pente commandée au moteur plutôt qu'une pente mesurée. La flexion du plateau sous charge réduit aussi un peu la pente effective. Les relations ici restent valables, mais les chiffres absolus héritent de l'erreur de la machine.",
    },
  ],
  cta: {
    title: "Suivez vos séances sur tapis",
    description:
      "Téléchargez l'application Steps pour suivre automatiquement vos marches, les calories brûlées et vos progrès.",
  },
  sticky: "Suivez vos pas avec Steps",
  howTo: {
    name: "Comment convertir l'inclinaison du tapis en allure à plat",
    description:
      "Saisissez la vitesse du tapis, l'inclinaison et la durée pour voir l'allure à plat de même effort, à quel point la pente durcit la séance, et le dénivelé grimpé.",
    steps: [
      {
        name: "Saisissez la vitesse du tapis",
        text: "Indiquez la vitesse affichée sur la console. Basculez entre km/h et mph : chaque résultat suit l'unité choisie.",
      },
      {
        name: "Réglez l'inclinaison",
        text: "Faites glisser le curseur ou touchez un préréglage de 0 % à 15 %. Les préréglages couvrent les pentes des tapis grand public, dont les 12 % de l'entraînement 12-3-30.",
      },
      {
        name: "Indiquez la durée de marche",
        text: "Durée en minutes. Elle ne change pas l'équivalence d'allure, mais elle fixe la distance et le dénivelé.",
      },
      {
        name: "Lisez l'allure à plat équivalente",
        text: "Le chiffre principal est l'allure à plat qui coûte le même oxygène. Au-dessus d'environ 3 % de pente, aucune allure de marche ne correspond : la comparaison passe au jogging et le dit.",
      },
      {
        name: "Vérifiez le dénivelé et le tableau",
        text: "Voyez la montée en mètres verticaux, en pieds, en étages et en marches, puis comparez chaque pente standard à votre vitesse dans le tableau d'équivalence.",
      },
    ],
  },
};

export default fr;
