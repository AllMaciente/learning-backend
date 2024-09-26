const express = require("express");
const { somar } = require("../service/exercicios");

const router = express.Router();

router.post("/1", (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = somar(num1, num2);
  res.json({ resultado });
});
router.post("/1", (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = somar(num1, num2);
  res.json({ resultado });
});

module.exports = router;
