console.log("##########################################");
var aula = "Aula 05: Convenção no nome de variáveis";
console.log(aula);

/**
 * Não pode começar uma variável com número;
 * Números poderam ser usados no meio ou no final;
 * Pode conter $ ou _, mas outros caracteres especiais;
 * Em JS não pode conter pontuação ou outros especiais;
 * Pode iniciar com letra maiúscula;
 * Pode utilizar camelCase;
 */

// Declaraçõe Corretas;
let nome1 = "teste 1";
let $nome = "teste 2";
let _nome = "teste 3";
let Nome = "teste 4";
let novoNome = "teste 5"

console.log(` -> ${nome1},; ${$nome}; ${_nome}; ${Nome}; ${novoNome};`);

// Declarações Incorretas;
// let 3nome = "teste 1";
// let @nome = "teste 2";
// let !nome = "teste 3";
