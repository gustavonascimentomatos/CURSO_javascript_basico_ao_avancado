console.log("##########################################");
var aula = "Aula 23: Utilizando continue";
console.log(aula);

/*
 * Dependendo da nossa lógica, podemos pular o resto da execução do loop, para isso utilizamos continue;
 */

for (let index = 5; index > 0; index--) {
    if (index % 2 == 0) {
        console.log(` -> Entrou no continue!`);
        continue;
    }

    console.log(` -> Index: ${index}`);
}
