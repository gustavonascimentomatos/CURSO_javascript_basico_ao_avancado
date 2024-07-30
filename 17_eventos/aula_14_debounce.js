var aula = "Aula 14: Debounce";
console.log(aula);

/**
 * Um evento que dispara múltiplas vezes pode ser um problema para o computador do cliente;
 * Por isso podemos fazer um debounce, que é um suavizador de evento, para não chamar o mesmo tantas vezes;
 */

let timeout;

function imprimeCoordenadasMouseAula14(event) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        console.log(" -> X: " + event.x);
        console.log(" -> Y: " + event.y);
        console.log("-----------");
    },500)
}

window.addEventListener("mousemove", imprimeCoordenadasMouseAula14); 