var aula = "Aula 09: Instanciando classes por new";
console.log(aula);

/**
 * Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também;
 */

function CriaCachorroAula09(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function() {
        console.log(" -> Auuuuuuuuuuuu!");
    }
}

let husky = new CriaCachorroAula09("Husky", 3, "cinza");

console.log(husky);
husky.uivar();
