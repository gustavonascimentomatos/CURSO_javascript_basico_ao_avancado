console.log("##########################################");
var aula = "Aula 18: Estrutura de repetição - while";
console.log(aula);

/*
 * Fará uma ação, até que a condição seja atingida;
 * Precisamos realmente "definir um fim" para o loop, para não termos o problema de loop infinito;
 */

let x = 10;
let y = 1;
let z = 0;

while (x > 7) {
    console.log(` -> X é: ${x}`);
    x -= 1;
}
console.log(` ##########`);

while (y <= 3) {
    console.log(` -> Y é: ${y}`);
    y += 1;  
}
console.log(` ##########`);

while (z < 2) {
    console.log(` -> Z é: ${z}`);
    z += 1;
}
