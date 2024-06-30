var aula = "Aula 17: Operador instanceof";
console.log(aula);


/**
 * Podemos verificar quem é o pai do objeto utilizando o instanceof;
 */

class MamiferoAula17 {
    constructor(patas) {
        this.patas = patas;  
    }
}

class CachorroAula17 extends MamiferoAula17 {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir() {
        console.log(` -> Au au!`);
    }
}

let bidu = new CachorroAula17(4, "Schnauzer");

console.log(` -> Cachorro é herança de Mamifero: ${new CachorroAula17 instanceof MamiferoAula17}`);
