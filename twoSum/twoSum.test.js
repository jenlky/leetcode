const { twoSum } = require("./twoSum");

describe("twoSum", () => {
  it("returns the indices of two numbers that add up to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 15, 11, 7], 9)).toEqual([0, 3]);
  });
});
