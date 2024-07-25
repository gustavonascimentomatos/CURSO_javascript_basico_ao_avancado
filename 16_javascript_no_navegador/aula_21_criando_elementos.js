let lista = document.createElement("ul");

let texto = document.createTextNode("Texto lista");

for (let index = 0; index < 5; index++) {
    let item = document.createElement("li");
    let texto = document.createTextNode(index);
    item.appendChild(texto);
    lista.appendChild(item);
}

let container = document.getElementById("container-principal");
container.appendChild(lista)
