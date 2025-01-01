class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const exists = {}
        const duplicates = []
        nums.forEach( str => {
            if (exists[str]) {
                duplicates.push(str)
            } else {
                exists[str] = true
            }
        })

        return duplicates.length > 0 
    }
}
