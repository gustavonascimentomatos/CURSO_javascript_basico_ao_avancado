var aula = "Aula 10: Operador question";
console.log(aula);

/**
 * Faz com que o dígito anterior seja opcional;
 */

const padraoQuestion1 = /Abacax?i/;
const padraoQuestion2 = /\d+\w?/;

console.log(` -> /Abacax?i/: Abacaxi = ${padraoQuestion1.test("Abacaxi")}`);
console.log(` -> /Abacax?i/: Abacai = ${padraoQuestion1.test("Abacai")}`);
console.log(` -> /Abacax?i/: Abaca = ${padraoQuestion1.test("Abaca")}`);

console.log(` -> /\\d+\\w?/: 123 = ${padraoQuestion2.test("123")}`);
console.log(` -> /\\d+\\w?/: 123a = ${padraoQuestion2.test("123a")}`);
console.log(` -> /\\d+\\w?/: a123 = ${padraoQuestion2.test("a123")}`);
console.log(` -> /\\d+\\w?/: a = ${padraoQuestion2.test("a")}`);
