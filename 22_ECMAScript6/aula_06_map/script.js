let aula = "Aula 06: Método map";
console.log(aula);

/**
 * O map é um método de array também que percorre todos os elementos;
 * Quando utilizamos o Map, estamos querendo modificar os dados do array;
 * Há vários métodos de array importantes no ES6, este é um deles;
 */

const products = [
    { name: "Camisa", price: 10.99, category: "Roupas" },
    { name: "Chaleira Elétrica", price: 89.50, category: "Eletro" },
    { name: "Fogão", price: 525.99, category: "Eletro" },
    { name: "Calça Jeans", price: 50.00, category: "Roupas" },
    { name: "Geladeira", price: 999.99, category: "Eletro" }
];

console.log(products);

products.map((product) => {
    if (product.category === "Roupas") {
        product.onSale = true;
    }
});

console.log(products);
