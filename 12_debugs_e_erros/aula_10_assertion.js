var aula = "Aula 10: Assertion";
console.log(aula);

/**
 * Verificações no programa, que são utilizadas para assegurar que tudo ocorra da forma esperada;
 */

let array1Aula10 = [1, 2, 3, 4, 5];
let array2Aula10 = [];

function iterarArrayAula10(array) {
    if (array.length == 0) {
        throw new Error("[ERRO] O array precisa ter pelo menos um elemento.")
    } else {
        for (let index = 0; index < array.length; index++) {
            console.log(` -> ${array[index]}`);
        }
    }
}

function arrayVazioAula10(array) {
    if (array.length > 0) {
        throw new Error("[ERRO] O array não pode ter elementos");
    } else {
        console.log("O array esta vazio.")
    }
}

iterarArrayAula10(array1Aula10);
iterarArrayAula10(array2Aula10);
