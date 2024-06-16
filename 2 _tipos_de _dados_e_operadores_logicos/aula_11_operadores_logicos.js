var aula = "Aula 11: Operadores lógicos";
console.log(aula);

/**
 * Por meio de uma comparação resultam em um boolean
 * && - and -> para ser true os dois 'lados' da comparação precisam ser true;
 * || - or -> para ser true, basta um dos 'lados' da comparação ser true;
 * ! - not -> Inverte os valores (true vira false) (false vira true);
 */

console.log(`5 > 3 && 3 == 2?: ${5 > 3 && 3 == 2}`);
console.log(`5 > 3 || 3 == 2?: ${5 > 3 || 3 == 2}`);
console.log(`3 > 3 && "Gustavo" == "Gustavo"?: ${3 == 3 && "Gustavo" == "Gustavo"}`);
console.log(`"Maria == José || False?: ${"Maria" == "José" || false}`);
console.log(!(true && true));
console.log(!(!(true && true)));
