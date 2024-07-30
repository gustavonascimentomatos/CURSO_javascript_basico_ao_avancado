
var aula = "Aula 10: Movimentos do mouse";
console.log(aula);

/**
 * Podemos ativar eventos com a movimentação do mouse também;
 * Utilizamos para isto utilizamos o evento mousemove;
 * Através desse evento podemos detectar a posição do ponteiro do mouse na tela;
 */

function imprimeCoordenadasMouse(event) {
    console.log(" -> X: " + event.x);
    console.log(" -> Y: " + event.y);
    console.log("-----------");
}

//window.addEventListener("mousemove", imprimeCoordenadasMouse);
