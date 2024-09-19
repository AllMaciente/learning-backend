const express = require("express");

function range(start, stop, step) {
  if (typeof stop == "undefined") {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step == "undefined") {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
}

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

app.post("/api/exer1", (req, res) => {
  const { n1: number1, n2: number2 } = req.body;

  if (number1 !== undefined && number2 !== undefined) {
    res.status(202).json({
      n1: number1,
      n2: number2,
      resultado: parseFloat(number1) + parseFloat(number2),
    });
  } else {
    res.json({
      body: { n1: "valor 1(int)", n2: "valor 2(int)" },
      msg: "FUP que solicite dois numeros reais, realize a soma; Imprima o resultado;",
    });
  }
});

app.post("/api/exer2", (req, res) => {
  const { horas: horasTrabalhadas, valor: valorHora } = req.body;

  if (horasTrabalhadas !== undefined && valorHora !== undefined) {
    const conta = parseFloat(horasTrabalhadas) * parseFloat(valorHora);
    const twoDecimal = parseFloat(conta.toFixed(2));
    res.json({
      horasTrabalhadas,
      valorHora,
      conta: twoDecimal,
      resultado: `R$ ${twoDecimal}`,
    });
  } else {
    res.json({
      body: {
        horas: "total Horas trabalhadas",
        valor: "Valor da hora trabalhada",
      },
      msg: "FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.",
    });
  }
});

app.post("/api/exer3", (req, res) => {
  const { p1: peso1, p2: peso2, p3: peso3, p4: peso4, p5: peso5 } = req.body;

  if (
    peso1 !== undefined &&
    peso2 !== undefined &&
    peso3 !== undefined &&
    peso4 !== undefined &&
    peso5 !== undefined
  ) {
    const soma =
      parseFloat(peso1) +
      parseFloat(peso2) +
      parseFloat(peso3) +
      parseFloat(peso4) +
      parseFloat(peso5);
    const media = soma / 5;
    res.json({
      peso1,
      peso2,
      peso3,
      peso4,
      peso5,
      resultado: media,
    });
  } else {
    res.json({
      body: {
        p1: "peso 1",
        p2: "peso 2",
        p3: "peso 3",
        p4: "peso 4",
        p5: "peso 5",
      },
      msg: "FUP que solicite o peso de 5 pessoas e calcule a média; Imprima o resultado.",
    });
  }
});

app.post("/api/exer4", (req, res) => {
  const celsius = req.body.celsius;

  if (celsius !== undefined) {
    const fahrenheit = (9 * parseFloat(celsius) + 160) / 5;
    res.json({
      Celsius: celsius,
      Fahrenheit: fahrenheit,
    });
  } else {
    res.json({
      body: { celsius: "temperatura em Celsius" },
      msg: "FUP que leia uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit; Imprima o resultado.",
    });
  }
});

app.post("/api/exer5", (req, res) => {
  const milhas = req.body.milhas;

  if (milhas !== undefined) {
    const quilometros = parseFloat(milhas) * 1.60934;
    res.json({
      milhas,
      quilometros,
    });
  } else {
    res.json({
      body: { milhas: "quantidade de milhas" },
      msg: "FUP que solicite a quantidade de milhas e converta para quilômetros; Imprima o resultado.",
    });
  }
});

app.post("/api/exer6", (req, res) => {
  const { tempo } = req.body;

  if (tempo !== undefined) {
    const tempoMinutos = tempo / 60;
    const tempoHoras = tempo / 3600;
    res.json({
      tempoSegundos: tempo,
      tempoMinutos,
      tempoHoras,
    });
  } else {
    res.json({
      body: { tempo: "duração em segundos" },
      msg: "FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos; Imprima o resultado.",
    });
  }
});
app.post("/api/exer7", (req, res) => {
  const { quilometros } = req.body;
  if (quilometros) {
    const metros = quilometros * 1000;
    const centimetro = metros * 100;
    res.json({
      quilometros,
      metros,
      centimetro,
    });
  } else {
    res.json({
      body: { quilometros: "distancia em quilometros" },
      msg: "FUP que leia um valor em quilometros e converta para metros e centimetro;",
    });
  }
});
app.post("/api/exer8", (req, res) => {
  const { number } = req.body;
  if (number) {
    var final = {};
    function calc(num) {
      final[`${number} * ${num}`] = num * number;
    }
    range(1, 11).forEach((element) => {
      calc(element);
    });
    res.json(final);
  } else {
    res.json({
      body: { number: "numero" },
      msg: "8. FUP que peça um número e imprima a tabuada deste número",
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor aberto na porta 3000");
});
