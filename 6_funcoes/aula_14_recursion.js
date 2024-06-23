var aula = "Aula 14: Recursion";
console.log(aula);

function recursao(n) {
    if (n - 1 < 2) {
        console.log(" -> Recursão parou!");
    } else if (n % 2 != 0) {
        console.log(" -> Número ímpar: " + n);
        recursao(n - 1);
    } else {
        console.log(" -> Número par: " + n);
        recursao(n - 2);
    }
}

recursao(9);
recursao(6);
recursao(3);
