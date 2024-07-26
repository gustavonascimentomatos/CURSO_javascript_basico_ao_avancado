var aula = "Aula 03: Criando um evento";
console.log(aula);

/**
 * Devemos atrelar o evento a um elemento, por exemplo um botão;
 * Depois inserir um listener e o tipo de evento como argumento;
 * Aí o elemento responderá por este evento e, ovibiamente, os outros da página não;
 */

let btnAula03 = document.querySelector("#btn-1");
let contadorDeClicksAula03 = 0;

btnAula03.addEventListener("click", () => {
    contadorDeClicksAula03 ++;
    if (contadorDeClicksAula03 > 1) {
        console.log(" -> Você clicou no botão 1: " + contadorDeClicksAula03 + " vezes!")
    }else {
        console.log(" -> Você clicou no botão 1: " + contadorDeClicksAula03 + " vez!")
    }
});