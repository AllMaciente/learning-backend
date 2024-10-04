const ServiceExercicio = require("../services/exercicios");

class ControllerExercicio {
  Exercicio1(req, res) {
    try {
      const { num1, num2 } = req.body;
      const resultado = ServiceExercicio.SomaDoisNumeros(num1, num2);
      res.json({ resultado });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Exercicio2(req, res) {
    const { valorHora, horasTrabalhadas } = req.body;
    const resultado = ServiceExercicio.CalculaSalario(
      valorHora,
      horasTrabalhadas
    );
    res.json({ resultado });
  }
  Exercicio3(req, res) {
    const pesos = [
      req.body.peso1,
      req.body.peso2,
      req.body.peso3,
      req.body.peso4,
      req.body.peso5,
    ];
    const resultado = ServiceExercicio.MediaValores(pesos);
    res.json({ resultado });
  }
}

module.exports = new ControllerExercicio();
