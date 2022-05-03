let llegadaColectivo;
console.log("Esperando el colectivo");
llegadaColectivo = prompt("Llego el colectivo? (S/N): ");
while (llegadaColectivo == "N") {
  console.log("Esperando el colectivo");
  llegadaColectivo = prompt("Llego el colectivo? (S/N): ");
}
console.log("Llego el colectivo");
