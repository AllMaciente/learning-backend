const express = require("express");
const ControllerExercicio = require("../controllers/exercicio");
const router = express.Router();

router.post("/1", ControllerExercicio.Exercicio1);
router.post("/2", ControllerExercicio.Exercicio2);

router.post("/3", ControllerExercicio.Exercicio3);

router.post("/4", ControllerExercicio.Exercicio4);

router.post("/5", ControllerExercicio.Exercicio5);

router.post("/6", ControllerExercicio.Exercicio6);

router.post("/7", ControllerExercicio.Exercicio7);

router.post("/8", ControllerExercicio.Exercicio8);

router.post("/9", ControllerExercicio.Exercicio9);

router.post("/10", ControllerExercicio.Exercicio10);

router.post("/11", ControllerExercicio.Exercicio11);
module.exports = router;
