class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        const sMap = {};

        for (let i = 0; i < s.length ; i++){
            sMap[s[i]] = (sMap[s[i]] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++){
            if(sMap[t[i]]){
                sMap[t[i]] -= 1;
            }
            else{
                return false;
            }
        }
        for (let key in sMap){
            if(sMap[key] !== 0) return false;
        }
        return true;
    }
}
