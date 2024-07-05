const leia = require("readline-sync");
class Queue {
    constructor() {
        this.items = []; 
    }

    enqueue(cliente) {
        this.items.push(cliente);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; 
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue"; 
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        let str = "\nFila: \n";
        for (let cliente of this.items) {
            str += cliente + "\n";
        }
        return str;
    }
}

function main() {
    let fila = new Queue(); 

    while (true) {
        console.log("\nMenu:");
        console.log("1: Adicionar um novo Cliente na fila");
        console.log("2: Listar todos os Clientes na fila");
        console.log("3: Chamar (retirar) uma pessoa da fila");
        console.log("0: Sair do programa");

        let opcao = leia.question("\nDigite uma opção:");

        switch (opcao) {
            case "1":
                let nomeCliente = leia.question("Digite o nome do Cliente:");
                fila.enqueue(nomeCliente);
                console.log("\nFila: ");
                console.log(nomeCliente);
                console.log("\nCliente Adicionado!");
                break;
            case "2":
                console.log("\nLista de Clientes na Fila:");
                console.log(fila.printQueue());
                break;
            case "3":
                if (fila.isEmpty()) {
                    console.log("\nA Fila está vazia!");
                } else {
                    let clienteRemovido = fila.dequeue();
                    console.log("\nFila: ");
                    console.log(fila.printQueue());
                    console.log("\nO Cliente " + clienteRemovido + " foi Chamado!");
                }
                break;
            case "0":
                console.log("\nPrograma Finalizado!");
                return;
            default:
                console.log("\nOpção inválida. Por favor, digite novamente.");
        }
    }
}

main();

