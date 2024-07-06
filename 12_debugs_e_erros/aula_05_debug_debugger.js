var aula = "Aula 05: Dedug - dedugger";
console.log(aula);

let a05 = 1;
let d05 = 2;
let c05 = 3;

if (c05 > a05) {
    a05 = d05;
    //debugger;
}

for (let index = 5; index > 0; index--) {
    d05 ++;
    a05 = a05 + c05 + 1;
    c05 += 2;
    //debugger;
}

if (d05 == a05) {
    a05 ++;
} else {
    a05 = a05 + d05 + c05;
}
//debugger;

a05 = a05 * d05;
//debugger;