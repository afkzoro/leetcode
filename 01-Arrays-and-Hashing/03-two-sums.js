class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {}
        
        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i]
            const difference = target - currentNum
            
            if (difference in hashMap) {
                return [hashMap[difference], i]
            }
            
            hashMap[currentNum] = i
        }
        
        return []
    }
}
