var aula = "Aula 05: Falha nas Promises";
console.log(aula);

/**
 * Uma Proise pode falhar, podemos reter esse erro com um método chamado catch;
 * Com ele podemos exibir o erro no console por exemplo, e fazer o debug no código;
 */

let promiseAula05 = Promise.resolve(new Error("Algo deu errado com a Promise!"));

console.log(` -> Continuação do programa: Linha 11`)

promiseAula05
    .then(value => console.log(value))
    .catch(reason => console.log(` -> [ERRO]: ${reason}`));
