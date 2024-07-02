console.log("##########################################");
var aula = "Aula 22: Utilizando break";
console.log(aula);

/*
 * As vezes precisamos parar o loop antes que ele complete todo seu ciclo, para isso utilizamos o break;
 */
let nomeBreak = "Gustavo";

for (let index = 0; index < 10; index++) {
    console.log(` -> Nome: ${nomeBreak}\n -> Index: ${index}`);

    if (index === 3) {
        nomeBreak = "João";
    }

    if (index === 5 && nomeBreak === "João") {
        console.log(` -> O nome é João e podemos parar!`);
        break;
    }
}
