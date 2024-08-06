var aula = "Aula 09: Escrevendo em arquivos com Node";
console.log(aula);

/**
 * Módulo de file system: escrevendo no arquivo;
 * Além de ler arquivo, podems também alterar o mesmo;
 * Chamamos isso de escrever no arquivo;
 */

let {writeFile} = require("fs");

writeFile("arquivo.txt", "Texto que será inserido no arquivo", (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Arquivo atualizado com sucesso!");
    }
});
