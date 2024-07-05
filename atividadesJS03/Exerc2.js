const leia = require("readline-sync");

let idade;
let menor21 = 0;
let maior50 = 0;

idade = leia.questionInt("Digite uma idade: ");

while (idade >= 0) {
    if (idade < 21) {
        menor21++;
    } else if (idade > 50) {
        maior50++;
    }

    idade = leia.questionInt("Digite uma idade: ");
    
}
console.log(`\npessoas menores de 21: ${menor21}`);
console.log(`pessoas maiores de 50: ${maior50}`);
