function mostrarMenu() {
    console.log("=======================================");
    console.log("=============[  CHATBOT  ]=============");
    console.log("=======================================");
    console.log();
}
const prompt = require("prompt-sync")();
let NOME_ASSISTENTE = "Alex";
console.log(`Olá Eu sou ${NOME_ASSISTENTE}, seu assistente virtual.`);
let NOME_USUARIO = prompt("Por favor digite seu nome de usuário antes de inicializar o chatbot: ")

let continuar = "o";

while (continuar === "o") {

    mostrarMenu();

    let opcao = (prompt(console.log("==================[ OPÇÕES ]=================="),
    console.log("1 -> Apresentação"),
    console.log("2 -> Diz seu nome de usuário"),
    console.log("3 -> Mostra que horas são"),
    console.log("4 -> Conta uma curiosidade"),
    console.log("5 -> Muda o nome do assistente"),
    console.log("Digite o número da opção desejada: ")
));
    if (opcao = 1) {
        console.log(`Olá! Meu nome é ${NOME_ASSISTENTE}! Estou aqui para te auxiliar no que for possível, espero te poder ajudar.`);     
    }
    else if (opcao = 2) {
        console.log(`Você me registrou seu nome como ${NOME_USUARIO}.`);
    }
    else if (opcao = 3) {
        console.log(`O horário atual é 18:00`)
    }
    else if (opcao = 4) {
        console.log(`A espécie Píton-reticulada encontrada no sudeste da Ásia é a uma das três cobras mais pesadas e é considerada a maior do mundo!`);
    }
    else if (opcao = 5) {
        prompt(`Qual o novo nome que deseja me dar, ${NOME_USUARIO}? `);
        console.log(`Ótimo! Agora referirei a mim mesmo como meu novo nome: ${NOME_ASSISTENTE}!`);
    }
continuar = prompt("Digite (o) para prosseguir e testar outras opções ou (f) para fechar o assistente pessoal.");
}