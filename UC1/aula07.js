// ----------------TESTE DE MESA PRATICA------------------------
// 1. Calculo de Média de Notas:
// Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado
// Se a média for maior ou igual a 7, exiba "Aprovado". Caso a o contrário, exiba "Reprovado".
const prompt = require("prompt-sync")();

let somaNotas = 0;
for (let i = 0; i < 4; i++) {
    let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
    somaNotas += nota; //"Ele é igual a ele mesmo + a nota que eu acabei de receber"
}
let media = somaNotas / 4;
console.log("Média:", media);
if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

///

let inicio = parseInt(prompt("Digite o início do intervalo:"));
let fim = parseInt(prompt("Digite o fim do intervalo:"));
let somaPares = 0;
for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}
console.log("Soma dos números pares:", somaPares);

let texto = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/ /g, "");
let textoInvertido = texto.split("").reverse().join("");
if (texto === textoInvertido) {
    console.log("É palíndromo")
} else {
    console.log("Não é palíndromo");
}

//

let continuacao = "s"
while (continuacao === "s") {
    let texto = prompt("Digite uma palavra ou frase:");
    texto = texto.toLowerCasa();
    texto = texto.replace(/ /g, "");
        let textoinvert = texto.split("").reverse().join("");



    if(texto === textoinvert) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
    continuacao = prompt("Deseja continuar? s (sim) ou n (não)");
}