class ShoppingCart {
    constructor() {
      if (!ShoppingCart.instance) {
        this.items = [];
        ShoppingCart.instance = this;
      }
      return ShoppingCart.instance;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getItems() {
      return this.items;
    }
  }

  export default ShoppingCart