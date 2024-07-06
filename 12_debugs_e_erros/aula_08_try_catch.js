var aula = "Aula 08: Try e Catch";
console.log(aula);

/**
 * O bloco try catch, vai tentar ezecutar um código, caso não consiga ele pode retornar o erro que esse código gerou;
 * Muito útil para degub;
 */

try {
    let aAula08 = 2 + bAula08;
} catch (error) {
    console.log(error);
}

console.log(` -> Executado após o try catch`);
