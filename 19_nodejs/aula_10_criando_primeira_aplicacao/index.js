var aula = "Aula 10: Criando a primeira aplicação";
console.log(aula);

/**
 * Módulo HTTP;
 * Outro módulo muito utilizado, para fazer comunicação via HTTP;
 * O módulo jpa vem com Node;
 * Pode criar um servidor que ser páginas web;
 */

const { createServer } = require("http");

let server = createServer((request, response) => {

    /* Define a resposta como a escrita de um cabeçalho;
     * 200 -> Status de acesso realizado com sucesso;
     * Content-Type -> Define qual será o dado que ele irá receber */
    response.writeHead(200, {"Content-Type": "text/html "});

    /* Escreve o que o corpo da resposta */
    response.write(`
        <h1>Hello World!</h1>
        <h2>Primeira pagina com Node.js</h2>        
    `);

    /* Finaliza a resposta */
    response.end();
});

/* Define a porta que o servidor irá escutar */
server.listen(8000);
console.log("Ouvindo a porta 8000");
