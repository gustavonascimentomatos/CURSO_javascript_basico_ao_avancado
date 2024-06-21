console.log("##########################################");
var aula = "Aula 25: Estrutura de controle - switch";
console.log(aula);

/*
 * Quando há a necessidade de vários ifs, podemos utilizar o switch/case;
 * Para sair de um case podemos utilizar o break;
 * Podemos inserir uma expressão default, para caso nenhum valor for correspondido;
 */

let nomeCase = "João";

switch (nomeCase) {
    case "Gustavo":
        console.log(` -> O nome é Gustavo!`);
        break;
    case "João":
        console.log(` -> O nome é João!`);
        break;
    default:
        console.log(` -> O nome não foi encontrado!`);
        break;
}
