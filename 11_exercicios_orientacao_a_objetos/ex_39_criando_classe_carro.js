let exercicio39 = "Exercício 39: Criando uma classe de carro";
let descricao39 = "Crie uma classe que simule um carro";
let complemento39 = "Deve conter as propriedades marca, cor, gasolina restante";
let extra39 = "Crie um método de dirigir o carro que vá diminuindo a gasolina gradativamente e um abastecer para aumentar a gasolina restante";

console.log("###############################################");
console.log(`${exercicio39}\n ${descricao39}\n ${complemento39}\n ${extra39}`);

class CarroEx39 {
    constructor(marca, cor, gasolinaRestante, autonomia) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.autonomia = autonomia;
    }
}

CarroEx39.prototype.dirigir = function() {
    
    let distanciaPercorrida = 0;

    if (this.gasolinaRestante > 0) {
        while ((this.autonomia * this.gasolinaRestante) >= 0) {
            
            distanciaPercorrida ++;
            this.gasolinaRestante -= (1/this.autonomia);
            
        }
    }

    console.log(` -> Você percorreu: ${distanciaPercorrida}Km até o combustível acabar!`)
}

CarroEx39.prototype.abastecer = function(litros) {
    this.gasolinaRestante += litros;
}

let carroEx39 = new CarroEx39("Kia", "Preto", 35, 14);

carroEx39.dirigir();
