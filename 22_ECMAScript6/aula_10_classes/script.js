let aula = "Aula 10: Classes em JS";
console.log(aula);

/**
 * As classes são recursos fundamentais para programar com orientação a objetos;
 * Agora o JS tem estes recursos implementado, onde temos acesso a: construtor, propriedades, métodos e mais;
 * Antes as classes eram baseadas em funções (constructor functions);
 */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    productWithDiscount(discount) {
        this.price = this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa Polo", 100);

console.log(shirt);

console.log(shirt.productWithDiscount(50));
console.log(shirt);

console.log(shirt.productWithDiscount(90));
console.log(shirt);