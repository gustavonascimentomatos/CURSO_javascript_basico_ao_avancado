var aula = "Aula 15: Validando domínios";
console.log(aula);

const dominioRegex = /[?www.]\w+\.com.br|.com/;

console.log(` -> /[?www.]\\w+\\.com.br|.com/: www.gustavomatos.com.br = ${dominioRegex.test("www.gustavomatos.com.br")}`);
console.log(` -> /[?www.]\\w+\\.com.br|.com/: google.com = ${dominioRegex.test("google.com")}`);
console.log(` -> /[?www.]\\w+\\.com.br|.com/: nethios.com.br = ${dominioRegex.test("nethios.com.br")}`);
console.log(` -> /[?www.]\\w+\\.com.br|.com/: www.twitch.tv = ${dominioRegex.test("www.twitch.tv")}`);
