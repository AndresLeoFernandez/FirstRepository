let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];
const NOTA_DE_APROBACION: Number = 6;

// funcion auixiliar
function promedioNota(notas: number[]): number {
  let promedio: number = 0;
  for (let indice: number = 0; indice < notas.length; indice++) {
    promedio += notas[indice];
  }
  promedio /= notas.length;
  console.log(`La comision obtuvo un promedio ${promedio}.`);
  return promedio;
}

//1 - Crear una función que devuelva el mayor promedio y
//a qué comisión corresponde.
function mayorPromedio(
  comisionA: number[],
  comisionB: number[],
  comisionC: number[]
) {
  let promedioA: number = promedioNota(comisionA);
  let promedioB: number = promedioNota(comisionB);
  let promedioC: number = promedioNota(comisionC);
  if (promedioA === promedioB) {
    if (promedioA > promedioC) {
      console.log(
        `El mayor promedio es ${promedioA} y correponde a la Comision A y B ya que son iguales.`
      );
    } else if (promedioA === promedioC) {
      console.log(
        `El mayor promedio es ${promedioC} y las 3 comisiones tienen el mismo promedio.`
      );
    } else {
      console.log(
        `El mayor promedio es ${promedioC} y correponde a la Comision C.`
      );
    }
  } else if (promedioA > promedioB) {
    if (promedioA > promedioC) {
      console.log(
        `El mayor promedio es ${promedioA} y correponde a la Comision A`
      );
    } else if (promedioA === promedioC) {
      console.log(
        `El mayor promedio es ${promedioC} y correponde a la Comision  A y C porque son iguales`
      );
    } else {
      console.log(
        `El mayor promedio es ${promedioC} y correponde a la Comision C`
      );
    }
  } else {
    if (promedioB > promedioC) {
      console.log(
        `El mayor promedio es ${promedioB} y correponde a la Comision B`
      );
    } else if (promedioB === promedioC) {
      console.log(
        `El mayor promedio es ${promedioC} y correponde a la Comision  B y C porque son iguales`
      );
    } else {
      console.log(
        `El mayor promedio es ${promedioC} y correponde a la Comision  C`
      );
    }
  }
}

//2- Crear una función que devuelva el menor promedio y a qué comisión corresponde.
function menorPromedio(
  comisionA: number[],
  comisionB: number[],
  comisionC: number[]
) {
  let promedioA: number = promedioNota(comisionA);
  let promedioB: number = promedioNota(comisionB);
  let promedioC: number = promedioNota(comisionC);
  if (promedioA === promedioB) {
    if (promedioA < promedioC) {
      console.log(
        `El menor promedio es ${promedioA} y correponde a la Comision A y B ya que son iguales.`
      );
    } else if (promedioA === promedioC) {
      console.log(
        `El menor promedio es ${promedioC} y las 3 comisiones tienen el mismo promedio.`
      );
    } else {
      console.log(
        `El menor promedio es ${promedioC} y correponde a la Comision C.`
      );
    }
  } else if (promedioA < promedioB) {
    if (promedioA < promedioC) {
      console.log(
        `El menor promedio es ${promedioA} y correponde a la Comision A`
      );
    } else if (promedioA === promedioC) {
      console.log(
        `El menor promedio es ${promedioC} y correponde a la Comision  A y C porque son iguales`
      );
    } else {
      console.log(
        `El menor promedio es ${promedioC} y correponde a la Comision C`
      );
    }
  } else {
    if (promedioB < promedioC) {
      console.log(
        `El menor promedio es ${promedioB} y correponde a la Comision B`
      );
    } else if (promedioB === promedioC) {
      console.log(
        `El menor promedio es ${promedioC} y correponde a la Comision  B y C porque son iguales`
      );
    } else {
      console.log(
        `El menor promedio es ${promedioC} y correponde a la Comision  C`
      );
    }
  }
}
//3- Teniendo en cuenta que la materia se aprueba con 6, crear una función que devuelva
// la cantidad de desaprobados en una comisión, mostrar el resultado para cada comisión
function cantidadDeDesaprobados(notas: number[]): number {
  let respuesta: number = 0;
  for (let indice: number = 0; indice < notas.length; indice++) {
    if (notas[indice] < NOTA_DE_APROBACION) {
      respuesta++;
    }
  }
  return respuesta;
}
//4-Crear una función que devuelva la menor nota de una comisión,
// mostrar el resultado para cada comisión.
function menorNotaPorComision(notas: number[]): number {
  let posicion: number = 0;
  let menor: number = notas[posicion];
  for (let indice: number = 0; indice < notas.length; indice++) {
    if (notas[indice] < menor) {
      menor = notas[indice];
      posicion = indice;
    }
  }
  return notas[posicion];
}

//------------------------------------------------------
mayorPromedio(comisionA, comisionB, comisionC);
menorPromedio(comisionA, comisionB, comisionC);
console.log(
  `La cantida de desaprobados en la Comision A fueron: ${cantidadDeDesaprobados(
    comisionA
  )}`
);
console.log(
  `La cantida de desaprobados en la Comision B fueron: ${cantidadDeDesaprobados(
    comisionB
  )}`
);
console.log(
  `La cantida de desaprobados en la Comision C fueron: ${cantidadDeDesaprobados(
    comisionC
  )}`
);
console.log(
  `La comision A obtuvo su menor nota que fue un ${menorNotaPorComision(
    comisionA
  )}.`
);
console.log(
  `La comision B obtuvo su menor nota que fue un ${menorNotaPorComision(
    comisionB
  )}.`
);
console.log(
  `La comision C obtuvo su menor nota que fue un ${menorNotaPorComision(
    comisionC
  )}.`
);
