var aula = "Aula 13: Override no prototype";
console.log(aula);

/**
 * Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no Prototype;
 * Podemos substituir a do prototype;
 */

class CachorroAula13 {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latit() {
        console.log(" -> Au au!");
    }
}

CachorroAula13.prototype.raca = "SRD";
CachorroAula13.prototype.patas = 4;

let neguinho = new CachorroAula13("Doberman", "Preto");

console.log(` -> ${neguinho.patas}`);
neguinho.latit();

console.log(` -> ${CachorroAula13.prototype.raca}`);
console.log(` -> ${neguinho.raca}`);
