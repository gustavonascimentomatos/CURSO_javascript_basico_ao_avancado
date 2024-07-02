let exercicio29 = "Exercício 29: Adicionando e remoendo propriedades";
let descricao29 = "Adicione e mostre no console a propriedade janelas no ônibus com valor 20";
let complemento29 = "Remova a propriedade rodas";

console.log("###############################################");
console.log(`${exercicio29}\n ${descricao29}\n ${complemento29}`);

let objOnibusEx29 = {
    rodas: 8,
    limitepassageiros: 40,
    portas: 2
}

console.log(objOnibusEx29)

objOnibusEx29.janelas = 20;
delete objOnibusEx29.rodas;

console.log(objOnibusEx29);
