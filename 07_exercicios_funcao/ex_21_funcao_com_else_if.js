let exercicio21 = "Exercício 21: Função com else if";
let descricao21 = "Escreva uma função que detecta o tipo do dado passado, string, boolean ou number";
let complemento21 = "Retorne uma mensagem para cada tipo passado como parâmetro";

console.log("###############################################");
console.log(`${exercicio21}\n ${descricao21}\n ${complemento21}`);

function detectaTipo(variavel) {
    if (typeof(variavel) === "boolean") {
        console.log(" -> A variavel é: boolean");
    } else if (typeof(variavel) === "string") {
        console.log(" -> A variavel é: string");
    } else if (typeof(variavel) === "number") {
        console.log(" -> A variavel é: number");
    }
}

detectaTipo(28);
detectaTipo("Gustavo");
detectaTipo(true);
