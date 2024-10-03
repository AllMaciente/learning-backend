const { somar: somaDoisNumeros } = require("../service/exercicios");
const { describe, it, expect } = require("@jest/globals");

describe("Test da função somar: ", () => {
  it("somar dois números positivos", () => {
    const resultado = somaDoisNumeros(1, 2);
    expect(resultado).toBe(3);
  });
  it("somar um numero negativo com um positivo", () => {
    const resultado = somaDoisNumeros(-1, 2);
    expect(resultado).toBe(1);
  });
  it("somar um numero positivo com um negativo", () => {
    const resultado = somaDoisNumeros(1, -2);
    expect(resultado).toBe(-1);
  });
  it("somar um numero negativo com um zero", () => {
    const resultado = somaDoisNumeros(-1, 0);
    expect(resultado).toBe(-1);
  });
  it("somar um numero negativo com um zero", () => {
    const resultado = somaDoisNumeros(-1, 0);
    expect(resultado).toBe(-1);
  });
  it("somar um numero com letra", () => {
    const funcSomar = somaDoisNumeros(1, "a");
    expect(funcSomar).toThrow("Informe um número");
  });
  it("somar um letra com numero", () => {
    const funcSomar = somaDoisNumeros("b", 2);
    expect(funcSomar).toThrow("Informe um número");
  });
});
