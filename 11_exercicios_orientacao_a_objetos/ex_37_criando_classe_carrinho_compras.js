let exercicio37 = "Exercício 37: Criando uma classe de carrinho de compras";
let descricao37 = "Crie uma classe que simule um carrinho de compras de um e-commerce";
let complemento37 = "Deve conter as propriedades intes, quantidade total, valor total, e métodos para adicionar e remover itens";

console.log("###############################################");
console.log(`${exercicio37}\n ${descricao37}\n ${complemento37}`);
class CarrinhoEx37 {
    constructor(item, quantidadeTotal, valorTotal){
        this.itens = item;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }
}

CarrinhoEx37.prototype.adicionarItem = function(item) {

    let itemNovo = 0;

    for (let itemCarrinho in this.itens) {
        if( this.itens[itemCarrinho].id == item.id) {
            this.itens[itemCarrinho].quantidade += item.quantidade;

            itemNovo ++;
        }
    }

    if (itemNovo === 0) {
        this.itens.push(item);
    }

    this.quantidadeTotal += item.quantidade;
    this.valorTotal += (item.preco * item.quantidade);
}

CarrinhoEx37.prototype.removeItem = function(item) {
    for (let itemCarrinho in this.itens) {
        if( this.itens[itemCarrinho].id == item.id) {

            let obj = this.itens[itemCarrinho];
            let index = this.itens.findIndex(function(obj) { return obj.id == item.id });

            this.quantidadeTotal -= this.itens[itemCarrinho].quantidade;
            this.valorTotal -= (this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade);

            this.itens.splice(index, 1);
        }
    }
}


let carrinhoEx37 = new CarrinhoEx37([
    {
        id: 1,
        nome: "Camisa",
        quantidade: 1,
        preco: 50,  
    },
    {
        id: 2,
        nome: "Calça",
        quantidade: 2,
        preco: 150
    }
], 3, 350)

console.log(carrinhoEx37);
carrinhoEx37.adicionarItem({id: 1, nome: "Camisa", quantidade: 2, preco: 50});
carrinhoEx37.adicionarItem({id: 2, nome: "Calça", quantidade: 1, preco: 150});
carrinhoEx37.adicionarItem({id: 3, nome: "Jaqueta", quantidade: 1, preco: 500});
carrinhoEx37.adicionarItem({id: 1, nome: "Camisa", quantidade: 2, preco: 50});
console.log(carrinhoEx37);

carrinhoEx37.removeItem({id: 1, nome: "Camisa", quantidade: 5, preco: 50});
console.log(carrinhoEx37);
