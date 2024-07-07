var aula = "Aula 05: Conjuntos";
console.log(aula);

/**
 * Podemos definir um conjunto de caracteres para encontrar por regex;
 * Basta por entre [];
 * Com um traço podemos definir um intervalo também;
 */

const regex1Aula5 = /[12345]/;
const regex2Aula5 = /[0-9]/; //Valida se existem números entre 0 e 9;

console.log(regex1Aula5.test("Temos o número 6"));
console.log(regex1Aula5.test("Temos o número 2"));

console.log(regex2Aula5.test("Temos o número 645456"));
console.log(regex2Aula5.test("Temos o número"));
 