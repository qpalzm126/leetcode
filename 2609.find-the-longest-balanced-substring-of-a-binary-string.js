/*
 * @lc app=leetcode id=2609 lang=javascript
 *
 * [2609] Find the Longest Balanced Substring of a Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  let temp = "01"
  while (s.includes(temp)) {
    temp = "0" + temp + "1"
  }
  return temp.length - 2
}
// @lc code=end
