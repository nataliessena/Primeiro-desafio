/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

class carros{
    marca;
    cor;
    mediaCombustiveoPorKm;

    constructor (marca, cor, mediaCombustiveoPorKm){
    this.marca = marca;
    this.cor = cor;
    this.mediaCombustiveoPorKm = mediaCombustiveoPorKm
    }
      valorGasto(km, preco, mediaCombustiveoPorKm) {
        const valorGasto = km * preco * mediaCombustiveoPorKm;
        console.log(`${this.marca} ${this.cor} gasta ${valorGasto} reais`)
    }
}

const gol = new carros('gol', 'azul');
gol.valorGasto(20, 3.50, 1 / 10);*/

// Resolução do professor

class Carros {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }
      calcularGastoDePercurso(distanciaKm, precoCombustivel) {
      return (distanciaKm * precoCombustivel * this.gastoMedioPorKm)
    }
  }

const uno = new Carros('fiat', 'prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));

/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoas {
  nome;
  peso;
  altura;

  constructor (nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

   calcularImc() {
    return  this.peso / (this.altura * this.altura);
  }
   classificarImc() {
    const imc = this.calcularImc();
    
    if (imc < 18.5) {
      return('Abaixo do peso');
  } else if (imc >= 18.5 && imc <= 25) {
     return ('Peso Normal');
  } else if (imc >= 25 && imc <= 30) {
      return ('Acima do peso');
  } else if (imc >= 30 && imc <= 40) {
      return ('Obeso');
  } else {
      return ('obesidade grave')
  }
    }
  }

  const José = new Pessoas ('José', 70, 1.75);
  console.log(José);
  console.log(José.calcularImc());
  console.log(José.classificarImc());
