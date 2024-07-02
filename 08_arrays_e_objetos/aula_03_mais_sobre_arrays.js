var aula = "Aula 03: Mais sobre Arrays";
console.log(aula);

/**
 * Podemos acessar um array pelo seu índice;
 * Lembrando que o primeiro índice sempre é o zero, ou seja, para acessar o primeiro elemento utilizamos o índice zero;
 */

let numeros3 = [1, 4, 5, 6, 7];
let nomes3 = ["Mateus", "Marcos", "Lucas", "João"];
let bool3 = [true, false, false, true, true];
let misturado3 = ["Matos", 28, true];

console.log(` -> 2ª posição do array numeros3: ${numeros3[1]}`);
console.log(` -> 1ª posição do array nomes3: ${nomes3[0]}`);
console.log(` -> Ultimo elemento do arry bool3: ${bool3[bool3.length - 1]}`);
