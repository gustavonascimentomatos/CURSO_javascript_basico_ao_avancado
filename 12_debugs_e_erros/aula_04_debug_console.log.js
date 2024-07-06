var aula = "Aula 04: Debug - console.log";
console.log(aula);

/**
 * Um método bastante utilizado para debug, é o console.log;
 * Função que estavamos utilizando para mostar os valores no console
 */

let a = 1;
let b = 2;
let c = 3;

if (c > a) {
    a = b;
    console.log(` -> a: ${a}`);
}

for (let index = 5; index > 0; index--) {
    b ++;
    a = a + c + 1;
    c += 2;
    console.log(` -> a: ${a}`);
}

if (b == a) {
    a ++;
} else {
    a = a + b + c;
}
console.log(` -> a: ${a}`);

a = a * b;
console.log(` -> a: ${a}`);
