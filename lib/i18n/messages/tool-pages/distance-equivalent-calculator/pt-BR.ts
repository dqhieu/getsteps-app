import type { DistanceEquivalentCalculatorMessages } from "./en";

const ptBR: DistanceEquivalentCalculatorMessages = {
  meta: {
    title: "Conversor de distância – km, milhas, metros, passos",
    description:
      "Converta uma distância de corrida entre quilômetros, milhas, metros e jardas. Veja os passos equivalentes, o tempo estimado e as calorias ao caminhar, trotar ou correr.",
    keywords: [
      "conversor de distância",
      "km para milhas",
      "quantos passos tem uma milha",
      "equivalência de distância",
      "metros para milhas",
      "calculadora de distância corrida",
      "km para milhas corrida",
    ],
    ogTitle: "Conversor de distância – km, milhas, metros, passos",
    ogDescription:
      "Converta uma distância de corrida entre quilômetros, milhas, metros e jardas. Veja os passos equivalentes, o tempo estimado e as calorias ao caminhar, trotar ou correr.",
    ogImageAlt: "Conversor de distância",
  },
  hero: {
    title: "Conversor de equivalências de distância",
    subtitle:
      "Converta qualquer distância entre km, milhas, metros e jardas — e veja passos, tempo e calorias equivalentes.",
  },
  intro:
    "Informe uma distância em quilômetros, milhas, metros ou jardas e veja na hora todas as equivalências. Inclui passos estimados, tempo para percorrer caminhando ou correndo e calorias aproximadas.",
  calculator: {
    enterDistance: "Informe a distância",
    placeholder: "5",
    units: {
      km: "km",
      miles: "milhas",
      meters: "metros",
      yards: "jardas",
    },
    quick: {
      "5k": "5 km",
      "10k": "10 km",
      half: "Meia maratona",
      marathon: "Maratona",
    },
    equivalents: "Equivalências",
    kilometers: "Quilômetros",
    miles: "Milhas",
    meters: "Metros",
    yards: "Jardas",
    feet: "Pés",
    approxSteps: "Passos aprox.",
    context: "Na corrida",
    activity: "Atividade",
    speed: "Velocidade",
    time: "Tempo",
    calories: "Calorias",
    activities: {
      walking: "Caminhada",
      jogging: "Trote",
      running: "Corrida",
    },
    speeds: {
      walking: "5 km/h",
      jogging: "8 km/h",
      running: "11 km/h",
    },
    calorieNote: "Calorias estimadas para uma pessoa de 70 kg",
  },
  faqTitle: "Perguntas sobre conversão de distância",
  faq: [
    {
      question: "Quantos km tem uma milha?",
      answer:
        "1 milha = 1,60934 km. No sentido inverso, 1 km = 0,62137 milha. Uma corrida de 5 milhas tem cerca de 8,05 km, e uma de 10 km tem cerca de 6,21 milhas.",
    },
    {
      question: "Quantos passos tem 1 milha?",
      answer:
        "Cerca de 2.000–2.500 passos, conforme sua altura e o comprimento da passada. A média fica em torno de 2.112 passos por milha (1.312 passos por km). Quem é mais alto e tem passada maior dá menos passos.",
    },
    {
      question: "Quantos km tem uma maratona?",
      answer:
        "Uma maratona tem exatamente 42,195 km (26,219 milhas). Uma meia maratona tem 21,0975 km (13,109 milhas). Essas distâncias são fixadas pela World Athletics.",
    },
    {
      question: "Quantos passos tem 5 km?",
      answer:
        "Cerca de 6.250–7.500 passos para a maioria das pessoas. Com a passada média de 1.312 passos/km, 5 km equivalem a uns 6.560 passos. Isso muda com altura, passada e terreno.",
    },
    {
      question: "Quanto tempo leva para caminhar 1 milha?",
      answer:
        "Num ritmo médio de 5 km/h, cerca de 12 minutos por milha. Numa caminhada rápida de 6 km/h, cerca de 10 minutos. Quem caminha em ritmo forte pode fazer em menos de 9 minutos.",
    },
  ],
  cta: {
    title: "Veja exatamente a distância que você caminhou hoje no app Steps.",
    description: "Cada passo, cada quilômetro e cada caloria gasta — tudo automático.",
  },
  howTo: {
    name: "Como converter unidades de distância",
    description:
      "Informe uma distância em qualquer unidade (km, milhas, metros, jardas, passos) para ver todas as equivalências, além do tempo de caminhada e das calorias.",
    steps: [
      {
        name: "Escolha a unidade de origem",
        text: "Quilômetros, milhas, metros, jardas, pés ou passos — qualquer unidade serve de entrada.",
      },
      {
        name: "Informe a distância",
        text: "Digite a distância.",
      },
      {
        name: "Leia todas as equivalências",
        text: "A calculadora devolve cada unidade, mais tempo de caminhada e calorias estimados para alguém de peso e ritmo médios.",
      },
    ],
  },
};

export default ptBR;
