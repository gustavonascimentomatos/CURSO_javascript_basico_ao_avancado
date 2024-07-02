console.log("##########################################");
var aula = "Aula 14: Estrutura de controle - if";
console.log(aula);

/*
 * O programa vai executar um bloco de código, SE algo acontecer;
 * Onde algo é a condição imposta por um statement;
 * Que resutar em um boolean (true or false);
 */

let newIdade = 19;
let newNome = "Gustavo";
let passaporte = true;

if (newIdade == 19) {
    console.log(` -> Idade é igual a 19`);
}

if (newIdade > 25) {
    console.log(` -> A idade é maior que 25`);
}

if (newNome == "Gustavo" && idade > 10) {
    console.log(` -> ${newNome}, você esta liberado!`);
}

if ((newNome == "Gustavo" && idade > 30) || passaporte == true) {
    console.log(` -> ${newNome}, seu passaporte está Ok e você esta liberado!`);
}
