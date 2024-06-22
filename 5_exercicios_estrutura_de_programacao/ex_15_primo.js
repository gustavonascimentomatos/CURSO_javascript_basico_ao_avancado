let exercicio15 = "Exercício 15: Primo";
let descricao15 = "Escreva três comparações com boolean";
let complemento15 = "Uma com maior, menor ou igual e diferente";

console.log("###############################################");
console.log(`${exercicio15}\n ${descricao15}\n ${complemento15}`);

let primo = 17;
let contaPrimo = 0;

for (let index = 1; index <= primo; index++) {
    if (primo % index == 0) {
        contaPrimo ++;
    }
}

if (contaPrimo == 2) {
    console.log(` -> O número: ${primo} é primo`);
} else {
    console.log(` -> O número: ${primo} não é primo`);   
}
