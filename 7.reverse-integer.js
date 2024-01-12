/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let s = x.toString()
  let num = 0
  const max = 2 ** 31
  const min = (-2) ** 31
  if (s[0] === "-") {
    num = Number("-" + s.slice(1).split("").reverse().join(""))
  } else num = Number(s.split("").reverse().join(""))

  if (num < min || num > max) return 0
  else return num
}
// @lc code=end
