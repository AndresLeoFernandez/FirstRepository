let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
  let calcularPotencia = (base: number, potencia: number): number => {
    let resultado: number = 0;
    if (potencia === 0) {
      resultado = 1;
    } else {
      resultado = base;
      for (let i: number = 1; i < potencia; i++) {
        resultado = resultado * base;
      }
    }
    return resultado;
  };
  let res: number;
  if (num2 >= 0) {
    res = calcularPotencia(num1, num2);
    console.log("El resultado es", res);
  } else {
    console.log("El exponente debe ser mayor a 0");
  }
});
