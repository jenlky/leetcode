/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = function(numRows) {
  const output = [];

  for (let x = 0; x < numRows; x++) {
    const row = new Array(x + 1);

    if (x < 2) {
      row.fill(1);
    } else {
      row.fill(1, 0, 1);
      const prevArray = output[x - 1];
      const array = [];

      for (let x = 0; x < prevArray.length; x++) {
        if (x + 1 < prevArray.length) {
          array.push(prevArray[x] + prevArray[x + 1]);
        }
      }
      console.log(array);

      row.splice(1, array.length, ...array);
      row.fill(1, -1);
    }
    output.push(row);
  }

  return output;
};
// @lc code=end
module.exports = { generate };
