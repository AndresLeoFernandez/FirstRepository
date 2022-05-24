function Azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}

function inicializarButacas(sala: boolean[], totalButacas: number) {
  for (let indice: number = 0; indice < totalButacas; indice++) {
    sala[indice] = Azar(2) === 0;
  }
}
function cantidadButacasDesocupadas(
  sala: boolean[],
  totalButacas: number
): number {
  let totalDesocupadas: number = 0;
  for (let indice: number = 0; indice < totalButacas; indice++) {
    if (sala[indice] === false) {
      totalDesocupadas++;
    }
  }
  return totalDesocupadas;
}

let cantidadButacas: number = Number(
  prompt("Indique la cantidad de Butacas que desea que tenga el cine:")
);
let cine: boolean[] = new Array(cantidadButacas);

inicializarButacas(cine, cantidadButacas);
console.log("Imprimo la totalidad de las Butacas:");
console.log(cine.toString());
console.log(
  "Las Butacas Desocupadas son: ",
  cantidadButacasDesocupadas(cine, cantidadButacas)
);
