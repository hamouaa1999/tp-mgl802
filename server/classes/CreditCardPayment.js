const PaymentStrategy = require('../classes/PaymentStrategy')

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paiement de $${amount} avec la carte de credit`);
    }
  }

module.exports = CreditCardPayment