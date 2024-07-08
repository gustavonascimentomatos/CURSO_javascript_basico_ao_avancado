var aula = "Aula 14: Choice pattern";
console.log(aula);

/**
 * Podemos colocar uma instrução na regex que funciona como um || (or) das condicionais;
 */

const frutasChoicePattern = /\d+: (Banana|Laranja|Maça)/;
const nomeChoicePattern = /\w+: (Mateus|Marcos|Lucas|João)/;

console.log(` -> /\\d+: (Banana|Laranja|Maça)/: 2: Banana = ${frutasChoicePattern.test("2: Banana")}`);
console.log(` -> /\\d+: (Banana|Laranja|Maça)/: 3: Laranja = ${frutasChoicePattern.test("3: Laranja")}`);
console.log(` -> /\\d+: (Banana|Laranja|Maça)/: 1: Uva = ${frutasChoicePattern.test("1: Uva")}`);
console.log(` -> /\\d+: (Banana|Laranja|Maça)/: 4 Laranja = ${frutasChoicePattern.test("4 Laranja")}`);

console.log(` -> /\\w+: (Mateus|Marcos|Lucas|João)/: Nome: Mateus = ${nomeChoicePattern.test("Nome: Mateus")}`);
console.log(` -> /\\w+: (Mateus|Marcos|Lucas|João)/: 35490-000 = ${nomeChoicePattern.test("Nome Lucas")}`);
console.log(` -> /\\w+: (Mateus|Marcos|Lucas|João)/: 35490-000 = ${nomeChoicePattern.test("Nome: Gustavo")}`);
