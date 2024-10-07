let aula = "Aula 11: Herança de classes";
console.log(aula);

/**
 * Podemos criar herença de classes com ES6 também;
 * Utilizamos a palavra extends pra referir a classe herdada;
 * E as proproedades que utilizamos dela devem ser eniadas via função super;
 */

class ProductStore {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    productWithDiscount(discount) {
        return (this.price * ((100 - discount) / 100)).toFixed(2)
    }
}

class ProductWithAttributes extends ProductStore {
    constructor (name, price, colors) {
        super(name, price);
        this.colors = colors; 
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Vermelho", "Preto", "Verde"]);

console.log(hat);
console.log(hat.productWithDiscount(50));
hat.showColors();