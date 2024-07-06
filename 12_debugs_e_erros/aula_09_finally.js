var aula = "Aula 09: Finally";
console.log(aula);

/**
 * Finally é executada independente do resultado do try/catch;
 * E pode existir com try e catch ou apenas try;
 */

try {
    let aAula09 = 2 + bAula09;
} catch (error) {
    console.log(error);
} finally {
    console.log(` -> Executou dentro do Finally!`);
}
