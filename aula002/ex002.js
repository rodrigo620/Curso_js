/*
No código a baixo ele mostra um alert, onde se insere um mesagem, se o usuário 
aperta CANCELAR, o mesmo irá retornar NULL no consoler
*/
var $nome = prompt("Qual seu nome?")
/*
Comparando o valor da VARIAVEL $NOME e fazendo uma comparação
*/
if ($nome == null){
    alert("Seja bem-vindo")
}else {
    alert("Seja bem-vindo, " + $nome)
}

var $n1 = Number.parseInt(prompt("Digite um numero:"))
var $n2 = Number.parseInt(prompt("Digite um segundo valor"))
// Aqui o $n1 e $n2 são retornados como String
// Para converter se faz o seguinte
// Number.parseInt Coverte para um numero Inteiro 
// Number.parseFloat Converte para um numero flutuante, decimal
// Se eu colocar somente Number ele que decide se é inteiro ou real
var $somaNumero = $n1 + $n2
// alert("Convertendo: \n" + $somaNumero)
alert(`Convertendo: ${$somaNumero}`)
