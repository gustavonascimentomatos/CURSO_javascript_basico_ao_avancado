var aula = "Aula 06: Escopo da função";
console.log(aula);

let xyz = 10;

function imprimir() {
    let xyz = 150;
    console.log(` -> xyz escopo da função ${xyz}`);
}

imprimir();
console.log(` -> xyz escopo global: ${xyz}`);
