var aula = "Aula 04: Testando expressão regular";
console.log(aula);

/**
 * Depois da definição do padrão por meio da regex;
 * Utilizamos o método test() para verificar se o padrão é retornado;
 * Com isso vamos receber de resposta true or false;
 */

const regex1Aula4 = new RegExp("bola");
const regex2Aula4 = /bola/;

let textAula4 = "Tem bola na ceta";

console.log(/quadrado/.test("Onde tem um quadrado"))

console.log(regex1Aula4.test("Tem bola"));
console.log(regex1Aula4.test("Não tem"));

console.log(regex2Aula4.test("Tem bola"));
console.log(regex2Aula4.test("Não tem"));

console.log(regex1Aula4.test(textAula4));
console.log(regex2Aula4.test(textAula4));
