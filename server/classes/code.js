class PaymentStrategy {
    pay(amount) {
      throw new Error('La methode devra etre redefinie');
    }
  }
  
  class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paiement avec carte de credit`);
    }
  }
  
  class PayPalPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paiement avec paypal`);
    }
  }
  
  class CryptoPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paiement avec de la cryptomonnaie`);
    }
  }
  
  class PaymentContext {
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    executeStrategy(amount) {
      this.strategy.pay(amount);
    }
  }
  