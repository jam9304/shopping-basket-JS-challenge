const ShoppingBasket = require("./shoppingBasket");

describe('Shopping Basket', () => {

  const candy_1 = { getName: () => 'Mars', getPrice: () => (0.50) };
  const candy_2 = { getName: () => 'Yorkie', getPrice: () => (0.40) };

  const sut = new ShoppingBasket();

  it('returns 0 as the total price of the basket if no items present', () => {
    expect(sut.getTotalPrice()).toEqual(0);
  });

  it('adds candy to a shopping basket and view it', () => {
    sut.addToBasket(candy_1);
    sut.addToBasket(candy_2);
    expect(sut.basket).toEqual([['Mars', 0.50], ['Yorkie', 0.40]]);
  });

  it('calculates the total cost of your basket',() => {
    expect(sut.getTotalPrice()).toBe(0.90);
  });
  
});