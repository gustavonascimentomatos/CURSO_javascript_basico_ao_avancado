let novoElemento2 = document.createElement("p");
let conteudoNovoElemento2 = document.createTextNode("--- Texto inserido abaixo do paragrafo Lorem da div box ---");

novoElemento2.appendChild(conteudoNovoElemento2);

let elementoSelecionado = document.querySelector("#paragrafo-box");
let elementoPai = elementoSelecionado.parentNode;

elementoPai.appendChild(novoElemento2);