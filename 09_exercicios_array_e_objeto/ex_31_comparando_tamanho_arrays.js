let exercicio31 = "Exercício 31: Comparando tamanho de arrays";
let descricao31 = "Crie dois arrays, um com mais de 5 elementos e outro com menos";
let complemento31 = "Faça uma função que verifica o número de elementos\n Se possuir menos que 5 imprima 'Poucos elementos'\n Caso tenha mais imprima 'Muitos elementos'";

console.log("###############################################");
console.log(`${exercicio31}\n ${descricao31}\n ${complemento31}`);

let primeiroArrayEx31 = ["Tadej Pogacar", "Jonas Vingegaard", "Egan Bernal", "Richard Carapaz", "Primož Roglič", "Nairo Quintana"];
let segundoArrayEx31 = ["Nino Schurter", "Tom Pidcock", "Henrique Avancini"];

function tamanhoDoArray(array) {
    if (array.length >= 5) {
        console.log(" -> Muitos elementos: " + array.length);
    } else {
        console.log(" -> Poucos elementos: " + array.length);
    }
}

tamanhoDoArray(primeiroArrayEx31);
tamanhoDoArray(segundoArrayEx31);
