var aula = "Aula 08: Escopo aninhado";
console.log(aula);

let k = 5;

function multiplicar(x, y) {
    let k = (x * y);

    if (k > 10) {
        let k = 0;
        console.log(` -> k no escopo do if: ${k}`);
    }
    console.log(` -> k no escopo da função: ${k}`)
}

console.log(` -> k no global: ${k}`);
multiplicar(3, 7);
