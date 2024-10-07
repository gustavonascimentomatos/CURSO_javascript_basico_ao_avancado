let aula = "Aula 08: Destructuring";
console.log(aula);

/**
 * O destructuring é um recurso que pode ser utilizado em arrays e objetos;
 * A ideia é transformar os itens de um desses dados em variáveis;
 * Simplificando a declaração de n variáveis para apenas uma linha;
 */

const fruits = ["Maçã", "Laranja", "Mamão"];
const [fruta_1, fruta_2, fruta_3] = fruits;

console.log(fruits);
console.log(`   ${fruta_1}, ${fruta_2}, ${fruta_3}`);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {
    name: productName,
    price,
    category: productCategory,
    color
} = productDetails;

console.log(productDetails);

console.log(productName);
console.log(price);
console.log(productCategory);
console.log(color);