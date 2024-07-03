let exercicio36 = "Exercício 36: Criando uma classe de conta bancária";
let descricao36 = "Crie uma classe que simule uma conta no banco";
let complemento36 = "Deve conter a propriedade saldo e métodos de depósito e saque";

console.log("###############################################");
console.log(`${exercicio36}\n ${descricao36}\n ${complemento36}`);

class ContaBancariaEx36 {
    constructor(saldo){
        this.saldo = saldo;
    }
}

ContaBancariaEx36.prototype.extrato = function() {
    console.log(` -> Saldo atual: ${this.saldo}`);
}

ContaBancariaEx36.prototype.sacar = function(valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(` *****************************\n *** COMPROVANTE DE SAQUE ***\n Saldo antes do saque: R$ ${this.saldo + valor}\n Valor do saque: R$ ${valor}\n Valor após a transação: ${this.saldo}\n *****************************`)
    } else {
        console.log(` *****************************\n *** SALDO INSUFICIENTE ***\n Saldo atual: R$ ${this.saldo}\n Tentativa de saque: R$ ${valor}\n Diferença faltante: R$ ${valor - this.saldo}\n *****************************`)
    }
}

ContaBancariaEx36.prototype.depositar = function(valor) {
    this.saldo += valor;
    console.log(` *******************************\n *** COMPROVANTE DE DEPÓSITO ***\n Saldo antes do depósito: R$ ${this.saldo - valor}\n Valor do depósito: R$ ${valor}\n Valor após a transação: ${this.saldo}\n *******************************`)
}

let contaGustavo = new ContaBancariaEx36(35)


contaGustavo.depositar(65);
contaGustavo.sacar(880);
contaGustavo.depositar(1250);
contaGustavo.sacar(880);
