const leia = require('readline-sync');

let nome = leia.question("Digite o nome do colaborador: ")
let codigo = leia.questionInt("Digite o código do cargo do colaborador (1 a 6): ")
let salario = leia.questionFloat("Digite o salário do colaborador: ")

let novoSalario;


switch (codigo) {
    case 1:
        novoSalario = salario + (0.1 * salario);
        cargo = "Gerente";
        break;
    case 2:     
        novoSalario = salario + (0.07 * salario);
        cargo = "Vendedor";
        break;
    case 3:       
        novoSalario = salario + (0.09 * salario);
        cargo = "Supervisor";
        break;
    case 4:    
        novoSalario = salario + (0.06 * salario);
        cargo = "Motorista";
        break;
    case 5:    
        novoSalario = salario + (0.05 * salario);
        cargo = "Estoquista";
        break;
    case 6:
        novoSalario = salario + (0.08 * salario);
        cargo = "Técnico de TI";
        break;
    default:
        console.log("Código do cargo inválido.");
       
}

console.log(`Nome do Colaborador: ${nome}`);
console.log(`Cargo: ${codigo}`);
console.log(`Novo Salário: R$ ${novoSalario.toFixed(2)}`);
