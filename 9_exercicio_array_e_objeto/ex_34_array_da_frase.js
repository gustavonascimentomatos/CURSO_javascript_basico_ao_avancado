let exercicio34 = "Exercício 34: Crinado array a partir de uma frase";
let descricao34 = "Crie um array a partir de uma frase";
let complemento34 = "imprima cada palavra do array no console por meio de um for";

console.log("###############################################");
console.log(`${exercicio34}\n ${descricao34}\n ${complemento34}`);


let fraseEx34 = "Não espere o futuro mudar tua vida, porque o futuro será a consequência do presente";

let arrayEx34 = fraseEx34.split(" ");

for (let index = 0; index < arrayEx34.length; index++) {
    console.log(` -> ${arrayEx34[index]}`);
}
