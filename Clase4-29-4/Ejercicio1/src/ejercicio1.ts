/*
Clase 29-4
Presentacion de If
If (condicion) {
} else {
}
*/
let dato41 = document.getElementById("dato");
let btnEnv41 = document.getElementById("btnEnviar");
btnEnv41.addEventListener("click", () => {
  let datoExtraido: number = Number(dato41.value);
  if (datoExtraido > 20) {
    console.log("El numero es mayor a 20.");
  } else {
    console.log("El numero es menor o igual a 20.");
  }
});
