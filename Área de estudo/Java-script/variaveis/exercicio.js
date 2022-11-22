/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
 e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const precoEtiqueta = 100;
const debito = precoEtiqueta - ( precoEtiqueta * 0.1);
const dinheiroPix = precoEtiqueta - (precoEtiqueta * 0.15)
const credito = precoEtiqueta + (precoEtiqueta * 0.1)
const tipoPagamento = 'credito'

if (tipoPagamento === 'etiqueta') {
    console.log(precoEtiqueta)
} else if (tipoPagamento === 'debito') {
    console.log(debito) 
} else if (tipoPagamento === 'credito') {
    console.log(credito)
} else {
    console.log(dinheiroPix)
}

/* Na resolução do professor ficou assim:

1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const precoEtiqueta = 100;
const tipoPagamento = 1;

if (tipoPagamento === 1) {
    console.log(precoEtiqueta - ( precoEtiqueta * 0.1))
} else if (tipoPagamento === 2) {
    console.log(precoEtiqueta - ( precoEtiqueta * 0.15)) 
} else if (tipoPagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log(precoEtiqueta + ( precoEtiqueta * 0.1))
}
*/

