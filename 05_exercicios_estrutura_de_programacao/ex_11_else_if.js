let exercicio11 = "Exercício 11: else if";
let descricao11 = "Armazenar informações de idade e cnh";
let complemento11 = "validar idade e cnh para todos os casos possíveis";

console.log("###############################################");
console.log(`${exercicio11}\n ${descricao11}\n ${complemento11}`);


let idadeEx11 = 15
;
let cnh = true;

if (idadeEx11 >= 18 && cnh == true) {
    console.log(` -> Você possue idade e habilitação, PODE DIRIGIR!`);
} else if (idadeEx11 >= 18 && cnh == false) {
    console.log(` -> Você possui idade, mas não habilitação, NÃO PODE DIRIGIR!`);
} else {
    console.log(` -> Você não possui idade e nem habilitação, NÃO PODE DIRIGIR!`);
}
