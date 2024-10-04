const express = require("express");
const ControllerExercicio = require("../controllers/exercicio");
const router = express.Router();

router.post("/1", ControllerExercicio.Exercicio1);
router.post("/2", ControllerExercicio.Exercicio2);

router.post("/3", ControllerExercicio.Exercicio3);

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
