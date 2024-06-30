var aula = "Aula 12: Métodos e propriedades em uma Class";
console.log(aula);

/**
 * Não podemos adicionar propriedades na classe, só via prototype;
 * A classe só aceita métotos;
 */

class CachorroAula12 {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latit() {
        console.log(" -> Au au!");
    }
}

CachorroAula12.prototype.patas = 4;

let pit = new CachorroAula12("Pit Bull", "Branco");

console.log(pit);
pit.latit()
