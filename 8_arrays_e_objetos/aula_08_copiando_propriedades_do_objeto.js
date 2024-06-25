var aula = "Aula 08: Copiando propriedades de um objeto";
console.log(aula);

/**
 * Podemos copiar todas as propriedades de um objeto para outro;
 */

let carro = {
    portas: 4,
    portamalas: "200l",
    motor: "2.0"
}

let opcionais = {
    tetosolar: true,
    arcondicionado: true,
    direcaoeletrica: true,
}

console.log(carro);
console.log(opcionais);

Object.assign(carro, opcionais);

console.log(carro);
