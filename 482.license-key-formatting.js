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
  const string = s.split('-').join('');
  const arr = [];
  let l = string.length;
  let ptr = l;
  while (l >= k) {
    arr.unshift(string.substring(l - k, l));
    l -= k;
  }
  if (l > 0) {
    arr.unshift(string.substring(0, l));
  }
  console.log(arr);
  return arr.join('-').toUpperCase();
};
// @lc code=end
