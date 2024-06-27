var aula = "Aula 25: Destructuring em objetos";
console.log(aula);

/**
 * Permite definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring;
 */

let objetoAula25 = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0",
}

const {rodas: constRodas, portas: constPortas, tetosolar: constTetoSolar, motor: constMotor} = objetoAula25;

console.log(" -> " + constMotor);
console.log(" -> " + constPortas);
