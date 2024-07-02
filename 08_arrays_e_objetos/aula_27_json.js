var aula = "Aula 27: O que é JSON";
console.log(aula);

/**
 * JSON = JavaScript Object Notation;
 * Utilizado para comunicaçõa entre serviços, em: back end <-> front end;
 * Basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript;
 */

let pessoaAula27 = {
    "name": "Gustavo",
    "age": 28,
    "position": "Developer",
    "languages": ["JavaScript", "C", "C++", "Python"]
}

console.log(" -> " + pessoaAula27.name);
console.log(" -> " + pessoaAula27.position);
console.log(" -> " + pessoaAula27.languages[0]);
