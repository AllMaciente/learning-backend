const ServiceExercicio = require("../src/services/exercicios");
const { describe, it, expect } = require("@jest/globals");

describe("Test da função somar: ", () => {
  it("somar dois números positivos", () => {
    const resultado = ServiceExercicio.SomaDoisNumeros(1, 2);
    expect(resultado).toBe(3);
  });
  it("somar um numero negativo com um positivo", () => {
    const resultado = ServiceExercicio.SomaDoisNumeros(-1, 2);
    expect(resultado).toBe(1);
  });
  it("somar um numero positivo com um negativo", () => {
    const resultado = ServiceExercicio.SomaDoisNumeros(1, -2);
    expect(resultado).toBe(-1);
  });
  it("somar um numero negativo com um zero", () => {
    const resultado = ServiceExercicio.SomaDoisNumeros(-1, 0);
    expect(resultado).toBe(-1);
  });
  it("somar um numero negativo com um zero", () => {
    const resultado = ServiceExercicio.SomaDoisNumeros(-1, 0);
    expect(resultado).toBe(-1);
  });
  it("somar um numero com letra", () => {
    expect(() => {
      ServiceExercicio.SomaDoisNumeros(1, "a");
    }).toThrow("Favor informar números");
  });

  it("somar um letra com numero", () => {
    expect(() => {
      ServiceExercicio.SomaDoisNumeros("b", 2);
    }).toThrow("Favor informar números");
  });
});
