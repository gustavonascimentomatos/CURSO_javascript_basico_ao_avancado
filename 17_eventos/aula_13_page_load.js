var aula = "Aula 13: Eventos de page load";
console.log(aula);

/**
 * Podemos atrelar um evento quando a página carrega,pelo evento load;
 * E antes do usuário fechar a página pelo evento beforeunload;
 */

window.addEventListener("load", function() {
    //alert("Assine o termo de uso");
});

window.addEventListener("beforeunload", function(event) {
    event.returnValue = null;  
});