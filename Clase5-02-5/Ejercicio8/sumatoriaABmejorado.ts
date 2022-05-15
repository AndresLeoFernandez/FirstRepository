let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
  let calcularSumatoria = (valor1: number, valor2: number): number => {
    let valorResultado: number = 0;
    console.log("Suma de valores desde " + valor1 + " hasta " + valor2);
    let cadena: string = "";
    while (valor1 <= valor2) {
      valorResultado += valor1;
      cadena += valor1 + " + ";
      valor1++;
    }
    console.log(
      cadena.substring(0, cadena.length - 2) + " = " + valorResultado
    );
    return valorResultado;
  };
  let respuesta: number;
  if (num1 <= num2) {
    respuesta = calcularSumatoria(num1, num2);
  } else {
    respuesta = calcularSumatoria(num2, num1);
  }
  document.getElementById("resultado").value = respuesta;
});
