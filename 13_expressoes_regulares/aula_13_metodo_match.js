var aula = "Aula 13: Método match";
console.log(aula);

/**
 * O método match funciona de forma similar ao exec;
 * Método direto da string
 */

const frase1Aula13 = "O número 100 está aqui".match(/\d+/);
const frase2Aula13 = "O número está aqui".match(/\d+/);

console.log(frase1Aula13);
console.log(` -> .match(/\\d+/): O número está aqui = ${frase2Aula13}`);
