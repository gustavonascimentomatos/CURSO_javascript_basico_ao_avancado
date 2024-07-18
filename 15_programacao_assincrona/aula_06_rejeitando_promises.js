var aula = "Aula 06: Rejeitando Promises";
console.log(aula);

/**
 * Além do resolve, há o metodo reject;
 * Que é quando determinada lógica não satisfaz nosso programa, então podemos ir para outra com o reject, em vez do resolve;
 * REsolve e reject terminam a Promise, ou seja, não podemos chamar mais o then por exemplo;
 */

function verificaNumeroaula06(numero) {
    return new Promise((resolve, reject) => {
        if (numero == 2) {
            resolve(console.log(` -> O número é ${numero}`));
        } else {
            reject(new Error("[ERRO] Promise falhou!"));
        }
    });
};

verificaNumeroaula06(2);
//verificaNumeroaula06(3);
