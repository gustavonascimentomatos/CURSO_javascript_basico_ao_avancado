let exercicio41 = "Exercício 41: Regex de letras maiúsculas";
let descricao41 = "Crie uma regex que só aceite letras maiúsculas";
let complemento41 = "Realize testes";

console.log("###############################################");
console.log(`${exercicio41}\n ${descricao41}\n ${complemento41}`);

const regexEx41 = /[A-Z]/;

console.log(` -> /[A-Z]/: teste = ${regexEx41.test("teste")}`);
console.log(` -> /[A-Z]/: TESTE = ${regexEx41.test("TESTE")}`);
console.log(` -> /[A-Z]/: Teste = ${regexEx41.test("Teste")}`);