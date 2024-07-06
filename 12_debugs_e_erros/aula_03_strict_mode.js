"use strict"

var aula = "Aula 03: Strict Mode";
console.log(aula);

/**
 * Deixa o JavaScript mais rigoroso na hora de se programar;
 * Deve ser declarado no top de arquivos ou funções;
 * Colcar o strickt ajuda você a codificar de forma correta e não vai impedir/limitar nada no software;

 */

let ola = "teste";
//delete Object.prototype;

function teste() {
    "use strict";
    let printDaFuncao = "Olá, mundo!";
}

teste();

let objeto = {p: 1, p: 2}

// Não pode definir propriedade em valor definitivo
// false.prop = "";
// "teste".prop = "";
