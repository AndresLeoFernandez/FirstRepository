let respuesta: string = "";
for (let indice: number = 1; indice <= 100; indice++) {
  if (indice % 2 == 0 || indice % 3 == 0) {
    respuesta += indice + " ";
  }
}
console.log(respuesta);
