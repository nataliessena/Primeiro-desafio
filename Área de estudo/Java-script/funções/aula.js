// introdução das funções. exemplos

function teste(){
    console.log('teste');
}
teste();
teste();

function sayMyName(name) {
    console.log('Seu nome é: ' + name)
}
sayMyName('Natalie');

function quadrado(valor) {
    return valor * valor
}
const quadradoDe = quadrado (25);
console.log(quadradoDe);

function incrementarJuros(valor, percentualJuros) {
    const acrescimoJuros = (percentualJuros / 100) * valor
    return valor + acrescimoJuros
}
console.log(incrementarJuros(250, 10));
console.log(incrementarJuros(20, 10));
console.log(incrementarJuros(2500, 10));

function main() {
    console.log('Programa Principal')
}
main()

// exemplo da aula anterior: IMC

function calcularImc(peso, altura) {
    return peso / Math.pow (altura, 2)
}
function classificarImc(IMC) {
    if (IMC < 18.5) {
        return('Abaixo do peso');
    } else if (IMC >= 18.5 && IMC <= 25) {
       return ('Peso Normal');
    } else if (IMC >= 25 && IMC <= 30) {
        return ('Acima do peso');
    } else if (IMC >= 30 && IMC <= 40) {
        return ('Obeso');
    } else {
        return ('obesidade grave')
    }
}
(function main() {
    const altura = 1.70
    const peso = 120
    const IMC = calcularImc(peso, altura)
    console.log(IMC.toFixed(1))
    console.log(classificarImc(IMC))
}) ();



