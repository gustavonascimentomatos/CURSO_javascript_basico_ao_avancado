let exercicio20 = "Exercício 20: Função com if else";
let descricao20 = "Escreva uma função que recebe a idade, caso seja maior que 18 anos pode entrar na auto escola";
let complemento20 = "Em caso positivo e caso negativo imprima a mensagem";

console.log("###############################################");
console.log(`${exercicio20}\n ${descricao20}\n ${complemento20}`);

function podeIniciarNaAutoEscola(idade) {
    if (idade >= 18) {
        console.log(" -> Você pode entrar na auto escola!");
    } else {
        console.log(" -> Você não pode entrar na auto escola!");
    }
}

podeIniciarNaAutoEscola(17);
podeIniciarNaAutoEscola(20);
