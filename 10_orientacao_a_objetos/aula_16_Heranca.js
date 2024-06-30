var aula = "Aula 16: Herança";
console.log(aula);

/**
 * Uma classe pode herdar propriedades de outra classe por herança;
 * Pra isso utilizamos extendes;
 */

class MamiferoAula16 {
    constructor(patas) {
        this.patas = patas;  
    }
}

class CachorroAula16 extends MamiferoAula16 {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir() {
        console.log(` -> Au au!`);
    }
}

let coiote = new MamiferoAula16(4);
let doug = new CachorroAula16(4, "Pug");

console.log(` -> Patas: ${coiote.patas}`);
console.log(doug);
doug.latir();
