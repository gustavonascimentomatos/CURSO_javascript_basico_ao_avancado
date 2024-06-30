var aula = "Aula 06: Mais sobre Prototypes";
console.log(aula);

/**
 * Quando criamos um objeto a partir de um outro, o base será o prototype;
 * Ele herdará tanto os métodos e propriedades de Object (o prototype do objeto base) quanto os do objeto base para este novo;
 */

const pessoaAula06 = {
    maos: 2,
}

const pessoaNovaAula06 = Object.create(pessoaAula06);

 console.log(` -> ${pessoaNovaAula06.maos}`);
 console.log(` -> Tem a propriedade 'maos': ${pessoaNovaAula06.hasOwnProperty("maos")}`);
 console.log(` -> ${Object.getPrototypeOf(pessoaNovaAula06) === pessoaAula06}`);
