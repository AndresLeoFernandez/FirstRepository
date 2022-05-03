let nota, suma, promedio, contador: number;
contador = 1;
suma = 0;
while (contador <= 10) {
  nota = Number(prompt("Ingrese una nota: "));
  suma = suma + nota; // suma+=nota;
  contador = contador + 1; // contador++;
}
promedio = suma / 10;
console.log("El promedio de las notas es: " + promedio);
