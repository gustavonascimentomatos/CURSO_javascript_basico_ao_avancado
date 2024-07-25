let elemento = document.getElementById("titulo-principal");

console.log("Largura: " + elemento.offsetWidth + "px com a borda"); // Considera as bordas
console.log("Altura: " + elemento.offsetHeight + "px com a borda"); // Considera as bordas

console.log("Largura: " + elemento.clientWidth + "px sem a borda"); // Não onsidera as bordas
console.log("Altura: " + elemento.clientHeight + "px sem a borda"); // Não onsidera as bordas
