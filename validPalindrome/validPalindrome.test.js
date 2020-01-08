const { isPalindrome } = require("./validPalindrome");

describe("validPalindrome", () => {
  it("returns true for palindrome ignoring cases", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("returns true for palindrome with empty string", () => {
    expect(isPalindrome(" I am ma I ")).toBe(true);
  });

  it("returns false for invalid palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
});
