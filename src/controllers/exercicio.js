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
    try {
      const { valorHora, horasTrabalhadas } = req.body;
      const resultado = ServiceExercicio.CalculaSalario(
        valorHora,
        horasTrabalhadas
      );
      res.json({ resultado });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Exercicio3(req, res) {
    try {
      const pesos = [
        req.body.peso1,
        req.body.peso2,
        req.body.peso3,
        req.body.peso4,
        req.body.peso5,
      ];
      const resultado = ServiceExercicio.MediaValores(pesos);
      res.json({ resultado });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
  Exercicio4(req, res) {
    try {
      const { celsius } = req.body;
      const resultado = ServiceExercicio.CelsiusParaFahrenheit(celsius);
      res.json({ resultado });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
  Exercicio5(req, res) {
    try {
      const { milhas } = req.body;
      const resultado = ServiceExercicio.MilhasParaQuilometros(milhas);
      res.json({ resultado });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Exercicio6(req, res) {
    try {
      const { segundos } = req.body;
      const resultado = ServiceExercicio.SegundosParaTempo(segundos);
      res.json(resultado);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Exercicio7(req, res) {
    try {
      const { quilometros } = req.body;
      const resultado =
        ServiceExercicio.QuilometrosParaMetrosCentimetros(quilometros);
      res.json(resultado);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Exercicio8(req, res) {
    try {
      const { numb } = req.body;
      const resultado = ServiceExercicio.Tabuada(numb);
      res.json(resultado);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Exercicio9(req, res) {
    try {
      const notas = [req.body.nota1, req.body.nota2, req.body.nota3];
      const resultado = ServiceExercicio.NotasAluno(notas);
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
  Exercicio10(req, res) {
    try {
      const { altura, gen } = req.body;
      const resultado = ServiceExercicio.IMC(altura, gen);
      res.json({ resultado });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
  Exercicio11(req, res) {
    try {
      const { operacao, numb1, numb2 } = req.body;
      const resultado = ServiceExercicio.Calc(operacao, numb1, numb2);
      res.json({ resultado });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
}

module.exports = new ControllerExercicio();
