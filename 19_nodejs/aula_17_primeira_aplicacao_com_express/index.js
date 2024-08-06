/* Chamada do express por meio do require */
let express = require("express");

/* Instanciando o método express */
let app = express();

/* Criação da rota principal */
app.get("/", function(req, res) {

    /* Envia a resposta para a requisição */
    res.send("Primeira rota com Express!");

});

/* Definição de qual é a porta que a aplicação está escutando */
app.listen(7070, function() {
    console.log("Escutando na porta 7070");
});
