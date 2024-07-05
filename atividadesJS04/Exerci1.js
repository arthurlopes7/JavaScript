const leia = require("readline-sync");
let cores = [];

for (let i = 0; i < 5; i++) {
    let cor = leia.question(`Digite a cor ${i + 1}:`);
    cores.push(cor);
}

console.log("Listar todas as cores:");
for (let cor of cores) {
    console.log(cor);
}

cores.sort();

console.log("\nOrdenar as cores:");
for (let cor of cores) {
    console.log(cor);
}
