var aula = "Aula 20: Métodos de strings - padStart";
console.log(aula);

/**
 * Inserir caracteres antes da string;
 * Utiliza dois parâmetros, 1º tamanho que a variavel deve ficar e 2º o valor que completará o tamanho;
 */

let milContraErrado = "1";
let milContraCorreto = milContraErrado.padStart(4, "0");

let sku = "34";
sku = sku.padStart(6, "0");

console.log(" -> Mil contra antes do padStart: " + milContraErrado);
console.log(" -> Mil contra depois do padStart: " + milContraCorreto);
console.log(" -> sku: " + sku);
