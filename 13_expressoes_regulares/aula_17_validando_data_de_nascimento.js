var aula = "Aula 17: Validando data de nascimento";
console.log(aula);

const dataRegex = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(` -> /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/: 16/11/1995 = ${dataRegex.test("16/11/1995")}`);
console.log(` -> /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/: 02/10/1992 = ${dataRegex.test("02/10/1992")}`);
console.log(` -> /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/: 16/11/95 = ${dataRegex.test("16/11/95")}`);
console.log(` -> /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/: 16.11.1995 = ${dataRegex.test("16.11.1995")}`);
console.log(` -> /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/: 16-11-1995 = ${dataRegex.test("16-11-1995")}`);
