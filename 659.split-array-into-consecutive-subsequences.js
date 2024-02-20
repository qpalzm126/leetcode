/*
 * @lc app=leetcode id=659 lang=javascript
 *
 * [659] Split Array into Consecutive Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var isPossible = function (nums) {
//   const a = []
//   const b = []
//   let turn = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (!a.includes(nums[i]) && nums[i]-a.slice(-1)) {
//       // a.add(nums[i])
//       return false
//     } else {
//       turn = i
//       break
//     }
//   }
//   b.push(nums[turn])
//   for (let i = turn + 1; i < nums.length; i++) {
//     console.log(nums[i])
//     if (!b.includes(nums[i])) {
//       if (nums[i] - b.slice(-1) !== 1) return false
//       b.push(nums[i])
//     }
//   }
//   const bArr = Array.from(b)
//   if (bArr.length < 3) return false
//   return true
// }
function isPossible(nums) {
  // Initialize two dictionaries to keep track of the frequency of each number and the ending of sequences.
  const freq = new Map()
  const end = new Map()

  // Populate the frequency dictionary.
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  // Iterate through the array.
  for (const num of nums) {
    console.log(freq, end)
    // If the frequency of the current number is zero, continue to the next iteration.
    if (freq.get(num) === 0) {
      continue
    }

    // If there's a sequence ending at num - 1, extend that sequence.
    else if (end.get(num - 1) > 0) {
      end.set(num - 1, end.get(num - 1) - 1)
      end.set(num, (end.get(num) || 0) + 1)
    }

    // If we can't extend an existing sequence, create a new sequence.
    else if (freq.get(num + 1) > 0 && freq.get(num + 2) > 0) {
      freq.set(num + 1, freq.get(num + 1) - 1)
      freq.set(num + 2, freq.get(num + 2) - 1)
      end.set(num + 2, (end.get(num + 2) || 0) + 1)
    }

    // If none of the above conditions are met, it's not possible to split the array.
    else {
      return false
    }

    // Reduce the frequency of the current number.
    freq.set(num, freq.get(num) - 1)
  }

  // If we reach this point, it's possible to split the array.
  return true
}

// [1,2,3,3,4,4,5,5] availabilityMap will just hold the count

// [1,2,3      vacanacyMap 4 : 1. [1,2,3,4  vacanacyMap 5 : 1

// 3 ?

// [3,4,5    vacancy 6 : 1

// @lc code=end
