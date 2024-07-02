var aula = "Aula 05: Mais sobre função";
console.log(aula);

function multiplicarTresNumero(x, y, z) {
    return (x *y* z);
}

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log(` -> Você possui idade e cnh, PODE DIRIGIR!`);
    } else if (idade >= 18 && cnh == false) {
        console.log(` -> Você possui idade mas não cnh, NÃO PODE DIRIGIR!`);
    } else {
        console.log(` -> Você não possui idade e nem cnh, NÃO PODE DIRIGIR!`);
    }
}

const mult = multiplicarTresNumero(5, 4, 8);

console.log(` -> ${multiplicarTresNumero(2, 3, 4)}`);
console.log(` -> ${mult}`);
podeDirigir(19, true);
