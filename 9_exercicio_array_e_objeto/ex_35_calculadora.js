let exercicio35 = "Exercício 35: Criando um objeto calculadora";
let descricao35 = "Crie um objeto calculadora com os seguintes metodos, somar(), subtrair(), multiplicar() e dividir()";
let complemento35 = "Os métodos só devem aceitar dois parâmetros, depois utilize cada um deles";

console.log("###############################################");
console.log(`${exercicio35}\n ${descricao35}\n ${complemento35}`);

let calculadoraEx35 = {
    somar: function(n1, n2) {
        console.log(` -> A soma entre ${n1} e ${n2} é: ${n1 + n2}`);
    },
    subtrair: function(n1, n2) {
        console.log(` -> A subtração entre ${n1} e ${n2} é: ${n1 - n2}`);
    },
    multiplicar: function(n1, n2) {
        console.log(` -> A multiplicação entre ${n1} e ${n2} é: ${n1 * n2}`);
    },
    divisao: function(n1, n2) {
        console.log(` -> A divisão entre ${n1} e ${n2} é: ${n1 / n2}`);
    }
}

calculadoraEx35.somar(10, 5);
calculadoraEx35.subtrair(10, 5);
calculadoraEx35.multiplicar(10, 5);
calculadoraEx35.divisao(10, 5);
