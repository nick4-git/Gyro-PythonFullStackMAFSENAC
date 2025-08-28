const prompt = require("prompt-sync")();

let valorCompra = parseFloat(prompt("Insira o valor total da compra: R$"));
let valorPago = parseFloat(prompt("Insira o valor pago pelo cliente: R$"));

if (valorPago > valorCompra) {
    console.log(`A compra terá um troco de R$${valorPago - valorCompra}`);
} else if (valorPago < valorCompra) {
    console.log(`O pagamento foi insuficiente. Ainda faltam R$${valorCompra - valorPago}`);
} else {
    console.log("Pagamento realizado, não há troco.")
}
