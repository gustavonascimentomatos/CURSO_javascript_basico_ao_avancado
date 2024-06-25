var aula = "Aula 07: Deletando e criando propriedades de um objeto";
console.log(aula);

/**
 * Podemos adicioar e deletar propriedades ao longo do nosso programa;
 */

let pessoa = {
    nome: "Gustavo",
    idade: 28,
    profissao: "Programador",
}

console.log(` -> Nome: ${pessoa.nome}`);
delete pessoa.nome;
console.log(` -> Nome: ${pessoa.nome}`);
console.log(pessoa);
pessoa.casado = true;
console.log(pessoa);
