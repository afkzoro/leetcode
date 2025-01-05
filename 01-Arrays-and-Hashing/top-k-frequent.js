class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map()

        for (const num of nums){
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
        }

        const buckets = new Array(nums.length + 1).fill().map(() => [])

        for (const [num, freq] of frequencyMap) {
            buckets[freq].push(num)
        }

        const result = []

        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            result.push(...buckets[i])
        }

        return result.splice(0, k)
    }
}
