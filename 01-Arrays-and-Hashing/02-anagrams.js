class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if (s.length !== t.length ) {
        return false
      }
      
      // O(n^2) solution
      // let tArray = t.split('')
      // for (var char of s){
      //   var charIndexintArray = tArray.indexOf(char)
      //   if (charIndexintArray === -1 ){
      //     return false
      //   }
      //   tArray = t.replace(char, '')
      // }
      
      // return true
      
      // O(n) solution
      
      const charCount = {}
      
      for (var char of s)(
        charCount[char] = (charCount[char] || 0) + 1
      )
      
      for (var char of t) {
        if (!charCount[char]) {
          return false
        }
        charCount[char]--
      }
      
      return true
    }
}