var aula = "Aula 24: Rest operator";
console.log(aula);

/**
 * Uma forma de uma função receber indefinidos parâmetros;
 * O operador rest vai virar um array;
 * O parâmetro pe definido por: ...nome;
 */

let numero1Aula24 = 5;
let numero2Aula24 = 10;
let numero3Aula24 = 15;
let numero4Aula24 = 20;
let numero5Aula24 = 25;
let numero6Aula24 = 30;

function imprimeNumeros24(...args) {
    for (let index = 0; index < args.length; index++) {
        console.log(" -> " + args[index]);        
    }
}

imprimeNumeros24(numero1Aula24, numero6Aula24);
console.log(" ##########")
imprimeNumeros24(numero6Aula24, numero3Aula24, numero1Aula24);
