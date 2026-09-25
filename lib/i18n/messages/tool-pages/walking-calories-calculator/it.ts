import type { WalkingCaloriesMessages } from "./en";

const it: WalkingCaloriesMessages = {
  meta: {
    title: "Calcolatore calorie camminata: gratis per peso e ritmo",
    description:
      "Calorie camminando: un adulto di 70 kg brucia ~150 kcal in 30 min a 5,6 km/h. Calcolatore gratis: stima immediata per peso, velocità, tempo, distanza o passi.",
    keywords: [
      "calcolatore calorie camminata",
      "calorie bruciate camminando",
      "valore MET camminata",
      "MET camminata 5 km/h",
      "valore MET camminare 5 km/h",
      "valore MET camminata veloce",
      "valore MET andatura media",
      "valore MET andatura moderata",
      "consumo calorie camminata",
      "calorie camminata per km",
      "valore MET camminata 4 km/h",
      "valore MET camminata 4,5 km/h",
      "valore MET camminata 6 km/h",
      "formula calcolatore calorie camminata MET",
    ],
    ogTitle: "Calcolatore calorie camminata: gratis per peso e ritmo",
    ogDescription:
      "Un adulto di 70 kg brucia ~150 kcal in 30 min a ritmo moderato. Calcolatore gratis: risultato immediato per peso, velocità, tempo, distanza o passi.",
    ogImageAlt: "Calcolatore calorie camminata",
  },
  hero: {
    title: "Calcolatore calorie camminata e valori MET",
    subtitle:
      "Calcola le calorie bruciate camminando con i valori MET (equivalente metabolico) per ogni velocità: dalla passeggiata lenta a 2 km/h alla camminata atletica oltre 7 km/h. Con tabella MET completa.",
  },
  appCta: {
    headline: "Tieni traccia delle calorie che bruci davvero",
    description:
      "Steps conta ogni passo in background e lo trasforma nelle calorie che bruci ogni giorno, senza inserirle a mano.",
  },
  stickyCta: "Segui i tuoi passi con Steps",
  calculator: {
    calculateBy: "Calcola per",
    distance: "Distanza",
    time: "Tempo",
    weight: "Peso",
    duration: "Durata",
    minutes: "minuti",
    miles: "miglia",
    walkingSpeed: "Velocità di cammino",
    speeds: {
      slow: { label: "Lenta", description: "3,2 km/h (2 mph)" },
      normal: { label: "Normale", description: "5 km/h (3,1 mph)" },
      brisk: { label: "Sostenuta", description: "6,4 km/h (4 mph)" },
      fast: { label: "Veloce", description: "7,2 km/h (4,5 mph)" },
    },
    caloriesBurned: "Calorie bruciate",
    walkingTime: "Tempo di cammino",
    distanceResult: "Distanza",
    steps: "Passi",
    fatBurned: "Grasso bruciato",
    metValue: "Valore MET",
    metTableTitle: "Velocità di cammino e valori MET",
    metTableIntro:
      "Il MET (Metabolic Equivalent of Task) rappresenta il costo energetico di un'attività. Un MET più alto significa più calorie bruciate.",
    columns: {
      speed: "Velocità",
      kmh: "km/h",
      mph: "mph",
      met: "MET",
      description: "Descrizione",
    },
    paceDescriptions: {
      slow: "Passeggiata tranquilla",
      normal: "Andatura media",
      brisk: "Camminata veloce",
      fast: "Camminata sportiva",
    },
  },
  info: {
    title: "Come calcoliamo le calorie della camminata",
    intro:
      "Usiamo il metodo MET (Metabolic Equivalent of Task) per calcolare le calorie bruciate. Questo approccio, basato sulla ricerca, tiene conto del tuo peso, della durata e dell'intensità.",
    formulaTitle: "La formula",
    formula: "Calorie = MET × peso (kg) × durata (ore)",
    metLabel: "MET:",
    metText: "Metabolic Equivalent of Task: il dispendio energetico rispetto al riposo",
    exampleLabel: "Esempio:",
    example:
      "Una persona di 70 kg che cammina a ritmo normale (MET 3,5) per 1 ora brucia: 3,5 × 70 × 1 = 245 calorie",
    faqTitle: "Domande frequenti",
  },
  faq: [
    {
      question: "Quante calorie brucia 1 miglio a piedi?",
      answer:
        "Camminare 1 miglio brucia circa 80-100 calorie per la maggior parte delle persone. Il valore esatto dipende dal tuo peso e dalla velocità. Chi pesa di più brucia più calorie per miglio.",
    },
    {
      question: "Quante calorie bruciano 30 minuti di camminata?",
      answer:
        "30 minuti a ritmo normale bruciano circa 100-150 calorie per la maggior parte degli adulti. Una camminata veloce può arrivare a 150-200 calorie. Usa il calcolatore qui sopra per una stima personale.",
    },
    {
      question: "Quante calorie bruciano 40 minuti di camminata?",
      answer:
        "40 minuti bruciano circa 140-200 calorie a ritmo moderato (4,8 km/h) e 200-280 a ritmo sostenuto (5,6-6,4 km/h) per un adulto di 70 kg. A ritmo di camminata sportiva di 8 km/h sono circa 290 calorie. A 9,7 km/h (camminata molto veloce o jogging leggero, MET ~7,0), 40 minuti bruciano circa 325-330 calorie per una persona di 70 kg.",
    },
    {
      question: "Quante calorie bruciano 40 minuti a 9,7 km/h?",
      answer:
        "Camminare 40 minuti a 9,7 km/h (6,0 mph) — ritmo da camminata sportiva sul tapis roulant, MET ~7,0 — brucia circa 327 calorie per una persona di 70 kg (155 lb). Chi pesa di più brucia di più: circa 380 kcal a 82 kg e 422 kcal a 91 kg. La maggior parte degli adulti non regge una vera camminata a questa velocità e passa a un jogging leggero. Usa il calcolatore per un numero preciso in base al tuo peso.",
    },
    {
      question: "La velocità cambia le calorie bruciate?",
      answer:
        "Sì, in modo netto. Camminare più veloce alza il valore MET e brucia più calorie al minuto. La camminata sostenuta (6,4 km/h) brucia circa il 30% in più di una passeggiata tranquilla (3,2 km/h).",
    },
    {
      question: "Che cos'è il MET e perché conta?",
      answer:
        "Il MET (Metabolic Equivalent of Task) è una misura scientifica del dispendio energetico. Un MET di 1 è il tuo metabolismo a riposo. Camminare a ritmo normale ha un MET di 3,5: bruci 3,5 volte più calorie che a riposo.",
    },
    {
      question: "Qual è il valore MET della camminata a ritmo medio?",
      answer:
        "Il valore MET della camminata a ritmo medio (circa 5 km/h o 3,1 mph) è 3,5. È la velocità più comune negli adulti e la base della maggior parte dei calcolatori. Una persona di 70 kg brucia circa 245 calorie all'ora a questo ritmo.",
    },
    {
      question: "Qual è il valore MET della camminata a ritmo moderato?",
      answer:
        "Un ritmo moderato (4,0-4,5 km/h o 2,5-2,8 mph) ha un MET tra 3,0 e 3,3. È un'andatura comoda, in cui si può parlare, ideale ogni giorno. Una persona di 70 kg brucia 210-231 calorie all'ora.",
    },
    {
      question: "Qual è il valore MET della camminata a 5 km/h (3,1 mph)?",
      answer:
        "Il valore MET a 5 km/h (3,1 mph) è 3,5. È considerato un ritmo normale. Una persona di 70 kg brucia circa 245 calorie all'ora (3,5 × 70 = 245 kcal/h).",
    },
    {
      question: "Qual è il valore MET della camminata a 4,5 km/h (2,8 mph)?",
      answer:
        "Il valore MET a 4,5 km/h (2,8 mph) è 3,3. È un'andatura costante e comoda. Per una persona di 70 kg sono circa 231 calorie all'ora (3,3 × 70 = 231 kcal/h).",
    },
    {
      question: "Qual è il valore MET della camminata veloce a 6 km/h?",
      answer:
        "La camminata veloce a 6,0 km/h (3,7 mph) ha un MET di 4,5. È circa il 30% più impegnativa della camminata normale (MET 3,5). Una persona di 70 kg brucia circa 315 calorie all'ora a questo ritmo.",
    },
    {
      question: "Quanto grasso posso bruciare camminando?",
      answer:
        "Un chilogrammo di grasso corporeo contiene circa 7.700 calorie. Camminare 10.000 passi al giorno (circa 400 calorie) brucerebbe circa 1 kg di grasso ogni 19 giorni, a dieta invariata. Abbina la camminata a un'alimentazione equilibrata.",
    },
  ],
  formula: {
    title: "Come funziona la formula delle calorie camminando",
    intro:
      "La {name} usa i valori MET (Metabolic Equivalent of Task) del {source}, lo stesso riferimento dei fisiologi dell'esercizio in tutto il mondo. La formula è:",
    name: "formula del calcolatore di calorie bruciate camminando",
    source: "Compendium of Physical Activities",
    equation: "Calorie = MET × peso (kg) × durata (ore)",
    glance: "Ogni velocità ha un valore MET preciso. Ecco i MET più cercati:",
    highlights: [
      { phrase: "Valore MET camminata 4,8 km/h", detail: "(3 mph) =" },
      { phrase: "Valore MET ritmo moderato", detail: "(5 km/h) =" },
      { phrase: "Valore MET camminata veloce", detail: "(6,4 km/h) =" },
      { phrase: "Valore MET camminata 5 km/h", detail: "(3,1 mph) =" },
    ],
    chartNote:
      "Per il dettaglio completo, vedi la nostra {chart}: ogni velocità, dalla passeggiata lenta alla marcia, più gli aggiustamenti per pendenza e terreno.",
    chartLabel: "tabella dei valori MET della camminata",
  },
  understanding: {
    title: "Capire i valori MET della camminata",
    term: "MET (Metabolic Equivalent of Task)",
    body:
      "Il {term} è la misura scientifica standard dell'intensità dell'esercizio. Un MET equivale al dispendio energetico del tuo corpo a riposo completo: circa 1 caloria per chilogrammo di peso all'ora. Un MET di 3,5 significa che bruci 3,5 volte più energia che da seduto.",
    levels: {
      light: { title: "Camminata leggera", detail: "Passeggiata lenta, ritmo da vetrine (2–4 km/h)" },
      moderate: { title: "Camminata moderata", detail: "Ritmo normale o sostenuto, il più comune (4–6 km/h)" },
      vigorous: { title: "Camminata intensa", detail: "Camminata sportiva, marcia o salita (6+ km/h)" },
    },
    footnote:
      "I valori MET del calcolatore arrivano dal Compendium of Physical Activities, il riferimento degli scienziati dell'esercizio. Camminare a 5 km/h (3,1 mph), la velocità più cercata, ha un MET di 3,5: una persona di 70 kg brucia 245 calorie all'ora a quel ritmo.",
  },
  metTable: {
    title: "Valori MET completi per velocità di cammino",
    intro:
      "Il MET (Metabolic Equivalent of Task) misura il dispendio energetico. Un MET di 1,0 equivale al tuo metabolismo a riposo. Usa la tabella per il MET esatto della tua velocità. Valori dal Compendium of Physical Activities.",
    columns: {
      activity: "Attività di cammino",
      kmh: "Velocità (km/h)",
      mph: "Velocità (mph)",
      met: "Valore MET",
      cal: "kcal/h (70 kg)",
    },
    activities: {
      "very-slow": "Camminata molto lenta",
      "slow-stroll": "Passeggiata lenta",
      leisurely: "Camminata tranquilla",
      comfortable: "Andatura comoda",
      moderate: "Camminata moderata",
      steady: "Andatura costante",
      normal: "Camminata normale",
      purposeful: "Camminata decisa",
      brisk: "Camminata sostenuta",
      fast: "Camminata veloce",
      "very-fast": "Camminata molto veloce",
      race: "Marcia",
      "uphill-3": "Camminata in salita (pendenza 3%)",
      "uphill-6": "Camminata in salita (pendenza 6%)",
    },
    footnote:
      "Calorie all'ora calcolate per una persona di 70 kg (154 lb). Il consumo reale dipende dal tuo peso: usa il calcolatore per una stima personale. Le righe evidenziate sono i ritmi più comuni. Fonte: Compendium of Physical Activities.",
  },
  cta: {
    title: "Tieni traccia delle tue camminate",
    description: "Scarica l'app Steps per registrare in automatico camminate, calorie bruciate e progressi.",
  },
  howTo: {
    name: "Come calcolare le calorie bruciate camminando",
    description: "Inserisci durata, ritmo e peso per stimare le calorie bruciate con i valori MET.",
    steps: [
      { name: "Inserisci durata o distanza", text: "Puoi passare da quanto hai camminato a quanto hai percorso. Entrambe danno la stessa stima." },
      { name: "Scegli il ritmo", text: "Lento, normale, sostenuto o veloce. Un ritmo più alto usa un MET maggiore e brucia più calorie al minuto." },
      { name: "Inserisci il peso", text: "Il peso è il moltiplicatore più grande del consumo calorico." },
      { name: "Leggi la stima", text: "Il calcolatore mostra le calorie bruciate, la media al minuto e il valore MET usato." },
    ],
  },
};

export default it;
