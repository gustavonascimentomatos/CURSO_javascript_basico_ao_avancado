var aula = "Aula 11: Operador de precisão";
console.log(aula);

/**
 * Inserir o número de ocorrência entre {};
 */

const cepRegex = /\d{5}-\d{3}/;
const cellRegex = /\d{4,5}-\d{4}/;
const cellDDDRegex = /\d{2} \d{4,5}-\d{4}/;
const cellDDDRegex2 = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(` -> /\\d{5}-\\d{3}/: 35490-000 = ${cepRegex.test("35490-000")}`);
console.log(` -> /\\d{5}-\\d{3}/: 000-35490 = ${cepRegex.test("000-35490")}`);
console.log(` -> /\\d{5}-\\d{3}/: 35490000 = ${cepRegex.test("35490000")}`);

console.log(` -> /\\d{4,5}-\\d{4}/: 9999-9999 = ${cellRegex.test("9999-9999")}`);
console.log(` -> /\\d{4,5}-\\d{4}/: 8888-9999 = ${cellRegex.test("8888-9999")}`);
console.log(` -> /\\d{4,5}-\\d{4}/: 9999-999 = ${cellRegex .test("9999-999")}`);

console.log(` -> /\\d{2} \\d{4,5}-\\d{4}/: 31 98888-7777 = ${cellDDDRegex .test("31 98888-7777")}`);
console.log(` -> /\\d{2} \\d{4,5}-\\d{4}/: 3198888-7777 = ${cellDDDRegex .test("31-98888-7777")}`);

console.log(` -> /\\(\\d{2}\\)\\d{4,5}-\\d{4}/: (31)98888-7777 = ${cellDDDRegex2 .test("(31)98888-7777")}`);
console.log(` -> /\\(\\d{2}\\)\\d{4,5}-\\d{4}/: (31) 98888-7777 = ${cellDDDRegex2 .test("(31) 98888-7777")}`);
