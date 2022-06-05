function Aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crearMatriz(filas: number, butacas: number): number[][] {
  let matriz: number[][] = new Array(filas);
  for (let indice: number = 0; indice < filas; indice++) {
    matriz[indice] = new Array(butacas);
  }
  return matriz;
}

function completarButacas(
  asientos: number[][],
  filas: number,
  butacas: number
) {
  for (let indiceFilas: number = 0; indiceFilas < filas; indiceFilas++) {
    for (
      let indiceButacas: number = 0;
      indiceButacas < butacas;
      indiceButacas++
    ) {
      asientos[indiceFilas][indiceButacas] = Aleatorio(0, 1);
    }
  }
}

// Se pide que digan una posición de butaca para comprar
function elegirButaca(asientos: number[][]) {
  let fila: number, butaca: number;
  fila = Number(prompt("Indique la fila que desea entre 1 y 20: "));
  butaca = Number(prompt("Indique la butaca que desea 1 2 o 3: "));
  console.log(`Eligió: Butaca ${butaca} de fila ${fila}`);
  asientos[fila - 1][butaca - 1] = 1;
}

function mostrarButacas(asientos: number[][], filas: number, butacas: number) {
  let cadena: string = "";
  for (
    let indiceButacas: number = 0;
    indiceButacas < butacas;
    indiceButacas++
  ) {
    cadena += `B${indiceButacas + 1} `;
  }
  console.log(cadena);
  for (let indiceFilas: number = 0; indiceFilas < filas; indiceFilas++) {
    cadena = "";
    for (
      let indiceButacas: number = 0;
      indiceButacas < butacas;
      indiceButacas++
    ) {
      cadena += ` ${asientos[indiceFilas][indiceButacas]} `;
    }
    cadena += `Fila ${indiceFilas + 1} `;
    console.log(cadena);
  }
  console.log("----------------");
}

let filas: number = 20;
let butacas: number = 3;

let asientos: number[][] = crearMatriz(filas, butacas); // new Array(filas,butacas);

completarButacas(asientos, filas, butacas);
mostrarButacas(asientos, filas, butacas);
elegirButaca(asientos);
mostrarButacas(asientos, filas, butacas);
