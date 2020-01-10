/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
  const divisibleBy3 = num => num % 3 === 0;
  const divisibleBy5 = num => num % 5 === 0;

  const output = [];
  for (let x = 1; x <= n; x++) {
    if (divisibleBy3 && divisibleBy5) {
      output.push("FizzBuzz");
    } else if (divisibleBy5) {
      output.push("Buzz");
    } else if (divisibleBy3) {
      output.push("Fizz");
    } else {
      output.push(x.toString(10));
    }
  }

  return output;
};
// @lc code=end
module.exports = { fizzBuzz };
