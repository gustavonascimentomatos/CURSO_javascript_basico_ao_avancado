var aula = "Aula 10: Generators";
console.log(aula);

/**
 * Generators funcionam semelhantes as Promises;
 * Onde ações podem ser pausadas e continuadas depois;
 * Caracterizados pelo function* e yield, veja;
 * O yield pode salvar o estado da variável;
 */

function* criadorIDAula10(){
    let id = 0;
    while (true) {
        yield id++;
    }
}

let criaId = criadorIDAula10();

console.log(criaId.next().value);
console.log(criaId.next().value);
