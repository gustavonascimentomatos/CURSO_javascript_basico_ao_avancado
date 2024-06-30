var aula = "Aula 04: Mais sobre métodos";
console.log(aula);

/**
 * Normalmente os métodos interagem com os objetos;
 * Até mudando os valores de suas propriedades para corresponder a lógica do programa desenvolvido;
 */

const cachorroAula4 = {
    raca: "Sem Raça Definida",
    uivar: function() {
        console.log(" -> Auuuuuuuuu");
    },
    rosnar: function() {
        console.log(" -> Grrrrrrrrr");
    },
    latir: function() {
        console.log(" -> Au au au au");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return " -> A raça é: " + this.raca;
    }
}

console.log(` -> Raça: ${cachorroAula4.raca}`);
cachorroAula4.setRaca("Shih Tzu");
console.log(` -> Raça: ${cachorroAula4.raca}`);
console.log(cachorroAula4.getRaca());
