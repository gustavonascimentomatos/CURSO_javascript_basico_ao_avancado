var aula = "Aula 07: Caracteres especiais na prática";
console.log(aula);

/**
 * Podemos utilizar os caracteres especiais de varias formas;
 */

const diaRegexAula7 = /\d\d/;
const palavraTresLetrasAula7 = /\w\w\w/;

console.log(` -> /\\d\\d/: 2024 = ${diaRegexAula7.test("2024")}`);
console.log(` -> /\\d\\d/: 07 = ${diaRegexAula7.test("07")}`);
console.log(` -> /\\d\\d/: teste = ${diaRegexAula7.test("teste")}`);
console.log(` -> /\\d\\d/: 1 = ${diaRegexAula7.test("1")}`);
console.log(` -> (/\\d\\d/ && length = 2): 2024 = ${diaRegexAula7.test("2024") && "2024".length == 2}`);

console.log(` -> /\\w\\w\\w/: Hello, World = ${palavraTresLetrasAula7.test("Hello, World")}`);
console.log(` -> /\\w\\w\\w/: Hi = ${palavraTresLetrasAula7.test("Hi")}`);
