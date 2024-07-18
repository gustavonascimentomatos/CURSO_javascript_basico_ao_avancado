var aula = "Aula 04: Utilizando Promises";
console.log(aula);

/**
 * As promises são ações assíncronas que podem produzir um valor em algum momento no código;
 * Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código;
 * O objeto das promises é Promise, resolve é o método que resolve uma Promise;
 * O then é o que faz ela poder ser executada em um ponto futuro;
 */

let promessaAula04 = Promise.resolve(5 + 5);

console.log(" -> Continuação do código");
console.log(promessaAula04);
promessaAula04.then((value) => {console.log(` -> O retorno da promessa é: ${value}`)});

promessaAula04.then((value) => { return value + 5})
    .then((value) => {console.log(` -> Novo valor da promessa: ${value}`)})
