// arrayas {} são blocos de código  e [] são listas

/*const alunos = ['joao', 'alana', 'natalie']
//console.log(alunos[0]); 0 é o joão 1 é a alana e 2 a natalie push inclui na lista
alunos.push('fabio', 'ana');
alunos[5] = 'maria'
console.log(alunos);*/

/*const numeros = ['1', '2', '3']
numeros.push(10);
numeros.pop();
// o pop tira o ultimo push
console.log(numeros);
console.log(numeros.pop());
length é o tamanho da lista*/



/*const soma = notas[0] + notas [1] + notas [2] + notas [3] + notas [4]
console.log(soma / notas.length);

const nome = 'Natalie Batista Soares Sena'
for (let i = 0; i < nome.length; i++) {
    const letras = nome[i];
    console.log(letras);
}
*/
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}
const media = soma / notas.length;
console.log(media)


