var aula = "Aula 17: Métodos de arrays - includes";
console.log(aula);

/**
 * Verifica se o array tem um determinado elemento;
 * Retorna um boolean;
 */

let carros17 = ["Passat", "Polo", "Jetta", "Gol", "Golf", "Tiguan", "Nivus", "Up"];

let isGolf = carros17.includes("Golf");
let isVoyage = carros17.includes("Voyage");

console.log(` -> Existe Golf no array: ${isGolf}`);
console.log(` -> Existe Voyage no array: ${isVoyage}`);
  