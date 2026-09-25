import type { TreadmillInclineCalculatorMessages } from "./en";

const ptBR: TreadmillInclineCalculatorMessages = {
  meta: {
    title: "Calculadora de inclinação da esteira: ritmo e elevação",
    description:
      "Converta a inclinação da esteira em um ritmo equivalente no plano e veja a elevação que você subiu. 3 mph a 12% equivale a um trote de 4,7 mph no plano. Calculadora grátis baseada no ACSM.",
    keywords: [
      "calculadora de inclinação da esteira",
      "calculadora de ritmo da esteira",
      "calculadora de elevação da esteira",
      "calorias caminhada inclinada",
      "tabela de conversão de inclinação",
      "equivalente de ritmo 12-3-30",
      "inclinação da esteira para ritmo plano",
      "ganho de elevação na esteira",
    ],
    ogTitle: "Calculadora de inclinação da esteira: ritmo e elevação",
    ogDescription:
      "Transforme qualquer inclinação da esteira no ritmo no plano que ela vale e veja quanta elevação você subiu. Calculadora grátis com as equações metabólicas do ACSM.",
    ogImageAlt: "Calculadora de inclinação da esteira",
  },
  hero: {
    title: "Calculadora de inclinação da esteira",
    subtitle:
      "Transforme qualquer inclinação no ritmo no plano que ela realmente vale e veja quanta elevação você subiu. As equações metabólicas do ACSM precificam a inclinação em vez de estimá-la.",
  },
  calculator: {
    yourSetting: "Seu ajuste da esteira",
    beltSpeed: "Velocidade da esteira",
    incline: "Inclinação: {percent}%",
    duration: "Duração",
    minutes: "minutos",
    effortVsFlat: "Esforço em relação à mesma velocidade no plano",
    flatBelt: "Esteira plana: seu ritmo é o seu esforço",
    between:
      "Uma inclinação de {grade}% a {speed} é mais difícil do que qualquer ritmo de caminhada no plano que você sustentaria, e ainda mais fácil do que o trote no plano mais lento: nenhuma velocidade no plano corresponde a ela.",
    sameEffort: "O mesmo esforço de {gait} no plano a {speed} ({pace}).",
    gaitWalk: "caminhar",
    gaitJog: "trotar",
    kindWalk: "caminhada",
    kindJog: "trote",
    betweenLabel: "entre uma caminhada e um trote",
    perKmPace: "{pace} por km",
    perMilePace: "{pace} por milha",
    yourPace: "Seu ritmo",
    perKm: "Por km",
    perMile: "Por milha",
    met: "MET",
    distance: "Distância",
    distanceValue: "{km} km / {mi} mi",
    elevationTitle: "Elevação subida",
    elevationSubtitle: "Inclinação de {grade}% por {minutes} minutos a {speed}.",
    verticalMetres: "Metros verticais",
    verticalFeet: "Pés verticais",
    storeys: "Andares",
    stairSteps: "Degraus",
    briskWalk:
      "Para tornar {speed} tão exigente quanto uma caminhada rápida de 6 km/h (3,7 mph) no plano, defina a inclinação em {grade}.",
    tableTitle: "Ritmo no plano equivalente por inclinação",
    tableSubtitle: "Velocidade da esteira mantida em {speed}. Só a inclinação muda.",
    colIncline: "Inclinação",
    colFeelsLike: "Equivale a",
    colMet: "MET",
    colVsFlat: "vs plano",
    multiplier: "{value}x",
  },
  resultCta: {
    headline: "Saiba o que as suas caminhadas realmente valem",
    description:
      "O Steps registra cada caminhada em segundo plano e transforma em distância, elevação e calorias reais, sem lançamento manual.",
  },
  info: {
    title: "Como calculamos os equivalentes de inclinação",
    intro:
      "Dois ajustes da esteira são equivalentes quando custam o mesmo oxigênio. Estimamos o consumo de oxigênio a partir da velocidade e da inclinação com as equações metabólicas do ACSM e depois resolvemos a equação no plano de trás para frente para achar o ritmo com o mesmo custo.",
    formulaTitle: "As fórmulas",
    formulas: [
      { strong: "VO₂ da caminhada", rest: "= (0,1 × S) + (1,8 × S × G) + 3,5" },
      { strong: "VO₂ da corrida", rest: "= (0,2 × S) + (0,9 × S × G) + 3,5" },
      {
        strong: "",
        rest: "S é a velocidade em metros por minuto, G a inclinação como fração (5% = 0,05). A VO₂ está em ml/kg/min.",
      },
      {
        strong: "Multiplicador de esforço",
        rest: "= 1 + 18G, que sai diretamente ao igualar as duas equações de caminhada. Vale em qualquer inclinação.",
      },
      { strong: "Ganho de elevação", rest: "= distância da esteira × G" },
      {
        strong: "Exemplo:",
        rest: "4,8 km/h a 5% de inclinação são 5,3 MET, um multiplicador de 1,9× e 120 metros verticais em 30 minutos.",
      },
    ],
    note: "As duas equações do ACSM não se encontram: a caminhada no plano chega no máximo a cerca de 14,3 ml/kg/min e a corrida no plano começa perto de 25,2. Caminhadas com inclinação moderada caem no meio, onde nenhum ritmo no plano corresponde ao esforço. A calculadora diz isso, em vez de extrapolar uma equação além da faixa em que foi validada, e o multiplicador de esforço continua útil nos dois casos.",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "Qual ritmo no plano equivale a caminhar a 3 mph com 12% de inclinação?",
      answer:
        "Mais ou menos um trote de 4,7 mph. Caminhar a 3 mph em 12% custa cerca de 29 ml/kg/min de oxigênio, por volta de 8,3 MET. Nenhum ritmo sustentável de caminhada no plano chega lá, então a comparação honesta é um trote lento, não uma caminhada rápida. Por isso o treino 12-3-30 parece bem mais duro do que a velocidade sugere.",
    },
    {
      question: "Como você converte a inclinação da esteira em um ritmo no plano?",
      answer:
        "O esforço cresce quase de forma linear: uma inclinação multiplica o custo energético da caminhada por (1 + 18 × a inclinação em decimal), então 5% é 1,9 vez mais difícil do que a mesma velocidade no plano. Transformar esse multiplicador em uma velocidade no plano só funciona enquanto a resposta fica na faixa de caminhada, o que nos ritmos comuns significa inclinações abaixo de cerca de 2 a 3,5%. Acima disso, o esforço passa do que qualquer caminhada sustentável produz sem ainda chegar ao trote mais lento, e nenhum ritmo no plano corresponde.",
    },
    {
      question: "Quanta elevação você ganha na esteira?",
      answer:
        "O ganho vertical é a distância da esteira multiplicada pela inclinação. Trinta minutos a 5 km/h cobrem 2,5 km e, a 10%, são 250 metros verticais, cerca de 820 pés, ou uns 83 andares. A esteira informa a inclinação como subida sobre a distância da esteira, exatamente o que este cálculo assume.",
    },
    {
      question: "1% de inclinação realmente simula correr ao ar livre?",
      answer:
        "É uma convenção razoável, não uma lei precisa. O ajuste de 1% vem de um estudo de 1996 de Jones e Doust, que encontrou que uma inclinação de 1% igualava o custo energético de correr ao ar livre acima de cerca de 8 mph. Nas velocidades mais lentas em que a maioria caminha ou trota, a resistência do ar é desprezível e uma esteira a 0% já fica perto do esforço ao ar livre.",
    },
    {
      question: "Caminhar em inclinação é melhor do que correr no plano?",
      answer:
        "Para um custo energético parecido com muito menos impacto, sim. Caminhar a 5 km/h a 12% fica em torno de 8,5 MET, basicamente o mesmo que um trote no plano a 8 km/h (8,6 MET), mas as forças de reação do solo são bem menores porque os dois pés nunca deixam a esteira ao mesmo tempo. A troca é que a caminhada inclinada carrega bem mais as panturrilhas e o tendão de Aquiles.",
    },
    {
      question: "Por que uma inclinação pequena muda tanto o esforço?",
      answer:
        "Porque levantar o corpo na vertical custa caro em relação a movê-lo na horizontal. Na equação de caminhada do ACSM o termo vertical tem coeficiente 1,8 contra 0,1 do horizontal, então cada 1% de inclinação soma cerca de 18% ao custo energético de caminhar na mesma velocidade. Cinco por cento quase dobra, e doze por cento aproximadamente triplica.",
    },
    {
      question: "Você deve confiar na leitura de inclinação da esteira?",
      answer:
        "Trate como aproximada. A calibração da esteira desvia, e muitas máquinas domésticas mostram a inclinação comandada ao motor, não uma medida. A flexão da plataforma sob carga também reduz um pouco a inclinação efetiva. As relações daqui continuam válidas, mas os números absolutos herdam o erro da máquina.",
    },
  ],
  cta: {
    title: "Acompanhe seus treinos na esteira",
    description:
      "Baixe o app Steps para registrar automaticamente suas caminhadas, as calorias gastas e o progresso ao longo do tempo.",
  },
  sticky: "Conte seus passos com o Steps",
  howTo: {
    name: "Como converter a inclinação da esteira em um ritmo no plano",
    description:
      "Informe a velocidade da esteira, a inclinação e a duração para ver o ritmo no plano com o mesmo esforço, o quanto a inclinação deixa mais difícil e a elevação que você subiu.",
    steps: [
      {
        name: "Informe a velocidade da esteira",
        text: "Use a velocidade mostrada no painel. Alterne entre km/h e mph; cada resultado segue a unidade que você escolher.",
      },
      {
        name: "Defina a inclinação",
        text: "Arraste o controle ou toque um preset de 0% a 15%. Os presets cobrem as inclinações da maioria das esteiras domésticas, inclusive os 12% do treino 12-3-30.",
      },
      {
        name: "Informe por quanto tempo você caminhou",
        text: "Duração em minutos. Ela não muda a equivalência de ritmo, mas define a distância e a elevação.",
      },
      {
        name: "Leia o ritmo no plano equivalente",
        text: "O número principal é o ritmo no plano que custa o mesmo oxigênio. Acima de cerca de 3% de inclinação nenhum ritmo de caminhada corresponde, então a comparação passa para um trote e avisa.",
      },
      {
        name: "Confira a elevação e a tabela",
        text: "Veja a subida em metros verticais, pés, andares e degraus e depois compare cada inclinação padrão na sua velocidade na tabela de equivalência.",
      },
    ],
  },
};

export default ptBR;
