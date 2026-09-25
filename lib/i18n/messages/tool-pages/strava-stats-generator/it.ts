import type { StravaStatsGeneratorMessages } from "./en";

const it: StravaStatsGeneratorMessages = {
  meta: {
    title: "Generatore stats Strava – card allenamento gratis | Steps",
    description:
      "Trasforma la tua corsa Strava in un overlay trasparente per le Storie di Instagram. Distanza, tempo, passo calcolato e un PNG trasparente 1080x1080 gratuito.",
    keywords: [
      "generatore stats strava",
      "statistiche allenamento strava",
      "overlay stats strava",
      "png stats trasparente",
      "overlay corsa instagram",
      "immagine stats allenamento",
      "condividere stats corsa",
      "stats corsa storie instagram",
    ],
    ogTitle: "Generatore stats Strava – overlay trasparente",
    ogDescription:
      "Trasforma la tua corsa Strava in un overlay trasparente per le Storie di Instagram. Distanza, tempo in movimento e passo calcolato, in un PNG gratuito.",
    ogImageAlt: "Generatore stats Strava – card allenamento gratis",
  },
  hero: {
    title: "Generatore stats Strava",
    subtitle:
      "Trasforma la corsa che hai appena registrato in un overlay trasparente per la tua Storia. Inserisci distanza e tempo — calcoliamo il passo e ti diamo un PNG gratuito da mettere sulla foto.",
  },
  tool: {
    workout: "Il tuo allenamento",
    distance: "Distanza",
    switchToMiles: "Passa alle miglia",
    switchToKilometers: "Passa ai chilometri",
    movingTime: "Tempo in movimento (MM:SS o H:MM:SS)",
    durationPlaceholder: "52:30",
    paceHint: "Il passo si calcola da distanza e tempo.",
    overlay: "Il tuo overlay",
    overlayAria: "Overlay stats: {distance} {distanceUnit}, {time}, {pace} {paceUnit}",
    saved: "Salvato!",
    download: "Scarica il PNG trasparente",
    downloadHint:
      "1080×1080 con sfondo trasparente — mettilo sulla foto nelle Storie di Instagram. Tutto avviene nel browser, niente viene caricato.",
    canvas: {
      distance: "Distanza",
      pace: "Passo",
      time: "Tempo",
    },
  },
  inlineCta: {
    headline: "Conta i passi che Strava non vede",
    description:
      "Steps conta ogni passo da iPhone e Apple Watch e lo mostra accanto alle tue corse — con serie, andamenti e un riepilogo annuale gratuito.",
  },
  about: {
    title: "Perché un overlay trasparente?",
    p1: "La foto è il post. L'hai scattata al giro di boa o al traguardo, ed è quello che la gente vuole vedere — una card piena di numeri la copre. Un PNG trasparente tiene la foto e ci appoggia i tre numeri che contano — distanza, tempo in movimento e passo — a una dimensione leggibile sul telefono.",
    p2: "Funziona per corsa, camminata o bici, che tu abbia registrato su Strava, Garmin Connect, Apple Watch, Nike Run Club o su un tapis roulant senza tracking. Scrivi cosa hai fatto: l'overlay è pronto in pochi secondi — senza account, senza email, senza filigrana.",
  },
  faqTitle: "Domande frequenti",
  faq: [
    {
      question: "Come creo un overlay dalla mia corsa Strava?",
      answer:
        "Apri l'attività su Strava, leggi distanza e tempo in movimento e inseriscili nel modulo. Il passo si calcola da solo. Tocca Scarica per salvare un PNG trasparente con solo questi tre dati.",
    },
    {
      question: "Come metto l'overlay sulla foto?",
      answer:
        "Apri le Storie di Instagram e scegli la foto. Tocca il pulsante degli sticker, prendi lo sticker foto e seleziona il PNG scaricato. Lo sfondo è trasparente, quindi sulla foto resta solo il testo — pizzica per ridimensionare e trascinalo dove sta meglio. Lo stesso vale su TikTok, Snapchat e in qualsiasi editor a livelli.",
    },
    {
      question: "Questo strumento è collegato a Strava?",
      answer:
        "No. È uno strumento gratuito di Steps e non è affiliato, approvato o collegato a Strava. Produce una grafica originale, senza marchio, con i numeri che inserisci — non una copia di una schermata attività di Strava.",
    },
    {
      question: "Come si calcola il passo?",
      answer:
        "Il passo è il tempo in movimento diviso per la distanza, in minuti e secondi per chilometro o per miglio, in base all'unità. Una 10 km in 52:30 fa 5:15 al chilometro. Non digiti mai il passo: segue sempre da distanza e tempo.",
    },
    {
      question: "Che dimensioni ha l'immagine?",
      answer:
        "1080 per 1080 pixel — un quadrato 1:1 che va bene come post del feed e si appoggia a una foto delle Storie o di TikTok, dove puoi ridimensionarlo. I numeri sono centrati e si leggono ovunque posizioni l'overlay.",
    },
    {
      question: "Perché lo sfondo è trasparente?",
      answer:
        "Così l'overlay si appoggia a una foto che hai già, invece di sostituirla. Una card piena copre la foto della corsa; un PNG trasparente lascia i numeri sopra. Il testo ha un'ombra leggera per restare leggibile su neve o cielo.",
    },
    {
      question: "I dati dell'allenamento vengono caricati da qualche parte?",
      answer:
        "No. L'overlay è disegnato nel browser con un canvas e salvato direttamente sul dispositivo. Niente di quello che scrivi viene inviato, archiviato o registrato.",
    },
    {
      question: "Strava mostra il conteggio dei passi?",
      answer:
        "No — Strava registra distanza, tempo e passo, ma non i passi della giornata. Se vuoi i passi accanto alle corse, l'app Steps legge i dati di iPhone e Apple Watch e li mostra vicino agli allenamenti.",
    },
  ],
  disclaimer:
    "Steps non è affiliato, approvato o collegato a Strava. Strava è un marchio di Strava, Inc. Gli overlay generati qui sono grafiche originali costruite con i numeri che inserisci.",
  howTo: {
    name: "Come creare un overlay trasparente delle stats",
    description:
      "Inserisci distanza e tempo in movimento di una corsa, scarica un PNG trasparente e mettilo sulla tua foto nelle Storie di Instagram.",
    steps: [
      {
        name: "Inserisci distanza e tempo in movimento",
        text: "Scrivi la distanza percorsa e passa tra chilometri e miglia, poi il tempo in movimento come MM:SS o H:MM:SS.",
      },
      {
        name: "Scarica il PNG trasparente",
        text: "Il passo si calcola da distanza e tempo. Tocca Scarica per salvare un PNG 1080x1080 senza sfondo — solo i tre dati.",
      },
      {
        name: "Mettilo sulla foto",
        text: "Nelle Storie di Instagram scegli la foto, tocca il pulsante degli sticker, prendi lo sticker foto e seleziona il PNG. Compaiono solo le stats — pizzica per ridimensionare e trascina.",
      },
    ],
  },
};

export default it;
