import type { ConversionValuesMessages } from "./en";

const it: ConversionValuesMessages = {
  ui: {
    breadcrumb: "Percorso di navigazione",
    quickAnswer: "Risposta rapida",
    forContext: "Per contestualizzare:",
    distanceByHeightTitle: "La distanza dipende dalla tua altezza",
    distanceByHeightBody:
      "La tua falcata è circa 0,41 × la tua altezza: chi è più basso copre meno terreno a ogni passo.",
    heightColumn: "La tua altezza",
    strideColumn: "Falcata",
    milesColumn: "Miglia",
    kilometersColumn: "Chilometri",
    stepsColumn: "Passi",
    stepsRequiredTitle: "I passi necessari dipendono dalla tua altezza",
    stepsRequiredBody: "Chi è più basso fa più passi per coprire la stessa distanza.",
    caloriesTitle: "Calorie bruciate per peso e andatura",
    caloriesBody:
      "Le calorie crescono in modo lineare con il peso. Un'andatura più veloce ne brucia di più, ma camminando solo un po' di più.",
    weightColumn: "Il tuo peso",
    timeTitle: "Quanto tempo ci vuole?",
    timeBody:
      "Il tempo dipende dalla tua andatura. La maggior parte degli adulti cammina a un ritmo normale di circa 3 mph.",
    paceColumn: "Andatura",
    speedColumn: "Velocità",
    timeColumn: "Tempo",
    cm: "{value} cm",
    mi: "{value} mi",
    km: "{value} km",
    cal: "{value} cal",
    mph: "{value} mph",
    ctaTitle: "Tieni traccia dei tuoi numeri reali con Steps",
    ctaBody:
      "Queste conversioni usano delle medie. L'app Steps registra la tua lunghezza del passo {actual}, le calorie e il tempo di cammino, sincronizzati da iPhone e Apple Watch.",
    ctaActual: "reale",
    relatedTitle: "Conversioni correlate",
    faqTitle: "Domande frequenti",
    heights: [
      "147 cm (4′10″) — minuta",
      "163 cm (5′4″) — donna media",
      "175 cm (5′9″) — adulto medio",
      "183 cm (6′0″) — uomo medio",
      "193 cm (6′4″) — alto",
    ],
    weights: [
      "54 kg (120 lb)",
      "68 kg (150 lb)",
      "82 kg (180 lb)",
      "95 kg (210 lb)",
      "113 kg (250 lb)",
    ],
    paces: ["Lenta (2 mph)", "Normale (3,1 mph)", "Svelta (4 mph)"],
    duration: {
      minutes: "{count} min",
      hours: "{count} h",
      hoursMinutes: "{hours} h {minutes} min",
    },
  },
  plurals: {
    mile: { one: "1 miglio", other: "{count} miglia" },
    mileArticle: { one: "un miglio", other: "{count} miglia" },
    mileInSteps: { one: "{count} miglio in passi", other: "{count} miglia in passi" },
    mileToSteps: { one: "{count} miglio in passi", other: "{count} miglia in passi" },
    howManyStepsInMile: {
      one: "quanti passi in {count} miglio",
      other: "quanti passi in {count} miglia",
    },
    howManyStepsIsMile: {
      one: "quanti passi sono {count} miglio",
      other: "quanti passi sono {count} miglia",
    },
    mileWalkSteps: "{count} miglio camminata passi",
    howLongDoesMile: {
      one: "quanto ci vuole a camminare {count} miglio",
      other: "quanto ci vuole a camminare {count} miglia",
    },
    howLongToMile: {
      one: "quanto per camminare {count} miglio",
      other: "quanto per camminare {count} miglia",
    },
    walkingTimeMile: {
      one: "tempo di cammino {count} miglio",
      other: "tempo di cammino {count} miglia",
    },
    mileWalkingTime: {
      one: "{count} miglio tempo di cammino",
      other: "{count} miglia tempo di cammino",
    },
    walkMileTime: {
      one: "Camminare {count} miglio — tempo",
      other: "Camminare {count} miglia — tempo",
    },
  },
  familiar: {
    olympic: "un giro di pista olimpica da 400 m",
    centralPark: "la lunghezza di Central Park (New York)",
    fiveK: "una gara di 5 km",
    tenK: "una gara di 10 km",
    brooklyn: "l'attraversamento del ponte di Brooklyn (andata e ritorno)",
    half: "una mezza maratona",
    marathon: "una maratona",
  },
  foods: {
    banana: "una banana (105 cal)",
    apple: "una mela (95 cal)",
    bread: "una fetta di pane (80 cal)",
    coffee: "una tazza di caffè con panna (50 cal)",
    cookie: "un biscotto con gocce di cioccolato (160 cal)",
    juice: "un bicchiere di succo d'arancia (110 cal)",
  },
  stepsToKm: {
    meta: {
      title: "{steps} passi in km — quanti chilometri sono {steps} passi?",
      description:
        "{steps} passi ≈ {km} km ({miles} miglia) per un adulto medio. Vedi la distanza esatta in base alla tua altezza, le calorie bruciate e il tempo di cammino.",
      keywords: [
        "{steps} passi in km",
        "{steps} passi in chilometri",
        "quanti km sono {steps} passi",
        "{steps} passi distanza km",
      ],
      ogImageAlt: "{steps} passi in km",
    },
    h1: "{steps} passi in chilometri",
    subheading: "Quanto cammini quando arrivi a {steps} passi?",
    primary: "{km} km",
    secondary:
      "{miles} miglia · circa {time} a passo normale · {calories} calorie per una persona di 70 kg",
    intro:
      "Camminare {steps} passi copre circa {km} km ({miles} miglia) per un adulto medio, con una falcata tipica di 76 cm (2,5 ft). A un passo normale di 5 km/h ci vogliono circa {time} e si bruciano circa {calories} calorie per una persona di 70 kg (155 lb). La distanza esatta dipende dalla tua altezza: chi è più alto copre più terreno a ogni passo. Vedi la tabella sotto.",
    crumb: "Passi in km",
    crumbValue: "{steps} passi",
    related: "{steps} passi in km",
    relatedHub: "Quanti passi ci sono in un km?",
    relatedMiles: "{steps} passi in miglia",
    faq: [
      {
        question: "Quanti km sono {steps} passi?",
        answer:
          "{steps} passi sono circa {km} km ({miles} miglia) per un adulto medio con una falcata di 76 cm. Chi è più basso copre un po' meno, chi è più alto un po' di più: nella tabella delle altezze di questa pagina c'è il tuo numero.",
      },
      {
        question: "Quanto ci vuole a camminare {steps} passi?",
        answer:
          "A un passo normale di 5 km/h, {steps} passi richiedono circa {time}. A un passo svelto di 6,4 km/h circa {brisk}. A un passo lento di 3,2 km/h circa {slow}.",
      },
      {
        question: "Quante calorie bruciano {steps} passi?",
        answer:
          "{steps} passi bruciano circa {calories} calorie per una persona di 70 kg (155 lb) a passo normale. Chi pesa meno brucia meno calorie a passo; chi pesa di più ne brucia di più. Vedi la tabella delle calorie di questa pagina per il tuo peso.",
      },
      {
        question: "Come si calcola la conversione da passi a km?",
        answer:
          "Usiamo una falcata media da adulto di 76 cm (2,5 ft). Passi × lunghezza della falcata (cm) ÷ 100.000 = distanza in km. Quindi {steps} passi × 76 cm ÷ 100.000 ≈ {km} km. La tua falcata reale è circa 0,41 × la tua altezza.",
      },
    ],
  },
  stepsToMiles: {
    meta: {
      title: "{steps} passi in miglia — quante miglia sono {steps} passi?",
      description:
        "{steps} passi ≈ {miles} miglia ({km} km) per un adulto medio. Vedi la distanza esatta in base alla tua altezza, le calorie bruciate e il tempo di cammino.",
      keywords: [
        "{steps} passi in miglia",
        "{steps} passi in miles",
        "quante miglia sono {steps} passi",
        "{steps} passi",
        "distanza di {steps} passi",
        "calorie di {steps} passi",
      ],
      ogImageAlt: "{steps} passi in miglia",
    },
    h1: "{steps} passi in miglia",
    subheading: "Quanto cammini quando arrivi a {steps} passi?",
    primary: "{miles} miglia",
    secondary:
      "{km} km · circa {time} a passo normale · {calories} calorie per una persona di 155 lb (70 kg)",
    intro:
      "Camminare {steps} passi copre circa {miles} miglia ({km} km) per un adulto medio, con una falcata tipica di 76 cm (2,5 ft). A un passo normale di 3 mph ci vogliono circa {time} e si bruciano circa {calories} calorie per una persona di 155 lb (70 kg). La distanza esatta dipende dalla tua altezza: chi è più alto copre più terreno a ogni passo. Vedi la tabella sotto.",
    crumb: "Passi in miglia",
    crumbValue: "{steps} passi",
    related: "{steps} passi in miglia",
    relatedHub: "Quanti passi ci sono in un miglio?",
    relatedCalories: "{steps} passi in calorie",
    realWorld: {
      roughly: "{miles} miglia corrispondono più o meno alla distanza di {name}.",
      times: "È circa {factor}× la distanza di {name}.",
      shorter: "È circa {factor}× più corto di {name}.",
    },
    faq: [
      {
        question: "Quante miglia sono {steps} passi?",
        answer:
          "{steps} passi sono circa {miles} miglia ({km} km) per un adulto medio con una falcata di 76 cm. Chi è più basso copre un po' meno, chi è più alto un po' di più: nella tabella delle altezze di questa pagina c'è il tuo numero.",
      },
      {
        question: "Quanto ci vuole a camminare {steps} passi?",
        answer:
          "A un passo normale di 3 mph, {steps} passi richiedono circa {time}. A un passo svelto di 4 mph circa {brisk}. A un passo lento di 2 mph circa {slow}.",
      },
      {
        question: "Quante calorie bruciano {steps} passi?",
        answer:
          "{steps} passi bruciano circa {calories} calorie per una persona di 155 lb (70 kg) a passo normale. Chi pesa meno brucia meno calorie a passo; chi pesa di più ne brucia di più. Vedi la tabella delle calorie di questa pagina per il tuo peso.",
      },
      {
        question: "Come viene calcolata la conversione?",
        answer:
          "Usiamo una falcata media da adulto di 76 cm (2,5 ft), la cifra citata più spesso da CDC e Mayo Clinic. Passi × lunghezza della falcata = distanza percorsa. La tua falcata reale è circa 0,41 × la tua altezza: la tabella delle altezze di questa pagina mostra il calcolo per cinque altezze comuni.",
      },
    ],
    daily: {
      question: "{steps} passi sono un buon obiettivo giornaliero?",
      below:
        "{steps} passi sono sotto l'obiettivo giornaliero di 7.000–10.000 passi che la maggior parte delle autorità sanitarie consiglia agli adulti. Usalo come punto di partenza e aumenta gradualmente: anche 1.000 passi in più al giorno migliorano la salute cardiovascolare.",
      mid: "Sì: {steps} passi rientrano nell'intervallo che la maggior parte delle ricerche e il CDC indicano per gli adulti. Raggiungerlo con costanza è legato a un rischio cardiovascolare più basso e a una salute migliore nel tempo.",
      above:
        "{steps} passi sono sopra l'obiettivo standard di 10.000 al giorno. È un volume ottimo, associato a una buona forma cardiovascolare e al controllo del peso, ma anche i giorni di recupero con volumi più bassi sono sani.",
    },
  },
  milesToSteps: {
    meta: {
      title: "Quanti passi ci sono in {miles}? — {steps} passi",
      description:
        "{miles} ≈ {steps} passi per un adulto medio. Vedi il numero esatto di passi in base alla tua altezza, le calorie bruciate e il tempo di cammino.",
      ogImageAlt: "{miles} in passi",
    },
    h1: "Quanti passi ci sono in {milesArticle}?",
    subheading: "La risposta, per un adulto medio, e come cambia con la tua altezza.",
    primary: "{steps} passi",
    secondary:
      "{miles} · {km} km · circa {time} a passo normale · {calories} calorie per una persona di 155 lb (70 kg)",
    intro:
      "Camminare {miles} richiede circa {steps} passi per un adulto medio, con una falcata tipica di 76 cm (2,5 ft). A un passo normale di 3 mph ci vogliono circa {time} e si bruciano circa {calories} calorie per una persona di 155 lb (70 kg). Il numero esatto di passi dipende dalla tua altezza: chi è più basso ne fa di più per la stessa distanza. Vedi la tabella sotto.",
    crumb: "Miglia in passi",
    relatedHub: "Convertitore da passi a miglia",
    relatedCalories: "{steps} passi in calorie",
    faq: [
      {
        question: "Quanti passi sono {miles}?",
        answer:
          "{miles} sono circa {steps} passi per un adulto medio con una falcata di 76 cm. Chi è più basso fa più passi per coprire la stessa distanza: nella tabella delle altezze di questa pagina c'è il tuo numero.",
      },
      {
        question: "Quanto ci vuole a camminare {miles}?",
        answer:
          "A un passo normale di 3 mph, {miles} richiedono circa {time}. A un passo svelto di 4 mph circa {brisk}. A un passo lento di 2 mph circa {slow}.",
      },
      {
        question: "Quante calorie brucia {milesArticle}?",
        answer:
          "Camminare {miles} brucia circa {calories} calorie per una persona di 155 lb (70 kg) a passo normale. Chi pesa meno brucia meno; chi pesa di più brucia di più. Vedi la tabella delle calorie di questa pagina.",
      },
      {
        question: "Come si calcola la conversione da miglia a passi?",
        answer:
          "Moltiplichiamo la distanza in metri per 100 (cm/m) e dividiamo per una falcata media di 76 cm. Quindi {miles} = {meters} m × 100 ÷ 76 ≈ {steps} passi. La tua falcata reale è circa 0,41 × la tua altezza.",
      },
    ],
    exercise: {
      question: "Camminare {miles} al giorno è abbastanza esercizio?",
      yes: "Sì: camminare {miles} al giorno ({steps} passi) copre ampiamente i 150 minuti a settimana di attività aerobica moderata consigliati dal CDC, se cammini a passo normale o svelto.",
      start:
        "Camminare {miles} al giorno è un buon inizio. Ti mette in una fascia attiva e contribuisce ai 150 minuti settimanali di attività aerobica consigliati dal CDC, ma una seconda camminata al giorno darebbe un beneficio più netto.",
      below:
        "Camminare meno di {miles} al giorno è sotto il minimo del CDC. Aumenta gradualmente: anche 1.000 passi in più al giorno migliorano la salute cardiovascolare.",
    },
  },
  kmToSteps: {
    meta: {
      title: "Quanti passi ci sono in {km} km? — {steps} passi",
      description:
        "{km} km ≈ {steps} passi per un adulto medio. Vedi il numero esatto di passi in base alla tua altezza, le calorie bruciate e il tempo di cammino.",
      keywords: [
        "{km} km in passi",
        "{km} km a passi",
        "quanti passi in {km} km",
        "{km} chilometri in passi",
      ],
      ogImageAlt: "{km} km in passi",
    },
    h1: "Quanti passi ci sono in {km} km?",
    subheading: "La risposta, per un adulto medio, e come cambia con la tua altezza.",
    primary: "{steps} passi",
    secondary:
      "{km} km · circa {time} a passo normale · {calories} calorie per una persona di 70 kg",
    intro:
      "Camminare {km} km richiede circa {steps} passi per un adulto medio, con una falcata tipica di 76 cm (2,5 ft). A un passo normale di 5 km/h ci vogliono circa {time} e si bruciano circa {calories} calorie per una persona di 70 kg (155 lb). Il numero esatto di passi dipende dalla tua altezza: chi è più basso ne fa di più per la stessa distanza.",
    crumb: "Km in passi",
    crumbValue: "{km} km",
    related: "{km} km in passi",
    relatedHub: "Convertitore da passi a km",
    faq: [
      {
        question: "Quanti passi sono {km} km?",
        answer:
          "{km} km sono circa {steps} passi per un adulto medio con una falcata di 76 cm. Chi è più basso fa più passi per coprire la stessa distanza: nella tabella delle altezze di questa pagina c'è il tuo numero.",
      },
      {
        question: "Quanto ci vuole a camminare {km} km?",
        answer:
          "A un passo normale di 5 km/h, {km} km richiedono circa {time}. A un passo svelto di 6,4 km/h circa {brisk}. A un passo lento di 3,2 km/h circa {slow}.",
      },
      {
        question: "Quante calorie brucia camminare {km} km?",
        answer:
          "Camminare {km} km brucia circa {calories} calorie per una persona di 70 kg (155 lb) a passo normale. Vedi la tabella delle calorie di questa pagina per il tuo peso.",
      },
      {
        question: "Come si calcola la conversione da km a passi?",
        answer:
          "Moltiplichiamo la distanza per 100.000 (cm/km) e dividiamo per una falcata media di 76 cm. Quindi {km} km = {cm} cm ÷ 76 cm ≈ {steps} passi. La tua falcata reale è circa 0,41 × la tua altezza.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Calorie di {steps} passi — quante calorie bruciano {steps} passi?",
      description:
        "{steps} passi bruciano circa {calories} calorie per un adulto medio. Vedi il consumo in base al peso, all'andatura e al tempo di cammino.",
      keywords: [
        "calorie {steps} passi",
        "{steps} passi quante calorie",
        "calorie in {steps} passi",
        "calorie bruciate {steps} passi",
        "quante calorie sono {steps} passi",
      ],
      ogImageAlt: "calorie di {steps} passi",
    },
    h1: "Calorie di {steps} passi — quante calorie bruci?",
    subheading: "Calorie bruciate camminando {steps} passi, in base al peso e all'andatura.",
    primary: "≈ {calories} calorie",
    secondary:
      "Per una persona di 155 lb (70 kg) a passo normale · copre {miles} mi / {km} km · circa {time}",
    intro:
      "Camminare {steps} passi brucia circa {calories} calorie per un adulto medio (155 lb / 70 kg) a passo normale. È la distanza di {miles} miglia ({km} km) e richiede circa {time}. Il consumo calorico segue il peso: chi pesa meno brucia meno, chi pesa di più brucia di più.",
    crumb: "Passi in calorie",
    crumbValue: "{steps} passi",
    related: "calorie di {steps} passi",
    relatedMiles: "{steps} passi in miglia",
    relatedTool: "Calcolatore di calorie della camminata",
    realWorld: {
      roughly: "{calories} calorie corrispondono più o meno a {name}.",
      times: "{calories} calorie sono circa {factor}× {name}.",
      less: "{calories} calorie sono circa {factor}× meno di {name}.",
    },
    faq: [
      {
        question: "Quante calorie bruciano {steps} passi?",
        answer:
          "{steps} passi bruciano circa {calories} calorie per una persona di 155 lb (70 kg) che cammina a 3 mph. Chi pesa di più brucia di più. Vedi la tabella dei pesi di questa pagina.",
      },
      {
        question: "L'andatura cambia le calorie bruciate?",
        answer:
          "Un po'. Camminare a 4 mph (svelto) brucia circa il 30% di calorie in più al minuto rispetto a 2 mph (lento), ma copri anche la distanza prima, quindi il totale per un numero fisso di passi è più vicino di quanto pensi. Il totale va da circa {slowCal} (lento) a {briskCal} (svelto) per una persona di 150 lb.",
      },
      {
        question: "Quanto ci vuole a camminare {steps} passi?",
        answer:
          "Circa {time} a passo normale (3 mph). Andatura più veloce a 4 mph: {brisk}. Passo lento a 2 mph: {slow}.",
      },
      {
        question: "Quale formula c'è dietro questi numeri?",
        answer:
          "Usiamo la formula standard delle calorie basata sui MET: Calorie = MET × peso (kg) × tempo (ore). Per un passo normale, MET = 3,5. Ipotizziamo una falcata media di 76 cm per convertire i passi in distanza e poi la distanza in tempo di cammino.",
      },
    ],
    loss: {
      question: "{steps} passi bruciano abbastanza calorie per dimagrire?",
      yes: "{calories} calorie sono una quota utile di un deficit giornaliero: circa 0,5 lb di perdita di peso in due settimane se non compensi mangiando di più. Con anche un piccolo aggiustamento della dieta, può portare a un dimagrimento costante.",
      no: "{calories} calorie sono un contributo utile, ma da sole non fanno dimagrire. Punta ad almeno 7.500–10.000 passi al giorno insieme a un modesto deficit calorico dalla dieta.",
    },
  },
  stepsToTime: {
    meta: {
      title: "Quanto ci vuole a camminare {steps} passi?",
      description:
        "{steps} passi richiedono circa {time} a passo normale. Vedi il tempo a tre andature, la distanza e le calorie bruciate.",
      keywords: [
        "quanto ci vuole a camminare {steps} passi",
        "quanto per camminare {steps} passi",
        "{steps} passi in minuti",
        "tempo di cammino {steps} passi",
        "{steps} passi quanto tempo",
      ],
      ogImageAlt: "Tempo di cammino per {steps} passi",
    },
    h1: "Quanto ci vuole a camminare {steps} passi?",
    subheading: "Tempo di cammino, distanza e calorie per {steps} passi.",
    primary: "≈ {time}",
    secondary: "A un passo normale di 3 mph · copre {miles} mi / {km} km · {calories} calorie",
    intro:
      "Camminare {steps} passi richiede circa {time} a un passo normale di 3 mph (5 km/h). Un passo svelto di 4 mph lo riduce a {brisk}; una passeggiata lenta a 2 mph lo allunga a {slow}. Coprirai {miles} miglia ({km} km) e brucerai circa {calories} calorie.",
    crumb: "Tempo di cammino",
    crumbValue: "{steps} passi",
    related: "{steps} passi — tempo di cammino",
    relatedMiles: "{steps} passi in miglia",
    relatedTool: "Calcolatore del tempo di cammino",
    faq: [
      {
        question: "Quanto ci vuole a camminare {steps} passi?",
        answer:
          "Circa {time} a un passo normale di 3 mph. Passo svelto (4 mph): {brisk}. Passeggiata lenta (2 mph): {slow}.",
      },
      {
        question: "Il tempo di cammino cambia con la mia altezza?",
        answer:
          "Il tempo resta più o meno lo stesso: cambia il numero di passi. Chi è più alto ne fa meno per coprire la stessa distanza, ma la maggior parte delle persone cammina a una cadenza simile (circa 100 passi al minuto). Il tempo dipende quindi soprattutto dall'andatura, non dall'altezza.",
      },
      {
        question: "Quanto sono lunghi {steps} passi?",
        answer: "{steps} passi coprono circa {miles} miglia ({km} km) per un adulto medio.",
      },
      {
        question: "Come si calcola il tempo di cammino?",
        answer:
          "Tempo = distanza ÷ andatura. Calcoliamo la distanza dal numero di passi con una falcata media di 76 cm, poi dividiamo per la velocità. Il passo normale (3 mph / 5 km/h) è il valore predefinito: la tabella di questa pagina mostra tutte e tre le andature.",
      },
    ],
    spread: {
      question: "Posso distribuire {steps} passi durante la giornata?",
      high: "Certo: la maggior parte di chi arriva a {steps} passi al giorno li accumula tra camminate, commissioni e movimento quotidiano. Tre camminate da 15 minuti più l'attività normale di solito bastano.",
      low: "Sì: anche una sola camminata di 20-30 minuti più l'attività quotidiana (fino alla macchina, in ufficio e così via) ti porta di solito a {steps} passi senza una lunga camminata dedicata.",
    },
  },
  milesToTime: {
    meta: {
      title: "Quanto ci vuole a camminare {miles}?",
      description:
        "Camminare {miles} richiede circa {time} a un passo normale di 3 mph. Vedi il tempo a tre andature, più i passi e le calorie.",
      ogImageAlt: "tempo di cammino {miles}",
    },
    h1: "Quanto ci vuole a camminare {milesArticle}?",
    subheading: "Tempo di cammino, passi e calorie per {miles}.",
    primary: "≈ {time}",
    secondary: "A un passo normale di 3 mph · {steps} passi · {calories} calorie per una persona di 70 kg",
    intro:
      "Camminare {miles} richiede circa {time} a un passo normale di 3 mph (5 km/h). Scende a {brisk} a un passo svelto di 4 mph, o si allunga a {slow} a un ritmo tranquillo di 2 mph. Farai circa {steps} passi e brucerai circa {calories} calorie.",
    crumb: "Tempo di cammino",
    relatedTool: "Calcolatore del tempo di cammino",
    faq: [
      {
        question: "Quanto ci vuole a camminare {milesArticle}?",
        answer: "Circa {time} a un passo normale di 3 mph. Svelto a 4 mph: {brisk}. Lento a 2 mph: {slow}.",
      },
      {
        question: "Quanti passi sono {miles}?",
        answer:
          "{miles} sono circa {steps} passi per un adulto medio con una falcata di 76 cm. Chi è più basso ne fa di più. Vedi la tabella delle altezze di questa pagina.",
      },
      {
        question: "Quante calorie brucerò camminando {miles}?",
        answer:
          "Circa {calories} calorie per una persona di 70 kg (155 lb) a passo normale. Chi pesa di più brucia di più. Vedi la tabella dei pesi.",
      },
      {
        question: "Come si calcola il tempo di cammino?",
        answer:
          "Tempo = distanza ÷ andatura. {miles} = {km} km. A 5 km/h sono {time}. Usiamo le stesse tre andature che CDC e ACSM pubblicano per l'attività fisica moderata.",
      },
    ],
    exercise: {
      question: "Camminare {miles} al giorno è abbastanza esercizio?",
      yes: "Sì: camminare {miles} al giorno copre ampiamente i 150 minuti a settimana di attività aerobica moderata consigliati dal CDC, se cammini a passo normale o svelto.",
      start:
        "Camminare {miles} al giorno è un buon inizio. Insieme all'attività quotidiana ti mette in una fascia attiva, ma un'altra camminata darebbe un beneficio più netto.",
      below:
        "Meno di {miles} al giorno è sotto il minimo del CDC. Aumenta gradualmente: anche 0,5 miglia in più al giorno migliorano la salute cardiovascolare.",
    },
  },
};

export default it;
