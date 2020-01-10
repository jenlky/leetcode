/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const odd = s.length % 2 !== 0;
  if (odd) return false;

  const arrayChar = s.split("");
  let pointer = 0;
  const map = [];

  for (let char of arrayChar) {
    switch (char) {
      case "(":
      case "{":
      case "[":
        map[pointer++] = char;
        break;
      case ")":
        if (pointer === 0 || map[--pointer] !== "(") {
          return false;
        }
        break;
      case "}":
        if (pointer === 0 || map[--pointer] !== "{") {
          return false;
        }
        break;
      case "]":
        if (pointer === 0 || map[--pointer] !== "[") {
          return false;
        }
        break;
    }
  }

  return pointer === 0;
};
// @lc code=end
module.exports = { isValid };
