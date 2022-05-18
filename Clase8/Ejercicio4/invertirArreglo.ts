let tope: number = Number(prompt(`Indique el nro N: `));
while (tope <= 0) {
  tope = Number(prompt(`Indique otro nro: `));
}
let arreglo: number[] = new Array(tope);
let indice: number;

for (indice = 0; indice < tope; indice++) {
  arreglo[indice] = Number(
    prompt(`Indique el nro que va en la posición ${indice}: `)
  );
}
console.log(arreglo);
let cadena: string = "[";
for (indice = tope - 1; indice >= 0; indice--) {
  console.log(`arreglo[${indice}]= ${arreglo[indice]}`);
  cadena += arreglo[indice] + ",";
}
cadena = cadena.substring(0, cadena.length - 1) + "]";
console.log(cadena);
