import type { StravaStatsGeneratorMessages } from "./en";

const es: StravaStatsGeneratorMessages = {
  meta: {
    title: "Generador de stats de Strava – tarjeta de entreno gratis | Steps",
    description:
      "Convierte tu carrera de Strava en un overlay transparente para las Historias de Instagram. Distancia, tiempo, ritmo calculado y un PNG transparente 1080x1080 gratis.",
    keywords: [
      "generador stats strava",
      "estadísticas entrenamiento strava",
      "overlay stats strava",
      "png stats transparente",
      "overlay running instagram",
      "imagen stats entrenamiento",
      "compartir stats running",
      "stats running historias instagram",
    ],
    ogTitle: "Generador de stats de Strava – overlay transparente",
    ogDescription:
      "Convierte tu carrera de Strava en un overlay transparente para las Historias de Instagram. Distancia, tiempo en movimiento y ritmo calculado en un PNG gratis.",
    ogImageAlt: "Generador de stats de Strava – tarjeta de entreno gratis",
  },
  hero: {
    title: "Generador de stats de Strava",
    subtitle:
      "Convierte la carrera que acabas de registrar en un overlay transparente para tu Historia. Mete distancia y tiempo — calculamos el ritmo y te damos un PNG gratis para poner sobre la foto.",
  },
  tool: {
    workout: "Tu entreno",
    distance: "Distancia",
    switchToMiles: "Cambiar a millas",
    switchToKilometers: "Cambiar a kilómetros",
    movingTime: "Tiempo en movimiento (MM:SS o H:MM:SS)",
    durationPlaceholder: "52:30",
    paceHint: "El ritmo se calcula con la distancia y el tiempo.",
    overlay: "Tu overlay",
    overlayAria: "Overlay de stats: {distance} {distanceUnit}, {time}, {pace} {paceUnit}",
    saved: "¡Guardado!",
    download: "Descargar PNG transparente",
    downloadHint:
      "1080×1080 con fondo transparente — ponlo encima de tu foto en las Historias de Instagram. Todo ocurre en el navegador; no se sube nada.",
    canvas: {
      distance: "Distancia",
      pace: "Ritmo",
      time: "Tiempo",
    },
  },
  inlineCta: {
    headline: "Cuenta los pasos que Strava no ve",
    description:
      "Steps cuenta cada paso de tu iPhone y tu Apple Watch y lo muestra junto a tus carreras — con rachas, tendencias y un resumen del año gratis.",
  },
  about: {
    title: "¿Por qué un overlay transparente?",
    p1: "La foto es el post. La hiciste en la media vuelta o en la meta, y eso es lo que la gente quiere ver — una tarjeta llena de cifras la tapa. Un PNG transparente conserva la foto y pone encima los tres números que importan — distancia, tiempo en movimiento y ritmo — a un tamaño que se lee en el móvil.",
    p2: "Sirve para una carrera, una caminata o una ruta en bici, la hayas grabado en Strava, Garmin Connect, Apple Watch, Nike Run Club o en una cinta sin seguimiento. Escribe lo que hiciste y el overlay está listo en segundos — sin cuenta, sin correo, sin marca de agua.",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Cómo hago un overlay de mi carrera en Strava?",
      answer:
        "Abre la actividad en Strava, apunta la distancia y el tiempo en movimiento y escríbelos en el formulario. El ritmo se calcula solo. Toca Descargar para guardar un PNG transparente con solo esas tres cifras.",
    },
    {
      question: "¿Cómo pongo el overlay en mi foto?",
      answer:
        "Abre las Historias de Instagram y elige la foto. Toca el botón de stickers, elige el sticker de foto y selecciona el PNG descargado. El fondo es transparente, así que solo el texto cae sobre la imagen — pellizca para cambiar el tamaño y arrástralo donde quede mejor. El mismo truco vale en TikTok, Snapchat y cualquier editor con capas.",
    },
    {
      question: "¿Esta herramienta está vinculada a Strava?",
      answer:
        "No. Es una herramienta gratis de Steps y no está afiliada, respaldada ni conectada con Strava. Genera un gráfico original, sin marca, con los números que escribes — no una copia de una pantalla de actividad de Strava.",
    },
    {
      question: "¿Cómo se calcula el ritmo?",
      answer:
        "El ritmo es el tiempo en movimiento dividido entre la distancia, en minutos y segundos por kilómetro o por milla, según la unidad. Un 10 km en 52:30 sale a 5:15 por kilómetro. Nunca escribes el ritmo: siempre sale de la distancia y el tiempo.",
    },
    {
      question: "¿Qué tamaño tiene la imagen?",
      answer:
        "1080 por 1080 píxeles — un cuadrado 1:1 que sirve de post del feed y encaja en una foto de Historias o TikTok, donde puedes pellizcar para redimensionarla. Las cifras van centradas y se leen bien allá donde coloques el overlay.",
    },
    {
      question: "¿Por qué el fondo es transparente?",
      answer:
        "Para que el overlay se ponga sobre una foto que ya tienes, en vez de sustituirla. Una tarjeta opaca tapa la foto de la carrera; un PNG transparente deja las cifras encima. El texto lleva una sombra suave para leerse sobre nieve o cielo.",
    },
    {
      question: "¿Se suben los datos de mi entreno?",
      answer:
        "No. El overlay se dibuja en tu navegador con un canvas y se guarda directo en el dispositivo. Nada de lo que escribes se envía, se guarda o se registra.",
    },
    {
      question: "¿Strava muestra el recuento de pasos?",
      answer:
        "No — Strava registra distancia, tiempo y ritmo, pero no los pasos del día. Si quieres los pasos junto a tus carreras, la app Steps lee los datos del iPhone y del Apple Watch y los muestra al lado de tus entrenos.",
    },
  ],
  disclaimer:
    "Steps no está afiliado, respaldado ni conectado con Strava. Strava es una marca de Strava, Inc. Los overlays que se generan aquí son gráficos originales hechos con los números que introduces.",
  howTo: {
    name: "Cómo hacer un overlay transparente de stats",
    description:
      "Introduce la distancia y el tiempo en movimiento de una carrera, descarga un PNG transparente y ponlo sobre tu foto en las Historias de Instagram.",
    steps: [
      {
        name: "Introduce distancia y tiempo en movimiento",
        text: "Escribe la distancia y cambia entre kilómetros y millas; luego el tiempo en movimiento como MM:SS o H:MM:SS.",
      },
      {
        name: "Descarga el PNG transparente",
        text: "El ritmo sale de la distancia y el tiempo. Toca Descargar para guardar un PNG de 1080x1080 sin fondo — solo las tres cifras.",
      },
      {
        name: "Ponlo sobre tu foto",
        text: "En las Historias de Instagram elige la foto, toca el botón de stickers, elige el sticker de foto y selecciona el PNG. Solo aparecen las stats — pellizca para cambiar el tamaño y arrástralo.",
      },
    ],
  },
};

export default es;
