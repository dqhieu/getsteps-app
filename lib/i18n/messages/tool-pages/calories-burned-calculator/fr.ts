import type { CaloriesBurnedMessages } from "./en";

const fr: CaloriesBurnedMessages = {
  meta: {
    title: "Calculateur de calories brûlées : plus de 50 activités, basé sur le MET",
    description:
      "Calculez les calories brûlées pour plus de 50 activités, de la marche au HIIT. Un adulte de 70 kg brûle 360 calories en courant 30 minutes, 129 en marchant. Calculateur MET gratuit.",
    keywords: [
      "calculateur calories brûlées",
      "calculateur dépense calorique",
      "calculateur calories exercice",
      "calculateur calories entraînement",
      "calculateur calories activité",
      "calculateur calories course",
      "calculateur calories vélo",
      "calculateur calories natation",
      "calculateur MET",
      "combien de calories ai-je brûlées",
    ],
    ogTitle: "Calculateur de calories brûlées : plus de 50 activités, basé sur le MET",
    ogDescription:
      "Calculez les calories brûlées sur plus de 50 activités avec les valeurs MET du Compendium of Physical Activities.",
    ogImageAlt: "Calculateur de calories brûlées",
  },
  hero: {
    title: "Calculateur de calories brûlées",
    subtitle:
      "Calories brûlées sur plus de 50 activités, de la marche lente à une séance de HIIT. Utilise les valeurs MET du Compendium of Physical Activities et distingue la dépense brute de ce que l'activité a vraiment ajouté.",
  },
  appCta: {
    headline: "Arrêtez d'estimer une séance à la fois",
    description:
      "Steps compte vos mouvements toute la journée en arrière-plan et en fait un total de calories en continu, sans choisir d'activité.",
  },
  stickyCta: "Suivez vos pas avec Steps",
  calculator: {
    pickActivity: "Choisissez votre activité",
    category: "Catégorie",
    activity: "Activité",
    activityOption: "{name} · {met} MET",
    yourWeight: "Votre poids",
    duration: "Durée",
    durationPreset: "{minutes} min",
    minutes: "min",
    calculate: "Calculer les calories brûlées",
    yourResults: "Vos résultats",
    caloriesBurned: "Calories brûlées",
    resultMeta: "{activity} · {duration} min · {met} MET",
    netBurn: "Dépense nette",
    aboveResting: "au-dessus du repos",
    perHour: "Par heure",
    calories: "calories",
    stepEquivalent: "Équivalent en pas",
    steps: "pas",
    bodyFat: "Graisse corporelle",
    grams: "grammes",
    walkingEquivalent: {
      one: "La même dépense demanderait environ {minutes} minute de marche modérée, soit à peu près {steps} pas.",
      other: "La même dépense demanderait environ {minutes} minutes de marche modérée, soit à peu près {steps} pas.",
    },
    comparison: "Mêmes {duration} minutes, activités différentes",
    cal: "{calories} cal",
    categories: {
      "Walking & Running": "Marche et course",
      Cycling: "Vélo",
      "Gym & Strength": "Salle et musculation",
      Sports: "Sports",
      Water: "Sports nautiques",
      "Outdoor & Winter": "Plein air et hiver",
      "Home & Daily": "Maison et quotidien",
    },
    activities: {
      "walking-slow": "Marche lente (3,2 km/h)",
      "walking-moderate": "Marche modérée (5 km/h)",
      "walking-brisk": "Marche rapide (6,4 km/h)",
      "walking-uphill": "Marche en montée (5 km/h, pente 5 %)",
      hiking: "Randonnée",
      stairs: "Montée d'escaliers",
      jogging: "Jogging (8 km/h)",
      "running-10": "Course (10 km/h)",
      "running-12": "Course (12 km/h)",
      "running-16": "Course (16 km/h)",
      "cycling-light": "Vélo, allure légère (16–19 km/h)",
      "cycling-moderate": "Vélo, allure modérée (19–22 km/h)",
      "cycling-vigorous": "Vélo, allure soutenue (22–25 km/h)",
      "cycling-stationary": "Vélo d'appartement, modéré",
      spinning: "Cours de spinning",
      "weight-light": "Musculation légère",
      "weight-vigorous": "Musculation intense",
      circuit: "Circuit training",
      hiit: "HIIT",
      elliptical: "Elliptique",
      "rowing-machine": "Rameur, modéré",
      yoga: "Yoga hatha",
      pilates: "Pilates",
      stretching: "Étirements",
      "jump-rope": "Corde à sauter, modérée",
      basketball: "Basketball, match",
      soccer: "Football, loisir",
      tennis: "Tennis en simple",
      badminton: "Badminton, loisir",
      golf: "Golf, en marchant avec les clubs",
      volleyball: "Volley, loisir",
      "boxing-bag": "Boxe, sac de frappe",
      "martial-arts": "Arts martiaux",
      "table-tennis": "Tennis de table",
      "swimming-leisure": "Natation tranquille",
      "swimming-freestyle": "Nage libre, modérée",
      "swimming-vigorous": "Nage libre, intense",
      "water-aerobics": "Aquagym",
      kayaking: "Kayak",
      surfing: "Surf",
      "skiing-downhill": "Ski alpin, modéré",
      "skiing-cross": "Ski de fond",
      snowboarding: "Snowboard",
      "ice-skating": "Patinage",
      "rock-climbing": "Escalade, montée",
      rucking: "Randonnée avec charge",
      cleaning: "Ménage, modéré",
      gardening: "Jardinage",
      mowing: "Tonte, tondeuse poussée",
      "shovelling-snow": "Déneigement",
      "grocery-shopping": "Courses alimentaires",
      childcare: "Jeu avec des enfants, intense",
      "desk-work": "Travail de bureau, assis",
    },
  },
  info: {
    title: "Comment nous calculons les calories brûlées",
    intro:
      "Chaque activité a une note MET, son coût énergétique en multiple du fait d'être assis. Ces notes viennent du Compendium of Physical Activities de 2011, la référence utilisée par les chercheurs pour cela.",
    formulaTitle: "La formule",
    perMinuteLabel: "Calories par minute",
    perMinute: "= MET × 3,5 × poids (kg) ÷ 200",
    netLabel: "Calories nettes",
    net: "= brut × (MET − 1) ÷ MET, en retirant l'énergie de repos que vous auriez dépensée de toute façon",
    oneMet: "1 MET = 3,5 ml O₂/kg/min, la consommation d'oxygène d'un corps au repos",
    exampleLabel: "Exemple :",
    example:
      "70 kg en course à 10 km/h, c'est 9,8 MET, donc 12,0 cal/min, 360 calories en 30 minutes, dont 323 nettes.",
    walkingNote:
      "Chaque résultat se convertit aussi en équivalent de marche, en minutes et en pas. Une course de 30 minutes à 10 km/h correspond à environ 84 minutes de marche modérée, soit environ 8 400 pas, un repère plus utile qu'un simple chiffre de calories si vous suivez votre journée en pas.",
  },
  faqTitle: "Questions fréquentes",
  faq: [
    {
      question: "Comment calcule-t-on les calories brûlées ?",
      answer:
        "Avec les valeurs MET. Un MET est votre métabolisme de repos, défini comme 3,5 ml d'oxygène par kilogramme et par minute. Une activité à 8 MET coûte huit fois cela. Le calcul : calories par minute = MET × 3,5 × poids en kg ÷ 200. Un adulte de 70 kg qui court à 10 km/h (9,8 MET) brûle environ 12 calories par minute, donc 360 en une demi-heure.",
    },
    {
      question: "Quelle est la différence entre calories brutes et nettes ?",
      answer:
        "Les calories brutes sont tout ce que vous avez brûlé pendant l'activité, y compris l'énergie de repos que vous auriez dépensée assis sur le canapé. Les calories nettes sont le coût supplémentaire de l'activité seule. Pour une course de 30 minutes, l'écart est d'environ 10 %, mais il est bien plus grand à faible intensité : une demi-heure de marche peut afficher 129 brutes et seulement 92 nettes. Si vous notez l'exercice face à un budget calorique, le net est le chiffre honnête, car votre TDEE comptait déjà la part de repos.",
    },
    {
      question: "Les estimations MET sont-elles précises ?",
      answer:
        "À environ 10 à 15 % près pour la plupart des gens, ce qui est à peu près le mieux possible sans chariot métabolique. Les valeurs MET sont des moyennes de population : elles ne voient pas votre efficacité, votre forme ni votre composition corporelle. Un coureur entraîné brûle moins qu'un débutant au même rythme, parce que son geste est plus économique. Prenez le résultat comme une bonne estimation, pas comme une mesure.",
    },
    {
      question: "Pourquoi mon tracker donne-t-il un autre chiffre ?",
      answer:
        "La plupart des montres estiment à partir de la fréquence cardiaque plutôt que des MET, et le cœur réagit aussi à la chaleur, à la caféine, au stress et à la déshydratation. Les trackers indiquent souvent les calories brutes alors que votre appli de calories attend le net. Les machines de salle sont encore moins fiables : elles supposent souvent un poids par défaut et surestiment la dépense de 15 à 25 %.",
    },
    {
      question: "Le poids change-t-il le nombre de calories que je brûle ?",
      answer:
        "Oui, nettement, et de façon proportionnelle. Le coût calorique suit la masse corporelle : une personne de 90 kg brûle environ 29 % de plus qu'une personne de 70 kg pour la même activité et la même durée. C'est pourquoi les personnes plus lourdes voient souvent une perte de poids plus rapide au début, et pourquoi la dépense diminue à mesure qu'elles s'allègent.",
    },
    {
      question: "Quelle activité brûle le plus de calories ?",
      answer:
        "Par minute, la course rapide, la corde à sauter et les arts martiaux sont en tête, autour de 11 à 14,5 MET. Mais le total est l'intensité multipliée par la durée, et c'est là que le classement change. La plupart des gens ne tiennent pas 14 MET plus de quelques minutes, alors qu'une marche à 5 MET peut durer une heure sans difficulté. Une heure de marche rapide bat dix minutes de sprint.",
    },
    {
      question: "Combien de calories la marche brûle-t-elle par rapport à la course ?",
      answer:
        "La course double à peu près le rythme par minute. Pour un adulte de 70 kg, la marche modérée (3,5 MET) brûle environ 4,3 calories par minute et la course à 10 km/h (9,8 MET) environ 12. L'écart se resserre dans une comparaison réaliste : 60 minutes de marche brûlent 258 calories, tandis que les 20 minutes de course que la plupart des débutants tiennent vraiment en brûlent 240.",
    },
  ],
  cta: {
    title: "Suivez chaque calorie automatiquement",
    description:
      "Téléchargez l'appli Steps pour compter vos pas et les calories brûlées en arrière-plan, toute la journée, sans rien noter.",
  },
  howTo: {
    name: "Comment calculer les calories brûlées",
    description:
      "Choisissez une activité, indiquez votre poids et la durée, et obtenez les calories brûlées avec les valeurs MET du Compendium of Physical Activities.",
    steps: [
      { name: "Choisissez une catégorie et une activité", text: "Prenez une catégorie comme Marche et course ou Sports, puis l'activité précise. Chaque option affiche sa note MET." },
      { name: "Indiquez votre poids", text: "La dépense calorique suit directement la masse corporelle : c'est la donnée qui compte le plus. Basculez entre kilogrammes et livres." },
      { name: "Réglez la durée", text: "Utilisez un préréglage de 15 à 90 minutes ou saisissez un chiffre exact." },
      { name: "Lisez les calories brutes et nettes", text: "Le calculateur affiche le total, les calories nettes au-dessus du repos, les calories par heure, un équivalent marche et pas, et un tableau qui compare d'autres activités sur la même durée." },
    ],
  },
};

export default fr;
