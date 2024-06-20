const Laptop = require('../classes/Laptop')
const Smartphone = require('../classes/Smartphone')

class ProductFactory {
    static createProduct(type, name, price, stock) {
      switch (type) {
        case 'Laptop':
          return new Laptop(name, price, stock);
        case 'Smartphone':
          return new Smartphone(name, price, stock);
        default:
          throw new Error('Unknown product type');
      }
    }
  }

  module.exports = ProductFactory