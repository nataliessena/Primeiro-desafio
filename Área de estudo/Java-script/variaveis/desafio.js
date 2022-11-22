
const precoCombustivel = 3.45;
const kmporLitros = 10;
const distanciaemKm = 120;

const litrosConsumidos = distanciaemKm / kmporLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(3));

