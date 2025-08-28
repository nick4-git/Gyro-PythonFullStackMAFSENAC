//Ex. Desconto

let preco = 150;
let desconto = 20;
let total = preco - ((preco/100)*desconto);
console.log("O preço com desconto é", total);

console.log()

//----------------------------------------------------------------------------------
//Ex. IMC
let peso = 70;
let altura = 1.75;
let imc = peso / (altura ** 2);
console.log("O seu IMC é", imc);

console.log

//----------------------------------------------------------------------------------
//Ex. Concurso
let idade = 22;
let tem_experiencia = true;
let elegivel = (idade >= 18) && (tem_experiencia = true);
if (elegivel === true) {
    console.log("O participante cumpre todos os requisitos e é elgível para o concurso.")
}
else {console.log("O participante não é elegível pois não cumpre os requisitos")
}

console.log()

//----------------------------------------------------------------------------------
//Ex. Acesso de segurança
let n_acesso = 2
if (n_acesso === 3) {
    console.log("Acesso Total")
}
else if (n_acesso === 2) {
    console.log("Acesso Limitado")
}
else {console.log("Acesso Restrito");
}

console.log()

//----------------------------------------------------------------------------------

let celsius = 19;
let conversao = (celsius * 9/5) + 32;
console.log(conversao + ("ºF"))

console.log()

//----------------------------------------------------------------------------------

let num = 84;
let resto = num%2; // "%" é o nosso módulo (modular); ou seja, ele mostra o resto de uma divisão. Nesse caso, ele pede o resto da divisão pelo número 2. :))))) EBAAA

if (resto === 0) {
    console.log("O número", num, "é par.");
}
else {console.log("O número", num, "é ímpar.");
}

console.log()
//----------------------------------------------------------------------------------

//////////////////////////
///   FOR/WHILE/DO    ///
/////////////////////////

// 1. Contagem Regressiva com FOR:
// Peça o usuário um número para que ele faça a contagem regressiva

let numero1 = parseInt(prompt("Digite um número para contagem regressiva: "));
for (let i = numero1; i >= 0; i--) {
    console.log(i);
}
console.log("*KABOOOOOM*");

// 2. 
// Peça o usuário um número pra somar de 1 a até ele

let numero2 = parseInt(prompt("Digite um número um número para somar de 1 até ele: ")); // É UM INPUT
let soma = 0;
let indice = 1;
while (indice <= numero2) {
    soma += indice
    indice++;
}
console.log("Soma:", soma); // 1+2+3+4+5+6+7+8....+29+30+31+32+34   
console.log()

// 3. Tabuada com FOR
// Peça ao usuário

let numero3 = parseInt(prompt("Digite um número para ver sua tabuada: "));
for (i = 1; i <= 10; i++) {
    console.log(`${numero3} x ${i} = ${numero3 * i}`);
}