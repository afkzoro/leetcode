class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const lengths = strs.map(str => str.length + ',').join('')
        return lengths + '?' + strs.join('')
    }
    
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []
        const [lengths, concatenated] = str.split('?')
        const lengthsArray = lengths.split(',').filter(x => x)
        
        let start = 0
        for (let length of lengthsArray) {
            length = parseInt(length)
            decoded.push(concatenated.slice(start, start + length))
            start += length
        }
        
        return decoded
    }
}