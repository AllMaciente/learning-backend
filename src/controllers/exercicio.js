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
}

module.exports = new ControllerExercicio();
