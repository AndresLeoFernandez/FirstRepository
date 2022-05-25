let cargarArreglo = (arreglo: number[], tope: number) => {
  for (let indice: number = 0; indice < tope; indice++) {
    arreglo[indice] = Number(
      prompt(`Indique el nro que va en la posición ${indice}: `)
    );
  }
};

let multiplicarArreglos = (
  arreglo1: number[],
  arreglo2: number[],
  resultado: number[],
  tope: number
) => {
  for (let indice: number = 0; indice < tope; indice++) {
    resultado[indice] = arreglo1[indice] * arreglo2[indice];
    console.log(
      `Multiplicacion[${indice}]= ${arreglo1[indice]} x ${arreglo2[indice]} = ${resultado[indice]}`
    );
  }
};

let dimensionArreglo: number = Number(
  prompt(`Ingrese la dimensión del arreglo: `)
);
let arregloA: number[] = new Array(dimensionArreglo);
let arregloB: number[] = new Array(dimensionArreglo);
let resultadoAxB: number[] = new Array(dimensionArreglo);
cargarArreglo(arregloA, dimensionArreglo);
cargarArreglo(arregloB, dimensionArreglo);
multiplicarArreglos(arregloA, arregloB, resultadoAxB, dimensionArreglo);
console.log(arregloA);
console.log(arregloB);
console.log(resultadoAxB);
