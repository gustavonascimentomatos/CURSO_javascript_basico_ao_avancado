var aula = "Aula 08: Operador not !";
console.log(aula);

/**
 * Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not;
 * Lembrando que combinações serão aceitas, o negado é apenas se bate com o set;
 */

const notAtoB = /[^ab]/;
const notAtoZ = /[^a-z]/;

console.log(` -> /[^ab]/: a = ${notAtoB.test("a")}`);
console.log(` -> /[^a-z]/: Aqui tem a = ${notAtoZ.test("Aqui tem a")}`);
console.log(` -> /[^a-z]/: 132 as = ${notAtoZ.test("132 as")}`);
