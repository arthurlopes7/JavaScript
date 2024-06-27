const leia = require('readline-sync');
let A = leia.questionInt("Digite o número A: ")
let B = leia.questionInt("Digite o número B: ")
let C = leia.questionInt("Digite o número C: ")

let soma = A + B;

if (soma > C) {
    console.log("a soma de A + B é maior que C");
} else if (soma < C) {
    console.log(" a soma de A + B é menor que C");
} else {
    console.log("a soma de A + B é igual a C");
}
