let exercicio43 = "Exercício 43: Marca e nome da marca";
let descricao43 = "Crie uma regex que aceite a seguinte expressão: Marca: nomeDaMarca";
let complemento43 = "Omde nomeDaMarca pode variar entre Nike, Adidas, Puma e Asics";

console.log("###############################################");
console.log(`${exercicio43}\n ${descricao43}\n ${complemento43}`);

const regexEx43 = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(` -> /Marca: (Nike|Adidas|Puma|Asics)/: Marca: Adidas = ${regexEx43.test("Marca: Adidas")}`);
console.log(` -> /Marca: (Nike|Adidas|Puma|Asics)/: Marca: Ecko = ${regexEx43.test("Marca: Ecko")}`);
console.log(` -> /Marca: (Nike|Adidas|Puma|Asics)/: Narca: Nike = ${regexEx43.test("Narca: Nike")}`);
console.log(` -> /Marca: (Nike|Adidas|Puma|Asics)/: Marca: asics = ${regexEx43.test("Marca: asics")}`);
console.log(` -> /Marca: (Nike|Adidas|Puma|Asics)/: Puma = ${regexEx43.test("Puma")}`);
console.log(` -> /Marca: (Nike|Adidas|Puma|Asics)/: Marca: = ${regexEx43.test("Marca:")}`);