let aula = "Aula 05: Método filter";
console.log(aula);

/**
 * O filter é um método de array para filtrar dados, baseado em alguma condição que estabelecemos;
 * Isso nos dá um arrt com apenas os elementos que queremos, de forma performática;
 * Há vários métodos de array importantes no ES6, este é um deles;
 */

const arr = [1, 2, 3, 4, 5];

const highNumber = arr.filter((number) => {
    if (number >= 3) {
        return number;
    }
});

console.log(arr);
console.log(highNumber);

const users = [
    {name: "Mateus", available: true },
    {name: "Marcos", available: false },
    {name: "Lucas", available: false },
    {name: "João", available: true },
];


const availabeUsers = users.filter((user) => {
    if (user.available) {
        return user
    }
});

const notAvailabeUsers = users.filter((user) => {
    if (!user.available) {
        return user
    }
});

console.log(users);
console.log(availabeUsers);
console.log(notAvailabeUsers);
