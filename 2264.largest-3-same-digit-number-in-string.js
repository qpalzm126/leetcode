/*
 * @lc app=leetcode id=2264 lang=javascript
 *
 * [2264] Largest 3-Same-Digit Number in String
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const matches = num.match(/(\w)\1{2}/g)
  if (!matches) return ""
  const ans = Math.max(...matches.map((m) => Number(m))).toString()
  return ans === "0" ? "000" : ans
}
// @lc code=end
