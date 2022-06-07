function cargarNotas(notasAlumno: number[], meses: string[]) {
  for (let indice: number = 0; indice < notasAlumno.length; indice++) {
    notasAlumno[indice] = Number(
      prompt(`Indique la nota que obtuvo en el mes de ${meses[indice]}:`)
    );
  }
}
function mesesQueDesaprobo(notasAlumno: number[], meses: string[]) {
  let respuesta: string = "";
  let desaprobo: boolean = false;
  for (let indice: number = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] < 6) {
      desaprobo = true;
      respuesta += `${meses[indice]} - `;
    }
  }
  if (desaprobo === true) {
    console.log(`El alumno desaprobo los siguientes meses: ${respuesta} `);
  } else {
    console.log(`El alumno no desaprobo.`);
  }
}
function menorNota(notasAlumno: number[], meses: string[]) {
  let posicion: number = 0;
  let menor: number = notasAlumno[posicion];
  for (let indice: number = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] < menor) {
      menor = notasAlumno[indice];
      posicion = indice;
    }
  }
  console.log(
    `El alumno obtuvo su menor nota que fue ${notasAlumno[posicion]} en el mes de ${meses[posicion]}.`
  );
}
function mayorNota(notasAlumno: number[], meses: string[]) {
  let posicion: number = 0;
  let mayor: number = notasAlumno[posicion];
  for (let indice: number = 0; indice < notasAlumno.length; indice++) {
    if (notasAlumno[indice] > mayor) {
      mayor = notasAlumno[indice];
      posicion = indice;
    }
  }
  console.log(
    `El alumno obtuvo su mayor nota que fue ${notasAlumno[posicion]} en el mes de ${meses[posicion]}.`
  );
}
function promedioNota(notasAlumno: number[]) {
  let promedio: number = 0;
  for (let indice: number = 0; indice < notasAlumno.length; indice++) {
    promedio += notasAlumno[indice];
  }
  promedio /= notasAlumno.length;
  console.log(`El alumno obtuvo un promedio ${promedio}.`);
}

let dimensionArreglo: number = 10;
let meses: string[] = [
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
let notasAlumno: number[] = new Array(dimensionArreglo);
cargarNotas(notasAlumno, meses);
console.log("Notas:" + notasAlumno.toString());
mesesQueDesaprobo(notasAlumno, meses);
menorNota(notasAlumno, meses);
mayorNota(notasAlumno, meses);
promedioNota(notasAlumno);
