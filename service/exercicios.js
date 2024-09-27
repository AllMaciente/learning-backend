// exercicios.js

// 1. Função que solicita dois números reais, realiza a soma e retorna o resultado.
function somaDoisNumeros(num1, num2) {
  return num1 + num2;
}

// 2. Função que calcula o salário de um trabalhador baseado no valor da hora e quantidade de horas trabalhadas.
function calculaSalario(valorHora, horasTrabalhadas) {
  return valorHora * horasTrabalhadas;
}

// 3. Função que calcula a média de peso de 5 pessoas.
function mediaPeso(pesos) {
  var somaPesos = 0;
  for (var i = 0; i < pesos.length; i++) {
    somaPesos += pesos[i];
  }
  return somaPesos / pesos.length;
}

// 4. Função que converte temperatura de Celsius para Fahrenheit.
function celsiusParaFahrenheit(celsius) {
  return (9 * celsius / 5) + 32;
}

// 5. Função que converte milhas para quilômetros.
function milhasParaQuilometros(milhas) {
  return milhas * 1.60934;
}

// 6. Função que converte segundos para horas, minutos e segundos.
function segundosParaTempo(segundos) {
  var horas = Math.floor(segundos / 3600);
  var minutos = Math.floor((segundos % 3600) / 60);
  var segundosRestantes = segundos % 60;
  return horas + "h " + minutos + "m " + segundosRestantes + "s";
}

// 7. Função que converte quilômetros para metros e centímetros.
function quilometrosParaMetrosCentimetros(quilometros) {
  var metros = quilometros * 1000;
  var centimetros = metros * 100;
  return {
    metros: metros,
    centimetros: centimetros,
  };
}

// 8. Função que retorna a tabuada de um número.
function tabuada(numero) {
  var resultado = [];
  for (var i = 1; i <= 10; i++) {
    resultado.push(numero + " x " + i + " = " + (numero * i));
  }
  return resultado;
}

// 9. Função que verifica se um número é par ou ímpar.
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return 'par';
  } else {
    return 'ímpar';
  }
}

// 10. Função que calcula a área de um triângulo.
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// 11. Função que calcula a área de um círculo.
function areaCirculo(raio) {
  return Math.PI * raio * raio;
}

// 12. Função que converte um número em string em um número inteiro.
function stringParaInteiro(str) {
  return parseInt(str, 10);
}

// 13. Função que verifica se um número é primo.
function isPrimo(numero) {
  if (numero <= 1) return false;
  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

// 14. Função que retorna o fatorial de um número.
function fatorial(n) {
  var resultado = 1;
  for (var i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// 15. Função que inverte uma string.
function inverterString(str) {
  var resultado = '';
  for (var i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

// 16. Função que calcula a soma de um array de números.
function somaArray(array) {
  var soma = 0;
  for (var i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

// 17. Função que retorna o maior número de um array.
function maiorNumero(array) {
  var maior = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

// 18. Função que retorna o menor número de um array.
function menorNumero(array) {
  var menor = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  return menor;
}

// 19. Função que verifica se um número está em um array.
function numeroNoArray(numero, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === numero) {
      return true;
    }
  }
  return false;
}

// 20. Função que remove duplicatas de um array.
function removerDuplicatas(array) {
  var resultados = [];
  for (var i = 0; i < array.length; i++) {
    if (resultados.indexOf(array[i]) === -1) {
      resultados.push(array[i]);
    }
  }
  return resultados;
}

// 21. Função que conta quantas vogais existem em uma string.
function contarVogais(str) {
  var contador = 0;
  var vogais = 'aeiouAEIOU';
  for (var i = 0; i < str.length; i++) {
    if (vogais.indexOf(str[i]) !== -1) {
      contador++;
    }
  }
  return contador;
}

// 22. Função que verifica se uma string é um palíndromo.
function isPalindromo(str) {
  var strLimpa = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Za-z0-9]/)) {
      strLimpa += str[i].toLowerCase();
    }
  }
  var strInvertida = '';
  for (var i = strLimpa.length - 1; i >= 0; i--) {
    strInvertida += strLimpa[i];
  }
  return strLimpa === strInvertida;
}

// 23. Função que gera um número aleatório entre dois limites.
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 24. Função que verifica se um ano é bissexto.
function isBissexto(ano) {
  if (ano % 4 === 0) {
    if (ano % 100 === 0) {
      if (ano % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
}

// 25. Função que converte horas em minutos.
function horasParaMinutos(horas) {
  return horas * 60;
}

// 26. Função que calcula a diferença em dias entre duas datas.
function diferencaDias(data1, data2) {
  var umDia = 24 * 60 * 60 * 1000; // Milissegundos em um dia
  return Math.round(Math.abs((data1 - data2) / umDia));
}

// 27. Função que calcula a hipotenusa de um triângulo retângulo.
function hipotenusa(a, b) {
  return Math.sqrt(a * a + b * b);
}

// 28. Função que conta a quantidade de palavras em uma string.
function contarPalavras(str) {
  var palavras = str.trim().split(/\s+/);
  return palavras.length;
}

// Exporte todas as funções
module.exports = {
  somaDoisNumeros,
  calculaSalario,
  mediaPeso,
  celsiusParaFahrenheit,
  milhasParaQuilometros,
  segundosParaTempo,
  quilometrosParaMetrosCentimetros,
  tabuada,
  parOuImpar,
  areaTriangulo,
  areaCirculo,
  stringParaInteiro,
  isPrimo,
  fatorial,
  inverterString,
  somaArray,
  maiorNumero,
  menorNumero,
  numeroNoArray,
  removerDuplicatas,
  contarVogais,
  isPalindromo,
  numeroAleatorio,
  isBissexto,
  horasParaMinutos,
  diferencaDias,
  hipotenusa,
  contarPalavras,
};
