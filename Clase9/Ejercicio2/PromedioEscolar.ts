let alumnos: string[] = new Array(10);
let notasPrimerTrimestre: number[] = new Array(10);
let notasSegundoTrimestre: number[] = new Array(10);
let notasTercerTrimestre: number[] = new Array(10);
let cantidadAlumnos: number = 0;

let darConformidad = (mensaje: string): boolean => {
  let rta: string = "";
  rta = prompt(mensaje);
  while (rta !== "S" || rta !== "N") {
    rta = prompt(mensaje);
  }
  if (rta === "S" || rta === "s") {
    return true;
  } else {
    return false;
  }
};

let solicitarNombreAlumno = (): string => {
  let valorNombre: string = "";
  valorNombre = prompt("Indique el Nombre del Alumno:");
  while (valorNombre === "") {
    valorNombre = prompt("Indique el Nombre del Alumno, no puede ser vacio:");
  }
  return valorNombre;
};

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
