var aula = "Aula 08: Eventos por tecla";
console.log(aula);

/**
 * Sempre que uma tecla é pressionada, são gerados dois evendos keyup e keydown;
 * Podemos realizar ações nestes dois eventos também;
 * Keyup é quando soltamos a tecla;
 * Keydown é quando apertamos a tecla;
 */

window.addEventListener("keydown", function (event) {
    if (event.key == "q") {
        console.log(" -> Você apertou a letra 'Q'");
    } else if (event.key == "Enter") {
        console.log(" -> Você apertou o 'ENTER'")
    } else {
        console.log(" -> Você NÃO apertou a letra 'q' e sim a letra: " + event.key.toUpperCase());
    }
});

window.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        console.log(" -> Você soltou o 'ENTER");
    }
});