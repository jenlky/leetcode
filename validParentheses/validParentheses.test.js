const { isValid } = require("./validParentheses");

describe("isValid", () => {
  it("returns true for empty string", () => {
    expect(isValid("")).toBe(true);
  });

  it("returns true for parentheses closed by same type of brackets", () => {
    expect(isValid("()")).toBe(true);
  });

  it("returns true for parentheses closed by same type of brackets AND in correct order", () => {
    expect(isValid("([]{})")).toBe(true);
    expect(isValid("(([]){})")).toBe(true);
  });

  it("returns false for parentheses closed with wrong bracket", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([]}")).toBe(false);
  });

  it("returns false for parentheses closed in wrong order", () => {
    expect(isValid("([)]")).toBe(false);
    expect(isValid("({}[)]")).toBe(false);
  });

  it("returns false for missing bracket", () => {
    expect(isValid("[")).toBe(false);
    expect(isValid("]")).toBe(false);
    expect(isValid("(])")).toBe(false);
  });
});
