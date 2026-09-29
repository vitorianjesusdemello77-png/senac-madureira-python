let usuario = "admin";
let senha = "1234";
let nivel = "gerente";
let status = "ativa";

let tentativas = 1;

if (
    usuario == "admin" &&
    senha == "1234" &&
    nivel == "gerente" &&
    status == "ativa"
) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

console.log("Tentativas: " + tentativas);