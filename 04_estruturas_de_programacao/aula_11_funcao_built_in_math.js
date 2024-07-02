console.log("##########################################");
var aula = "Aula 11: Função built in - Math";
console.log(aula);

/*
 * Função utilizada para expressões/calculos matemáticos;
 * Esta função é muito utilizada;
 */

let maior = Math.max(6, 12, 28, 55, 8);
let menor = Math.min(6, 12, 28, 55, 8);
let arredondar = Math.round(5.4);
let arredondarParaCima = Math.ceil(5.4)
let semCasasDecimais = Math.floor(5.99);

console.log(` -> O maior valor informado é: ${maior}`);
console.log(` -> O menor valor informado é: ${menor}`);
console.log(` -> O valor arredondado é: ${arredondar}`);
console.log(` -> O valor arredondado para cima é: ${arredondarParaCima}`);
console.log(` -> O valor sem as casas decimais é: ${semCasasDecimais}`);
