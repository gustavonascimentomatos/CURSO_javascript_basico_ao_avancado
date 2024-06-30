var aula = "Aula 14: Symbol";
console.log(aula);

/**
 * Propriedades únicas, que não podem ser alteradas e nem criadas daus vezes;
 * Podemos utilizar como uma constante, só que para propriedade de objeto;
 */

class CachorroAula14 {
    constructor (raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latit() {
        console.log(" -> Au au!");
    }
}

let patas = Symbol();

CachorroAula14.prototype[patas] = 3;
CachorroAula14.prototype.raca = "SRD";

let caramelo = new CachorroAula14("Vira Lata", "Caramelo");
console.log(` -> ${caramelo[patas]}`);

// Acessando Symbol do Prototype
console.log(` -> ${CachorroAula14.prototype[patas]}`);
