const { maxProfit } = require("./bestTimeToBuyAndSellStock");

describe("maxProfit", () => {
  it("returns largest profit", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([8, 2, 5, 1, 6, 4])).toBe(5);
  });

  it("returns 0 if no transaction is done", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
