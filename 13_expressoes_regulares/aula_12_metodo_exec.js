var aula = "Aula 12: Método exec";
console.log(aula);

/**
 * O método exex nos retorna um objeto com algumas informações sobre a regex;
 * Se nada for encontrado, retorna null;
 */

const digitosRegexAula12 = /\d+/;

console.log(digitosRegexAula12.exec("Tem o número 100 aqui"));
console.log(` -> /\\d+/: Tem o número aqui = ${digitosRegexAula12.exec("Tem o número aqui")}`);
