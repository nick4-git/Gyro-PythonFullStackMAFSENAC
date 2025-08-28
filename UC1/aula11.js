class ContaBancaria {
  constructor(titular, saldoInicial, numeroConta) {
    this.titular = titular                         // Nome do titular da conta
    this.saldo = saldoInicial                      // Saldo inicial
    this.numeroConta = numeroConta                 // Número da conta
    this.extrato = [];                             // Array para armazenar operações
  }
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