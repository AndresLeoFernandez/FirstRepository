//Genera un número aleatorio entre min y max
function Aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inicializarEdades(equipo: number[], totalJugadores: number) {
  for (let indice: number = 0; indice < totalJugadores; indice++) {
    equipo[indice] = Aleatorio(3, 7);
  }
}

function promedio(arreglo: number[], total: number): number {
  let suma: number = 0;
  for (let indice: number = 0; indice < total; indice++) {
    suma += arreglo[indice];
  }
  return (suma /= total);
}

let tope: number = Number(
  prompt(`Indique la cantidad de Alumnos a promediar: `)
);
while (tope <= 0) {
  tope = Number(prompt(`Indique otro nro: `));
}

let edadesJugadores: number[] = new Array(tope);
inicializarEdades(edadesJugadores, tope);
console.log(
  `Las Edades de los ${tope} jugadores del equipo son: ${edadesJugadores.toString()} y el promedio es igual a ${promedio(
    edadesJugadores,
    tope
  )}`
);
