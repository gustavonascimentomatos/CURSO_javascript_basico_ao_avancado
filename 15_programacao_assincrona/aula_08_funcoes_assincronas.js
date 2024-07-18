var aula = "Aula 08: Funções assíncronas";
console.log(aula);

/**
 * Podemos criar funções assíncronas com a palavra reservada async;
 * Elas retornam uma Promise;
 * Se retornar algo, a promessa é resolvida, se der alguma execption a promessa é rejeitada;
 */

async function somarAula08(a, b){
    return a + b;
}

console.log(somarAula08(2,4));

somarAula08(2, 4).then((value) => {
    console.log(` -> Resultado da função async: ${value}`);
});
