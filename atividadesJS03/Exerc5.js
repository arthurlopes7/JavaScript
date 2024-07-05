const leia = require("readline-sync");
let matriz = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;


for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt(`Digite o elemento da posição [${i}][${j}]:`);
        
        if (i === j) {
            console.log(`Elemento da Diagonal Principal: ${matriz[i][j]}`);
            somaDiagonalPrincipal += matriz[i][j];
        }

        if (i + j === 2) {
            console.log(`Elemento da Diagonal Secundária: ${matriz[i][j]}`);
            somaDiagonalSecundaria += matriz[i][j];
        }
    }
}

console.log(`\nSoma dos Elementos da Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundária: ${somaDiagonalSecundaria}`);
