const { fizzBuzz } = require("./fizzBuzz");

describe("fizzBuzz", () => {
  it("returns fizz for multiples of 3 and buzz for multiples of 5", () => {
    expect(fizzBuzz(10)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz"
    ]);
  });

  it("returns fizzbuzz for multiples of 15", () => {
    expect(fizzBuzz(15)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"
    ]);
  });
});
