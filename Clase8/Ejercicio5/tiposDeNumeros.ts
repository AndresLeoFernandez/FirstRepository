let dimensionArreglo: number = Number(
  prompt(`Ingrese la dimensión del arreglo: `)
);
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;
for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo[indice] = Number(prompt(`Indique el nro que va en la posición ${indice}: `));
  if ( arreglo[indice] > 0 ){
    positivos++
  }
  else if ( arreglo[indice] < 0 ) {
            negativos++
        } else {
            ceros++
        }
}
console.log(arreglo);
console.log(`${positivos} positivos, ${negativos} negativos y ${ceros} ceros`);
 
