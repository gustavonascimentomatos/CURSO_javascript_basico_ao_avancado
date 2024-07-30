var aula = "Aula 12: Eventos de foco";
console.log(aula);

/**
 * Quando focamos em um elemento ou saímos dele podemos também atrelar um evento a esta ação;
 * Focus para quando um elemento recebe fofo e blur quando ele perde;   
 */

let inputAula12 = document.querySelector("input");

inputAula12.addEventListener("focus", function() {
    console.log(" -> Entrou no input");
});

inputAula12.addEventListener("blur", function(){
    console.log(" -> Saiu no input");
});