let ingreso: boolean = false;
let valor: number = Number(prompt("Ingrese un numero"));
let mayor: number = valor;
while (valor !== 0) {
  ingreso = true;
  if (mayor < valor) {
    mayor = valor;
  }
  valor = Number(prompt("Ingrese otro numero"));
}
if (ingreso) {
  console.log("El mayor numero ingresado de todos: " + mayor);
}
