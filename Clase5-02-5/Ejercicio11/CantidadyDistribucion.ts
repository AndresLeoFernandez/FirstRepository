let valor: number = Number(prompt("Ingrese un numero"));
let cantidadPositivos: number = 0;
let contador: number = 0;
while (valor !== 0) {
  if (valor > 0) {
    cantidadPositivos++;
  }
  contador++;
  console.log(contador + ") Valor ingresado: " + valor);
  valor = Number(prompt("Ingrese otro numero"));
}
console.log(
  cantidadPositivos +
    " positivos, " +
    (cantidadPositivos * 100) / contador +
    "% del total"
);
