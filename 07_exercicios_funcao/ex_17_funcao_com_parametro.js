let exercicio17 = "Exercício 17: Função Com Parâmetro";
let descricao17 = "Escreva uma função que recebe um parâmetro de idade";
let complemento17 = 'Imprima com templates literals a segiunte mensagem "Você tem x anos"';

console.log("###############################################");
console.log(`${exercicio17}\n ${descricao17}\n ${complemento17}`);


function imprimeIdade(idade) {
    console.log(` -> Você tem ${idade} anos`)
}

imprimeIdade(28);
