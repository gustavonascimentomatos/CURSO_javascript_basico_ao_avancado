var aula = "Aula 06: Propagação";
console.log(aula);

/**
 * Quando não definimos um elemento muito bem (seletor brando) ou um elemento que está dentro de outro tem um evento;
 * Pode acontecer a propagação, ou seja, o outro elemento ativará um evento também, nesse caso teremos uma duplicação;
 * Por isso tems um método que para esta propagação e resolve este problema;
 */

let btnAula06 = document.querySelector("#btn-5");
let paragrafoAula06 = document.querySelector("p");
let contadorDeClicksAula06 = 0;
let contadorDeClicksParagrafoAula06 = 0;

function imprimeClicksAula06(event) {
    contadorDeClicksAula06 ++;
    if (contadorDeClicksAula06 > 1) {
        console.log(" -> Você clicou no botão da aula 06: " + contadorDeClicksAula06 + " vezes!")
    }else {
        console.log(" -> Você clicou no botão da aula 06: " + contadorDeClicksAula06 + " vez!")
    }
    event.stopPropagation();
}

btnAula06.addEventListener("click", imprimeClicksAula06);

paragrafoAula06.addEventListener("click", function() {
    contadorDeClicksParagrafoAula06 ++;
    if (contadorDeClicksParagrafoAula06 > 1) {
        console.log(" -> Você clicou no paragrafo: " + contadorDeClicksParagrafoAula06 + " vezes!")
    }else {
        console.log(" -> Você clicou no paragrafo: " + contadorDeClicksParagrafoAula06 + " vez!")
    }
});
