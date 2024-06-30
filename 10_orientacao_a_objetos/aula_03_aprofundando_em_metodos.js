var aula = "Aula 03: Aprofundando em métodos";
console.log(aula);

/**
 * Propriedades que servem como funções;
 * Ou seja, as ações dos objetos;
 * Invocamos os métodos da mesma maneira que funções;
 */


const cachorroAula3 = {
    uivar: function() {
        console.log(" -> Auuuuuuuuu");
    },
    rosnar: function() {
        console.log(" -> Grrrrrrrrr");
    },
    latir: function() {
        console.log(" -> Au au au au");
    }
}

cachorroAula3.uivar();
cachorroAula3.rosnar();
cachorroAula3.latir();
