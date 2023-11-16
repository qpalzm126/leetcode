/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const string = s.split("-").join("")
  const arr = []
  let l = string.length
  let ptr = k
  while (l >= ptr) {
    arr.unshift(string.slice(-ptr, -(ptr - k)))
    ptr += k
  }
  if (k !== l) {
    arr.unshift(string)
  }
  console.log(arr)
  return arr.join("-").toUpperCase()
}
// @lc code=end
