var aula = "Aula 16: Validando e-mail";
console.log(aula);

const emailRegex = /\w+@\w+\.\w+/;

console.log(` -> /\\w+@\\w+\\.\\w+/: gustavo@outlook.com = ${emailRegex.test("gustavo@outlook.com")}`);
console.log(` -> /\\w+@\\w+\\.\\w+/: gustavo.matos@outlook.com = ${emailRegex.test("gustavo.matos@outlook.com")}`);
console.log(` -> /\\w+@\\w+\\.\\w+/: gustavooutlook.com = ${emailRegex.test("gustavooutlook.com")}`);
console.log(` -> /\\w+@\\w+\\.\\w+/: gustavo@outlook = ${emailRegex.test("gustavo@outlook")}`);
