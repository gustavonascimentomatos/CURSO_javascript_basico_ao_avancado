var aula = "Aula 15: Métodos de arrays - slice";
console.log(aula);

/**
 * Retorna um array a partir de outro array;
 * O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array;
 * 1º parâmetro é onde inicia o fatiamento, 2º onde finaliza o fatiamento -1;
 * Caso não seja fornecido o 2º parâmetro retorna o do início até o fim do array
 */

let numeros15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let elemento4 = numeros15.slice(4, 5);
let elemento4e5 = numeros15.slice(4, 6);
let elemento2ParaFrente = numeros15.slice(2)
let elementoUltimoPenultimo = numeros15.slice(-2);
let elemento2SemUltimoPenultimo = numeros15.slice(2, -2)

console.log(" -> Elemento 4: " + elemento4);
console.log(" -> Elemento 4 e 5: " + elemento4e5);
console.log(" -> Elemento 2 para frente: " + elemento2ParaFrente);
console.log(" -> Elemento último e penúltimo: " + elementoUltimoPenultimo);
console.log(" -> Elemento 2 para frente sem último e penúltimo: " + elemento2SemUltimoPenultimo);
