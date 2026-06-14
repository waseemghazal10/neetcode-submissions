class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length != t.length)
            return false;

        const Count = {};

        for(let char of s){
            Count[char] = (Count[char] || 0) + 1;
        }  

        for(let char of t){
            if(!Count[char]){
                return false;
            }
            Count[char]--;
        }
        return true;
    }
}
