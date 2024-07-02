let exercicio33 = "Exercício 33: Criando um JSON";
let descricao33 = "Crie um JSON com 3 propriedades e atribua ele a uma variável";
let complemento33 = "Acesses as propriedades imprimindo no console";

console.log("###############################################");
console.log(`${exercicio33}\n ${descricao33}\n ${complemento33}`);

carroEx33 = {
    "marca": "Volkswagen ",
    "modelo": "Golf GTI",
    "opcionais": ["teto solar panorâmico", "Park Assist 2.0", "Controle Adaptativo de Velocidade"]
}

console.log(" -> " + carroEx33.marca);
console.log(" -> " + carroEx33.modelo);
console.log(carroEx33.opcionais);
