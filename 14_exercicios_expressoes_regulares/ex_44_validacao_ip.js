let exercicio44 = "Exercício 44: Validação de endereço IP";
let descricao44 = "Crie uma regex que velide endereços IP";
let complemento44 = "Ex: 127.0.0.1";

console.log("###############################################");
console.log(`${exercicio44}\n ${descricao44}\n ${complemento44}`);

const regexEx44 = /\d{1,3}\.\d{1,3}\.\d{1,3}/;


console.log(` -> /\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}/: 127.0.0.1 = ${regexEx44.test("127.0.0.1")}`);
