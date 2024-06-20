class OrderDecorator {
    constructor(order) {
      this.order = order;
    }
  
    getTotal() {
      return this.order.getTotal();
    }
  }


  export default OrderDecorator