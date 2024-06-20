

class Product {
    constructor(name, price, stock) {
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
      }
    
      removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
      }
    
      notifyObservers() {
        this.observers.forEach(observer => observer.update(this));
      }
    
      setStock(stock) {
        this.stock = stock;
        if (stock > 0) {
          this.notifyObservers();
        }
      }
  }

  

  module.exports = Product