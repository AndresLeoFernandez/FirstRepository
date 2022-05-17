let nombreAlumno: string = prompt(
  "Ingrese el nombre del alumno (vacío para cortar)"
);
let notaPractica, notaProblemas, notaTeorica, notaFinal: number;
while (nombreAlumno !== "") {
  notaPractica = Number(prompt("Nota práctica: (valor entre 0 y 10)"));
  notaProblemas = Number(prompt("Nota problemas: (Valor entre 0 y 10)"));
  notaTeorica = Number(prompt("Nota teórica: (Valor entre 0 y 10)"));
  if (
    notaPractica <= 10 &&
    notaPractica >= 0 &&
    notaProblemas <= 10 &&
    notaProblemas >= 0 &&
    notaTeorica <= 10 &&
    notaTeorica >= 0
  ) {
    notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
    console.log("La nota final de ", nombreAlumno, " es: ", notaFinal);
  } else {
    console.log("Error en las notas ingresadas");
  }
  nombreAlumno = prompt("Ingrese el nombre del alumno (vacío para cortar)");
}
