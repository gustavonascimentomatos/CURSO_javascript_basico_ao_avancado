var aula = "Aula 04: Definição de função";
console.log(aula);

function imprimirNoConsole() {
    console.log(" -> Olá, Mundo!");
}

function imprimirUmNumero(numero) {
    console.log(" -> O número passado como parâmetro foi: " + numero);
}

const numeroAleatorio = function(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(` -> O número aleatório gerado foi: ${numero}`);
    return numero;
}

imprimirNoConsole();
imprimirUmNumero(55);
numeroAleatorio(50,100);
