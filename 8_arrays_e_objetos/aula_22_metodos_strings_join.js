var aula = "Aula 22: Métodos de strings - join";
console.log(aula);

/**
 * Junta elementos em um array em uma frase, por meio de um separador;
 */

let frase22 = "Testando o método split";
let frase22Split = frase22.split(" ");
let frase22Join = frase22Split.join("<->");

console.log(" -> " + frase22Join);
