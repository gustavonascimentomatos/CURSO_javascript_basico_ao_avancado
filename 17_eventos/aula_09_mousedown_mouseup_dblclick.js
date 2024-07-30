var aula = "Aula 09: Mais sobre eventos de mouse";
console.log(aula);

/**
 * No mouse temos também eventos como mousedown e mouseup, semelhante aos das teclas;
 * Dblclick para ativar com dois cliques;
 */

function apertouBotaoMouse(event){
    console.log(" -> Você apertou o botão do mouse 'MOUSEDOWN'");
   event.stopPropagation();
}

function soltouBotaoMouse(event){
    console.log(" -> Você soltou o botão do mouse 'MOUSEUP'");
    event.stopPropagation();
}

function duploClickBotaoMouse(event) {
    console.log(" -> Você apertou o botão duas vezes 'DBLCLICK'");
    event.stopPropagation();
}

function apertouBotaoDireito(event) {
    event.preventDefault();
    console.log(" -> Você clicou com o botão direito");
}

let btn1Aula09 = document.querySelector("#btn-6");

btn1Aula09.addEventListener("mousedown", apertouBotaoMouse);
btn1Aula09.addEventListener("mouseup", soltouBotaoMouse);
btn1Aula09.addEventListener("dblclick", duploClickBotaoMouse);
btn1Aula09.addEventListener("contextmenu", apertouBotaoDireito)
