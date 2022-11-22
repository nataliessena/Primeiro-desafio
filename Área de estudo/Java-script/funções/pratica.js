function escrevaNome(nome) {
    return ('Seu nome é ' + nome)
}

function escrevaIdade(idade) {
    
    if (idade >= 18) {
        console.log(escrevaNome('Natalie ') + 'tem ' + idade + ' anos, você é maior de idade');
    } else 
       console.log(escrevaNome('Natalie ') + 'tem ' + idade + ' anos, você é menor de idade');
    
}
escrevaIdade(17)
