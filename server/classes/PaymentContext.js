class PaymentContext {
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    executeStrategy(amount) {
      this.strategy.pay(amount);
    }
  }

  
  module.exports = PaymentContext