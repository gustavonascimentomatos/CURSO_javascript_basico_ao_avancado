var aula = "Aula 14: Métodos de arrays - indexOf e lastIndexOf";
console.log(aula);

/**
 * indexOf: Encontra o primeiro índice de um determinado elemento;
 * lastIndexOf: Encontra o último índice encontrado de um elemento;
 */

let numeros14 = [6, 6, 3, 2, 4, 9, 2, 6, 2];

let primeiroIndiceDoValor2 = numeros14.indexOf(2);
let primeiroIndiceDoValor22 = numeros14.indexOf(22);
let ultimoIndiceDoValor2 = numeros14.lastIndexOf(2);

console.log(` -> 1ª ocorrência do valor '2' - Índice: ${primeiroIndiceDoValor2}`);
console.log(` -> Última ocorrência do valor '2' - Índice: ${ultimoIndiceDoValor2}`);
console.log(` -> Valor '22' não está presente - Retorna Índice: ${primeiroIndiceDoValor22}`);
