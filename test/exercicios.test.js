const { somar } = require("../service/exercicios");
const { describe, it, expect } = require("@jest/globals");

describe("Test da função somar: ", () => {
  it("somar dois números positivos", () => {
    const resultado = somar(1, 2);
    expect(resultado).toBe(3);
  });
  it("somar um numero negativo com um positivo", () => {
    const resultado = somar(-1, 2);
    expect(resultado).toBe(1);
  });
  it("somar um numero positivo com um negativo", () => {
    const resultado = somar(1, -2);
    expect(resultado).toBe(-1);
  });
  it("somar um numero negativo com um zero", () => {
    const resultado = somar(-1, 0);
    expect(resultado).toBe(-1);
  });
  it("somar um numero negativo com um zero", () => {
    const resultado = somar(-1, 0);
    expect(resultado).toBe(-1);
  });
  it("somar um numero com letra", () => {
    const resultado = somar(1, "a");
    expect(resultado).toBe("erro");
  });
  it("somar um letra com numero", () => {
    const resultado = somar("b", 2);
    expect(resultado).toBe("erro");
  });
});
