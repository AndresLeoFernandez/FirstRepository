let numero: number = Number(prompt("Ingrese un numero: "));
while (numero <= 0) {
  numero = Number(prompt("Ingrese un numero positivo: "));
}
if (numero % 2 === 0) {
  console.log("El numero " + numero + " es par.");
} else {
  console.log("El numero " + numero + " es impar.");
}
