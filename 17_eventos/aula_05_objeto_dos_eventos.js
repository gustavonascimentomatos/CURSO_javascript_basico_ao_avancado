var aula = "Aula 05: Objeto do Evento";
console.log(aula);

/**
 * Quando criamos eventos temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento;
 * Ele contém propriedades que podem ser utilizadas a nosso favor;
 * O objeto é criado pelo JavaScript automaticamente;
 */

let btn1Aula05 = document.querySelector("#btn-4");

function imprimeObjetoEvento(event) {
    console.log(event);
};

btn1Aula05.addEventListener("click", imprimeObjetoEvento);

btn1Aula05.addEventListener("click", function(event) {
    console.log(event);
});