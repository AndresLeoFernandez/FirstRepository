//EJERCICIO 2

let dato421 = document.getElementById("dato421");
let dato422 = document.getElementById("dato422");

let btnEnviar = document.getElementById("enviar42");
let rotulo421 = document.getElementById("rotulo421");
let rotulo422 = document.getElementById("rotulo422");

rotulo421.innerHTML = "Ingrese la cantidad de productos";
rotulo422.innerHTML = "Ingrese el precio del producto";

btnEnviar.addEventListener("click", () => {
  let cantidad: number = Number(dato421.value);
  let precio: number = Number(dato422.value);

  let compra: number = precio * cantidad;

  if (compra > 1000) {
    compra = compra * 0.9;

    console.log("Felicitaciones! Obtuviste un descuento : $ ", compra);
  } else {
    console.log("El total de su compra es : $", compra);
  }
});
