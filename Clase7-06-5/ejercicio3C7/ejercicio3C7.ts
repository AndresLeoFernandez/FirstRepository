let numero1 = document.getElementById("numero1");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let num1: number = Number(numero1.value);

  let calcularEsMultiplo = (valor1: number, valor2: number): boolean => {
    return valor2 % valor1 === 0;
  };
  let calcularDivisores = (valor1: number): string => {
    let resultado: string = "";
    for (let indice: number = 1; indice < valor1; indice++) {
      if (calcularEsMultiplo(indice, valor1)) {
        resultado += indice + ", ";
      }
    }
    return resultado;
  };

  let res: string = calcularDivisores(num1);
  console.log("Los divisores de " + num1 + " son: " + res);
});
