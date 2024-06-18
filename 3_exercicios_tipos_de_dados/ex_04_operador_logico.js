let exercicio4 = "Exercício 04: Operadores Lógicos";
let descricao4 = "Escreva três comparações com operadores lógicos";
let complemento4 = "Com and, or e not";

console.log("###############################################");
console.log(`${exercicio4}\n ${descricao4}\n ${complemento4}`);

let idadeMaria = 18;
let idadeJoao = 17;

console.log(` -> Maria e João são maiores de idade?: ${idadeMaria >= 18 && idadeJoao >= 18}`);
console.log(` -> João ou Maria são menores de idade?: ${idadeJoao < 18 || idadeMaria < 18}`);
console.log(` -> João fez aniversário e não é mais menor de idade: ${!(idadeJoao >= 18)}`);
