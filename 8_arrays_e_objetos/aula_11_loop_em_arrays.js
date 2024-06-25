var aula = "Aula 11: Loop em arrays";
console.log(aula);

/**
 * Uma técnica muito utilizada na programação é o loop nos arrays;
 * Como é uma lista com muitos valores, muitas vezes precisamos ver cada um deles;
 */

let nomes11 = ["Mateus", "Marcos", "Lucas", "João"];
let idades11 = [22, 15, 13];
let contador = 0;

for (let index = 0; index < nomes11.length; index++) {
    console.log(` -> Nome na ${index + 1}ª posição : ${nomes11[index]}`);    
}

while (contador < idades11.length) {
    console.log(` -> Idade na ${contador + 1}ª posicão: ${idades11[contador]}`);
    contador ++;
}
