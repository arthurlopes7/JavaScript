const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ")
idade = leia.questionInt("\Digite sua idade: ")

if (idade >= 0 && idade <= 10) {
    console.log("\no seu Plano de Saúde custara R$ 100,00 por mes.");
} else if (idade >= 11 && idade <= 29) {
    console.log("\o seu Plano de Saude custara R$ 200,00 por mes.");
} else if (idades >= 30 && idade <= 45) {
    console.log("\o seu Plano de Saude custara R$ 300,00 por mes.");
} else if (idades >= 46 && idade <= 59) {
    console.log("\o seu Plano de Saude custara R$ 400,00 por mes.");
} else if (idades >= 60 && idade <= 65) {
    console.log("\o seu Plano de Saude custara R$ 500,00 por mes.");
}
else {
    console.log("\no seu Plano de Saúde custara R$ 1000,00 por mes.");
}

if(nome === 'geandro'){
    console.log('\nMuito obrigado Geandro!');
}