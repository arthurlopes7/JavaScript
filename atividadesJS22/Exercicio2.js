const leia = require('readline-sync');

let numero = leia.questionInt("Digite um número inteiro: ")

if (numero % 2 === 0) {
    console.log(`${numero} é um numero par.`);
} else {
    console.log(`${numero} é um numero ímpar.`);
}

if (numero > 0) {
    console.log(`${numero} é um numero positivo.`);
} else if (numero < 0) {
    console.log(`${numero} é um numero negativo.`);
} else {
    console.log(`${numero} é zero.`);
}
