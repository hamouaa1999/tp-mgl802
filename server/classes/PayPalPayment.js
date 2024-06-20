const PaymentStrategy = require('../classes/PaymentStrategy')

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paiement de $${amount} avec PayPal`);
    }
  }

  module.exports = PayPalPayment