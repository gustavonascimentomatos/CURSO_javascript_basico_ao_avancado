let exercicio24 = "Exercício 24: Função com potência";
let descricao24 = "Escreva uma função que receba dois números, primeiro é a base e o segundo a expoente";
let complemento24 = "Faça a operação e retorne o resultado";

console.log("###############################################");
console.log(`${exercicio24}\n ${descricao24}\n ${complemento24}`);

function calculaPotencia(base, expoente) {
    return Math.pow(base, expoente);
}

console.log(" -> A potência calculada é: " + calculaPotencia(2, 4))
