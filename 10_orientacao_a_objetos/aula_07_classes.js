var aula = "Aula 07: Classes";
console.log(aula);

/**
 * O prototupe do JavScript pode ser chamado de classe;
 * Em outras linguagens uma Class é um molde de um objeto;
 * Ou seja, podemos criar diversos objetos em cima de um prototype;
 */

let cachorroAula07 = {
    patas: 4,
    raca: "SRD",
    latir: function() {
        console.log(" -> Au au!")
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    
}

let labrador = Object.create(cachorroAula07);

labrador.latir();
labrador.setRaca("Labrador");

console.log(labrador);
