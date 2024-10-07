let aula = "Aula 09: Spread operator";
console.log(aula);

/**
 * O Spread pode ser utilizado também em arrays e objetos;
 * Utilizamos pra construir nvos valores destes dados em outros arrays e objetos;
 * Ou seja, podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro;
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

const arr4 = [0, ...arr3, 7];

console.log(arr4);

const carName = { name: "Picanto" }
const carBrand = { brand: "Kia" }
const carOtherInfos = { km: 190000, price: 25000 }

const car = { ...carName, ...carBrand, ...carOtherInfos };

console.log(car);