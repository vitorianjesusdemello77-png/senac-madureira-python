let alunos = [];

let nome = "João";
let nota1 = 8;
let nota2 = 7;
let faltas = 5;

let media = (nota1 + nota2) / 2;

let situacao;

if (faltas > 20) {
    situacao = "Reprovado por falta";
} else if (media >= 6) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

alunos.push(nome + " - Média: " + media + " - " + situacao);

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}