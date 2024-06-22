var aula = "Aula 10: Mais sobre arrow functions";
console.log(aula);

function multiplicarFunction(a) {
    return (a * 2);
}

const multiplicarConst = function(a) {
    return (a * 2);
}

const multiplicarArrow = (a) => {
    return (a * 2);
}

const multiplicarArrowSimples = a => a * 2;

console.log(` -> multiplicarFunction: ${multiplicarFunction(2)}`);
console.log(` -> multiplicarConst: ${multiplicarConst(2)}`);
console.log(` -> multiplicarArrow: ${multiplicarArrow(2)}`);
console.log(` -> multiplicarArrowSimples: ${multiplicarArrowSimples(2)}`);
