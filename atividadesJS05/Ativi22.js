const leia = require("readline-sync");
class Stack {
    constructor() {
        this.items = []; 
    }

    push(livro) {
        this.items.push(livro);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack"; 
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        let str = "\nPilha:\n";
        for (let i = this.items.length - 1; i >= 0; i--) {
            str += this.items[i] + "\n";
        }
        return str;
    }
}

function main() {
    let pilha = new Stack(); 
    while (true) {
        console.log("\nMenu:");
        console.log("1: Adicionar um novo livro na pilha");
        console.log("2: Listar todos os livros na pilha");
        console.log("3: Retirar um livro da pilha");
        console.log("0: Sair do programa");

        let opcao = leia.question("\nDigite uma opção:");

        switch (opcao) {
            case "1":
                let nomeLivro = leia.question("Digite o nome do livro:");
                pilha.push(nomeLivro);
                console.log(pilha.printStack());
                console.log("\nLivro adicionado!");
                break;
            case "2":
                console.log("\nLista de Livros na Pilha:");
                console.log(pilha.printStack());
                break;
            case "3":
                if (pilha.isEmpty()) {
                    console.log("\nA Pilha está vazia!");
                } else {
                    let livroRemovido = pilha.pop();
                    console.log(pilha.printStack());
                    console.log("\nO Livro " + livroRemovido + " foi retirado da pilha!");
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
