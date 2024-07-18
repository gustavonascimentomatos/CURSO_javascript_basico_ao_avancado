let exercicio42 = "Exercício 42: Strings terminas com ID";
let descricao42 = "Crie uma regex que só aceite strings terminas com ID";
let complemento42 = "Depois realize testes";

console.log("###############################################");
console.log(`${exercicio42}\n ${descricao42}\n ${complemento42}`);

const regexEx42 = /\d+ID\b/

console.log(` -> /\\d+ID\\b/: 4552ID = ${regexEx42.test("4552ID")}`);
console.log(` -> /\\d+ID\\b/: 1312Id = ${regexEx42.test("1312Id")}`);
console.log(` -> /\\d+ID\\b/: abcdID = ${regexEx42.test("abcdID")}`);
console.log(` -> /\\d+ID\\b/: 4568id = ${regexEx42.test("4568id")}`);