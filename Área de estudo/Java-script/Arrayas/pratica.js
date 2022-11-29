/*1) Crie um programa que dado um número imprima a sua tabuada.

const tabuada = [8]
for (let i = 1; i <= 10; i++) {
    console.log(i * tabuada) ;
}
Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const lista = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i] ;

    if (numero % 2 === 0) {
        console.log(numero);
    
    }
}
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const numerosPares = []
for (let i =10; i <= 50; i++) {
    const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
}
console.log(numerosPares);
exemplo
const numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros.push(i);
    }

    console.log(numeros);
    5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
    const medias = [2, 7, 3, 8, 10, 4, 6, 1]

    for (let i = 0; i < medias.length; i++) {
          const recuperação = medias[i];

          if (recuperação <= 5) {
            console.log(recuperação);
          }
    }
    6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.*/
    const medias = [2, 7, 3, 8, 10, 4, 6, 1]
    
    