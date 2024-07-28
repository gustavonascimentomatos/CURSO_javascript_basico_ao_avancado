var aula = "Aula 07: Ações Default";
console.log(aula);

/**
 * Muitos elementos/teclas já tem ações pre-definidas, como clicar em um link los leva a outra página;
 * Podemos parar este evento default e criar uma lógica diferente para o elemento em questão;
 */

let linkAula07 = document.querySelector("a");

linkAula07.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(" -> Função de link removida!")
});  