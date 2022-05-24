let alumnos: string[] = new Array(5);
let notasPrimerTrimestre: number[] = new Array(5);
let notasSegundoTrimestre: number[] = new Array(5);
let notasTercerTrimestre: number[] = new Array(5);
let cantidadAlumnos: number = 0;

function darConformidad(mensaje: string): boolean {
  let rta;
  rta = prompt(mensaje);

  if (rta === "S" || rta === "s") {
    return true;
  } else {
    return false;
  }
}

function solicitarNombreAlumno(): string {
  let valorNombre: string = "";
  valorNombre = String(prompt("Indique el Nombre del Alumno:"));
  while (valorNombre === "") {
    valorNombre = String(
      prompt("Indique el Nombre del Alumno, no puede ser vacio:")
    );
  }
  return valorNombre;
}

let solicitarNota = (): number => {
  let valorNota: number = 0;
  valorNota = Number(prompt("Indique la Nota del Alumno:"));
  while (valorNota < 0 || valorNota > 10) {
    valorNota = Number(prompt("La Nota debe estar entre 0 y 10: "));
  }
  return valorNota;
};

let cargarNotaAlumno = (notasAlumnado: number[], orden: number) => {
  notasAlumnado[orden] = solicitarNota();
};

let promediosAnuales = (
  alumnado: string[],
  primerTrimestre: number[],
  segundoTrimestre: number[],
  tercerTrimestre: number[],
  orden: number
): number[] => {
  let promedioAnual: number[] = new Array(orden);
  for (
    let indiceAlumnado: number = 0;
    indiceAlumnado < orden;
    indiceAlumnado++
  ) {
    promedioAnual[indiceAlumnado] =
      (primerTrimestre[indiceAlumnado] +
        segundoTrimestre[indiceAlumnado] +
        tercerTrimestre[indiceAlumnado]) /
      3;
    console.log(
      `${alumnado[indiceAlumnado]} obtuvo las siguientes notas: 1º Trimestre: ${primerTrimestre[indiceAlumnado]} - 2º Trimestre: ${segundoTrimestre[indiceAlumnado]} - 3º Trimestre: ${tercerTrimestre[indiceAlumnado]}  el promedio Anual es ${promedioAnual[indiceAlumnado]}`
    );
  }
  return promedioAnual;
};

let cargarAlumno = (alumnado: string[], orden: number): number => {
  let deseaCargarNota: boolean;
  alumnado[orden] = solicitarNombreAlumno();
  deseaCargarNota = darConformidad(
    "¿Desea cargar Nota del Primer Trimestre? (S/N)"
  );
  if (deseaCargarNota) {
    cargarNotaAlumno(notasPrimerTrimestre, orden);
  }
  deseaCargarNota = darConformidad(
    "¿Desea cargar Nota del Segundo Trimestre? (S/N)"
  );
  if (deseaCargarNota) {
    cargarNotaAlumno(notasSegundoTrimestre, orden);
  }
  deseaCargarNota = darConformidad(
    "¿Desea cargar Nota del Tercer Trimestre? (S/N)"
  );
  if (deseaCargarNota) {
    cargarNotaAlumno(notasTercerTrimestre, orden);
  }
  return orden + 1;
};

let deseaCargarAlumno: boolean = true;

while (deseaCargarAlumno) {
  console.log(alumnos);
  console.log(notasPrimerTrimestre);
  console.log(notasSegundoTrimestre);
  console.log(notasTercerTrimestre);
  console.log(cantidadAlumnos);
  cantidadAlumnos = cargarAlumno(alumnos, cantidadAlumnos);
  deseaCargarAlumno = darConformidad("Desea Cargar Alumno (S/N)");
}
console.log(cantidadAlumnos);
console.log(
  promediosAnuales(
    alumnos,
    notasPrimerTrimestre,
    notasSegundoTrimestre,
    notasTercerTrimestre,
    cantidadAlumnos
  ).toString()
);
console.log();
