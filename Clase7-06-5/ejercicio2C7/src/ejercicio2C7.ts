let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
  let calcularEsMultiplo = (valor1: number, valor2: number): boolean => {
    return valor2 % valor1 == 0;
  };

  let res: number = calcularEsMultiplo(num1, num2);
  if (res === true) {
    console.log(num1 + " es multiplo de " + num2);
  } else {
    console.log(num1 + " no es multiplo de " + num2);
  }
});
