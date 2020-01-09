const { maxSubArray } = require("./maximumSubarray");

describe("maxSubArray", () => {
  describe("returns contiguous subarray with the largest sum", () => {
    it("returns an array with more than one element", () => {
      expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    it("returns an array with one element", () => {
      expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 8])).toBe(9);
    });
  });
});
