let intento: number = 1;
let clave: string;
while (intento <= 3 && clave != "eureka") {
  clave = prompt("Ingrese la clave: ", "Intento " + intento);
  intento++;
}
if (clave == "eureka") {
  console.log("Acceso correcto.");
} else {
  console.log("Acceso denegado, realizo 3 intentos fallidos.");
}
