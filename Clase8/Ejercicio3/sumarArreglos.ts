// Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.
// El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario
const tope: number = 6;
let arregloA: number[] = new Array(tope);
let arregloB: number[] = new Array(tope);
let sumaAB: number[] = new Array(tope);
let indice: number;

for (indice = 0; indice < tope; indice++) {
  arregloA[indice] = Number(
    prompt(`Indique el nro que va en la posición ${indice + 1} del vector 1: `)
  );
}
console.log(arregloA);
for (indice = 0; indice < tope; indice++) {
  arregloB[indice] = Number(
    prompt(`Indique el nro que va en la posición ${indice + 1} del vector 2: `)
  );
}
console.log(arregloB);

for (indice = 0; indice < tope; indice++) {
  sumaAB[indice] = arregloA[indice] + arregloB[indice];
  console.log(`Suma[${indice}]= ${sumaAB[indice]}`);
}
console.log(sumaAB);
