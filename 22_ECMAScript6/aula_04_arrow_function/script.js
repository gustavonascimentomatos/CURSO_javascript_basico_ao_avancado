let aula = "Aula 04: Arrow function na prática";
console.log(aula);

/**
 * A arrow functioné um recurso para cirar funções de dorma mais simples;
 * Mas ela não funciona exatamente como uma function em todos os aspectos;
 * O this da arrow function é relacionado ao elemento pai de quem está a executando;
 */

const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b; 
}

const arrowSumReduzida = (a, b) => a + b;

console.log(`   Function = ${sum(5, 5)}`);
console.log(`   Arrow Function = ${arrowSum(5, 5)}`);
console.log(`   Arrow Function Reduzida = ${arrowSumReduzida(5, 5)}`);

const greeting = (name) => {
    if (name) {
        return `Olá ${name}!`
    } else {
        return "O nome não foi informado!"
    }
}

console.log(`   ${greeting("Gustavo")}`);
console.log(`   ${greeting()}`);

const arrowSemParametros = () => console.log("  Arrow Function Sem Parâmetros");

arrowSemParametros();

const user = {
    name: "Gustavo",
    sayUserNameFunction() {
        var self = this;
        setTimeout(function(){
            console.log(self);
            console.log(`   UserName: ${self.name}`);
        }, 1500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log(`   UserName: ${this.name}`);
        }, 3000)
    }

}

user.sayUserNameFunction();
user.sayUserNameArrow();