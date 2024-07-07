var aula = "Aula 06: Caracteres especiais";
console.log(aula);

/**
 * \d -> Qualquer dígito de caractere;
 * \w -> Um caractere alfanumérico ("teste");
 * \s -> Qualquer caractere de espaço em branco;
 * \D -> Caracteres que não são dígitos
 * \W -> Caractere não-alfanumerico;
 * \S -> Caractere que não seja espaço em branco
 * .  -> Qualquer caractere, menos nova linha
 */

const pontoRegex = /./;
const dRegex = /\d/; // [0-9]
const DRegex = /\D/; // [^0-9] Negação
const sRegex = /\s/; 
const wRegex = /\w/; 

console.log(` -> /./: teste = ${pontoRegex.test("teste")}`);
console.log(` -> /./: barra n = ${pontoRegex.test("\n")}`);

console.log(` -> /\d/: teste = ${dRegex.test("teste")}`);
console.log(` -> /\d/: 123 = ${dRegex.test("123")}`);

console.log(` -> /\D/: teste = ${DRegex.test("teste")}`);
console.log(` -> /\D/: 123 = ${DRegex.test("123")}`);

console.log(` -> /\s/: teste = ${sRegex.test("teste")}`);
console.log(` -> /\s/: 123 = ${sRegex.test("123")}`);
console.log(` -> /\s/: " " = ${sRegex.test(" ")}`);

console.log(` -> /\w/: teste = ${wRegex.test("teste")}`);
console.log(` -> /\w/: 123 = ${wRegex.test("123")}`);
console.log(` -> /\w/: " " = ${wRegex.test(" ")}`);
