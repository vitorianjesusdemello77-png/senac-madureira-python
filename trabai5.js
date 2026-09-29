let chamados = [];

let cliente = "Marcos";
let problema = "Computador não liga";
let prioridade = "alta";
let status = "aberto";

chamados.push(
    cliente + " - " +
    problema + " - " +
    prioridade + " - " +
    status
);

for (let i = 0; i < chamados.length; i++) {
    console.log(chamados[i]);
}

console.log("Quantidade de chamados: " + chamados.length);

status = "resolvido";

console.log("Novo status: " + status);