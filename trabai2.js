let vendas = [];
let totalVendido = 0;

let nome = "Carlos";
let produto = "Teclado";
let valor = 200;
let tipo = "vip";

let desconto = 0;

if (tipo == "vip") {
    desconto = valor * 0.10;
} else if (tipo == "premium") {
    desconto = valor * 0.20;
}

let valorFinal = valor - desconto;

vendas.push(nome + " - " + produto + " - R$ " + valorFinal);

totalVendido = totalVendido + valorFinal;

for (let i = 0; i < vendas.length; i++) {
    console.log(vendas[i]);
}

console.log("Quantidade de vendas: " + vendas.length);
console.log("Total vendido: R$ " + totalVendido);