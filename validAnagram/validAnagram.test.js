const { isAnagram } = require("./validAnagram");

describe("isAnagram", () => {
  it("return true if both strings are an anagram", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("returns false if both strings are not an anagram", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
