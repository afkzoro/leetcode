class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      const numSet = new Set(nums);
      let longest_streak = 0;
    
      for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let current_number = num;
            let current_streak = 1;
            
            while (numSet.has(current_number + 1)) {
                current_number += 1;
                current_streak += 1;
            }
            
            longest_streak = Math.max(longest_streak, current_streak);
        }
    }
    
    return longest_streak;
    }
}
