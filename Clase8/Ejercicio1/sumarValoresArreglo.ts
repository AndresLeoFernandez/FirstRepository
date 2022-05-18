let dimensionArreglo: number = Number(
  prompt(`Ingrese la dimensión del arreglo: `)
);
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;
let resultado: number = 0;
for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt(`Indique el nro que va en la posición ${indice}: `)
  );
  resultado += arreglo[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(`El número en la posición ${indice} es: ${arreglo[indice]}`);
}
console.log(`La suma del arreglo es: ${resultado}`);
