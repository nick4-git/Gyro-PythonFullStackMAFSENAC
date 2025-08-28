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
/*
 * Método para depósito
 * Adiciona valor ao saldo em registra no extrato
 */

depositar(valor); {
    this.saldo += valor;
    this.extrato.push({
        tipo: "Depósito",
        valor: valor,
        data: new Date().toLocaleString() // Data formatada
    });
    console.log(`Depósito de R$${valor} realizado para ${this.titular}.`);
    return true;    
}