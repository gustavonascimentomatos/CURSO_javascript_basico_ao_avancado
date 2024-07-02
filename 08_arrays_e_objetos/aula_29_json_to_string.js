var aula = "Aula 29: Convertendo JSON para string";
console.log(aula);

/**
 * Podemos converter o JSON para uma string de forma fácil;
 * Ou também uma string para JSON;
 */

let pessoaAula29 = {
    "name": "Gustavo",
    "age": 28,
    "position": "Developer",
    "languages": ["JavaScript", "C", "C++", "Python"]
}

let pessoaAula29Texto = JSON.stringify(pessoaAula29);
let pessoaAula29JSON = JSON.parse(pessoaAula29Texto);

console.log(" -> " + pessoaAula29Texto);
console.log(" -> " + pessoaAula29JSON);
console.log(" -> " + pessoaAula29JSON.languages[0]);
