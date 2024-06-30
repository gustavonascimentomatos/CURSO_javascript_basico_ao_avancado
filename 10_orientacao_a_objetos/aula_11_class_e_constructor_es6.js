var aula = "Aula 11: Class e constructor do ES6";
console.log(aula);

/**
 * Com a versão do ES6, uma possibilidade de criar uma classe (objeto) com construtor foi adicioonada;
 * Então não precisamos mais criar por meio de uma função;
 */

class CachorroAula11 {
    constructor (raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let freud = new CachorroAula11("Labrador", 4, "Amarelo");

console.log(freud);
