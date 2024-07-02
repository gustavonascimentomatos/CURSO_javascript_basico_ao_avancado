var aula = "Aula 11: Argumentos opcionais";
console.log(aula);

const nomeComIdade = (nome, idade) => {
    if (nome != undefined && idade === undefined) {
        console.log(` -> Nome: ${nome}`);
    } else if (nome === undefined && idade !=  undefined) {
        console.log(` -> Idade: ${idade}`);
    } else if (idade != undefined && nome != undefined) {
        console.log(` -> Nome: ${nome}\n -> Idade: ${idade}`);
    } else {
        console.log(` -> Nome: Não informado\n -> Idade: Não informada`);
    }
}

nomeComIdade(null, 28);
