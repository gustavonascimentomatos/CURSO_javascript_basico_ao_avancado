var aula = "Aula 07: Mais sobre escopo da função";
console.log(aula);

let j = 10;

if (j > 5) {
    let j = 20;
    j ++;
    console.log(` -> j escopo do if ${j}`);
}

console.log(` -> j escopo global= ${j}`);
