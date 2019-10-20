const { containsDuplicate } = require("./containsDuplicate");

describe("containsDuplicate", () => {
  it("returns true if array contains duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("returns false if array does not contain duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});
