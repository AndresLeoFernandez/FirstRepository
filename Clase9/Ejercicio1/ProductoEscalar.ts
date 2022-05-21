
/*function cargarArreglo( arreglo: number[]) {
let indice: number;
  for (indice = 0; indice < arreglo.length ; indice++) {
    arreglo[indice] = Number(prompt(`Indique el nro que va en la posición ${indice}: `));
  } 
}*/
let cargarArreglo = ( arreglo: number[], longitud: number)=> {
  for (let indice: number = 0; indice < longitud ; indice++) {
    arreglo[indice] = Number(prompt(`Indique el nro que va en la posición ${indice}: `));
  }
} 
function productoEscalar( arreglo1, arreglo2: number[], longitud:number ): number {
let resultado: number = 0;
  for (let indice:number = 0; indice < longitud ; indice++) {
    resultado += arreglo1[indice] * arreglo2[indice];
  }
  return resultado;
}

let dimensionArreglo: number = Number(prompt(`Ingrese la dimensión del arreglo:`));
let arregloA: number[] = new Array(dimensionArreglo);
let arregloB: number[] = new Array(dimensionArreglo);
cargarArreglo(arregloA,dimensionArreglo);
cargarArreglo(arregloB,dimensionArreglo);
console.log(`Arreglo A=<${arregloA.toString()}> y Arreglo B=<${arregloB.toString()}>`);
console.log(`El producto escalar de ambos arreglos es `, productoEscalar(arregloA,arregloB,dimensionArreglo));