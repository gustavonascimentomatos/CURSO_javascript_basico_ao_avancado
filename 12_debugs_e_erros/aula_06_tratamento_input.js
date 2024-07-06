var aula = "Aula 06: Tratamento de input por função";
console.log(aula);

/**
 * Não podemos controlar os dados que o usuário envia, então para o bom funcionamamento do software, devemos tratar;
 */

function validarNumero(numero) {
    let numeroaula06 = Number(numero);
    if (Number.isNaN(numeroaula06)) {
        alert(" -> [ERRO] Informe um número!");
    } else {
        console.log(` -> Valor aceito!`);
        return numeroaula06;
    }
}

let numeroInput = prompt("Digite um número: ");
validarNumero(numeroInput);
