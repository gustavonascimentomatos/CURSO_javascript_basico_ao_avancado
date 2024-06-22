let exercicio10 = "Exercício 10: if else";
let descricao10 = "Armazene uma velocidade de um carro e atribua uma velocidade";
let complemento10 = "Faça uma estrutura if/else que verifique se esta dentro ou fora do limite de velocidade";

console.log("###############################################");
console.log(`${exercicio10}\n ${descricao10}\n ${complemento10}`);

let velocidade = 120;

if (velocidade > 80) {
    console.log(` -> Você esta a ${velocidade}km/h, ${velocidade - 80}km/h a mais da velocidade maxima permitida de 80km/h.`)
} else {
    console.log(` -> Você esta a ${velocidade}km/h, dentro da velocidade maxima permitida de 80km/h.`)
}
