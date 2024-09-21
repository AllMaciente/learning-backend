const express = require("express");
const { importarModulos } = require("../utils/dynamicImport");

const router = express.Router();

(async () => {
  const exer = await importarModulos("../exercicios");
  console.log("Módulos importados:", exer);

  router.post("/1", (req, res) => {
    const { code, ret } = exer.exer1(req.body);
    res.status(code).json(ret);
  });
  router.post("/8", (req, res) => {
    const { code, ret } = exer.exer8(req.body);
    res.status(code).json(ret);
  });
})();

module.exports = router;
