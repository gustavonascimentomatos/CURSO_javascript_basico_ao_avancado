var aula = "Aula 08: Instanciando classes por função";
console.log(aula);

/**
 * Constutores são formas de instanciar uma classe em uma linguagem de programação;
 * Instanciar === criar um objeto novo;
 * No construtor já podemos definir propriedade;
 */

function criaCachorroAula08(raca, patas, cor) {
    let cachorroAula08 = Object.create({});
    cachorroAula08.raca = raca;
    cachorroAula08.patas = patas;
    cachorroAula08.cor = cor;
    cachorroAula08.latir = function() {
        console.log(" -> Au au!");
    }

    return cachorroAula08;  
}

let bulma = criaCachorroAula08("Shin Tzu", 4, "Branca");

console.log(bulma);
bulma.latir();
