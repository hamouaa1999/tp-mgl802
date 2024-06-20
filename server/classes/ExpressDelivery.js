class ExpressDeliveryDecorator extends OrderDecorator {
    getTotal() {
      return this.order.getTotal() + 15; // Extra charge for express delivery
    }
  }

  
  export default ExpressDeliveryDecorator