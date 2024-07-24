let novoElemento3 = document.createElement("p");
let conteudoNovoElemento3 = document.createTextNode("--- Este paragrafo entra no lugar do H1 principal ---");

novoElemento3.appendChild(conteudoNovoElemento3);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento3, heading)