class Solution {
    groupAnagrams(strs) {
        let result = []
        let hash = {}
        
        for(let i = 0; i < strs.length; i++) {
            let key = this.getHash(strs[i])
            
            if (hash[key] === undefined) {
                hash[key] = result.length
                result.push([])
            }
            
            result[hash[key]].push(strs[i])
        }
        return result
    }
    
    getHash(word) {
        const freq = Array(26).fill(0)
        
        for (const letter of word) {
            const position = letter.charCodeAt(0) - 'a'.charCodeAt(0)
            freq[position] += 1
        }
        return freq.join("$")  
    }
}

// Test
const strs = ["act","pots","tops","cat","stop","hat"]
const test = new Solution()
console.log(test.groupAnagrams(strs))