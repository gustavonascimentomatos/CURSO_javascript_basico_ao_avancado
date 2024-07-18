var aula = "Aula 07: Resolvendo várias Promises";
console.log(aula);

/**
 * Com o metodo all, podemos resolver várias promessas de uma vez só;
 * Ou seja passamos pelas por array e quando a úçtima for resolvida, recebebos a resposta;
 */

const promise01Aula07 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 5000);
});

const promise02Aula07 = Promise.resolve(20);

const promise03Aula07 = new Promise((resolve, reject) => {
    resolve(30);
});

Promise.all([promise01Aula07, promise02Aula07, promise03Aula07]).then((values) => {
    console.log(values);
});

