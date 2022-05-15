let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);

  let calcularTabla = (valor1: number, valor2: number) => {
    console.log("Muestro " + valor2 + " valores de la Tabla del " + valor1);
    for (let indice: number = 1; indice <= valor2; indice++) {
      console.log(valor1 + " x " + indice + " = " + valor1 * indice);
    }
  };

  if (num1 > 0 && num2 > 0) {
    calcularTabla(num1, num2);
  }
});
