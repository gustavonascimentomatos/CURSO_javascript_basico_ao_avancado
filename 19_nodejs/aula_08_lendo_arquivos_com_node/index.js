var aula = "Aula 08: Lendo arquivos com Node";
console.log(aula);

/**
 * Módulo de file system: lendo o arquivo;
 * Um ds módulos mais utilizados;
 * Ele serve para trabalhar com arquivos e diretórios;
 * Já é incluso no node, ou seja, não precisamos intalar;
 */

let {readFile} = require("fs");

readFile("arquivo.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    } else {
        console.log(text);
    }
});
