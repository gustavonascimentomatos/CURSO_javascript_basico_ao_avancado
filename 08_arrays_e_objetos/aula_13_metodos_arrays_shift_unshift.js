var aula = "Aula 13: Métodos de arrays - shift e unshift";
console.log(aula);

/**
 * shift: Remove o primeiro elemento de um array;
 * unshift: Adiciona um ou mais elementos no início de um array
 */

let frutas = ["Pera", "Uva", "Maça", "Laranja", "Morango"];

console.log(frutas);

let primeiraFrutaRemovida = frutas.shift();

console.log(` -> Fruta removida: ${primeiraFrutaRemovida}`);
console.log(frutas);

frutas.unshift("Mamão");
console.log(frutas);
