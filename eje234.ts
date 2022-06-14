//Declaro las variables que voy a necesitar
let vendedores: string[] = ["Camila", "Franco", "Sofía", "Matías", "Agustina"];
// Datos de Ventas trimestrales
let vendedor1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let semanas: string[] = ["primera", "segunda", "tercera", "cuarta"];
let meses: string[] = ["Enero", "Febrero", "Marzo"];
//--------------------------------------------------------------------------------------
//funcion que retorna la posicion del mayor valor del arreglo con x cantidad de valores
function posicionVentaMaximaPorVendedor(importesVentas: number[]): number {
  let posicion: number = 0;
  let mayorVenta: number = importesVentas[posicion];
  for (let indice: number = 1; indice < importesVentas.length; indice++) {
    if (importesVentas[indice] > mayorVenta) {
      posicion = indice;
      mayorVenta = importesVentas[posicion];
    }
  }
  return posicion;
}
//-------------------------------------------------------------------------------------
//funcion que retorna la posicion del menor valor del arreglo con x cantidad de valores
function posicionVentaMinimaPorVendedor(importesVentas: number[]): number {
  let posicion: number = 0;
  let menorVenta: number = importesVentas[posicion];
  for (let indice: number = 1; indice < importesVentas.length; indice++) {
    if (importesVentas[indice] < menorVenta) {
      posicion = indice;
      menorVenta = importesVentas[posicion];
    }
  }
  return posicion;
}
//-------------------------------------------------------------------------------------
//funcion que retorna el importe correspondiente al promedio Trimestral de un vendor
function promedioTrimestralPorVendedor(importesVentas: number[]): number {
  let promedio: number = 0;
  for (let indice: number = 0; indice < importesVentas.length; indice++) {
    promedio += importesVentas[indice];
  }
  return promedio / importesVentas.length;
}
//-------------------------------------------------------------------------------------
//funcion que retorna el importe correspondiente al promedio Trimestral de un vendor
function promedioMensualPorVendedor(
  importesVentas: number[],
  meses: string[],
  nombreVendedor: string
) {
  const CANTIDAD_DE_SEMANAS = 4;
  let promedioEnero: number = 0;
  let promedioFebrero: number = 0;
  let promedioMarzo: number = 0;
  for (let indice: number = 0; indice < CANTIDAD_DE_SEMANAS; indice++) {
    promedioEnero += importesVentas[indice];
  }
  promedioEnero /= CANTIDAD_DE_SEMANAS;
  for (
    let indice: number = CANTIDAD_DE_SEMANAS;
    indice < CANTIDAD_DE_SEMANAS * 2;
    indice++
  ) {
    promedioFebrero += importesVentas[indice];
  }
  promedioFebrero /= CANTIDAD_DE_SEMANAS;
  for (
    let indice: number = CANTIDAD_DE_SEMANAS * 2;
    indice < importesVentas.length;
    indice++
  ) {
    promedioMarzo += importesVentas[indice];
  }
  promedioMarzo /= CANTIDAD_DE_SEMANAS;
  console.log(
    `El promedio mensual que obtuvo ${nombreVendedor} fueron los siguientes: en el mes de ${meses[0]}: ${promedioEnero} $, en el mes de ${meses[1]}: ${promedioFebrero} $ y en el mes de ${meses[2]}: ${promedioMarzo} $.`
  );
}

//--------------------------------------------------------------------------------------
function ventaMaximaPorVendedor(
  importesVentas: number[],
  semanas: string[],
  nombreVendedor: string
) {
  let maximaVentaActual: number;
  let semanaActual: number;
  let mesActual: string;
  maximaVentaActual = posicionVentaMaximaPorVendedor(importesVentas);
  semanaActual = maximaVentaActual % 4;
  if (maximaVentaActual > 0 && maximaVentaActual < 4) {
    mesActual = meses[0];
  } else if (maximaVentaActual > 3 && maximaVentaActual < 8) {
    mesActual = meses[1];
  } else {
    mesActual = meses[2];
  }
  console.log(
    `Las Ventas maximas de ${nombreVendedor} fueron por ${importesVentas[maximaVentaActual]} en la ${semanas[semanaActual]} semana del mes de ${mesActual} `
  );
}
//--------------------------------------------------------------------------------------
function ventaMinimaPorVendedor(
  importesVentas: number[],
  semanas: string[],
  nombreVendedor: string
) {
  let minimaVentaActual: number;
  let semanaActual: number;
  let mesActual: string;
  minimaVentaActual = posicionVentaMinimaPorVendedor(importesVentas);
  semanaActual = minimaVentaActual % 4;
  if (minimaVentaActual > 0 && minimaVentaActual < 4) {
    mesActual = meses[0];
  } else if (minimaVentaActual > 3 && minimaVentaActual < 8) {
    mesActual = meses[1];
  } else {
    mesActual = meses[2];
  }
  console.log(
    `La menor Venta de ${nombreVendedor} fue por un valor de ${importesVentas[minimaVentaActual]} en la ${semanas[semanaActual]} semana del mes de ${mesActual} `
  );
}
//--------------------------------------------------------------------------------------

//Para cada vendedor mostrar:
//1- su nombre y su venta máxima indicando semana y mes de la misma.
ventaMaximaPorVendedor(vendedor1, semanas, vendedores[0]);
ventaMaximaPorVendedor(vendedor2, semanas, vendedores[1]);
ventaMaximaPorVendedor(vendedor3, semanas, vendedores[2]);
ventaMaximaPorVendedor(vendedor4, semanas, vendedores[3]);
ventaMaximaPorVendedor(vendedor5, semanas, vendedores[4]);

//2- su nombre y su venta mínima indicando semana y mes de la misma.
ventaMinimaPorVendedor(vendedor1, semanas, vendedores[0]);
ventaMinimaPorVendedor(vendedor2, semanas, vendedores[1]);
ventaMinimaPorVendedor(vendedor3, semanas, vendedores[2]);
ventaMinimaPorVendedor(vendedor4, semanas, vendedores[3]);
ventaMinimaPorVendedor(vendedor5, semanas, vendedores[4]);

//3- su nombre y su promedio trimestral de ventas.
console.log(
  `${
    vendedores[0]
  } tuvo un promedio Trimestral de ${promedioTrimestralPorVendedor(vendedor1)}`
);
console.log(
  `${
    vendedores[1]
  } tuvo un promedio Trimestral de ${promedioTrimestralPorVendedor(vendedor2)}`
);
console.log(
  `${
    vendedores[2]
  } tuvo un promedio Trimestral de ${promedioTrimestralPorVendedor(vendedor3)}`
);
console.log(
  `${
    vendedores[3]
  } tuvo un promedio Trimestral de ${promedioTrimestralPorVendedor(vendedor4)}`
);
console.log(
  `${
    vendedores[4]
  } tuvo un promedio Trimestral de ${promedioTrimestralPorVendedor(vendedor5)}`
);
//4- su nombre y su promedio mensual de ventas.
promedioMensualPorVendedor(vendedor1, meses, vendedores[0]);
promedioMensualPorVendedor(vendedor2, meses, vendedores[1]);
promedioMensualPorVendedor(vendedor3, meses, vendedores[2]);
promedioMensualPorVendedor(vendedor4, meses, vendedores[3]);
promedioMensualPorVendedor(vendedor5, meses, vendedores[4]);
