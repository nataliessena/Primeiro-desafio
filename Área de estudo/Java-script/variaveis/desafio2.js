//alt+shift+F
const precoEtanol = 3.45;
const precoGasolina = 4.90;
const kmporLitros = 10;
const distanciaemKm = 100;
const tipoCombustivel = 'gasolina';

const litrosConsumidos = distanciaemKm / kmporLitros;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2))
}


