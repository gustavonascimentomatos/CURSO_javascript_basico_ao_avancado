let exercicio30 = "Exercício 30: Pesquisando valores no array";
let descricao30 = "Crie um array com 5 nome, incluindo o seu";
let complemento30 = "Varifique se o seu nome existe no array e caso exista o imprima no console";

console.log("###############################################");
console.log(`${exercicio30}\n ${descricao30}\n ${complemento30}`);

let arrayNomesEx30 = ["Mateus", "Marcos", "Lucas", "João", "Gustavo"];

if (arrayNomesEx30.includes("Gustavo")) {
    console.log(" -> O nome 'Gustavo' está no array!");
} else {
    console.log(" -> O nome 'Gustavo' não está no array!")
}
