let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let resultado = document.getElementById("resultado");
rotulo1.innerHTML = "Ingrese usuario ";
rotulo2.innerHTML = "Ingrese su contraseña";

btnEnviar.addEventListener("click", () => {
  let contraseña: string = "claveJuan";
  let usuario: string = "Juan";

  let usuarioIngresado: string = dato1.value;
  let contraseñaIngresada: string = dato2.value;

  if (usuario === usuarioIngresado && contraseña === contraseñaIngresada) {
    console.log("Usted ha ingresado correctamente!");
    resultado.innerHTML = "Usted ha ingresado correctamente!";
    resultado.setAttribute("style", "color:green;");
  } else {
    console.log("Usuario o contraseña incorrectos");
    resultado.innerHTML = "Usuario o contraseña incorrectos";
    resultado.setAttribute("style", "color:red;");
  }
});
