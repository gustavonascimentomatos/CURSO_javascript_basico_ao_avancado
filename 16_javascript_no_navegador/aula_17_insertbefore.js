let novoElemento = document.createElement("p");
let conteudoNovoElemento = document.createTextNode("Texto que foi inserido dentro do novo elemento!");

novoElemento.appendChild(conteudoNovoElemento);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);