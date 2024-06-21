console.log("##########################################");
var aula = "Aula 16: Estrutura de controle - else if";
console.log(aula);

/*
 * Ainda podemos encadear mais condições com o else if;
 * Ou sejam antes de executar um else, ou até mesmo sem ele, podemos verificar mais uma condição;
 */


let nomeNovo = "Gustavo";

if (nomeNovo != undefined && nomeNovo == "Joaquim") {
    console.log(` -> Nome está definido!`);
} else if (nomeNovo == "Gustavo" && nomeNovo.length > 1) {
    console.log(` -> Nome é Gustavo!`);
} else {
    console.log(` -> Nome não é Gustavo!`);
}
