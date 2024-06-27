const leia = require('readline-sync');


let codigo = leia.questionInt("Digite o código do produto (1 a 6): ")
let quantidade =  leia.questionInt("Digite a quantidade comprada: ")

let produto;
let preco;


switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;
    default:
        console.log("Código de produto inválido.");
        
}


let valorFinal = quantidade * preco;


console.log(`Produto comprado: ${produto}`);
console.log(`Valor final da conta: R$ ${valorFinal.toFixed(2)}`);