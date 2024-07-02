let exercicio18 = "Exercício 18: Função com Return";
let descricao18 = "Escreva uma função que come dois números e retorne esta soma";
let complemento18 = "Depois imprima este retorno";

console.log("###############################################");
console.log(`${exercicio18}\n ${descricao18}\n ${complemento18}`);

function somarDoisNumeros(numero1, numero2) {
    return (numero1 + numero2);
}

let soma = somarDoisNumeros(5, 8);

console.log(" -> A soma dos dois números é: " + soma);
