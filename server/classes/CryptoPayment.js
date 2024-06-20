const PaymentStrategy = require('../classes/PaymentStrategy')

class CryptoPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paiement de $${amount} avec du cryptocurrency`);
    }
  }

  module.exports = CryptoPayment