var aula = "Aula 12: Argumentos com valor default";
console.log(aula);

const repetirFrase = (frase, vezes=2) => {
    for (let index = 1; index <=vezes; index++) {
        console.log(` -> ${frase}: ${index}`)
    }
}

const potencia = (base, exp=2) => {
    return Math.pow(base, exp);
}

repetirFrase("Teste com parametro", 3);
repetirFrase("Teste sem parametro");

console.log(` -> ${potencia(2)}`);
console.log(` -> ${potencia(2, 2)}`);
console.log(` -> ${potencia(2, 3)}`);
