var aula = "Aula 04: Removendo um evento";
console.log(aula);

/**
 * Da mesma forma que podemos adicionar eventos, podemos remover quando acharmos necessário;
 * Para isso utilizamos o método removeEventListener, onde passamos o evento e a função que o evento está escutando;
 */

let btn2Aula04 = document.querySelector("#btn-2");
let btn3Aula04 = document.querySelector("#btn-3");
let contadorDeClicksAula04 = 0;

function imprimeClicks() {
    contadorDeClicksAula04 ++;
    if (contadorDeClicksAula04 > 1) {
        console.log(" -> Você clicou no botão 2: " + contadorDeClicksAula04 + " vezes!")
    }else {
        console.log(" -> Você clicou no botão 2: " + contadorDeClicksAula04 + " vez!")
    }
};

btn2Aula04.addEventListener("click", imprimeClicks);

btn3Aula04.addEventListener("click", function() {
    btn2Aula04.removeEventListener("click", imprimeClicks)
});