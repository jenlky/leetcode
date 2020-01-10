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
  const output = [];
  for (let x = 1; x <= n; x++) {
    if (x % 15 === 0) {
      output.push("FizzBuzz");
    } else if (x % 5 === 0) {
      output.push("Buzz");
    } else if (x % 3 === 0) {
      output.push("Fizz");
    } else {
      output.push(x.toString(10));
    }
  }

  return output;
};
// @lc code=end
module.exports = { fizzBuzz };
