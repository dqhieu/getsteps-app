import type { ConversionHubsMessages } from "./en";

const it: ConversionHubsMessages = {
  breadcrumbLabel: "Percorso di navigazione",
  openCalculator: "Apri il calcolatore →",
  units: {
    steps: "{count} passi",
    miles: "{count} miglia",
    mi: "{count} mi",
    km: "{count} km",
    cal: "{count} kcal",
    strideCm: "{stride} cm",
    detailSteps: "{count} passi →",
    detailArrow: "{count} →",
    detailKm: "{count} km →",
    detailMi: "{count} mi →",
  },
  mile: {
    one: "{count} miglio",
    other: "{count} miglia",
  },
  mileArrow: {
    one: "{count} miglio →",
    other: "{count} miglia →",
  },
  duration: {
    minutes: "{minutes} min",
    hours: "{hours} h",
    hoursMinutes: "{hours} h {minutes} min",
  },
  heights: [
    "1,47 m (147 cm) — minuta",
    "1,63 m (163 cm) — donna media",
    "1,75 m (175 cm) — adulto medio",
    "1,83 m (183 cm) — uomo medio",
    "1,93 m (193 cm) — alto",
  ],
  heightShort: {
    petite: "1,47 m",
    tall: "1,93 m",
  },
  paces: {
    slow: "Lento (2 mph)",
    normal: "Normale (3 mph)",
    brisk: "Svelto (4 mph)",
  },
  hub: {
    meta: {
      title: "Conversioni dei passi — miglia, chilometri e calorie",
      description:
        "Converti tra passi, miglia, chilometri e calorie. Risposte rapide, tabelle complete e un calcolatore in base alla tua altezza e al tuo peso.",
      keywords: [
        "conversione passi",
        "tabella conversione passi",
        "passi in miglia",
        "miglia in passi",
        "passi in calorie",
        "conversione distanza passi",
      ],
      ogTitle: "Conversioni dei passi",
      ogDescription:
        "Converti tra passi, miglia, chilometri e calorie. Risposte rapide e tabelle complete.",
      ogImageAlt: "Conversioni dei passi",
    },
    title: "Conversioni dei passi",
    subtitle:
      "Risposte rapide e precise per ogni conversione comune — miglia, chilometri, calorie e tempo di camminata.",
    seeAll: "Vedi tutte le {count} →",
    categories: {
      "steps-to-miles": {
        title: "Passi in miglia",
        description: "Converti un numero di passi in miglia percorse",
      },
      "miles-to-steps": {
        title: "Miglia in passi",
        description: "Converti le miglia nel numero equivalente di passi",
      },
      "steps-to-calories": {
        title: "Passi in calorie",
        description: "Stima le calorie bruciate per un numero di passi",
      },
      "steps-to-km": {
        title: "Passi in chilometri",
        description: "Converti un numero di passi in chilometri percorsi",
      },
      "km-to-steps": {
        title: "Chilometri in passi",
        description: "Converti i chilometri nel numero equivalente di passi",
      },
      "steps-to-time": {
        title: "Passi in tempo di camminata",
        description: "Quanto tempo serve per camminare un numero di passi",
      },
      "miles-to-time": {
        title: "Miglia in tempo di camminata",
        description: "Quanto tempo serve per camminare un numero di miglia",
      },
    },
    stepsToMilesTitle: "Popolare: passi in miglia",
    milesToStepsTitle: "Popolare: miglia in passi",
    stepsToCaloriesTitle: "Popolare: passi in calorie",
    personalTitle: "Vuoi numeri personalizzati?",
    personalBody:
      "Queste tabelle usano medie. I calcolatori ti permettono di inserire altezza, peso e ritmo per una risposta esatta.",
    distanceCta: "Calcolatore distanza dai passi",
    calorieCta: "Calcolatore calorie",
  },
  stepsToMiles: {
    meta: {
      title: "Convertire i passi in miglia — tabella e calcolatore",
      description:
        "Converti un numero di passi in miglia. {ten} passi ≈ {tenMiles} miglia · {five} passi ≈ {fiveMiles} miglia. Tabella completa da {from} a {to} passi.",
      keywords: [
        "passi in miglia",
        "convertire passi in miglia",
        "convertitore passi miglia",
        "tabella passi miglia",
        "conversione passo miglio",
        "quante miglia sono X passi",
      ],
      ogTitle: "Convertire i passi in miglia — tabella e calcolatore",
      ogDescription:
        "Converti un numero di passi in miglia. {ten} passi ≈ {tenMiles} miglia. Tabella da {from} → {to} passi.",
      ogImageAlt: "Passi in miglia",
    },
    crumb: "Passi in miglia",
    title: "Convertitore passi in miglia",
    intro:
      "Converti un numero di passi in miglia. Ogni riga porta a una pagina con calorie, tempo di camminata e una tabella della falcata in base all'altezza.",
    formulaTitle: "La formula rapida",
    formula: "miglia ≈ passi × {factor}",
    formulaNote:
      "Presuppone una falcata media di {stride} cm ({feet} piedi). Chi è più alto copre un po' di più a ogni passo; chi è più basso, un po' di meno. Per il tuo numero, fai clic su una riga della tabella.",
    tableTitle: "Tabella di conversione completa",
    columns: {
      steps: "Passi",
      miles: "Miglia",
      kilometers: "Chilometri",
      detail: "Pagina di dettaglio",
    },
    exactTitle: "Vuoi il numero esatto per la tua altezza?",
    exactBody:
      "Il nostro calcolatore di distanza dai passi calcola la risposta esatta per {your} lunghezza della falcata — inserisci solo la tua altezza.",
    your: "la tua",
    accuracyTitle: "Quanto è precisa la conversione da passi a miglia?",
    accuracyBody:
      "La falcata predefinita di {stride} cm / {feet} piedi è la cifra più citata da CDC, Mayo Clinic e Harvard Health per un adulto di statura media. Le falcate reali vanno da circa {short} cm (statura bassa) a {tall} cm (statura alta), quindi la distanza può variare di ±{low}–{high}%.",
    accuracyApp:
      "Per il numero più preciso, installa Steps sul tuo iPhone o Apple Watch: misura la lunghezza reale del passo dai tuoi allenamenti.",
  },
  milesToSteps: {
    meta: {
      title: "Quanti passi ci sono in un miglio? — {steps} passi (più tabella)",
      description:
        "{one} miglio ≈ {steps} passi per un adulto medio. Usa la tabella per convertire le miglia in passi, oppure apri il dettaglio per calorie e tempo di camminata in base alla tua altezza.",
      keywords: [
        "quanti passi in un miglio",
        "miglia in passi",
        "miglio in passi",
        "1 miglio in passi",
        "passi in un miglio",
        "convertire miglia in passi",
      ],
      ogTitle: "Quanti passi ci sono in un miglio? — {steps} passi",
      ogDescription:
        "{one} miglio ≈ {steps} passi per un adulto medio. Tabella completa e calcolo in base all'altezza.",
      ogImageAlt: "Miglia in passi",
    },
    crumb: "Miglia in passi",
    title: "Quanti passi ci sono in un miglio?",
    intro:
      "Risposta breve: circa {highlight} per un adulto medio. Il numero completo dipende dalla tua altezza — la tabella è più sotto.",
    quickLabel: "Risposta rapida",
    heroFigure: "≈ {steps}",
    heroNote:
      "Adulto medio, falcata di {stride} cm ({feet} piedi). Il tuo numero dipende dalla tua altezza.",
    heightTitle: "Passi per miglio in base all'altezza",
    heightIntro:
      "La falcata è circa {ratio} × la tua altezza. Chi è più basso fa più passi per la stessa distanza.",
    heightColumns: {
      height: "Altezza",
      stride: "Falcata",
      steps: "Passi per miglio",
    },
    formulaTitle: "La formula di conversione",
    formula: "passi ≈ miglia × {steps}",
    formulaNote:
      "Oppure: {one} miglio = {meters} m × {cm} cm ÷ falcata di {stride} cm ≈ {steps} passi.",
    tableTitle: "Tabella miglia → passi",
    columns: {
      miles: "Miglia",
      steps: "Passi (adulto medio)",
      detail: "Pagina di dettaglio",
    },
    exactTitle: "Vuoi il numero esatto per la tua altezza?",
    exactBody:
      "Usa il calcolatore di distanza dai passi — inserisci la tua altezza una volta e ottieni i tuoi passi per miglio.",
    whyTitle: `Perché non dire semplicemente «{rule} passi in un miglio»?`,
    whyBody:
      "La regola dei {rule} passi è una scorciatoia utile, ma lascia un divario reale. Con {stride} cm come falcata media — la cifra pubblicata da CDC e Mayo Clinic — si ottengono circa {perMile}, non {rule}. In una giornata di {daily} passi, la regola semplice perde circa un quarto di miglio.",
    perMile: "{steps} passi per miglio",
    connectionTitle: "Il legame con i {daily} passi",
    connectionBody:
      "L'obiettivo quotidiano standard di {daily} passi corrisponde a circa {distance} per un adulto medio. Per questo raggiungere {daily} passi richiede circa {minutes} minuti di camminata a ritmo normale, distribuiti nella giornata.",
    distance: "{miles} miglia ({km} km)",
    faq: [
      {
        question: "Quanti passi ci sono in un miglio?",
        answer:
          "Circa {steps} passi per un adulto medio con una falcata di {stride} cm ({feet} piedi). Il numero va da circa {tallSteps} passi per chi è {tallHeight} a {petiteSteps} passi per chi è {petiteHeight}.",
      },
      {
        question: "Quanti passi ci sono in 2 miglia?",
        answer:
          "Circa {steps} passi per un adulto medio. Vedi la tabella di questa pagina per le altre distanze.",
      },
      {
        question: "Quanti passi ci sono in 5 miglia?",
        answer:
          "Circa {steps} passi — all'incirca l'obiettivo quotidiano standard di {daily} passi.",
      },
      {
        question: "Il numero di passi in un miglio dipende dall'altezza?",
        answer:
          "Sì. La tua falcata è circa {ratio} × la tua altezza. Una persona di {petiteHeight} fa circa {petiteSteps} passi per miglio, mentre una di {tallHeight} ne fa circa {tallSteps} — una differenza del {percent}%.",
      },
    ],
  },
  stepsToKm: {
    meta: {
      title: "Convertire i passi in km — tabella di conversione e calcolatore",
      description:
        "Converti un numero di passi in chilometri. {steps} passi ≈ {km} km. Tabella completa da {from} a {to} passi.",
      keywords: [
        "convertire passi in km",
        "passi in chilometri",
        "conversione passi km",
        "passo in km",
        "tabella passi km",
        "quanti km sono X passi",
      ],
      ogTitle: "Convertire i passi in km",
      ogDescription:
        "Converti un numero di passi in km. {steps} passi ≈ {km} km. Tabella di conversione completa.",
      ogImageAlt: "Passi in chilometri",
    },
    crumb: "Passi in km",
    title: "Convertitore passi in chilometri",
    intro:
      "Converti un numero di passi in chilometri. Ogni riga porta a una pagina con calorie, tempo di camminata e una tabella della falcata in base all'altezza. Per una risposta esatta e personalizzata, usa il {calculator}.",
    calculatorLink: "calcolatore di distanza dai passi",
    formulaTitle: "La formula rapida",
    formula: "km ≈ passi × {factor}",
    formulaNote:
      "Oppure: passi × falcata di {stride} cm ÷ {perKm} = distanza in km. La falcata media di un adulto è di {stride} cm ({feet} piedi).",
    tableTitle: "Tabella di conversione completa",
    columns: {
      steps: "Passi",
      kilometers: "Chilometri",
      miles: "Miglia",
      detail: "Pagina di dettaglio",
    },
    exactTitle: "Vuoi il numero esatto per la tua altezza?",
    exactBody:
      "Il nostro calcolatore di distanza dai passi calcola la risposta esatta per la tua lunghezza della falcata — inserisci solo la tua altezza.",
  },
  kmToSteps: {
    meta: {
      title: "Quanti passi ci sono in un km? — {steps} passi (più tabella)",
      description:
        "{one} km ≈ {steps} passi per un adulto medio. Tabella completa da {from}–{to} km, più un calcolo in base all'altezza per il tuo numero esatto.",
      keywords: [
        "quanti passi in un km",
        "km in passi",
        "chilometri in passi",
        "1 km in passi",
        "5 km in passi",
        "convertire km in passi",
      ],
      ogTitle: "Quanti passi ci sono in un km? — {steps} passi",
      ogDescription: "{one} km ≈ {steps} passi per un adulto medio. Tabella di conversione completa.",
      ogImageAlt: "Km in passi",
    },
    crumb: "Km in passi",
    title: "Quanti passi ci sono in un chilometro?",
    intro:
      "Risposta breve: circa {highlight} per un adulto medio. Il numero completo dipende dalla tua altezza — vedi la tabella.",
    quickLabel: "Risposta rapida",
    heroFigure: "≈ {steps}",
    heroNote:
      "Adulto medio, falcata di {stride} cm ({feet} piedi). Il tuo numero dipende dalla tua altezza.",
    heightTitle: "Passi per km in base all'altezza",
    heightIntro:
      "La falcata è circa {ratio} × la tua altezza. Chi è più basso fa più passi per la stessa distanza.",
    heightColumns: {
      height: "Altezza",
      stride: "Falcata",
      steps: "Passi per km",
    },
    formulaTitle: "La formula di conversione",
    formula: "passi ≈ km × {steps}",
    formulaNote: "Oppure: {one} km = {cm} cm ÷ falcata di {stride} cm ≈ {steps} passi.",
    tableTitle: "Tabella km → passi",
    columns: {
      kilometers: "Chilometri",
      steps: "Passi (adulto medio)",
      detail: "Pagina di dettaglio",
    },
    exactTitle: "Vuoi il numero esatto per la tua altezza?",
    exactBody:
      "Usa il calcolatore di distanza dai passi — inserisci la tua altezza una volta e ottieni i tuoi passi per km.",
    faq: [
      {
        question: "Quanti passi ci sono in un chilometro?",
        answer:
          "Circa {steps} passi per un adulto medio con una falcata di {stride} cm. L'intervallo va da circa {tall} (persona alta) a {petite} (persona minuta).",
      },
      {
        question: "Quanti passi ci sono in 5 km?",
        answer: "Circa {steps} passi per un adulto medio — una tipica gara di 5 km.",
      },
      {
        question: "Quanti passi ci sono in 10 km?",
        answer: "Circa {steps} passi — oltre l'obiettivo quotidiano standard di {daily} passi.",
      },
    ],
  },
  stepsToCalories: {
    meta: {
      title: "Passi in calorie — quante calorie per passo?",
      description:
        "Converti un numero di passi in calorie bruciate. {steps} passi ≈ {calories} calorie. Tabella da {from} a {to} passi in base al tuo peso.",
      keywords: [
        "passi in calorie",
        "calorie per passo",
        "conversione passo calorie",
        "quante calorie sono i passi",
        "convertire passi in calorie",
      ],
      ogTitle: "Convertitore passi in calorie",
      ogDescription:
        "{steps} passi ≈ {calories} calorie. Tabella di conversione da {from}–{to} passi.",
      ogImageAlt: "Passi in calorie",
    },
    crumb: "Passi in calorie",
    title: "Convertitore passi in calorie",
    intro:
      "Converti un numero di passi in calorie bruciate, poi apri il dettaglio per peso, ritmo e tempo di camminata.",
    formulaTitle: "La formula rapida",
    formula: "calorie ≈ passi × {factor} × (peso in kg ÷ {weight})",
    formulaNote:
      "Circa {one} caloria ogni {per} passi per un adulto medio. Chi pesa di più brucia in proporzione di più.",
    tableTitle: "Tabella completa (adulto di {lb} lb / {kg} kg, ritmo normale)",
    columns: {
      steps: "Passi",
      calories: "Calorie",
      detail: "Pagina di dettaglio",
    },
    exactTitle: "Vuoi il consumo calorico personalizzato?",
    exactBody:
      "Usa il calcolatore passi → calorie e inserisci peso, età e sesso per un numero più preciso.",
  },
  stepsToTime: {
    meta: {
      title: "Quanto tempo per camminare X passi? — tabella",
      description:
        "Tempo di camminata per un numero di passi. {steps} passi ≈ {hours} h {mins} min a ritmo normale. Tabella da {from} → {to} passi su tre ritmi.",
      keywords: [
        "quanto tempo per camminare dei passi",
        "passi in tempo di camminata",
        "tempo di camminata per passo",
        "passi in minuti",
        "quanto tempo per camminare X passi",
      ],
      ogTitle: "Quanto tempo per camminare X passi?",
      ogDescription: "Tempo di camminata per un numero di passi. Tabella completa su tre ritmi.",
      ogImageAlt: "Passi in tempo di camminata",
    },
    crumb: "Tempo di camminata",
    title: "Quanto tempo ci vuole per camminare X passi?",
    intro:
      "Tempo di camminata per un numero di passi, su tre ritmi comuni. Fai clic su una riga per la pagina con calorie e falcata.",
    formulaTitle: "La formula rapida",
    formula: "minuti ≈ passi ÷ {cadence}",
    formulaNote:
      "La maggior parte degli adulti cammina a circa {cadence} passi al minuto a ritmo normale. Quindi {steps} passi ≈ {minutes} minuti ({hours} h {mins} min) di camminata. Un po' più veloce ({mph} mph) scende a {fastHours} h {fastMins} min.",
    tableTitle: "Tempo di camminata per numero di passi e ritmo",
    columns: {
      steps: "Passi",
      detail: "Dettaglio",
    },
    exactTitle: "Vuoi pianificare una camminata precisa?",
    exactBody:
      "Il calcolatore del tempo di camminata stima la durata di qualsiasi distanza o numero di passi, con orario di partenza e di arrivo.",
  },
  milesToTime: {
    meta: {
      title: "Quanto tempo per camminare X miglia? — in base al ritmo",
      description:
        "Tempo di camminata per una distanza in miglia. {one} miglio ≈ {oneMin} min, {three} miglia ≈ {threeHours} h, {five} miglia ≈ {fiveHours} h {fiveMins} min. Tabella su tre ritmi.",
      keywords: [
        "quanto tempo per camminare un miglio",
        "quanto tempo per camminare delle miglia",
        "tempo di camminata in miglia",
        "miglia in tempo di camminata",
        "quanto tempo per camminare 5 miglia",
        "quanto tempo per camminare 3 miglia",
      ],
      ogTitle: "Quanto tempo per camminare X miglia?",
      ogDescription: "Tempo di camminata per una distanza in miglia, su tre ritmi.",
      ogImageAlt: "Miglia in tempo di camminata",
    },
    crumb: "Miglia in tempo di camminata",
    title: "Quanto tempo ci vuole per camminare X miglia?",
    intro:
      "Tempo di camminata per una distanza, su tre ritmi comuni. Fai clic su una riga per la pagina di dettaglio.",
    formulaTitle: "La regola rapida",
    formula: "minuti ≈ miglia × {minutes}",
    formulaNote:
      "A un ritmo normale di {normal} mph. Chi cammina svelto ({brisk} mph) risparmia circa il {briskCut}%; chi cammina lento ({slow} mph) aggiunge il {slowAdd}%.",
    tableTitle: "Tempo di camminata per distanza e ritmo",
    columns: {
      distance: "Distanza",
      detail: "Dettaglio",
    },
    exactTitle: "Stai pianificando un percorso preciso?",
    exactBody:
      "Il calcolatore del tempo di camminata copre qualsiasi distanza, con orario di partenza e arrivo, pause e ritmo.",
    faq: [
      {
        question: "Quanto tempo ci vuole per camminare 1 miglio?",
        answer:
          "Circa {normalMin} minuti a un ritmo normale di {normalMph} mph. Ritmo svelto ({briskMph} mph): {briskMin} minuti. Ritmo lento ({slowMph} mph): {slowMin} minuti.",
      },
      {
        question: "Quanto tempo ci vuole per camminare 3 miglia?",
        answer:
          "Circa {hours} ora a ritmo normale. Svelto: {briskMin} minuti. Lento: {slowHours} ora {slowMins} minuti.",
      },
      {
        question: "Quanto tempo ci vuole per camminare 5 miglia?",
        answer:
          "Circa {hours} ora {mins} minuti a ritmo normale. Svelto: {briskHours} ora {briskMins} minuti. Lento: {slowHours} ore {slowMins} minuti.",
      },
    ],
  },
};

export default it;
