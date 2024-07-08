var aula = "Aula 09: Operador plus +";
console.log(aula);

/**
 * Quando um + está após alguma expressão este elemento pode se repetir mais de uma vez;
 */

const umOuVariosNumeros = /\d+/;

console.log(` -> /\\d+/: 123 = ${umOuVariosNumeros.test("123")}`);
console.log(` -> /\\d+/: aaa = ${umOuVariosNumeros.test("aaa")}`);
console.log(` -> /\\d+/: 1 = ${umOuVariosNumeros.test("1")}`);
console.log(` -> /\\d+/: a = ${umOuVariosNumeros.test("a")}`);
console.log(` -> /\\d+/: "" = ${umOuVariosNumeros.test("")}`);
console.log(` -> /\\d+/: " " = ${umOuVariosNumeros.test(" ")}`);
