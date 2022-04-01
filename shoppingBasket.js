const Candy = require('./candy.js');

class ShoppingBasket {
  constructor(basket = []) {
    this.basket = basket;
  }

  addToBasket(candy) {
    this.basket.push([candy.getName(), candy.getPrice()]);
  };

  getTotalPrice() {
    let totalPrice = this.basket.map(item => item[1]).reduce((a, b) => a + b, 0);
    
    return totalPrice
  }
}

module.exports = ShoppingBasket;