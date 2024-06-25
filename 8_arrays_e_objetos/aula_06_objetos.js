var aula = "Aula 06: Objetos";
console.log(aula);

/**
 * Uma coleção de propriedades, parecidos com arrays
 * Podemos acessar estas propriedades
 */

let cachorro = {
    patas: 4,
    nome: "Bulma",
    latir: function() {
        console.log(" -> Au Au!")
    }
}

console.log(` -> Cachorro Patas: ${cachorro.patas}`);
console.log(` -> Cachorro Nome: ${cachorro.nome}`);
cachorro.latir();
