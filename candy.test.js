const Candy = require("./candy");

describe('Candy', () => {
  const candy_1 = new Candy('Mars', 0.79);

  it('shows the name of a given candy', () => {
    expect(candy_1.getName()).toBe('Mars');
  });

  it('shows the price of a given candy', () => {
    expect(candy_1.getPrice()).toBe(0.79);
  });
});