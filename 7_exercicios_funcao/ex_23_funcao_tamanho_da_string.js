let exercicio23 = "Exercício 23: Variáveis";
let descricao23 = "Escreva um função que recebe uma string e validde a quantidade de caracteres";
let complemento23 = "Caso seja maior que 10 exiba: 'Texto muito longo', caso contrario exiba 'Texto dentro do limite'";

console.log("###############################################");
console.log(`${exercicio23}\n ${descricao23}\n ${complemento23}`);

function tamanhoDaString(frase) {
    if (frase.length > 10) {
        console.log(" -> Texto muito grande!");
    } else {
        console.log(" -> Texto dentro do limite!");
    }
}

tamanhoDaString("Gustavo");
tamanhoDaString("Gustavo Nascimento Matos")
