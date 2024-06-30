var aula = "Aula 10: Métodos no prototype";
console.log(aula);

/**
 * Além de propriedades, podemos criar a classe base já com métodos;
 * Basta definir ao prototype o método desejado;
 */

function CriaCachorroAula10(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

CriaCachorroAula10.prototype.uivar = function() {
    console.log(" -> Auuuuuuuuuuuu!");
}

CriaCachorroAula10.prototype.latir = function() {
    console.log(" -> Au au!");
}

let scooby = new CriaCachorroAula10("Dog Alemão", 4, "Marrom");

console.log(scooby);
scooby.uivar();
scooby.latir();
