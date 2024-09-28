const express = require("express");
const {
  calculaSalario,
  somaDoisNumeros,
  celsiusParaFahrenheit,
  milhasParaQuilometros,
  segundosParaTempo,
  quilometrosParaMetrosCentimetros,
  tabuada,
  mediaValores,
  notasAlunos,
  IMC,
  calc,
} = require("../service/exercicios");

const router = express.Router();

router.post("/1", (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = somaDoisNumeros(num1, num2);
  res.json({ resultado });
});
router.post("/2", (req, res) => {
  const { valorHora, horasTrabalhadas } = req.body;
  const resultado = calculaSalario(valorHora, horasTrabalhadas);
  res.json({ resultado });
});

router.post("/3", (req, res) => {
  const pesos = [
    req.body.peso1,
    req.body.peso2,
    req.body.peso3,
    req.body.peso4,
    req.body.peso5,
  ];
  const resultado = mediaValores(pesos);
  res.json({ resultado });
});

router.post("/4", (req, res) => {
  const { celsius } = req.body;
  const resultado = celsiusParaFahrenheit(celsius);
  res.json({ resultado });
});

router.post("/5", (req, res) => {
  const { milhas } = req.body;
  const resultado = milhasParaQuilometros(milhas);
  res.json({ resultado });
});

router.post("/6", (req, res) => {
  const { segundos } = req.body;
  const resultado = segundosParaTempo(segundos);
  res.json(resultado);
});

router.post("/7", (req, res) => {
  const { quilometros } = req.body;
  const resultado = quilometrosParaMetrosCentimetros(quilometros);
  res.json(resultado);
});

router.post("/8", (req, res) => {
  const { numb } = req.body;
  const resultado = tabuada(numb);
  res.json(resultado);
});

router.post("/9", (req, res) => {
  const notas = [req.body.nota1, req.body.nota2, req.body.nota3];
  const resultado = notasAlunos(notas);
  res.json(resultado);
});

router.post("/10", (req, res) => {
  const { altura, gen } = req.body;
  const resultado = IMC(altura, gen);
  res.json({ resultado });
});

router.post("/11", (req, res) => {
  const { operacao, numb1, numb2 } = req.body;
  const resultado = calc(operacao, numb1, numb2);
  res.json({ resultado });
});
module.exports = router;
