let exercicio32 = "Exercício 32: Iteração por todo array";
let descricao32 = "Crie um array com 5 elementos";
let complemento32 = "Faça uma iteração entre todos eles e imprima no console o valor";

console.log("###############################################");
console.log(`${exercicio32}\n ${descricao32}\n ${complemento32}`);

let arrayEx32 = ["Bianchi", "Cervélo", "Pinarello", "Canyon", "Specialized"];

console.log(" -> Impresso por forEach!")
arrayEx32.forEach(element => {
    console.log("   - " + element)
});

console.log(" -> Impresso por forEach!")
for (let index = 0; index < arrayEx32.length; index++) {
    console.log("   - " + arrayEx32[index]);
}
