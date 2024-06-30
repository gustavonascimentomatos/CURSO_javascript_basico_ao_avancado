var aula = "Aula 05: Prototypes";
console.log(aula);

/**
 * Um objeto fallback de outro objeto;
 * Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procurada no prototype deste objeto;
 * O prototype de um objeto criado do zero é o Object, que tem os métosos nativos da linguagem;
 */

const pessoaAula05 = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoaAula05));
console.log(` -> ${Object.getPrototypeOf(pessoaAula05) === Object.prototype}`);
console.log(` -> Tem a propriedade 'maos': ${pessoaAula05.hasOwnProperty("maos")}`);
