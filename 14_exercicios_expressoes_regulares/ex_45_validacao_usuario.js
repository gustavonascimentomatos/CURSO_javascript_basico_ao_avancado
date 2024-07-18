let exercicio45 = "Exercício 45: Validação de usuários";
let descricao45 = "Crie regex que valide nome de usuários no sistema";
let complemento45 = "Aceite letras de a-z, _ e -, números de 0-9, mínimo de 3 caracteres máximo de 16";

console.log("###############################################");
console.log(`${exercicio45}\n ${descricao45}\n ${complemento45}`);

const regexEx45 = /^(?=.{3,16}$)[a-z09-_]/;


console.log(` -> /^(?=.{3,16}$)[a-z09-_]/: matos_1611 = ${regexEx45.test("matos_1611")}`);
console.log(` -> /^(?=.{3,16}$)[a-z09-_]/: gm = ${regexEx45.test("gm")}`);
console.log(` -> /^(?=.{3,16}$)[a-z09-_]/: _123456789987654321 = ${regexEx45.test("matos-@_123456789987654321")}`);
