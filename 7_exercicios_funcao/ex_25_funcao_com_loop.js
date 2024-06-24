let exercicio25 = "Exercício 25: Função com loop";
let descricao25 = "Escreva uma função que recebe um número e o decremente de 1 em 1 com um loop";
let complemento25 = "Imprima somente os números pares";

console.log("###############################################");
console.log(`${exercicio25}\n ${descricao25}\n ${complemento25}`);


function decrementa(final) {
    for (let index = final; index >= 0; index--) {
        if (index % 2 == 0) {
            console.log(` -> ${index}`);
        }

    }
}

decrementa(10);
