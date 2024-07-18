var aula = "Aula 03: Utilizando Callbacks";
console.log(aula);

/**
 * Uma das vertentes a programação Assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbaks;
 * Callback é uma função que faz uma ação após algum acontecimento no código;
 * Podemos realizar um callback com a função setTimeout;
 */

console.log(" -> console.log: 1");

setTimeout(function() {
    console.log("Aula 03: Utilizando Callbacks");
    console.log(" -> setTimeout: 2");
}, 2000);

console.log(" -> console.log: 3");
console.log(" -> console.log: 4");
console.log(" -> console.log: 5");
