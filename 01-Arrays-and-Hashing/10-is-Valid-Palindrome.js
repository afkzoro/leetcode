class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0
        let j = s.length - 1

        while (i < j) {
            if (this.isNonAlphanumeric(s[i])) {
                i++
            }
  
            if (this.isNonAlphanumeric(s[j])) {
                j--
            }
            if (!this.isNonAlphanumeric(s[i]) && !this.isNonAlphanumeric(s[j])) {
                let lowerI = s[i].toLowerCase()
                let lowerJ = s[j].toLowerCase()
                if (lowerI !== lowerJ) {
                    return false
                }
                i++
                j--
            }
        }
        return true
    }

    isNonAlphanumeric(s) {
        return /[^a-zA-Z0-9]/.test(s);
    }


}

