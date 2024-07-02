var aula = "Aula 13: Closure";
console.log(aula);

function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(` -> ${cont}`);
        cont ++;
    }
    return somarContador;
}

let soma1 = lembrarSoma(2);
console.log(` -> ${soma1(5)}`);

let meuContador = contador(5);
meuContador();
meuContador();
