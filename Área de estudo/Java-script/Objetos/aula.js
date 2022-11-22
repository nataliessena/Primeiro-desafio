// oobjetos 
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
