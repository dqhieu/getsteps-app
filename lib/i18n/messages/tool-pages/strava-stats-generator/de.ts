import type { StravaStatsGeneratorMessages } from "./en";

const de: StravaStatsGeneratorMessages = {
  meta: {
    title: "Strava-Stats-Generator – kostenlose Workout-Karte | Steps",
    description:
      "Mach aus deinem Strava-Lauf ein transparentes Stats-Overlay für Instagram Stories. Distanz und Zeit eingeben, Pace wird berechnet, kostenloses transparentes PNG in 1080x1080.",
    keywords: [
      "strava stats generator",
      "strava workout stats",
      "strava stats overlay",
      "transparentes workout png",
      "lauf stats overlay instagram",
      "workout stats bild",
      "laufstats teilen",
      "instagram story laufstats",
    ],
    ogTitle: "Strava-Stats-Generator – transparentes Overlay",
    ogDescription:
      "Mach aus deinem Strava-Lauf ein transparentes Overlay für Instagram Stories. Distanz, Bewegungszeit und berechnete Pace als kostenloses PNG.",
    ogImageAlt: "Strava-Stats-Generator – kostenlose Workout-Karte",
  },
  hero: {
    title: "Strava-Stats-Generator",
    subtitle:
      "Mach aus dem Lauf, den du gerade geloggt hast, ein transparentes Overlay für deine Story. Distanz und Zeit eingeben — wir rechnen die Pace aus und geben dir ein kostenloses PNG für dein Foto.",
  },
  tool: {
    workout: "Dein Workout",
    distance: "Distanz",
    switchToMiles: "Auf Meilen umschalten",
    switchToKilometers: "Auf Kilometer umschalten",
    movingTime: "Bewegungszeit (MM:SS oder H:MM:SS)",
    durationPlaceholder: "52:30",
    paceHint: "Die Pace wird aus Distanz und Zeit berechnet.",
    overlay: "Dein Overlay",
    overlayAria: "Workout-Overlay: {distance} {distanceUnit}, {time}, {pace} {paceUnit}",
    saved: "Gespeichert!",
    download: "Transparentes PNG laden",
    downloadHint:
      "1080×1080 mit transparentem Hintergrund — leg es direkt über dein Foto in Instagram Stories. Alles läuft im Browser, nichts wird hochgeladen.",
    canvas: {
      distance: "Distanz",
      pace: "Pace",
      time: "Zeit",
    },
  },
  inlineCta: {
    headline: "Zähl die Schritte, die Strava nicht sieht",
    description:
      "Steps zählt jeden Schritt von deinem iPhone und deiner Apple Watch und zeigt ihn direkt neben deinen Läufen — plus Serien, Trends und einen kostenlosen Jahresrückblick.",
  },
  about: {
    title: "Warum ein transparentes Overlay?",
    p1: "Das Foto ist der Post. Du hast es an der Wende oder im Ziel gemacht, und genau das wollen die Leute sehen — eine volle Stat-Karte deckt es zu. Ein transparentes PNG behält dein Foto und legt die drei Zahlen drauf, die zählen — Distanz, Bewegungszeit und Pace — in einer Größe, die auf dem Handy lesbar ist.",
    p2: "Der Generator funktioniert für Lauf, Walk oder Rad, egal ob du in Strava, Garmin Connect, auf der Apple Watch, in Nike Run Club oder auf dem Laufband ohne Tracking aufgezeichnet hast. Trag ein, was du gemacht hast — das Overlay ist in Sekunden fertig, ohne Konto, ohne E-Mail, ohne Wasserzeichen.",
  },
  faqTitle: "Häufige Fragen",
  faq: [
    {
      question: "Wie mache ich ein Overlay aus meinem Strava-Lauf?",
      answer:
        "Öffne die Aktivität in Strava, lies Distanz und Bewegungszeit ab und tipp beides ins Formular. Die Pace wird für dich berechnet. Tippe auf Download und speichere ein transparentes PNG mit genau diesen drei Werten.",
    },
    {
      question: "Wie lege ich das Overlay auf mein Foto?",
      answer:
        "Öffne Instagram Stories und wähle das Foto. Tippe auf den Sticker-Button, nimm den Foto-Sticker und wähle das heruntergeladene PNG. Der Hintergrund ist transparent, also landet nur der Text auf dem Bild — mit zwei Fingern skalieren und dorthin ziehen, wo es sitzt. Dasselbe geht in TikTok, Snapchat und jedem Editor mit Ebenen.",
    },
    {
      question: "Gehört dieses Tool zu Strava?",
      answer:
        "Nein. Das ist ein kostenloses Tool von Steps und weder mit Strava verbunden noch von Strava unterstützt. Es erzeugt eine eigene, unmarkierte Grafik aus den Zahlen, die du eingibst — keine Kopie eines Strava-Aktivitätsbildschirms.",
    },
    {
      question: "Wie wird die Pace berechnet?",
      answer:
        "Pace ist Bewegungszeit geteilt durch Distanz, als Minuten und Sekunden pro Kilometer oder pro Meile, je nach Einheit. Ein 10-km-Lauf in 52:30 ergibt 5:15 pro Kilometer. Du tippst die Pace nie selbst ein — sie folgt immer aus Distanz und Zeit.",
    },
    {
      question: "Wie groß ist das Bild?",
      answer:
        "1080 mal 1080 Pixel — ein Quadrat 1:1, das als Feed-Post funktioniert und sauber auf ein Stories- oder TikTok-Foto passt, wo du es skalieren kannst. Die Werte sind zentriert und bleiben lesbar, egal wohin du das Overlay schiebst.",
    },
    {
      question: "Warum ist der Hintergrund transparent?",
      answer:
        "Damit das Overlay auf einem Foto liegt, das du schon hast, statt es zu ersetzen. Eine volle Karte verdeckt dein Lauf-Foto; ein transparentes PNG legt die Zahlen darüber. Der Text hat einen weichen Schatten, damit er auf Schnee oder Himmel lesbar bleibt.",
    },
    {
      question: "Werden meine Workout-Daten irgendwohin geschickt?",
      answer:
        "Nein. Das Overlay wird im Browser mit einem Canvas gezeichnet und direkt auf dein Gerät gespeichert. Nichts, was du eingibst, wird gesendet, gespeichert oder protokolliert.",
    },
    {
      question: "Zeigt Strava die Schrittzahl?",
      answer:
        "Nein — Strava speichert Distanz, Zeit und Pace, aber nicht die Schritte deines Tages. Wenn du Schritte neben deinen Läufen willst, liest die Steps-App die Schrittdaten von iPhone und Apple Watch und zeigt sie neben deinen Workouts.",
    },
  ],
  disclaimer:
    "Steps ist nicht mit Strava verbunden, wird nicht von Strava unterstützt und steht in keiner Verbindung zu Strava. Strava ist eine Marke von Strava, Inc. Overlays, die hier entstehen, sind eigene Grafiken aus den Zahlen, die du eingibst.",
  howTo: {
    name: "So erstellst du ein transparentes Workout-Overlay",
    description:
      "Gib Distanz und Bewegungszeit eines Laufs ein, lade ein transparentes PNG und lege es in Instagram Stories über dein eigenes Foto.",
    steps: [
      {
        name: "Distanz und Bewegungszeit eingeben",
        text: "Trag die gelaufene Distanz ein und wechsle zwischen Kilometern und Meilen, dann die Bewegungszeit als MM:SS oder H:MM:SS.",
      },
      {
        name: "Transparentes PNG laden",
        text: "Die Pace kommt aus Distanz und Zeit. Tippe auf Download und speichere ein 1080x1080-PNG ohne Hintergrund — nur die drei Werte.",
      },
      {
        name: "Über dein Foto legen",
        text: "In Instagram Stories wählst du dein Foto, tippst auf den Sticker-Button, nimmst den Foto-Sticker und wählst das PNG. Nur die Stats liegen auf dem Bild — skalieren und an die richtige Stelle ziehen.",
      },
    ],
  },
};

export default de;
