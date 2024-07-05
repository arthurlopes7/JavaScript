const leia = require("readline-sync");
let conjunto = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let numero = leia.questionInt("Digite o número que você deseja encontrar:");

if (conjunto.has(numero)) {
    console.log(`O número ${numero} foi encontrado!`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}
