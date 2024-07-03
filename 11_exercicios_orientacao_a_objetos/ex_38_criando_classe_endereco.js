let exercicio38 = "Exercício 38: Criando uma classe de endereço";
let descricao38 = "Crie uma classe que simule um endereço";
let complemento38 = "Deve conter as propriedades pais, estado, cidade, bairro, rua, numero, complemento, referencia";
let extra38 = "Construtor definido por completo, métodos para atualizar todas as propriedades";

console.log("###############################################");
console.log(`${exercicio38}\n ${descricao38}\n ${complemento38}\n ${extra38}`);

class EnderecoEx38 {
    constructor(pais, estado, cidade, bairro, logradouro, numero, complemento) {
        this.pais = pais;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
    }
}

EnderecoEx38.prototype.alterarPais = function(novoPais) {
    this.pais = novoPais;
}

EnderecoEx38.prototype.alterarEstado = function(novoEstado) {
    this.estado = novoEstado;
}

EnderecoEx38.prototype.alterarCidade = function(novaCidade) {
    this.cidade = novaCidade;
}

EnderecoEx38.prototype.alterarBairro = function(novoBairro) {
    this.bairro = novoBairro;
}

EnderecoEx38.prototype.alterarRua = function(novologradouro) {
    this.logradouro = novologradouro;
}

EnderecoEx38.prototype.alterarNumero = function(novoNumero) {
    this.numero = novoNumero;
}

EnderecoEx38.prototype.alterarComplemento = function(novoComplemento) {
    this.complemento = novoComplemento;
}


let enderecoEx38 = new EnderecoEx38("Brasil", "São Paulo", "São Paulo", "Sé", "Praça da Sé", "1", "Catedral");

console.log(enderecoEx38);

enderecoEx38.alterarRua("Rua do Carmo");
enderecoEx38.alterarNumero("S/N");
enderecoEx38.alterarComplemento("Poupatempo Sé");

console.log(enderecoEx38);









