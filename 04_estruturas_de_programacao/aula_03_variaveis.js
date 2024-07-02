console.log("##########################################");
var aula = "Aula 03: O que são variáveis";
console.log(aula);

/**
 * Salvamos os valores em variáveis (isso é um statement);
 * Depois podemos criar expressões com os valores salvos;
 * Podemos também mudar o valor que foi salvo anteriormente;
 * Um let pode definir várias variáveis também;
 */

let nome = "Gustavo";
let laranjas = 5;
let um = 1, dois = 2, tres = 3;

console.log(` -> Hello, ${nome}!`);
console.log(` -> A cesta possui ${laranjas} laranja(s).`);

laranjas = 7894;
nome = "João";

console.log(` -> Helo, mas agora para o ${nome}!`);
console.log(` -> A nova quantia de laranjas na cesta é ${laranjas} laranja(s).`);

laranjas = "Laranjas;"

console.log(` -> Agora o tipo da variável 'laranja' é: ${typeof(laranjas)}`);
console.log(` -> A soma das variáveis ${um}, ${dois}, ${tres} é igual à: ${um + dois + tres}`);
