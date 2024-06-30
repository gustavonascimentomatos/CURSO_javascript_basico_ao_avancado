var aula = "Aula 15: Getters e Setters";
console.log(aula);

/**
 * Get: Serve para resgatar o valor de uma propriedade;
 * Set: Serve para alterar o valor de uma propriedade;
 */

class CachorroAula15 {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    get getRaca() {
        return this.raca;
    }
    setRaca(raca) {
        this.raca = raca;
    }

    get getCor() {
        return this.cor
    }
    setCor(cor) {
        this.cor = cor;
    }

    latit() {
        console.log(" -> Au au!");
    }
}

let k9 = new CachorroAula15("Pastor-alemão", "Castanho");

console.log(` -> getRaca: ${k9.getRaca}`);
console.log(` -> getRaca: ${k9.getCor}`);

k9.setRaca("Pastor-belga");
k9.setCor("Marrom");

console.log(` -> getRaca: ${k9.getRaca}`);
console.log(` -> getRaca: ${k9.getCor}`);
