console.log("##########################################");
var aula = "Aula 24: Incrementação resumida";
console.log(aula);

/*
 * Podemos incrementar uma variável de forma simplificada: 'x += 1;' ou 'x ++;'
 */

let numero = 5;

while (numero < 24) {
    console.log(` -> Número: ${numero}`);
    numero += 10;
}
console.log(` ##########`);

for (let index = 0; index < 3; index++) {
    console.log(` -> Index: ${index}`);
}
console.log(` ##########`);

for (let index = 3; index > 0; index--) {
    console.log(` -> Index: ${index}`);
}
