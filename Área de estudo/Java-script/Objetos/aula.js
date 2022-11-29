/* objetos 
const natalie = {
    nome: 'Natalie B. S. Sena',
    idade: 23,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
};

console.log(natalie['nome']);
console.log(natalie.idade);
console.log(natalie)
natalie.descrever();

//classes

class Pessoa {
    nome;
    idade;
     
     descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}
const fabio = new Pessoa();
fabio.nome = 'fabio sena';
fabio.idade = 34
fabio.descrever()

class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
     descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}
const fabio = new Pessoa('Fabio', 34);

fabio.descrever()
console.log(fabio)*/

class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
     descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }  else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
const fabio = new Pessoa('Fabio', 23)
const natalie = new Pessoa('Natalie', 23)

compararPessoas(fabio, natalie)
