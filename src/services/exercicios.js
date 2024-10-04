//# Estruturação

class ServiceExercicio {
  // 1. Função que solicita dois números reais, realiza a soma e retorna o resultado.
  SomaDoisNumeros(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Favor informar números");
    }
    return num1 + num2;
  }

  // 2. Função que calcula o salário de um trabalhador baseado no valor da hora e quantidade de horas trabalhadas.
  CalculaSalario(valorHora, horasTrabalhadas) {
    if (isNaN(valorHora) || isNaN(horasTrabalhadas)) {
      throw new Error("informe apenas numeros");
    }
    return valorHora * horasTrabalhadas;
  }

  // 3. Função que calcula a média de peso de 5 pessoas.
  MediaValores(numbs) {
    var soma = 0;
    for (var i = 0; i < numbs.length; i++) {
      if (isNaN(numbs[i])) {
        throw new Error(`o valor ${numbs[i]} não e um numero`);
      }
      soma += numbs[i];
    }
    return soma / numbs.length;
  }

  // 4. Função que converte temperatura de Celsius para Fahrenheit.
  CelsiusParaFahrenheit(celsius) {
    return (9 * celsius) / 5 + 32;
  }

  // 5. Função que converte milhas para quilômetros.
  MilhasParaQuilometros(milhas) {
    return milhas * 1.60934;
  }

  // 6. Função que converte segundos para horas, minutos e segundos.
  SegundosParaTempo(segundos) {
    const minutos = segundos / 60;
    const horas = minutos / 60;
    return { horas, minutos, segundos };
  }

  // 7. Função que converte quilômetros para metros e centímetros.
  QuilometrosParaMetrosCentimetros(quilometros) {
    var metros = quilometros * 1000;
    var centimetros = metros * 100;
    return {
      quilometros,
      metros,
      centimetros,
    };
  }

  // 8. Função que retorna a tabuada de um número.
  Tabuada(numero) {
    var resultado = {};
    for (var i = 1; i <= 10; i++) {
      resultado[`${i} x ${numero}`] = i * numero;
    }
    return resultado;
  }

  // # Estrutura de Condição

  // 9. FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 7, a mensagem "Recuperação", caso a média se igual ou superior a 5 e inferior a 7, ou a mensagem “Reprovado”, caso a média seja inferior a 5.
  NotasAluno(notas) {
    const media = mediaValores(notas);
    if (media < 5) {
      return { media, msg: "Reprovado" };
    } else if (media < 7) {
      return { media, msg: "Recuperação" };
    } else {
      return { media, msg: "Aprovado" };
    }
  }
  // 10. FUP que calcule o IMC -solicite se é H ou M e faça o calculo;
  // - para homens: (72.7*h)-58
  // - para mulheres: (62.1*h)-44.7
  IMC(altura, gen) {
    if (gen.toUpperCase() == "H") {
      return 72.7 * altura - 58;
    } else if (gen.toUpperCase() == "M") {
      return 62.1 * altura - 44.7;
    }
    return "erro";
  }

  // 11. FUP que solicite a operação (+,-,/,*) e dois numeros, calcule a operação solicitada e informe o resultado;
  Calc(operacao, numb1, numb2) {
    switch (operacao) {
      case "+":
        return numb1 + numb2;
      case "-":
        return numb1 - numb2;
      case "*":
        return numb1 * numb2;
      case "/":
        return numb1 / numb2;
      default:
        return "falta operação";
    }
  }
  // 12. FUP que peça um número e imprima uma mensagem se esse número é positivo ou negativo;

  // 13. FUP que solicite um numero e veja se ele é par ou impar;
  //     Dica: Pares ou Ímpares? Utilize o resto da divisão:
  //     ` if(num % 2 == 0) `

  // 15. FUP que solicite dois numero e verifique qual é o maior;
  // 16. FUP que leia 3 valores a,b,c e verifique se eles formam ou não um triângulo. Caso os valores formem um triângulo, solicite a base e a altura, calcule (base * altura / 2) e escreva a área deste triângulo. Se não formam triângulo escreva os valores lidos.
  // 17. FUP que calcule o imposto de renda de um contribuinte. Os dados de entrada são: o CPF(int), o número de dependentes e a renda mensal. Para cada dependente será feito um desconto de 5% do salário mínimo por dependente. Os valores da alíquota para cálculo do imposto são:

  // # Para melhorar a sua matematica

  // 17. FUP que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5, respectivamente. - media ponderada
  // 18. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.
  // 19. FUP que calcule os juros de determinado capital, taxa e tempo informados pelo usuário e apresente na tela o valor do capital informado, os juros e o valor do montante da operação. O valor da taxa deverá ser informado em valores decimais, ex.: 5% informar 0.05 e o tempo devera ser informado em dias.

  // 20. FUP que leia:
  // Fórmula : ValorTotal = (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)

  // 21. FUP para uma Investigação Criminal. Faça 8 perguntas para uma pessoa sobre um crime. As perguntas são:

  // 22. FUP que leia a velocidade permitida em uma via, a velocidade praticada por um motorista, e informe se o mesmo receberá multa ou não, e o valor a pagar. Caso tenha excedido a velocidade em até 20% da permitida, o motorista receberá uma multa de R$ 102,00. Caso tenha excedido a velocidade acima de 20% da permitida, o motorista receberá uma multa de R$ 500,00.
  // # Estrutura de Repetição

  // 23. FUP que solicite um numero e escreva "Batata" enquanto o usuario digita 1;
  // 24. FUP que imprima a tabuada de um numero de 0 a 10;
  // 25. FUP que solicite quantidade de pessoas, depois solicite a altura de cada uma e calcule a media da altura das pessoas;
  // 26. FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;
  // 27. FUP que calcule o peso de um elevador, onde cada pessoa que entra informa o peso, caso atinga 180KG, o elevador informa que esta no peso maximo;
  // 28. FUP que leia 10 números e verifique quantos destes números são negativos.
}

module.exports = new ServiceExercicio();
