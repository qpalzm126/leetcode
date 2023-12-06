/*
 * @lc app=leetcode id=1700 lang=javascript
 *
 * [1700] Number of Students Unable to Eat Lunch
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let movedCount = 0

  while (sandwiches.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
      movedCount = 0
    } else {
      students.push(students.shift())
      movedCount++
      if (movedCount === students.length) break
    }
  }
  return students.length
}
// @lc code=end
