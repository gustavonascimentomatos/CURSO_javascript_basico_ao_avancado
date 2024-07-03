let exercicio40 = "Exercício 40: Criando uma classe de conta bancaria";
let descricao40 = "Crie uma classe que simule uma conta bancaria";
let complemento40 = "Deve conter as propriedades saldo conta corrente, saldo conta poupança e juros da poupança";
let extra40 = "Crie métodos de deposito e saque, tranferencia poupança/corrente corrente/poupança";
let adicional40 = "Crie uma conta especial que herde da conta normal e tenha os juros dobrados da conta normal";

console.log("###############################################");
console.log(`${exercicio40}\n ${descricao40}\n ${complemento40}\n ${extra40}\n ${adicional40}`);


class ContaBancariaEx40 {
    constructor(saldoCorrente, saldoPoupanca, taxaJurosPoup) {
        this.saldoContaCorrente = saldoCorrente;
        this.saldoContaPoupanca = saldoPoupanca;
        this.taxaJurosPoupanca = taxaJurosPoup;
    }
}

class ContaBancariaEspecialEx40 extends ContaBancariaEx40 {
    constructor(saldoCorrente, saldoPoupanca, taxaJurosPoup) {
        super(saldoCorrente, saldoPoupanca, (taxaJurosPoup * 2))
    }
}

ContaBancariaEx40.prototype.sacarContaCorrente = function(valor) {
    if (valor <= this.saldoContaCorrente) {
        this.saldoContaCorrente -= valor;
    }
}

ContaBancariaEx40.prototype.depositarContaCorrete = function(valor) {
    this.saldoContaCorrente += valor;
}

ContaBancariaEx40.prototype.depositarContaPoupanca = function(valor) {
    this.saldoContaPoupanca += valor;
}

ContaBancariaEx40.prototype.transferirCorrenteToPoupanca = function(valor) {
    if (valor <= this.saldoContaCorrente) {
        this.saldoContaPoupanca += valor;
        this.saldoContaCorrente -= valor;
    }
}

ContaBancariaEx40.prototype.transferirPoupancaToCorrente = function(valor) {
    if (valor <= this.saldoContaPoupanca) {
        this.saldoContaCorrente += valor;
        this.saldoContaPoupanca -= valor;
    }
}

let contaBancariaEx40 = new ContaBancariaEx40(0, 0, 8.5);
let contaBancariaEspecialEx40 = new ContaBancariaEspecialEx40(5000, 80000, 8.5)

contaBancariaEx40.depositarContaCorrete(5000);
contaBancariaEx40.depositarContaPoupanca(500);
contaBancariaEx40.sacarContaCorrente(10000);
contaBancariaEx40.sacarContaCorrente(100);
contaBancariaEx40.transferirPoupancaToCorrente(250);
contaBancariaEx40.transferirCorrenteToPoupanca(1250);

contaBancariaEspecialEx40.sacarContaCorrente(5000);

console.log(contaBancariaEx40);
console.log(contaBancariaEspecialEx40);
