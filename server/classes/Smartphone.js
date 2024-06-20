const Product = require('../classes/Product')

class Smartphone extends Product {
    constructor(name, price, stock) {
      super(name, price, stock);
      this.category = 'Smartphone';
    }
  }

  module.exports = Smartphone