class GiftWrapDecorator extends OrderDecorator {
    getTotal() {
      return this.order.getTotal() + 5; // Extra charge for gift wrap
    }
  }

  export default GiftWrapDecorator