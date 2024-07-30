var aula = "Aula 11: Eventos por scroll";
console.log(aula);

/**
 * Podemos atrelar evento ao scroll da tela também, pelo evento scroll;
 * Por exemplo: podemos criar um elemento assim que o scroll atingir uma posição x;
 */

function verificaRolagem(event) {
    if (window.pageYOffset > 1000) {
        console.log(" -> Altura passou de 1000px");
    }
}

window.addEventListener("scroll", verificaRolagem);

