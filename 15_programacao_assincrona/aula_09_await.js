var aula = "Aula 09: Utilizando await";
console.log(aula);

/**
 * Nas async functions, podemos determinas uma instrução await;
 * Que vai esperar uma promise ser resolvida, para os resultados;
 */

function somaComDelayAula09(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a+b);
        }, 4000);
    })
}

async function soma3ValoresAula09(a, b, c) {
    let x = somaComDelayAula09(a, b);
    let y = c;

    return await x + y;
}

soma3ValoresAula09(1,2,3).then(value => console.log(value));
