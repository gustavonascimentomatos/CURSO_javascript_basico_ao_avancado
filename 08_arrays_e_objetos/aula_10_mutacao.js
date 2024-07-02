var aula = "Aula 10: Mutação";
console.log(aula);

/**
 * Um objeto pode herdar todas as caracteísticas do outro, virando uma referência ao mesmo;
 */

let homem = {
    nome: "Gustavo",
}

let homem2 = homem;

console.log(homem == homem2);
homem2.nome = "Haroldo";
console.log(homem);
console.log(homem);
