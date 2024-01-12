/*
 * @lc app=leetcode id=1704 lang=javascript
 *
 * [1704] Determine if String Halves Are Alike
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const a = s.slice(0, s.length / 2)
  const b = s.slice(s.length / 2, s.length)
  function countVowel(str) {
    let count = 0
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++
      }
    }
    return count
  }
  return countVowel(a) === countVowel(b)
}
// @lc code=end
