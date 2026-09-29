let jogadores = [];
let totalPontos = 0;

let nome = "Black";
let nivel = 15;
let pontos = 650;

let classificacao;

if (pontos >= 500) {
    classificacao = "Avançado";
} else if (pontos >= 100) {
    classificacao = "Intermediário";
} else {
    classificacao = "Iniciante";
}

jogadores.push(
    nome + " - Nível: " +
    nivel + " - Pontos: " +
    pontos + " - " +
    classificacao
);

totalPontos = totalPontos + pontos;

for (let i = 0; i < jogadores.length; i++) {
    console.log(jogadores[i]);
}

console.log("Quantidade de jogadores: " + jogadores.length);
console.log("Total de pontos: " + totalPontos);