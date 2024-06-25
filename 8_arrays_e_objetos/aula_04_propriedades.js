var aula = "Aula 04: Propriedades";
console.log(aula);

/**
 * Propriedades são informações que podem ser verificadas em um valor;
 * Quase todos os valores de JavaScript tem propriedades, menos null e undefined;
 * Podemos acessar as propriedades de duas maneiras;
 */

let numeros4 = [1, 3, 5, 8, 12];
let nome4 = "João";


console.log(` -> Acesso da propriedade utilizando o ponto ${numeros4.length}`);
console.log(` -> Acesso da propriedade pelo seu nome entre colchetes e aspas: ${numeros4["length"]}`);
console.log(` -> Acesso da propriedade pelo proprio índice: ${numeros4[3]}`);
console.log(` -> Tamanho da variavel nome4 utilizando o ponto: ${nome4.length}`);
