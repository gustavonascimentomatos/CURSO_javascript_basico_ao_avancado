let exercicio14 = "Exercício 14: Par e Ímpar";
let descricao14 = "Escreva um loop for ou while que exiba qual número é par e qual é ímpar";
let complemento14 = "O contador deve inicar em 0 e ir até 50";

console.log("###############################################");
console.log(`${exercicio14}\n ${descricao14}\n ${complemento14}`);

for (let index = 0; index <= 50; index++) {
    if (index % 2 == 0) {
        console.log(` -> ${index}: Par`);
    } else {
        console.log(` -> ${index}: Ímpar`);
    }
}
