var aula = "Aula 07: Exceptions";
console.log(aula);

/**
 * Podemos criar erros no programa, caso alguma condição não seja atendida;
 * Porém as exceptions abordam o programa, só geram o erro;
 */

function saudacaoAula07(nome){
    if (typeof nome != "string") {
        throw new Error("O parâmetro deve ser uma string.");
    } else {
        console.log(` -> Olá ${nome}`);
    }
}

saudacaoAula07("Gustavo");
//saudacaoAula07(false);
