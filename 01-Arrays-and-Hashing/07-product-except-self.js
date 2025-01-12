class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = 1
        let right = 1

        const ans = []


        for (let i = 0; i < nums.length; i++) {
            ans[i] = left
            left *= nums[i]
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            ans[i] *= right
            right *= nums[i]
        }

        return ans
    }
}
