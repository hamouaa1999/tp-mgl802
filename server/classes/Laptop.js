const Product = require('../classes/Product')

class Laptop extends Product {
    constructor(name, price, stock) {
      super(name, price, stock);
      this.category = 'Laptop';
    }
  }

  module.exports = Laptop