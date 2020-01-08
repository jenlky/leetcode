/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const array = s.split("");
  const regex = /^[a-z0-9]+$/i;
  const letterNumber = array.filter(char => regex.test(char));

  let reverseCounter = letterNumber.length - 1;
  for (let x = 0; x < Math.ceil(letterNumber.length / 2); x++) {
    if (
      letterNumber[x].toLowerCase() !==
      letterNumber[reverseCounter].toLowerCase()
    ) {
      return false;
    }
    reverseCounter--;
  }
  return true;
};
// @lc code=end
module.exports = { isPalindrome };
