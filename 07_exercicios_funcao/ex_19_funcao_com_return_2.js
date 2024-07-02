let exercicio19 = "Exercício 19: Função com Return 2";
let descricao19 = "Escreva uma função que retorne um número aleatório";
let complemento19 = "O número máximo retornado deve ser passado via parâmetro";

console.log("###############################################");
console.log(`${exercicio19}\n ${descricao19}\n ${complemento19}`);

function numeroAleatorioComLimite(limite) {
    limite ++
    return numeroAleatorio = Math.floor(Math.random() * limite);
}

let aleatorio = numeroAleatorioComLimite(3);

console.log(` -> O número aleatório gerado foi: ${aleatorio}`);
