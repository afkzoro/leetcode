class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let i = 0
  let j = nums.length - 1
  
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j--
    } 
    if ((nums[i] + nums[j] < target))  {
      i++
    }
    
    if (nums[i] + nums[j] == target) {
      return [i+1, j+1]
    }
  }
  }
}
