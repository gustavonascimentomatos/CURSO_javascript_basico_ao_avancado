let aula = "Aula 03: Utilizando let e const";
console.log(aula);

/**
 * Temos duas novas formas de declarar variáveis no ES6;
 * A let pe semelhante ao var podemos alterar valores;
 * E a const, que pe uma forma de declarar constantes;
 * O grande diferencial é o escopo de blocos, não temos mais variaveis sendo 'vazadas' para outros escopos por causa do mesmo nome;
 */

var x = 10;
var y = 15;

if (y > 10) {
    var x = 5
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
}

console.log(a);

for (let i = 0; i <= 5; i++) {
    console.log(i);    
}

function logName() {
    const name = "Gustavo";
    console.log(name);
}

const name = "Matos";

logName();
console.log(name)